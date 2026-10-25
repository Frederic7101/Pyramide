import {
  abandonnerSolution,
  briqueCourante,
  creerEnigme,
  numeroBriqueCourante,
  passer,
  proposerSolution,
  repondre,
  scoreEnigme,
  segmentsTexte,
  signaler,
  briquesMisees,
  soldeBriques,
  texteEnigme,
  type EtatEnigme,
} from "../engine/enigme";
import { BRIQUES_PAR_ENIGME, type Enigme } from "../engine/types";
import type { Journal } from "../arbitre/journal";
import { boutonsArbitre, type ContexteMot } from "./boutonsArbitre";
import { el } from "./dom";
import { formulaireEvaluation } from "./evaluationForm";
import { evaluations } from "./magasins";
import { briquesMontrees, revueEnchainements } from "./revueEnchainements";
import { verifierPuisEnvoyer } from "./verificationReponse";

const LIBELLE_RESULTAT = { "a-jouer": "non joué", trouve: "trouvé", perdu: "non trouvé", annule: "annulé" } as const;

/**
 * Écran d'une énigme en mode Syno : l'ordinateur donne les briques, le joueur répond.
 * `onTerminee` est appelé avec l'état final quand l'énigme est terminée.
 */
export function montrerEnigme(
  racine: HTMLElement,
  enigme: Enigme,
  journal: Journal,
  onTerminee: (etat: EtatEnigme) => void,
  onSignalement: () => void = () => {},
): void {
  let etat = creerEnigme(enigme);
  let message = "";

  function dessiner(): void {
    racine.replaceChildren(
      el("h2", {}, enigme.titre, el("small", {}, " Vous êtes Syno, l'ordinateur est Dico")),
      barreMots(),
      barreBriques(),
      etat.phase === "mots" ? zoneMot() : etat.phase === "solution" ? zoneSolution() : zoneFin(),
    );
    const champ = racine.querySelector<HTMLInputElement>("input[type=text]");
    champ?.focus();
  }

  function barreMots(): HTMLElement {
    const chips = etat.resultats.map((r, i) => {
      const enCours = etat.phase === "mots" && i === etat.motIndex;
      const classe = r.statut === "trouve" ? "ok" : r.statut === "perdu" ? "ko" : r.statut === "annule" ? "annule" : enCours ? "cur" : "";
      const detail =
        r.statut === "trouve" ? `trouvé : ${enigme.mots[i].reponse}` :
        r.statut === "perdu" ? (etat.phase === "terminee" ? `non trouvé : ${enigme.mots[i].reponse}` : "non trouvé") :
        r.statut === "annule" ? (etat.phase === "terminee" ? `annulé : ${enigme.mots[i].reponse}` : "annulé") :
        enCours ? `mise : ${enigme.mots[i].mise}` : `mise : ${enigme.mots[i].mise}`;
      return el("div", { class: `mot ${classe}` }, `Mot ${i + 1}`, el("small", {}, detail));
    });
    return el("div", { class: "mots" }, ...chips);
  }

  function barreBriques(): HTMLElement {
    const solde = soldeBriques(etat);
    const utilisees = BRIQUES_PAR_ENIGME - solde;
    const cases: HTMLElement[] = [];
    for (let i = 0; i < BRIQUES_PAR_ENIGME; i++) cases.push(el("i", { class: i < utilisees ? "brique usee" : "brique" }));
    const bonus = Math.max(0, BRIQUES_PAR_ENIGME - briquesMisees(enigme));
    return el(
      "div",
      {},
      el("p", {}, "Briques utilisées : ", el("b", {}, `${utilisees} / ${BRIQUES_PAR_ENIGME}`), el("span", { class: "qui" }, ` · Dico en a misé ${briquesMisees(enigme)} : bonus de ${bonus} point(s) si vous trouvez les 5 mots`)),
      el("div", { class: "briques" }, ...cases),
    );
  }

  function zoneMot(): HTMLElement {
    const mot = enigme.mots[etat.motIndex];
    const resultat = etat.resultats[etat.motIndex];
    const historique = resultat.reponses.map((rep, k) =>
      el("div", { class: "indice" }, el("span", {}, el("span", { class: "qui" }, `Brique ${k + 1} `), el("b", {}, mot.briques[k].texte)), el("span", { class: "qui" }, `Votre réponse : ${rep.trim() || "(passé)"} ✗`)),
    );
    const brique = briqueCourante(etat) ?? "";

    const champ = el("input", { type: "text", placeholder: "Votre réponse (une seule par brique)...", autocomplete: "off", "aria-label": "Votre réponse" });
    const avertissement = el("div", {});
    const formulaire = el(
      "form",
      {
        onsubmit: (e: Event) => {
          e.preventDefault();
          verifierPuisEnvoyer(champ, avertissement, (reponse) => {
            const indexAvant = etat.motIndex;
            etat = repondre(etat, reponse);
            const apres = etat.resultats[indexAvant].statut;
            message =
              apres === "trouve" ? "Mot trouvé ! Mot suivant." :
              apres === "perdu" ? `« ${reponse} » : non. Mot non trouvé, mot suivant.` :
              `« ${reponse} » : non. Brique suivante.`;
            dessiner();
          });
        },
      },
      champ,
      el("button", { class: "btn", type: "submit" }, "Valider"),
      el(
        "button",
        {
          class: "btn sec",
          type: "button",
          title: "Aucune idée : la brique est consommée et la suivante est donnée",
          onclick: () => {
            const indexAvant = etat.motIndex;
            etat = passer(etat);
            message = etat.resultats[indexAvant].statut === "perdu" ? "Vous passez. Mot non trouvé, mot suivant." : "Vous passez. Brique suivante.";
            dessiner();
          },
        },
        "Je passe",
      ),
    );

    return el(
      "div",
      {},
      message && el("p", { class: "message", role: "status" }, message),
      el("p", { class: "qui" }, `Mot n°${etat.motIndex + 1} sur 5, brique ${numeroBriqueCourante(etat)} sur ${mot.mise} misées`),
      ...historique,
      el("div", { class: "indice courante" }, el("span", {}, el("span", { class: "qui" }, `Brique ${numeroBriqueCourante(etat)} `), el("b", {}, brique))),
      formulaire,
      avertissement,
      boutonsArbitre({
        journal,
        contexte: contexteMot(etat.motIndex, numeroBriqueCourante(etat)),
        moment: "en-jeu",
        onSignalee: () => {
          onSignalement();
          etat = signaler(etat);
          message = "Enchaînement signalé à l'arbitre : mot annulé sans pénalité.";
          dessiner();
        },
        onValide: () => {
          onSignalement();
          message = "Merci : enchaînement noté valide.";
          dessiner();
        },
      }),
    );
  }

  /** Mot `index` et les `nbBriques` premières briques montrées au joueur. */
  function contexteMot(index: number, nbBriques: number): ContexteMot {
    const mot = enigme.mots[index];
    return {
      contenuId: enigme.id,
      versionContenu: enigme.version ?? "non-versionne",
      rangMot: mot.rang,
      motADeviner: mot.reponse,
      briques: mot.briques.slice(0, nbBriques).map((b) => b.texte),
    };
  }

  function zoneSolution(): HTMLElement {
    const champ = el("input", { type: "text", placeholder: "Votre solution...", autocomplete: "off", "aria-label": "Votre solution" });
    const avertissement = el("div", {});
    return el(
      "div",
      {},
      message && el("p", { class: "message", role: "status" }, message),
      el("p", {}, "Les mots trouvés sont replacés dans le texte :"),
      el("div", { class: "texte" }, texteEnigme(etat)),
      el(
        "form",
        {
          onsubmit: (e: Event) => {
            e.preventDefault();
            verifierPuisEnvoyer(champ, avertissement, (solution) => {
              etat = proposerSolution(etat, solution);
              message = etat.solutionTrouvee ? "Solution trouvée !" : "Ce n'est pas la solution, essayez encore.";
              dessiner();
            });
          },
        },
        champ,
        el("button", { class: "btn", type: "submit" }, "Valider"),
      ),
      avertissement,
      el(
        "button",
        {
          class: "btn sec petit",
          type: "button",
          onclick: () => {
            etat = abandonnerSolution(etat);
            message = "";
            dessiner();
          },
        },
        "Abandonner la solution",
      ),
    );
  }

  function zoneFin(): HTMLElement {
    const s = scoreEnigme(etat);
    const ligne = (nom: string, valeur: number) => el("tr", {}, el("td", {}, nom), el("td", {}, String(valeur)));
    return el(
      "div",
      {},
      message && el("p", { class: "message", role: "status" }, message),
      el(
        "div",
        { class: "texte" },
        ...segmentsTexte(etat).map((s) => ("statut" in s ? el("span", { class: `mot-revele ${s.statut}`, title: LIBELLE_RESULTAT[s.statut] }, s.texte) : s.texte)),
      ),
      el("p", { class: "legende" }, el("span", { class: "mot-revele trouve" }, "trouvé"), " ", el("span", { class: "mot-revele perdu" }, "non trouvé"), " ", el("span", { class: "mot-revele annule" }, "annulé")),
      el("p", {}, el("b", {}, "Solution : "), enigme.solution, etat.solutionTrouvee ? " (trouvée)" : " (non trouvée)"),
      el("table", {}, ligne("Mots trouvés", s.mots), ligne("Bonus (13 − briques pariées)", s.bonus), ligne("Solution", s.solution), el("tr", {}, el("th", {}, "Total"), el("th", {}, String(s.total)))),
      revueEnchainements(
        etat.resultats.map((r, i) => ({
          contexte: contexteMot(i, briquesMontrees(r.statut, r.reponses.length)),
          resultat: LIBELLE_RESULTAT[r.statut],
        })),
        journal,
        onSignalement,
      ),
      formulaireEvaluation({
        evaluations,
        base: { type: "enigme", contenuId: enigme.id, versionContenu: enigme.version ?? "non-versionne", difficulteAnnoncee: enigme.difficulte, role: "syno" },
        pistes: etat.resultats.map((r, i) => contexteMot(i, briquesMontrees(r.statut, r.reponses.length))).filter((c) => c.briques.length > 0),
      }),
      el("button", { class: "btn", type: "button", onclick: () => onTerminee(etat) }, "Continuer"),
    );
  }

  dessiner();
}
