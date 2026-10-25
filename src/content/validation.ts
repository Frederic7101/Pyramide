import { validerEnigme } from "../engine/enigme";
import { normaliser } from "../engine/matching";
import { validerListe } from "../engine/nomsPropres";
import type { Brique, Enigme, ListeNomsPropres } from "../engine/types";
import { controlerEnchainement, formaterEnchainement } from "./enchainement";
import { familleSuffixe } from "./suffixes";

/**
 * Contrôles automatiques du contenu avant publication.
 * L'essentiel porte sur l'ENCHAÎNEMENT des briques (voir enchainement.ts) ; viennent ensuite
 * quelques contrôles par mot (mot à deviner prononcé, racine, chiffres...).
 * Ils ne remplacent pas la relecture humaine : la justesse d'une relation (synonyme, association...)
 * reste un jugement, seule la cohérence des rôles déclarés est vérifiée.
 * - "erreur" : le contenu viole une règle de façon certaine, il ne doit pas être publié ;
 * - "avertissement" : cas douteux à vérifier dans un dictionnaire de référence ;
 * - "conseil" : enchaînement valide mais mal construit (choix de rédaction à améliorer).
 */
export type Niveau = "erreur" | "avertissement" | "conseil";

export interface Probleme {
  niveau: Niveau;
  contenuId: string;
  /** Ex. "mot 2, brique 1". */
  emplacement: string;
  message: string;
  /** Article du règlement FFCP concerné. */
  regle?: string;
}

type Ajout = (niveau: Niveau, message: string, regle?: string) => void;

/** Mots que Dico peut toujours prononcer (art. 5.3.1) : ignorés dans les comparaisons. */
const PETITS_MOTS = new Set(["le", "la", "les", "un", "une", "des", "a", "de", "du", "au", "aux", "et", "en", "l", "d"]);

/** Longueur minimale du préfixe commun pour suspecter une racine commune. */
const PREFIXE_RACINE = 5;

function mots(texte: string): string[] {
  return normaliser(texte).split(" ").filter((m) => m !== "" && !PETITS_MOTS.has(m));
}

/** Forme de comparaison d'un mot : sans accent, sans pluriel simple (s, x finaux). */
function radical(m: string): string {
  return m.length > 3 ? m.replace(/[sx]$/, "") : m;
}

/** Vrai si deux mots désignent le même mot du jeu (au pluriel près). */
function memeMot(a: string, b: string): boolean {
  return radical(a) === radical(b);
}

/** Dates interdites (art. 4.2) : une année ou une date complète. Les nombres ordinaires (un, 10, 2 CV) restent permis. */
function contientDate(texte: string): boolean {
  return /(^|[^\d])(1\d{3}|20\d{2})([^\d]|$)/.test(texte) || /\b\d{1,2}[/.]\d{1,2}[/.]\d{2,4}\b/.test(texte);
}

const PARTICULES_NOM = new Set(["de", "du", "des", "la", "le", "les", "l", "d", "von", "van", "der", "y", "el", "al", "et", "au", "aux", "en", "sur", "sous", "del", "di", "da", "dos", "ben", "bin"]);

/**
 * Énigmes (noms communs, art. 4.1) : une brique est un seul mot, ou un mot composé avec trait d'union
 * (« papier-toilette »). Plusieurs mots séparés par des espaces sont interdits (« petit canard »), sauf un
 * nom propre dont chaque mot porte une majuscule (« Louis XIV », « Saint Georges »), à vérifier.
 */
function controlerUnSeulMot(texte: string, ajouter: Ajout, epreuve: "enigme" | "noms" = "enigme"): void {
  const morceaux = texte.trim().split(/\s+/).filter((m) => /[\p{L}\p{N}]/u.test(m));
  if (morceaux.length <= 1) return;
  const nomPropre = morceaux.every((m) => PARTICULES_NOM.has(normaliser(m)) || /^[A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇŒ0-9]/.test(m));
  if (nomPropre) {
    const precision = epreuve === "noms" ? " : seuls un nom de personne (prénom + nom) ou de lieu sont permis en plusieurs mots ; titre d'œuvre, marque, groupe, club, surnom, titre ou qualificatif sont interdits (art. 4.2.2)" : " (art. 4.2.1)";
    ajouter("avertissement", `« ${texte} » : nom propre en plusieurs mots, à vérifier${precision}`, "4.2.2");
  } else ajouter("erreur", `« ${texte} » : une brique est un seul mot (ou un mot composé avec trait d'union), pas un groupe de mots ou une locution`, "4.1");
}

