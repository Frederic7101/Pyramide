import type { Journal } from "../arbitre/journal";
import { boutonsArbitre, type ContexteMot } from "./boutonsArbitre";
import { el } from "./dom";

export interface LigneRevue {
  contexte: ContexteMot;
  /** Résultat du mot pour le joueur : « trouvé », « non trouvé », « annulé ». */
  resultat: string;
}

/**
 * Revue après coup : chaque enchaînement est montré avec le mot révélé (« a + b → mot »),
 * car c'est seulement en connaissant le mot que le joueur peut juger l'enchaînement.
 * Les signalements faits ici sont enregistrés sans effet sur le score.
 */
export function revueEnchainements(lignes: readonly LigneRevue[], journal: Journal, onSignalement: () => void): HTMLElement {
  const items = lignes
    .filter((l) => l.contexte.briques.length > 0)
    .map((l) => {
      const zoneActions = el("div", {});
      const noter = (texte: string) => {
        onSignalement();
        zoneActions.replaceChildren(el("span", { class: "qui" }, texte));
      };
      zoneActions.append(
        boutonsArbitre({
          journal,
          contexte: l.contexte,
          moment: "apres-coup",
          onSignalee: () => noter("Enchaînement signalé à l'arbitre."),
          onValide: () => noter("Enchaînement noté valide."),
        }),
      );
      return el(
        "div",
        { class: "indice revue" },
        el("span", {}, el("span", { class: "enchainement" }, `${l.contexte.briques.join(" + ")} → ${l.contexte.motADeviner}`), el("span", { class: "qui" }, ` (${l.resultat})`)),
        zoneActions,
      );
    });
  return el(
    "details",
    { class: "revue" },
    el("summary", {}, "Revoir les enchaînements et les signaler à l'arbitre"),
    el("p", { class: "qui" }, "Le mot est maintenant révélé : jugez si l'enchaînement de briques respecte le règlement."),
    ...items,
  );
}

/** Nombre de briques montrées au joueur pour un mot terminé (la brique signalée en jeu compte). */
export function briquesMontrees(statut: string, reponses: number): number {
  return statut === "annule" ? reponses + 1 : reponses;
}
