import { describe, expect, it } from "vitest";
import type { Brique, Enigme, ListeNomsPropres } from "../engine/types";
import { familleSuffixe } from "./suffixes";
import { controlerBriqueJoueur, validerContenu, validerContenuEnigme, validerContenuNoms, type Probleme } from "./validation";

/** Brique de relation valide par défaut (synonyme du mot). */
const syn = (texte: string): Brique => ({ texte, role: "relation", relation: "synonyme", cible: "mot" });

/** Énigme valide de référence ; chaque test y introduit une faute. */
function enigme(): Enigme {
  const mots = ["encyclopedie", "lent", "verbe", "chapeau", "valise"];
  return {
    id: "e1",
    difficulte: "facile",
    titre: "Test",
    texte: "{1} {2} {3} {4} {5}",
    solution: "réponse finale",
    mots: mots.map((reponse, i) => ({
      rang: i + 1,
      reponse,
      mise: 2,
      briques: [syn(`piste${"abcde"[i]}un`), { texte: `piste${"abcde"[i]}deux`, role: "incitation", amene: `${reponse.slice(0, 2)}xx`, son: reponse.slice(0, 2) }],
      famille: i === 0 ? ["encyclopédique", "encyclopédiste"] : [],
    })),
  };
}

function avecBriques(e: Enigme, rang: number, briques: Brique[]): Enigme {
  e.mots[rang - 1].briques = briques;
  return e;
}

const erreurs = (p: Probleme[]) => p.filter((x) => x.niveau === "erreur");
const avertissements = (p: Probleme[]) => p.filter((x) => x.niveau === "avertissement");

describe("énigme de référence", () => {
  it("ne produit aucun problème", () => {
    expect(validerContenuEnigme(enigme())).toEqual([]);
  });
});

describe("enchaînement", () => {
  it("l'erreur cite l'enchaînement au format « a + b → mot »", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 4, [{ texte: "minou", role: "incitation" }, syn("bibi")]));
    expect(erreurs(p)[0]).toMatchObject({ emplacement: "mot 4, brique 1", regle: "4.3.3.a" });
    expect(erreurs(p)[0].message).toContain("[minou + bibi → chapeau]");
  });

  it("seules les briques misées forment l'enchaînement ; les autres sont signalées", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 2, [syn("rapide"), syn("lambin"), { texte: "minou", role: "incitation" }, { texte: "pot", role: "incitation" }]));
    expect(erreurs(p)).toEqual([]);
    expect(avertissements(p)[0].message).toContain("au-delà de la mise");
  });
});

describe("incitations", () => {
  it("son commun en début de mot : aucun avertissement (Prévost → abbé → ab → abeilles)", () => {
    const e = enigme();
    e.mots[3].reponse = "abeilles";
    const p = validerContenuEnigme(avecBriques(e, 4, [syn("bourdons"), { texte: "Prévost", role: "incitation", amene: "abbé", son: "ab" }]));
    expect(avertissements(p)).toEqual([]);
  });

  it("son commun écrit différemment dans le mot évoqué (connaît → sait → scène)", () => {
    const e = enigme();
    e.mots[3].reponse = "scène";
    const p = validerContenuEnigme(avecBriques(e, 4, [syn("séquence"), { texte: "connaît", role: "incitation", amene: "sait", son: "scè", sonEvoque: "sai" }]));
    expect(avertissements(p)).toEqual([]);
  });

  it("son commun en fin de mot, déclaré comme tel (faible → fort → ef-fort)", () => {
    const e = enigme();
    e.mots[3].reponse = "effort";
    const p = validerContenuEnigme(avecBriques(e, 4, [syn("labeur"), { texte: "faible", role: "incitation", amene: "fort", son: "fort", position: "fin" }]));
    expect(avertissements(p)).toEqual([]);
  });

  it("avertissement si le son commun n'est pas au début du mot (onéreux → cher → ro-cher)", () => {
    const e = enigme();
    e.mots[3].reponse = "rocher";
    const p = validerContenuEnigme(avecBriques(e, 4, [syn("écueil"), { texte: "onéreux", role: "incitation", amene: "cher", son: "cher" }]));
    expect(avertissements(p)[0]).toMatchObject({ regle: "4.4" });
  });

  it("avertissement si l'incitation ne déclare pas ce qu'elle fait entendre", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 4, [syn("bibi"), { texte: "minou", role: "incitation" }]));
    expect(avertissements(p)[0].message).toContain("son commun");
  });
});

