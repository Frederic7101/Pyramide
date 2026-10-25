import type { Journal } from "../arbitre/journal";
import { analyserNiveau1, auMoins, SEUIL_PROPOSITION_IA, type AnalyseNiveau1 } from "../content/arbitreNiveau1";
import {
  abandonnerNom,
  completerNom,
  creerNomsDico,
  jouerBriqueNom,
  peutCompleter,
  refuserBriqueNom,
  scoreNomsDico,
  type EtatNomsDico,
  type StatutNomDico,
} from "../engine/nomsDico";
import type { DemandeSyno } from "../engine/synoTypes";
import { BRIQUES_MAX_NOM_PROPRE, type ListeNomsPropres } from "../engine/types";
import { el } from "./dom";
import { formulaireEvaluation } from "./evaluationForm";
import { evaluations } from "./magasins";
import { boutonContester, jouerCoup, journaliserRefus, noteArbitre, noteNiveau1, panneauDoute, refuse } from "./arbitrage";
import { demanderSyno } from "./synoClient";

const LIBELLE: Record<StatutNomDico, string> = { "a-jouer": "à jouer", trouve: "trouvé", perdu: "non trouvé", refuse: "brique refusée" };

/** Écran des Noms Propres en mode Dico : le joueur fait deviner, Syno (Claude) répond. */
export function montrerNomsDico(
  racine: HTMLElement,
  liste: ListeNomsPropres,
  journal: Journal,
  onTerminee: (score: number, etat: EtatNomsDico) => void,
  onJournal: () => void = () => {},
): void {
  let etat: EtatNomsDico = creerNomsDico(liste);
  let message = "";
  let enAttente = false;
  /** Dernier refus de l'arbitre, que le joueur peut contester tant qu'il n'a pas rejoué. */
  let contestable: { etatAvant: EtatNomsDico; brique: string; reponse: string; signalementId: string } | null = null;
  /** Brique en attente de la décision du joueur, après un doute de l'arbitre de niveau 1. */
  let enDecision: { brique: string; analyse: AnalyseNiveau1 } | null = null;

  /** Joue la brique : Syno devine ; l'arbitre IA (niveau 2) n'est interrogé que si le joueur l'a demandé. */
  /** Ce que Syno sait déjà : le rang du nom et l'issue des noms précédents. */
  function contexteSyno(): Pick<DemandeSyno, "numero" | "precedents"> {
    return {
      numero: etat.nomIndex + 1,
      precedents: etat.noms.slice(0, etat.nomIndex).map((n, i) => ({ numero: i + 1, propositions: [...n.reponsesSyno], trouve: n.statut === "trouve" })),
    };
  }

  function jouer(brique: string, analyse: AnalyseNiveau1, avecIA: boolean): void {
    const nom = etat.noms[etat.nomIndex];
    const attendu = liste.noms[etat.nomIndex];
    enDecision = null;
    contestable = null;
    void avecSyno(async () => {
      const briques = [...nom.briques, brique];
      const { reponse, verdict } = await jouerCoup(
        { type: "nom", theme: liste.theme, ...contexteSyno(), briques, reponsesFausses: nom.reponsesSyno },
        avecIA ? { type: "nom", motADeviner: attendu.reponse, variantes: (attendu.variantes ?? []).filter((v) => !(attendu.surnoms ?? []).includes(v)), surnoms: attendu.surnoms, theme: liste.theme, briques } : undefined,
      );
      const etatAvant = etat;
      const index = etat.nomIndex;
      if (refuse(verdict)) {
        const signalementId = journaliserRefus(journal, verdict, { contenuId: liste.id, versionContenu: liste.version ?? "non-versionne", rangMot: attendu.rang, motADeviner: attendu.reponse, briques });
        onJournal();
        etat = refuserBriqueNom(etat, brique, verdict.explication);
        contestable = { etatAvant, brique, reponse, signalementId };
        message = `Arbitre IA : brique « ${brique} » refusée${verdict.regle ? ` (art. ${verdict.regle})` : ""}. ${verdict.explication} Le nom est perdu.`;
        return;
      }
      etat = jouerBriqueNom(etat, brique, reponse);
      const statut = etat.noms[index].statut;
      message =
        statut === "trouve" ? `Syno : « ${reponse} ». Trouvé !` :
        statut === "perdu" ? `Syno : « ${reponse} ». Nom non trouvé.` :
        peutCompleter(etat) ? `Syno : « ${reponse} ». Réponse incomplète : vous pouvez dire « Complétez ».` :
        `Syno : « ${reponse} ». Ce n'est pas ça : brique suivante.`;
      message += verdict === undefined ? noteNiveau1(analyse) : noteArbitre(verdict);
    });
  }

  /** Le joueur conteste le refus : la brique est rejouée comme valide, avec la réponse que Syno avait donnée. */
  function contester(): void {
    if (!contestable) return;
    const { etatAvant, brique, reponse, signalementId } = contestable;
    contestable = null;
    journal.examiner(signalementId, "rejete");
    onJournal();
    etat = jouerBriqueNom(etatAvant, brique, reponse);
    message = `Contestation acceptée. Syno : « ${reponse} ». ${etat.noms[etatAvant.nomIndex].statut === "trouve" ? "Trouvé !" : "Ce n'est pas ça."}`;
    dessiner();
  }

  function dessiner(): void {
    racine.replaceChildren(
      el("h2", {}, "Noms Propres", el("small", {}, ` Thème : ${liste.theme}. Vous êtes Dico, l'ordinateur est Syno`)),
      el(
        "div",
        { class: "mots" },
        ...etat.noms.map((n, i) => {
          const enCours = etat.phase === "noms" && i === etat.nomIndex;
          const classe = n.statut === "trouve" ? "ok" : n.statut === "a-jouer" ? (enCours ? "cur" : "") : "ko";
          return el("div", { class: `mot ${classe}` }, `Nom ${i + 1}`, el("small", {}, n.statut === "a-jouer" ? "" : `${LIBELLE[n.statut]} : ${liste.noms[i].reponse}`));
        }),
      ),
      message ? el("p", { class: "message", role: "status" }, message) : "",
      contestable ? boutonContester(contester) : "",
      etat.phase === "noms" ? zoneNom() : zoneFin(),
    );
    racine.querySelector<HTMLInputElement>("input")?.focus();
  }

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

  function zoneNom(): HTMLElement {
    const nom = etat.noms[etat.nomIndex];
    const attendu = liste.noms[etat.nomIndex];
    const completer = peutCompleter(etat);
    const briquesEpuisees = nom.briques.length >= BRIQUES_MAX_NOM_PROPRE;
    const historique = nom.briques.map((b, k) =>
      el("div", { class: "indice" }, el("span", {}, el("span", { class: "qui" }, `Brique ${k + 1} `), el("b", {}, b)), el("span", { class: "qui" }, `Syno : « ${nom.reponsesSyno[k]} » ✗`)),
    );
    const autresReponses = nom.reponsesSyno.slice(nom.briques.length).map((r) => el("p", { class: "qui" }, `Après « Complétez », Syno : « ${r} » ✗`));

    const champ = el("input", { type: "text", placeholder: "Votre brique (rébus et incitations permis)...", autocomplete: "off", "aria-label": "Votre brique", ...(enAttente || briquesEpuisees ? { disabled: true } : {}) });
    const formulaire = el(
      "form",
      {
        onsubmit: (e: Event) => {
          e.preventDefault();
          const brique = champ.value.trim();
          if (brique === "" || enAttente || briquesEpuisees) return;
          const avecIA = (e as SubmitEvent).submitter?.dataset.ia === "oui";
          const analyse = analyserNiveau1(
            brique,
            { reponse: attendu.reponse, variantes: [...(attendu.variantes ?? []), ...(attendu.partielles ?? [])], surnoms: attendu.surnoms, briquesConnues: attendu.briques.map((b) => b.texte) },
            { type: "nom", precedentes: nom.briques },
          );
          if (analyse.erreurs.length > 0) {
            etat = refuserBriqueNom(etat, brique, analyse.erreurs.join(" ; "));
            message = `Arbitre niveau 1 : brique « ${brique} » refusée : ${analyse.erreurs.join(" ; ")}. Le nom est perdu.`;
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
      el("button", { class: "btn", type: "submit", ...(enAttente || briquesEpuisees ? { disabled: true } : {}) }, enAttente ? "Syno réfléchit…" : "Envoyer"),
      el("button", { class: "btn sec petit", type: "submit", "data-ia": "oui", title: "Faire juger la brique par l'arbitre IA (appel payant)", ...(enAttente || briquesEpuisees ? { disabled: true } : {}) }, "Envoyer avec arbitrage IA"),
    );
    return el(
      "div",
      {},
      el("p", { class: "qui" }, `Nom n°${etat.nomIndex + 1} sur ${liste.noms.length} à faire deviner :`),
      el("div", { class: "secret" }, attendu.reponse),
      el("p", { class: "qui" }, `Brique ${Math.min(nom.briques.length + 1, BRIQUES_MAX_NOM_PROPRE)} sur ${BRIQUES_MAX_NOM_PROPRE} au maximum`),
      ...historique,
      ...autresReponses,
      enDecision
        ? panneauDoute(enDecision.brique, enDecision.analyse, {
            jouer: () => enDecision && jouer(enDecision.brique, enDecision.analyse, false),
            demanderIA: () => enDecision && jouer(enDecision.brique, enDecision.analyse, true),
            changer: () => { enDecision = null; dessiner(); },
          })
        : formulaire,
      el(
        "div",
        { class: "actions" },
        completer
          ? el(
              "button",
              {
                class: "btn sec petit",
                type: "button",
                onclick: () =>
                  void avecSyno(async () => {
                    const reponse = await demanderSyno({ type: "nom", theme: liste.theme, ...contexteSyno(), briques: nom.briques, reponsesFausses: nom.reponsesSyno, completer: true });
                    const index = etat.nomIndex;
                    etat = completerNom(etat, reponse);
                    message = etat.noms[index].statut === "trouve" ? `Syno : « ${reponse} ». Trouvé !` : `Syno : « ${reponse} ». Toujours pas.`;
                  }),
              },
              "Complétez",
            )
          : "",
        briquesEpuisees && completer
          ? el("button", { class: "btn sec petit", type: "button", onclick: () => { etat = abandonnerNom(etat); message = "Nom abandonné."; dessiner(); } }, "Abandonner ce nom")
          : "",
      ),
    );
  }

  function zoneFin(): HTMLElement {
    return el(
      "div",
      {},
      el("p", {}, `Noms trouvés par Syno : ${scoreNomsDico(etat)} / ${liste.noms.length}`),
      formulaireEvaluation({
        evaluations,
        base: { type: "noms", contenuId: liste.id, versionContenu: liste.version ?? "non-versionne", difficulteAnnoncee: liste.difficulte, role: "dico" },
        pistes: [],
      }),
      el("button", { class: "btn", type: "button", onclick: () => onTerminee(scoreNomsDico(etat), etat) }, "Continuer"),
    );
  }

  dessiner();
}
