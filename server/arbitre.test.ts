import { describe, expect, it } from "vitest";
import { construireMessageArbitre, lireVerdict } from "./arbitre";

describe("construireMessageArbitre", () => {
  it("donne le mot, la famille déclarée et l'enchaînement numéroté", () => {
    const m = construireMessageArbitre({ type: "mot", motADeviner: "régicide", famille: ["roi"], briques: ["Baygon", "Henri IV"] });
    expect(m).toContain("« régicide »");
    expect(m).toContain("roi");
    expect(m).toContain("1. Baygon\n2. Henri IV");
    expect(m).toContain("n°2");
  });

  it("précise l'épreuve des Noms Propres et son thème", () => {
    expect(construireMessageArbitre({ type: "nom", motADeviner: "Monet", theme: "Peintres", briques: ["Giverny"] })).toContain("Noms Propres (thème : « Peintres »)");
  });
});

describe("lireVerdict", () => {
  it("lit un verdict valide (motif « aucun » → null)", () => {
    expect(lireVerdict('{"valide":true,"certain":true,"motif":"aucun","regle":"","explication":"Conforme."}')).toEqual({ valide: true, certain: true, motif: null, regle: "", explication: "Conforme." });
  });

  it("lit un verdict invalide et remplace un motif inconnu par « autre »", () => {
    expect(lireVerdict('{"valide":false,"certain":true,"motif":"rebus","regle":"4.3.2.d","explication":"Rébus."}').motif).toBe("rebus");
    expect(lireVerdict('{"valide":false,"certain":true,"motif":"bizarre","regle":"","explication":"?"}').motif).toBe("autre");
  });

  it("rejette un verdict mal formé", () => {
    expect(() => lireVerdict('{"valide":"oui"}')).toThrow();
  });
});
