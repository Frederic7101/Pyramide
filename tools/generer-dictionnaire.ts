/**
 * Génère public/dictionnaire.txt : la liste des mots français (formes fléchies comprises, accents
 * conservés pour l'affichage des suggestions), pour signaler les fautes de frappe.
 * Source : an-array-of-french-words (licence MIT, ~336 000 mots). Usage : npm run dictionnaire
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { MOTS_COMPLEMENTAIRES } from "../src/content/motsComplementaires";

const require = createRequire(import.meta.url);
const source: string[] = JSON.parse(readFileSync(require.resolve("an-array-of-french-words/index.json"), "utf8"));

// Les mots composés (« porte-monnaie ») sont gardés entiers ; leurs parties sont aussi des mots.
const mots = new Set([...source, ...MOTS_COMPLEMENTAIRES].map((m) => m.trim().toLowerCase()).filter((m) => m !== ""));

mkdirSync("public", { recursive: true });
writeFileSync("public/dictionnaire.txt", [...mots].sort().join("\n"), "utf8");
console.log(`public/dictionnaire.txt : ${mots.size} formes.`);
