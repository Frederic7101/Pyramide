/**
 * Service arbitre (mode Dico) : Claude juge si l'enchaînement de briques du joueur respecte le règlement.
 * Il connaît le mot à deviner (contrairement à Syno) et s'exécute côté serveur uniquement.
 */
import type Anthropic from "@anthropic-ai/sdk";
import { MOTIFS } from "../src/arbitre/types";
import type { DemandeArbitre, VerdictArbitre } from "../src/engine/synoTypes";
import { demanderClaudeCli, type Lanceur } from "./claudeCli";

const MODELE = "claude-opus-5-5";

export const SYSTEME = `Tu es l'arbitre du jeu de mots « Pyramide » (règlement de la Fédération Francophone des Clubs Pyramide, en vigueur au 1er septembre 2026). Dico fait deviner un mot à Syno avec des « briques » (propositions). On te donne le mot à deviner et l'enchaînement de briques de Dico ; tu juges si la DERNIÈRE brique est permise dans cet enchaînement. Les briques précédentes ont déjà été acceptées (parfois après contestation du joueur) : ne les remets pas en cause, prends-les comme contexte.

Ce qui se juge, c'est l'ENCHAÎNEMENT relié au mot (« brique 1 + brique 2 → mot ») : les mêmes mots peuvent être valides dans un ordre et interdits dans l'autre. Un mot est rarement invalide en lui-même (surtout s'il n'existe pas).

Règles (énigmes, règles générales) :
- Interdit : tout mot de même racine que le mot à deviner (ou qu'un de ses homonymes visés), selon le Petit Larousse, le Petit Robert ou le Lexique FFCP. En cas d'étymologie incertaine, le doute profite au joueur. Une altération est une racine commune ; « d'après » n'est qu'un glissement.
- La 1re brique doit être en RELATION avec le mot, un de ses mots souches ou un homonyme : synonyme, contraire ou association d'idées (liste exhaustive). Associations admises : substantif/adjectif souvent employés ensemble ; personne et son titre/fonction ; nom propre et lieu associé (département/préfecture, pays/capitale) ; titres d'œuvres et monuments si la relation est respectée ; proverbes et expressions ; marques en un mot.
- Brique « contraire » : mot-consigne qui demande à Syno de dire le contraire du sens de la 1re brique ou de sa réponse précédente. Elle est permise (ne la juge ni comme un mot sans relation ni comme une incitation) ; juge l'enchaînement avec le contraire visé.
- Tout raccourci est proscrit (ex. « défenestration » pour « déportation »).
- On ne commence jamais par faire deviner un préfixe ou un suffixe : le mot souche d'abord, puis le préfixe ou le suffixe (« Henri IV + Baygon → régicide » autorisé, « Baygon + Henri IV » interdit). Les suffixes à valeur de racine (-cide, -vore, -logie, -graphie, -phile, -phobe, -cratie…) sont soumis à la règle de racine.
- Déclinaison : après avoir amené le mot souche, Dico peut préciser la nature (« verbe », « adjectif », « adverbe »…), la longueur (« apocope », « aphérèse ») ou la dérivation (« doctrine », « anglicisme »…). Interdit de décliner un homonyme pour obtenir un mot de racine différente.
- Incitation : brique sans relation de sens, qui évoque un mot ayant en commun avec le mot à deviner un son équivalent, le plus souvent au début, parfois à la fin. Le son doit se prononcer EXACTEMENT comme cette partie du mot (« onéreux » → « cher » [ʃɛʁ] ne convient pas pour ro-cher [ʃe] ; « bas » → « haut » [o] convient pour au-jourd'hui). Une seule par mot, jamais en 1re brique. Si Dico commence (hors relation) par « verbe », « adverbe », « substantif », « nom », « mot », « adjectif », « vocable », « monosyllabique », « aphérèse », « apocope », « abréviation », « masculin », « féminin », « pluriel », « singulier » ou dérivés, l'incitation n'est permise qu'à partir de la 3e brique. Si l'incitation et le mot qu'elle amène ont une racine commune (« ennemi » → « ami »), ce mot ne doit pas figurer en entier dans le mot à deviner (« ennemi » interdit pour « amidon »). En revanche, le mot évoqué peut avoir la même racine que le mot à deviner : « faible » → « fort » → ef-fort est permis, car « faible » et « fort » n'ont pas la même racine.
- Rébus interdit : juxtaposer des mots sans relation avec le mot à deviner (deux incitations).
- Consonance interdite quand le premier mot n'a aucune relation (« bateau » pour « râteau »).
- Prononciation : seule la phonétique des dictionnaires compte (« do » pour « raie » interdit : ré ≠ raie).
- Nombres : permis (« un », « neuf », « dix », 10…) comme n'importe quel mot ; seules les DATES (années, jours) sont interdites. Ne refuse jamais une brique parce que c'est un nombre ou un chiffre, ni parce que c'est un petit mot (« un », « une »…) qui a aussi un autre sens.
- Énigmes : une brique est UN SEUL mot (un mot composé avec trait d'union, comme « papier-toilette », compte pour un) ; plusieurs mots séparés (« petit canard », « bas de laine ») sont interdits, sauf un nom propre. Cette règle ne s'applique pas aux Noms Propres.
- Outils interdits : dates, verlan, lettre de l'alphabet pour indiquer une lettre du mot, anagramme sans rapport, mot-valise, mot erroné ou inexistant, mot d'une locution qui n'existe pas seul, mot étranger absent des dictionnaires (traduction), associer ou dissocier des mots pour en créer un troisième.
- Noms propres dans les briques : seuls les mots du NOM lui-même sont interdits, pas ceux d'un surnom (« Saint » est permis pour Louis IX, dit Saint Louis : seul « Louis » est interdit) ; en revanche un DIMINUTIF du nom ou d'un de ses mots est interdit (« Cloclo » pour Claude François, « Indy » pour Indiana Jones) ; tels qu'au Larousse ; titres (général, monsieur, père…) et qualificatifs (« le Hardi ») interdits ; initiales de prénom interdites ; surnoms et pseudonymes en un seul mot permis ; marques, titres d'œuvres, groupes en un seul mot permis (sauf s'ils contiennent 3 lettres consécutives du mot à deviner, phonétiquement), en plusieurs mots interdits.

Dico, comme Syno, ne découvre les mots d'une énigme qu'un à un : il connaît le titre, les mots déjà joués, mais ni les mots suivants ni la solution. S'il emploie par hasard un mot suivant ou la solution comme brique, signale-le avec certain=false (le doute profite au joueur).

Épreuve des Noms Propres : mêmes règles, SAUF que les rébus sont permis, les incitations sont libres (dès la 1re brique, répétables) ; les petits mots (le, la, les, un, une, des, à, de, du, au, et, en) peuvent être prononcés même s'ils figurent dans le nom.

Juge avec rigueur mais sans excès : n'invalide que ce que le règlement interdit. Si tu hésites (étymologie incertaine, relation discutable), réponds valide=false avec certain=false : le doute profite au joueur. Réponds valide=true quand l'enchaînement est conforme. Quand il ne l'est pas, indique toujours l'article du règlement (ex. « 4 » racine, « 4.1 » relation, « 4.3.1 » déclinaison, « 4.3.2.b » préfixe/suffixe, « 4.3.2.d » rébus, « 4.3.3 » incitation, « 4.3.4 » consonance, « 4.4 » prononciation, « 4.2.1 » outils).`;

