import type { ListeNomsPropres } from "../engine/types";

/**
 * Lot 1 : 5 listes de Noms Propres rédigées par Claude, à relire (version 2026-10-22).
 * Rébus et incitations sont autorisés ici (art. 5.3.1). Le prénom n'est exigé que s'il figure
 * en entier, sans parenthèses, au Larousse : sinon la réponse est le seul patronyme.
 */
const VERSION = "2026-10-22";

export const LOT1_NOMS_PROPRES: ListeNomsPropres[] = [
  {
    id: "np-001",
    version: VERSION,
    difficulte: "facile",
    theme: "Capitales européennes",
    noms: [
      { rang: 1, reponse: "Madrid", briques: [{ texte: "Espagne", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }, { texte: "Prado", role: "relation", relation: "association", cible: "mot" }, { texte: "Real", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 2, reponse: "Rome", briques: [{ texte: "Italie", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }, { texte: "Colisée", role: "relation", relation: "association", cible: "mot" }, { texte: "Vatican", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 3, reponse: "Lisbonne", briques: [{ texte: "Portugal", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }, { texte: "fado", role: "relation", relation: "association", cible: "mot" }, { texte: "Tage", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 4, reponse: "Vienne", briques: [{ texte: "Autriche", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }, { texte: "valse", role: "relation", relation: "association", cible: "mot" }, { texte: "Sissi", role: "relation", relation: "association", cible: "mot" }] },
    ],
  },
  {
    id: "np-002",
    version: VERSION,
    difficulte: "facile",
    theme: "Écrivains français",
    noms: [
      { rang: 1, reponse: "Victor Hugo", partielles: ["Hugo"], briques: [{ texte: "Cosette", role: "relation", relation: "association", cible: "mot" }, { texte: "Gavroche", role: "relation", relation: "association", cible: "mot" }, { texte: "Guernesey", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 2, reponse: "Molière", variantes: ["Moliere"], briques: [{ texte: "Tartuffe", role: "relation", relation: "association", cible: "mot" }, { texte: "Harpagon", role: "relation", relation: "association", cible: "mot" }, { texte: "Alceste", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 3, reponse: "Émile Zola", variantes: ["Emile Zola"], partielles: ["Zola"], briques: [{ texte: "Germinal", role: "relation", relation: "association", cible: "mot" }, { texte: "Rougon", role: "relation", relation: "association", cible: "mot" }, { texte: "Dreyfus", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 4, reponse: "Jules Verne", partielles: ["Verne"], briques: [{ texte: "Nautilus", role: "relation", relation: "association", cible: "mot" }, { texte: "Nemo", role: "relation", relation: "association", cible: "mot" }, { texte: "Fogg", role: "relation", relation: "association", cible: "mot" }] },
    ],
  },
  {
    id: "np-003",
    version: VERSION,
    difficulte: "facile",
    theme: "Compositeurs",
    noms: [
      { rang: 1, reponse: "Mozart", briques: [{ texte: "Salzbourg", role: "relation", relation: "association", cible: "mot" }, { texte: "Figaro", role: "relation", relation: "association", cible: "mot" }, { texte: "Requiem", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 2, reponse: "Beethoven", briques: [{ texte: "Bonn", role: "relation", relation: "association", cible: "mot" }, { texte: "sourd", role: "relation", relation: "association", cible: "mot" }, { texte: "Fidelio", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 3, reponse: "Chopin", briques: [{ texte: "Pologne", role: "relation", relation: "association", cible: "mot" }, { texte: "nocturnes", role: "relation", relation: "association", cible: "mot" }, { texte: "Sand", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 4, reponse: "Ravel", briques: [{ texte: "Boléro", role: "relation", relation: "association", cible: "mot" }, { texte: "Ciboure", role: "relation", relation: "association", cible: "mot" }, { texte: "Daphnis", role: "relation", relation: "association", cible: "mot" }] },
    ],
  },
  {
    id: "np-004",
    version: VERSION,
    difficulte: "facile",
    theme: "Fleuves de France",
    noms: [
      { rang: 1, reponse: "Loire", briques: [{ texte: "châteaux", role: "relation", relation: "association", cible: "mot" }, { texte: "Chambord", role: "relation", relation: "association", cible: "mot" }, { texte: "Nantes", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 2, reponse: "Rhône", variantes: ["Rhone"], briques: [{ texte: "Lyon", role: "relation", relation: "association", cible: "mot" }, { texte: "Camargue", role: "relation", relation: "association", cible: "mot" }, { texte: "Avignon", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 3, reponse: "Seine", briques: [{ texte: "Paris", role: "relation", relation: "association", cible: "mot" }, { texte: "Rouen", role: "relation", relation: "association", cible: "mot" }, { texte: "Honfleur", role: "relation", relation: "association", cible: "mot" }] },
      { rang: 4, reponse: "Garonne", briques: [{ texte: "Bordeaux", role: "relation", relation: "association", cible: "mot" }, { texte: "Toulouse", role: "relation", relation: "association", cible: "mot" }, { texte: "mascaret", role: "relation", relation: "association", cible: "mot" }] },
    ],
  },
  {
    id: "np-005",
    version: VERSION,
    difficulte: "facile",
    theme: "Peintres",
    noms: [
      { rang: 1, reponse: "Claude Monet", partielles: ["Monet"], briques: [{ texte: "nénuphars", role: "relation", relation: "association", cible: "mot" }, { texte: "impressionnisme", role: "relation", relation: "association", cible: "mot" }, { texte: "Giverny", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }] },
      { rang: 2, reponse: "Picasso", briques: [{ texte: "Guernica", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.d" }, { texte: "cubisme", role: "relation", relation: "association", cible: "mot" }, { texte: "Malaga", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }] },
      { rang: 3, reponse: "Léonard de Vinci", variantes: ["Leonard de Vinci"], partielles: ["Vinci", "De Vinci"], briques: [{ texte: "Joconde", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.d" }, { texte: "Cène", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.d" }, { texte: "Amboise", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }] },
      { rang: 4, reponse: "Van Gogh", variantes: ["Vincent van Gogh"], partielles: ["Gogh"], briques: [{ texte: "tournesols", role: "relation", relation: "association", cible: "mot" }, { texte: "oreille", role: "relation", relation: "association", cible: "mot" }, { texte: "Arles", role: "relation", relation: "association", cible: "mot", regle: "4.1.3.c" }] },
    ],
  },
];
