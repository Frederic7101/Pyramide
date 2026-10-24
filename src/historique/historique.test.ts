import { describe, expect, it } from "vitest";
import type { StockageCle } from "../arbitre/journal";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../content/index";
import { creerEnigme, proposerSolution, repondre } from "../engine/enigme";
import { creerNoms, repondreNom } from "../engine/nomsPropres";
import { bilanParties, comparerEnigme, comparerModeles, comparerNoms, SCORE_MAX_ENIGME } from "./comparaison";
import { empreinteEnigme, empreinteNoms } from "./empreinte";
import { creerEnigmeDico, jouerBrique, miser, proposerSolutionDico, refuserBrique } from "../engine/enigmeDico";
import { creerNomsDico, jouerBriqueNom } from "../engine/nomsDico";
import { CLE_PARTIES, creerParties, resumerEnigme, resumerEnigmeDico, resumerNoms, resumerNomsDico, roleDe } from "./parties";
import type { ReferenceSyno } from "./reference";

const enigme = ENIGMES[0];
const liste = LISTES_NOMS_PROPRES[0];

function memoire(): StockageCle & { donnees: Map<string, string> } {
  const donnees = new Map<string, string>();
  return { donnees, getItem: (c) => donnees.get(c) ?? null, setItem: (c, v) => void donnees.set(c, v) };
}

/** Joue l'énigme : chaque mot trouvé à la 1re brique sauf le dernier, perdu ; solution juste. */
function jouerEnigme() {
  let etat = creerEnigme(enigme);
  enigme.mots.forEach((m, i) => {
    if (i < 4) etat = repondre(etat, m.reponse);
    else for (let k = 0; k < m.mise; k++) etat = repondre(etat, "zzz");
  });
  return proposerSolution(etat, enigme.solution);
}

function jouerNoms() {
  let etat = creerNoms(liste);
  liste.noms.forEach((n) => (etat = repondreNom(etat, n.reponse)));
  return etat;
}

const referenceEnigme = (score: number, empreinte = empreinteEnigme(enigme)): ReferenceSyno => ({
  type: "enigme",
  empreinte,
  date: "2026-10-23",
  score,
  trouveA: [1, 2, 1, 1, 1],
  reponses: [["a"], ["x", "b"], ["c"], ["d"], ["e"]],
});

describe("empreinte", () => {
  it("change dès qu'une brique misée change", () => {
    const modifiee = { ...enigme, mots: enigme.mots.map((m, i) => (i === 0 ? { ...m, briques: [{ ...m.briques[0], texte: "autre" }, ...m.briques.slice(1)] } : m)) };
    expect(empreinteEnigme(modifiee)).not.toBe(empreinteEnigme(enigme));
    expect(empreinteEnigme({ ...enigme })).toBe(empreinteEnigme(enigme));
    expect(empreinteNoms(liste)).toBe(empreinteNoms({ ...liste }));
  });
});

describe("historique des parties", () => {
  it("garde les réponses du joueur, brique par brique, et le score", () => {
    const jouee = resumerEnigme(jouerEnigme());
    expect(jouee.mots[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 1, reponses: [enigme.mots[0].reponse] });
    expect(jouee.mots[4].statut).toBe("perdu");
    expect(jouee.mots[4].reponses).toHaveLength(enigme.mots[4].mise);
    expect(jouee.score).toMatchObject({ mots: 4, bonus: 0, solution: 1, total: 5 });
  });

  it("enregistre l'énigme dès sa fin, puis la liste, et relit l'historique", () => {
    const stockage = memoire();
    const parties = creerParties(stockage, () => new Date("2026-10-23T10:00:00Z"));
    const id = parties.commencer("facile", resumerEnigme(jouerEnigme()));
    expect(parties.lister()[0].noms).toBeUndefined();
    parties.terminer(id, resumerNoms(jouerNoms()));
    const relues = creerParties(stockage).lister();
    expect(relues).toHaveLength(1);
    expect(relues[0]).toMatchObject({ id, niveau: "facile", horodatage: "2026-10-23T10:00:00.000Z" });
    expect(relues[0].noms?.points).toBe(4);
    expect(JSON.parse(stockage.donnees.get(CLE_PARTIES)!)).toHaveLength(1);
  });

  it("liste les parties de la plus récente à la plus ancienne et ignore un stockage illisible", () => {
    const stockage = memoire();
    stockage.setItem(CLE_PARTIES, "{pas du json");
    const parties = creerParties(stockage);
    expect(parties.lister()).toEqual([]);
    const a = parties.commencer("facile", resumerEnigme(jouerEnigme()));
    const b = parties.commencer("moyen", resumerEnigme(jouerEnigme()));
    expect(parties.lister().map((p) => p.id)).toEqual([b, a]);
  });
});

