import "./ui/style.css";
import { contenuExclu, creerJournal } from "./arbitre/journal";
import { ENIGMES, LISTES_NOMS_PROPRES } from "./content/index";
import { REFERENCE_SYNO } from "./content/referenceSyno";
import { scoreEnigme } from "./engine/enigme";
import { scoreNoms } from "./engine/nomsPropres";
import { joueesDuCycle, tirer as tirerSansRemise } from "./engine/tirage";
import { DIFFICULTES, type Difficulte } from "./engine/types";
import { comparerEnigme, comparerNoms } from "./historique/comparaison";
import { creerParties, resumerEnigme, resumerEnigmeDico, resumerNoms, resumerNomsDico, type EnigmeJouee, type ListeJouee } from "./historique/parties";
import { el } from "./ui/dom";
import { montrerEnigme } from "./ui/enigmeScreen";
import { montrerEnigmeDico } from "./ui/enigmeDicoScreen";
import { montrerNomsDico } from "./ui/nomsDicoScreen";
import { montrerEvaluations } from "./ui/evaluationsScreen";
import { montrerHistorique, tableauComparaison, tableauModeles } from "./ui/historiqueScreen";
import { montrerJournal } from "./ui/journalScreen";
import { ecrireChoix, lireChoix, lireStatut, type StatutServeur } from "./ui/fournisseur";
import { evaluations, stockageNavigateur } from "./ui/magasins";
import { montrerNomsPropres } from "./ui/nomsPropresScreen";

const app = document.getElementById("app");
if (!app) throw new Error("Élément #app introuvable");

const journal = creerJournal(stockageNavigateur());
/** Parties jouées par le joueur (en Syno ou en Dico), comparées au score idéal obtenu par l'ordinateur. */
const parties = creerParties(stockageNavigateur());

const carteJeu = el("section", { class: "carte" });
const carteJournal = el("section", { class: "carte cache" });
const carteEvaluations = el("section", { class: "carte cache" });
const carteHistorique = el("section", { class: "carte cache" });
const boutonJeu = el("button", { type: "button", class: "actif", onclick: () => afficher("jeu") }, "Jouer");
const boutonJournal = el("button", { type: "button", onclick: () => afficher("journal") }, "Journal de l'arbitre");
const boutonEvaluations = el("button", { type: "button", onclick: () => afficher("evaluations") }, "Évaluations");
const boutonHistorique = el("button", { type: "button", onclick: () => afficher("historique") }, "Historique");

app.replaceChildren(
  el("header", { class: "entete" }, el("h1", {}, "▲ Pyramide Solo"), el("nav", { class: "menu" }, boutonJeu, boutonHistorique, boutonJournal, boutonEvaluations)),
  el("main", {}, carteJeu, carteHistorique, carteJournal, carteEvaluations),
);

function majCompteur(): void {
  const aExaminer = journal.lister().filter((s) => s.statut === "a-examiner").length;
  boutonJournal.textContent = aExaminer > 0 ? `Journal de l'arbitre (${aExaminer})` : "Journal de l'arbitre";
}

function afficher(vue: "jeu" | "historique" | "journal" | "evaluations"): void {
  carteJeu.classList.toggle("cache", vue !== "jeu");
  carteJournal.classList.toggle("cache", vue !== "journal");
  carteEvaluations.classList.toggle("cache", vue !== "evaluations");
  carteHistorique.classList.toggle("cache", vue !== "historique");
  boutonHistorique.classList.toggle("actif", vue === "historique");
  boutonJeu.classList.toggle("actif", vue === "jeu");
  boutonJournal.classList.toggle("actif", vue === "journal");
  boutonEvaluations.classList.toggle("actif", vue === "evaluations");
  if (vue === "journal") montrerJournal(carteJournal, journal, majCompteur);
  if (vue === "evaluations") montrerEvaluations(carteEvaluations, evaluations);
  if (vue === "historique") montrerHistorique(carteHistorique, parties, REFERENCE_SYNO);
}

