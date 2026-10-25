/** Nombre de briques dont dispose Dico pour une énigme (règlement FFCP, art. 5.1). */
export const BRIQUES_PAR_ENIGME = 13;
/** Nombre de mots à deviner dans une énigme. */
export const MOTS_PAR_ENIGME = 5;

/**
 * Rôle d'une brique dans l'enchaînement de Dico (règlement FFCP, art. 4.1 et 4.3) :
 * - "relation" : synonyme, contraire ou association d'idées avec sa cible ;
 * - "declinaison" : précise la nature, la longueur ou la dérivation de ce qui a été amené (« verbe », « apocope », « doctrine »...) ;
 * - "incitation" : ne respecte pas la relation (une seule, jamais en 1re brique, sauf Noms Propres).
 */
export type RoleBrique = "relation" | "declinaison" | "incitation";
export type Relation = "synonyme" | "contraire" | "association";
/**
 * Nature d'une association d'idées. Les associations « fortes » font de bonnes 1res briques :
 * - "paire" : terme apparié (cheville pour poignet, comme pied pour main) ;
 * - "genre" : le genre ou la famille dont le mot est un membre (cétacés pour baleine, mois pour décembre) ;
 * - "exemple" : un représentant typique (Truffaut pour réalisateur) ;
 * - "marque" : une marque en un mot (Panzani pour pâtes, art. 4.1.3.f) ;
 * - "voisin" : un proche de la même famille (bourdon pour abeille).
 * Une association "autre" (ou non précisée) est plutôt à garder pour la 2e ou 3e brique.
 */
export type NatureAssociation = "paire" | "genre" | "exemple" | "marque" | "voisin" | "autre";
/**
 * Ce que la brique amène : le mot entier, un de ses mots souches, son préfixe, son suffixe ou un homonyme.
 * Le mot souche doit être amené avant le préfixe ou le suffixe (art. 4.3.2.b).
 */
export type CibleBrique = "mot" | "souche" | "prefixe" | "suffixe" | "homonyme";
/** Partie du mot à deviner que fait entendre une incitation (début par défaut). */
export type PositionSon = "debut" | "milieu" | "fin";

export interface Brique {
  texte: string;
  /** Rôle dans l'enchaînement ; obligatoire pour le contenu publié (contrôlé par la validation). */
  role?: RoleBrique;
  /** Type de relation, pour une brique de rôle "relation". */
  relation?: Relation;
  /** Nature d'une association d'idées (voir NatureAssociation). */
  nature?: NatureAssociation;
  /** Cible de la brique (relation ou incitation). */
  cible?: CibleBrique;
  /** Pour une incitation : le mot qu'elle évoque (ex. « abbé » pour « Prévost »). */
  amene?: string;
  /**
   * Pour une incitation : le son commun entre le mot évoqué et le mot à deviner (ex. « ab » : abbé / abeilles),
   * écrit comme dans le mot à deviner. Ce n'est pas forcément tout le mot évoqué.
   */
  son?: string;
  /** Où se trouve ce son dans le mot à deviner : le plus souvent au début, parfois à la fin, rarement au milieu. */
  position?: PositionSon;
  /** Graphie du son commun dans le mot évoqué, si elle diffère (ex. « sai » de sait pour « scè » de scène). */
  sonEvoque?: string;
  /** Article du règlement illustré par la brique (ex. "4.1.3.d"). */
  regle?: string;
  /**
   * Pour un synonyme ou un contraire qui suit un autre synonyme ou contraire : en quoi il lève une
   * ambiguïté de la brique précédente (« subtilité » amène finesse, nuance... ; « épaisseur » ne garde que
   * finesse). Sans cette justification, deux briques de même valeur sont signalées comme redondantes.
   */
  leveAmbiguite?: string;
}

export interface MotEnigme {
  /** Position du mot dans le texte de l'énigme (1 à 5). */
  rang: number;
  reponse: string;
  variantes?: string[];
  /** Nombre de briques misées par Dico pour ce mot. */
  mise: number;
  /** Briques dans l'ordre de présentation ; au moins `mise` briques. */
  briques: Brique[];
  /** Mots de même racine, interdits dans les briques (sert à la validation du contenu). */
  famille?: string[];
}

/**
 * Niveau de difficulté d'une énigme ou d'une liste :
 * - facile : mots simples et concrets ;
 * - moyen : mots moins courants, quelques notions abstraites ;
 * - difficile : mots rares ou abstraits, qu'on peine à trouver même en 3 briques.
 */
export type Difficulte = "facile" | "moyen" | "difficile";
export const DIFFICULTES: readonly Difficulte[] = ["facile", "moyen", "difficile"];

export interface Enigme {
  id: string;
  /** Version du contenu, enregistrée avec chaque signalement. */
  version?: string;
  difficulte: Difficulte;
  titre: string;
  /** Texte de l'énigme avec les emplacements {1} à {5}. */
  texte: string;
  solution: string;
  solutionVariantes?: string[];
  mots: MotEnigme[];
}

/** Nombre de noms propres d'une liste et briques maximales par nom (règlement FFCP, art. 5.3). */
export const NOMS_PAR_LISTE = 4;
export const BRIQUES_MAX_NOM_PROPRE = 3;

export interface NomPropre {
  /** Position dans la liste (1 à 4). */
  rang: number;
  /** Nom complet attendu, tel qu'il doit être prononcé (prénom compris s'il figure au Larousse). */
  reponse: string;
  /** Autres formes complètes acceptées. */
  variantes?: string[];
  /**
   * Surnoms acceptés comme réponse (ils s'ajoutent à `variantes` pour la correction) mais qui ne font PAS partie
   * du nom : leurs mots restent permis comme briques (« Saint Louis » pour Louis IX : « Saint » n'est pas interdit,
   * seul « Louis » l'est). Chaque surnom doit aussi figurer dans `variantes`.
   */
  surnoms?: string[];
  /**
   * Réponses incomplètes (ex. le seul patronyme) qui déclenchent l'invitation « Complétez »,
   * possible une seule fois par nom propre.
   */
  partielles?: string[];
  /** Entre 1 et 3 briques ; rébus et incitations sont autorisés. */
  briques: Brique[];
}

export interface ListeNomsPropres {
  id: string;
  version?: string;
  difficulte: Difficulte;
  theme: string;
  noms: NomPropre[];
}
