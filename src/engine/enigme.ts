import { reponseCorrecte } from "./matching";
import { BRIQUES_PAR_ENIGME, MOTS_PAR_ENIGME, type Enigme } from "./types";

/**
 * Statut d'un mot :
 * - "trouve" : Syno a deviné le mot ;
 * - "perdu" : la mise est épuisée sans réponse correcte ;
 * - "annule" : brique signalée à l'arbitre, ni point ni brique consommée.
 */
export type StatutMot = "a-jouer" | "trouve" | "perdu" | "annule";

export interface ResultatMot {
  statut: StatutMot;
  /** Briques consommées par ce mot (0 si annulé ou pas encore joué). */
  briquesUtilisees: number;
  /** Réponses données par le joueur, une par brique. */
  reponses: string[];
}

export type PhaseEnigme = "mots" | "solution" | "terminee";

export interface EtatEnigme {
  readonly enigme: Enigme;
  readonly phase: PhaseEnigme;
  /** Index (0 à 4) du mot en cours, valable pendant la phase "mots". */
  readonly motIndex: number;
  readonly resultats: readonly ResultatMot[];
  readonly solutionTrouvee: boolean;
  readonly essaisSolution: readonly string[];
}

export interface ScoreEnigme {
  mots: number;
  bonus: number;
  solution: number;
  total: number;
}

/** Vérifie la cohérence d'une énigme. Renvoie la liste des erreurs (vide si valide). */
export function validerEnigme(enigme: Enigme): string[] {
  const erreurs: string[] = [];
  if (enigme.mots.length !== MOTS_PAR_ENIGME) {
    erreurs.push(`${enigme.id} : ${MOTS_PAR_ENIGME} mots attendus, ${enigme.mots.length} trouvés`);
  }
  let totalMises = 0;
  enigme.mots.forEach((mot, i) => {
    if (mot.rang !== i + 1) erreurs.push(`${enigme.id} : le mot ${i + 1} a le rang ${mot.rang}`);
    if (!Number.isInteger(mot.mise) || mot.mise < 1) erreurs.push(`${enigme.id} : mise invalide pour le mot ${i + 1}`);
    if (mot.briques.length < mot.mise) {
      erreurs.push(`${enigme.id} : le mot ${i + 1} a ${mot.briques.length} briques pour une mise de ${mot.mise}`);
    }
    totalMises += mot.mise;
  });
  if (totalMises > BRIQUES_PAR_ENIGME) {
    erreurs.push(`${enigme.id} : mises totales ${totalMises} > ${BRIQUES_PAR_ENIGME}`);
  }
  return erreurs;
}

export function creerEnigme(enigme: Enigme): EtatEnigme {
  const erreurs = validerEnigme(enigme);
  if (erreurs.length > 0) throw new Error(erreurs.join("\n"));
  return {
    enigme,
    phase: "mots",
    motIndex: 0,
    resultats: enigme.mots.map(() => ({ statut: "a-jouer", briquesUtilisees: 0, reponses: [] })),
    solutionTrouvee: false,
    essaisSolution: [],
  };
}

function exigerPhaseMots(etat: EtatEnigme): void {
  if (etat.phase !== "mots") throw new Error("Aucun mot en cours : la phase des mots est terminée");
}

/** Passe au mot suivant, ou à la solution après le dernier mot. */
function avancer(etat: EtatEnigme, resultats: readonly ResultatMot[]): EtatEnigme {
  const suivant = etat.motIndex + 1;
  if (suivant >= resultats.length) return { ...etat, resultats, phase: "solution" };
  return { ...etat, resultats, motIndex: suivant };
}

function remplacer(resultats: readonly ResultatMot[], index: number, resultat: ResultatMot): ResultatMot[] {
  return resultats.map((r, i) => (i === index ? resultat : r));
}

/**
 * Texte de l'énigme où les mots trouvés sont replacés ; les mots non trouvés
 * (perdus ou annulés) ne sont jamais révélés et restent à « ____ ».
 */
export function texteEnigme(etat: EtatEnigme): string {
  return etat.enigme.texte.replace(/\{(\d)\}/g, (_, n: string) => {
    const index = Number(n) - 1;
    const mot = etat.enigme.mots[index];
    return mot && etat.resultats[index]?.statut === "trouve" ? mot.reponse : "____";
  });
}

/** Morceau du texte de l'énigme : texte fixe, ou emplacement d'un mot à deviner avec son statut. */
export type SegmentTexte = { texte: string } | { texte: string; rang: number; statut: StatutMot };

/**
 * Texte de l'énigme découpé en segments, une fois l'énigme terminée : chaque mot est révélé,
 * avec son statut (trouvé, non trouvé, annulé), pour l'afficher en couleur.
 */
export function segmentsTexte(etat: EtatEnigme): SegmentTexte[] {
  return etat.enigme.texte.split(/(\{\d\})/).filter((morceau) => morceau !== "").map((morceau) => {
    const emplacement = /^\{(\d)\}$/.exec(morceau);
    if (!emplacement) return { texte: morceau };
    const index = Number(emplacement[1]) - 1;
    return { texte: etat.enigme.mots[index]?.reponse ?? morceau, rang: index + 1, statut: etat.resultats[index]?.statut ?? "a-jouer" };
  });
}

