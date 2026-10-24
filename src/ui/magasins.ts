import { creerEvaluations } from "../arbitre/evaluations";

/** localStorage peut être indisponible (navigation privée, accès bloqué) : les données restent alors en mémoire. */
export function stockageNavigateur(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Évaluations des contenus par le joueur (partagées par tous les écrans). */
export const evaluations = creerEvaluations(stockageNavigateur());
