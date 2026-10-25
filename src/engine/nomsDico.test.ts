import { describe, expect, it } from "vitest";
import { creerNomsDico, jouerBriqueNom, peutCompleter, refuserBriqueNom, scoreNomsDico } from "./nomsDico";
import type { ListeNomsPropres } from "./types";

const liste: ListeNomsPropres = {
  id: "npd",
  difficulte: "facile",
  theme: "Peintres",
  noms: [
    { rang: 1, reponse: "Claude Monet", partielles: ["Monet"], briques: [{ texte: "x" }] },
    { rang: 2, reponse: "Hippocrate", briques: [{ texte: "x" }] },
    { rang: 3, reponse: "Lyon", briques: [{ texte: "x" }] },
    { rang: 4, reponse: "Rome", briques: [{ texte: "x" }] },
  ],
};

describe("noms propres en mode Dico", () => {
  it("Syno trouve, y compris avec une orthographe approchée", () => {
    let e = creerNomsDico(liste);
    e = jouerBriqueNom(e, "Giverny", "Claude Monet");
    e = jouerBriqueNom(e, "serment", "Hypocrate");
    expect(e.noms.map((n) => n.statut).slice(0, 2)).toEqual(["trouve", "trouve"]);
    expect(e.nomIndex).toBe(2);
  });

  it("3 briques sans bonne réponse : nom perdu", () => {
    let e = creerNomsDico(liste);
    for (const b of ["a", "b", "c"]) e = jouerBriqueNom(e, b, "Paris");
    expect(e.noms[0].statut).toBe("perdu");
    expect(e.nomIndex).toBe(1);
  });

  it("le nom de famille seul (« Monet » pour « Claude Monet ») est accepté tout de suite", () => {
    let e = creerNomsDico(liste);
    e = jouerBriqueNom(e, "Giverny", "Monet");
    expect(e.noms[0].statut).toBe("trouve");
    expect(peutCompleter(e)).toBe(false);
  });

  it("brique interdite : nom refusé ; score final", () => {
    let e = creerNomsDico(liste);
    e = refuserBriqueNom(e, "Monet", "nom prononcé");
    e = jouerBriqueNom(e, "serment", "Hippocrate");
    e = jouerBriqueNom(e, "Bellecour", "Lyon");
    e = jouerBriqueNom(e, "Colisée", "Rome");
    expect(e.phase).toBe("terminee");
    expect(e.noms[0].statut).toBe("refuse");
    expect(scoreNomsDico(e)).toBe(3);
  });
});
