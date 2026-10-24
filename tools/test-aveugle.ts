/**
 * Test à l'aveugle de Syno sur les contenus d'un niveau (sans l'API du jeu) :
 * on prépare, tour par tour, des questions SANS les réponses (briques montrées jusqu'au tour courant,
 * réponses déjà jugées fausses), un joueur externe (sous-agent) y répond, puis on note avec le moteur.
 *
 * Usage :
 *   npx tsx tools/test-aveugle.ts preparer <dossier> <tour> [niveau]   → <dossier>/questions-<tour>.json
 *   npx tsx tools/test-aveugle.ts noter <dossier> <tour>               → lit <dossier>/reponses-<tour>.json
 *   npx tsx tools/test-aveugle.ts solution <dossier>                   → <dossier>/questions-solution.json
 *   npx tsx tools/test-aveugle.ts rapport <dossier>                    → <dossier>/rapport.md (lit reponses-solution.json)
 * Tours 1 à 3 : nombre de briques montrées.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { reponseCorrecte, reponseCorrectePhonetique } from "../src/engine/matching";
import { BRIQUES_PAR_ENIGME, type Difficulte } from "../src/engine/types";

interface EtatMot {
  /** Briques jouables pour ce mot (mise pour une énigme, toutes pour un nom propre). */
  max: number;
  propositions: string[];
  trouveA: number | null;
}
interface Etat {
  niveau: Difficulte;
  mots: Record<string, EtatMot>; // clé : « contenu|rang »
  solutions: Record<string, string[]>;
}

const [commande, dossier, tourTexte, niveauTexte] = process.argv.slice(2);
const fichierEtat = join(dossier, "etat.json");
const lireEtat = (): Etat => JSON.parse(readFileSync(fichierEtat, "utf8"));
const ecrire = (nom: string, donnees: unknown) => writeFileSync(join(dossier, nom), JSON.stringify(donnees, null, 2), "utf8");

function initialiser(niveau: Difficulte): Etat {
  const mots: Etat["mots"] = {};
  for (const e of ENIGMES.filter((x) => x.difficulte === niveau)) for (const m of e.mots) mots[`${e.id}|${m.rang}`] = { max: m.mise, propositions: [], trouveA: null };
  for (const l of LISTES_NOMS_PROPRES.filter((x) => x.difficulte === niveau)) for (const n of l.noms) mots[`${l.id}|${n.rang}`] = { max: n.briques.length, propositions: [], trouveA: null };
  return { niveau, mots, solutions: {} };
}

if (commande === "preparer") {
  const tour = Number(tourTexte);
  const etat = tour === 1 || !existsSync(fichierEtat) ? initialiser((niveauTexte as Difficulte) ?? "difficile") : lireEtat();
  const questions: unknown[] = [];
  for (const e of ENIGMES.filter((x) => x.difficulte === etat.niveau)) {
    for (const m of e.mots) {
      const s = etat.mots[`${e.id}|${m.rang}`];
      if (s.trouveA !== null || s.max < tour) continue;
      questions.push({ cle: `${e.id}|${m.rang}`, epreuve: "énigme", titre: e.titre, briques: m.briques.slice(0, tour).map((b) => b.texte), dejaFausses: s.propositions });
    }
  }
  for (const l of LISTES_NOMS_PROPRES.filter((x) => x.difficulte === etat.niveau)) {
    for (const n of l.noms) {
      const s = etat.mots[`${l.id}|${n.rang}`];
      if (s.trouveA !== null || s.max < tour) continue;
      questions.push({ cle: `${l.id}|${n.rang}`, epreuve: "nom propre", theme: l.theme, briques: n.briques.slice(0, tour).map((b) => b.texte), dejaFausses: s.propositions });
    }
  }
  writeFileSync(fichierEtat, JSON.stringify(etat, null, 2), "utf8");
  ecrire(`questions-${tour}.json`, questions);
  console.log(`Tour ${tour} : ${questions.length} question(s).`);
}

