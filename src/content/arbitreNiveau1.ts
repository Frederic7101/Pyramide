import type { Dictionnaire } from "../engine/dictionnaire";
import { clePhonetique, normaliser } from "../engine/matching";
import { estMotGrammatical } from "./enchainement";
import { controlerBriqueJoueur } from "./validation";

/**
 * Arbitre de niveau 1 (mode Dico), programmé, sans appel à l'IA.
 * - Erreurs certaines (mot prononcé, racine déclarée, chiffres…) : la brique est refusée.
 * - Sinon, il estime un niveau de doute à partir d'indices et en donne les raisons ; le joueur
 *   décide alors s'il demande l'arbitrage IA (niveau 2). Par défaut, pas d'appel à l'IA.
 * Il ne peut pas juger la relation de sens : une piste inconnue du contenu n'est pas un doute en soi.
 */
export type NiveauDoute = "aucun" | "faible" | "moyen" | "eleve";

export interface Indice {
  raison: string;
  /** Poids de l'indice dans le doute, de 0 à 100. */
  poids: number;
}

export interface AnalyseNiveau1 {
  erreurs: string[];
  /** Doute global, de 0 (aucun) à 100. */
  doute: number;
  niveau: NiveauDoute;
  indices: Indice[];
  /** Vrai si la brique figure parmi les pistes du contenu pour ce mot (relation déjà vérifiée). */
  pisteConnue: boolean;
}

export interface MotAJuger {
  reponse: string;
  variantes?: string[];
  famille?: string[];
  /** Briques prévues par le contenu pour ce mot (pistes relues). */
  briquesConnues?: string[];
}

export interface ContexteNiveau1 {
  type: "mot" | "nom";
  /** Briques déjà jouées pour ce mot, avant celle-ci. */
  precedentes: string[];
  /** Mots que Dico ne connaît pas encore : mots suivants de l'énigme et solution (une brique ne doit pas les dévoiler). */
  autresMots?: string[];
  /** Dictionnaire des mots français (null s'il n'est pas chargé : contrôle sauté). */
  dictionnaire?: Dictionnaire | null;
}

/** Seuil à partir duquel le jeu propose l'arbitrage IA avant de jouer la brique. */
export const SEUIL_PROPOSITION_IA: NiveauDoute = "moyen";

export function niveauDoute(doute: number): NiveauDoute {
  if (doute <= 0) return "aucun";
  if (doute < 30) return "faible";
  if (doute < 60) return "moyen";
  return "eleve";
}

const ORDRE: readonly NiveauDoute[] = ["aucun", "faible", "moyen", "eleve"];
export const auMoins = (niveau: NiveauDoute, seuil: NiveauDoute) => ORDRE.indexOf(niveau) >= ORDRE.indexOf(seuil);

/** Fin phonétique commune (au moins 3 sons) entre deux mots qui ne commencent pas pareil : consonance possible. */
function consonance(a: string, b: string): boolean {
  const ka = clePhonetique(a).replace(/ /g, "");
  const kb = clePhonetique(b).replace(/ /g, "");
  if (ka.length < 4 || kb.length < 4 || ka[0] === kb[0] || ka === kb) return false;
  let commun = 0;
  while (commun < Math.min(ka.length, kb.length) && ka[ka.length - 1 - commun] === kb[kb.length - 1 - commun]) commun++;
  return commun >= 3 && Math.abs(ka.length - kb.length) <= 2;
}

export function analyserNiveau1(brique: string, mot: MotAJuger, contexte: ContexteNiveau1): AnalyseNiveau1 {
  const interdits = [mot.reponse, ...(mot.variantes ?? [])];
  const controle = controlerBriqueJoueur(brique, interdits, mot.famille ?? [], contexte.autresMots ?? [], contexte.type === "nom" ? "noms" : "enigme");
  const pisteConnue = (mot.briquesConnues ?? []).some((b) => normaliser(b) === normaliser(brique));
  const indices: Indice[] = [];

  for (const avertissement of controle.avertissements) {
    const poids = /racine commune possible/.test(avertissement) ? 70 : /suffixe/.test(avertissement) ? 50 : /lettre seule/.test(avertissement) ? 40 : 30;
    indices.push({ raison: avertissement, poids });
  }

  const position = contexte.precedentes.length + 1;
  if (contexte.precedentes.some((p) => normaliser(p) === normaliser(brique))) {
    indices.push({ raison: "brique déjà donnée pour ce mot", poids: 30 });
  }

  if (contexte.type === "mot") {
    // Mot inexistant ou mal orthographié (les noms propres, avec majuscule, ne sont pas vérifiés).
    const motsCommuns = brique.split(/\s+/).filter((m) => m !== "" && m[0] === m[0].toLowerCase());
    const inconnus = contexte.dictionnaire ? motsCommuns.filter((m) => !contexte.dictionnaire!.contient(m)) : [];
    if (inconnus.length > 0) {
      indices.push({ raison: `${inconnus.map((m) => `« ${m} »`).join(", ")} absent du dictionnaire : mot inexistant ou mal orthographié ? (art. 4.2.1)`, poids: 60 });
    }
    if (!pisteConnue && interdits.some((cible) => consonance(brique, cible))) {
      indices.push({ raison: `« ${brique} » sonne comme « ${mot.reponse} » : consonance sans relation ? (art. 4.3.4)`, poids: 45 });
    }
    if (position === 1 && estMotGrammatical(brique)) {
      indices.push({ raison: `1re brique « ${brique} » : si elle n'est pas en relation avec le mot, l'incitation n'est permise qu'à partir de la 3e brique (art. 4.1)`, poids: 20 });
    }
    if (/-/.test(brique) && contexte.dictionnaire && !contexte.dictionnaire.contient(brique)) {
      indices.push({ raison: `« ${brique} » : mot composé absent du dictionnaire (art. 4.2.1.a)`, poids: 50 });
    }
  }

  // Une piste déjà relue dans le contenu efface les doutes « mous » (pas les erreurs).
  const retenus = pisteConnue ? indices.filter((i) => i.poids >= 60) : indices;
  const doute = Math.round(100 * (1 - retenus.reduce((p, i) => p * (1 - i.poids / 100), 1)));
  return { erreurs: controle.erreurs, doute, niveau: niveauDoute(doute), indices: retenus, pisteConnue };
}
