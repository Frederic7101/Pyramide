import { bilanParties, comparerEnigme, comparerModeles, comparerNoms, type Comparaison } from "../historique/comparaison";
import { roleDe, type Partie, type Parties, type Role } from "../historique/parties";
import type { ReferenceSyno } from "../historique/reference";
import { REFERENCES_MODELES } from "../content/referenceModeles";
import type { EnigmeJouee, ListeJouee } from "../historique/parties";
import { el } from "./dom";
import { telecharger } from "./journalScreen";

const brique = (n: number | null) => (n === null ? "non trouvé" : `brique ${n}`);

/** En Syno, le joueur devine les pistes de l'ordinateur ; en Dico, ses pistes sont devinées par Syno ordinateur. */
const LIBELLES: Record<Role, { joueur: string; ordinateur: string; mieux: string; moins: string }> = {
  syno: { joueur: "Vous (Syno)", ordinateur: "Syno ordinateur", mieux: "Vous battez Syno ordinateur", moins: "Syno ordinateur fait" },
  dico: { joueur: "Vos pistes (Dico)", ordinateur: "Pistes de l'ordinateur", mieux: "Vos pistes battent celles de l'ordinateur", moins: "Les pistes de l'ordinateur font" },
};

/** Phrase de synthèse : score du joueur face au score idéal obtenu par l'ordinateur. */
export function phraseComparaison(c: Comparaison, role: Role = "syno"): string {
  if (c.ordinateur === null) return c.perimee ? "Référence de l'ordinateur périmée (contenu modifié depuis le test)." : "Pas encore de référence de l'ordinateur pour ce contenu.";
  const l = LIBELLES[role];
  const ecart = c.joueur - c.ordinateur;
  return ecart > 0 ? `${l.mieux} de ${ecart} point(s).` : ecart === 0 ? "Égalité avec l'ordinateur." : `${l.moins} ${-ecart} point(s) de plus.`;
}

export interface DetailJoueur {
  role: Role;
  /** Réponses de Syno pour chaque mot ou nom (le joueur en Syno, l'ordinateur en Dico). */
  reponses: string[][];
  /** En Dico : briques données par le joueur pour chaque mot ou nom. */
  briques?: string[][];
}

/** Tableau mot par mot : où chaque mot ou nom a été trouvé, par le joueur et par l'ordinateur. */
export function tableauComparaison(titre: string, c: Comparaison, joueur: DetailJoueur): HTMLElement {
  const l = LIBELLES[joueur.role];
  const cellule = (i: number) =>
    joueur.role === "dico" ? `${(joueur.briques?.[i] ?? []).join(" + ")} → ${joueur.reponses[i]?.join(", ") ?? ""}` : joueur.reponses[i]?.join(", ") ?? "";
  return el(
    "div",
    { class: "defilement" },
    el(
      "table",
      {},
      el("tr", {}, el("th", {}, titre), el("th", {}, l.joueur), el("th", {}, l.ordinateur)),
      ...c.detail.map((d, i) =>
        el(
          "tr",
          {},
          el("td", {}, d.reponse),
          el("td", { class: d.joueur === null ? "ko" : "" }, brique(d.joueur), el("small", { class: "qui" }, ` ${cellule(i)}`)),
          el("td", { class: d.ordinateur === null ? "ko" : "" }, c.ordinateur === null ? "—" : brique(d.ordinateur), el("small", { class: "qui" }, c.ordinateur === null ? "" : ` ${d.reponsesOrdinateur.join(", ")}`)),
        ),
      ),
      el("tr", {}, el("th", {}, `Score (maximum ${c.maximum})`), el("th", {}, String(c.joueur)), el("th", {}, c.ordinateur === null ? "—" : String(c.ordinateur))),
    ),
    el("p", { class: "qui" }, phraseComparaison(c, joueur.role)),
  );
}

/** Tableau des scores : le joueur face à Haiku, Sonnet et Opus jouant Syno à l'aveugle sur les mêmes contenus. */
export function tableauModeles(enigme: EnigmeJouee, noms: ListeJouee | null): HTMLElement {
  const lignes = comparerModeles(enigme, noms, REFERENCES_MODELES);
  const val = (n: number | null) => (n === null ? "—" : String(n));
  const meilleur = Math.max(...lignes.map((l) => l.total ?? -1));
  return el(
    "div",
    { class: "defilement" },
    el(
      "table",
      {},
      el("tr", {}, el("th", {}, ""), el("th", {}, "Énigme"), el("th", {}, "Noms propres"), el("th", {}, "Total")),
      ...lignes.map((l) =>
        el("tr", { class: l.nom === "Vous" ? "moi" : "" }, el("td", {}, l.nom), el("td", {}, val(l.enigme)), el("td", {}, val(l.noms)), el("td", { class: l.total === meilleur && l.total !== null ? "ok" : "" }, val(l.total))),
      ),
    ),
    el("p", { class: "qui" }, "Les modèles jouent Syno à l'aveugle sur les pistes de l'ordinateur. « — » : modèle pas encore testé sur ce contenu, ou contenu modifié depuis."),
  );
}

