import type { Journal } from "../arbitre/journal";
import { MOTIFS, type Signalement, type StatutSignalement } from "../arbitre/types";
import { el } from "./dom";

const LIBELLE_STATUT: Record<StatutSignalement, string> = {
  "a-examiner": "À examiner",
  confirme: "Confirmé",
  rejete: "Rejeté",
};

export function telecharger(nom: string, contenu: string): void {
  const lien = el("a", { href: URL.createObjectURL(new Blob([contenu], { type: "application/json" })), download: nom });
  document.body.append(lien);
  lien.click();
  lien.remove();
  setTimeout(() => URL.revokeObjectURL(lien.href), 1000);
}

/** Affiche le journal de l'arbitre : examen des signalements, export et import JSON. */
export function montrerJournal(racine: HTMLElement, journal: Journal, onChange: () => void): void {
  let filtre: StatutSignalement | "tous" = "tous";
  let message = "";

  function dessiner(): void {
    const tous = journal.lister();
    const affiches = tous.filter((s) => filtre === "tous" || s.statut === filtre);

    const filtreSelect = el(
      "select",
      {
        "aria-label": "Filtrer par statut",
        onchange: (e: Event) => {
          filtre = (e.target as HTMLSelectElement).value as typeof filtre;
          dessiner();
        },
      },
      el("option", { value: "tous" }, `Tous (${tous.length})`),
      ...(Object.keys(LIBELLE_STATUT) as StatutSignalement[]).map((st) => {
        const option = el("option", { value: st }, `${LIBELLE_STATUT[st]} (${tous.filter((s) => s.statut === st).length})`);
        if (st === filtre) option.setAttribute("selected", "");
        return option;
      }),
    );

    const champFichier = el("input", {
      type: "file",
      accept: "application/json,.json",
      class: "cache",
      onchange: async (e: Event) => {
        const fichier = (e.target as HTMLInputElement).files?.[0];
        if (!fichier) return;
        try {
          const ajoutes = journal.importer(await fichier.text());
          message = `${ajoutes} signalement(s) importé(s).`;
        } catch (erreur) {
          message = `Import impossible : ${erreur instanceof Error ? erreur.message : "fichier invalide"}`;
        }
        onChange();
        dessiner();
      },
    });

    racine.replaceChildren(
      el("h2", {}, "Journal de l'arbitre", el("small", {}, " Signalements, base de l'apprentissage supervisé")),
      journal.stockageIndisponible
        ? el("p", { class: "message" }, "Le stockage du navigateur est indisponible : exportez le journal avant de quitter la page.")
        : "",
      el(
        "div",
        { class: "actions" },
        filtreSelect,
        el("button", { class: "btn sec petit", type: "button", onclick: () => telecharger(`signalements-${new Date().toISOString().slice(0, 10)}.json`, journal.exporter()) }, "Exporter (JSON)"),
        el("button", { class: "btn sec petit", type: "button", onclick: () => champFichier.click() }, "Importer (JSON)"),
        el(
          "button",
          {
            class: "btn sec petit",
            type: "button",
            onclick: () => {
              if (confirm("Supprimer tous les signalements de ce navigateur ?\nExportez-les d'abord si besoin.")) {
                journal.supprimerTout();
                message = "Journal vidé.";
                onChange();
                dessiner();
              }
            },
          },
          "Tout effacer",
        ),
        champFichier,
      ),
      message && el("p", { class: "message", role: "status" }, message),
      affiches.length === 0
        ? el("p", { class: "qui" }, "Aucun signalement.")
        : el(
            "div",
            { class: "defilement" },
            el(
              "table",
              {},
              el("thead", {}, el("tr", {}, ...["Date", "Contenu", "Enchaînement", "Avis", "Règle non respectée", "Statut", ""].map((t) => el("th", {}, t)))),
              el("tbody", {}, ...affiches.map(ligne)),
            ),
          ),
    );
  }

  function ligne(s: Signalement): HTMLElement {
    const motif = MOTIFS.find((m) => m.id === s.motif);
    // La brique où l'enchaînement devient invalide est entre crochets (avis « invalide »).
    const chaine = `${s.briques.map((b, i) => (s.avis === "invalide" && i + 1 === s.briqueSignalee ? `[${b}]` : b)).join(" + ")} → ${s.motADeviner}`;
    const moment = s.moment === "apres-coup" ? "après coup" : s.moment === "arbitrage" ? "arbitre IA, mode Dico" : "en jeu";
    const actions =
      s.statut === "a-examiner"
        ? el(
            "span",
            { class: "actions" },
            el("button", { class: "btn sec petit", type: "button", onclick: () => decider(s.id, "confirme") }, "Confirmer"),
            el("button", { class: "btn sec petit", type: "button", onclick: () => decider(s.id, "rejete") }, "Rejeter"),
          )
        : el("span", { class: "qui" }, s.decision ? `Jugée ${s.decision}` : "");
    return el(
      "tr",
      {},
      el("td", {}, s.horodatage.slice(0, 16).replace("T", " ")),
      el("td", {}, `${s.contenuId}, n°${s.rangMot} (${moment})`),
      el("td", { class: "enchainement" }, chaine),
      el("td", {}, s.avis),
      el("td", {}, [motif?.libelle ?? "", s.regle && `art. ${s.regle}`, s.commentaire && `« ${s.commentaire} »`].filter(Boolean).join(" ")),
      el("td", {}, LIBELLE_STATUT[s.statut]),
      el("td", {}, actions),
    );
  }

  function decider(id: string, statut: Exclude<StatutSignalement, "a-examiner">): void {
    journal.examiner(id, statut);
    message = "";
    onChange();
    dessiner();
  }

  dessiner();
}
