import { describe, expect, it } from "vitest";
import {
  abandonnerSolution,
  briqueCourante,
  creerEnigme,
  numeroBriqueCourante,
  proposerSolution,
  repondre,
  scoreEnigme,
  signaler,
  segmentsTexte,
  soldeBriques,
  texteEnigme,
  validerEnigme,
  type EtatEnigme,
} from "./enigme";
import type { Enigme } from "./types";

/** Énigme de test (contenu fictif, mots volontairement simples). */
function enigmeTest(mises = [2, 2, 3, 2, 2]): Enigme {
  const mots = ["alpha", "bravo", "charlie", "delta", "echo"];
  return {
    id: "test",
    difficulte: "facile",
    titre: "Test",
    texte: "{1} {2} {3} {4} {5}",
    solution: "la solution",
    solutionVariantes: ["solution"],
    mots: mots.map((reponse, i) => ({
      rang: i + 1,
      reponse,
      mise: mises[i],
      briques: [{ texte: `${reponse}-b1` }, { texte: `${reponse}-b2` }, { texte: `${reponse}-b3` }],
    })),
  };
}

/** Joue les cinq mots : trouve du premier coup si `trouves[i]`, sinon répond faux jusqu'à épuiser la mise. */
function jouerMots(etat: EtatEnigme, trouves: boolean[]): EtatEnigme {
  let e = etat;
  trouves.forEach((trouve, i) => {
    const mot = e.enigme.mots[i];
    if (trouve) {
      e = repondre(e, mot.reponse);
    } else {
      for (let k = 0; k < mot.mise; k++) e = repondre(e, "faux");
    }
  });
  return e;
}

describe("validerEnigme", () => {
  it("accepte une énigme cohérente", () => {
    expect(validerEnigme(enigmeTest())).toEqual([]);
  });
  it("refuse des mises dont le total dépasse 13", () => {
    expect(validerEnigme(enigmeTest([3, 3, 3, 3, 3])).join()).toContain("mises totales");
  });
  it("refuse une mise supérieure au nombre de briques", () => {
    const e = enigmeTest();
    e.mots[0].mise = 4;
    expect(validerEnigme(e).join()).toContain("briques pour une mise");
  });
  it("refuse un nombre de mots différent de 5", () => {
    const e = enigmeTest();
    e.mots.pop();
    expect(validerEnigme(e).join()).toContain("5 mots attendus");
  });
  it("creerEnigme lève une erreur sur une énigme invalide", () => {
    expect(() => creerEnigme(enigmeTest([5, 5, 5, 5, 5]))).toThrow();
  });
});

describe("déroulé d'un mot", () => {
  it("affiche les briques dans l'ordre", () => {
    let e = creerEnigme(enigmeTest());
    expect(briqueCourante(e)).toBe("alpha-b1");
    expect(numeroBriqueCourante(e)).toBe(1);
    e = repondre(e, "faux");
    expect(briqueCourante(e)).toBe("alpha-b2");
    expect(numeroBriqueCourante(e)).toBe(2);
  });

  it("une bonne réponse à la brique 1 rend la brique 2 de la mise", () => {
    const e = repondre(creerEnigme(enigmeTest()), "Alpha");
    expect(e.resultats[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 1 });
    expect(soldeBriques(e)).toBe(12);
    expect(briqueCourante(e)).toBe("bravo-b1");
  });

  it("une bonne réponse à la dernière brique consomme toute la mise", () => {
    let e = creerEnigme(enigmeTest());
    e = repondre(e, "faux");
    e = repondre(e, "alpha");
    expect(e.resultats[0]).toMatchObject({ statut: "trouve", briquesUtilisees: 2 });
    expect(soldeBriques(e)).toBe(11);
  });

  it("une mise épuisée sans bonne réponse perd le mot", () => {
    let e = creerEnigme(enigmeTest());
    e = repondre(e, "faux");
    e = repondre(e, "faux");
    expect(e.resultats[0]).toMatchObject({ statut: "perdu", briquesUtilisees: 2 });
    expect(soldeBriques(e)).toBe(11);
    expect(e.motIndex).toBe(1);
  });

  it("une réponse vide compte comme une réponse fausse", () => {
    const e = repondre(creerEnigme(enigmeTest()), "  ");
    expect(e.resultats[0].reponses).toEqual(["  "]);
    expect(e.resultats[0].statut).toBe("a-jouer");
    expect(numeroBriqueCourante(e)).toBe(2);
  });

  it("l'état précédent n'est pas modifié (immutabilité)", () => {
    const e0 = creerEnigme(enigmeTest());
    repondre(e0, "alpha");
    expect(e0.resultats[0].statut).toBe("a-jouer");
    expect(e0.motIndex).toBe(0);
  });
});

