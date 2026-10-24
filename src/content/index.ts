import type { Difficulte, Enigme, ListeNomsPropres } from "../engine/types";
import { LOT1_ENIGMES } from "./lot1-enigmes";
import { LOT1_NOMS_PROPRES } from "./lot1-noms-propres";
import { LOT2_ENIGMES } from "./lot2-enigmes";
import { LOT2_NOMS_PROPRES } from "./lot2-noms-propres";
import { LOT3_ENIGMES } from "./lot3-enigmes";
import { LOT3_NOMS_PROPRES } from "./lot3-noms-propres";
import { LOT4A_ENIGMES } from "./lot4-enigmes-a";
import { LOT4B_ENIGMES } from "./lot4-enigmes-b";
import { LOT4_NOMS_PROPRES } from "./lot4-noms-propres";
import { LOT5A_ENIGMES } from "./lot5-enigmes-a";
import { LOT5B_ENIGMES } from "./lot5-enigmes-b";
import { LOT5_NOMS_PROPRES } from "./lot5-noms-propres";
import { LOT6_ENIGMES } from "./lot6-enigmes";
import { LOT6_NOMS_PROPRES } from "./lot6-noms-propres";

/**
 * Contenus reclassés d'après le ressenti du joueur (onglet Évaluations, octobre 2026) : le niveau du
 * lot d'origine est remplacé par celui-ci.
 */
const NIVEAUX_RECLASSES: Readonly<Record<string, Difficulte>> = {
  "e-343": "moyen",
  "e-319": "moyen",
  "e-505": "facile",
  "np-504": "difficile",
};
const reclasser = <T extends { id: string; difficulte: Difficulte }>(contenus: readonly T[]): readonly T[] =>
  contenus.map((c) => (NIVEAUX_RECLASSES[c.id] ? { ...c, difficulte: NIVEAUX_RECLASSES[c.id] } : c));

/** Tout le contenu du jeu. Chaque nouvelle énigme ou liste doit être ajoutée ici pour être validée et jouée. */
export const ENIGMES: readonly Enigme[] = reclasser([...LOT1_ENIGMES, ...LOT2_ENIGMES, ...LOT3_ENIGMES, ...LOT4A_ENIGMES, ...LOT4B_ENIGMES, ...LOT5A_ENIGMES, ...LOT5B_ENIGMES, ...LOT6_ENIGMES]);
export const LISTES_NOMS_PROPRES: readonly ListeNomsPropres[] = reclasser([
  ...LOT1_NOMS_PROPRES,
  ...LOT2_NOMS_PROPRES,
  ...LOT3_NOMS_PROPRES,
  ...LOT4_NOMS_PROPRES,
  ...LOT5_NOMS_PROPRES,
  ...LOT6_NOMS_PROPRES,
]);
