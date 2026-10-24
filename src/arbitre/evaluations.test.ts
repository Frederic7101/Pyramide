import { describe, expect, it } from "vitest";
import { CLE_EVALUATIONS, creerEvaluations, type NouvelleEvaluation } from "./evaluations";
import type { StockageCle } from "./journal";
import { pistesFaibles, synthetiserContenus } from "./syntheseEvaluations";

function fauxStockage(): StockageCle & { donnees: Map<string, string> } {
  const donnees = new Map<string, string>();
  return { donnees, getItem: (c) => donnees.get(c) ?? null, setItem: (c, v) => void donnees.set(c, v) };
}

const evaluation = (surcharge: Partial<NouvelleEvaluation> = {}): NouvelleEvaluation => ({
  type: "enigme",
  contenuId: "e-340",
  versionContenu: "v",
  difficulteAnnoncee: "difficile",
  niveauRessenti: "difficile",
  note: 4,
  commentaire: "",
  role: "syno",
  pistes: [{ rangMot: 3, motADeviner: "présomption", briques: ["arrogance", "modestie"], note: 2, commentaire: "trop dur" }],
  ...surcharge,
});

describe("stockage des évaluations", () => {
  it("ajoute, persiste, exporte et importe sans doublon", () => {
    const stockage = fauxStockage();
    const ev = creerEvaluations(stockage);
    ev.ajouter(evaluation());
    expect(stockage.donnees.has(CLE_EVALUATIONS)).toBe(true);
    expect(creerEvaluations(stockage).lister()).toHaveLength(1);
    const autre = creerEvaluations(fauxStockage());
    expect(autre.importer(ev.exporter())).toBe(1);
    expect(autre.importer(ev.exporter())).toBe(0);
  });

  it("ignore les entrées mal formées et un stockage corrompu", () => {
    const stockage = fauxStockage();
    stockage.setItem(CLE_EVALUATIONS, "{corrompu");
    const ev = creerEvaluations(stockage);
    expect(ev.lister()).toEqual([]);
    expect(ev.importer('[{"id":"x","note":9}]')).toBe(0);
    expect(() => ev.importer("{}")).toThrow();
  });
});

describe("synthèse", () => {
  it("note moyenne, niveau ressenti majoritaire et proposition de reclassement", () => {
    const ev = creerEvaluations(fauxStockage());
    ev.ajouter(evaluation({ note: 2, niveauRessenti: "moyen", commentaire: "mots faciles" }));
    ev.ajouter(evaluation({ note: 4, niveauRessenti: "moyen" }));
    ev.ajouter(evaluation({ note: 3, niveauRessenti: "difficile" }));
    const [s] = synthetiserContenus(ev.lister());
    expect(s).toMatchObject({ contenuId: "e-340", nombre: 3, noteMoyenne: 3, niveauSuggere: "moyen", reclasser: true, commentaires: ["mots faciles"] });
    expect(s.ressenti).toEqual({ facile: 0, moyen: 2, difficile: 1 });
  });

  it("en cas d'égalité, garde le niveau annoncé", () => {
    const ev = creerEvaluations(fauxStockage());
    ev.ajouter(evaluation({ niveauRessenti: "moyen" }));
    ev.ajouter(evaluation({ niveauRessenti: "difficile" }));
    expect(synthetiserContenus(ev.lister())[0]).toMatchObject({ niveauSuggere: "difficile", reclasser: false });
  });

  it("relève les pistes mal notées, les pires d'abord", () => {
    const ev = creerEvaluations(fauxStockage());
    ev.ajouter(evaluation());
    ev.ajouter(evaluation({ pistes: [{ rangMot: 1, motADeviner: "ambition", briques: ["aspiration"], note: 5, commentaire: "" }] }));
    ev.ajouter(evaluation({ pistes: [{ rangMot: 2, motADeviner: "soleil", briques: ["astre"], note: 1, commentaire: "ambigu" }] }));
    const faibles = pistesFaibles(ev.lister());
    expect(faibles.map((p) => p.motADeviner)).toEqual(["soleil", "présomption"]);
    expect(faibles[1].commentaires).toEqual(["trop dur"]);
  });
});
