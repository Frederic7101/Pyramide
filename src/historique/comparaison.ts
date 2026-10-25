import { BRIQUES_PAR_ENIGME, MOTS_PAR_ENIGME, NOMS_PAR_LISTE } from "../engine/types";
import type { EnigmeJouee, ListeJouee, Partie } from "./parties";
import type { ReferenceSyno } from "./reference";

/** Score maximal théorique d'une énigme : 5 mots, bonus de 13 − 5 briques pariées (une par mot), solution. */
export const SCORE_MAX_ENIGME = MOTS_PAR_ENIGME + (BRIQUES_PAR_ENIGME - MOTS_PAR_ENIGME) + 1;

export interface Comparaison {
  joueur: number;
  /** Score de Syno joué par l'ordinateur, ou null s'il n'y a pas de référence valable. */
  ordinateur: number | null;
  /** Vrai si une référence existe mais porte sur une version antérieure du contenu. */
  perimee: boolean;
  maximum: number;
  /** Par mot ou nom : brique où le joueur et l'ordinateur ont trouvé (null : non trouvé). */
  detail: { reponse: string; joueur: number | null; ordinateur: number | null; reponsesOrdinateur: string[] }[];
}

/** Référence utilisable pour un contenu : même type et même empreinte que le contenu joué. */
function referenceValable(ref: ReferenceSyno | undefined, type: ReferenceSyno["type"], empreinte: string): { ref: ReferenceSyno | null; perimee: boolean } {
  if (!ref || ref.type !== type) return { ref: null, perimee: false };
  return ref.empreinte === empreinte ? { ref, perimee: false } : { ref: null, perimee: true };
}

export function comparerEnigme(jouee: EnigmeJouee, references: Record<string, ReferenceSyno>): Comparaison {
  const { ref, perimee } = referenceValable(references[jouee.contenuId], "enigme", jouee.empreinte);
  return {
    joueur: jouee.score.total,
    ordinateur: ref?.score ?? null,
    perimee,
    maximum: SCORE_MAX_ENIGME,
    detail: jouee.mots.map((m, i) => ({
      reponse: m.reponse,
      joueur: m.statut === "trouve" ? m.briquesUtilisees : null,
      ordinateur: ref ? ref.trouveA[i] ?? null : null,
      reponsesOrdinateur: ref?.reponses[i] ?? [],
    })),
  };
}

export function comparerNoms(jouee: ListeJouee, references: Record<string, ReferenceSyno>): Comparaison {
  const { ref, perimee } = referenceValable(references[jouee.contenuId], "noms", jouee.empreinte);
  return {
    joueur: jouee.points,
    ordinateur: ref?.score ?? null,
    perimee,
    maximum: NOMS_PAR_LISTE,
    detail: jouee.noms.map((n, i) => ({
      reponse: n.reponse,
      joueur: n.statut === "trouve" ? n.briquesUtilisees : null,
      ordinateur: ref ? ref.trouveA[i] ?? null : null,
      reponsesOrdinateur: ref?.reponses[i] ?? [],
    })),
  };
}

export interface Bilan {
  parties: number;
  /** Moyennes sur les seules parties où la référence de l'ordinateur est valable (comparaison équitable). */
  comparees: number;
  moyenneJoueur: number | null;
  moyenneOrdinateur: number | null;
  /** Parties comparées où le joueur fait au moins aussi bien que l'ordinateur. */
  egaleOuMieux: number;
}

/** Bilan des parties terminées : score total (énigme + noms) du joueur comparé à celui de l'ordinateur. */
export function bilanParties(parties: readonly Partie[], references: Record<string, ReferenceSyno>): Bilan {
  const terminees = parties.filter((p) => p.noms);
  const comparees = terminees
    .map((p) => {
      const ce = comparerEnigme(p.enigme, references);
      const cn = comparerNoms(p.noms!, references);
      return ce.ordinateur === null || cn.ordinateur === null ? null : { joueur: ce.joueur + cn.joueur, ordinateur: ce.ordinateur + cn.ordinateur };
    })
    .filter((c): c is { joueur: number; ordinateur: number } => c !== null);
  const moyenne = (xs: number[]) => (xs.length > 0 ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
  return {
    parties: terminees.length,
    comparees: comparees.length,
    moyenneJoueur: moyenne(comparees.map((c) => c.joueur)),
    moyenneOrdinateur: moyenne(comparees.map((c) => c.ordinateur)),
    egaleOuMieux: comparees.filter((c) => c.joueur >= c.ordinateur).length,
  };
}

/** Ligne du tableau de comparaison : un participant (le joueur ou un modèle) et ses scores. */
export interface LigneModele {
  nom: string;
  enigme: number | null;
  noms: number | null;
  /** Total énigme + noms propres, ou null si l'une des deux parties manque. */
  total: number | null;
}

/**
 * Tableau « vous face à chaque modèle » : le score du joueur sur l'énigme et la liste jouées, et celui de
 * chaque modèle de Syno joué à l'aveugle sur les mêmes contenus (null quand le modèle n'a pas été testé
 * sur ce contenu, ou que le contenu a changé depuis le test).
 */
export function comparerModeles(
  enigme: EnigmeJouee,
  noms: ListeJouee | null,
  referencesParModele: Record<string, Record<string, ReferenceSyno>>,
  ordre: readonly string[] = ["Haiku", "Sonnet", "Opus"],
): LigneModele[] {
  const total = (e: number | null, n: number | null, nomsAttendus: boolean) => (e === null || (nomsAttendus && n === null) ? null : e + (n ?? 0));
  const joueur: LigneModele = { nom: "Vous", enigme: enigme.score.total, noms: noms ? noms.points : null, total: total(enigme.score.total, noms ? noms.points : 0, noms !== null) };
  const lignes = ordre.map((nom): LigneModele => {
    const refs = referencesParModele[nom] ?? {};
    const e = comparerEnigme(enigme, refs).ordinateur;
    const n = noms ? comparerNoms(noms, refs).ordinateur : null;
    return { nom, enigme: e, noms: n, total: total(e, n, noms !== null) };
  });
  return [joueur, ...lignes];
}
