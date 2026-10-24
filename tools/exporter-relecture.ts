/**
 * Génère un document Markdown de relecture du contenu (relecture-contenu.md).
 * Usage : npm run relecture
 */
import { writeFileSync } from "node:fs";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { formaterEnchainement } from "../src/content/enchainement";
import { validerContenu } from "../src/content/validation";
import { DIFFICULTES, type Brique, type Difficulte } from "../src/engine/types";

/** Contenus triés par niveau (facile, moyen, difficile), pour une relecture par niveau. */
const parNiveau = <T extends { difficulte: Difficulte }>(contenus: readonly T[]) =>
  [...contenus].sort((a, b) => DIFFICULTES.indexOf(a.difficulte) - DIFFICULTES.indexOf(b.difficulte));

/** Pistes dont Claude n'est pas sûr : à vérifier en priorité dans le Larousse ou le Robert. */
const POINTS_A_VERIFIER: string[] = [
  "e-001, mot 1 : écueil + Monaco → rocher : « Monaco » amène-t-il « rocher » par association (le Rocher), ou est-ce un raccourci ?",
  "e-002, mot 1 : épingles + sapin → aiguilles : « sapin » amène l'homonyme (aiguilles de pin) : relation admise ?",
  "e-003, mot 5 : « métro » remplacé par « train » (pas de synonyme sans même racine) : convoi + rails → train.",
  "e-004, mot 4 : fiasco + cuisinière → four : « fiasco » (sens théâtral) comme synonyme.",
  "e-005, mot 1 : monarque + Lear → roi : la personne et son titre (art. 4.1.3.b) ?",
  "e-005, mot 2 : carreaux + hutte → cases : « hutte » amène l'homonyme case (habitation).",
  "e-010, mot 1 : couverture + tuiles → toits : « couverture » comme synonyme de toit.",
  "e-007, mot 5 : bicyclette + apocope + guidon → vélo : « apocope » après « bicyclette » amène-t-il bien vélo (apocope de vélocipède) ?",
  "e-009, mot 5 : comédienne + Deneuve → actrice : « Deneuve » seul (sans prénom) admis au Larousse ?",
  "e-010, mot 3 : volatiles + hirondelles + Hitchcock → oiseaux : la relation passe par un titre en plusieurs mots (Les Oiseaux).",
  "e-008, mot 1 : maison + apiculteur → ruche : « abeilles » aurait été meilleur en 2e brique, mais c'est le mot n°2 de l'énigme.",
  "Lot 2 (moyen et difficile) : niveau attribué à chaque énigme et liste à confirmer.",
  "Lot 3 (e-301 à e-350, np-301 à np-350) : 50 énigmes et 50 listes difficiles, non relues ; vérifier en priorité le niveau, les familles de racine et les pistes à 2 briques qui mériteraient une incitation.",
  "e-101, mot 3 : révolus + berceau → enfuis : « berceau » évoque « enfant » (son « enf »).",
  "e-102, mot 4 : croisement + autobus → carrefour : « autobus » évoque « car ».",
  "e-105, mot 4 : mistral + Sahara + menuisier → sirocco : « menuisier » évoque « scie » (son « si »).",
  "e-201, mot 4 : ennui + anglicisme + magnifique → spleen : déclinaison « anglicisme » après « ennui », puis « splendide ».",
  "e-202, mot 5 : illusion + Pégase + élégant → chimère : « élégant » évoque « chic » (son « chi »).",
  "e-205, mot 2 : la réponse « aujourd'hui » contient une apostrophe (autorisé, cf. « À savoir » du règlement).",
  "np-201, np-202 : réponses sans prénom (Spinoza, Kant, Botticelli, Titien…) : à confirmer au Larousse.",
  "np-003 : réponses sans prénom (Mozart, Beethoven, Chopin, Ravel), car leur prénom est entre parenthèses au Larousse : à confirmer.",
  "Familles de racine : déclarées de mémoire, elles peuvent être incomplètes (le script ne détecte que les mots déclarés).",
];

const LIBELLE_ROLE = { relation: "relation", declinaison: "déclinaison", incitation: "incitation" } as const;
const LIBELLE_CIBLE = { mot: "le mot", souche: "un mot souche", prefixe: "le préfixe", suffixe: "le suffixe", homonyme: "un homonyme" } as const;

