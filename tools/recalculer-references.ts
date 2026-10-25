/**
 * Recalcule le bonus et le score des références de Syno ordinateur selon la règle du bonus
 * « 13 − briques MISÉES » (accordé dès que les 5 mots sont trouvés), sans refaire les tests :
 * les mots trouvés et la solution sont déjà dans chaque référence, les mises dans le contenu.
 * Usage : npx tsx tools/recalculer-references.ts   (réécrit referenceSyno.ts et referenceModeles.ts)
 */
import { writeFileSync } from "node:fs";
import { REFERENCES_MODELES } from "../src/content/referenceModeles";
import { REFERENCE_SYNO } from "../src/content/referenceSyno";
import { ENIGMES } from "../src/content/index";
import { briquesMisees } from "../src/engine/enigme";
import { BRIQUES_PAR_ENIGME } from "../src/engine/types";
import { empreinteEnigme } from "../src/historique/empreinte";
import type { ReferenceSyno } from "../src/historique/reference";

function recalculer(refs: Record<string, ReferenceSyno>): { refs: Record<string, ReferenceSyno>; modifiees: number } {
  let modifiees = 0;
  const sortie: Record<string, ReferenceSyno> = {};
  for (const [id, ref] of Object.entries(refs)) {
    const enigme = ENIGMES.find((e) => e.id === id);
    if (ref.type !== "enigme" || !enigme || empreinteEnigme(enigme) !== ref.empreinte) {
      sortie[id] = ref;
      continue;
    }
    const trouves = ref.trouveA.filter((t) => t !== null).length;
    const bonus = trouves === enigme.mots.length ? Math.max(0, BRIQUES_PAR_ENIGME - briquesMisees(enigme)) : 0;
    const score = trouves + bonus + (ref.solutionTrouvee ? 1 : 0);
    if (bonus !== ref.bonus || score !== ref.score) modifiees++;
    sortie[id] = { ...ref, bonus, score };
  }
  return { refs: sortie, modifiees };
}

const entete = `import type { ReferenceSyno } from "../historique/reference";\n\n`;
const principale = recalculer(REFERENCE_SYNO);
writeFileSync(
  "src/content/referenceSyno.ts",
  `${entete}/** Généré par \`npx tsx tools/test-syno-sequentiel.ts reference <dossier>...\` : ne pas modifier à la main. */\nexport const REFERENCE_SYNO: Record<string, ReferenceSyno> = ${JSON.stringify(principale.refs, null, 2)};\n`,
  "utf8",
);
let total = principale.modifiees;
const parModele: Record<string, Record<string, ReferenceSyno>> = {};
for (const [nom, refs] of Object.entries(REFERENCES_MODELES)) {
  const r = recalculer(refs);
  parModele[nom] = r.refs;
  total += r.modifiees;
}
writeFileSync(
  "src/content/referenceModeles.ts",
  `${entete}/** Généré par \`npx tsx tools/test-syno-sequentiel.ts references-modeles <Nom=dossier>...\` : ne pas modifier à la main. */\nexport const REFERENCES_MODELES: Record<string, Record<string, ReferenceSyno>> = ${JSON.stringify(parModele, null, 2)};\n`,
  "utf8",
);
console.log(`${total} référence(s) recalculée(s).`);