function prefixeCommun(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

/**
 * Contrôles par mot, communs à toute brique : mot à deviner prononcé, famille de racine,
 * racine probable, suffixe à valeur de racine, chiffres, lettre seule.
 */
function controlerMots(brique: Brique, interdits: string[], famille: string[], ajouter: Ajout, epreuve: "enigme" | "noms" = "enigme"): void {
  // Une brique faite seulement de petits mots (« un » comme nombre, par exemple) n'est pas vide.
  if (normaliser(brique.texte) === "") {
    ajouter("erreur", "brique vide");
    return;
  }
  controlerUnSeulMot(brique.texte, ajouter, epreuve);
  const motsBrique = mots(brique.texte);
  const motsInterdits = interdits.flatMap(mots);
  const motsFamille = famille.flatMap(mots);

  for (const m of motsBrique) {
    if (motsInterdits.includes(m)) {
      ajouter("erreur", `« ${m} » fait partie du mot à deviner`, "4");
      continue;
    }
    if (motsFamille.includes(m)) {
      ajouter("erreur", `« ${m} » appartient à la famille de racine du mot à deviner`, "4");
      continue;
    }
    for (const cible of motsInterdits) {
      if (prefixeCommun(m, cible) >= PREFIXE_RACINE) {
        ajouter("avertissement", `« ${m} » et « ${cible} » commencent pareil : racine commune possible`, "4");
      }
      const suffixeCible = familleSuffixe(cible);
      const suffixeBrique = familleSuffixe(m);
      if (suffixeCible && suffixeBrique && suffixeCible.famille === suffixeBrique.famille) {
        // Les suffixes courts (-ope, -gee...) donnent des faux positifs : simple avertissement.
        const niveau: Niveau = Math.min(suffixeCible.suffixe.length, suffixeBrique.suffixe.length) >= 5 ? "erreur" : "avertissement";
        ajouter(niveau, `« ${m} » et « ${cible} » ont un suffixe à valeur de racine de même famille (-${suffixeBrique.suffixe} / -${suffixeCible.suffixe})`, "4.2.1.f");
      }
    }
    if (m.length === 1 && /[a-z]/.test(m)) {
      ajouter("avertissement", `lettre seule « ${m} » : interdite pour indiquer une lettre (permise si symbole)`, "4.2.1.g");
    }
  }
  if (contientDate(brique.texte)) ajouter("erreur", "date interdite (les nombres ordinaires sont permis)", "4.2.1.k");
}

/**
 * Incitation : le mot évoqué (`amene`) et le mot à deviner ont en commun un son équivalent (`son`),
 * le plus souvent au DÉBUT du mot à deviner (Prévost → abbé → « ab » → abeilles), parfois à la fin
 * (faible → fort → ef-fort), rarement au milieu (`position`).
 * Contrôle sommaire sur l'orthographe : la prononciation, seule juge (art. 4.4), reste à vérifier.
 */
function controlerIncitation(brique: Brique, reponse: string, ajouter: Ajout): void {
  if (!brique.amene || !brique.son) {
    ajouter("avertissement", `incitation « ${brique.texte} » : préciser le mot évoqué (amene) et le son commun en début de mot (son)`, "4.3.3");
    return;
  }
  const sansEspace = (t: string) => normaliser(t).replace(/ /g, "");
  const son = sansEspace(brique.son);
  const sonEvoque = sansEspace(brique.sonEvoque ?? brique.son);
  const mot = sansEspace(reponse);
  const position = brique.position ?? "debut";
  const place = position === "debut" ? mot.startsWith(son) : position === "fin" ? mot.endsWith(son) : mot.includes(son);
  if (!place || !sansEspace(brique.amene).includes(sonEvoque)) {
    const ou = position === "debut" ? "au début de" : position === "fin" ? "à la fin de" : "dans";
    ajouter("avertissement", `incitation « ${brique.texte} » : le son « ${brique.son} » de « ${brique.amene} » doit se trouver ${ou} « ${reponse} », vérifier la prononciation`, "4.4");
  }
}

/** Contrôles des Énigmes : structure, texte, enchaînement des briques jouées, puis mots. */
export function validerContenuEnigme(enigme: Enigme): Probleme[] {
  const problemes: Probleme[] = validerEnigme(enigme).map((message) => ({ niveau: "erreur", contenuId: enigme.id, emplacement: "énigme", message }));
  const ajouterA = (emplacement: string): Ajout => (niveau, message, regle) =>
    problemes.push({ niveau, contenuId: enigme.id, emplacement, message, regle });

  const emplacements = [...enigme.texte.matchAll(/\{(\d)\}/g)].map((m) => Number(m[1]));
  const attendus = enigme.mots.map((_, i) => i + 1);
  if (emplacements.join() !== attendus.join()) {
    ajouterA("texte")("erreur", `le texte doit contenir {1} à {${attendus.length}} une fois chacun, dans l'ordre (trouvé : ${emplacements.join(", ") || "aucun"})`, "5.1");
  }
  if (enigme.solution.trim() === "") ajouterA("solution")("erreur", "solution manquante");
  // Le titre est affiché pendant le jeu : il ne doit dévoiler ni un mot à trouver ni la solution.
  const motsTitre = mots(enigme.titre);
  enigme.mots.forEach((mot, i) => {
    const devoile = [mot.reponse, ...(mot.variantes ?? [])].flatMap(mots).find((m) => motsTitre.includes(m));
    if (devoile) ajouterA("titre")("erreur", `le titre « ${enigme.titre} » contient « ${devoile} », le mot n°${i + 1} à trouver`);
  });
  const solutionDevoilee = [enigme.solution, ...(enigme.solutionVariantes ?? [])].flatMap(mots).find((m) => motsTitre.includes(m));
  if (solutionDevoilee) ajouterA("titre")("erreur", `le titre « ${enigme.titre} » contient « ${solutionDevoilee} », qui fait partie de la solution`);

  enigme.mots.forEach((mot, i) => {
    // Seules les briques misées sont jouées : c'est cet enchaînement qui est contrôlé.
    const jouees = mot.briques.slice(0, mot.mise);
    const chaine = formaterEnchainement(jouees, mot.reponse);
    for (const p of controlerEnchainement(jouees, "enigme")) {
      ajouterA(`mot ${i + 1}, brique ${p.position}`)(p.niveau, `${p.message} [${chaine}]`, p.regle);
    }
    const vues = new Set<string>();
    jouees.forEach((brique, k) => {
      const ajouter = ajouterA(`mot ${i + 1}, brique ${k + 1}`);
      controlerMots(brique, [mot.reponse, ...(mot.variantes ?? [])], mot.famille ?? [], ajouter);
      for (const m of mots(brique.texte)) {
        if ([enigme.solution, ...(enigme.solutionVariantes ?? [])].flatMap(mots).some((x) => memeMot(x, m))) {
          ajouter("erreur", `« ${m} » fait partie de la solution de l'énigme, que Dico ne connaît pas`);
        }
        // Dico ne découvre les mots qu'un à un, comme Syno : un mot SUIVANT de l'énigme ne peut pas servir d'indice
        // (les mots déjà trouvés, eux, sont connus).
        enigme.mots.forEach((autre, j) => {
          if (j > i && [autre.reponse, ...(autre.variantes ?? [])].flatMap(mots).some((x) => memeMot(x, m))) {
            ajouter("erreur", `« ${m} » est le mot n°${j + 1} de l'énigme, que Dico ne découvre qu'après : il ne peut pas servir d'indice`);
          }
        });
      }
      if (brique.role === "incitation") controlerIncitation(brique, mot.reponse, ajouter);
      const cle = normaliser(brique.texte);
      if (vues.has(cle)) ajouter("avertissement", "brique répétée dans l'enchaînement");
      vues.add(cle);
    });
    if (mot.briques.length > mot.mise) {
      ajouterA(`mot ${i + 1}`)("avertissement", `${mot.briques.length - mot.mise} brique(s) au-delà de la mise, jamais jouée(s)`);
    }
  });
  return problemes;
}

/** Contrôles des Noms Propres (rébus et incitations permis, art. 5.3.1). */
export function validerContenuNoms(liste: ListeNomsPropres): Probleme[] {
  const problemes: Probleme[] = validerListe(liste).map((message) => ({ niveau: "erreur", contenuId: liste.id, emplacement: "liste", message }));
  liste.noms.forEach((nom, i) => {
    const ajouterA = (emplacement: string): Ajout => (niveau, message, regle) =>
      problemes.push({ niveau, contenuId: liste.id, emplacement, message, regle });
    for (const partielle of nom.partielles ?? []) {
      if (normaliser(partielle) === normaliser(nom.reponse)) {
        ajouterA(`nom ${i + 1}`)("avertissement", `la réponse partielle « ${partielle} » est identique à la réponse complète`);
      }
    }
    const chaine = formaterEnchainement(nom.briques, nom.reponse);
    for (const p of controlerEnchainement(nom.briques, "noms")) {
      ajouterA(`nom ${i + 1}, brique ${p.position}`)(p.niveau, `${p.message} [${chaine}]`, p.regle);
    }
    nom.briques.forEach((brique, k) => {
      controlerMots(brique, [nom.reponse, ...(nom.variantes ?? []).filter((v) => !(nom.surnoms ?? []).includes(v)), ...(nom.partielles ?? [])], [], ajouterA(`nom ${i + 1}, brique ${k + 1}`), "noms");
    });
  });
  return problemes;
}

/** Valide tout le contenu, y compris l'unicité des identifiants. */
export function validerContenu(enigmes: readonly Enigme[], listes: readonly ListeNomsPropres[]): Probleme[] {
  const problemes = [...enigmes.flatMap(validerContenuEnigme), ...listes.flatMap(validerContenuNoms)];
  const vus = new Set<string>();
  for (const id of [...enigmes.map((e) => e.id), ...listes.map((l) => l.id)]) {
    if (vus.has(id)) problemes.push({ niveau: "erreur", contenuId: id, emplacement: "identifiant", message: "identifiant utilisé deux fois" });
    vus.add(id);
  }
  return problemes;
}

/**
 * Mode Dico : contrôle immédiat d'une brique tapée par le joueur (niveaux 1 et 2 du contrôle :
 * règles mécaniques et famille de racine déclarée dans le contenu). Les erreurs sont certaines
 * (mot à deviner prononcé, racine déclarée, chiffres…) ; les avertissements sont à confirmer.
 * La relation de sens et l'enchaînement ne sont pas jugés ici.
 */
export function controlerBriqueJoueur(
  texte: string,
  interdits: string[],
  famille: string[] = [],
  autresMots: string[] = [],
  epreuve: "enigme" | "noms" = "enigme",
): { erreurs: string[]; avertissements: string[] } {
  const erreurs: string[] = [];
  const avertissements: string[] = [];
  controlerMots({ texte }, interdits, famille, (niveau, message, regle) => {
    const ligne = regle ? `${message} (art. ${regle})` : message;
    if (niveau === "erreur") erreurs.push(ligne);
    else avertissements.push(ligne);
  }, epreuve);
  for (const m of mots(texte)) {
    if (autresMots.flatMap(mots).some((x) => memeMot(x, m))) avertissements.push(`« ${m} » est un mot suivant ou la solution de l'énigme, que vous ne connaissez pas encore`);
  }
  return { erreurs, avertissements };
}
