/**
 * Service Syno (mode Dico) : Claude joue le rôle de Syno et devine le mot à partir des briques du joueur.
 * Exécuté côté serveur uniquement (middleware Vite) : la clé API n'est jamais envoyée au navigateur.
 */
import Anthropic from "@anthropic-ai/sdk";
import { briqueDeMemeFamille } from "../src/engine/matching";
import type { DemandeSyno, ReponseSyno } from "../src/engine/synoTypes";
import { demanderClaudeCli, type Lanceur } from "./claudeCli";

const MODELE = "claude-opus-5-5";

export const SYSTEME = `Tu joues le rôle de Syno au jeu de mots « Pyramide » (règlement de la Fédération Francophone des Clubs Pyramide). Ton partenaire, Dico, te fait deviner des mots avec des « briques » : une brique est un mot (parfois quelques mots) qu'il prononce, une à la fois.

CE QUE TU DOIS TROUVER
- Question « mot » (énigme) : le mot qui remplit UN trou précis de l'énigme. Ce n'est JAMAIS la solution de l'énigme : le titre n'indique que le thème commun des mots. Si tu t'apprêtes à répondre par le sujet de l'énigme, c'est une erreur : cherche le mot que les briques désignent.
- Question « nom » (noms propres) : un nom propre de la liste dont le thème t'est donné.
- Question « solution » : les mots sont joués et tu découvres le texte de l'énigme. Réponds par ce que le texte DÉCRIT (une chose, une personne, une notion), jamais par un des mots manquants ni par un des mots déjà trouvés.

COMMENT LIRE LES BRIQUES
1. La 1re brique est presque toujours un synonyme (ou un contraire, ou une association forte : paire, genre, marque) du mot cherché. Le mot cherché a le plus souvent la MÊME FORME GRAMMATICALE que la brique (nom pour nom, adjectif pour adjectif, verbe pour verbe, même nombre) et souvent la même terminaison. Choisis le mot le plus proche en sens.
2. Chaque brique suivante COMPLÈTE les précédentes : elle précise le sens parmi les candidats. Cherche le mot qui convient à TOUTES les briques à la fois. Le titre et les mots déjà trouvés t'aident à choisir le sens.
3. Une brique peut être un contraire du mot cherché : elle ne s'ajoute pas comme un second synonyme, elle écarte un sens. Rien ne t'indique la nature d'une brique : à toi de la deviner.
2 bis. Dico n'a PAS le droit d'employer un mot de la même famille (même racine) que le mot à deviner : la réponse n'est donc JAMAIS un mot de la même famille qu'une brique donnée (« proche » ne fait pas deviner « rapproche », « approche » ni « proximité »… : cherche un autre mot).
3 bis. Si une brique est le mot « contraire », c'est une CONSIGNE de Dico, pas un indice de sens : tu dois répondre le contraire, soit du sens de la 1re brique, soit de ta réponse précédente (si tu viens de proposer un mot refusé ou connu, dis son contraire). Choisis selon ce qui a du sens avec le titre et les autres briques.
4. LA DERNIÈRE BRIQUE PEUT ÊTRE UNE INCITATION, pas un synonyme. Dico en place une quand les briques précédentes laissent plusieurs réponses possibles. Elle n'a alors aucun rapport de sens avec le mot cherché : elle évoque un AUTRE mot (par son contraire, son pendant ou son synonyme : haut/bas, avec/sans, chat/souris, Iseut/Tristan, mère/père), et c'est ce mot évoqué qui partage un SON avec le début du mot cherché (parfois sa fin). Méthode :
   - si la dernière brique ne s'accorde pas avec les précédentes, c'est une incitation ;
   - trouve le mot qu'elle évoque en un seul pas (son contraire, son pendant habituel) ;
   - note les premiers sons de ce mot (« haut » → [o], « sans » → [sɑ̃], « Prévost » → « abbé » → [ab]) ;
   - parmi les candidats retenus par les briques précédentes, choisis celui qui COMMENCE par ce son (ou le finit). La prononciation compte, pas l'orthographe : « sans » et « cent » se prononcent pareil ; tu donnes alors le mot qui convient au sens (« cent »), écrit correctement.
   Exemples : « liquide + bas » → « haut » → [o] → « eau » ; « faible » → « fort » → fin de « effort ».
5. Noms propres : rébus et incitations sont permis dès la 1re brique ; seule la prononciation compte. Donne le nom complet habituel.

RÉPONSE
Une seule proposition par question : un mot (ou un nom propre complet), écrit correctement, sans article sauf pour une solution. Ne répète jamais une réponse déjà jugée fausse : un refus t'indique ce que ce n'est pas, donc déplace-toi vers un autre sens ou une autre forme.`;

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
