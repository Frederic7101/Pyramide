import { describe, expect, it } from "vitest";
import { aleatoire, tirer, joueesDuCycle } from "./tirage";

const contenus = ["a", "b", "c", "d"].map((id) => ({ id }));

describe("tirer", () => {
  it("ne rejoue aucun contenu avant d'avoir joué tous les autres", () => {
    let historique: string[] = [];
    const vus: string[] = [];
    for (let k = 0; k < 4; k++) {
      const r = tirer(contenus, historique);
      vus.push(r.choisi.id);
      historique = r.historique;
    }
    expect([...vus].sort()).toEqual(["a", "b", "c", "d"]);
  });

  it("au début d'un nouveau cycle, évite le dernier contenu joué", () => {
    for (let k = 0; k < 50; k++) {
      const r = tirer(contenus, ["a", "b", "c", "d"]);
      expect(r.choisi.id).not.toBe("d");
      expect(r.historique).toEqual([r.choisi.id]);
    }
  });

  it("ignore les identifiants qui ne sont plus dans le contenu", () => {
    const r = tirer(contenus, ["zzz", "a", "b", "c"], () => 0);
    expect(r.choisi.id).toBe("d");
    expect(r.historique).toEqual(["a", "b", "c", "d"]);
  });

  it("fonctionne avec un seul contenu", () => {
    expect(tirer([{ id: "seul" }], ["seul"]).choisi.id).toBe("seul");
  });

  it("répartit les tirages sur tous les contenus", () => {
    const comptes = new Map<string, number>();
    for (let k = 0; k < 4000; k++) {
      const id = tirer(contenus, []).choisi.id;
      comptes.set(id, (comptes.get(id) ?? 0) + 1);
    }
    for (const c of contenus) expect(comptes.get(c.id)).toBeGreaterThan(800);
  });

  it("aleatoire reste dans [0, 1)", () => {
    for (let k = 0; k < 1000; k++) {
      const x = aleatoire();
      expect(x).toBeGreaterThanOrEqual(0);
      expect(x).toBeLessThan(1);
    }
  });
});

describe("joueesDuCycle", () => {
  it("compte les contenus du niveau déjà joués, une seule fois, en ignorant les autres niveaux", () => {
    const contenus = [{ id: "a" }, { id: "b" }, { id: "c" }];
    expect(joueesDuCycle(contenus, ["a", "x", "b", "a"])).toBe(2);
    expect(joueesDuCycle(contenus, [])).toBe(0);
  });
});
