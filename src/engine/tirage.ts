/**
 * Tirage des contenus « sans remise » : on ne rejoue pas un contenu tant que tous ceux du niveau
 * n'ont pas été joués. Quand tout a été joué, on recommence un cycle, en évitant le dernier joué
 * pour ne jamais enchaîner deux fois le même.
 */

/** Nombre aléatoire uniforme dans [0, 1), tiré de crypto.getRandomValues si disponible. */
export function aleatoire(): number {
  if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
    return crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
  }
  return Math.random();
}

/**
 * Choisit un contenu parmi `contenus`, en évitant ceux de `dejaJoues` (du plus ancien au plus récent).
 * Renvoie le contenu choisi et l'historique mis à jour (remis à zéro au début d'un nouveau cycle).
 */
export function tirer<T extends { id: string }>(
  contenus: readonly T[],
  dejaJoues: readonly string[],
  hasard: () => number = aleatoire,
): { choisi: T; historique: string[] } {
  if (contenus.length === 0) throw new Error("Aucun contenu à tirer");
  const ids = new Set(contenus.map((c) => c.id));
  const joues = dejaJoues.filter((id) => ids.has(id));
  let candidats = contenus.filter((c) => !joues.includes(c.id));
  let historique = joues;
  if (candidats.length === 0) {
    // Nouveau cycle : tout redevient jouable, sauf le dernier joué (s'il y a le choix).
    const dernier = joues.at(-1);
    candidats = contenus.length > 1 ? contenus.filter((c) => c.id !== dernier) : [...contenus];
    historique = [];
  }
  const choisi = candidats[Math.min(Math.floor(hasard() * candidats.length), candidats.length - 1)];
  return { choisi, historique: [...historique, choisi.id] };
}

/** Nombre de contenus de `contenus` déjà joués dans le cycle en cours (celui que `tirer` tient à jour). */
export function joueesDuCycle(contenus: readonly { id: string }[], dejaJoues: readonly string[]): number {
  const ids = new Set(contenus.map((c) => c.id));
  return new Set(dejaJoues.filter((id) => ids.has(id))).size;
}
