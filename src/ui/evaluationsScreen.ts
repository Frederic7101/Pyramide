import type { Evaluations } from "../arbitre/evaluations";
import { pistesFaibles, synthetiserContenus } from "../arbitre/syntheseEvaluations";
import { el } from "./dom";
import { telecharger } from "./journalScreen";

const NIVEAU: Record<string, string> = { facile: "facile", moyen: "moyen", difficile: "difficile" };

/** Onglet « Évaluations » : synthèse par contenu (note, niveau ressenti), pistes mal notées, export et import. */
export function montrerEvaluations(racine: HTMLElement, evaluations: Evaluations): void {
  let message = "";

  function dessiner(): void {
    const toutes = evaluations.lister();
    const syntheses = synthetiserContenus(toutes).sort((a, b) => Number(b.reclasser) - Number(a.reclasser) || a.noteMoyenne - b.noteMoyenne);
    const faibles = pistesFaibles(toutes);
    const champFichier = el("input", {
      type: "file",
      accept: "application/json,.json",
      class: "cache",
      onchange: async (e: Event) => {
        const fichier = (e.target as HTMLInputElement).files?.[0];
        if (!fichier) return;
        try {
          message = `${evaluations.importer(await fichier.text())} évaluation(s) importée(s).`;
        } catch (erreur) {
          message = `Import impossible : ${erreur instanceof Error ? erreur.message : "fichier invalide"}`;
        }
        dessiner();
      },
    });

    racine.replaceChildren(
      el("h2", {}, "Évaluations", el("small", {}, ` ${toutes.length} évaluation(s) : notes, niveau ressenti et pistes à améliorer`)),
      el(
        "div",
        { class: "actions" },
        el("button", { class: "btn sec petit", type: "button", onclick: () => telecharger(`evaluations-${new Date().toISOString().slice(0, 10)}.json`, evaluations.exporter()) }, "Exporter (JSON)"),
        el("button", { class: "btn sec petit", type: "button", onclick: () => champFichier.click() }, "Importer (JSON)"),
        el(
          "button",
          {
            class: "btn sec petit",
            type: "button",
            onclick: () => {
              if (confirm("Supprimer toutes les évaluations de ce navigateur ?\nExportez-les d'abord si besoin.")) {
                evaluations.supprimerTout();
                message = "Évaluations effacées.";
                dessiner();
              }
            },
          },
          "Tout effacer",
        ),
        champFichier,
      ),
      message ? el("p", { class: "message", role: "status" }, message) : "",
      el("p", { class: "qui" }, "Pour améliorer le contenu, exportez ce fichier et transmettez-le : il alimente le rapport « npm run evaluations »."),
      syntheses.length === 0
        ? el("p", { class: "qui" }, "Aucune évaluation pour l'instant : elles se saisissent en fin d'énigme ou de liste.")
        : el(
            "div",
            { class: "defilement" },
            el(
              "table",
              {},
              el("thead", {}, el("tr", {}, ...["Contenu", "Évaluations", "Note moyenne", "Niveau annoncé", "Niveau ressenti", "Suggestion", "Commentaires"].map((t) => el("th", {}, t)))),
              el(
                "tbody",
                {},
                ...syntheses.map((s) =>
                  el(
                    "tr",
                    {},
                    el("td", {}, s.contenuId),
                    el("td", {}, String(s.nombre)),
                    el("td", {}, `${s.noteMoyenne} / 5`),
                    el("td", {}, NIVEAU[s.difficulteAnnoncee]),
                    el("td", {}, `facile ${s.ressenti.facile}, moyen ${s.ressenti.moyen}, difficile ${s.ressenti.difficile}`),
                    el("td", {}, s.reclasser ? el("b", {}, `passer en ${NIVEAU[s.niveauSuggere]}`) : "garder"),
                    el("td", {}, s.commentaires.join(" · ")),
                  ),
                ),
              ),
            ),
          ),
      faibles.length === 0
        ? ""
        : el(
            "div",
            {},
            el("h3", {}, "Pistes mal notées (2 / 5 ou moins)"),
            ...faibles.map((p) =>
              el(
                "div",
                { class: "indice revue" },
                el("span", { class: "enchainement" }, `${p.briques.join(" + ")} → ${p.motADeviner}`),
                el("span", { class: "qui" }, `${p.contenuId}, mot n°${p.rangMot} : ${p.noteMoyenne} / 5${p.commentaires.length ? ` — ${p.commentaires.join(" · ")}` : ""}`),
              ),
            ),
          ),
    );
  }

  dessiner();
}
