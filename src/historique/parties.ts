import type { StockageCle } from "../arbitre/journal";
import { scoreEnigme, type EtatEnigme, type ScoreEnigme, type StatutMot } from "../engine/enigme";
import { scoreEnigmeDico, type EtatEnigmeDico } from "../engine/enigmeDico";
import { scoreNomsDico, type EtatNomsDico } from "../engine/nomsDico";
import { scoreNoms, type EtatNoms, type StatutNom } from "../engine/nomsPropres";
import type { Difficulte } from "../engine/types";
import { empreinteEnigme, empreinteNoms } from "./empreinte";

/**
 * Historique des parties jouées par le joueur humain, en Syno (il devine les pistes de l'ordinateur) ou
 * en Dico (il donne les briques, Syno joué par l'ordinateur devine) : réponses brique par brique et scores.
 * Chaque partie garde l'empreinte des contenus joués, pour la comparer à la référence de l'ordinateur
 * (ses pistes devinées par son Syno), seulement si le contenu n'a pas changé depuis le test.
 */

/** Rôle du joueur humain ; les parties enregistrées sans rôle ont été jouées en Syno. */
export type Role = "syno" | "dico";
/** « refuse » : en Dico, une brique interdite par l'arbitre a fait perdre le mot. */
export type StatutJoue = StatutMot | StatutNom | "refuse";

export interface MotJoue {
  rang: number;
  /** Mot à deviner. */
  reponse: string;
  mise: number;
  statut: StatutJoue;
  briquesUtilisees: number;
  /** Réponses de Syno (le joueur en Syno, l'ordinateur en Dico), une par brique. */
  reponses: string[];
  /** En Dico : briques données par le joueur. */
  briquesJoueur?: string[];
}

export interface EnigmeJouee {
  contenuId: string;
  titre: string;
  solution: string;
  empreinte: string;
  mots: MotJoue[];
  essaisSolution: string[];
  solutionTrouvee: boolean;
  score: ScoreEnigme;
}

export interface NomJoue {
  rang: number;
  reponse: string;
  statut: StatutJoue;
  briquesUtilisees: number;
  /** Réponses de Syno, une par brique, puis ses complétions après « Complétez ». */
  reponses: string[];
  /** En Dico : briques données par le joueur. */
  briquesJoueur?: string[];
}

export interface ListeJouee {
  contenuId: string;
  theme: string;
  empreinte: string;
  noms: NomJoue[];
  points: number;
}

export interface Partie {
  id: string;
  horodatage: string;
  niveau: Difficulte;
  role?: Role;
  enigme: EnigmeJouee;
  /** Absente tant que la liste de Noms Propres n'est pas terminée. */
  noms?: ListeJouee;
}

export const CLE_PARTIES = "pyramide-solo.parties.v1";

export function resumerEnigme(etat: EtatEnigme): EnigmeJouee {
  const e = etat.enigme;
  return {
    contenuId: e.id,
    titre: e.titre,
    solution: e.solution,
    empreinte: empreinteEnigme(e),
    mots: e.mots.map((m, i) => ({ rang: m.rang, reponse: m.reponse, mise: m.mise, statut: etat.resultats[i].statut, briquesUtilisees: etat.resultats[i].briquesUtilisees, reponses: [...etat.resultats[i].reponses] })),
    essaisSolution: [...etat.essaisSolution],
    solutionTrouvee: etat.solutionTrouvee,
    score: scoreEnigme(etat),
  };
}

export function resumerNoms(etat: EtatNoms): ListeJouee {
  const l = etat.liste;
  return {
    contenuId: l.id,
    theme: l.theme,
    empreinte: empreinteNoms(l),
    noms: l.noms.map((n, i) => {
      const r = etat.resultats[i];
      return { rang: n.rang, reponse: n.reponse, statut: r.statut, briquesUtilisees: r.briquesUtilisees, reponses: [...r.reponses, ...r.completions] };
    }),
    points: scoreNoms(etat),
  };
}

/** Énigme jouée en Dico : les briques sont celles du joueur, les réponses celles de Syno ordinateur. */
export function resumerEnigmeDico(etat: EtatEnigmeDico): EnigmeJouee {
  const e = etat.enigme;
  return {
    contenuId: e.id,
    titre: e.titre,
    solution: e.solution,
    empreinte: empreinteEnigme(e),
    mots: e.mots.map((m, i) => {
      const d = etat.mots[i];
      return { rang: m.rang, reponse: m.reponse, mise: d.mise ?? 0, statut: d.statut, briquesUtilisees: d.briques.length, reponses: [...d.reponsesSyno], briquesJoueur: [...d.briques] };
    }),
    essaisSolution: [...etat.essaisSolution],
    solutionTrouvee: etat.solutionTrouvee,
    score: scoreEnigmeDico(etat),
  };
}

export function resumerNomsDico(etat: EtatNomsDico): ListeJouee {
  const l = etat.liste;
  return {
    contenuId: l.id,
    theme: l.theme,
    empreinte: empreinteNoms(l),
    noms: l.noms.map((n, i) => {
      const d = etat.noms[i];
      return { rang: n.rang, reponse: n.reponse, statut: d.statut, briquesUtilisees: d.briques.length, reponses: [...d.reponsesSyno], briquesJoueur: [...d.briques] };
    }),
    points: scoreNomsDico(etat),
  };
}

/** Rôle d'une partie (les plus anciennes, sans rôle, ont été jouées en Syno). */
export const roleDe = (p: Partie): Role => p.role ?? "syno";

function estPartie(x: unknown): x is Partie {
  if (typeof x !== "object" || x === null) return false;
  const p = x as Record<string, unknown>;
  const e = p.enigme as Record<string, unknown> | undefined;
  return typeof p.id === "string" && typeof p.horodatage === "string" && typeof e?.contenuId === "string" && Array.isArray(e.mots) && typeof e.score === "object";
}

export interface Parties {
  /** Parties, de la plus récente à la plus ancienne. */
  lister(): Partie[];
  /** Enregistre l'énigme dès qu'elle est terminée ; renvoie l'identifiant de la partie. */
  commencer(niveau: Difficulte, enigme: EnigmeJouee, role?: Role): string;
  /** Ajoute la liste de Noms Propres à la partie. */
  terminer(id: string, noms: ListeJouee): void;
  supprimerTout(): void;
  exporter(): string;
}

function nouvelId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `pa-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function creerParties(stockage: StockageCle | null, maintenant: () => Date = () => new Date()): Parties {
  let parties: Partie[] = [];
  try {
    const brut = stockage?.getItem(CLE_PARTIES);
    const donnees: unknown = brut ? JSON.parse(brut) : [];
    if (Array.isArray(donnees)) parties = donnees.filter(estPartie);
  } catch {
    // Stockage illisible : on repart d'un historique vide.
  }
  const sauvegarder = () => {
    try {
      stockage?.setItem(CLE_PARTIES, JSON.stringify(parties));
    } catch {
      // Stockage indisponible : l'historique reste en mémoire pour cette visite.
    }
  };
  return {
    lister: () => [...parties].reverse(),
    commencer(niveau, enigme, role = "syno") {
      const partie: Partie = { id: nouvelId(), horodatage: maintenant().toISOString(), niveau, role, enigme };
      parties = [...parties, partie];
      sauvegarder();
      return partie.id;
    },
    terminer(id, noms) {
      parties = parties.map((p) => (p.id === id ? { ...p, noms } : p));
      sauvegarder();
    },
    supprimerTout() {
      parties = [];
      sauvegarder();
    },
    exporter: () => JSON.stringify(parties, null, 2),
  };
}
