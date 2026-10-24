import type { Journal } from "../arbitre/journal";
import { analyserNiveau1, auMoins, SEUIL_PROPOSITION_IA, type AnalyseNiveau1 } from "../content/arbitreNiveau1";
import {
  creerEnigmeDico,
  jouerBrique,
  miser,
  miseMax,
  proposerSolutionDico,
  refuserBrique,
  scoreEnigmeDico,
  soldeDico,
  texteEnigmeDico,
  ESSAIS_SOLUTION,
  type EtatEnigmeDico,
  type StatutMotDico,
} from "../engine/enigmeDico";
import type { DemandeSyno } from "../engine/synoTypes";
import { BRIQUES_PAR_ENIGME, type Enigme } from "../engine/types";
import { el } from "./dom";
import { formulaireEvaluation } from "./evaluationForm";
import { evaluations } from "./magasins";
import { boutonContester, jouerCoup, journaliserRefus, noteArbitre, noteNiveau1, panneauDoute, refuse } from "./arbitrage";
import { demanderSyno } from "./synoClient";
import { dictionnaireCharge } from "./verificationReponse";

const LIBELLE: Record<StatutMotDico, string> = { "a-jouer": "à jouer", trouve: "trouvé", perdu: "non trouvé", refuse: "brique refusée" };

/**
 * Écran d'une énigme en mode Dico : le joueur voit le mot, annonce sa mise et donne ses briques ;
 * Syno (Claude, via le serveur) devine. `onTerminee` reçoit le score de l'énigme et l'état final (pour l'historique).
 */