function detailPartie(p: Partie, references: Record<string, ReferenceSyno>): HTMLElement {
  const role = roleDe(p);
  const ce = comparerEnigme(p.enigme, references);
  const cn = p.noms ? comparerNoms(p.noms, references) : null;
  const total = ce.joueur + (cn?.joueur ?? 0);
  const totalOrdinateur = ce.ordinateur !== null && cn?.ordinateur != null ? ce.ordinateur + cn.ordinateur : null;
  const date = new Date(p.horodatage).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" });
  const qui = role === "dico" ? "Syno ordinateur" : "vous";
  return el(
    "details",
    { class: "revue" },
    el("summary", {}, `${date} · ${role === "dico" ? "Dico" : "Syno"} · ${p.niveau} · « ${p.enigme.titre} »${p.noms ? ` + ${p.noms.theme}` : " (liste non terminée)"} · ${total} pt(s)${totalOrdinateur === null ? "" : ` contre ${totalOrdinateur} pour l'ordinateur`}`),
    el("p", {}, `Énigme : ${p.enigme.score.mots} mot(s) + bonus ${p.enigme.score.bonus} + solution ${p.enigme.score.solution}. Solution « ${p.enigme.solution} » : ${p.enigme.solutionTrouvee ? "trouvée" : "non trouvée"}${p.enigme.essaisSolution.length > 0 ? ` (propositions de ${qui} : ${p.enigme.essaisSolution.join(", ")})` : ""}.`),
    tableauModeles(p.enigme, p.noms ?? null),
    tableauComparaison("Mot", ce, { role, reponses: p.enigme.mots.map((m) => m.reponses), briques: p.enigme.mots.map((m) => m.briquesJoueur ?? []) }),
    p.noms && cn ? tableauComparaison("Nom propre", cn, { role, reponses: p.noms.noms.map((n) => n.reponses), briques: p.noms.noms.map((n) => n.briquesJoueur ?? []) }) : "",
  );
}

function phraseBilan(role: Role, parties: readonly Partie[], references: Record<string, ReferenceSyno>): HTMLElement {
  const b = bilanParties(parties, references);
  const nom = role === "dico" ? "En Dico" : "En Syno";
  if (b.parties === 0) return el("p", { class: "qui" }, `${nom} : aucune partie terminée.`);
  if (b.comparees === 0) return el("p", { class: "qui" }, `${nom} : ${b.parties} partie(s), sans référence de l'ordinateur à jour pour les comparer.`);
  return el(
    "p",
    {},
    `${nom} : sur ${b.comparees} partie(s) comparable(s), ${b.moyenneJoueur!.toFixed(1)} point(s) en moyenne pour vous, ${b.moyenneOrdinateur!.toFixed(1)} pour l'ordinateur (score idéal de ses pistes devinées par son Syno). Vous faites au moins aussi bien dans ${b.egaleOuMieux} partie(s).`,
  );
}

/** Onglet « Historique » : parties jouées en Syno et en Dico, comparées au score idéal obtenu par l'ordinateur. */
export function montrerHistorique(racine: HTMLElement, parties: Parties, references: Record<string, ReferenceSyno>): void {
  let message = "";

  function dessiner(): void {
    const toutes = parties.lister();
    racine.replaceChildren(
      el("h2", {}, "Historique", el("small", {}, ` ${toutes.length} partie(s) jouée(s)`)),
      el(
        "div",
        { class: "actions" },
        el("button", { class: "btn sec petit", type: "button", onclick: () => telecharger(`parties-${new Date().toISOString().slice(0, 10)}.json`, parties.exporter()) }, "Exporter (JSON)"),
        el(
          "button",
          {
            class: "btn sec petit",
            type: "button",
            onclick: () => {
              if (confirm("Supprimer tout l'historique des parties de ce navigateur ?\nExportez-le d'abord si besoin.")) {
                parties.supprimerTout();
                message = "Historique effacé.";
                dessiner();
              }
            },
          },
          "Tout effacer",
        ),
      ),
      message ? el("p", { class: "message", role: "status" }, message) : "",
      phraseBilan("syno", toutes.filter((p) => roleDe(p) === "syno"), references),
      phraseBilan("dico", toutes.filter((p) => roleDe(p) === "dico"), references),
      el("p", { class: "qui" }, "La comparaison porte sur les parties dont l'énigme et la liste ont une référence de l'ordinateur à jour."),
      toutes.length === 0 ? el("p", { class: "qui" }, "Aucune partie pour l'instant : elles s'enregistrent à la fin de chaque énigme et de chaque liste.") : "",
      ...toutes.map((p) => detailPartie(p, references)),
    );
  }
  dessiner();
}
