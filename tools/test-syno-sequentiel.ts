/**
 * Test à l'aveugle de Syno joué comme en partie (Énigmes et Noms Propres) : les mots et les noms se jouent
 * dans l'ordre, une brique à la fois. Comme en partie, Syno ne voit pendant la recherche des mots que le
 * titre (ou le thème), les briques et ses propositions passées avec leur verdict ; le texte à trous
 * n'apparaît qu'à la phase de solution. Chaque « vague » fait avancer tous les contenus d'un pas (une
 * brique, une complétion après « Complétez », ou un essai de solution). Un joueur externe (sous-agent)
 * répond sans voir les réponses et explique son raisonnement ; tout est tracé dans journal.jsonl.
 *
 * Usage :
 *   npx tsx tools/test-syno-sequentiel.ts preparer <dossier> [niveau|tous|a-retester] [taille des lots]
 *       → <dossier>/questions-<vague>-<lot>.json
 *   npx tsx tools/test-syno-sequentiel.ts noter <dossier>        → lit <dossier>/reponses-<vague>-*.json
 *   npx tsx tools/test-syno-sequentiel.ts rapport <dossier>      → <dossier>/rapport.md
 *   npx tsx tools/test-syno-sequentiel.ts reference <dossier>... → src/content/referenceSyno.ts
 *   npx tsx tools/test-syno-sequentiel.ts references-modeles <Nom=dossier>... → src/content/referenceModeles.ts
 * Format des réponses : { "<id du contenu>": { "reponse": "...", "raisonnement": "..." } }
 */
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SYSTEME, construireMessage } from "../server/syno";
import { ENIGMES, LISTES_NOMS_PROPRES } from "../src/content/index";
import { REFERENCE_SYNO } from "../src/content/referenceSyno";
import { REFERENCES_MODELES } from "../src/content/referenceModeles";
import { creerEnigme, numeroBriqueCourante, proposerSolution, repondre, scoreEnigme, type EtatEnigme } from "../src/engine/enigme";
import { creerNoms, enAttenteCompletion, repondreNom, scoreNoms, type EtatNoms } from "../src/engine/nomsPropres";
import type { Enigme, ListeNomsPropres } from "../src/engine/types";
import { empreinteEnigme, empreinteNoms } from "../src/historique/empreinte";
import type { ReferenceSyno } from "../src/historique/reference";

/** Essais de solution accordés à Syno. */
const ESSAIS_SOLUTION = 3;
const TAILLE_LOT = 45;

/** Niveau, « tous », « a-retester », ou « @fichier.json » : liste d'identifiants (échantillon fixe). */
type Niveau = string;
interface Etat {
  niveau: Niveau;
  vague: number;
  /** Réponses données par contenu, dans l'ordre : de quoi rejouer la partie avec le moteur. */
  reponses: Record<string, string[]>;
}
interface Joue {
  numero: number;
  propositions: string[];
  trouve: boolean;
}
interface Question {
  id: string;
  type: "mot" | "solution" | "nom";
  titre?: string;
  theme?: string;
  /** Texte à trous : montré seulement pour la solution (Syno ne le découvre qu'après les 5 mots). */
  texte?: string;
  /** Mots ou noms déjà joués, avec les propositions de Syno et leur verdict. */
  precedents?: Joue[];
  numero?: number;
  briques?: string[];
  /** Noms propres : Dico a dit « Complétez » après la dernière réponse, jugée incomplète. */
  completer?: boolean;
  dejaFausses: string[];
  /** Message exact que le jeu enverrait à Syno pour cette question (avec la consigne SYSTEME). */
  message?: string;
}
interface Entree extends Question {
  vague: number;
  reponse: string;
  raisonnement: string;
  juste: boolean;
}

const [commande, dossier, ...autres] = process.argv.slice(2);
if (!dossier) throw new Error("dossier manquant");
const fichierEtat = (d: string) => join(d, "etat.json");
const fichierJournal = join(dossier, "journal.jsonl");
const lireEtat = (d = dossier): Etat => JSON.parse(readFileSync(fichierEtat(d), "utf8"));
/** « a-retester » : les contenus sans référence de l'ordinateur à jour (nouveaux ou modifiés depuis le test). */
const empreinte = (c: Enigme | ListeNomsPropres) => ("mots" in c ? empreinteEnigme(c) : empreinteNoms(c));
const duNiveau = <T extends Enigme | ListeNomsPropres>(contenus: readonly T[], niveau: Niveau) =>
  contenus.filter((c) => {
    if (niveau === "tous") return true;
    if (niveau === "a-retester") return REFERENCE_SYNO[c.id]?.empreinte !== empreinte(c);
    if (niveau.startsWith("@")) return (JSON.parse(readFileSync(niveau.slice(1), "utf8")) as string[]).includes(c.id);
    return c.difficulte === niveau;
  });