/** Contenus déjà joués, par type et par niveau, conservés d'une visite à l'autre (localStorage). */
const CLE_HISTORIQUE = "pyramide-solo.historique.v1";

function lireHistorique(): Record<string, string[]> {
  try {
    const brut = window.localStorage.getItem(CLE_HISTORIQUE);
    const donnees: unknown = brut ? JSON.parse(brut) : {};
    return typeof donnees === "object" && donnees !== null ? (donnees as Record<string, string[]>) : {};
  } catch {
    return {};
  }
}

function ecrireHistorique(historique: Record<string, string[]>): void {
  try {
    window.localStorage.setItem(CLE_HISTORIQUE, JSON.stringify(historique));
  } catch {
    // Stockage indisponible : le tirage reste aléatoire, sans mémoire d'une visite à l'autre.
  }
}

/**
 * Tire un contenu jouable, sans remise : on ne rejoue pas un contenu avant d'avoir joué tous ceux
 * du niveau. On écarte ceux dont un mot a un signalement confirmé invalide (tant que le contenu
 * n'est pas corrigé) ; si tout est écarté, on joue quand même parmi l'ensemble.
 */
function tirer<T extends { id: string }>(cle: string, contenus: readonly T[], rangs: (c: T) => number[]): T {
  const signalements = journal.lister();
  const jouables = contenus.filter((c) => !rangs(c).some((r) => contenuExclu(signalements, c.id, r)));
  const historiques = lireHistorique();
  const { choisi, historique } = tirerSansRemise(jouables.length > 0 ? jouables : contenus, historiques[cle] ?? []);
  ecrireHistorique({ ...historiques, [cle]: historique });
  return choisi;
}

const LIBELLE_NIVEAU: Record<Difficulte, string> = { facile: "Facile", moyen: "Moyen", difficile: "Difficile" };
const DESCRIPTION_NIVEAU: Record<Difficulte, string> = {
  facile: "mots simples et concrets",
  moyen: "mots moins courants, quelques notions abstraites",
  difficile: "mots rares ou abstraits",
};

/** Contenus du niveau choisi ; s'il n'y en a aucun, tout le contenu (pour ne jamais bloquer la partie). */
function duNiveau<T extends { difficulte: Difficulte }>(contenus: readonly T[], niveau: Difficulte): readonly T[] {
  const filtres = contenus.filter((c) => c.difficulte === niveau);
  return filtres.length > 0 ? filtres : contenus;
}

/**
 * Rôle du joueur : Syno (il devine, l'ordinateur donne les briques) ou Dico (il fait deviner,
 * l'ordinateur devine grâce à Claude, via le serveur du jeu).
 */
type Role = "syno" | "dico";
let role: Role = "syno";

/** Ce que propose le serveur (clé API ou non), lu une fois ; null tant qu'il n'a pas répondu. */
let statutServeur: StatutServeur | null = null;
void lireStatut().then((statut) => {
  statutServeur = statut;
  if (role === "dico" && !carteJeu.classList.contains("cache") && carteJeu.querySelector("h2")?.textContent === "Nouvelle partie") accueil();
});

