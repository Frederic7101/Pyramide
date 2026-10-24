import type { Journal } from "../arbitre/journal";
import type { Avis, Moment, NouveauSignalement } from "../arbitre/types";
import { el } from "./dom";
import { demanderSignalement } from "./signalementDialog";

/** Ce qu'il faut savoir d'un mot pour signaler son enchaînement. */
export interface ContexteMot {
  contenuId: string;
  versionContenu: string;
  rangMot: number;
  motADeviner: string;
  /** Briques montrées au joueur, dans l'ordre. */
  briques: string[];
}

interface Options {
  journal: Journal;
  contexte: ContexteMot;
  moment: Moment;
  /** Appelé après l'enregistrement d'un signalement « invalide ». En jeu, l'écran annule le mot en cours. */
  onSignalee: () => void;
  /** Appelé après l'enregistrement d'un avis « valide ». */
  onValide: () => void;
}

function signalement(c: ContexteMot, moment: Moment, avis: Avis, motif: string | null, commentaire: string, position: number): NouveauSignalement {
  return { ...c, briqueSignalee: position, avis, motif, commentaire, moment };
}

/** Boutons « Signaler l'enchaînement » et « Enchaînement valide » communs à tous les écrans de jeu. */
export function boutonsArbitre({ journal, contexte, moment, onSignalee, onValide }: Options): HTMLElement {
  const effet = moment === "en-jeu" ? "Le mot sera annulé sans pénalité (ni point, ni brique consommée)." : "Le mot est révélé ; le signalement n'a pas d'effet sur le score.";
  return el(
    "div",
    { class: "actions" },
    el(
      "button",
      {
        class: "btn sec petit",
        type: "button",
        onclick: async () => {
          const reponse = await demanderSignalement(contexte.briques, moment === "apres-coup" ? contexte.motADeviner : null, effet);
          if (!reponse) return;
          journal.ajouter(signalement(contexte, moment, "invalide", reponse.motif, reponse.commentaire, reponse.position));
          onSignalee();
        },
      },
      "Signaler l'enchaînement",
    ),
    el(
      "button",
      {
        class: "btn sec petit",
        type: "button",
        onclick: () => {
          journal.ajouter(signalement(contexte, moment, "valide", null, "", contexte.briques.length));
          onValide();
        },
      },
      "Enchaînement valide ✓",
    ),
  );
}
