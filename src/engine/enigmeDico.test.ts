import { describe, expect, it } from "vitest";
import {
  creerEnigmeDico,
  jouerBrique,
  miser,
  miseMax,
  proposerSolutionDico,
  refuserBrique,
  scoreEnigmeDico,
  soldeDico,
  texteEnigmeDico,
  type EtatEnigmeDico,
} from "./enigmeDico";
import type { Enigme } from "./types";

function enigme(): Enigme {
  const mots = ["alpha", "bravo", "charlie", "delta", "echo"];
  return {
    id: "d1",
    difficulte: "facile",
    titre: "Test",
    texte: "{1} {2} {3} {4} {5}",
    solution: "la solution",
    mots: mots.map((reponse, i) => ({ rang: i + 1, reponse, mise: 2, briques: [{ texte: "x" }, { texte: "y" }] })),
  };
}

/** Joue un mot en entier : mise 2, Syno trouve à la 1re brique. */
function trouverDuPremierCoup(e: EtatEnigmeDico): EtatEnigmeDico {
  const reponse = e.enigme.mots[e.motIndex].reponse;
  return jouerBrique(miser(e, 2), "piste", reponse);
}

describe("mise", () => {
  it("garde au moins une brique pour chacun des mots suivants", () => {
    const e = creerEnigmeDico(enigme());
    expect(miseMax(e)).toBe(9); // 13 - 4 mots restants
    expect(() => miser(e, 10)).toThrow();
    expect(() => miser(e, 0)).toThrow();
  });

  it("refuse une brique avant la mise", () => {
    expect(() => jouerBrique(creerEnigmeDico(enigme()), "piste", "x")).toThrow();
  });
});

describe("déroulé d'un mot", () => {
  it("Syno trouve à la 1re brique : la mise reste pariée (le bonus se calcule sur les mises)", () => {
    const e = trouverDuPremierCoup(creerEnigmeDico(enigme()));
    expect(e.mots[0]).toMatchObject({ statut: "trouve", briques: ["piste"] });
    expect(soldeDico(e)).toBe(11); // 13 - mise de 2
    expect(e.motIndex).toBe(1);
  });

  it("mise épuisée sans bonne réponse : mot perdu, mise consommée", () => {
    let e = miser(creerEnigmeDico(enigme()), 2);
    e = jouerBrique(e, "a", "faux");
    expect(e.motIndex).toBe(0);
    e = jouerBrique(e, "b", "faux");
    expect(e.mots[0].statut).toBe("perdu");
    expect(soldeDico(e)).toBe(11);
  });

  it("brique interdite : mot refusé, mise perdue", () => {
    let e = miser(creerEnigmeDico(enigme()), 3);
    e = refuserBrique(e, "alphabet", "même racine");
    expect(e.mots[0]).toMatchObject({ statut: "refuse", motifRefus: "même racine" });
    expect(soldeDico(e)).toBe(10);
  });
});

describe("solution et score", () => {
  it("cinq mots trouvés puis solution : mots + bonus + solution", () => {
    let e = creerEnigmeDico(enigme());
    for (let k = 0; k < 5; k++) e = trouverDuPremierCoup(e);
    expect(e.phase).toBe("solution");
    expect(texteEnigmeDico(e)).toBe("alpha bravo charlie delta echo");
    e = proposerSolutionDico(e, "Solution");
    expect(e.phase).toBe("terminee");
    expect(scoreEnigmeDico(e)).toEqual({ mots: 5, bonus: 3, solution: 1, total: 9 }); // 5 mises de 2 = 10 briques pariées
  });

  it("Syno a trois essais pour la solution", () => {
    let e = creerEnigmeDico(enigme());
    for (let k = 0; k < 5; k++) e = trouverDuPremierCoup(e);
    e = proposerSolutionDico(e, "non");
    e = proposerSolutionDico(e, "toujours pas");
    expect(e.phase).toBe("solution");
    e = proposerSolutionDico(e, "raté");
    expect(e.phase).toBe("terminee");
    expect(scoreEnigmeDico(e).solution).toBe(0);
  });

  it("le texte donné à Syno masque les mots non trouvés", () => {
    let e = trouverDuPremierCoup(creerEnigmeDico(enigme()));
    e = refuserBrique(miser(e, 1), "x", "interdit");
    expect(texteEnigmeDico(e).startsWith("alpha ____")).toBe(true);
  });
});