/** Rejoue une énigme ou une liste à partir des réponses enregistrées. */
function rejouerEnigme(enigme: Enigme, reponses: readonly string[]): EtatEnigme {
  return reponses.reduce((etat, r) => (etat.phase === "mots" ? repondre(etat, r) : proposerSolution(etat, r)), creerEnigme(enigme));
}
function rejouerNoms(liste: ListeNomsPropres, reponses: readonly string[]): EtatNoms {
  return reponses.reduce((etat, r) => repondreNom(etat, r), creerNoms(liste));
}

/** Texte à trous de la phase de solution : mots trouvés en clair, les autres masqués (comme à l'écran). */
function texteVu(etat: EtatEnigme): string {
  return etat.enigme.texte.replace(/\{(\d)\}/g, (_, n: string) => {
    const i = Number(n) - 1;
    return etat.resultats[i]?.statut === "trouve" ? etat.enigme.mots[i].reponse : "____";
  });
}

function questionEnigme(etat: EtatEnigme): Question | null {
  const base = { id: etat.enigme.id, titre: etat.enigme.titre };
  if (etat.phase === "mots") {
    const mot = etat.enigme.mots[etat.motIndex];
    const n = numeroBriqueCourante(etat);
    const precedents = etat.resultats.slice(0, etat.motIndex).map((r, i) => ({ numero: i + 1, propositions: [...r.reponses], trouve: r.statut === "trouve" }));
    return { ...base, type: "mot", precedents, numero: etat.motIndex + 1, briques: mot.briques.slice(0, n).map((b) => b.texte), dejaFausses: [...etat.resultats[etat.motIndex].reponses] };
  }
  if (etat.phase === "solution" && etat.essaisSolution.length < ESSAIS_SOLUTION) return { ...base, type: "solution", texte: texteVu(etat), dejaFausses: [...etat.essaisSolution] };
  return null;
}

function questionNoms(etat: EtatNoms): Question | null {
  if (etat.phase !== "noms") return null;
  const r = etat.resultats[etat.nomIndex];
  const completer = enAttenteCompletion(etat);
  const montrees = completer ? r.reponses.length : r.reponses.length + 1;
  const precedents = etat.resultats.slice(0, etat.nomIndex).map((x, i) => ({ numero: i + 1, propositions: [...x.reponses, ...x.completions], trouve: x.statut === "trouve" }));
  return {
    id: etat.liste.id,
    type: "nom",
    theme: etat.liste.theme,
    precedents,
    numero: etat.nomIndex + 1,
    briques: etat.liste.noms[etat.nomIndex].briques.slice(0, montrees).map((b) => b.texte),
    completer,
    dejaFausses: [...r.reponses, ...r.completions],
  };
}

/** Le message que le jeu envoie réellement à Syno pour cette question (voir server/syno.ts). */
function messageDuJeu(q: Question): string {
  return construireMessage({
    type: q.type,
    titre: q.titre,
    theme: q.theme,
    numero: q.numero,
    precedents: q.precedents,
    briques: q.briques ?? [],
    reponsesFausses: q.dejaFausses,
    completer: q.completer,
    texte: q.texte,
  });
}

function toutesLesQuestions(etat: Etat): Question[] {
  return [
    ...duNiveau(ENIGMES, etat.niveau).map((e) => questionEnigme(rejouerEnigme(e, etat.reponses[e.id] ?? []))),
    ...duNiveau(LISTES_NOMS_PROPRES, etat.niveau).map((l) => questionNoms(rejouerNoms(l, etat.reponses[l.id] ?? []))),
  ]
    .filter((q): q is Question => q !== null)
    .map((q) => ({ ...q, message: messageDuJeu(q) }));
}

