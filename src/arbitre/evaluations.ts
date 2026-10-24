import type { Difficulte } from "../engine/types";
import type { StockageCle } from "./journal";

/**
 * Évaluations des contenus par le joueur, en fin d'énigme ou de liste : note globale, niveau ressenti
 * et commentaire, plus une note par piste (enchaînement de briques). Elles servent à améliorer la
 * rédaction des pistes et le classement des contenus par niveau.
 */
export type Note = 1 | 2 | 3 | 4 | 5;

export interface EvaluationPiste {
  rangMot: number;
  motADeviner: string;
  /** Briques de la piste, dans l'ordre. */
  briques: string[];
  note: Note;
  commentaire: string;
}

export interface Evaluation {
  id: string;
  horodatage: string;
  type: "enigme" | "noms";
  contenuId: string;
  versionContenu: string;
  /** Niveau annoncé par le contenu. */
  difficulteAnnoncee: Difficulte;
  /** Niveau qui paraît juste au joueur. */
  niveauRessenti: Difficulte;
  /** Qualité d'ensemble (1 : mauvaise, 5 : excellente). */
  note: Note;
  commentaire: string;
  /** Rôle du joueur pendant la partie : en Dico, les pistes sont les siennes et ne sont pas notées. */
  role: "syno" | "dico";
  pistes: EvaluationPiste[];
}

export type NouvelleEvaluation = Omit<Evaluation, "id" | "horodatage">;

export const CLE_EVALUATIONS = "pyramide-solo.evaluations.v1";

const estNote = (x: unknown): x is Note => x === 1 || x === 2 || x === 3 || x === 4 || x === 5;
const estNiveau = (x: unknown): x is Difficulte => x === "facile" || x === "moyen" || x === "difficile";

function estEvaluation(x: unknown): x is Evaluation {
  if (typeof x !== "object" || x === null) return false;
  const e = x as Record<string, unknown>;
  return (
    typeof e.id === "string" &&
    typeof e.contenuId === "string" &&
    (e.type === "enigme" || e.type === "noms") &&
    estNiveau(e.difficulteAnnoncee) &&
    estNiveau(e.niveauRessenti) &&
    estNote(e.note) &&
    Array.isArray(e.pistes)
  );
}

export interface Evaluations {
  lister(): Evaluation[];
  ajouter(donnees: NouvelleEvaluation): Evaluation;
  supprimerTout(): void;
  exporter(): string;
  /** Fusionne un export JSON ; renvoie le nombre d'évaluations ajoutées. */
  importer(json: string): number;
}

function nouvelId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `ev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function creerEvaluations(stockage: StockageCle | null): Evaluations {
  let evaluations: Evaluation[] = [];
  try {
    const brut = stockage?.getItem(CLE_EVALUATIONS);
    const donnees: unknown = brut ? JSON.parse(brut) : [];
    if (Array.isArray(donnees)) evaluations = donnees.filter(estEvaluation);
  } catch {
    // Stockage illisible : on repart d'une liste vide.
  }
  const sauvegarder = () => {
    try {
      stockage?.setItem(CLE_EVALUATIONS, JSON.stringify(evaluations));
    } catch {
      // Stockage indisponible : les évaluations restent en mémoire jusqu'à l'export.
    }
  };
  return {
    lister: () => [...evaluations],
    ajouter(donnees) {
      const evaluation: Evaluation = { ...donnees, id: nouvelId(), horodatage: new Date().toISOString() };
      evaluations = [...evaluations, evaluation];
      sauvegarder();
      return evaluation;
    },
    supprimerTout() {
      evaluations = [];
      sauvegarder();
    },
    exporter: () => JSON.stringify(evaluations, null, 2),
    importer(json) {
      const donnees: unknown = JSON.parse(json);
      if (!Array.isArray(donnees)) throw new Error("Le fichier ne contient pas une liste d'évaluations");
      const connus = new Set(evaluations.map((e) => e.id));
      const nouvelles = donnees.filter(estEvaluation).filter((e) => !connus.has(e.id));
      evaluations = [...evaluations, ...nouvelles];
      sauvegarder();
      return nouvelles.length;
    },
  };
}
