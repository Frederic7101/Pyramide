import type { Journal } from "../arbitre/journal";
import {
  briqueCouranteNom,
  creerNoms,
  enAttenteCompletion,
  numeroBriqueNom,
  passerNom,
  repondreNom,
  scoreNoms,
  signalerNom,
  type EtatNoms,
} from "../engine/nomsPropres";
import type { ListeNomsPropres } from "../engine/types";
import { boutonsArbitre, type ContexteMot } from "./boutonsArbitre";
import { el } from "./dom";
import { formulaireEvaluation } from "./evaluationForm";
import { evaluations } from "./magasins";
import { briquesMontrees, revueEnchainements } from "./revueEnchainements";

const LIBELLE_RESULTAT = { "a-jouer": "non joué", trouve: "trouvé", perdu: "non trouvé", annule: "annulé" } as const;

/**
 * Écran des Noms Propres (sans enchères) en mode Syno : l'ordinateur donne les briques, le joueur répond.
 * `onTerminee` est appelé avec l'état final quand la liste est terminée.
 */
export function montrerNomsPropres(
  racine: HTMLElement,
  liste: ListeNomsPropres,
  journal: Journal,
  onTerminee: (etat: EtatNoms) => void,
  onSignalement: () => void = () => {},
): void {
  let etat = creerNoms(liste);
  let message = "";

  function dessiner(): void {
    racine.replaceChildren(
      el("h2", {}, "Noms Propres", el("small", {}, ` Thème : ${liste.theme}. Vous êtes Syno, l'ordinateur est Dico`)),
      barreNoms(),
      etat.phase === "noms" ? zoneNom() : zoneFin(),
    );
    racine.querySelector<HTMLInputElement>("input[type=text]")?.focus();
  }

  function barreNoms(): HTMLElement {
    const chips = etat.resultats.map((r, i) => {
      const enCours = etat.phase === "noms" && i === etat.nomIndex;
      const classe = r.statut === "trouve" ? "ok" : r.statut === "perdu" ? "ko" : r.statut === "annule" ? "annule" : enCours ? "cur" : "";
      const detail =
        r.statut === "trouve" ? `trouvé : ${liste.noms[i].reponse}` :
        r.statut === "perdu" ? "non trouvé" :
        r.statut === "annule" ? "annulé" :
        `${liste.noms[i].briques.length} brique(s) max`;
      return el("div", { class: `mot ${classe}` }, `Nom ${i + 1}`, el("small", {}, detail));
    });
    return el("div", { class: "mots" }, ...chips);
  }

  function zoneNom(): HTMLElement {
    const nom = liste.noms[etat.nomIndex];
    const resultat = etat.resultats[etat.nomIndex];
    const attente = enAttenteCompletion(etat);
    const brique = briqueCouranteNom(etat);
    const numero = numeroBriqueNom(etat);

    const historique = resultat.reponses.slice(0, attente ? numero - 1 : undefined).map((rep, k) =>
      el("div", { class: "indice" }, el("span", {}, el("span", { class: "qui" }, `Brique ${k + 1} `), el("b", {}, nom.briques[k].texte)), el("span", { class: "qui" }, `Votre réponse : ${rep.trim() || "(passé)"} ✗`)),
    );
    // Brique à laquelle Syno vient de répondre de façon incomplète : Dico a dit « Complétez ».
    const briqueAvecInvitation = attente
      ? el("div", { class: "indice" }, el("span", {}, el("span", { class: "qui" }, `Brique ${numero} `), el("b", {}, nom.briques[numero - 1].texte)), el("span", { class: "qui" }, `Votre réponse : ${resultat.reponses[numero - 1]}`))
      : null;

    const champ = el("input", { type: "text", placeholder: attente ? "Complétez votre réponse..." : "Votre réponse (une seule par brique)...", autocomplete: "off", "aria-label": "Votre réponse" });
    const formulaire = el(
      "form",
      {
        onsubmit: (e: Event) => {
          e.preventDefault();
          if (champ.value.trim() === "") {
            // Une validation à vide (Entrée par mégarde) ne consomme pas de brique.
            champ.focus();
            return;
          }
          const indexAvant = etat.nomIndex;
          const reponse = champ.value.trim();
          etat = repondreNom(etat, reponse);
          const apres = etat.resultats[indexAvant];
          message =
            apres.statut === "trouve" ? "Nom trouvé ! Nom suivant." :
            apres.statut === "perdu" ? `« ${reponse} » : non. Nom non trouvé, nom suivant.` :
            apres.attenteCompletion ? "" :
            `« ${reponse} » : non. Brique suivante.`;
          dessiner();
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
            const indexAvant = etat.nomIndex;
            etat = passerNom(etat);
            const apres = etat.resultats[indexAvant];
            message = apres.statut === "perdu" ? "Vous passez. Nom non trouvé, nom suivant." : apres.attenteCompletion ? "" : "Vous passez. Brique suivante.";
            dessiner();
          },
        },
        "Je passe",
      ),
    );

    const affichee = brique ?? nom.briques[numero - 1].texte;

    return el(
      "div",
      {},
      message && el("p", { class: "message", role: "status" }, message),
      el("p", { class: "qui" }, `Nom n°${etat.nomIndex + 1} sur ${liste.noms.length}, brique ${numero} sur ${nom.briques.length} au maximum`),
      ...historique,
      briqueAvecInvitation,
      attente
        ? el("div", { class: "indice courante" }, el("b", {}, "Dico : « Complétez »"))
        : el("div", { class: "indice courante" }, el("span", {}, el("span", { class: "qui" }, `Brique ${numero} `), el("b", {}, affichee))),
      formulaire,
      boutonsArbitre({
        journal,
        contexte: contexteMot(etat.nomIndex, numero),
        moment: "en-jeu",
        onSignalee: () => {
          onSignalement();
          etat = signalerNom(etat);
          message = "Enchaînement signalé à l'arbitre : nom annulé sans pénalité.";
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

  /** Nom `index` et les `nbBriques` premières briques montrées au joueur. */
  function contexteMot(index: number, nbBriques: number): ContexteMot {
    const nom = liste.noms[index];
    return {
      contenuId: liste.id,
      versionContenu: liste.version ?? "non-versionne",
      rangMot: nom.rang,
      motADeviner: nom.reponse,
      briques: nom.briques.slice(0, nbBriques).map((b) => b.texte),
    };
  }

  function zoneFin(): HTMLElement {
    const ligne = (i: number) => {
      const r = etat.resultats[i];
      // Une fois la liste terminée, chaque nom est révélé, en couleur selon le résultat.
      return el(
        "tr",
        {},
        el("td", {}, `Nom ${i + 1}`),
        el("td", {}, el("span", { class: `mot-revele ${r.statut}` }, liste.noms[i].reponse), ` (${LIBELLE_RESULTAT[r.statut]})`),
        el("td", {}, r.statut === "trouve" ? "1" : "0"),
      );
    };
    return el(
      "div",
      {},
      el("table", {}, ...liste.noms.map((_, i) => ligne(i)), el("tr", {}, el("th", {}, "Total"), el("th", {}, ""), el("th", {}, String(scoreNoms(etat))))),
      revueEnchainements(
        etat.resultats.map((r, i) => ({
          contexte: contexteMot(i, Math.min(briquesMontrees(r.statut, r.reponses.length), liste.noms[i].briques.length)),
          resultat: LIBELLE_RESULTAT[r.statut],
        })),
        journal,
        onSignalement,
      ),
      formulaireEvaluation({
        evaluations,
        base: { type: "noms", contenuId: liste.id, versionContenu: liste.version ?? "non-versionne", difficulteAnnoncee: liste.difficulte, role: "syno" },
        pistes: etat.resultats
          .map((r, i) => contexteMot(i, Math.min(briquesMontrees(r.statut, r.reponses.length), liste.noms[i].briques.length)))
          .filter((c) => c.briques.length > 0),
      }),
      el("button", { class: "btn", type: "button", onclick: () => onTerminee(etat) }, "Continuer"),
    );
  }

  dessiner();
}