if (commande === "prompt") {
  // Consigne donnée aux agents : celle du jeu (SYSTEME) + le format de réponse du test. Usage : prompt <fichier de sortie>
  const sortie = dossier;
  writeFileSync(
    sortie,
    `Tu joues « Syno » au jeu Pyramide. Voici ta consigne de jeu, exactement celle que reçoit Syno dans le jeu :

=== CONSIGNE ===
${SYSTEME}
=== FIN DE LA CONSIGNE ===

Un fichier de questions JSON t'est donné. Pour chaque question, le champ « message » contient exactement ce que Dico te dit dans le jeu : réponds comme Syno répondrait à ce message, en suivant la consigne.

RÈGLES DU TEST (impératives) : lis UNIQUEMENT le fichier de questions indiqué. Ne lis, ne cherche et ne liste AUCUN autre fichier ou dossier : le code du projet et les autres tests contiennent les réponses, et y accéder fausserait le test. Ne lance aucune commande. Réponds de tête.

Écris le résultat avec l'outil Write dans le fichier de réponses indiqué, au format JSON exact : { "<id>": { "reponse": "...", "raisonnement": "..." }, ... }, une entrée par question (la clé est le champ « id »), le raisonnement tenant en 1 à 3 phrases. Réponds à TOUTES les questions. Ensuite, termine par « fait » suivi de ton identifiant de modèle exact entre parenthèses.
`,
    "utf8",
  );
  console.log(`Consigne écrite dans ${sortie}`);
}

if (commande === "preparer") {
  if (!existsSync(dossier)) mkdirSync(dossier, { recursive: true });
  const [niveauTexte, tailleTexte] = autres;
  const etat: Etat = existsSync(fichierEtat(dossier)) ? lireEtat() : { niveau: (niveauTexte as Niveau) ?? "difficile", vague: 1, reponses: {} };
  const questions = toutesLesQuestions(etat);
  const taille = Number(tailleTexte) || TAILLE_LOT;
  const lots = Math.ceil(questions.length / taille);
  for (let k = 0; k < lots; k++) {
    writeFileSync(join(dossier, `questions-${etat.vague}-${k + 1}.json`), JSON.stringify(questions.slice(k * taille, (k + 1) * taille), null, 2), "utf8");
  }
  writeFileSync(fichierEtat(dossier), JSON.stringify(etat, null, 2), "utf8");
  const compte = (t: Question["type"]) => questions.filter((q) => q.type === t).length;
  console.log(`Vague ${etat.vague} : ${questions.length} question(s) (${compte("mot")} mot(s), ${compte("solution")} solution(s), ${compte("nom")} nom(s)) en ${lots} lot(s).`);
}

if (commande === "noter") {
  const etat = lireEtat();
  const fichiers = readdirSync(dossier).filter((f) => f.startsWith(`reponses-${etat.vague}-`) && f.endsWith(".json"));
  const reponses: Record<string, { reponse: string; raisonnement: string }> = Object.assign({}, ...fichiers.map((f) => JSON.parse(readFileSync(join(dossier, f), "utf8"))));
  // Questions réellement posées : si le moteur a changé depuis (correction du matching), une question
  // recalculée peut différer ; sa réponse visait autre chose et n'est pas notée (la question sera reposée).
  const posees = new Map<string, Question>(
    readdirSync(dossier)
      .filter((f) => f.startsWith(`questions-${etat.vague}-`) && f.endsWith(".json"))
      .flatMap((f) => JSON.parse(readFileSync(join(dossier, f), "utf8")) as Question[])
      .map((q) => [q.id, q]),
  );
  const meme = (a: Question, b: Question | undefined) => !!b && a.type === b.type && a.numero === b.numero && a.briques?.length === b.briques?.length && !!a.completer === !!b.completer;
  const questions = toutesLesQuestions(etat).filter((q) => {
    if (meme(q, posees.get(q.id))) return true;
    console.log(`Question changée depuis sa préparation, réponse ignorée : ${q.id}`);
    return false;
  });
  const manquantes = questions.filter((q) => !reponses[q.id]).map((q) => q.id);
  if (manquantes.length > 0) throw new Error(`Réponses manquantes (${manquantes.length}) : ${manquantes.join(", ")}`);
  let justes = 0;
  for (const q of questions) {
    const r = reponses[q.id];
    etat.reponses[q.id] = [...(etat.reponses[q.id] ?? []), r.reponse];
    let juste: boolean;
    if (q.type === "nom") {
      const apres = rejouerNoms(LISTES_NOMS_PROPRES.find((l) => l.id === q.id)!, etat.reponses[q.id]);
      juste = apres.resultats[q.numero! - 1].statut === "trouve";
    } else {
      const apres = rejouerEnigme(ENIGMES.find((e) => e.id === q.id)!, etat.reponses[q.id]);
      juste = q.type === "mot" ? apres.resultats[q.numero! - 1].statut === "trouve" : apres.solutionTrouvee;
    }
    if (juste) justes++;
    const entree: Entree = { ...q, vague: etat.vague, reponse: r.reponse, raisonnement: r.raisonnement, juste };
    appendFileSync(fichierJournal, JSON.stringify(entree) + "\n", "utf8");
  }
  console.log(`Vague ${etat.vague} : ${justes} bonne(s) réponse(s) sur ${questions.length}.`);
  etat.vague++;
  writeFileSync(fichierEtat(dossier), JSON.stringify(etat, null, 2), "utf8");
}

