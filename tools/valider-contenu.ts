/**
 * Valide tout le contenu du jeu et affiche un rapport.
 * Usage : npm run valider
 * Code de sortie 1 s'il y a au moins une erreur (les avertissements sont à vérifier à la main).
 */
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { REFERENCE_SYNO } from "../src/content/referenceSyno";
import { validerContenu, type Probleme } from "../src/content/validation";
import { empreinteEnigme, empreinteNoms } from "../src/historique/empreinte";

const problemes = validerContenu(ENIGMES, LISTES_NOMS_PROPRES);
const erreurs = problemes.filter((p) => p.niveau === "erreur");
const avertissements = problemes.filter((p) => p.niveau === "avertissement");
const conseils = problemes.filter((p) => p.niveau === "conseil");

function afficher(p: Probleme): void {
  const regle = p.regle ? ` (art. ${p.regle})` : "";
  console.log(`  [${p.niveau}] ${p.contenuId}, ${p.emplacement} : ${p.message}${regle}`);
}

console.log(`Contenu analysé : ${ENIGMES.length} énigme(s), ${LISTES_NOMS_PROPRES.length} liste(s) de noms propres.`);
if (erreurs.length > 0) {
  console.log(`\n${erreurs.length} erreur(s) :`);
  erreurs.forEach(afficher);
}
if (avertissements.length > 0) {
  console.log(`\n${avertissements.length} avertissement(s) à vérifier dans un dictionnaire de référence :`);
  avertissements.forEach(afficher);
}
if (conseils.length > 0) {
  console.log(`
${conseils.length} conseil(s) de rédaction (enchaînements valides mais améliorables) :`);
  conseils.forEach(afficher);
}
if (problemes.length === 0) console.log("Aucun problème détecté.");

// Référence de Syno ordinateur : les contenus modifiés depuis le test n'ont plus de score de comparaison.
const sansReference = [
  ...ENIGMES.filter((e) => REFERENCE_SYNO[e.id]?.empreinte !== empreinteEnigme(e)).map((e) => e.id),
  ...LISTES_NOMS_PROPRES.filter((l) => REFERENCE_SYNO[l.id]?.empreinte !== empreinteNoms(l)).map((l) => l.id),
];
if (sansReference.length > 0) {
  console.log(`\n${sansReference.length} contenu(s) sans référence de Syno ordinateur à jour (refaire le test : tools/test-syno-sequentiel.ts) : ${sansReference.join(", ")}`);
}
console.log("\nRappel : ces contrôles automatiques ne remplacent pas la relecture humaine.");

process.exitCode = erreurs.length > 0 ? 1 : 0;
