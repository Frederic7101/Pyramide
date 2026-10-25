import { describe, expect, it } from "vitest";
import { briqueDeMemeFamille, memeFamille } from "../src/engine/matching";
import type { DemandeSyno, ReponseSyno } from "../src/engine/synoTypes";
import { avecGardeFamille } from "./syno";

describe("mots de la même famille", () => {
  it("reconnaît un mot contenu dans l'autre, au pluriel et aux accents près", () => {
    expect(memeFamille("proche", "rapproche")).toBe(true);
    expect(memeFamille("proche", "approcher")).toBe(true);
    expect(memeFamille("fleur", "Fleurs")).toBe(true);
    expect(memeFamille("pétrifié", "petrifier")).toBe(true);
  });

  it("ne confond pas des mots courts ou sans rapport", () => {
    expect(memeFamille("chat", "chateau")).toBe(false);
    expect(memeFamille("port", "portrait")).toBe(false);
    expect(memeFamille("mer", "mère")).toBe(false);
    expect(memeFamille("rouge", "vert")).toBe(false);
  });

  it("trouve la brique fautive dans l'enchaînement", () => {
    expect(briqueDeMemeFamille("rapproche", ["proche"])).toBe("proche");
    expect(briqueDeMemeFamille("disparue", ["partie", "Saint Agil"])).toBeUndefined();
  });
});

describe("garde de Syno contre les propositions impossibles", () => {
  const demande: DemandeSyno = { type: "mot", briques: ["proche"], reponsesFausses: [] };

  it("redemande quand la proposition est de la même famille qu'une brique, en la signalant comme fausse", async () => {
    const appels: DemandeSyno[] = [];
    const reponses = ["rapproche", "voisin"];
    const deviner = async (d: DemandeSyno): Promise<ReponseSyno> => {
      appels.push(d);
      return { reponse: reponses[appels.length - 1] };
    };
    const resultat = await avecGardeFamille(demande, deviner);
    expect(resultat.reponse).toBe("voisin");
    expect(appels[1].reponsesFausses).toEqual(["rapproche"]);
  });

  it("ne relance pas quand la proposition est possible, ni pour la solution d'une énigme", async () => {
    let appels = 0;
    const deviner = async (): Promise<ReponseSyno> => ({ reponse: (appels++, "voisin") });
    expect((await avecGardeFamille(demande, deviner)).reponse).toBe("voisin");
    expect(appels).toBe(1);
    const solution: DemandeSyno = { type: "solution", briques: ["proche"], reponsesFausses: [], texte: "…" };
    await avecGardeFamille(solution, async () => ({ reponse: "rapproche" }));
  });

  it("s'arrête après deux relances", async () => {
    let appels = 0;
    const resultat = await avecGardeFamille(demande, async () => ({ reponse: (appels++, "rapproche") }));
    expect(appels).toBe(3);
    expect(resultat.reponse).toBe("rapproche");
  });
});
