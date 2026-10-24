type Enfant = Node | string | null | undefined | false;

/** Crée un élément ; le texte passe toujours par des nœuds texte (pas d'injection HTML). */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string | boolean | ((e: Event) => void)> = {},
  ...enfants: Enfant[]
): HTMLElementTagNameMap[K] {
  const noeud = document.createElement(tag);
  for (const [nom, valeur] of Object.entries(attrs)) {
    if (typeof valeur === "function") noeud.addEventListener(nom.replace(/^on/, ""), valeur);
    else if (typeof valeur === "boolean") {
      if (valeur) noeud.setAttribute(nom, "");
    } else noeud.setAttribute(nom, valeur);
  }
  for (const enfant of enfants) {
    if (enfant === null || enfant === undefined || enfant === false) continue;
    noeud.append(typeof enfant === "string" ? document.createTextNode(enfant) : enfant);
  }
  return noeud;
}