describe("contrôles par mot", () => {
  it("erreur si la brique contient le mot à deviner (accents et casse ignorés)", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 1, [syn("Encyclopédie"), syn("x")]));
    expect(erreurs(p)[0]).toMatchObject({ emplacement: "mot 1, brique 1", regle: "4" });
  });

  it("erreur si la brique appartient à la famille déclarée", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 1, [syn("encyclopédique"), syn("dictionnaire")]));
    expect(erreurs(p)[0].message).toContain("famille de racine");
  });

  it("avertissement si la brique commence comme le mot (racine possible)", () => {
    const e = enigme();
    e.mots[3].reponse = "chapeauter";
    const p = validerContenuEnigme(avecBriques(e, 4, [syn("chapeau"), syn("coiffer")]));
    expect(erreurs(p)).toEqual([]);
    expect(avertissements(p)[0].message).toContain("racine commune possible");
  });

  it("erreur si la brique contient un mot de la solution", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 2, [syn("finale"), syn("rapide")]));
    expect(erreurs(p)[0].message).toContain("solution");
  });

  it("erreur si une brique est un mot suivant de l'énigme (Dico ne le connaît pas encore)", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 1, [syn("dictionnaire"), syn("chapeau")]));
    expect(erreurs(p)[0].message).toContain("mot n°4");
  });

  it("erreur pour des chiffres ou une date", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 2, [syn("1789"), syn("rapide")]));
    expect(erreurs(p)[0].regle).toBe("4.2.1.k");
  });

  it("avertissement pour une lettre seule", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 2, [syn("lambda"), syn("« g »")]));
    expect(avertissements(p)[0].regle).toBe("4.2.1.g");
  });

  it("erreur pour une brique vide", () => {
    const p = validerContenuEnigme(avecBriques(enigme(), 2, [syn("  "), syn("rapide")]));
    expect(erreurs(p)[0].message).toBe("brique vide");
  });
});

describe("suffixes à valeur de racine", () => {
  it("familleSuffixe trouve le suffixe le plus long", () => {
    expect(familleSuffixe("genocide")?.suffixe).toBe("cide");
    expect(familleSuffixe("discographie")?.suffixe).toBe("graphie");
    expect(familleSuffixe("cide")).toBeNull();
  });

  it("homicide → génocide est relevé", () => {
    const e = enigme();
    e.mots[1].reponse = "génocide";
    const p = validerContenuEnigme(avecBriques(e, 2, [syn("homicide"), syn("massacre")]));
    expect(p.some((x) => x.regle === "4.2.1.f")).toBe(true);
  });

  it("erreur pour deux suffixes longs d'une même famille (-graphie / -graphe)", () => {
    const e = enigme();
    e.mots[1].reponse = "photographie";
    const p = validerContenuEnigme(avecBriques(e, 2, [syn("calligraphe"), syn("image")]));
    expect(erreurs(p).some((x) => x.regle === "4.2.1.f")).toBe(true);
  });
});

describe("titre de l'énigme", () => {
  it("erreur si le titre contient un mot à trouver", () => {
    const e = enigme();
    e.titre = "Le chapeau du magicien";
    expect(erreurs(validerContenuEnigme(e))[0]).toMatchObject({ emplacement: "titre" });
    expect(erreurs(validerContenuEnigme(e))[0].message).toContain("mot n°4");
  });

  it("erreur si le titre contient la solution", () => {
    const e = enigme();
    e.titre = "La finale";
    expect(erreurs(validerContenuEnigme(e))[0].message).toContain("solution");
  });
});

