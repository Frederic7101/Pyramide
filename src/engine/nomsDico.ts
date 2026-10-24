import { reponseCorrectePhonetique } from "./matching";
import { BRIQUES_MAX_NOM_PROPRE, type ListeNomsPropres } from "./types";

/**
 * Noms Propres en mode Dico (sans enchères) : le joueur donne jusqu'à 3 briques par nom,
 * Syno (l'ordinateur) répond après chacune. Le joueur peut dire « Complétez » une fois par nom
 * quand la réponse est incomplète (art. 5.3.1). Comparaison sur la prononciation.
 */
export type StatutNomDico = "a-jouer" | "trouve" | "perdu" | "refuse";

export interface NomDico {
  statut: StatutNomDico;
  briques: string[];
  reponsesSyno: string[];
  /** Vrai une fois l'invitation « Complétez » utilisée. */
  invitationUtilisee: boolean;
  motifRefus?: string;
}

export interface EtatNomsDico {
  readonly liste: ListeNomsPropres;
  readonly phase: "noms" | "terminee";
  readonly nomIndex: number;
  readonly noms: readonly NomDico[];
}

export function creerNomsDico(liste: ListeNomsPropres): EtatNomsDico {
  return {
    liste,
    phase: "noms",
    nomIndex: 0,
    noms: liste.noms.map(() => ({ statut: "a-jouer", briques: [], reponsesSyno: [], invitationUtilisee: false })),
  };
}

function courant(etat: EtatNomsDico): NomDico {
  if (etat.phase !== "noms") throw new Error("Aucun nom en cours");
  return etat.noms[etat.nomIndex];
}

function remplacer(etat: EtatNomsDico, nom: NomDico): EtatNomsDico {
  return { ...etat, noms: etat.noms.map((n, i) => (i === etat.nomIndex ? nom : n)) };
}

function avancer(etat: EtatNomsDico): EtatNomsDico {
  const suivant = etat.nomIndex + 1;
  return suivant >= etat.noms.length ? { ...etat, phase: "terminee" } : { ...etat, nomIndex: suivant };
}

/** Vrai si la réponse de Syno est le nom attendu (prononciation comparée). */
function estJuste(etat: EtatNomsDico, reponse: string): boolean {
  const nom = etat.liste.noms[etat.nomIndex];
  return reponseCorrectePhonetique(reponse, nom.reponse, nom.variantes);
}

/** Vrai si la dernière réponse de Syno est une réponse incomplète prévue (« Monet » pour « Claude Monet »). */
export function peutCompleter(etat: EtatNomsDico): boolean {
  if (etat.phase !== "noms") return false;
  const nom = etat.noms[etat.nomIndex];
  const derniere = nom.reponsesSyno.at(-1);
  const [premiere = "", ...autres] = etat.liste.noms[etat.nomIndex].partielles ?? [];
  return !nom.invitationUtilisee && derniere !== undefined && premiere !== "" && reponseCorrectePhonetique(derniere, premiere, autres);
}

/** Brique du joueur et réponse de Syno. Nom perdu après 3 briques sans bonne réponse (sauf « Complétez » possible). */
export function jouerBriqueNom(etat: EtatNomsDico, brique: string, reponseSyno: string): EtatNomsDico {
  const nom = courant(etat);
  if (nom.briques.length >= BRIQUES_MAX_NOM_PROPRE) throw new Error("Trois briques maximum par nom");
  const suite: NomDico = { ...nom, briques: [...nom.briques, brique], reponsesSyno: [...nom.reponsesSyno, reponseSyno] };
  if (estJuste(etat, reponseSyno)) return avancer(remplacer(etat, { ...suite, statut: "trouve" }));
  const etatSuite = remplacer(etat, suite);
  if (suite.briques.length >= BRIQUES_MAX_NOM_PROPRE && !peutCompleter(etatSuite)) return avancer(remplacer(etat, { ...suite, statut: "perdu" }));
  return etatSuite;
}

/** Le joueur dit « Complétez » (une fois par nom) ; Syno donne une nouvelle réponse. */
export function completerNom(etat: EtatNomsDico, reponseSyno: string): EtatNomsDico {
  const nom = courant(etat);
  if (!peutCompleter(etat)) throw new Error("« Complétez » n'est pas possible maintenant");
  const suite: NomDico = { ...nom, invitationUtilisee: true, reponsesSyno: [...nom.reponsesSyno, reponseSyno] };
  if (estJuste(etat, reponseSyno)) return avancer(remplacer(etat, { ...suite, statut: "trouve" }));
  if (suite.briques.length >= BRIQUES_MAX_NOM_PROPRE) return avancer(remplacer(etat, { ...suite, statut: "perdu" }));
  return remplacer(etat, suite);
}

/** Le joueur renonce au nom en cours (par exemple après une réponse incomplète à la 3e brique). */
export function abandonnerNom(etat: EtatNomsDico): EtatNomsDico {
  return avancer(remplacer(etat, { ...courant(etat), statut: "perdu" }));
}

/** Brique interdite : le nom est perdu. */
export function refuserBriqueNom(etat: EtatNomsDico, brique: string, motif: string): EtatNomsDico {
  const nom = courant(etat);
  return avancer(remplacer(etat, { ...nom, briques: [...nom.briques, brique], statut: "refuse", motifRefus: motif }));
}

export function scoreNomsDico(etat: EtatNomsDico): number {
  return etat.noms.filter((n) => n.statut === "trouve").length;
}