export const SCHEMA = {
  type: "object",
  properties: {
    valide: { type: "boolean", description: "Vrai si l'enchaînement respecte le règlement jusqu'à la dernière brique." },
    certain: { type: "boolean", description: "Faux en cas de doute (étymologie incertaine, relation discutable)." },
    motif: {
      type: "string",
      enum: [...MOTIFS.map((m) => m.id), "aucun"],
      description: "Motif de l'invalidité ; « aucun » si l'enchaînement est valide.",
    },
    regle: { type: "string", description: "Article du règlement concerné (ex. « 4.3.3 »), vide si valide." },
    explication: { type: "string", description: "Explication courte en français pour le joueur (une ou deux phrases)." },
  },
  required: ["valide", "certain", "motif", "regle", "explication"],
  additionalProperties: false,
} as const;

/** Construit la demande en langage naturel envoyée à l'arbitre. */
export function construireMessageArbitre(d: DemandeArbitre): string {
  const epreuve = d.type === "nom" ? `Épreuve des Noms Propres (thème : « ${d.theme ?? "?"} »).` : "Épreuve des Énigmes (règles générales).";
  const variantes = d.variantes?.length ? ` (formes acceptées : ${d.variantes.join(", ")})` : "";
  const surnoms = d.surnoms?.length ? `
Surnoms acceptés comme réponse mais qui ne font PAS partie du nom (leurs mots sont permis comme briques, sauf ceux qui sont aussi dans le nom) : ${d.surnoms.join(", ")}.` : "";
  const famille = d.famille?.length ? `\nMots de même racine déclarés : ${d.famille.join(", ")}.` : "";
  const briques = d.briques.map((b, i) => `${i + 1}. ${b}`).join("\n");
  const acquises = d.briques.length > 1 ? `\nLes briques 1 à ${d.briques.length - 1} ont déjà été acceptées : ne juge que la brique n°${d.briques.length}.` : "";
  return `${epreuve}\nMot à deviner : « ${d.motADeviner} »${variantes}.${surnoms}${famille}\nEnchaînement de Dico :\n${briques}${acquises}\n\nLa dernière brique (n°${d.briques.length}) est-elle permise dans cet enchaînement ?`;
}