describe("parties jouées en Dico", () => {
  it("garde les briques du joueur, les réponses de Syno ordinateur et le rôle", () => {
    let etat = creerEnigmeDico(enigme);
    enigme.mots.forEach((m, i) => {
      etat = miser(etat, 2);
      etat = i === 1 ? jouerBrique(jouerBrique(etat, "indice", "faux"), "autre", m.reponse) : i === 4 ? refuserBrique(etat, m.reponse, "mot à deviner") : jouerBrique(etat, "indice", m.reponse);
    });
    etat = proposerSolutionDico(etat, enigme.solution);
    const jouee = resumerEnigmeDico(etat);
    expect(jouee.mots[1]).toMatchObject({ statut: "trouve", briquesUtilisees: 2, mise: 2, reponses: ["faux", enigme.mots[1].reponse], briquesJoueur: ["indice", "autre"] });
    expect(jouee.mots[4].statut).toBe("refuse");
    expect(jouee.score).toMatchObject({ mots: 4, bonus: 0, solution: 1 });

    let noms = creerNomsDico(liste);
    liste.noms.forEach((n) => (noms = jouerBriqueNom(noms, "indice", n.reponse)));
    const parties = creerParties(memoire());
    const id = parties.commencer("facile", jouee, "dico");
    parties.terminer(id, resumerNomsDico(noms));
    const [p] = parties.lister();
    expect(roleDe(p)).toBe("dico");
    expect(p.noms).toMatchObject({ points: 4 });
    expect(p.noms!.noms[0].briquesJoueur).toEqual(["indice"]);
    // La comparaison se fait avec la même référence que pour Syno : les pistes de l'ordinateur devinées par son Syno.
    expect(comparerEnigme(jouee, { [enigme.id]: referenceEnigme(12) })).toMatchObject({ joueur: jouee.score.total, ordinateur: 12 });
  });

  it("une partie enregistrée sans rôle a été jouée en Syno", () => {
    const parties = creerParties(memoire());
    parties.commencer("facile", resumerEnigme(jouerEnigme()));
    expect(roleDe(parties.lister()[0])).toBe("syno");
  });
});

describe("comparaison avec Syno ordinateur", () => {
  it("compare mot par mot quand la référence porte sur le même contenu", () => {
    const c = comparerEnigme(resumerEnigme(jouerEnigme()), { [enigme.id]: referenceEnigme(12) });
    expect(c).toMatchObject({ joueur: 5, ordinateur: 12, perimee: false, maximum: SCORE_MAX_ENIGME });
    expect(c.detail[1]).toMatchObject({ joueur: 1, ordinateur: 2, reponsesOrdinateur: ["x", "b"] });
    expect(c.detail[4]).toMatchObject({ joueur: null, ordinateur: 1 });
  });

  it("signale une référence périmée et n'en tient pas compte", () => {
    const c = comparerEnigme(resumerEnigme(jouerEnigme()), { [enigme.id]: referenceEnigme(12, "ancienne") });
    expect(c).toMatchObject({ ordinateur: null, perimee: true });
    expect(comparerNoms(resumerNoms(jouerNoms()), {})).toMatchObject({ ordinateur: null, perimee: false, maximum: 4 });
  });

  it("fait le bilan sur les seules parties comparables", () => {
    const parties = creerParties(memoire());
    const id = parties.commencer("facile", resumerEnigme(jouerEnigme()));
    parties.terminer(id, resumerNoms(jouerNoms()));
    parties.commencer("facile", resumerEnigme(jouerEnigme())); // liste non terminée : ignorée
    const refNoms: ReferenceSyno = { type: "noms", empreinte: empreinteNoms(liste), date: "2026-10-23", score: 3, trouveA: [1, 1, 2, null], reponses: [] };
    const bilan = bilanParties(parties.lister(), { [enigme.id]: referenceEnigme(12), [liste.id]: refNoms });
    expect(bilan).toMatchObject({ parties: 1, comparees: 1, moyenneJoueur: 9, moyenneOrdinateur: 15, egaleOuMieux: 0 });
  });
});

describe("tableau des scores face aux modèles", () => {
  it("met le joueur en tête, puis chaque modèle testé, et laisse un tiret pour les autres", () => {
    const refNoms: ReferenceSyno = { type: "noms", empreinte: empreinteNoms(liste), date: "2026-10-27", score: 3, trouveA: [1, 1, 2, null], reponses: [] };
    const lignes = comparerModeles(resumerEnigme(jouerEnigme()), resumerNoms(jouerNoms()), {
      Opus: { [enigme.id]: referenceEnigme(12), [liste.id]: refNoms },
      Haiku: { [enigme.id]: referenceEnigme(7, "ancienne"), [liste.id]: refNoms },
    });
    expect(lignes.map((l) => l.nom)).toEqual(["Vous", "Haiku", "Sonnet", "Opus"]);
    expect(lignes[0]).toMatchObject({ enigme: 5, noms: 4, total: 9 });
    expect(lignes[1]).toMatchObject({ enigme: null, noms: 3, total: null });
    expect(lignes[2]).toMatchObject({ enigme: null, noms: null, total: null });
    expect(lignes[3]).toMatchObject({ enigme: 12, noms: 3, total: 15 });
  });
});
