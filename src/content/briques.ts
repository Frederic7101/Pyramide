import type { Brique, CibleBrique, NatureAssociation, PositionSon } from "../engine/types";

/** Raccourcis de rédaction des briques (même structure que les objets écrits à la main dans le lot 1). */

export const syn = (texte: string, cible: CibleBrique = "mot"): Brique => ({ texte, role: "relation", relation: "synonyme", cible });

export const contraire = (texte: string, cible: CibleBrique = "mot"): Brique => ({ texte, role: "relation", relation: "contraire", cible });

export const assoc = (texte: string, nature?: NatureAssociation, cible: CibleBrique = "mot", regle?: string): Brique => ({
  texte,
  role: "relation",
  relation: "association",
  ...(nature && { nature }),
  cible,
  ...(regle && { regle }),
});

/** Synonyme ou contraire qui lève l'ambiguïté de la brique précédente (voir Brique.leveAmbiguite). */
export const precise = (brique: Brique, raison: string): Brique => ({ ...brique, leveAmbiguite: raison });

export const decl = (texte: string): Brique => ({ texte, role: "declinaison", regle: "4.3.1.a" });

/** Consigne « contraire » : Syno dit le contraire du sens de la 1re brique ou de sa réponse précédente (jamais en 1re position). */
export const consigneContraire = (): Brique => decl("contraire");

/**
 * Incitation : `amene` est le mot évoqué, `son` le son commun (graphie du mot à deviner),
 * `position` sa place dans le mot à deviner (début par défaut).
 */
export const inc = (texte: string, amene: string, son: string, sonEvoque?: string, position?: PositionSon): Brique => ({
  texte,
  role: "incitation",
  cible: "mot",
  amene,
  son,
  ...(sonEvoque && { sonEvoque }),
  ...(position && position !== "debut" && { position }),
  regle: "4.3.3",
});
