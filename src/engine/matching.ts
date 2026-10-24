/** Normalise un texte pour la comparaison : minuscules, sans accents ni ponctuation, ligatures développées. */
export function normaliser(texte: string): string {
  return texte
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[-'’]/g, " ")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Articles et partitifs qu'un joueur ajoute naturellement devant sa réponse (« le nectar », « du miel »). */
const ARTICLE_INITIAL = /^(le|la|les|l|un|une|des|du|de|d|au|aux) /;

/** Forme de comparaison d'une réponse : normalisée, sans article initial, au singulier (s ou x final retiré). */
function formeComparable(texte: string): string {
  const sansArticle = normaliser(texte).replace(ARTICLE_INITIAL, "");
  return sansArticle.replace(/(?<=\w{2})[sx]$/, "");
}

/**
 * Vrai si la réponse du joueur correspond au mot attendu ou à l'une de ses variantes,
 * sans tenir compte de la casse, des accents, d'un article initial ni du pluriel.
 */
export function reponseCorrecte(reponse: string, attendu: string, variantes: string[] = []): boolean {
  const r = formeComparable(reponse);
  if (r === "") return false;
  return [attendu, ...variantes].some((c) => formeComparable(c) === r);
}

/**
 * Clé phonétique simplifiée du français, pour comparer des noms propres sur leur prononciation
 * plutôt que leur orthographe (Hippocrate, Hypocrate et Hyppocrate donnent la même clé).
 * Règles approchées : graphies équivalentes (ph/f, y/i, qu/k, c doux/s…), h muet, lettres doublées,
 * voyelles composées (eau, au, ai…), nasales, consonnes et « e » muets en fin de mot.
 */
export function clePhonetique(texte: string): string {
  return normaliser(texte)
    .split(" ")
    .filter((mot) => mot !== "")
    .map((mot) =>
      mot
        .replace(/sch|sh|ch/g, "%")
        .replace(/ph/g, "f")
        .replace(/th/g, "t")
        .replace(/rh/g, "r")
        .replace(/kh/g, "k")
        .replace(/ck|qu/g, "k")
        .replace(/c(?=[eiy])/g, "s")
        .replace(/c/g, "k")
        .replace(/gu(?=[eiy])/g, "G")
        .replace(/g(?=[eiy])/g, "j")
        .replace(/G/g, "g")
        .replace(/y/g, "i")
        .replace(/w/g, "v")
        .replace(/z/g, "s")
        .replace(/h/g, "")
        .replace(/eau|au/g, "o")
        .replace(/ai|ei/g, "e")
        .replace(/(an|am|en|em)(?![aeiou])/g, "1")
        .replace(/(on|om)(?![aeiou])/g, "2")
        .replace(/(in|im|un|um)(?![aeiou])/g, "3")
        .replace(/(.)\1+/g, "$1")
        // Une seule lettre muette finale : consonne (Monet → mone) ou « e » (Hippocrate → ipokrat).
        .replace(/(?<=..)[stdxpe]$/, ""),
    )
    .join(" ");
}

/**
 * Comme reponseCorrecte, mais tolère les fautes d'orthographe qui ne changent pas la prononciation.
 * Réservée aux noms propres, dont l'orthographe est souvent incertaine. Une réponse plus complète que
 * le nom attendu est acceptée : prénom ou titre ajouté devant (« Denis Diderot » pour « Diderot »),
 * nom de famille ajouté après (« Hermione Granger » pour « Hermione »).
 */
export function reponseCorrectePhonetique(reponse: string, attendu: string, variantes: string[] = []): boolean {
  if (reponseCorrecte(reponse, attendu, variantes)) return true;
  const mots = formeComparable(reponse).split(" ");
  return [attendu, ...variantes].some((c) => {
    const cle = clePhonetique(formeComparable(c));
    const n = cle.split(" ").length;
    if (cle === "" || mots.length < n) return false;
    return clePhonetique(mots.slice(-n).join(" ")) === cle || clePhonetique(mots.slice(0, n).join(" ")) === cle;
  });
}
