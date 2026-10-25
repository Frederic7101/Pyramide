import { reponseCorrecte } from "./matching";
import { BRIQUES_PAR_ENIGME, type Enigme } from "./types";

/**
 * Énigme en mode Dico : le joueur mise et donne les briques, l'ordinateur (Syno) devine.
 * Mêmes règles qu'en mode Syno (art. 5.1) : 13 briques, mise par mot, une réponse de Syno par brique ;
 * une brique interdite fait perdre le mot et les briques misées.
 */
export type StatutMotDico = "a-jouer" | "trouve" | "perdu" | "refuse";

export interface MotDico {
  statut: StatutMotDico;
  /** Briques misées par le joueur pour ce mot (null tant qu'il n'a pas misé). */
  mise: number | null;
  briques: string[];
  /** Réponse de Syno après chaque brique. */
  reponsesSyno: string[];
  /** Motif du refus d'une brique interdite. */
  motifRefus?: string;
}

export type PhaseDico = "mots" | "solution" | "terminee";

export interface EtatEnigmeDico {
  readonly enigme: Enigme;
  readonly phase: PhaseDico;
  readonly motIndex: number;
  readonly mots: readonly MotDico[];
  readonly solutionTrouvee: boolean;
  readonly essaisSolution: readonly string[];
}

/** Nombre d'essais de Syno pour trouver la solution de l'énigme. */
export const ESSAIS_SOLUTION = 3;

export function creerEnigmeDico(enigme: Enigme): EtatEnigmeDico {
  return {
    enigme,
    phase: "mots",
    motIndex: 0,
    mots: enigme.mots.map(() => ({ statut: "a-jouer", mise: null, briques: [], reponsesSyno: [] })),
    solutionTrouvee: false,
    essaisSolution: [],
  };
}

/** Briques non encore pariées sur les 13 de l'énigme : le bonus est 13 moins les briques MISÉES, pas les briques utilisées. */
export function soldeDico(etat: EtatEnigmeDico): number {
  return BRIQUES_PAR_ENIGME - etat.mots.reduce((s, m) => s + (m.mise ?? 0), 0);
}

/** Mise maximale pour le mot en cours : il faut garder au moins une brique pour chacun des mots suivants. */
export function miseMax(etat: EtatEnigmeDico): number {
  return soldeDico(etat) - (etat.mots.length - etat.motIndex - 1);
}

function exigerPhaseMots(etat: EtatEnigmeDico): MotDico {
  if (etat.phase !== "mots") throw new Error("Aucun mot en cours");
  return etat.mots[etat.motIndex];
}

function remplacer(etat: EtatEnigmeDico, mot: MotDico): EtatEnigmeDico {
  return { ...etat, mots: etat.mots.map((m, i) => (i === etat.motIndex ? mot : m)) };
}

function avancer(etat: EtatEnigmeDico): EtatEnigmeDico {
  const suivant = etat.motIndex + 1;
  return suivant >= etat.mots.length ? { ...etat, phase: "solution" } : { ...etat, motIndex: suivant };
}

/** Le joueur annonce sa mise pour le mot en cours (de 1 à miseMax). */
export function miser(etat: EtatEnigmeDico, mise: number): EtatEnigmeDico {
  const mot = exigerPhaseMots(etat);
  if (mot.mise !== null) throw new Error("La mise de ce mot est déjà annoncée");
  if (!Number.isInteger(mise) || mise < 1 || mise > miseMax(etat)) throw new Error(`Mise invalide : entre 1 et ${miseMax(etat)}`);
  return remplacer(etat, { ...mot, mise });
}

/**
 * Le joueur donne une brique et Syno répond. Mot trouvé si la réponse est juste ;
 * mot perdu si la mise est épuisée ; sinon on attend la brique suivante.
 */
export function jouerBrique(etat: EtatEnigmeDico, brique: string, reponseSyno: string): EtatEnigmeDico {
  const mot = exigerPhaseMots(etat);
  if (mot.mise === null) throw new Error("Annoncez d'abord la mise");
  const attendu = etat.enigme.mots[etat.motIndex];
  const suite: MotDico = { ...mot, briques: [...mot.briques, brique], reponsesSyno: [...mot.reponsesSyno, reponseSyno] };
  if (reponseCorrecte(reponseSyno, attendu.reponse, attendu.variantes)) return avancer(remplacer(etat, { ...suite, statut: "trouve" }));
  if (suite.briques.length >= mot.mise) return avancer(remplacer(etat, { ...suite, statut: "perdu" }));
  return remplacer(etat, suite);
}

/** Brique interdite (art. 5.1.1) : le mot et les briques qui lui sont consacrées sont perdus. */
export function refuserBrique(etat: EtatEnigmeDico, brique: string, motif: string): EtatEnigmeDico {
  const mot = exigerPhaseMots(etat);
  if (mot.mise === null) throw new Error("Annoncez d'abord la mise");
  return avancer(remplacer(etat, { ...mot, briques: [...mot.briques, brique], statut: "refuse", motifRefus: motif }));
}

/** Proposition de solution de Syno ; l'énigme se termine si elle est juste ou après ESSAIS_SOLUTION essais. */
export function proposerSolutionDico(etat: EtatEnigmeDico, proposition: string): EtatEnigmeDico {
  if (etat.phase !== "solution") throw new Error("La solution se propose après les cinq mots");
  const juste = reponseCorrecte(proposition, etat.enigme.solution, etat.enigme.solutionVariantes);
  const essaisSolution = [...etat.essaisSolution, proposition];
  const fin = juste || essaisSolution.length >= ESSAIS_SOLUTION;
  return { ...etat, essaisSolution, solutionTrouvee: juste, phase: fin ? "terminee" : "solution" };
}

/** Texte de l'énigme pour Syno : mots trouvés replacés, « ____ » pour les autres. */
export function texteEnigmeDico(etat: EtatEnigmeDico): string {
  return etat.enigme.texte.replace(/\{(\d)\}/g, (_, n: string) => {
    const index = Number(n) - 1;
    return etat.mots[index]?.statut === "trouve" ? etat.enigme.mots[index].reponse : "____";
  });
}

/** Score des deux joueurs (comme en mode Syno) : mots trouvés, solution, et bonus (13 − briques misées) si les 5 mots sont trouvés. */
export function scoreEnigmeDico(etat: EtatEnigmeDico): { mots: number; bonus: number; solution: number; total: number } {
  const mots = etat.mots.filter((m) => m.statut === "trouve").length;
  const bonus = mots === etat.mots.length ? Math.max(0, soldeDico(etat)) : 0;
  const solution = etat.solutionTrouvee ? 1 : 0;
  return { mots, bonus, solution, total: mots + bonus + solution };
}
