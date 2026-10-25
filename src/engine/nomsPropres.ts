import { reponseCorrectePhonetique } from "./matching";
import { BRIQUES_MAX_NOM_PROPRE, NOMS_PAR_LISTE, type ListeNomsPropres } from "./types";

/** Même vocabulaire que les mots d'énigme : "annule" = brique signalée, ni point ni brique consommée. */
export type StatutNom = "a-jouer" | "trouve" | "perdu" | "annule";

export interface ResultatNom {
  statut: StatutNom;
  briquesUtilisees: number;
  /** Réponses données, une par brique. */
  reponses: string[];
  /** Vrai si Dico a déjà invité Syno à compléter ce nom (une seule fois). */
  invitationUtilisee: boolean;
  /** Vrai tant que Syno doit répondre à l'invitation « Complétez ». */
  attenteCompletion: boolean;
  /** Réponses données à l'invitation « Complétez ». */
  completions: string[];
}

export type PhaseNoms = "noms" | "terminee";

export interface EtatNoms {
  readonly liste: ListeNomsPropres;
  readonly phase: PhaseNoms;
  readonly nomIndex: number;
  readonly resultats: readonly ResultatNom[];
}

/** Vérifie la cohérence d'une liste. Renvoie la liste des erreurs (vide si valide). */
export function validerListe(liste: ListeNomsPropres): string[] {
  const erreurs: string[] = [];
  if (liste.noms.length !== NOMS_PAR_LISTE) {
    erreurs.push(`${liste.id} : ${NOMS_PAR_LISTE} noms attendus, ${liste.noms.length} trouvés`);
  }
  if (liste.theme.trim() === "") erreurs.push(`${liste.id} : thème manquant`);
  liste.noms.forEach((nom, i) => {
    if (nom.rang !== i + 1) erreurs.push(`${liste.id} : le nom ${i + 1} a le rang ${nom.rang}`);
    if (nom.briques.length < 1 || nom.briques.length > BRIQUES_MAX_NOM_PROPRE) {
      erreurs.push(`${liste.id} : le nom ${i + 1} a ${nom.briques.length} briques (1 à ${BRIQUES_MAX_NOM_PROPRE} attendues)`);
    }
  });
  return erreurs;
}

export function creerNoms(liste: ListeNomsPropres): EtatNoms {
  const erreurs = validerListe(liste);
  if (erreurs.length > 0) throw new Error(erreurs.join("\n"));
  return {
    liste,
    phase: "noms",
    nomIndex: 0,
    resultats: liste.noms.map(() => ({ statut: "a-jouer", briquesUtilisees: 0, reponses: [], invitationUtilisee: false, attenteCompletion: false, completions: [] })),
  };
}

function exigerPhaseNoms(etat: EtatNoms): void {
  if (etat.phase !== "noms") throw new Error("Aucun nom en cours : la liste est terminée");
}

function avancer(etat: EtatNoms, resultats: readonly ResultatNom[]): EtatNoms {
  const suivant = etat.nomIndex + 1;
  if (suivant >= resultats.length) return { ...etat, resultats, phase: "terminee" };
  return { ...etat, resultats, nomIndex: suivant };
}

function remplacer(resultats: readonly ResultatNom[], index: number, resultat: ResultatNom): ResultatNom[] {
  return resultats.map((r, i) => (i === index ? resultat : r));
}

/** Vrai si Dico vient d'inviter Syno à compléter sa réponse (« Complétez »). */
export function enAttenteCompletion(etat: EtatNoms): boolean {
  return etat.phase === "noms" && etat.resultats[etat.nomIndex].attenteCompletion;
}

/** Brique à afficher maintenant, ou null si Syno doit répondre à l'invitation « Complétez » ou si la liste est terminée. */
export function briqueCouranteNom(etat: EtatNoms): string | null {
  if (etat.phase !== "noms" || enAttenteCompletion(etat)) return null;
  const resultat = etat.resultats[etat.nomIndex];
  return etat.liste.noms[etat.nomIndex].briques[resultat.reponses.length].texte;
}

/** Numéro (à partir de 1) de la dernière brique affichée pour le nom en cours. */
export function numeroBriqueNom(etat: EtatNoms): number {
  const resultat = etat.resultats[etat.nomIndex];
  return resultat.attenteCompletion ? resultat.reponses.length : resultat.reponses.length + 1;
}

/**
 * Réponse de Syno.
 * - Nom complet correct : trouvé.
 * - Réponse incomplète (`partielles`) et invitation encore disponible : Dico dit « Complétez »
 *   (la brique est comptée comme jouée) et la réponse suivante est la complétion.
 * - Sinon : brique suivante, ou nom perdu si les briques sont épuisées.
 */
export function repondreNom(etat: EtatNoms, reponse: string): EtatNoms {
  exigerPhaseNoms(etat);
  const nom = etat.liste.noms[etat.nomIndex];
  const courant = etat.resultats[etat.nomIndex];

  if (courant.attenteCompletion) {
    const completions = [...courant.completions, reponse];
    if (reponseCorrectePhonetique(reponse, nom.reponse, nom.variantes)) {
      return avancer(etat, remplacer(etat.resultats, etat.nomIndex, { ...courant, statut: "trouve", briquesUtilisees: courant.reponses.length, completions, attenteCompletion: false }));
    }
    const suite = { ...courant, completions, attenteCompletion: false };
    if (courant.reponses.length >= nom.briques.length) {
      return avancer(etat, remplacer(etat.resultats, etat.nomIndex, { ...suite, statut: "perdu", briquesUtilisees: courant.reponses.length }));
    }
    return { ...etat, resultats: remplacer(etat.resultats, etat.nomIndex, suite) };
  }

  const reponses = [...courant.reponses, reponse];
  if (reponseCorrectePhonetique(reponse, nom.reponse, nom.variantes)) {
    return avancer(etat, remplacer(etat.resultats, etat.nomIndex, { ...courant, statut: "trouve", briquesUtilisees: reponses.length, reponses }));
  }
  const [premierePartielle = "", ...autresPartielles] = nom.partielles ?? [];
  if (!courant.invitationUtilisee && reponseCorrectePhonetique(reponse, premierePartielle, autresPartielles)) {
    return { ...etat, resultats: remplacer(etat.resultats, etat.nomIndex, { ...courant, reponses, invitationUtilisee: true, attenteCompletion: true }) };
  }
  if (reponses.length >= nom.briques.length) {
    return avancer(etat, remplacer(etat.resultats, etat.nomIndex, { ...courant, statut: "perdu", briquesUtilisees: reponses.length, reponses }));
  }
  return { ...etat, resultats: remplacer(etat.resultats, etat.nomIndex, { ...courant, reponses }) };
}

/** Syno passe : même effet qu'une mauvaise réponse (réponse vide), la brique suivante est donnée. */
export function passerNom(etat: EtatNoms): EtatNoms {
  return repondreNom(etat, "");
}

/** Signalement à l'arbitre : le nom en cours est annulé sans pénalité et on passe au suivant. */
export function signalerNom(etat: EtatNoms): EtatNoms {
  exigerPhaseNoms(etat);
  const courant = etat.resultats[etat.nomIndex];
  return avancer(etat, remplacer(etat.resultats, etat.nomIndex, { ...courant, statut: "annule", briquesUtilisees: 0, attenteCompletion: false }));
}

/** 1 point par nom trouvé (0 sinon), sans enchères. */
export function scoreNoms(etat: EtatNoms): number {
  return etat.resultats.filter((r) => r.statut === "trouve").length;
}