describe("score", () => {
  it("cinq mots trouvés du premier coup : mots + bonus + solution", () => {
    let e = jouerMots(creerEnigme(enigmeTest()), [true, true, true, true, true]);
    expect(e.phase).toBe("solution");
    expect(soldeBriques(e)).toBe(8);
    e = proposerSolution(e, "La solution");
    expect(e.phase).toBe("terminee");
    expect(scoreEnigme(e)).toEqual({ mots: 5, bonus: 8, solution: 1, total: 14 });
  });

  it("un mot perdu supprime le bonus", () => {
    const e = jouerMots(creerEnigme(enigmeTest()), [true, false, true, true, true]);
    expect(scoreEnigme(e)).toEqual({ mots: 4, bonus: 0, solution: 0, total: 4 });
  });

  it("tous les mots trouvés avec des briques consommées : bonus = briques restantes", () => {
    let e = creerEnigme(enigmeTest());
    e = repondre(e, "faux");
    e = repondre(e, "alpha"); // mot 1 trouvé à la brique 2
    for (const mot of ["bravo", "charlie", "delta", "echo"]) e = repondre(e, mot);
    expect(soldeBriques(e)).toBe(7); // 13 - (2 + 1 + 1 + 1 + 1)
    expect(scoreEnigme(e)).toEqual({ mots: 5, bonus: 7, solution: 0, total: 12 });
  });
});

describe("signalement à l'arbitre", () => {
  it("annule le mot sans point ni brique consommée et passe au suivant", () => {
    let e = creerEnigme(enigmeTest());
    e = repondre(e, "faux"); // une brique déjà jouée sur ce mot
    e = signaler(e);
    expect(e.resultats[0]).toMatchObject({ statut: "annule", briquesUtilisees: 0 });
    expect(soldeBriques(e)).toBe(13);
    expect(e.motIndex).toBe(1);
  });

  it("supprime le bonus car un mot n'est pas trouvé", () => {
    let e = creerEnigme(enigmeTest());
    e = signaler(e);
    for (const mot of ["bravo", "charlie", "delta", "echo"]) e = repondre(e, mot);
    expect(scoreEnigme(e)).toEqual({ mots: 4, bonus: 0, solution: 0, total: 4 });
  });

  it("signaler le dernier mot passe à la solution", () => {
    let e = jouerMots(creerEnigme(enigmeTest()), [true, true, true, true]);
    e = signaler(e);
    expect(e.phase).toBe("solution");
  });
});

describe("texteEnigme", () => {
  it("replace les mots trouvés et ne révèle jamais les autres", () => {
    let e = creerEnigme({ ...enigmeTest(), texte: "{1} - {2} - {3} - {4} - {5}" });
    e = repondre(e, "alpha");
    e = repondre(e, "faux");
    e = repondre(e, "faux"); // bravo perdu
    e = signaler(e); // charlie annulé
    expect(texteEnigme(e)).toBe("alpha - ____ - ____ - ____ - ____");
  });
});

describe("segmentsTexte", () => {
  it("révèle chaque mot avec son statut", () => {
    let e = creerEnigme({ ...enigmeTest(), texte: "A {1} B {2} {3} {4} {5}." });
    e = repondre(e, "alpha");
    e = repondre(e, "faux");
    e = repondre(e, "faux"); // bravo perdu
    e = signaler(e); // charlie annulé
    const segments = segmentsTexte(e);
    expect(segments.slice(0, 4)).toEqual([
      { texte: "A " },
      { texte: "alpha", rang: 1, statut: "trouve" },
      { texte: " B " },
      { texte: "bravo", rang: 2, statut: "perdu" },
    ]);
    expect(segments[5]).toEqual({ texte: "charlie", rang: 3, statut: "annule" });
    expect(segments.at(-1)).toEqual({ texte: "." });
  });
});

describe("solution", () => {
  const apresMots = () => jouerMots(creerEnigme(enigmeTest()), [true, true, true, true, true]);

  it("accepte plusieurs essais avant la bonne réponse", () => {
    let e = proposerSolution(apresMots(), "erreur");
    expect(e.phase).toBe("solution");
    expect(e.solutionTrouvee).toBe(false);
    e = proposerSolution(e, "solution");
    expect(e.phase).toBe("terminee");
    expect(e.solutionTrouvee).toBe(true);
    expect(e.essaisSolution).toEqual(["erreur", "solution"]);
  });

  it("l'abandon termine l'énigme sans point de solution", () => {
    const e = abandonnerSolution(apresMots());
    expect(e.phase).toBe("terminee");
    expect(scoreEnigme(e).solution).toBe(0);
  });

  it("refuse de proposer la solution pendant les mots", () => {
    expect(() => proposerSolution(creerEnigme(enigmeTest()), "x")).toThrow();
  });

  it("refuse de répondre une fois les mots terminés", () => {
    expect(() => repondre(apresMots(), "x")).toThrow();
  });
});
