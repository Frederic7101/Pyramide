/**
 * Rapport des évaluations exportées depuis le jeu (onglet « Évaluations ») : contenus à reclasser,
 * notes moyennes, pistes mal notées avec leurs commentaires. Sert à améliorer la génération des
 * énigmes et des pistes, et leur classement par niveau.
 * Usage : npm run evaluations -- evaluations-AAAA-MM-JJ.json [autre-fichier.json …]
 */
import { readFileSync, writeFileSync } from "node:fs";
import { creerEvaluations } from "../src/arbitre/evaluations";
import { pistesFaibles, synthetiserContenus } from "../src/arbitre/syntheseEvaluations";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";

const fichiers = process.argv.slice(2);
if (fichiers.length === 0) {
  console.error("Indiquez le ou les fichiers exportés : npm run evaluations -- evaluations.json");
  process.exit(1);
}

const evaluations = creerEvaluations(null);
for (const fichier of fichiers) evaluations.importer(readFileSync(fichier, "utf8"));
const toutes = evaluations.lister();
const syntheses = synthetiserContenus(toutes);
const titre = (id: string) => ENIGMES.find((e) => e.id === id)?.titre ?? LISTES_NOMS_PROPRES.find((l) => l.id === id)?.theme ?? "?";

const lignes: string[] = ["# Rapport des évaluations", "", `${toutes.length} évaluation(s), ${syntheses.length} contenu(s) évalué(s).`, ""];

const aReclasser = syntheses.filter((s) => s.reclasser);
lignes.push("## Contenus à reclasser", "");
lignes.push(aReclasser.length === 0 ? "Aucun." : aReclasser.map((s) => `- **${s.contenuId}** (${titre(s.contenuId)}) : ${s.difficulteAnnoncee} → **${s.niveauSuggere}** (ressenti : facile ${s.ressenti.facile}, moyen ${s.ressenti.moyen}, difficile ${s.ressenti.difficile})`).join("\n"), "");

lignes.push("## Notes par contenu (les plus faibles d'abord)", "", "| Contenu | Titre ou thème | Évaluations | Note moyenne | Commentaires |", "|---|---|---|---|---|");
for (const s of [...syntheses].sort((a, b) => a.noteMoyenne - b.noteMoyenne)) {
  lignes.push(`| ${s.contenuId} | ${titre(s.contenuId)} | ${s.nombre} | ${s.noteMoyenne} / 5 | ${s.commentaires.join(" · ")} |`);
}
lignes.push("");

const faibles = pistesFaibles(toutes);
lignes.push("## Pistes à réécrire (2 / 5 ou moins)", "");
lignes.push(faibles.length === 0 ? "Aucune." : faibles.map((p) => `- ${p.contenuId}, mot n°${p.rangMot} : **${p.briques.join(" + ")} → ${p.motADeviner}** (${p.noteMoyenne} / 5)${p.commentaires.length ? ` — ${p.commentaires.join(" · ")}` : ""}`).join("\n"), "");

writeFileSync("rapport-evaluations.md", lignes.join("\n"), "utf8");
console.log(`Rapport écrit : rapport-evaluations.md (${toutes.length} évaluations).`);
