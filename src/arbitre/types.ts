export type Avis = "invalide" | "valide";
export type StatutSignalement = "a-examiner" | "confirme" | "rejete";
/** Signalé pendant le jeu (mot encore inconnu, mot annulé), après coup (mot révélé, sans effet sur le score), ou refus de l'arbitre IA en mode Dico. */
export type Moment = "en-jeu" | "apres-coup" | "arbitrage";

export interface Motif {
  id: string;
  libelle: string;
  /** Article du règlement FFCP correspondant. */
  regle: string;
}

/**
 * Motifs proposés lors d'un signalement. Le règlement juge l'ENCHAÎNEMENT des briques reliées au
 * mot à deviner ; un mot n'est invalide en lui-même que rarement (mot inexistant).
 */
export const MOTIFS: readonly Motif[] = [
  { id: "sans-relation", libelle: "La 1re brique n'a pas de relation (synonyme, contraire, association) avec le mot, un mot souche ou un homonyme", regle: "4.1" },
  { id: "raccourci", libelle: "Raccourci : la relation n'est pas directe", regle: "4" },
  { id: "prefixe-suffixe-d-abord", libelle: "L'enchaînement fait deviner le préfixe ou le suffixe avant le mot souche", regle: "4.3.2.b" },
  { id: "incitation", libelle: "Incitation trop tôt (1re brique, ou avant la 3e après « verbe », « adjectif »…) ou répétée", regle: "4.3.3" },
  { id: "rebus", libelle: "Rébus : mots juxtaposés sans relation avec le mot", regle: "4.3.2.d" },
  { id: "declinaison", libelle: "Déclinaison invalide (homonyme de racine différente, nom propre non déclinable)", regle: "4.3.1" },
  { id: "consonance", libelle: "Consonance injustifiée", regle: "4.3.4" },
  { id: "racine", libelle: "Mot de même racine que le mot à deviner", regle: "4" },
  { id: "mot-inexistant", libelle: "Mot inexistant, erroné ou absent des dictionnaires", regle: "4.2.1" },
  { id: "autre", libelle: "Autre (préciser en commentaire)", regle: "" },
];

export interface Signalement {
  id: string;
  /** Date ISO 8601. */
  horodatage: string;
  contenuId: string;
  /** Rang du mot (énigme) ou du nom (noms propres), à partir de 1. */
  rangMot: number;
  motADeviner: string;
  /** Enchaînement de briques montré au joueur, dans l'ordre. */
  briques: string[];
  /** Numéro (à partir de 1) de la brique où l'enchaînement devient invalide (ou dernière brique jugée valide). */
  briqueSignalee: number;
  avis: Avis;
  /** Identifiant d'un motif de MOTIFS (null pour un avis « valide »). */
  motif: string | null;
  regle: string;
  commentaire: string;
  statut: StatutSignalement;
  /** Décision finale après examen : l'enchaînement est jugé valide ou invalide. */
  decision: Avis | null;
  versionContenu: string;
  /** Absent dans les signalements antérieurs à la version « enchaînement » (considérés « en-jeu »). */
  moment?: Moment;
}

/** Données à fournir pour créer un signalement (le reste est calculé). */
export type NouveauSignalement = Omit<Signalement, "id" | "horodatage" | "statut" | "decision" | "regle"> & {
  regle?: string;
};
