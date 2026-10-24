/**
 * Qui joue Syno et l'arbitre en mode Dico : l'API Anthropic (clé sur le serveur) ou Claude Code
 * (sans clé, sur l'abonnement du joueur). Le choix est conservé dans le navigateur et envoyé au
 * serveur avec chaque demande.
 */
export type Fournisseur = "api" | "cli";

export interface StatutServeur {
  /** Une clé API est configurée sur le serveur. */
  cleApi: boolean;
  /** Fournisseur utilisé si le joueur n'a rien choisi. */
  defaut: Fournisseur;
}

const CLE = "pyramide-solo.fournisseur.v1";

export function lireChoix(): Fournisseur | null {
  try {
    const v = window.localStorage.getItem(CLE);
    return v === "api" || v === "cli" ? v : null;
  } catch {
    return null;
  }
}

export function ecrireChoix(choix: Fournisseur): void {
  try {
    window.localStorage.setItem(CLE, choix);
  } catch {
    // Stockage indisponible : le choix vaut pour cette visite seulement.
  }
  courant = choix;
}

let courant: Fournisseur | null = lireChoix();

/** En-tête à joindre aux demandes /api/syno et /api/arbitre (vide tant que le joueur n'a pas choisi). */
export function enteteFournisseur(): Record<string, string> {
  return courant ? { "X-Pyramide-Fournisseur": courant } : {};
}

/** Ce que propose le serveur ; null s'il est injoignable (site statique). */
export async function lireStatut(): Promise<StatutServeur | null> {
  try {
    const reponse = await fetch(`${import.meta.env.BASE_URL}api/statut`);
    if (!reponse.ok) return null;
    const donnees = (await reponse.json()) as Partial<StatutServeur>;
    return typeof donnees.cleApi === "boolean" && (donnees.defaut === "api" || donnees.defaut === "cli") ? { cleApi: donnees.cleApi, defaut: donnees.defaut } : null;
  } catch {
    return null;
  }
}