/** Case à cocher « sans clé API » : Syno et l'arbitre sont joués par Claude Code plutôt que par l'API. */
function choixFournisseur(): HTMLElement {
  const choix = lireChoix();
  const sansCle: boolean = choix ? choix === "cli" : statutServeur?.defaut === "cli";
  const case_ = el("input", {
    type: "checkbox",
    id: "sans-cle",
    ...(sansCle ? { checked: true } : {}),
    onchange: (e: Event) => {
      ecrireChoix((e.target as HTMLInputElement).checked ? "cli" : "api");
      accueil();
    },
  });
  const apiChoisie = !sansCle;
  let aide = "Claude joue Syno et l'arbitre via Claude Code, sur votre abonnement, sans clé API (plus lent : quelques secondes à une minute par réponse).";
  if (statutServeur === null) aide = "Serveur du jeu injoignable ou site statique : le mode Dico demande « npm run dev ».";
  else if (apiChoisie) aide = statutServeur.cleApi ? "Claude joue Syno et l'arbitre via l'API Anthropic (clé du serveur, facturée à l'usage, rapide)." : "Aucune clé API configurée sur le serveur : cochez la case, ou renseignez ANTHROPIC_API_KEY dans .env.local.";
  return el("div", { class: "avertissement" }, el("label", { for: "sans-cle", class: "case" }, case_, " Jouer sans clé API (Claude Code)"), el("p", { class: "qui" }, aide));
}

/** Écran d'accueil : choix du rôle puis du niveau de difficulté. */
function accueil(): void {
  const choixRole = (valeur: Role, titre: string, detail: string) =>
    el(
      "button",
      { class: `btn niveau ${role === valeur ? "" : "sec"}`, type: "button", "aria-pressed": role === valeur ? "true" : "false", onclick: () => { role = valeur; accueil(); } },
      titre,
      el("small", {}, detail),
    );
  carteJeu.replaceChildren(
    el("h2", {}, "Nouvelle partie"),
    el("p", {}, "Votre rôle :"),
    el(
      "div",
      { class: "niveaux" },
      choixRole("syno", "Syno : vous devinez", "l'ordinateur donne les briques"),
      choixRole("dico", "Dico : vous faites deviner", "l'ordinateur devine (Claude, via une clé API ou Claude Code)"),
    ),
    role === "dico" ? choixFournisseur() : "",
    el("p", {}, "Une énigme, puis une liste de 4 noms propres. Choisissez votre niveau :"),
    el(
      "div",
      { class: "niveaux" },
      ...DIFFICULTES.map((niveau) => {
        const nbEnigmes = ENIGMES.filter((e) => e.difficulte === niveau).length;
        const nbListes = LISTES_NOMS_PROPRES.filter((l) => l.difficulte === niveau).length;
        const historiques = lireHistorique();
        const jouees = (cle: string, contenus: readonly { id: string }[]) => joueesDuCycle(contenus, historiques[cle] ?? []);
        return el(
          "button",
          { class: "btn niveau", type: "button", onclick: () => lancer(niveau) },
          LIBELLE_NIVEAU[niveau],
          el("small", {}, `${DESCRIPTION_NIVEAU[niveau]} · ${nbEnigmes} énigme(s), ${nbListes} liste(s)`),
          el("small", {}, `Déjà jouées dans ce tour : ${jouees(`enigmes-${niveau}`, ENIGMES.filter((e) => e.difficulte === niveau))} / ${nbEnigmes} énigme(s), ${jouees(`noms-${niveau}`, LISTES_NOMS_PROPRES.filter((l) => l.difficulte === niveau))} / ${nbListes} liste(s)`),
        );
      }),
    ),
  );
}