/** Résultat final de chaque contenu d'un dossier de test, au format de la référence. */
function references(d: string): Record<string, ReferenceSyno> {
  const etat = lireEtat(d);
  const date = new Date().toISOString().slice(0, 10);
  const sortie: Record<string, ReferenceSyno> = {};
  for (const e of duNiveau(ENIGMES, etat.niveau)) {
    const fin = rejouerEnigme(e, etat.reponses[e.id] ?? []);
    if (fin.phase === "mots") continue;
    const s = scoreEnigme(fin);
    sortie[e.id] = {
      type: "enigme",
      empreinte: empreinteEnigme(e),
      date,
      score: s.total,
      trouveA: fin.resultats.map((r) => (r.statut === "trouve" ? r.briquesUtilisees : null)),
      reponses: fin.resultats.map((r) => [...r.reponses]),
      bonus: s.bonus,
      solutionTrouvee: fin.solutionTrouvee,
      essaisSolution: [...fin.essaisSolution],
    };
  }
  for (const l of duNiveau(LISTES_NOMS_PROPRES, etat.niveau)) {
    const fin = rejouerNoms(l, etat.reponses[l.id] ?? []);
    if (fin.phase !== "terminee") continue;
    sortie[l.id] = {
      type: "noms",
      empreinte: empreinteNoms(l),
      date,
      score: scoreNoms(fin),
      trouveA: fin.resultats.map((r) => (r.statut === "trouve" ? r.briquesUtilisees : null)),
      reponses: fin.resultats.map((r) => [...r.reponses, ...r.completions]),
    };
  }
  return sortie;
}

if (commande === "reference") {
  const fusion = { ...REFERENCE_SYNO, ...Object.assign({}, ...[dossier, ...autres].map(references)) };
  const tri = Object.fromEntries(Object.entries(fusion).sort(([a], [b]) => a.localeCompare(b)));
  const source = [
    `import type { ReferenceSyno } from "../historique/reference";`,
    "",
    "/** Généré par `npx tsx tools/test-syno-sequentiel.ts reference <dossier>...` : ne pas modifier à la main. */",
    `export const REFERENCE_SYNO: Record<string, ReferenceSyno> = ${JSON.stringify(tri, null, 2)};`,
    "",
  ].join("\n");
  writeFileSync("src/content/referenceSyno.ts", source, "utf8");
  console.log(`Référence écrite : ${Object.keys(tri).length} contenu(s).`);
}

/**
 * « references-modeles <Nom=dossier>... » : références par modèle (Haiku, Sonnet, Opus…) pour le tableau de
 * comparaison du jeu → src/content/referenceModeles.ts. Les modèles absents de la ligne de commande sont conservés.
 */
if (commande === "references-modeles") {
  const actuelles: Record<string, Record<string, ReferenceSyno>> = { ...REFERENCES_MODELES };
  for (const arg of [dossier, ...autres]) {
    const [nom, d] = arg.split("=");
    actuelles[nom] = references(d);
  }
  const source = [
    `import type { ReferenceSyno } from "../historique/reference";`,
    "",
    "/** Généré par `npx tsx tools/test-syno-sequentiel.ts references-modeles <Nom=dossier>...` : ne pas modifier à la main. */",
    `export const REFERENCES_MODELES: Record<string, Record<string, ReferenceSyno>> = ${JSON.stringify(actuelles, null, 2)};`,
    "",
  ].join("\n");
  writeFileSync("src/content/referenceModeles.ts", source, "utf8");
  console.log(`Références écrites : ${Object.entries(actuelles).map(([n, r]) => `${n} ${Object.keys(r).length}`).join(", ")}.`);
}

