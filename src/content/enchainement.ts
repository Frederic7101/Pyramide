import { normaliser } from "../engine/matching";
import type { Brique, NatureAssociation } from "../engine/types";

/** Associations assez directes pour faire une bonne 1re brique (voir NatureAssociation). */
const ASSOCIATIONS_FORTES: ReadonlySet<NatureAssociation> = new Set(["paire", "genre", "exemple", "marque", "voisin"]);

/**
 * Contrôle d'un ENCHAÎNEMENT de briques (règlement FFCP, art. 4.1 et 4.3).
 * Le règlement juge la série « brique 1 + brique 2 + ... → mot » : les mêmes mots peuvent être
 * valides dans un ordre et interdits dans l'autre (« Henri IV + Baygon → régicide » autorisé,
 * « Baygon + Henri IV → régicide » interdit). Les contrôles portent donc sur le rôle et la cible
 * déclarés de chaque brique, dans l'ordre.
 */

export interface ProblemeEnchainement {
  /** "conseil" : enchaînement valide mais mal construit (choix de rédaction à améliorer). */
  niveau: "erreur" | "avertissement" | "conseil";
  /** Numéro (à partir de 1) de la brique où l'enchaînement devient invalide. */
  position: number;
  message: string;
  regle: string;
}

/** Mots qui, en 1re brique et hors relation, repoussent l'incitation à la 3e brique (art. 4.1). */
const MOTS_GRAMMATICAUX = [
  "verbe", "adverbe", "substantif", "nom", "mot", "adjectif", "vocable", "monosyllabique",
  "apherese", "apocope", "abreviation", "masculin", "feminin", "pluriel", "singulier",
];

/** Vrai pour un mot de la liste de l'art. 4.1 ou l'un de ses dérivés (« adjectival », « pronom »...). */
export function estMotGrammatical(texte: string): boolean {
  const mot = normaliser(texte).split(" ")[0] ?? "";
  return MOTS_GRAMMATICAUX.some((g) => mot === g || (g.length >= 5 && mot.startsWith(g)) || (g === "nom" && mot.endsWith("nom")));
}

/** Représentation d'un enchaînement au format du règlement : « a + b → mot ». */
export function formaterEnchainement(briques: readonly Brique[], reponse: string): string {
  return `${briques.map((b) => b.texte).join(" + ")} → ${reponse}`;
}

/**
 * Énigmes (règles générales) :
 * 1. la 1re brique est une relation vers le mot, un mot souche ou un homonyme ; elle ne fait pas
 *    deviner un préfixe ou un suffixe ; ce n'est ni une incitation ni une déclinaison, sauf un mot
 *    de l'art. 4.1 (« verbe », « adjectif »...), qui repousse alors l'incitation à la 3e brique ;
 * 2. une déclinaison suit une brique qui a amené le mot, un mot souche ou un homonyme ;
 * 3. préfixe et suffixe viennent après le mot souche ;
 * 4. une seule incitation, jamais en 1re brique ;
 * 5. au moins une brique est une relation vers le mot, un mot souche ou un homonyme (sinon rébus).
 *
 * Noms Propres (art. 5.3.1) : rébus permis, incitations libres dès la 1re brique ; seuls les rôles
 * déclarés et la déclinaison initiale sont contrôlés.
 */
