import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";
import { creerDictionnaire, motsInconnus } from "../engine/dictionnaire";
import { creerEnigme, proposerSolution, repondre, scoreEnigme } from "../engine/enigme";
import { creerNoms, repondreNom, scoreNoms } from "../engine/nomsPropres";
import { ENIGMES, LISTES_NOMS_PROPRES } from "./index";
import { MOTS_COMPLEMENTAIRES } from "./motsComplementaires";
import { validerContenu } from "./validation";

describe("contenu publié", () => {
  it("ne contient aucune erreur de validation", () => {
    const erreurs = validerContenu(ENIGMES, LISTES_NOMS_PROPRES).filter((p) => p.niveau === "erreur");
    expect(erreurs).toEqual([]);
  });

  it.each(ENIGMES.map((e) => [e.id, e] as const))("énigme %s jouable de bout en bout avec les bonnes réponses", (_, enigme) => {
    let etat = creerEnigme(enigme);
    for (const mot of enigme.mots) etat = repondre(etat, mot.reponse);
    etat = proposerSolution(etat, enigme.solution);
    expect(scoreEnigme(etat).mots).toBe(5);
    expect(etat.solutionTrouvee).toBe(true);
  });

  it("les réponses et solutions des énigmes sont toutes au dictionnaire (pas d'avertissement à tort)", () => {
    const source: string[] = JSON.parse(readFileSync(createRequire(import.meta.url).resolve("an-array-of-french-words/index.json"), "utf8"));
    const dico = creerDictionnaire([...source, ...MOTS_COMPLEMENTAIRES]);
    const reponses = ENIGMES.flatMap((e) => [e.solution, ...(e.solutionVariantes ?? []), ...e.mots.flatMap((m) => [m.reponse, ...(m.variantes ?? [])])]);
    expect(reponses.filter((r) => motsInconnus(dico, r).length > 0)).toEqual([]);
  });

  it.each(LISTES_NOMS_PROPRES.map((l) => [l.id, l] as const))("liste %s jouable avec les bonnes réponses", (_, liste) => {
    let etat = creerNoms(liste);
    for (const nom of liste.noms) etat = repondreNom(etat, nom.reponse);
    expect(scoreNoms(etat)).toBe(4);
  });});