export function montrerEnigmeDico(
  racine: HTMLElement,
  enigme: Enigme,
  journal: Journal,
  onTerminee: (score: ReturnType<typeof scoreEnigmeDico>, etat: EtatEnigmeDico) => void,
  onJournal: () => void = () => {},
): void {
  let etat: EtatEnigmeDico = creerEnigmeDico(enigme);
  let message = "";
  let enAttente = false;
  /** Brique en attente de la décision du joueur, après un doute de l'arbitre de niveau 1. */
  let enDecision: { brique: string; analyse: AnalyseNiveau1 } | null = null;
  /** Dernier refus de l'arbitre, que le joueur peut contester tant qu'il n'a pas rejoué. */
  let contestable: { etatAvant: EtatEnigmeDico; brique: string; reponse: string; signalementId: string } | null = null;

  function dessiner(): void {
    racine.replaceChildren(
      el("h2", {}, enigme.titre, el("small", {}, " Vous êtes Dico, l'ordinateur est Syno")),
      barreMots(),
      el("p", {}, "Briques restantes : ", el("b", {}, `${soldeDico(etat)} / ${BRIQUES_PAR_ENIGME}`)),
      message ? el("p", { class: "message", role: "status" }, message) : "",
      contestable ? boutonContester(contester) : "",
      etat.phase === "mots" ? zoneMot() : etat.phase === "solution" ? zoneSolution() : zoneFin(),
    );
    racine.querySelector<HTMLInputElement>("input")?.focus();
  }

  function barreMots(): HTMLElement {
    return el(
      "div",
      { class: "mots" },
      ...etat.mots.map((m, i) => {
        const enCours = etat.phase === "mots" && i === etat.motIndex;
        const classe = m.statut === "trouve" ? "ok" : m.statut === "a-jouer" ? (enCours ? "cur" : "") : "ko";
        const detail = m.statut === "a-jouer" ? (m.mise ? `mise : ${m.mise}` : "") : `${LIBELLE[m.statut]} : ${enigme.mots[i].reponse}`;
        return el("div", { class: `mot ${classe}` }, `Mot ${i + 1}`, el("small", {}, detail));
      }),
    );
  }

  /** Le joueur conteste le refus : la brique est rejouée comme valide, avec la réponse que Syno avait donnée. */
  function contester(): void {
    if (!contestable) return;
    const { etatAvant, brique, reponse, signalementId } = contestable;
    contestable = null;
    journal.examiner(signalementId, "rejete");
    onJournal();
    etat = jouerBrique(etatAvant, brique, reponse);
    const statut = etat.mots[etatAvant.motIndex].statut;
    message = `Contestation acceptée. Syno : « ${reponse} ». ${statut === "trouve" ? "Trouvé !" : statut === "perdu" ? "Mise épuisée, mot non trouvé." : "Brique suivante."}`;
    dessiner();
  }

  /** Analyse de niveau 1 (programmée) d'une brique pour le mot en cours. */
  function analyser(brique: string): AnalyseNiveau1 {
    const attendu = enigme.mots[etat.motIndex];
    // Dico ne connaît pas encore les mots suivants ni la solution ; les mots déjà joués lui sont connus.
    const autres = [
      ...enigme.mots.filter((_, i) => i > etat.motIndex).flatMap((m) => [m.reponse, ...(m.variantes ?? [])]),
      enigme.solution,
      ...(enigme.solutionVariantes ?? []),
    ];
    return analyserNiveau1(
      brique,
      { reponse: attendu.reponse, variantes: attendu.variantes, famille: attendu.famille, briquesConnues: attendu.briques.map((b) => b.texte) },
      { type: "mot", precedentes: etat.mots[etat.motIndex].briques, autresMots: autres, dictionnaire: dictionnaireCharge() },
    );
  }

  /** Ce que Syno sait déjà : le titre, le rang du mot et l'issue des mots précédents. */
  function contexteSyno(): Pick<DemandeSyno, "titre" | "numero" | "precedents"> {
    return {
      titre: enigme.titre,
      numero: etat.motIndex + 1,
      precedents: etat.mots.slice(0, etat.motIndex).map((m, i) => ({ numero: i + 1, propositions: [...m.reponsesSyno], trouve: m.statut === "trouve" })),
    };
  }

  /** Joue la brique : Syno devine ; l'arbitre IA (niveau 2) n'est interrogé que si le joueur l'a demandé. */
  function jouer(brique: string, analyse: AnalyseNiveau1, avecIA: boolean): void {
    const mot = etat.mots[etat.motIndex];
    const attendu = enigme.mots[etat.motIndex];
    enDecision = null;
    contestable = null;
    void avecSyno(async () => {
      const briques = [...mot.briques, brique];
      const { reponse, verdict } = await jouerCoup(
        { type: "mot", ...contexteSyno(), briques, reponsesFausses: mot.reponsesSyno },
        avecIA ? { type: "mot", motADeviner: attendu.reponse, variantes: attendu.variantes, famille: attendu.famille, briques } : undefined,
      );
      const etatAvant = etat;
      const index = etat.motIndex;
      if (refuse(verdict)) {
        const signalementId = journaliserRefus(journal, verdict, { contenuId: enigme.id, versionContenu: enigme.version ?? "non-versionne", rangMot: attendu.rang, motADeviner: attendu.reponse, briques });
        onJournal();
        etat = refuserBrique(etat, brique, verdict.explication);
        contestable = { etatAvant, brique, reponse, signalementId };
        message = `Arbitre IA : brique « ${brique} » refusée${verdict.regle ? ` (art. ${verdict.regle})` : ""}. ${verdict.explication} Le mot et sa mise sont perdus.`;
        return;
      }
      etat = jouerBrique(etat, brique, reponse);
      const statut = etat.mots[index].statut;
      message =
        (statut === "trouve" ? `Syno : « ${reponse} ». Trouvé !` :
        statut === "perdu" ? `Syno : « ${reponse} ». Mise épuisée, mot non trouvé.` :
        `Syno : « ${reponse} ». Ce n'est pas ça : brique suivante.`) + (verdict === undefined ? noteNiveau1(analyse) : noteArbitre(verdict));
    });
  }

  /** Appelle Syno en affichant l'attente ; en cas d'erreur (clé absente…), rien n'est consommé. */
  async function avecSyno(action: () => Promise<void>): Promise<void> {
    enAttente = true;
    dessiner();
    try {
      await action();
    } catch (erreur) {
      message = erreur instanceof Error ? erreur.message : "Erreur du service Syno.";
    } finally {
      enAttente = false;
      dessiner();
    }
  }

  function zoneMot(): HTMLElement {
    const mot = etat.mots[etat.motIndex];
    const attendu = enigme.mots[etat.motIndex];
    const entete = [
      el("p", { class: "qui" }, `Mot n°${etat.motIndex + 1} sur ${enigme.mots.length} à faire deviner :`),
      el("div", { class: "secret" }, attendu.reponse),
      attendu.famille?.length ? el("p", { class: "qui" }, `Interdits (même racine) : ${attendu.famille.join(", ")}`) : "",
    ];

    if (mot.mise === null) {
      const max = miseMax(etat);
      const champ = el("input", { type: "number", min: "1", max: String(max), value: String(Math.min(2, max)), "aria-label": "Mise" });
      return el(
        "div",
        {},
        ...entete,
        el(
          "form",
          {
            onsubmit: (e: Event) => {
              e.preventDefault();
              try {
                etat = miser(etat, Number(champ.value));
                message = "";
              } catch (erreur) {
                message = erreur instanceof Error ? erreur.message : String(erreur);
              }
              dessiner();
            },
          },
          el("label", {}, `Votre mise (1 à ${max} briques) `),
          champ,
          el("button", { class: "btn", type: "submit" }, "Annoncer la mise"),
        ),
      );
    }

    const historique = mot.briques.map((b, k) =>
      el("div", { class: "indice" }, el("span", {}, el("span", { class: "qui" }, `Brique ${k + 1} `), el("b", {}, b)), el("span", { class: "qui" }, `Syno : « ${mot.reponsesSyno[k]} » ✗`)),
    );
    const champ = el("input", { type: "text", placeholder: "Votre brique (une proposition)...", autocomplete: "off", "aria-label": "Votre brique", ...(enAttente ? { disabled: true } : {}) });
    const formulaire = el(
      "form",
      {
        onsubmit: (e: Event) => {
          e.preventDefault();
          const brique = champ.value.trim();
          if (brique === "" || enAttente) return;
          // Bouton « Envoyer avec arbitrage IA » : le joueur demande d'emblée le niveau 2.
          const avecIA = (e as SubmitEvent).submitter?.dataset.ia === "oui";
          const analyse = analyser(brique);
          if (analyse.erreurs.length > 0) {
            etat = refuserBrique(etat, brique, analyse.erreurs.join(" ; "));
            message = `Arbitre niveau 1 : brique « ${brique} » refusée : ${analyse.erreurs.join(" ; ")}. Le mot et sa mise sont perdus (art. 5.1.1).`;
            dessiner();
            return;
          }
          if (!avecIA && auMoins(analyse.niveau, SEUIL_PROPOSITION_IA)) {
            enDecision = { brique, analyse };
            message = "";
            dessiner();
            return;
          }
          jouer(brique, analyse, avecIA);
        },
      },
      champ,
      el("button", { class: "btn", type: "submit", ...(enAttente ? { disabled: true } : {}) }, enAttente ? "Syno réfléchit…" : "Envoyer"),
      el("button", { class: "btn sec petit", type: "submit", "data-ia": "oui", title: "Faire juger la brique par l'arbitre IA (appel payant)", ...(enAttente ? { disabled: true } : {}) }, "Envoyer avec arbitrage IA"),
    );
    return el(
      "div",
      {},
      ...entete,
      el("p", { class: "qui" }, `Brique ${mot.briques.length + 1} sur ${mot.mise} misées`),
      ...historique,
      enDecision
        ? panneauDoute(enDecision.brique, enDecision.analyse, {
            jouer: () => enDecision && jouer(enDecision.brique, enDecision.analyse, false),
            demanderIA: () => enDecision && jouer(enDecision.brique, enDecision.analyse, true),
            changer: () => { enDecision = null; dessiner(); },
          })
        : formulaire,
    );
  }

  function zoneSolution(): HTMLElement {
    return el(
      "div",
      {},
      el("p", {}, "Syno doit maintenant trouver la solution de l'énigme :"),
      el("div", { class: "texte" }, texteEnigmeDico(etat)),
      ...etat.essaisSolution.map((s) => el("p", { class: "qui" }, `Syno : « ${s} » ✗`)),
      el(
        "button",
        {
          class: "btn",
          type: "button",
          ...(enAttente ? { disabled: true } : {}),
          onclick: () =>
            void avecSyno(async () => {
              const reponse = await demanderSyno({ type: "solution", titre: enigme.titre, briques: [], reponsesFausses: [...etat.essaisSolution], texte: texteEnigmeDico(etat) });
              etat = proposerSolutionDico(etat, reponse);
              message = etat.solutionTrouvee ? `Syno : « ${reponse} ». Solution trouvée !` : `Syno : « ${reponse} ». Ce n'est pas la solution.`;
            }),
        },
        enAttente ? "Syno réfléchit…" : `Demander la solution à Syno (essai ${etat.essaisSolution.length + 1} sur ${ESSAIS_SOLUTION})`,
      ),
    );
  }

  function zoneFin(): HTMLElement {
    const s = scoreEnigmeDico(etat);
    const ligne = (nom: string, valeur: number) => el("tr", {}, el("td", {}, nom), el("td", {}, String(valeur)));
    return el(
      "div",
      {},
      el("p", {}, el("b", {}, "Solution : "), enigme.solution, etat.solutionTrouvee ? " (trouvée par Syno)" : " (non trouvée)"),
      el("table", {}, ligne("Mots trouvés", s.mots), ligne("Bonus (briques restantes)", s.bonus), ligne("Solution", s.solution), el("tr", {}, el("th", {}, "Total"), el("th", {}, String(s.total)))),
      formulaireEvaluation({
        evaluations,
        base: { type: "enigme", contenuId: enigme.id, versionContenu: enigme.version ?? "non-versionne", difficulteAnnoncee: enigme.difficulte, role: "dico" },
        pistes: [],
      }),
      el("button", { class: "btn", type: "button", onclick: () => onTerminee(s, etat) }, "Continuer"),
    );
  }

  dessiner();
}