/** Vérifie la forme du verdict renvoyé par le modèle. */
export function lireVerdict(texte: string): VerdictArbitre {
  const v: unknown = JSON.parse(texte);
  if (typeof v !== "object" || v === null) throw new Error("Verdict de l'arbitre mal formé.");
  const o = v as Record<string, unknown>;
  if (typeof o.valide !== "boolean" || typeof o.certain !== "boolean" || typeof o.explication !== "string") {
    throw new Error("Verdict de l'arbitre mal formé.");
  }
  // « aucun » (enchaînement valide) ou motif inconnu : pas de motif retenu.
  const motif = typeof o.motif === "string" && MOTIFS.some((m) => m.id === o.motif) ? o.motif : null;
  return { valide: o.valide, certain: o.certain, motif: o.valide ? null : (motif ?? "autre"), regle: typeof o.regle === "string" ? o.regle : "", explication: o.explication };
}

/** Demande son verdict à l'arbitre. */
export async function arbitrer(client: Anthropic, demande: DemandeArbitre): Promise<VerdictArbitre> {
  const reponse = await client.beta.messages.create({
    model: MODELE,
    max_tokens: 8000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    // Juger demande plus de réflexion que deviner : effort moyen.
    output_config: { effort: "medium", format: { type: "json_schema", schema: SCHEMA } },
    system: SYSTEME,
    messages: [{ role: "user", content: construireMessageArbitre(demande) }],
  });
  if (reponse.stop_reason === "refusal") throw new Error("L'arbitre a décliné la demande.");
  const texte = reponse.content.find((b) => b.type === "text");
  if (!texte || texte.type !== "text") throw new Error("Verdict de l'arbitre vide.");
  return lireVerdict(texte.text);
}

/** Modèle du mode sans clé : juger demande plus de réflexion. « opus » désigne Opus 4.6 dans la CLI testée (Opus 5.5 y est refusé, CLI trop ancienne). */
export const MODELE_CLI_ARBITRE = process.env.PYRAMIDE_MODELE_ARBITRE || "opus";

/** Variante sans clé API : le verdict vient de Claude Code. */
export async function arbitrerCli(demande: DemandeArbitre, lanceur?: Lanceur): Promise<VerdictArbitre> {
  const donnees = await demanderClaudeCli({ systeme: SYSTEME, message: construireMessageArbitre(demande), schema: SCHEMA, modele: MODELE_CLI_ARBITRE }, lanceur);
  return lireVerdict(JSON.stringify(donnees));
}
