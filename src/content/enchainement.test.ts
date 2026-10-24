import { describe, expect, it } from "vitest";
import type { Brique } from "../engine/types";
import { controlerEnchainement, estMotGrammatical, formaterEnchainement } from "./enchainement";

// Fabriques de briques, pour écrire les exemples du règlement de façon lisible.
const rel = (texte: string, cible: Brique["cible"] = "mot", relation: Brique["relation"] = "association"): Brique => ({ texte, role: "relation", relation, cible });
const dec = (texte: string): Brique => ({ texte, role: "declinaison" });
const inc = (texte: string): Brique => ({ texte, role: "incitation" });

const erreurs = (b: Brique[], mode: "enigme" | "noms" = "enigme") => controlerEnchainement(b, mode).filter((p) => p.niveau === "erreur");
/** Problèmes de règlement seulement (les conseils de rédaction sont testés à part). */
const regles = (b: Brique[]) => controlerEnchainement(b, "enigme").filter((p) => p.niveau !== "conseil");

describe("exemples du règlement (énigmes)", () => {
  it("Henri IV + Baygon → régicide : autorisé (mot souche puis suffixe)", () => {
    expect(regles([rel("Henri IV", "souche"), rel("Baygon", "suffixe")])).toEqual([]);
  });

  it("Baygon + Henri IV → régicide : interdit (suffixe en 1re brique)", () => {
    expect(erreurs([rel("Baygon", "suffixe"), rel("Henri IV", "souche")])).toMatchObject([{ position: 1, regle: "4.3.2.b" }]);
  });

  it("Henri IV + Charisse → régicide : autorisé (incitation en 2e brique)", () => {
    expect(erreurs([rel("Henri IV", "souche"), inc("Charisse")])).toEqual([]);
  });

  it("adjectif + tableur → excellent : interdit (incitation en 2e brique après « adjectif »)", () => {
    expect(erreurs([dec("adjectif"), inc("tableur")])).toMatchObject([{ position: 2, regle: "4.1" }]);
  });

  it("adjectif + succulent + tableur → excellent : autorisé (incitation en 3e brique)", () => {
    expect(erreurs([dec("adjectif"), rel("succulent", "mot", "synonyme"), inc("tableur")])).toEqual([]);
  });

  it("adjectif + blé → épithète : autorisé (la relation est respectée en 1re brique)", () => {
    expect(erreurs([rel("adjectif"), inc("blé")])).toEqual([]);
  });

  it("rusé + monnaie + russe → roublard : interdit (deux incitations)", () => {
    expect(erreurs([rel("rusé", "souche", "synonyme"), inc("monnaie"), inc("russe")])).toMatchObject([{ position: 3, regle: "4.3.3.a" }]);
  });

  it("vase + poussons → potiron : interdit (deux incitations, dont une en 1re brique)", () => {
    expect(erreurs([inc("vase"), inc("poussons")]).map((p) => p.regle)).toEqual(["4.3.3.a", "4.3.3.a"]);
  });

  it("rébus : aucune relation, sans autre faute (verbe + pluriel + six)", () => {
    expect(erreurs([dec("verbe"), dec("pluriel"), inc("six")])).toMatchObject([{ regle: "4.3.2.d" }]);
  });

  it("attitude + verbe → comporter : autorisé (déclinaison après le mot souche)", () => {
    expect(regles([rel("attitude", "souche", "synonyme"), dec("verbe")])).toEqual([]);
  });

  it("Beaujolais + adverbe → vainement : avertissement (déclinaison d'un homonyme)", () => {
    const p = regles([rel("Beaujolais", "homonyme"), dec("adverbe")]);
    expect(p).toMatchObject([{ niveau: "avertissement", position: 2, regle: "4.3.1.c" }]);
  });

  it("déclinaison en 1re brique hors liste de l'art. 4.1 : interdit", () => {
    expect(erreurs([dec("doctrine"), rel("Vanzetti")])).toMatchObject([{ position: 1, regle: "4.3.1" }]);
  });

  it("préfixe défini après le mot souche : autorisé (Ben Hur + contre → antichar)", () => {
    expect(erreurs([rel("Ben Hur", "souche"), rel("contre", "prefixe", "synonyme")])).toEqual([]);
  });

  it("préfixe défini après un homonyme seulement : interdit", () => {
    expect(erreurs([rel("vin", "homonyme"), rel("contre", "prefixe")])).toMatchObject([{ position: 2, regle: "4.3.2.b" }]);
  });
});

