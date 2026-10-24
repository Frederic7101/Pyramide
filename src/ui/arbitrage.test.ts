import { describe, expect, it } from "vitest";
import { noteArbitre, refuse } from "./arbitrage";

const verdict = (valide: boolean, certain: boolean) => ({ valide, certain, motif: valide ? null : "racine", regle: "4", explication: "x." });

describe("décision de l'arbitre", () => {
  it("refuse seulement une invalidité certaine : le doute profite au joueur", () => {
    expect(refuse(verdict(false, true))).toBe(true);
    expect(refuse(verdict(false, false))).toBe(false);
    expect(refuse(verdict(true, true))).toBe(false);
    expect(refuse(null)).toBe(false);
  });

  it("explique au joueur un doute ou un arbitrage indisponible", () => {
    expect(noteArbitre(verdict(false, false))).toContain("doute profite au joueur");
    expect(noteArbitre(null)).toContain("indisponible");
    expect(noteArbitre(verdict(true, true))).toContain("conforme");
    expect(noteArbitre(undefined)).toBe("");
  });
});
