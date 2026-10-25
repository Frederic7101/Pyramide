import { describe, expect, it } from "vitest";
import type { Enigme } from "../engine/types";
import { analyserNiveau1 } from "./arbitreNiveau1";
import { assoc, consigneContraire, syn } from "./briques";
import { controlerEnchainement } from "./enchainement";
import { controlerBriqueJoueur, validerContenuEnigme } from "./validation";

const erreurs = (texte: string, epreuve: "enigme" | "noms" = "enigme") => controlerBriqueJoueur(texte, ["chien"], [], [], epreuve).erreurs;
const avertissements = (texte: string) => controlerBriqueJoueur(texte, ["chien"]).avertissements;

describe("une brique est un seul mot (énigmes)", () => {
  it("refuse plusieurs mots séparés, accepte le mot composé avec trait d'union", () => {
    expect(erreurs("petit canard")[0]).toContain("un seul mot");
    expect(erreurs("bas de laine")).toHaveLength(1);
    expect(erreurs("papier-toilette")).toEqual([]);
    expect(erreurs("quatre-vingt-dix-neuf")).toEqual([]);
  });

  it("un nom propre en plusieurs mots n'est qu'un avertissement", () => {
    expect(erreurs("Louis XIV")).toEqual([]);
    expect(avertissements("Louis XIV")[0]).toContain("nom propre en plusieurs mots");
  });

  it("ne s'applique pas aux Noms Propres, où les briques sont libres", () => {
    expect(erreurs("petit canard", "noms")).toEqual([]);
  });
});

describe("nombres et dates", () => {
  it("« un », les nombres en lettres et en chiffres sont permis", () => {
    for (const b of ["un", "une", "neuf", "dix", "10", "2 CV", "007"]) expect(erreurs(b), b).toEqual([]);
  });

  it("une date reste interdite", () => {
    expect(erreurs("1492")[0]).toContain("date");
    expect(erreurs("2024")[0]).toContain("date");
    expect(erreurs("14/07/1789")[0]).toContain("date");
  });

  it("l'arbitre de niveau 1 ne refuse pas « un » et ne le trouve pas vide", () => {
    const a = analyserNiveau1("un", { reponse: "dix" }, { type: "mot", precedentes: [] });
    expect(a.erreurs).toEqual([]);
  });
});

describe("mots que Dico ne connaît pas encore", () => {
  const enigme = (briques: [string[], string[], string[]]): Enigme => ({
    id: "e-test",
    difficulte: "facile",
    titre: "Titre sans rapport",
    texte: "Un {1}, un {2}, un {3} ; ces mots forment ____.",
    solution: "la ronde",
    solutionVariantes: ["ronde"],
    mots: [
      { rang: 1, reponse: "pomme", mise: 1, briques: briques[0].map((b) => syn(b)) },
      { rang: 2, reponse: "poire", mise: 1, briques: briques[1].map((b) => syn(b)) },
      { rang: 3, reponse: "prune", mise: 1, briques: briques[2].map((b) => syn(b)) },
    ],
  });
  const messages = (e: Enigme) => validerContenuEnigme(e).filter((p) => p.niveau === "erreur" && /Dico|découvre|ne connaît/.test(p.message)).map((p) => p.message);

  it("un mot suivant ou la solution ne peut pas servir d'indice", () => {
    expect(messages(enigme([["poire"], ["fruit"], ["fruit"]])).join()).toContain("mot n°2");
    expect(messages(enigme([["fruit"], ["fruit"], ["ronde"]])).join()).toContain("solution");
    expect(messages(enigme([["fruit"], ["prunes"], ["fruit"]])).join()).toContain("mot n°3");
  });

  it("un mot déjà trouvé peut servir d'indice", () => {
    expect(messages(enigme([["fruit"], ["pomme"], ["poire"]]))).toEqual([]);
  });
});

describe("pistes publiées", () => {
  it("assoc accepte un mot unique", () => {
    expect(assoc("canard").texte).toBe("canard");
  });
});

describe("brique « contraire » (consigne de Dico)", () => {
  it("est valide après une brique en relation, interdite en 1re position", () => {
    expect(controlerEnchainement([syn("faible"), consigneContraire()], "enigme").filter((p) => p.niveau === "erreur")).toEqual([]);
    expect(controlerEnchainement([consigneContraire(), syn("faible")], "enigme").some((p) => p.niveau === "erreur")).toBe(true);
  });

  it("n'est pas refusée comme brique de joueur", () => {
    expect(erreurs("contraire")).toEqual([]);
  });
});

describe("surnoms d'un nom propre", () => {
  const louisIX = { rang: 1, reponse: "Louis IX", variantes: ["Saint Louis"], surnoms: ["Saint Louis"], briques: [] };

  it("« Saint » (surnom Saint Louis) n'est pas interdit pour Louis IX, « Louis » l'est", () => {
    const interdits = [louisIX.reponse, ...louisIX.variantes.filter((v) => !louisIX.surnoms.includes(v))];
    expect(controlerBriqueJoueur("Saint", interdits, [], [], "noms").erreurs).toEqual([]);
    expect(controlerBriqueJoueur("Louis", interdits, [], [], "noms").erreurs).toHaveLength(1);
  });

  it("sans surnom déclaré, la variante interdit ses mots", () => {
    const interdits = [louisIX.reponse, ...louisIX.variantes];
    expect(controlerBriqueJoueur("Saint", interdits, [], [], "noms").erreurs).toHaveLength(1);
  });

  it("l'arbitre programmé applique la même règle", () => {
    const mot = { reponse: "Louis IX", variantes: ["Saint Louis"], surnoms: ["Saint Louis"] };
    expect(analyserNiveau1("Saint", mot, { type: "nom", precedentes: [] }).erreurs).toEqual([]);
    expect(analyserNiveau1("Saint", { reponse: mot.reponse, variantes: mot.variantes }, { type: "nom", precedentes: [] }).erreurs).toHaveLength(1);
  });
});

describe("diminutifs", () => {
  it("un diminutif du nom reste interdit tant qu'il n'est pas déclaré comme surnom", () => {
    const interdits = ["Claude François", "Cloclo"];
    expect(controlerBriqueJoueur("Cloclo", interdits, [], [], "noms").erreurs).toHaveLength(1);
  });
});
