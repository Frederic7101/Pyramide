import type { Evaluations, Note, NouvelleEvaluation } from "../arbitre/evaluations";
import { DIFFICULTES, type Difficulte } from "../engine/types";
import { el } from "./dom";

const LIBELLE_NIVEAU: Record<Difficulte, string> = { facile: "Facile", moyen: "Moyen", difficile: "Difficile" };
const LIBELLE_NOTE: Record<Note, string> = { 1: "1 — mauvaise", 2: "2 — faible", 3: "3 — correcte", 4: "4 — bonne", 5: "5 — excellente" };
const NOTES: Note[] = [1, 2, 3, 4, 5];

export interface PisteAEvaluer {
  rangMot: number;
  motADeviner: string;
  briques: string[];
}

interface Options {
  evaluations: Evaluations;
  /** Ce qui identifie le contenu évalué ; note, niveau, commentaire et pistes sont saisis ici. */
  base: Pick<NouvelleEvaluation, "type" | "contenuId" | "versionContenu" | "difficulteAnnoncee" | "role">;
  /** Pistes de l'ordinateur à noter (vide en mode Dico, où les pistes sont celles du joueur). */
  pistes: PisteAEvaluer[];
  onEnregistree?: () => void;
}

/**
 * Formulaire d'évaluation en fin d'énigme ou de liste : qualité d'ensemble, niveau ressenti,
 * commentaire, et note facultative de chaque piste. Sert à améliorer la rédaction et le classement.
 */
export function formulaireEvaluation({ evaluations, base, pistes, onEnregistree }: Options): HTMLElement {
  const nom = `note-${base.contenuId}-${Math.random().toString(36).slice(2, 7)}`;
  const etoiles = el(
    "div",
    { class: "etoiles", role: "radiogroup", "aria-label": "Note d'ensemble" },
    ...NOTES.map((n) => el("label", {}, el("input", { type: "radio", name: nom, value: String(n), ...(n === 3 ? { checked: true } : {}) }), ` ${n} `)),
  );
  const niveau = el(
    "select",
    { "aria-label": "Niveau ressenti" },
    ...DIFFICULTES.map((d) => {
      const option = el("option", { value: d }, LIBELLE_NIVEAU[d] + (d === base.difficulteAnnoncee ? " (annoncé)" : ""));
      if (d === base.difficulteAnnoncee) option.setAttribute("selected", "");
      return option;
    }),
  );
  const commentaire = el("textarea", { rows: "2", placeholder: "Commentaire sur l'énigme (facultatif)…", "aria-label": "Commentaire" });

  const lignesPistes = pistes.map((p) => {
    const note = el("select", { "aria-label": `Note de la piste pour ${p.motADeviner}` }, el("option", { value: "" }, "— non notée"), ...NOTES.map((n) => el("option", { value: String(n) }, LIBELLE_NOTE[n])));
    const remarque = el("input", { type: "text", placeholder: "Pourquoi ? (facultatif)", "aria-label": `Commentaire sur la piste pour ${p.motADeviner}` });
    return { piste: p, note, remarque, ligne: el("div", { class: "indice revue" }, el("span", { class: "enchainement" }, `${p.briques.join(" + ")} → ${p.motADeviner}`), el("span", { class: "actions" }, note, remarque)) };
  });

  const bloc = el(
    "details",
    { class: "revue evaluation", open: true },
    el("summary", {}, base.type === "enigme" ? "Évaluer cette énigme" : "Évaluer cette liste"),
    el("p", { class: "qui" }, "Vos notes servent à améliorer les pistes et le classement par niveau. Tout est facultatif sauf la note d'ensemble."),
    el("label", {}, "Qualité d'ensemble (1 : mauvaise, 5 : excellente)"),
    etoiles,
    el("label", {}, "Niveau qui vous paraît juste"),
    niveau,
    el("label", {}, "Commentaire"),
    commentaire,
    pistes.length > 0 ? el("label", {}, "Note de chaque piste (l'enchaînement de briques forme-t-il une bonne piste ?)") : "",
    ...lignesPistes.map((l) => l.ligne),
    el(
      "button",
      {
        class: "btn sec",
        type: "button",
        onclick: () => {
          const choisie = bloc.querySelector<HTMLInputElement>(`input[name="${nom}"]:checked`);
          evaluations.ajouter({
            ...base,
            note: Number(choisie?.value ?? 3) as Note,
            niveauRessenti: niveau.value as Difficulte,
            commentaire: commentaire.value.trim(),
            pistes: lignesPistes
              .filter((l) => l.note.value !== "")
              .map((l) => ({ rangMot: l.piste.rangMot, motADeviner: l.piste.motADeviner, briques: l.piste.briques, note: Number(l.note.value) as Note, commentaire: l.remarque.value.trim() })),
          });
          bloc.replaceChildren(el("p", { class: "message", role: "status" }, "Merci : évaluation enregistrée (onglet « Évaluations »)."));
          onEnregistree?.();
        },
      },
      "Enregistrer l'évaluation",
    ),
  );
  return bloc;
}
