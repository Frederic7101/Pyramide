import type { Enigme, ListeNomsPropres } from "../engine/types";

/**
 * Empreinte d'un contenu : elle change dès que ce qui est joué change (briques misées, réponses
 * acceptées, texte, solution). Une référence de Syno ordinateur ne vaut que pour l'empreinte testée.
 */

/** Hachage djb2 (32 bits), en base 36 : suffisant pour détecter une modification. */
function hacher(texte: string): string {
  let h = 5381;
  for (let i = 0; i < texte.length; i++) h = ((h << 5) + h + texte.charCodeAt(i)) >>> 0;
  return h.toString(36);
}

export function empreinteEnigme(e: Enigme): string {
  return hacher(
    JSON.stringify({
      texte: e.texte,
      solution: e.solution,
      solutionVariantes: e.solutionVariantes ?? [],
      mots: e.mots.map((m) => ({ reponse: m.reponse, variantes: m.variantes ?? [], mise: m.mise, briques: m.briques.slice(0, m.mise).map((b) => b.texte) })),
    }),
  );
}

export function empreinteNoms(l: ListeNomsPropres): string {
  return hacher(
    JSON.stringify({
      theme: l.theme,
      noms: l.noms.map((n) => ({ reponse: n.reponse, variantes: n.variantes ?? [], partielles: n.partielles ?? [], ...(n.surnoms && { surnoms: n.surnoms }), briques: n.briques.map((b) => b.texte) })),
    }),
  );
}