/** Enchaînement au format du règlement, puis le rôle déclaré de chaque brique. */
function cellule(briques: Brique[], reponse: string, mise?: number): string {
  const jouees = mise === undefined ? briques : briques.slice(0, mise);
  const roles = jouees.map((b, k) => {
    const role = b.role ? LIBELLE_ROLE[b.role] : "rôle non déclaré";
    const detail = [b.relation, b.nature, b.cible && `vers ${LIBELLE_CIBLE[b.cible]}`, b.amene && `évoque « ${b.amene} »`, b.son && `son commun ${b.position === "fin" ? "en fin" : b.position === "milieu" ? "au milieu" : "en début"} de mot « ${b.sonEvoque ? `${b.sonEvoque} / ` : ""}${b.son} »`, b.regle && `art. ${b.regle}`, b.leveAmbiguite && `lève une ambiguïté : ${b.leveAmbiguite}`].filter(Boolean).join(", ");
    return `${k + 1}. ${b.texte} : ${role}${detail ? ` (${detail})` : ""}`;
  });
  const horsMise = mise !== undefined && briques.length > mise ? [`*non jouées : ${briques.slice(mise).map((b) => b.texte).join(", ")}*`] : [];
  return [`**${formaterEnchainement(jouees, reponse)}**`, ...roles, ...horsMise].join("<br>");
}

const lignes: string[] = [];
lignes.push("# Relecture du contenu", "");
lignes.push(`Généré par \`npm run relecture\` : ${ENIGMES.length} énigmes, ${LISTES_NOMS_PROPRES.length} listes de noms propres.`, "");
lignes.push("Chaque piste est présentée comme dans le règlement : **brique 1 + brique 2 → mot**. Ce qui se juge, c'est l'enchaînement : la 1re brique est-elle en relation avec le mot (ou un mot souche, un homonyme) ? Le rôle déclaré de chaque brique est-il juste ? La famille de racine est-elle complète ? Notez vos corrections dans la colonne « Avis ».", "");

const problemes = validerContenu(ENIGMES, LISTES_NOMS_PROPRES);
lignes.push("## Résultat du script de validation", "");
lignes.push(problemes.length === 0 ? "Aucun problème détecté (contrôles mécaniques seulement)." : problemes.map((p) => `- [${p.niveau}] ${p.contenuId}, ${p.emplacement} : ${p.message}`).join("\n"), "");

lignes.push("Les **conseils** signalent des enchaînements valides mais améliorables (1re brique en association d'idées alors qu'un synonyme ou un contraire est préférable ; incitation placée ailleurs qu'en dernière brique). Ceux qui restent concernent des mots sans bon synonyme ni contraire : à garder, ou à remplacer par un autre mot.", "");
lignes.push("## Points douteux à vérifier en priorité", "", ...POINTS_A_VERIFIER.map((p) => `- [ ] ${p}`), "");

lignes.push("## Énigmes", "");
for (const e of parNiveau(ENIGMES)) {
  const totalMises = e.mots.reduce((s, m) => s + m.mise, 0);
  lignes.push(`### ${e.id} : ${e.titre} (${e.difficulte})`, "");
  lignes.push(`> ${e.texte}`, "");
  lignes.push(`**Solution** : ${e.solution}${e.solutionVariantes?.length ? ` (acceptées : ${e.solutionVariantes.join(", ")})` : ""}  `);
  lignes.push(`**Mises** : ${totalMises} / 13`, "");
  lignes.push("| # | Réponse (variantes) | Mise | Enchaînement et rôle des briques | Famille de racine (interdite) | Avis |", "|---|---|---|---|---|---|");
  for (const m of e.mots) {
    const variantes = m.variantes?.length ? ` (${m.variantes.join(", ")})` : "";
    lignes.push(`| ${m.rang} | **${m.reponse}**${variantes} | ${m.mise} | ${cellule(m.briques, m.reponse, m.mise)} | ${m.famille?.join(", ") ?? ""} | |`);
  }
  lignes.push("");
}

lignes.push("## Noms Propres", "");
for (const l of parNiveau(LISTES_NOMS_PROPRES)) {
  lignes.push(`### ${l.id} : ${l.theme} (${l.difficulte})`, "");
  lignes.push("| # | Réponse (variantes) | Réponse partielle → « Complétez » | Enchaînement et rôle des briques | Avis |", "|---|---|---|---|---|");
  for (const n of l.noms) {
    const variantes = n.variantes?.length ? ` (${n.variantes.join(", ")})` : "";
    lignes.push(`| ${n.rang} | **${n.reponse}**${variantes} | ${n.partielles?.join(", ") ?? ""} | ${cellule(n.briques, n.reponse)} | |`);
  }
  lignes.push("");
}

writeFileSync("relecture-contenu.md", lignes.join("\n"), "utf8");
console.log("Document écrit : relecture-contenu.md");