/** Briques restantes sur les 13 de l'énigme. */
export function briquesMisees(enigme: Enigme): number {
  return enigme.mots.reduce((somme, m) => somme + m.mise, 0);
}

/** Briques non consommées sur les 13 de l'énigme (information de jeu : le bonus se calcule sur les mises, voir scoreEnigme). */
export function soldeBriques(etat: EtatEnigme): number {
  return BRIQUES_PAR_ENIGME - etat.resultats.reduce((somme, r) => somme + r.briquesUtilisees, 0);
}

/** Texte de la brique à afficher maintenant, ou null si aucun mot n'est en cours. */
export function briqueCourante(etat: EtatEnigme): string | null {
  if (etat.phase !== "mots") return null;
  const mot = etat.enigme.mots[etat.motIndex];
  const resultat = etat.resultats[etat.motIndex];
  return mot.briques[resultat.reponses.length].texte;
}

/** Numéro (à partir de 1) de la brique affichée pour le mot en cours. */
export function numeroBriqueCourante(etat: EtatEnigme): number {
  return etat.resultats[etat.motIndex].reponses.length + 1;
}

/**
 * Réponse de Syno à la brique affichée. Une seule réponse par brique.
 * - correcte : le mot est trouvé, les briques non utilisées de la mise restent au solde ;
 * - fausse : brique suivante, ou mot perdu si la mise est épuisée.
 */
export function repondre(etat: EtatEnigme, reponse: string): EtatEnigme {
  exigerPhaseMots(etat);
  const mot = etat.enigme.mots[etat.motIndex];
  const courant = etat.resultats[etat.motIndex];
  const reponses = [...courant.reponses, reponse];
  const utilisees = reponses.length;

  if (reponseCorrecte(reponse, mot.reponse, mot.variantes)) {
    return avancer(etat, remplacer(etat.resultats, etat.motIndex, { statut: "trouve", briquesUtilisees: utilisees, reponses }));
  }
  if (utilisees >= mot.mise) {
    return avancer(etat, remplacer(etat.resultats, etat.motIndex, { statut: "perdu", briquesUtilisees: utilisees, reponses }));
  }
  return { ...etat, resultats: remplacer(etat.resultats, etat.motIndex, { ...courant, reponses }) };
}

/**
 * Syno passe (« je passe ») : il n'a aucune idée. La brique est consommée comme une mauvaise réponse
 * (réponse vide) et la brique suivante est donnée, ou le mot est perdu si la mise est épuisée.
 */
export function passer(etat: EtatEnigme): EtatEnigme {
  return repondre(etat, "");
}

/**
 * Signalement à l'arbitre : le mot en cours est annulé sans pénalité
 * (ni point, ni brique consommée) et on passe au mot suivant.
 */
export function signaler(etat: EtatEnigme): EtatEnigme {
  exigerPhaseMots(etat);
  const courant = etat.resultats[etat.motIndex];
  return avancer(etat, remplacer(etat.resultats, etat.motIndex, { statut: "annule", briquesUtilisees: 0, reponses: courant.reponses }));
}

/** Proposition de solution. Plusieurs essais possibles, +1 point si elle est juste. */
export function proposerSolution(etat: EtatEnigme, proposition: string): EtatEnigme {
  if (etat.phase !== "solution") throw new Error("La solution ne peut être proposée qu'après les cinq mots");
  const juste = reponseCorrecte(proposition, etat.enigme.solution, etat.enigme.solutionVariantes);
  return {
    ...etat,
    essaisSolution: [...etat.essaisSolution, proposition],
    solutionTrouvee: juste,
    phase: juste ? "terminee" : "solution",
  };
}

/** Le joueur renonce à trouver la solution. */
export function abandonnerSolution(etat: EtatEnigme): EtatEnigme {
  if (etat.phase !== "solution") throw new Error("La solution ne peut être abandonnée qu'après les cinq mots");
  return { ...etat, phase: "terminee" };
}

/**
 * Score : 1 point par mot trouvé ; +1 si la solution est trouvée ; bonus = 13 moins les briques MISÉES par
 * Dico (et non les briques utilisées), accordé dès que les cinq mots sont trouvés, que la solution le soit ou
 * non (un mot perdu ou annulé supprime le bonus).
 */
export function scoreEnigme(etat: EtatEnigme): ScoreEnigme {
  const mots = etat.resultats.filter((r) => r.statut === "trouve").length;
  const tousTrouves = mots === etat.resultats.length;
  const bonus = tousTrouves ? Math.max(0, BRIQUES_PAR_ENIGME - briquesMisees(etat.enigme)) : 0;
  const solution = etat.solutionTrouvee ? 1 : 0;
  return { mots, bonus, solution, total: mots + bonus + solution };
}