if (commande === "rapport") {
  const etat = lireEtat();
  const journal: Entree[] = existsSync(fichierJournal) ? readFileSync(fichierJournal, "utf8").trim().split("\n").map((l) => JSON.parse(l)) : [];
  const lignes = [`# Test à l'aveugle de Syno, joué comme en partie (niveau ${etat.niveau})`, ""];
  lignes.push("Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.", "");
  lignes.push("## Énigmes", "", "| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |", "|---|---|---|---|---|---|---|");
  const scores: number[] = [];
  const parBrique: Record<string, number> = {};
  for (const e of duNiveau(ENIGMES, etat.niveau)) {
    const fin = rejouerEnigme(e, etat.reponses[e.id] ?? []);
    const s = scoreEnigme(fin);
    scores.push(s.total);
    const detail = e.mots.map((m, i) => {
      const r = fin.resultats[i];
      const cle = r.statut === "trouve" ? String(r.briquesUtilisees) : "non trouvé";
      parBrique[cle] = (parBrique[cle] ?? 0) + 1;
      return r.statut === "trouve" ? `${m.reponse} (${r.briquesUtilisees}/${m.mise})` : `~~${m.reponse}~~`;
    });
    lignes.push(`| ${e.id} | ${e.difficulte} | ${e.titre} | ${detail.join(", ")} | ${s.bonus} | ${fin.solutionTrouvee ? "✓" : `✗ (${fin.essaisSolution.join(", ")})`} | ${s.total} |`);
  }
  lignes.push("", `Score moyen : ${(scores.reduce((a, b) => a + b, 0) / Math.max(scores.length, 1)).toFixed(1)} sur ${scores.length} énigme(s).`, "");
  lignes.push(`Mots trouvés : ${Object.entries(parBrique).map(([k, v]) => (k === "non trouvé" ? `${v} non trouvés` : `${v} à la brique ${k}`)).join(", ")}.`, "");
  const listes = duNiveau(LISTES_NOMS_PROPRES, etat.niveau);
  if (listes.length > 0) {
    lignes.push("## Noms Propres", "", "| Liste | Niveau | Thème | Noms (brique où trouvé) | Points |", "|---|---|---|---|---|");
    let total = 0;
    for (const l of listes) {
      const fin = rejouerNoms(l, etat.reponses[l.id] ?? []);
      total += scoreNoms(fin);
      const detail = l.noms.map((n, i) => (fin.resultats[i].statut === "trouve" ? `${n.reponse} (${fin.resultats[i].briquesUtilisees})` : `~~${n.reponse}~~`));
      lignes.push(`| ${l.id} | ${l.difficulte} | ${l.theme} | ${detail.join(", ")} | ${scoreNoms(fin)}/4 |`);
    }
    lignes.push("", `Noms trouvés : ${total} sur ${listes.length * 4}.`, "");
  }
  lignes.push("## Raisonnement de Syno", "");
  for (const e of duNiveau(ENIGMES, etat.niveau)) {
    const fin = rejouerEnigme(e, etat.reponses[e.id] ?? []);
    lignes.push(`### ${e.id} : « ${e.titre} » → ${e.solution}`, "");
    e.mots.forEach((m, i) => {
      const r = fin.resultats[i];
      lignes.push(`**Mot ${i + 1} : ${m.reponse}** (${r.statut === "trouve" ? `trouvé à la brique ${r.briquesUtilisees}` : "non trouvé"}, mise ${m.mise}) — piste : ${m.briques.slice(0, m.mise).map((b) => b.texte).join(" + ")}`, "");
      for (const j of journal.filter((x) => x.id === e.id && x.type === "mot" && x.numero === i + 1)) lignes.push(`- ${j.briques!.join(" + ")} → *${j.reponse}* ${j.juste ? "✓" : "✗"} — ${j.raisonnement}`);
      lignes.push("");
    });
    const sol = journal.filter((x) => x.id === e.id && x.type === "solution");
    if (sol.length > 0) {
      lignes.push(`**Solution : ${e.solution}** — texte découvert : « ${sol[0].texte} »`, "");
      for (const j of sol) lignes.push(`- *${j.reponse}* ${j.juste ? "✓" : "✗"} — ${j.raisonnement}`);
      lignes.push("");
    }
  }
  for (const l of listes) {
    const fin = rejouerNoms(l, etat.reponses[l.id] ?? []);
    lignes.push(`### ${l.id} : ${l.theme}`, "");
    l.noms.forEach((n, i) => {
      const r = fin.resultats[i];
      lignes.push(`**Nom ${i + 1} : ${n.reponse}** (${r.statut === "trouve" ? `trouvé à la brique ${r.briquesUtilisees}` : "non trouvé"}) — briques : ${n.briques.map((b) => b.texte).join(" + ")}`, "");
      for (const j of journal.filter((x) => x.id === l.id && x.numero === i + 1)) lignes.push(`- ${j.briques!.join(" + ")}${j.completer ? " (« Complétez »)" : ""} → *${j.reponse}* ${j.juste ? "✓" : "✗"} — ${j.raisonnement}`);
      lignes.push("");
    });
  }
  writeFileSync(join(dossier, "rapport.md"), lignes.join("\n"), "utf8");
  console.log(`Rapport écrit (${journal.length} réponses au journal).`);
}
