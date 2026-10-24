/**
 * Tire un échantillon fixe de fiches par niveau (énigmes et listes de noms propres), avec une graine,
 * pour comparer plusieurs modèles de Syno sur exactement les mêmes contenus.
 * Usage : npx tsx tools/echantillon.ts <fichier.json> [nombre par niveau] [graine] [sous-ensemble.json]
 * Avec un 4e argument, le tirage se fait parmi les contenus d'un échantillon existant (réduction).
 */
import { writeFileSync } from "node:fs";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { REFERENCE_SYNO } from "../src/content/referenceSyno";
import { empreinteEnigme, empreinteNoms } from "../src/historique/empreinte";
import { DIFFICULTES } from "../src/engine/types";

const [fichier, nombreTexte, graineTexte, parmiFichier] = process.argv.slice(2);
import { readFileSync } from "node:fs";
const parmi: Set<string> | null = parmiFichier ? new Set(JSON.parse(readFileSync(parmiFichier, "utf8")) as string[]) : null;
const nombre = Number(nombreTexte) || 10;
let graine = Number(graineTexte) || 20261024;
const hasard = () => {
  // mulberry32
  graine = (graine + 0x6d2b79f5) >>> 0;
  let t = graine;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const tirer = <T extends { id: string }>(liste: T[]): string[] => {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(hasard() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie.slice(0, nombre).map((c) => c.id).sort();
};

const ids: string[] = [];
for (const niveau of DIFFICULTES) {
  // Seuls les contenus dont la référence d'Opus est à jour peuvent servir de comparaison.
  const enigmes = ENIGMES.filter((e) => e.difficulte === niveau && REFERENCE_SYNO[e.id]?.empreinte === empreinteEnigme(e) && (!parmi || parmi.has(e.id)));
  const listes = LISTES_NOMS_PROPRES.filter((l) => l.difficulte === niveau && REFERENCE_SYNO[l.id]?.empreinte === empreinteNoms(l) && (!parmi || parmi.has(l.id)));
  const e = tirer(enigmes);
  const l = tirer(listes);
  console.log(`${niveau} : ${e.join(", ")} | ${l.join(", ")}`);
  ids.push(...e, ...l);
}
writeFileSync(fichier, JSON.stringify(ids, null, 2), "utf8");
console.log(`${ids.length} contenus écrits dans ${fichier}`);
