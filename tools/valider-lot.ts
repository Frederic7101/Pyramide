/**
 * Valide un fichier de contenu avant de le brancher dans src/content/index.ts : règles d'enchaînement
 * (comme npm run valider), jouabilité avec les bonnes réponses, dictionnaire, et doublons avec le
 * contenu déjà publié (identifiants, solutions, réponses, thèmes).
 * Usage : npx tsx tools/valider-lot.ts src/content/<fichier>.ts
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { MOTS_COMPLEMENTAIRES } from "../src/content/motsComplementaires";
import { validerContenu } from "../src/content/validation";
import { creerDictionnaire, motsInconnus } from "../src/engine/dictionnaire";
import { creerEnigme, proposerSolution, repondre, scoreEnigme } from "../src/engine/enigme";
import { normaliser } from "../src/engine/matching";
import { creerNoms, repondreNom, scoreNoms } from "../src/engine/nomsPropres";
import type { Enigme, ListeNomsPropres } from "../src/engine/types";

const fichier = process.argv[2];
if (!fichier) throw new Error("Usage : npx tsx tools/valider-lot.ts src/content/<fichier>.ts");
const module: Record<string, unknown> = await import(pathToFileURL(resolve(fichier)).href);
const tableaux = Object.values(module).filter(Array.isArray) as unknown[][];
const estEnigme = (x: unknown): x is Enigme => typeof x === "object" && x !== null && "mots" in x;
const estListe = (x: unknown): x is ListeNomsPropres => typeof x === "object" && x !== null && "noms" in x;
const enigmes = tableaux.flat().filter(estEnigme);
const listes = tableaux.flat().filter(estListe);

const lignes: string[] = [];
const signaler = (niveau: string, ou: string, message: string) => lignes.push(`  [${niveau}] ${ou} : ${message}`);

for (const p of validerContenu(enigmes, listes)) signaler(p.niveau, `${p.contenuId}, ${p.emplacement}`, p.message);

for (const e of enigmes) {
  try {
    let etat = creerEnigme(e);
    for (const m of e.mots) etat = repondre(etat, m.reponse);
    etat = proposerSolution(etat, e.solution);
    if (scoreEnigme(etat).mots !== 5 || !etat.solutionTrouvee) signaler("erreur", e.id, "non jouable avec les bonnes réponses");
  } catch (err) {
    signaler("erreur", e.id, err instanceof Error ? err.message : String(err));
  }
}
for (const l of listes) {
  try {
    let etat = creerNoms(l);
    for (const n of l.noms) etat = repondreNom(etat, n.reponse);
    if (scoreNoms(etat) !== 4) signaler("erreur", l.id, "non jouable avec les bonnes réponses");
  } catch (err) {
    signaler("erreur", l.id, err instanceof Error ? err.message : String(err));
  }
}

const source: string[] = JSON.parse(readFileSync(createRequire(import.meta.url).resolve("an-array-of-french-words/index.json"), "utf8"));
const dico = creerDictionnaire([...source, ...MOTS_COMPLEMENTAIRES]);
for (const e of enigmes) {
  for (const r of [e.solution, ...(e.solutionVariantes ?? []), ...e.mots.flatMap((m) => [m.reponse, ...(m.variantes ?? [])])]) {
    if (motsInconnus(dico, r).length > 0) signaler("erreur", e.id, `« ${r} » absent du dictionnaire du jeu (le joueur serait averti d'une faute de frappe) : choisir une autre forme ou un autre mot`);
  }
}

// Doublons avec le contenu publié et à l'intérieur du fichier.
// Un fichier déjà branché dans index.ts ne se compare pas à lui-même (réécriture de pistes en place).
const propres = new Set([...enigmes, ...listes].map((c) => c.id));
const ids = new Set([...ENIGMES.map((e) => e.id), ...LISTES_NOMS_PROPRES.map((l) => l.id)].filter((id) => !propres.has(id)));
const solutions = new Map(ENIGMES.filter((e) => !propres.has(e.id)).map((e) => [normaliser(e.solution).replace(/^(le|la|les|l|un|une) /, ""), e.id]));
const noms = new Map(LISTES_NOMS_PROPRES.filter((l) => !propres.has(l.id)).flatMap((l) => l.noms.map((n) => [normaliser(n.reponse), l.id] as const)));
const vus = new Set<string>();
for (const c of [...enigmes, ...listes]) {
  if (ids.has(c.id) || vus.has(c.id)) signaler("erreur", c.id, "identifiant déjà utilisé");
  vus.add(c.id);
}
const solutionsLot = new Map<string, string>();
for (const e of enigmes) {
  const s = normaliser(e.solution).replace(/^(le|la|les|l|un|une) /, "");
  const deja = solutions.get(s) ?? solutionsLot.get(s);
  if (deja) signaler("avertissement", e.id, `solution « ${e.solution} » déjà utilisée par ${deja}`);
  solutionsLot.set(s, e.id);
}
const nomsLot = new Map<string, string>();
for (const l of listes) {
  for (const n of l.noms) {
    const k = normaliser(n.reponse);
    const deja = noms.get(k) ?? nomsLot.get(k);
    if (deja) signaler("avertissement", l.id, `« ${n.reponse} » déjà dans ${deja}`);
    nomsLot.set(k, l.id);
  }
}

const niveaux = [...new Set([...enigmes, ...listes].map((c) => c.difficulte))].join(", ");
console.log(`${fichier} : ${enigmes.length} énigme(s), ${listes.length} liste(s) (niveau ${niveaux || "?"}).`);
console.log(lignes.length === 0 ? "Aucun problème détecté." : `${lignes.length} problème(s) :\n${lignes.join("\n")}`);
process.exitCode = lignes.some((l) => l.includes("[erreur]")) ? 1 : 0;
