import { describe, expect, it } from "vitest";
import { CLE_JOURNAL, contenuExclu, creerJournal, type StockageCle } from "./journal";
import type { NouveauSignalement } from "./types";

function fauxStockage(): StockageCle & { donnees: Map<string, string> } {
  const donnees = new Map<string, string>();
  return {
    donnees,
    getItem: (c) => donnees.get(c) ?? null,
    setItem: (c, v) => void donnees.set(c, v),
  };
}

const exemple: NouveauSignalement = {
  contenuId: "enigme-001",
  rangMot: 2,
  motADeviner: "encyclopédie",
  briques: ["dictionnaire", "Diderot"],
  briqueSignalee: 2,
  avis: "invalide",
  motif: "sans-relation",
  commentaire: "",
  versionContenu: "test",
};

describe("journal des signalements", () => {
  it("ajoute un signalement à examiner avec la règle du motif", () => {
    const j = creerJournal(fauxStockage());
    const s = j.ajouter(exemple);
    expect(s.statut).toBe("a-examiner");
    expect(s.decision).toBeNull();
    expect(s.regle).toBe("4.1");
    expect(s.id).toBeTruthy();
    expect(j.lister()).toHaveLength(1);
  });

  it("persiste et recharge les signalements", () => {
    const stockage = fauxStockage();
    creerJournal(stockage).ajouter(exemple);
    expect(stockage.donnees.has(CLE_JOURNAL)).toBe(true);
    expect(creerJournal(stockage).lister()).toHaveLength(1);
  });

  it("confirmer garde l'avis, rejeter l'inverse", () => {
    const j = creerJournal(fauxStockage());
    const a = j.ajouter(exemple);
    const b = j.ajouter({ ...exemple, avis: "valide", motif: null });
    j.examiner(a.id, "confirme");
    j.examiner(b.id, "rejete");
    const [sa, sb] = j.lister();
    expect(sa).toMatchObject({ statut: "confirme", decision: "invalide" });
    expect(sb).toMatchObject({ statut: "rejete", decision: "invalide" });
  });

  it("rejeter un signalement invalide le juge valide", () => {
    const j = creerJournal(fauxStockage());
    const a = j.ajouter(exemple);
    j.examiner(a.id, "rejete");
    expect(j.lister()[0].decision).toBe("valide");
  });

  it("export puis import dans un autre journal, sans doublons", () => {
    const j1 = creerJournal(fauxStockage());
    j1.ajouter(exemple);
    j1.ajouter({ ...exemple, rangMot: 3 });
    const export1 = j1.exporter();
    const j2 = creerJournal(fauxStockage());
    expect(j2.importer(export1)).toBe(2);
    expect(j2.importer(export1)).toBe(0);
    expect(j2.lister()).toHaveLength(2);
  });

  it("refuse un import invalide et ignore les entrées mal formées", () => {
    const j = creerJournal(fauxStockage());
    expect(() => j.importer("pas du json")).toThrow();
    expect(() => j.importer('{"a":1}')).toThrow();
    expect(j.importer('[{"id":"x"}, 3, null]')).toBe(0);
  });

  it("ignore un stockage corrompu", () => {
    const stockage = fauxStockage();
    stockage.setItem(CLE_JOURNAL, "{corrompu");
    const j = creerJournal(stockage);
    expect(j.lister()).toEqual([]);
    expect(j.stockageIndisponible).toBe(true);
  });

  it("fonctionne même si l'écriture échoue", () => {
    const j = creerJournal({
      getItem: () => null,
      setItem: () => {
        throw new Error("quota");
      },
    });
    j.ajouter(exemple);
    expect(j.lister()).toHaveLength(1);
    expect(j.stockageIndisponible).toBe(true);
  });

  it("supprimerTout vide le journal", () => {
    const j = creerJournal(fauxStockage());
    j.ajouter(exemple);
    j.supprimerTout();
    expect(j.lister()).toEqual([]);
  });
});

describe("contenuExclu", () => {
  it("exclut un mot dont un signalement est confirmé invalide", () => {
    const j = creerJournal(fauxStockage());
    const s = j.ajouter(exemple);
    expect(contenuExclu(j.lister(), "enigme-001", 2)).toBe(false);
    j.examiner(s.id, "confirme");
    expect(contenuExclu(j.lister(), "enigme-001", 2)).toBe(true);
    expect(contenuExclu(j.lister(), "enigme-001", 3)).toBe(false);
  });

  it("n'exclut pas un mot dont le signalement est rejeté", () => {
    const j = creerJournal(fauxStockage());
    const s = j.ajouter(exemple);
    j.examiner(s.id, "rejete");
    expect(contenuExclu(j.lister(), "enigme-001", 2)).toBe(false);
  });
});
