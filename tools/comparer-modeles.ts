/**
 * Compare plusieurs modèles de Syno sur un même échantillon de contenus.
 * Usage : npx tsx tools/comparer-modeles.ts <échantillon.json> <sortie.md> <nom=dossier|nom=reference>...
 * « reference » lit src/content/referenceSyno.ts (test à l'aveugle d'Opus 5.5) ; un dossier est un test
 * joué avec tools/test-syno-sequentiel.ts.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { REFERENCE_SYNO } from "../src/content/referenceSyno";
import { creerEnigme, proposerSolution, repondre, scoreEnigme } from "../src/engine/enigme";
import { creerNoms, repondreNom, scoreNoms } from "../src/engine/nomsPropres";
import { DIFFICULTES } from "../src/engine/types";

interface Resultat {
  score: number;
  trouveA: (number | null)[];
  solution?: boolean;
  bonus?: number;
}

const [echantillon, sortie, ...modeles] = process.argv.slice(2);
const ids = new Set<string>(JSON.parse(readFileSync(echantillon, "utf8")));

function depuisDossier(dossier: string): Record<string, Resultat> {
  const reponses: Record<string, string[]> = JSON.parse(readFileSync(join(dossier, "etat.json"), "utf8")).reponses;
  const r: Record<string, Resultat> = {};
  for (const e of ENIGMES.filter((x) => ids.has(x.id))) {
    const fin = (reponses[e.id] ?? []).reduce((a, x) => (a.phase === "mots" ? repondre(a, x) : proposerSolution(a, x)), creerEnigme(e));
    const s = scoreEnigme(fin);
    r[e.id] = { score: s.total, trouveA: fin.resultats.map((x) => (x.statut === "trouve" ? x.briquesUtilisees : null)), solution: fin.solutionTrouvee, bonus: s.bonus };
  }
  for (const l of LISTES_NOMS_PROPRES.filter((x) => ids.has(x.id))) {
    const fin = (reponses[l.id] ?? []).reduce((a, x) => repondreNom(a, x), creerNoms(l));
    r[l.id] = { score: scoreNoms(fin), trouveA: fin.resultats.map((x) => (x.statut === "trouve" ? x.briquesUtilisees : null)) };
  }
  return r;
}
const depuisReference = (): Record<string, Resultat> =>
  Object.fromEntries([...ids].map((id) => [id, { score: REFERENCE_SYNO[id].score, trouveA: REFERENCE_SYNO[id].trouveA, solution: REFERENCE_SYNO[id].solutionTrouvee, bonus: REFERENCE_SYNO[id].bonus }]));

const donnees = modeles.map((m) => {
  const [nom, source] = m.split("=");
  return { nom, resultats: source === "reference" ? depuisReference() : depuisDossier(source) };
});

const moy = (xs: number[]) => (xs.length ? (xs.reduce((a, b) => a + b, 0) / xs.length).toFixed(2) : "—");
const lignes = [`# Comparaison de modèles de Syno`, "", `Échantillon fixe : ${ids.size} contenus (${echantillon}). Même prompt, même méthode (test à l'aveugle séquentiel).`, ""];
const niveauDe = (id: string) => (ENIGMES.find((e) => e.id === id) ?? LISTES_NOMS_PROPRES.find((l) => l.id === id)!).difficulte;
const idsEnigmes = [...ids].filter((id) => id.startsWith("e-"));
const idsNoms = [...ids].filter((id) => id.startsWith("np-"));

function tableau(titre: string, filtre: (id: string) => boolean): void {
  lignes.push(`## ${titre}`, "", `| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |`, "|---|---|---|---|---|---|---|---|---|");
  for (const d of donnees) {
    const e = idsEnigmes.filter(filtre).map((id) => d.resultats[id]);
    const n = idsNoms.filter(filtre).map((id) => d.resultats[id]);
    const mots = e.flatMap((x) => x.trouveA);
    const compte = (k: number) => mots.filter((x) => x === k).length;
    lignes.push(`| ${d.nom} | ${moy(e.map((x) => x.score))} | ${compte(1)} | ${compte(2)} | ${compte(3)} | ${mots.filter((x) => x === null).length} | ${e.filter((x) => x.solution).length}/${e.length} | ${moy(e.map((x) => x.bonus ?? 0))} | ${n.reduce((a, x) => a + x.score, 0)}/${n.length * 4} |`);
  }
  lignes.push("");
}
tableau("Tous niveaux", () => true);
for (const niveau of DIFFICULTES) tableau(`Niveau ${niveau}`, (id) => niveauDe(id) === niveau);

lignes.push("## Contenus où les modèles diffèrent", "", `| Contenu | Niveau | ${donnees.map((d) => d.nom).join(" | ")} |`, `|---|---|${donnees.map(() => "---").join("|")}|`);
for (const id of [...ids].sort()) {
  const vals = donnees.map((d) => d.resultats[id].score);
  if (new Set(vals).size > 1) lignes.push(`| ${id} | ${niveauDe(id)} | ${vals.join(" | ")} |`);
}
writeFileSync(sortie, lignes.join("\n") + "\n", "utf8");
console.log(lignes.slice(0, 40).join("\n"));