describe("texte de l'énigme", () => {
  it("erreur si un emplacement manque ou est dans le désordre", () => {
    const e = enigme();
    e.texte = "{2} {1} {3} {4}";
    expect(erreurs(validerContenuEnigme(e))[0].emplacement).toBe("texte");
  });

  it("reprend les erreurs de structure du moteur (mises > 13)", () => {
    const e = enigme();
    e.mots.forEach((m) => (m.mise = 3));
    e.mots.forEach((m) => m.briques.push(syn("autre")));
    expect(erreurs(validerContenuEnigme(e))[0].message).toContain("mises totales");
  });
});

describe("noms propres", () => {
  const ass = (texte: string): Brique => ({ texte, role: "relation", relation: "association", cible: "mot" });
  function liste(): ListeNomsPropres {
    return {
      id: "np1",
      difficulte: "facile",
      theme: "Peintres",
      noms: [
        { rang: 1, reponse: "Claude Monet", partielles: ["Monet"], briques: [ass("Giverny"), ass("nénuphar")] },
        { rang: 2, reponse: "Pablo Picasso", briques: [ass("Guernica")] },
        { rang: 3, reponse: "Léonard de Vinci", briques: [ass("Joconde")] },
        { rang: 4, reponse: "Vincent van Gogh", briques: [ass("tournesols")] },
      ],
    };
  }

  it("liste de référence sans problème ; « de » reste autorisé", () => {
    const l = liste();
    l.noms[2].briques = [ass("Cécile de France")];
    // Personne en plusieurs mots : permis, signalé à vérifier (ni erreur, ni titre d'œuvre ou marque).
    expect(erreurs(validerContenuNoms(l))).toEqual([]);
  });

  it("erreur si une brique prononce une partie du nom", () => {
    const l = liste();
    l.noms[0].briques = [ass("Claude François")];
    expect(erreurs(validerContenuNoms(l))[0]).toMatchObject({ emplacement: "nom 1, brique 1" });
  });

  it("incitation en 1re brique autorisée", () => {
    const l = liste();
    l.noms[1].briques = [{ texte: "pique", role: "incitation" }, { texte: "assaut", role: "incitation" }];
    expect(erreurs(validerContenuNoms(l))).toEqual([]);
  });

  it("reprend les erreurs de structure (plus de 3 briques)", () => {
    const l = liste();
    l.noms[1].briques = [ass("a1"), ass("a2"), ass("a3"), ass("a4")];
    expect(erreurs(validerContenuNoms(l))[0].message).toContain("1 à 3");
  });
});

describe("validerContenu", () => {
  it("erreur si deux contenus ont le même identifiant", () => {
    const p = validerContenu([enigme(), enigme()], []);
    expect(erreurs(p)[0].message).toContain("deux fois");
  });
});

describe("controlerBriqueJoueur (mode Dico)", () => {
  it("refuse le mot à deviner, sa famille déclarée et les dates", () => {
    expect(controlerBriqueJoueur("Encyclopédie !", ["encyclopédie"]).erreurs).toHaveLength(1);
    expect(controlerBriqueJoueur("encyclopédique", ["encyclopédie"], ["encyclopédique"]).erreurs[0]).toContain("famille");
    expect(controlerBriqueJoueur("1789", ["révolution"]).erreurs[0]).toContain("date");
  });

  it("accepte une brique ordinaire, et avertit si elle dévoile un autre mot", () => {
    expect(controlerBriqueJoueur("dictionnaire", ["encyclopédie"])).toEqual({ erreurs: [], avertissements: [] });
    expect(controlerBriqueJoueur("chapeau", ["encyclopédie"], [], ["chapeau"]).avertissements[0]).toContain("suivant ou la solution");
  });
});
