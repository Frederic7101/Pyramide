import { MOTIFS, type NouveauSignalement, type Signalement, type StatutSignalement } from "./types";

/** Sous-ensemble de l'API Storage du navigateur (permet d'injecter un faux stockage dans les tests). */
export interface StockageCle {
  getItem(cle: string): string | null;
  setItem(cle: string, valeur: string): void;
}

export const CLE_JOURNAL = "pyramide-solo.signalements.v1";

function nouvelId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `s-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function estSignalement(x: unknown): x is Signalement {
  if (typeof x !== "object" || x === null) return false;
  const s = x as Record<string, unknown>;
  return (
    typeof s.id === "string" &&
    typeof s.horodatage === "string" &&
    typeof s.contenuId === "string" &&
    typeof s.rangMot === "number" &&
    typeof s.motADeviner === "string" &&
    Array.isArray(s.briques) &&
    typeof s.briqueSignalee === "number" &&
    (s.avis === "valide" || s.avis === "invalide") &&
    (s.statut === "a-examiner" || s.statut === "confirme" || s.statut === "rejete")
  );
}

export interface Journal {
  lister(): Signalement[];
  ajouter(donnees: NouveauSignalement): Signalement;
  /** Enregistre la décision de l'examinateur : confirmer garde l'avis, rejeter l'inverse. */
  examiner(id: string, statut: Exclude<StatutSignalement, "a-examiner">): void;
  supprimerTout(): void;
  exporter(): string;
  /** Fusionne un export JSON ; renvoie le nombre de signalements ajoutés (les identifiants déjà présents sont ignorés). */
  importer(json: string): number;
  /** Vrai si la stockage a échoué (navigation privée, quota...) : les données ne seront pas conservées. */
  readonly stockageIndisponible: boolean;
}

/** Journal des signalements, persisté dans `stockage` (localStorage en production). */
export function creerJournal(stockage: StockageCle | null): Journal {
  let signalements: Signalement[] = [];
  let indisponible = stockage === null;

  try {
    const brut = stockage?.getItem(CLE_JOURNAL);
    if (brut) {
      const donnees: unknown = JSON.parse(brut);
      if (Array.isArray(donnees)) signalements = donnees.filter(estSignalement);
    }
  } catch {
    indisponible = true;
  }

  function sauvegarder(): void {
    if (!stockage) return;
    try {
      stockage.setItem(CLE_JOURNAL, JSON.stringify(signalements));
    } catch {
      indisponible = true;
    }
  }

  return {
    lister: () => [...signalements],
    ajouter(donnees) {
      const motif = MOTIFS.find((m) => m.id === donnees.motif);
      const signalement: Signalement = {
        ...donnees,
        id: nouvelId(),
        horodatage: new Date().toISOString(),
        regle: donnees.regle ?? motif?.regle ?? "",
        statut: "a-examiner",
        decision: null,
      };
      signalements = [...signalements, signalement];
      sauvegarder();
      return signalement;
    },
    examiner(id, statut) {
      signalements = signalements.map((s) =>
        s.id !== id ? s : { ...s, statut, decision: statut === "confirme" ? s.avis : s.avis === "invalide" ? "valide" : "invalide" },
      );
      sauvegarder();
    },
    supprimerTout() {
      signalements = [];
      sauvegarder();
    },
    exporter: () => JSON.stringify(signalements, null, 2),
    importer(json) {
      const donnees: unknown = JSON.parse(json);
      if (!Array.isArray(donnees)) throw new Error("Le fichier ne contient pas une liste de signalements");
      const connus = new Set(signalements.map((s) => s.id));
      const nouveaux = donnees.filter(estSignalement).filter((s) => !connus.has(s.id));
      signalements = [...signalements, ...nouveaux];
      sauvegarder();
      return nouveaux.length;
    },
    get stockageIndisponible() {
      return indisponible;
    },
  };
}

/**
 * Vrai si un signalement de ce mot a été confirmé invalide (décision "invalide") :
 * le mot doit alors être exclu des parties tant que le contenu n'est pas corrigé.
 */
export function contenuExclu(signalements: readonly Signalement[], contenuId: string, rangMot: number): boolean {
  return signalements.some((s) => s.contenuId === contenuId && s.rangMot === rangMot && s.decision === "invalide");
}
