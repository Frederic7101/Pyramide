import { describe, expect, it } from "vitest";
import { creerDictionnaire } from "../engine/dictionnaire";
import { analyserNiveau1, auMoins, niveauDoute } from "./arbitreNiveau1";

const dictionnaire = creerDictionnaire(["bateau", "râteau", "écueil", "monaco", "adjectif", "bonbon", "doux", "chapeau", "porte-monnaie", "porte", "monnaie", "chapitre"]);
const mot = { reponse: "rocher", famille: ["roc", "roche"], briquesConnues: ["écueil", "Monaco"] };
const contexte = (precedentes: string[] = []) => ({ type: "mot" as const, precedentes, dictionnaire, autresMots: ["chapeau"] });

describe("niveau de doute", () => {
  it("convertit le score en niveau", () => {
    expect([0, 10, 45, 80].map(niveauDoute)).toEqual(["aucun", "faible", "moyen", "eleve"]);
    expect(auMoins("eleve", "moyen")).toBe(true);
    expect(auMoins("faible", "moyen")).toBe(false);
  });
});

describe("analyserNiveau1", () => {
  it("piste connue du contenu : aucun doute", () => {
    expect(analyserNiveau1("écueil", mot, contexte())).toMatchObject({ erreurs: [], niveau: "aucun", pisteConnue: true });
  });

  it("brique ordinaire inconnue du contenu : pas de doute en soi (la relation n'est pas jugée ici)", () => {
    expect(analyserNiveau1("doux", mot, contexte()).niveau).toBe("aucun");
  });

  it("erreur certaine : mot prononcé ou famille déclarée", () => {
    expect(analyserNiveau1("roche", mot, contexte()).erreurs).toHaveLength(1);
  });

  it("racine commune possible : doute élevé, avec la raison", () => {
    const a = analyserNiveau1("rochers", { reponse: "rocheux" }, contexte());
    expect(a.niveau).toBe("eleve");
    expect(a.indices[0].raison).toContain("racine commune possible");
  });

  it("mot absent du dictionnaire : doute élevé", () => {
    const a = analyserNiveau1("ecueuil", mot, contexte());
    expect(a.niveau).toBe("eleve");
    expect(a.indices[0].raison).toContain("absent du dictionnaire");
  });

  it("consonance sans relation : doute moyen (bateau pour râteau)", () => {
    const a = analyserNiveau1("bateau", { reponse: "râteau" }, contexte());
    expect(a.niveau).toBe("moyen");
    expect(a.indices[0].raison).toContain("consonance");
  });

  it("1re brique grammaticale : doute faible, et indices cumulés", () => {
    expect(analyserNiveau1("adjectif", mot, contexte()).niveau).toBe("faible");
    const a = analyserNiveau1("chapeau", mot, contexte(["chapeau"]));
    expect(a.indices.map((i) => i.raison).join()).toContain("déjà donnée");
    expect(a.indices.map((i) => i.raison).join()).toContain("suivant ou la solution");
    expect(a.doute).toBeGreaterThan(30);
  });

  it("noms propres : pas de contrôle du dictionnaire ni de consonance", () => {
    expect(analyserNiveau1("Giverny", { reponse: "Monet" }, { type: "nom", precedentes: [], dictionnaire }).niveau).toBe("aucun");
  });
});