/** Partie complète au niveau choisi : une énigme, puis une liste de Noms Propres, puis le score. */
function lancer(niveau: Difficulte): void {
  const enigme = tirer(`enigmes-${niveau}`, duNiveau(ENIGMES, niveau), (e) => e.mots.map((m) => m.rang));
  const liste = tirer(`noms-${niveau}`, duNiveau(LISTES_NOMS_PROPRES, niveau), (l) => l.noms.map((n) => n.rang));
  if (role === "dico") {
    montrerEnigmeDico(
      carteJeu,
      enigme,
      journal,
      (score, etatEnigme) => {
        const enigmeJouee = resumerEnigmeDico(etatEnigme);
        const idPartie = parties.commencer(niveau, enigmeJouee, "dico");
        montrerNomsDico(
          carteJeu,
          liste,
          journal,
          (pointsNoms, etatNoms) => {
            const nomsJoues = resumerNomsDico(etatNoms);
            parties.terminer(idPartie, nomsJoues);
            montrerResultats(niveau, score.total, pointsNoms, score, liste.noms.length, { enigme: enigmeJouee, noms: nomsJoues });
          },
          majCompteur,
        );
      },
      majCompteur,
    );
    return;
  }
  montrerEnigme(
    carteJeu,
    enigme,
    journal,
    (etatEnigme) => {
      const score = scoreEnigme(etatEnigme);
      // L'énigme est enregistrée dès sa fin, pour ne pas la perdre si la partie s'arrête là.
      const enigmeJouee = resumerEnigme(etatEnigme);
      const idPartie = parties.commencer(niveau, enigmeJouee);
      montrerNomsPropres(
        carteJeu,
        liste,
        journal,
        (etatNoms) => {
          const nomsJoues = resumerNoms(etatNoms);
          parties.terminer(idPartie, nomsJoues);
          montrerResultats(niveau, score.total, scoreNoms(etatNoms), score, liste.noms.length, { enigme: enigmeJouee, noms: nomsJoues });
        },
        majCompteur,
      );
    },
    majCompteur,
  );
}

/** `joue` : les contenus joués, pour les comparer au score idéal obtenu par l'ordinateur sur les mêmes contenus. */
function montrerResultats(niveau: Difficulte, pointsEnigme: number, pointsNoms: number, detail: { mots: number; bonus: number; solution: number }, nbNoms: number, joue?: { enigme: EnigmeJouee; noms: ListeJouee }): void {
  const ligne = (nom: string, points: number, precision = "") =>
    el("tr", {}, el("td", {}, nom), el("td", {}, precision), el("td", {}, String(points)));
  carteJeu.replaceChildren(
    el("h2", {}, "Fin de partie", el("small", {}, ` Niveau ${LIBELLE_NIVEAU[niveau].toLowerCase()}, vous étiez ${role === "dico" ? "Dico" : "Syno"}`)),
    el(
      "table",
      {},
      ligne("Énigme", pointsEnigme, `${detail.mots} mots + bonus ${detail.bonus} + solution ${detail.solution}`),
      ligne("Noms Propres", pointsNoms, `${pointsNoms} / ${nbNoms}`),
      el("tr", {}, el("th", {}, "Total"), el("th", {}, ""), el("th", {}, String(pointsEnigme + pointsNoms))),
    ),
    ...(joue
      ? [
          el("h3", {}, role === "dico" ? "Vos pistes face à celles de l'ordinateur" : "Face à Syno joué par l'ordinateur"),
          role === "dico" ? el("p", { class: "qui" }, "Score idéal de l'ordinateur : ses propres pistes, devinées par son Syno, lors d'un test à l'aveugle.") : "",
          el("h3", {}, "Votre score face aux modèles"),
          tableauModeles(joue.enigme, joue.noms),
          tableauComparaison("Mot", comparerEnigme(joue.enigme, REFERENCE_SYNO), { role, reponses: joue.enigme.mots.map((m) => m.reponses), briques: joue.enigme.mots.map((m) => m.briquesJoueur ?? []) }),
          tableauComparaison("Nom propre", comparerNoms(joue.noms, REFERENCE_SYNO), { role, reponses: joue.noms.noms.map((n) => n.reponses), briques: joue.noms.noms.map((n) => n.briquesJoueur ?? []) }),
          el("p", { class: "qui" }, "Vos parties sont conservées dans l'onglet Historique."),
        ]
      : []),
    el("p", { class: "qui" }, "Les briques signalées sont consultables dans le journal de l'arbitre."),
    el(
      "div",
      { class: "actions" },
      el("button", { class: "btn", type: "button", onclick: () => lancer(niveau) }, "Rejouer au même niveau"),
      el("button", { class: "btn sec", type: "button", onclick: accueil }, "Changer de niveau"),
    ),
  );
}

majCompteur();
accueil();
