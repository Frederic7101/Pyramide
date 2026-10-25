/** Échanges entre le jeu (navigateur) et le service Syno (serveur), en mode Dico. */

/** Un mot ou un nom déjà joué dans la même énigme ou liste : ce que Syno a proposé et s'il l'a trouvé. */
export interface JeuPrecedent {
  /** Rang (à partir de 1) du mot ou du nom. */
  numero: number;
  /** Propositions de Syno, dans l'ordre. */
  propositions: string[];
  /** Vrai si la dernière proposition était la bonne. */
  trouve: boolean;
}

export interface DemandeSyno {
  /** « mot » : un mot d'énigme ; « nom » : un nom propre ; « solution » : la solution de l'énigme. */
  type: "mot" | "nom" | "solution";
  /** Énigmes : titre, que Syno connaît (il oriente vers le thème commun des mots). */
  titre?: string;
  /** Rang (à partir de 1) du mot ou du nom cherché. */
  numero?: number;
  /** Mots ou noms déjà joués avant celui-ci, avec leur issue (Syno s'en souvient). */
  precedents?: JeuPrecedent[];
  /** Briques données par Dico (le joueur) pour ce mot, dans l'ordre. */
  briques: string[];
  /** Réponses déjà données par Syno pour ce mot et jugées fausses (à ne pas répéter). */
  reponsesFausses: string[];
  /** Noms propres : thème de la liste. */
  theme?: string;
  /** Noms propres : Dico a dit « Complétez » après une réponse incomplète. */
  completer?: boolean;
  /** Solution : texte de l'énigme où les mots trouvés sont replacés (« ____ » pour les autres). */
  texte?: string;
}

export interface ReponseSyno {
  reponse: string;
}

/** Erreur renvoyée par le service (ex. clé API absente). */
export interface ErreurSyno {
  erreur: string;
}

/** Demande d'arbitrage (mode Dico) : l'arbitre connaît le mot, contrairement à Syno. */
export interface DemandeArbitre {
  type: "mot" | "nom";
  motADeviner: string;
  variantes?: string[];
  /** Noms propres : surnoms acceptés comme réponse mais qui ne font pas partie du nom (leurs mots sont permis comme briques). */
  surnoms?: string[];
  /** Mots de même racine déclarés dans le contenu. */
  famille?: string[];
  /** Noms propres : thème de la liste. */
  theme?: string;
  /** Enchaînement de briques de Dico jusqu'à la brique à juger (la dernière). */
  briques: string[];
}

export interface VerdictArbitre {
  /** Vrai si l'enchaînement, jusqu'à la dernière brique, respecte le règlement. */
  valide: boolean;
  /** Faux si l'arbitre a un doute : le doute profite alors au joueur (art. 4). */
  certain: boolean;
  /** Identifiant d'un motif (voir MOTIFS) quand l'enchaînement est invalide. */
  motif: string | null;
  /** Article du règlement concerné. */
  regle: string;
  /** Explication courte, en français, pour le joueur. */
  explication: string;
}
