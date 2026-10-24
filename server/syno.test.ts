import { describe, expect, it } from "vitest";
import { construireMessage } from "./syno";

describe("construireMessage", () => {
  it("liste les briques et les réponses déjà fausses, sans jamais donner le mot", () => {
    const m = construireMessage({ type: "mot", briques: ["bonbon", "adjectif"], reponsesFausses: ["sucre"] });
    expect(m).toContain("1. bonbon\n2. adjectif");
    expect(m).toContain("« sucre »");
  });

  it("donne le thème pour les noms propres et l'invitation « Complétez »", () => {
    const m = construireMessage({ type: "nom", theme: "Peintres", briques: ["Giverny"], reponsesFausses: ["Monet"], completer: true });
    expect(m).toContain("« Peintres »");
    expect(m).toContain("Complétez");
  });

  it("donne le texte de l'énigme pour la solution", () => {
    expect(construireMessage({ type: "solution", briques: [], reponsesFausses: [], texte: "Le ____ brille" })).toContain("Le ____ brille");
  });
});

describe("ce que Syno sait", () => {
  it("reçoit le titre, le rang du mot et l'issue des mots précédents", () => {
    const m = construireMessage({
      type: "mot",
      titre: "Au bras",
      numero: 3,
      precedents: [
        { numero: 1, propositions: ["aiguilles"], trouve: true },
        { numero: 2, propositions: ["spirale", "ressort"], trouve: false },
      ],
      briques: ["cheville"],
      reponsesFausses: [],
    });
    expect(m).toContain("Titre de l'énigme : « Au bras »");
    expect(m).toContain("Tu cherches le mot n°3");
    expect(m).toContain("Mot n°1 : trouvé (« aiguilles »)");
    expect(m).toContain("Mot n°2 : non trouvé (tes propositions : « spirale », « ressort »)");
  });

  it("noms propres : rang et noms précédents, sans titre", () => {
    const m = construireMessage({ type: "nom", theme: "Peintres", numero: 2, precedents: [{ numero: 1, propositions: ["Monet"], trouve: true }], briques: ["Joconde"], reponsesFausses: [] });
    expect(m).toContain("Tu cherches le nom n°2");
    expect(m).toContain("Nom n°1 : trouvé (« Monet »)");
    expect(m).not.toContain("Titre de l'énigme");
  });

  it("la solution connaît le titre", () => {
    expect(construireMessage({ type: "solution", titre: "Au bras", briques: [], reponsesFausses: [], texte: "Mes ____" })).toContain("« Au bras »");
  });

  it("sans contexte, le message reste celui d'avant", () => {
    expect(construireMessage({ type: "mot", briques: ["a"], reponsesFausses: [] }).startsWith("Mot d'une énigme")).toBe(true);
  });
});

describe("consigne", () => {
  it("insiste sur l'incitation en dernière brique et sur la différence mot / solution", async () => {
    const { SYSTEME } = await import("./syno");
    expect(SYSTEME).toContain("INCITATION");
    expect(SYSTEME).toContain("JAMAIS la solution de l'énigme");
    expect(SYSTEME).toContain("jamais par un des mots manquants");
  });
});
