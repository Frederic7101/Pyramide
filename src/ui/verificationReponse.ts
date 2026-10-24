import { chargerDictionnaire, motsInconnus, type Dictionnaire } from "../engine/dictionnaire";
import { normaliser } from "../engine/matching";
import { el } from "./dom";

// Chargé une fois, en arrière-plan : tant qu'il n'est pas disponible, les réponses sont envoyées sans vérification.
let dictionnaire: Dictionnaire | null = null;
void chargerDictionnaire().then((d) => (dictionnaire = d));

/** Dictionnaire chargé, ou null tant qu'il ne l'est pas (les contrôles qui en dépendent sont alors sautés). */
export const dictionnaireCharge = (): Dictionnaire | null => dictionnaire;

/**
 * Envoie la réponse du champ, sauf si elle contient un mot absent du dictionnaire (faute de frappe probable) :
 * on affiche alors un avertissement dans `zone`, avec des corrections proposées. Le joueur corrige,
 * ou confirme (bouton, ou nouvel appui sur Entrée sans rien changer). Une réponse vide est ignorée.
 */
export function verifierPuisEnvoyer(champ: HTMLInputElement, zone: HTMLElement, envoyer: (valeur: string) => void): void {
  const valeur = champ.value.trim();
  if (valeur === "") {
    // Une validation à vide (Entrée par mégarde) ne consomme pas de brique.
    champ.focus();
    return;
  }
  const inconnus = dictionnaire && champ.dataset.averti !== valeur ? motsInconnus(dictionnaire, valeur) : [];
  if (inconnus.length === 0) {
    envoyer(valeur);
    return;
  }

  champ.dataset.averti = valeur;
  const remplacer = (inconnu: string, correction: string) => {
    champ.value = champ.value
      .split(/(\s+)/)
      .map((morceau) => (normaliser(morceau) === inconnu ? correction : morceau))
      .join("");
    zone.replaceChildren();
    champ.focus();
  };
  zone.replaceChildren(
    el(
      "div",
      { class: "avertissement", role: "alert" },
      el("p", {}, `${inconnus.map((m) => `« ${m} »`).join(", ")} : absent du dictionnaire. Faute de frappe ? Corrigez, ou confirmez votre réponse.`),
      ...inconnus.map((inconnu) => {
        const propositions = dictionnaire?.suggestions(inconnu) ?? [];
        return propositions.length === 0
          ? null
          : el(
              "p",
              { class: "actions" },
              `Vouliez-vous dire : `,
              ...propositions.map((p) => el("button", { class: "btn sec petit", type: "button", onclick: () => remplacer(inconnu, p) }, p)),
            );
      }),
      el("button", { class: "btn sec petit", type: "button", onclick: () => envoyer(valeur) }, `Confirmer « ${valeur} »`),
    ),
  );
  champ.focus();
}
