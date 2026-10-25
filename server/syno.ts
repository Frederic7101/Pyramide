/**
 * Service Syno (mode Dico) : Claude joue le rôle de Syno et devine le mot à partir des briques du joueur.
 * Exécuté côté serveur uniquement (middleware Vite) : la clé API n'est jamais envoyée au navigateur.
 */
import Anthropic from "@anthropic-ai/sdk";
import { briqueDeMemeFamille } from "../src/engine/matching";
import type { DemandeSyno, ReponseSyno } from "../src/engine/synoTypes";
import { demanderClaudeCli, type Lanceur } from "./claudeCli";
import { CONSIGNE_SYNO } from "./consigneSyno";

const MODELE = "claude-opus-5-5";

export const SYSTEME = CONSIGNE_SYNO;

export const SCHEMA = {
  type: "object",
  properties: {
    reponse: { type: "string", description: "La proposition de Syno : un seul mot ou nom, sans article ni explication." },
  },
  required: ["reponse"],
  additionalProperties: false,
} as const;

/** Ce que Syno sait déjà : titre, rang du mot, issue des mots précédents (comme un vrai Syno). */
export function contexteSyno(d: DemandeSyno): string {
  const lignes: string[] = [];
  if (d.titre) lignes.push(`Titre de l'énigme : « ${d.titre} ».`);
  if (d.numero) lignes.push(`Tu cherches le ${d.type === "nom" ? "nom" : "mot"} n°${d.numero}.`);
  for (const p of d.precedents ?? []) {
    const props = p.propositions.map((r) => `« ${r} »`).join(", ");
    lignes.push(`${d.type === "nom" ? "Nom" : "Mot"} n°${p.numero} : ${p.trouve ? `trouvé (« ${p.propositions.at(-1) ?? ""} »)` : `non trouvé (tes propositions : ${props || "aucune"})`}.`);
  }
  return lignes.length > 0 ? `${lignes.join("\n")}\n` : "";
}

/** Construit la demande en langage naturel envoyée au modèle. */
export function construireMessage(d: DemandeSyno): string {
  const contexte = contexteSyno(d);
  const fausses = d.reponsesFausses.length > 0 ? `\nRéponses déjà jugées fausses : ${d.reponsesFausses.map((r) => `« ${r} »`).join(", ")}.` : "";
  if (d.type === "solution") {
    return `${contexte}Les cinq mots de l'énigme ont été joués. Voici l'énigme, avec les mots trouvés replacés (« ____ » pour les mots non trouvés) :\n\n${d.texte ?? ""}\n\nQuelle est la solution de l'énigme ? Donne une réponse courte (un mot ou un groupe nominal).${fausses}`;
  }
  const briques = d.briques.map((b, i) => `${i + 1}. ${b}`).join("\n");
  if (d.type === "nom") {
    const completer = d.completer ? `\nDico t'invite à compléter ta dernière réponse (« Complétez ») : donne le nom complet (prénom, rang ou patronyme composé).` : "";
    return `Épreuve des Noms Propres. Thème de la liste : « ${d.theme ?? "?"} ». Rébus et incitations sont permis ici.\n${contexte}Briques de Dico :\n${briques}${fausses}${completer}\n\nQuel nom propre Dico te fait-il deviner ?`;
  }
  return `${contexte}Mot d'une énigme. Briques de Dico :\n${briques}${fausses}\n\nQuel mot Dico te fait-il deviner ?`;
}

/**
 * Garde : une proposition de la même famille qu'une brique est forcément fausse (Dico ne peut pas employer un mot
 * de la famille du mot à deviner). On la signale comme déjà jugée fausse et on redemande (2 relances au plus).
 */
export async function avecGardeFamille(demande: DemandeSyno, deviner: (d: DemandeSyno) => Promise<ReponseSyno>): Promise<ReponseSyno> {
  let courante = demande;
  let reponse = await deviner(courante);
  for (let essai = 0; essai < 2 && demande.type !== "solution" && briqueDeMemeFamille(reponse.reponse, demande.briques) !== undefined; essai++) {
    courante = { ...courante, reponsesFausses: [...courante.reponsesFausses, reponse.reponse] };
    reponse = await deviner(courante);
  }
  return reponse;
}

/** Erreur de configuration (clé API absente), à signaler clairement au joueur. */
export class ConfigurationSynoError extends Error {}

export function creerClient(apiKey: string | undefined): Anthropic {
  return apiKey ? new Anthropic({ apiKey }) : new Anthropic();
}

/** Demande à Claude la proposition de Syno. */
export async function devinerSyno(client: Anthropic, demande: DemandeSyno): Promise<ReponseSyno> {
  const reponse = await client.beta.messages.create({
    model: MODELE,
    max_tokens: 4000,
    // Repli automatique sur un autre modèle si une réponse est déclinée par les filtres de sécurité.
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    // Deviner un mot est une tâche courte : effort faible pour une réponse rapide.
    output_config: { effort: "low", format: { type: "json_schema", schema: SCHEMA } },
    system: SYSTEME,
    messages: [{ role: "user", content: construireMessage(demande) }],
  });
  if (reponse.stop_reason === "refusal") throw new Error("Syno a décliné la demande.");
  const texte = reponse.content.find((b) => b.type === "text");
  if (!texte || texte.type !== "text") throw new Error("Réponse de Syno vide.");
  const donnees: unknown = JSON.parse(texte.text);
  if (typeof donnees !== "object" || donnees === null || typeof (donnees as ReponseSyno).reponse !== "string") {
    throw new Error("Réponse de Syno mal formée.");
  }
  return { reponse: (donnees as ReponseSyno).reponse.trim() };
}

/** Modèle du mode sans clé (Claude Code). Nom complet : l'alias « sonnet » désignait encore Sonnet 4.6 dans la CLI testée. */
export const MODELE_CLI_SYNO = process.env.PYRAMIDE_MODELE_SYNO || "claude-sonnet-5-5";

/** Variante sans clé API : la proposition de Syno vient de Claude Code. */
export async function devinerSynoCli(demande: DemandeSyno, lanceur?: Lanceur): Promise<ReponseSyno> {
  const donnees = await demanderClaudeCli({ systeme: SYSTEME, message: construireMessage(demande), schema: SCHEMA, modele: MODELE_CLI_SYNO }, lanceur);
  if (typeof donnees !== "object" || donnees === null || typeof (donnees as ReponseSyno).reponse !== "string") {
    throw new Error("Réponse de Syno mal formée.");
  }
  return { reponse: (donnees as ReponseSyno).reponse.trim() };
}
