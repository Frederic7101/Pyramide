import { MOTIFS } from "../arbitre/types";
import { el } from "./dom";

export interface ReponseSignalement {
  motif: string;
  commentaire: string;
  /** Numéro de la brique où l'enchaînement devient invalide. */
  position: number;
}

/**
 * Ouvre la fenêtre de signalement d'un enchaînement ; renvoie null si le joueur annule.
 * `reponse` n'est connue qu'après coup (le mot est alors révélé) ; pendant le jeu, on affiche « ? ».
 */
export function demanderSignalement(briques: readonly string[], reponse: string | null, effet: string): Promise<ReponseSignalement | null> {
  return new Promise((resolve) => {
    const motif = el("select", { id: "motif-signalement" }, ...MOTIFS.map((m) => el("option", { value: m.id }, m.libelle)));
    const position = el(
      "select",
      { id: "position-signalement" },
      ...briques.map((b, i) => {
        const option = el("option", { value: String(i + 1) }, `Brique ${i + 1} : ${b}`);
        if (i === briques.length - 1) option.setAttribute("selected", "");
        return option;
      }),
    );
    const commentaire = el("textarea", { id: "commentaire-signalement", rows: "3" });
    let termine = false;
    /** Ferme la fenêtre et rend la réponse une seule fois (ne dépend pas de l’événement "close"). */
    const terminer = (resultat: ReponseSignalement | null): void => {
      if (termine) return;
      termine = true;
      if (dialogue.open) dialogue.close();
      dialogue.remove();
      resolve(resultat);
    };

    const dialogue = el(
      "dialog",
      { class: "dialogue", "aria-label": "Signaler l'enchaînement à l'arbitre" },
      el("h2", {}, "Signaler l'enchaînement"),
      el("p", { class: "enchainement" }, `${briques.join(" + ")} → ${reponse ?? "?"}`),
      el("p", { class: "qui" }, effet),
      el("label", { for: "position-signalement" }, "L'enchaînement devient invalide à la"),
      position,
      el("label", { for: "motif-signalement" }, "Règle non respectée"),
      motif,
      el("label", { for: "commentaire-signalement" }, "Commentaire (facultatif)"),
      commentaire,
      el(
        "div",
        { class: "actions" },
        el(
          "button",
          {
            class: "btn",
            type: "button",
            onclick: () => terminer({ motif: motif.value, commentaire: commentaire.value.trim(), position: Number(position.value) }),
          },
          "Envoyer le signalement",
        ),
        el("button", { class: "btn sec", type: "button", onclick: () => terminer(null) }, "Annuler"),
      ),
    );

    // Échap ferme la fenêtre sans réponse.
    dialogue.addEventListener("close", () => terminer(null));
    document.body.append(dialogue);
    dialogue.showModal();
    position.focus();
  });
}
