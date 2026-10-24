import { describe, expect, it } from "vitest";
import { abandonnerNom, completerNom, creerNomsDico, jouerBriqueNom, peutCompleter, refuserBriqueNom, scoreNomsDico } from "./nomsDico";
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

  it("réponse incomplète : « Complétez » une seule fois", () => {
    let e = creerNomsDico(liste);
    e = jouerBriqueNom(e, "Giverny", "Monet");
    expect(peutCompleter(e)).toBe(true);
    e = completerNom(e, "Édouard Monet");
    expect(peutCompleter(e)).toBe(false);
    expect(e.noms[0].statut).toBe("a-jouer");
    e = jouerBriqueNom(e, "nymphéas", "Claude Monet");
    expect(e.noms[0].statut).toBe("trouve");
  });

  it("réponse incomplète à la 3e brique : le nom attend « Complétez » ou l'abandon", () => {
    let e = creerNomsDico(liste);
    e = jouerBriqueNom(e, "a", "Renoir");
    e = jouerBriqueNom(e, "b", "Manet");
    e = jouerBriqueNom(e, "c", "Monet");
    expect(e.nomIndex).toBe(0);
    expect(peutCompleter(e)).toBe(true);
    expect(abandonnerNom(e).noms[0].statut).toBe("perdu");
    expect(completerNom(e, "Claude Monet").noms[0].statut).toBe("trouve");
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
