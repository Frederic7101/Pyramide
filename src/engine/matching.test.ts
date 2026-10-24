import { describe, expect, it } from "vitest";
import { clePhonetique, normaliser, reponseCorrecte, reponseCorrectePhonetique } from "./matching";

describe("normaliser", () => {
  it("ignore casse, accents, tirets et espaces", () => {
    expect(normaliser("  Éncyclopédie ")).toBe("encyclopedie");
    expect(normaliser("Saint-Lô")).toBe("saint lo");
    expect(normaliser("l’été")).toBe("l ete");
    expect(normaliser("Sœur")).toBe("soeur");
  });
});

describe("reponseCorrecte", () => {
  it("accepte le mot attendu malgré accents et casse", () => {
    expect(reponseCorrecte("ENCYCLOPEDIE", "encyclopédie")).toBe(true);
  });
  it("accepte une variante déclarée", () => {
    expect(reponseCorrecte("Monet", "Claude Monet", ["Monet"])).toBe(true);
  });
  it("ignore un article initial (« le nectar », « du miel », « l'hiver »)", () => {
    expect(reponseCorrecte("le nectar", "nectar")).toBe(true);
    expect(reponseCorrecte("du miel", "le miel")).toBe(true);
    expect(reponseCorrecte("l'hiver", "hiver")).toBe(true);
    expect(reponseCorrecte("Une montre", "montre")).toBe(true);
  });
  it("accepte singulier et pluriel", () => {
    expect(reponseCorrecte("nectars", "nectar")).toBe(true);
    expect(reponseCorrecte("oiseau", "oiseaux")).toBe(true);
    expect(reponseCorrecte("cheval", "chevaux")).toBe(false);
  });
  it("ne retire pas l'article d'un nom propre composé à tort (« la seine » reste comparé à « Seine »)", () => {
    expect(reponseCorrecte("la Seine", "Seine")).toBe(true);
    expect(reponseCorrecte("Le Corbusier", "Le Corbusier")).toBe(true);
  });
  it("refuse une réponse différente ou vide", () => {
    expect(reponseCorrecte("lexique", "encyclopédie")).toBe(false);
    expect(reponseCorrecte("   ", "encyclopédie")).toBe(false);
  });
});

describe("clePhonetique et reponseCorrectePhonetique (noms propres)", () => {
  it("accepte les orthographes qui se prononcent pareil", () => {
    for (const essai of ["Hypocrate", "Hyppocrate", "hippocratte", "Ipocrate"]) {
      expect(reponseCorrectePhonetique(essai, "Hippocrate")).toBe(true);
    }
    expect(reponseCorrectePhonetique("Pitagore", "Pythagore")).toBe(true);
    expect(reponseCorrectePhonetique("Arshimède", "Archimède")).toBe(true);
    expect(reponseCorrectePhonetique("Dostoievsky", "Dostoïevski")).toBe(true);
    expect(reponseCorrectePhonetique("Tchékov", "Tchekhov")).toBe(true);
    expect(reponseCorrectePhonetique("Gutemberg", "Gutenberg")).toBe(true);
    expect(reponseCorrectePhonetique("Marseile", "Marseille")).toBe(true);
  });

  it("refuse des noms qui se prononcent différemment", () => {
    expect(reponseCorrectePhonetique("Manet", "Monet")).toBe(false);
  });

  it("accepte un prénom ou un nom ajouté au nom attendu, pas un nom tronqué", () => {
    expect(reponseCorrectePhonetique("Denis Diderot", "Diderot")).toBe(true);
    expect(reponseCorrectePhonetique("Wolfgang Amadeus Mozart", "Mozart")).toBe(true);
    expect(reponseCorrectePhonetique("Léon Tolstoï", "Tolstoï")).toBe(true);
    expect(reponseCorrectePhonetique("Hermione Granger", "Hermione")).toBe(true);
    expect(reponseCorrectePhonetique("Hugo", "Victor Hugo")).toBe(false);
    expect(reponseCorrectePhonetique("Édouard Manet", "Monet")).toBe(false);
    expect(reponseCorrectePhonetique("Euclide", "Hippocrate")).toBe(false);
    expect(reponseCorrectePhonetique("Lyon", "Lille")).toBe(false);
    expect(reponseCorrectePhonetique("", "Lille")).toBe(false);
  });

  it("garde l'espace entre prénom et nom", () => {
    expect(clePhonetique("Claude Monet")).toBe("klod mone");
  });
});
