import { normaliser } from "./matching";

/**
 * Dictionnaire des mots français, pour signaler une réponse qui n'existe pas (faute de frappe)
 * et proposer des corrections. Les mots sont normalisés comme les réponses (sans accents, minuscules).
 */
export interface Dictionnaire {
  contient(mot: string): boolean;
  /** Mots proches, accentués (faute de frappe : une lettre en trop, en moins, changée ou deux lettres inversées). */
  suggestions(mot: string, max?: number): string[];
}

/** Articles, élisions et mots-outils ignorés dans la vérification (« le nectar », « l'hiver », « aujourd'hui »). */
const IGNORES = new Set(["le", "la", "les", "un", "une", "des", "du", "de", "au", "aux", "l", "d", "j", "m", "n", "s", "t", "c", "qu", "jusqu", "lorsqu", "puisqu", "quoiqu", "aujourd", "hui"]);

/**
 * Distance d'édition avec transposition (Damerau, variante « alignement optimal »),
 * interrompue dès qu'elle dépasse `limite`.
 */
export function distance(a: string, b: string, limite = 2): number {
  if (Math.abs(a.length - b.length) > limite) return limite + 1;
  let avant = new Array<number>(b.length + 1).fill(0);
  let precedent = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const courant = [i];
    let minimumLigne = i;
    for (let j = 1; j <= b.length; j++) {
      const cout = a[i - 1] === b[j - 1] ? 0 : 1;
      let d = Math.min(precedent[j] + 1, courant[j - 1] + 1, precedent[j - 1] + cout);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d = Math.min(d, avant[j - 2] + 1);
      courant.push(d);
      minimumLigne = Math.min(minimumLigne, d);
    }
    if (minimumLigne > limite) return limite + 1;
    avant = precedent;
    precedent = courant;
  }
  return precedent[b.length];
}

export function creerDictionnaire(mots: Iterable<string>): Dictionnaire {
  // Forme normalisée → forme d'affichage (avec accents).
  const ensemble = new Map<string, string>();
  const parLongueur = new Map<number, string[]>();
  for (const brut of mots) {
    const mot = normaliser(brut);
    if (mot === "" || ensemble.has(mot)) continue;
    ensemble.set(mot, brut.trim());
    const liste = parLongueur.get(mot.length) ?? [];
    liste.push(mot);
    parLongueur.set(mot.length, liste);
  }
  return {
    contient: (mot) => ensemble.has(normaliser(mot)),
    suggestions(mot, max = 3) {
      const cible = normaliser(mot);
      const trouves: { mot: string; d: number }[] = [];
      for (let longueur = cible.length - 1; longueur <= cible.length + 1; longueur++) {
        for (const candidat of parLongueur.get(longueur) ?? []) {
          const d = distance(cible, candidat, 1);
          if (d <= 1) trouves.push({ mot: candidat, d });
        }
      }
      return trouves.sort((x, y) => x.d - y.d || x.mot.localeCompare(y.mot)).slice(0, max).map((t) => ensemble.get(t.mot) ?? t.mot);
    },
  };
}

/** Mots de la réponse absents du dictionnaire (articles, élisions et nombres ignorés). */
export function motsInconnus(dictionnaire: Dictionnaire, reponse: string): string[] {
  const forme = normaliser(reponse);
  if (forme === "" || dictionnaire.contient(forme)) return [];
  return forme.split(" ").filter((m) => m !== "" && !IGNORES.has(m) && !/^\d+$/.test(m) && !dictionnaire.contient(m));
}

/** Charge public/dictionnaire.txt ; renvoie null si le fichier est indisponible (la vérification est alors désactivée). */
export async function chargerDictionnaire(url = `${import.meta.env.BASE_URL}dictionnaire.txt`): Promise<Dictionnaire | null> {
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) return null;
    return creerDictionnaire((await reponse.text()).split("\n"));
  } catch {
    return null;
  }
}
