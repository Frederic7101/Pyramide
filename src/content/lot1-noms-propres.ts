import type { ListeNomsPropres } from "../engine/types";
import { assoc, inc } from "./briques";

/**
 * Lot 1 : 5 listes de Noms Propres rédigées par Claude, à relire (version 2026-10-22).
 * Rébus et incitations sont autorisés ici (art. 5.3.1). Le prénom n'est exigé que s'il figure
 * en entier, sans parenthèses, au Larousse : sinon la réponse est le seul patronyme.
 * 3e brique : une incitation quand elle est évidente (docs/brief-noms-incitations.md).
 */
const VERSION = "2026-10-22";

/** Association rattachée à un article du règlement (lieu, œuvre). */
const lieu = (texte: string) => assoc(texte, undefined, "mot", "4.1.3.c");
const oeuvre = (texte: string) => assoc(texte, undefined, "mot", "4.1.3.d");

export const LOT1_NOMS_PROPRES: ListeNomsPropres[] = [
  {
    id: "np-001",
    version: VERSION,
    difficulte: "facile",
    theme: "Capitales européennes",
    noms: [
      { rang: 1, reponse: "Madrid", briques: [lieu("Espagne"), assoc("Prado"), inc("papa", "maman", "Ma")] },
      { rang: 2, reponse: "Rome", briques: [lieu("Italie"), assoc("Colisée"), inc("femme", "homme", "ome", "omme", "fin")] },
      { rang: 3, reponse: "Lisbonne", briques: [lieu("Portugal"), assoc("fado"), inc("mauvaise", "bonne", "bonne", "bonne", "fin")] },
      { rang: 4, reponse: "Vienne", briques: [lieu("Autriche"), assoc("valse"), inc("tienne", "mienne", "ienne", "ienne", "fin")] },
    ],
  },
  {
    id: "np-002",
    version: VERSION,
    difficulte: "facile",
    theme: "Écrivains français",
    noms: [
      { rang: 1, reponse: "Victor Hugo", partielles: ["Hugo"], briques: [assoc("Cosette"), assoc("Gavroche"), inc("défaite", "victoire", "Vict")] },
      { rang: 2, reponse: "Molière", variantes: ["Moliere"], briques: [assoc("Tartuffe"), assoc("Harpagon"), inc("demain", "hier", "ière", "ier", "fin")] },
      { rang: 3, reponse: "Émile Zola", variantes: ["Emile Zola"], partielles: ["Zola"], briques: [assoc("Germinal"), assoc("Rougon"), inc("ici", "là", "la", "là", "fin")] },
      { rang: 4, reponse: "Jules Verne", partielles: ["Verne"], briques: [assoc("Nautilus"), assoc("Nemo"), inc("rouge", "vert", "Ver", "ver", "milieu")] },
    ],
  },
  {
    id: "np-003",
    version: VERSION,
    difficulte: "facile",
    theme: "Compositeurs",
    noms: [
      { rang: 1, reponse: "Mozart", briques: [assoc("Salzbourg"), assoc("Figaro"), assoc("Requiem")] },
      { rang: 2, reponse: "Beethoven", briques: [assoc("Bonn"), assoc("sourd"), assoc("Fidelio")] },
      { rang: 3, reponse: "Chopin", briques: [assoc("Pologne"), assoc("nocturnes"), inc("bière", "chope", "Chop")] },
      { rang: 4, reponse: "Ravel", briques: [assoc("Boléro"), assoc("Ciboure"), inc("il", "elle", "el", "elle", "fin")] },
    ],
  },
  {
    id: "np-004",
    version: VERSION,
    difficulte: "facile",
    theme: "Fleuves de France",
    noms: [
      { rang: 1, reponse: "Loire", briques: [assoc("châteaux"), assoc("Chambord"), inc("manger", "boire", "oire", "oire", "fin")] },
      { rang: 2, reponse: "Rhône", variantes: ["Rhone"], briques: [assoc("Lyon"), assoc("Camargue"), inc("roi", "trône", "ône", "ône", "fin")] },
      { rang: 3, reponse: "Seine", briques: [assoc("Paris"), assoc("Rouen"), inc("théâtre", "scène", "Seine", "scène")] },
      { rang: 4, reponse: "Garonne", briques: [assoc("Bordeaux"), assoc("Toulouse"), inc("train", "gare", "Gar", "gar")] },
    ],
  },
  {
    id: "np-005",
    version: VERSION,
    difficulte: "facile",
    theme: "Peintres",
    noms: [
      { rang: 1, reponse: "Claude Monet", partielles: ["Monet"], briques: [assoc("nénuphars"), assoc("impressionnisme"), inc("billets", "monnaie", "Monet", "monnaie", "milieu")] },
      { rang: 2, reponse: "Picasso", briques: [oeuvre("Guernica"), assoc("cubisme"), inc("trèfle", "pique", "Pic", "piq")] },
      { rang: 3, reponse: "Léonard de Vinci", variantes: ["Leonard de Vinci"], partielles: ["Vinci", "De Vinci"], briques: [oeuvre("Joconde"), oeuvre("Cène"), inc("pain", "vin", "Vin", "vin", "milieu")] },
      { rang: 4, reponse: "Van Gogh", variantes: ["Vincent van Gogh"], partielles: ["Gogh"], briques: [assoc("tournesols"), assoc("oreille"), inc("girouette", "vent", "Van", "ven")] },
    ],
  },
];
