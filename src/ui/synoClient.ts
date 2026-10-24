import type { DemandeSyno, ErreurSyno, ReponseSyno } from "../engine/synoTypes";
import { enteteFournisseur } from "./fournisseur";

/** Demande sa proposition à Syno (service /api/syno, joué par Claude côté serveur). */
export async function demanderSyno(demande: DemandeSyno): Promise<string> {
  let reponse: Response;
  try {
    reponse = await fetch(`${import.meta.env.BASE_URL}api/syno`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...enteteFournisseur() },
      body: JSON.stringify(demande),
    });
  } catch {
    throw new Error("Service Syno injoignable : le mode Dico demande le serveur du jeu (npm run dev).");
  }
  const donnees = (await reponse.json().catch(() => null)) as ReponseSyno | ErreurSyno | null;
  if (!reponse.ok || !donnees || !("reponse" in donnees)) {
    throw new Error(donnees && "erreur" in donnees ? donnees.erreur : `Service Syno indisponible (${reponse.status}).`);
  }
  return donnees.reponse;
}
