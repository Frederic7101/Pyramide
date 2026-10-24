import { DIFFICULTES, type Difficulte } from "../engine/types";
import type { Evaluation, EvaluationPiste } from "./evaluations";

/** Synthèse des évaluations d'un contenu : note moyenne, niveau ressenti, niveau suggéré. */
export interface SyntheseContenu {
  contenuId: string;
  type: "enigme" | "noms";
  difficulteAnnoncee: Difficulte;
  nombre: number;
  noteMoyenne: number;
  /** Nombre d'évaluations par niveau ressenti. */
  ressenti: Record<Difficulte, number>;
  /** Niveau le plus souvent ressenti (le niveau annoncé en cas d'égalité). */
  niveauSuggere: Difficulte;
  reclasser: boolean;
  commentaires: string[];
}

/** Piste notée sévèrement (note moyenne ≤ 2), à réécrire en priorité. */
export interface PisteFaible {
  contenuId: string;
  rangMot: number;
  motADeviner: string;
  briques: string[];
  noteMoyenne: number;
  commentaires: string[];
}

const moyenne = (valeurs: number[]) => Math.round((10 * valeurs.reduce((a, b) => a + b, 0)) / Math.max(valeurs.length, 1)) / 10;

export function synthetiserContenus(evaluations: readonly Evaluation[]): SyntheseContenu[] {
  const parContenu = new Map<string, Evaluation[]>();
  for (const e of evaluations) parContenu.set(e.contenuId, [...(parContenu.get(e.contenuId) ?? []), e]);
  return [...parContenu.entries()].map(([contenuId, liste]) => {
    const derniere = liste[liste.length - 1];
    const ressenti = Object.fromEntries(DIFFICULTES.map((d) => [d, liste.filter((e) => e.niveauRessenti === d).length])) as Record<Difficulte, number>;
    const max = Math.max(...Object.values(ressenti));
    const niveauSuggere = ressenti[derniere.difficulteAnnoncee] === max ? derniere.difficulteAnnoncee : DIFFICULTES.find((d) => ressenti[d] === max)!;
    return {
      contenuId,
      type: derniere.type,
      difficulteAnnoncee: derniere.difficulteAnnoncee,
      nombre: liste.length,
      noteMoyenne: moyenne(liste.map((e) => e.note)),
      ressenti,
      niveauSuggere,
      reclasser: niveauSuggere !== derniere.difficulteAnnoncee,
      commentaires: liste.map((e) => e.commentaire.trim()).filter((c) => c !== ""),
    };
  });
}

/** Pistes dont la note moyenne est inférieure ou égale à `seuil`, les plus mal notées d'abord. */
export function pistesFaibles(evaluations: readonly Evaluation[], seuil = 2): PisteFaible[] {
  const parPiste = new Map<string, { contenuId: string; piste: EvaluationPiste; notes: number[]; commentaires: string[] }>();
  for (const e of evaluations) {
    for (const p of e.pistes) {
      const cle = `${e.contenuId}|${p.rangMot}|${p.briques.join("+")}`;
      const groupe = parPiste.get(cle) ?? { contenuId: e.contenuId, piste: p, notes: [], commentaires: [] };
      groupe.notes.push(p.note);
      if (p.commentaire.trim() !== "") groupe.commentaires.push(p.commentaire.trim());
      parPiste.set(cle, groupe);
    }
  }
  return [...parPiste.values()]
    .map((g) => ({ contenuId: g.contenuId, rangMot: g.piste.rangMot, motADeviner: g.piste.motADeviner, briques: g.piste.briques, noteMoyenne: moyenne(g.notes), commentaires: g.commentaires }))
    .filter((p) => p.noteMoyenne <= seuil)
    .sort((a, b) => a.noteMoyenne - b.noteMoyenne);
}
