import type { Journal } from "../arbitre/journal";
import type { AnalyseNiveau1, NiveauDoute } from "../content/arbitreNiveau1";
import type { DemandeArbitre, DemandeSyno, ErreurSyno, VerdictArbitre } from "../engine/synoTypes";
import { el } from "./dom";
import { enteteFournisseur } from "./fournisseur";
import { demanderSyno } from "./synoClient";

/** Demande son verdict à l'arbitre (service /api/arbitre, joué par Claude côté serveur). */
export async function demanderArbitre(demande: DemandeArbitre): Promise<VerdictArbitre> {
  const reponse = await fetch(`${import.meta.env.BASE_URL}api/arbitre`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...enteteFournisseur() },
    body: JSON.stringify(demande),
  });
  const donnees = (await reponse.json().catch(() => null)) as VerdictArbitre | ErreurSyno | null;
  if (!reponse.ok || !donnees || !("valide" in donnees)) {
    throw new Error(donnees && "erreur" in donnees ? donnees.erreur : `Arbitre indisponible (${reponse.status}).`);
  }
  return donnees;
}

export interface Coup {
  reponse: string;
  /** Verdict de l'arbitre IA ; null s'il n'a pas pu se prononcer ; undefined s'il n'a pas été demandé. */
  verdict?: VerdictArbitre | null;
}

/**
 * Joue une brique. Si le joueur l'a demandé, l'arbitre IA (niveau 2) est interrogé en parallèle
 * de Syno (qui ne connaît pas le verdict). Une erreur de Syno interrompt le coup ; une erreur de
 * l'arbitre seul ne bloque pas le jeu.
 */
export async function jouerCoup(syno: DemandeSyno, arbitre?: DemandeArbitre): Promise<Coup> {
  if (!arbitre) return { reponse: await demanderSyno(syno) };
  const [verdict, reponse] = await Promise.all([demanderArbitre(arbitre).catch(() => null), demanderSyno(syno)]);
  return { reponse, verdict };
}

/** Le verdict refuse-t-il la brique ? Seulement s'il est certain : le doute profite au joueur (art. 4). */
export const refuse = (verdict: VerdictArbitre | null | undefined): verdict is VerdictArbitre => !!verdict && !verdict.valide && verdict.certain;

/** Texte à montrer au joueur quand l'arbitre doute ou n'a pas pu juger. */
export function noteArbitre(verdict: VerdictArbitre | null | undefined): string {
  if (verdict === undefined) return "";
  if (verdict === null) return " (Arbitrage IA indisponible : brique acceptée.)";
  if (!verdict.valide) return ` Arbitre IA : doute (${verdict.explication}) Le doute profite au joueur.`;
  return " Arbitre IA : brique conforme.";
}

const LIBELLE_DOUTE: Record<NiveauDoute, string> = { aucun: "aucun doute", faible: "doute faible", moyen: "doute moyen", eleve: "doute élevé" };

/** Note de l'arbitre de niveau 1 (raisons du doute), ajoutée au message quand une brique est jouée. */
export function noteNiveau1(analyse: AnalyseNiveau1): string {
  if (analyse.niveau === "aucun") return "";
  return ` Arbitre niveau 1 : ${LIBELLE_DOUTE[analyse.niveau]} (${analyse.indices.map((i) => i.raison).join(" ; ")}).`;
}

/**
 * Panneau affiché quand l'arbitre de niveau 1 a un doute suffisant : niveau, score et raisons,
 * puis le choix du joueur. Par défaut (bouton principal), la brique est jouée sans arbitrage IA.
 */
export function panneauDoute(brique: string, analyse: AnalyseNiveau1, actions: { jouer: () => void; demanderIA: () => void; changer: () => void }): HTMLElement {
  return el(
    "div",
    { class: `avertissement doute-${analyse.niveau}`, role: "alert" },
    el("p", {}, el("b", {}, `Arbitre niveau 1 : ${LIBELLE_DOUTE[analyse.niveau]} (${analyse.doute} %)`), ` sur la brique « ${brique} »`),
    el("ul", {}, ...analyse.indices.map((i) => el("li", {}, i.raison))),
    el(
      "div",
      { class: "actions" },
      el("button", { class: "btn", type: "button", onclick: actions.jouer }, "Jouer la brique (sans arbitrage IA)"),
      el("button", { class: "btn sec", type: "button", onclick: actions.demanderIA }, "Demander l'arbitrage IA"),
      el("button", { class: "btn sec petit", type: "button", onclick: actions.changer }, "Changer de brique"),
    ),
  );
}

/** Enregistre un refus de l'arbitre dans le journal (à examiner : c'est une donnée d'apprentissage). */
export function journaliserRefus(
  journal: Journal,
  verdict: VerdictArbitre,
  contexte: { contenuId: string; versionContenu: string; rangMot: number; motADeviner: string; briques: string[] },
): string {
  return journal.ajouter({
    ...contexte,
    briqueSignalee: contexte.briques.length,
    avis: "invalide",
    motif: verdict.motif,
    ...(verdict.regle && { regle: verdict.regle }),
    commentaire: `Arbitre IA : ${verdict.explication}`,
    moment: "arbitrage",
  }).id;
}

/** Bouton « Contester » : le joueur conteste le refus ; la brique est alors rejouée comme valide. */
export function boutonContester(onContester: () => void): HTMLElement {
  return el(
    "div",
    { class: "actions" },
    el("button", { class: "btn sec petit", type: "button", onclick: onContester }, "Contester la décision de l'arbitre"),
    el("span", { class: "qui" }, "La contestation est notée dans le journal de l'arbitre."),
  );
}
