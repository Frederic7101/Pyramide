import { describe, expect, it } from "vitest";
import {
  passerNom,
  briqueCouranteNom,
  creerNoms,
  enAttenteCompletion,
  numeroBriqueNom,
  repondreNom,
  scoreNoms,
  signalerNom,
  validerListe,
} from "./nomsPropres";
import type { ListeNomsPropres } from "./types";

/** Liste de test fictive : le premier nom admet la réponse partielle « Dupont ». */
function listeTest(): ListeNomsPropres {
  return {
    id: "np-test",
    difficulte: "facile",
    theme: "Test",
    noms: [
      { rang: 1, reponse: "Jean Dupont", partielles: ["Dupont"], briques: [{ texte: "a1" }, { texte: "a2" }, { texte: "a3" }] },
      { rang: 2, reponse: "Marie Curie", variantes: ["Curie"], briques: [{ texte: "b1" }, { texte: "b2" }, { texte: "b3" }] },
      { rang: 3, reponse: "Paris", briques: [{ texte: "c1" }] },
      { rang: 4, reponse: "Lyon", briques: [{ texte: "d1" }, { texte: "d2" }] },
    ],
  };
}

describe("validerListe", () => {
  it("accepte une liste cohérente", () => {
    expect(validerListe(listeTest())).toEqual([]);
  });
  it("refuse plus de 3 briques ou aucune brique", () => {
    const l = listeTest();
    l.noms[0].briques.push({ texte: "a4" });
    l.noms[1].briques = [];
    expect(validerListe(l)).toHaveLength(2);
  });
  it("refuse un nombre de noms différent de 4 et un thème vide", () => {
    const l = listeTest();
    l.noms.pop();
    l.theme = " ";
    expect(validerListe(l).join()).toContain("4 noms attendus");
    expect(validerListe(l).join()).toContain("thème manquant");
  });
  it("creerNoms lève une erreur sur une liste invalide", () => {
    const l = listeTest();
    l.noms.pop();
    expect(() => creerNoms(l)).toThrow();
  });
});

describe("déroulé d'un nom", () => {
  it("trouvé à la brique 3 : 1 point", () => {
    let e = creerNoms(listeTest());
    expect(briqueCouranteNom(e)).toBe("a1");
    e = repondreNom(e, "faux");
    e = repondreNom(e, "faux");
    expect(briqueCouranteNom(e)).toBe("a3");
    expect(numeroBriqueNom(e)).toBe(3);
    e = repondreNom(e, "jean dupont");
    expect(e.resultats[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 3 });
    expect(scoreNoms(e)).toBe(1);
    expect(briqueCouranteNom(e)).toBe("b1");
  });

  it("3 réponses fausses : nom perdu, 0 point", () => {
    let e = creerNoms(listeTest());
    for (let k = 0; k < 3; k++) e = repondreNom(e, "faux");
    expect(e.resultats[0].statut).toBe("perdu");
    expect(e.nomIndex).toBe(1);
    expect(scoreNoms(e)).toBe(0);
  });

  it("une variante déclarée est acceptée", () => {
    let e = creerNoms(listeTest());
    for (let k = 0; k < 3; k++) e = repondreNom(e, "x");
    e = repondreNom(e, "Curie");
    expect(e.resultats[1].statut).toBe("trouve");
  });

  it("un nom à une seule brique est perdu après une mauvaise réponse", () => {
    let e = creerNoms(listeTest());
    for (let k = 0; k < 3; k++) e = repondreNom(e, "x");
    for (let k = 0; k < 3; k++) e = repondreNom(e, "x");
    e = repondreNom(e, "Londres");
    expect(e.resultats[2]).toMatchObject({ statut: "perdu", briquesUtilisees: 1 });
  });
});

describe("nom de famille seul", () => {
  it("est accepté tout de suite quand il est déclaré (« Dupont » pour « Jean Dupont »), sans « Complétez »", () => {
    let e = creerNoms(listeTest());
    e = repondreNom(e, "Dupont");
    expect(e.resultats[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 1 });
    expect(enAttenteCompletion(e)).toBe(false);
  });

  it("le nom complet reste accepté, y compris avec une brique de plus", () => {
    let e = creerNoms(listeTest());
    e = repondreNom(e, "faux");
    e = repondreNom(e, "Jean Dupont");
    expect(e.resultats[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 2 });
  });

  it("un autre prénom avec le même nom reste accepté (le nom de famille suffit)", () => {
    let e = creerNoms(listeTest());
    e = repondreNom(e, "Paul Dupont");
    expect(e.resultats[0].statut).toBe("trouve");
  });
});

describe("signalement et fin de liste", () => {
  it("signaler annule le nom sans pénalité et passe au suivant", () => {
    let e = creerNoms(listeTest());
    e = repondreNom(e, "faux");
    e = signalerNom(e);
    expect(e.resultats[0]).toMatchObject({ statut: "annule", briquesUtilisees: 0 });
    expect(e.nomIndex).toBe(1);
  });

  it("la liste se termine après le 4e nom ; score maximal de 4", () => {
    let e = creerNoms(listeTest());
    e = repondreNom(e, "Jean Dupont");
    e = repondreNom(e, "Marie Curie");
    e = repondreNom(e, "Paris");
    e = repondreNom(e, "Lyon");
    expect(e.phase).toBe("terminee");
    expect(scoreNoms(e)).toBe(4);
    expect(() => repondreNom(e, "x")).toThrow();
    expect(() => signalerNom(e)).toThrow();
  });
});

describe("passerNom", () => {
  it("passe à la brique suivante, puis perd le nom après la dernière brique", () => {
    let etat = creerNoms(listeTest());
    etat = passerNom(etat);
    expect(etat.resultats[0]).toMatchObject({ statut: "a-jouer", reponses: [""] });
    etat = passerNom(passerNom(etat));
    expect(etat.resultats[0]).toMatchObject({ statut: "perdu", briquesUtilisees: 3 });
    expect(etat.nomIndex).toBe(1);
  });
});