export function controlerEnchainement(briques: readonly Brique[], mode: "enigme" | "noms"): ProblemeEnchainement[] {
  const problemes: ProblemeEnchainement[] = [];
  const signaler = (niveau: ProblemeEnchainement["niveau"], position: number, message: string, regle: string) =>
    problemes.push({ niveau, position, message, regle });

  // Ce que les relations ont déjà amené : le mot, un mot souche ou un homonyme.
  const amene = new Set<"mot" | "souche" | "homonyme">();
  let incitations = 0;
  let incitationMin = 2;

  // Bonne pratique de rédaction (pas une règle) : la 1re brique est de préférence un synonyme ou un
  // contraire, ou une association forte (paire, genre, exemple, marque, voisin) ; une association
  // plus lointaine est plus efficace en 2e ou 3e brique.
  const premiere = briques[0];
  if (mode === "enigme" && premiere?.role === "relation" && premiere.relation === "association" && !(premiere.nature && ASSOCIATIONS_FORTES.has(premiere.nature))) {
    signaler("conseil", 1, `1re brique « ${premiere.texte} » en association d'idées lointaine : préférer un synonyme, un contraire ou une association forte (paire, genre, exemple, marque, voisin), et garder celle-ci pour la 2e ou 3e brique`, "");
  }

  briques.forEach((brique, i) => {
    const position = i + 1;
    if (!brique.role) {
      signaler("erreur", position, `rôle de « ${brique.texte} » non déclaré (relation, déclinaison ou incitation)`, "4");
      return;
    }
    if (brique.role === "relation" && (!brique.relation || !brique.cible)) {
      signaler("erreur", position, `relation de « ${brique.texte} » incomplète : préciser le type (synonyme, contraire, association) et la cible`, "4.1");
    }

    if (mode === "noms") {
      if (position === 1 && brique.role === "declinaison" && !estMotGrammatical(brique.texte)) {
        signaler("avertissement", 1, `déclinaison « ${brique.texte} » en 1re brique, avant d'avoir amené quoi que ce soit`, "4.3.1");
      }
      return;
    }

    switch (brique.role) {
      case "relation": {
        if (brique.cible === "prefixe" || brique.cible === "suffixe") {
          if (!amene.has("mot") && !amene.has("souche")) {
            signaler("erreur", position, `« ${brique.texte} » fait deviner le ${brique.cible === "prefixe" ? "préfixe" : "suffixe"} avant le mot souche`, "4.3.2.b");
          }
        } else if (brique.cible) {
          amene.add(brique.cible);
        }
        break;
      }
      case "declinaison": {
        if (position === 1) {
          if (estMotGrammatical(brique.texte)) incitationMin = 3;
          else signaler("erreur", 1, `déclinaison « ${brique.texte} » en 1re brique : rien n'a encore été amené`, "4.3.1");
        } else if (amene.size === 0 && incitationMin !== 3) {
          signaler("erreur", position, `déclinaison « ${brique.texte} » sans mot souche amené auparavant`, "4.3.1");
        } else if (amene.has("homonyme") && !amene.has("mot") && !amene.has("souche")) {
          signaler("avertissement", position, `déclinaison d'un homonyme : interdite si sa racine diffère de celle du mot`, "4.3.1.c");
        }
        break;
      }
      case "incitation": {
        incitations++;
        if (position === 1) signaler("erreur", 1, `incitation « ${brique.texte} » en 1re brique`, "4.3.3.a");
        else if (position < incitationMin) {
          signaler("erreur", position, `incitation « ${brique.texte} » en ${position}e brique : après « ${briques[0].texte} », pas avant la 3e`, "4.1");
        }
        if (incitations === 2) signaler("erreur", position, `deuxième incitation « ${brique.texte} » : une seule par mot`, "4.3.3.a");
        break;
      }
    }
  });

  // Rébus : seulement si aucune autre erreur n'explique déjà l'enchaînement (évite les doublons).
  const dejaErrone = problemes.some((p) => p.niveau === "erreur");
  if (mode === "enigme" && briques.length > 0 && briques.every((b) => b.role) && amene.size === 0 && !dejaErrone) {
    signaler("erreur", briques.length, "aucune brique n'est en relation avec le mot, un mot souche ou un homonyme (rébus)", "4.3.2.d");
  }

  // Bonne pratique de rédaction (pas une règle) : les pistes étant écrites d'avance, chaque brique doit
  // compléter les précédentes. Deux synonymes ou contraires du mot à la suite donnent la même information
  // (« vivant + décédé → mort ») : mieux vaut une brique qui précise le sens, ou une incitation. Un contraire
  // qui écarte les autres sens de la 1re brique reste bienvenu s'il est justifié (« subtilité + épaisseur → finesse »).
  if (mode === "enigme") {
    const sens = (b: Brique) => b.role === "relation" && b.cible === "mot" && (b.relation === "synonyme" || b.relation === "contraire");
    briques.forEach((b, i) => {
      if (i > 0 && sens(b) && sens(briques[i - 1]) && !b.leveAmbiguite) {
        signaler("conseil", i + 1, `« ${briques[i - 1].texte} » et « ${b.texte} » donnent la même information (synonyme ou contraire du mot) : préférer une brique qui complète la précédente (association qui précise le sens, déclinaison) ou une incitation, sinon justifier en quoi la 2e lève une ambiguïté (leveAmbiguite)`, "");
      }
    });
  }

  // Bonne pratique de rédaction (pas une règle) : quand Dico utilise une incitation, il la place en
  // dernière brique. L'ajouter ou non reste un jugement (piste vague ou lointaine, plusieurs réponses
  // possibles) : son absence n'est donc pas signalée.
  const derniere = briques.length;
  const positionIncitation = briques.findIndex((b) => b.role === "incitation") + 1;
  if (mode === "enigme" && positionIncitation > 0 && positionIncitation < derniere && !problemes.some((p) => p.niveau === "erreur")) {
    signaler("conseil", positionIncitation, `incitation « ${briques[positionIncitation - 1].texte} » en ${positionIncitation}e brique : la placer de préférence en dernière brique`, "");
  }
  return problemes;
}
