import { describe, expect, it } from "vitest";
import { creerDictionnaire, distance, motsInconnus } from "./dictionnaire";

const dico = creerDictionnaire(["nectar", "nectars", "nectarine", "miel", "abeille", "abeilles", "réalisateur", "porte-monnaie", "porte", "monnaie", "hiver", "sœur"]);

describe("distance", () => {
  it("compte une inversion de deux lettres comme une seule faute", () => {
    expect(distance("nectra", "nectar")).toBe(1);
  });
  it("compte lettre en trop, en moins ou changée", () => {
    expect(distance("nectarr", "nectar")).toBe(1);
    expect(distance("necar", "nectar")).toBe(1);
    expect(distance("nectir", "nectar")).toBe(1);
  });
  it("s'arrête au-delà de la limite", () => {
    expect(distance("abeille", "nectar")).toBe(3);
  });
});

describe("dictionnaire", () => {
  it("reconnaît les mots sans tenir compte des accents ni des ligatures", () => {
    expect(dico.contient("Réalisateur")).toBe(true);
    expect(dico.contient("realisateur")).toBe(true);
    expect(dico.contient("soeur")).toBe(true);
  });

  it("propose les corrections avec leurs accents", () => {
    expect(dico.suggestions("realisateyr")).toEqual(["réalisateur"]);
  });

  it("propose des corrections pour une faute de frappe", () => {
    expect(dico.suggestions("nectra")).toContain("nectar");
    expect(dico.suggestions("abeiles")).toContain("abeilles");
  });

  it("motsInconnus ignore articles, élisions et mots connus", () => {
    expect(motsInconnus(dico, "le nectar")).toEqual([]);
    expect(motsInconnus(dico, "l'hiver")).toEqual([]);
    expect(motsInconnus(dico, "porte-monnaie")).toEqual([]);
    expect(motsInconnus(dico, "du nectra")).toEqual(["nectra"]);
    expect(motsInconnus(dico, "")).toEqual([]);
  });
});