if (commande === "noter") {
  const tour = Number(tourTexte);
  const etat = lireEtat();
  const reponses: Record<string, string> = JSON.parse(readFileSync(join(dossier, `reponses-${tour}.json`), "utf8"));
  let trouves = 0;
  for (const [cle, proposition] of Object.entries(reponses)) {
    const s = etat.mots[cle];
    if (!s || s.trouveA !== null) continue;
    const [id, rangTexte] = cle.split("|");
    const rang = Number(rangTexte);
    const enigme = ENIGMES.find((e) => e.id === id);
    const juste = enigme
      ? reponseCorrecte(proposition, enigme.mots[rang - 1].reponse, enigme.mots[rang - 1].variantes)
      : (() => {
          const nom = LISTES_NOMS_PROPRES.find((l) => l.id === id)!.noms[rang - 1];
          return reponseCorrectePhonetique(proposition, nom.reponse, [...(nom.variantes ?? []), ...(nom.partielles ?? [])]);
        })();
    s.propositions.push(proposition);
    if (juste) {
      s.trouveA = tour;
      trouves++;
    }
  }
  writeFileSync(fichierEtat, JSON.stringify(etat, null, 2), "utf8");
  console.log(`Tour ${tour} : ${trouves} trouvé(s) sur ${Object.keys(reponses).length}.`);
}

if (commande === "solution") {
  const etat = lireEtat();
  const questions = ENIGMES.filter((e) => e.difficulte === etat.niveau).map((e) => ({
    cle: e.id,
    titre: e.titre,
    texte: e.texte.replace(/\{(\d)\}/g, (_, n: string) => (etat.mots[`${e.id}|${n}`].trouveA !== null ? e.mots[Number(n) - 1].reponse : "____")),
  }));
  ecrire("questions-solution.json", questions);
  console.log(`Solutions : ${questions.length} énigme(s).`);
}

if (commande === "rapport") {
  const etat = lireEtat();
  const solutions: Record<string, string[]> = JSON.parse(readFileSync(join(dossier, "reponses-solution.json"), "utf8"));
  const lignes: string[] = [`# Test à l'aveugle de Syno, niveau ${etat.niveau}`, ""];
  lignes.push("Syno (sous-agent Claude sans accès aux réponses) voit les briques une à une, avec ses réponses déjà jugées fausses. Score calculé comme dans le jeu.", "");
  lignes.push("## Énigmes", "", "| Énigme | Titre | Mots trouvés (brique) | Bonus | Solution | Score |", "|---|---|---|---|---|---|");
  const scores: number[] = [];
  for (const e of ENIGMES.filter((x) => x.difficulte === etat.niveau)) {
    let utilisees = 0;
    let trouves = 0;
    const detail = e.mots.map((m) => {
      const s = etat.mots[`${e.id}|${m.rang}`];
      utilisees += s.trouveA ?? m.mise;
      if (s.trouveA !== null) trouves++;
      return s.trouveA !== null ? `${m.reponse} (${s.trouveA}/${m.mise})` : `~~${m.reponse}~~`;
    });
    const bonus = trouves === e.mots.length ? BRIQUES_PAR_ENIGME - utilisees : 0;
    const propositions = solutions[e.id] ?? [];
    const solutionTrouvee = propositions.slice(0, 3).some((p) => reponseCorrecte(p, e.solution, e.solutionVariantes));
    const score = trouves + bonus + (solutionTrouvee ? 1 : 0);
    scores.push(score);
    lignes.push(`| ${e.id} | ${e.titre} | ${trouves}/5 : ${detail.join(", ")} | ${bonus} | ${solutionTrouvee ? "✓" : `✗ (${propositions.slice(0, 3).join(", ")})`} | ${score} |`);
  }
  lignes.push("", `Score moyen : ${(scores.reduce((a, b) => a + b, 0) / Math.max(scores.length, 1)).toFixed(1)}`, "");
  lignes.push("## Mots non trouvés", "");
  for (const e of ENIGMES.filter((x) => x.difficulte === etat.niveau)) {
    for (const m of e.mots) {
      const s = etat.mots[`${e.id}|${m.rang}`];
      if (s.trouveA === null) lignes.push(`- ${e.id}, **${m.reponse}** : ${m.briques.slice(0, m.mise).map((b) => b.texte).join(" + ")} → Syno : ${s.propositions.join(", ")}`);
    }
  }
  lignes.push("", "## Noms Propres", "", "| Liste | Thème | Trouvés | Détail |", "|---|---|---|---|");
  for (const l of LISTES_NOMS_PROPRES.filter((x) => x.difficulte === etat.niveau)) {
    const detail = l.noms.map((n) => {
      const s = etat.mots[`${l.id}|${n.rang}`];
      return s.trouveA !== null ? `${n.reponse} (${s.trouveA})` : `~~${n.reponse}~~ (${s.propositions.join(", ")})`;
    });
    lignes.push(`| ${l.id} | ${l.theme} | ${l.noms.filter((n) => etat.mots[`${l.id}|${n.rang}`].trouveA !== null).length}/4 | ${detail.join(" ; ")} |`);
  }
  writeFileSync(join(dossier, "rapport.md"), lignes.join("\n"), "utf8");
  console.log("Rapport écrit.");
}