describe("conseils de rédaction", () => {
  it("1re brique en association : conseil (synonyme ou contraire préférable), pas une erreur", () => {
    const p = controlerEnchainement([rel("souterrain"), inc("Rome")], "enigme");
    expect(p).toMatchObject([{ niveau: "conseil", position: 1 }]);
  });

  it("association forte en 1re brique (paire, genre...) : pas de conseil", () => {
    const paire: Brique = { ...rel("cheville"), nature: "paire" };
    const genre: Brique = { ...rel("cétacés"), nature: "genre" };
    expect(controlerEnchainement([paire, inc("bras")], "enigme")).toEqual([]);
    expect(controlerEnchainement([genre, inc("Jonas")], "enigme")).toEqual([]);
  });

  it("association « autre » en 1re brique : conseil", () => {
    expect(controlerEnchainement([{ ...rel("essaim"), nature: "autre" }, inc("rouge")], "enigme")).toMatchObject([{ niveau: "conseil", position: 1 }]);
  });

  it("association en 2e brique et incitation en dernière : aucun conseil", () => {
    expect(controlerEnchainement([rel("convoi", "mot", "synonyme"), rel("rails"), inc("Brain")], "enigme")).toEqual([]);
  });

  it("plusieurs briques sans incitation : aucun conseil (l'incitation reste un jugement)", () => {
    expect(controlerEnchainement([rel("convoi", "mot", "synonyme"), rel("rails")], "enigme")).toEqual([]);
  });

  it("incitation au milieu : conseil de la placer en dernière brique", () => {
    const p = controlerEnchainement([rel("rusé", "souche", "synonyme"), inc("monnaie"), rel("filou", "mot", "synonyme")], "enigme");
    expect(p).toMatchObject([{ niveau: "conseil", position: 2 }]);
  });

  it("une seule brique : pas de conseil d'incitation", () => {
    expect(controlerEnchainement([rel("convoi", "mot", "synonyme")], "enigme")).toEqual([]);
  });

  it("« adjectif » en 1re brique sur 2 briques : pas de conseil (incitation interdite en 2e)", () => {
    expect(controlerEnchainement([dec("adjectif"), rel("succulent", "mot", "synonyme")], "enigme")).toEqual([]);
  });

  it("pas de conseil pour les noms propres (associations attendues)", () => {
    expect(controlerEnchainement([rel("Giverny")], "noms")).toEqual([]);
  });
});

describe("rôles déclarés", () => {
  it("erreur si une brique n'a pas de rôle", () => {
    expect(erreurs([{ texte: "écueil" }])[0].message).toContain("non déclaré");
  });

  it("erreur si une relation n'a ni type ni cible", () => {
    expect(erreurs([{ texte: "écueil", role: "relation" }])[0].regle).toBe("4.1");
  });
});

describe("noms propres (art. 5.3.1)", () => {
  it("incitations multiples dès la 1re brique et rébus autorisés", () => {
    expect(erreurs([inc("vase"), inc("poussons"), inc("encore")], "noms")).toEqual([]);
  });

  it("une déclinaison en 1re brique reste signalée", () => {
    expect(controlerEnchainement([dec("doctrine")], "noms")[0].niveau).toBe("avertissement");
  });
});

describe("outils", () => {
  it("estMotGrammatical reconnaît la liste et ses dérivés", () => {
    expect(estMotGrammatical("Adjectif")).toBe(true);
    expect(estMotGrammatical("pronom")).toBe(true);
    expect(estMotGrammatical("apocope")).toBe(true);
    expect(estMotGrammatical("nomade")).toBe(false);
    expect(estMotGrammatical("moteur")).toBe(false);
  });

  it("formaterEnchainement suit le format du règlement", () => {
    expect(formaterEnchainement([rel("Henri IV"), rel("Baygon")], "régicide")).toBe("Henri IV + Baygon → régicide");
  });
});

describe("briques redondantes", () => {
  it("synonyme puis contraire du même mot : conseil", () => {
    const p = controlerEnchainement([rel("décédé", "mot", "synonyme"), rel("vivant", "mot", "contraire")], "enigme");
    expect(p).toMatchObject([{ niveau: "conseil", position: 2 }]);
  });

  it("contraire qui lève une ambiguïté, justifié : aucun conseil", () => {
    const epaisseur: Brique = { ...rel("épaisseur", "mot", "contraire"), leveAmbiguite: "écarte nuance et raffinement" };
    expect(controlerEnchainement([rel("subtilité", "mot", "synonyme"), epaisseur], "enigme")).toEqual([]);
  });

  it("synonyme puis association ou incitation : aucun conseil", () => {
    expect(controlerEnchainement([rel("décédé", "mot", "synonyme"), inc("bride")], "enigme")).toEqual([]);
    expect(controlerEnchainement([rel("bateaux", "mot", "synonyme"), rel("Titanic")], "enigme")).toEqual([]);
  });
});
