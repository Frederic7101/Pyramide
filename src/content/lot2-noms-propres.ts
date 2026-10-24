import type { ListeNomsPropres } from "../engine/types";
import { assoc, inc, syn } from "./briques";

/**
 * Lot 2 : listes de Noms Propres de niveau moyen et difficile, rédigées par Claude, à relire (version 2026-10-23).
 * Rébus et incitations sont autorisés ici (art. 5.3.1). Réponse sans prénom quand le Larousse le met entre parenthèses.
 */
const VERSION = "2026-10-23";

export const LOT2_NOMS_PROPRES: ListeNomsPropres[] = [
  // ───────────── Niveau moyen ─────────────
  {
    id: "np-101",
    version: VERSION,
    difficulte: "moyen",
    theme: "Inventeurs et savants",
    noms: [
      { rang: 1, reponse: "Gutenberg", briques: [assoc("imprimerie"), assoc("Mayence"), assoc("caractères")] },
      { rang: 2, reponse: "Pasteur", briques: [assoc("rage"), assoc("vaccin"), assoc("microbe")] },
      { rang: 3, reponse: "Edison", briques: [assoc("ampoule"), assoc("phonographe"), inc("Adam", "Éden", "é")] },
      { rang: 4, reponse: "Marconi", briques: [assoc("radio"), assoc("TSF"), assoc("Bologne")] },
    ],
  },
  {
    id: "np-102",
    version: VERSION,
    difficulte: "moyen",
    theme: "Mythologie grecque",
    noms: [
      { rang: 1, reponse: "Ulysse", briques: [assoc("Pénélope"), assoc("Ithaque"), assoc("Cyclope")] },
      { rang: 2, reponse: "Icare", briques: [assoc("ailes"), assoc("cire"), assoc("Dédale")] },
      { rang: 3, reponse: "Prométhée", variantes: ["Promethee"], briques: [assoc("feu"), assoc("foie"), assoc("Titan")] },
      { rang: 4, reponse: "Narcisse", briques: [assoc("reflet"), assoc("Écho"), assoc("fleur")] },
    ],
  },
  {
    id: "np-103",
    version: VERSION,
    difficulte: "moyen",
    theme: "Villes de France",
    noms: [
      { rang: 1, reponse: "Strasbourg", briques: [assoc("Alsace"), assoc("cathédrale"), assoc("Parlement")] },
      { rang: 2, reponse: "Marseille", briques: [assoc("calanques"), assoc("Canebière"), assoc("bouillabaisse")] },
      { rang: 3, reponse: "Lille", briques: [assoc("braderie"), assoc("beffroi"), assoc("Flandre")] },
      { rang: 4, reponse: "Bordeaux", briques: [assoc("vin"), assoc("Garonne"), assoc("Aquitaine")] },
    ],
  },

  // ───────────── Niveau difficile ─────────────
  {
    id: "np-201",
    version: VERSION,
    difficulte: "moyen",
    theme: "Philosophes",
    noms: [
      { rang: 1, reponse: "Spinoza", briques: [assoc("Éthique"), assoc("Amsterdam"), assoc("lunetier")] },
      { rang: 2, reponse: "Kant", briques: [assoc("Königsberg"), assoc("impératif"), assoc("Critique")] },
      { rang: 3, reponse: "Montaigne", briques: [assoc("Essais"), assoc("Boétie"), assoc("Périgord")] },
      { rang: 4, reponse: "Pascal", briques: [assoc("Pensées"), assoc("roseau"), assoc("Port-Royal")] },
    ],
  },
  {
    id: "np-202",
    version: VERSION,
    difficulte: "difficile",
    theme: "Peintres de la Renaissance",
    noms: [
      { rang: 1, reponse: "Botticelli", briques: [assoc("Vénus"), assoc("Florence"), assoc("Primavera")] },
      { rang: 2, reponse: "Bruegel", variantes: ["Brueghel"], briques: [assoc("Babel"), assoc("Flandre"), assoc("paysans")] },
      { rang: 3, reponse: "Dürer", variantes: ["Durer"], briques: [assoc("Nuremberg"), assoc("rhinocéros"), assoc("Melencolia")] },
      { rang: 4, reponse: "Titien", briques: [assoc("Venise"), assoc("Urbino"), assoc("Cadore")] },
    ],
  },
  {
    id: "np-203",
    version: VERSION,
    difficulte: "facile",
    theme: "Batailles",
    noms: [
      { rang: 1, reponse: "Austerlitz", briques: [assoc("Napoléon"), assoc("soleil"), assoc("Moravie")] },
      { rang: 2, reponse: "Verdun", briques: [assoc("Meuse"), assoc("poilus"), assoc("Douaumont")] },
      { rang: 3, reponse: "Alésia", variantes: ["Alesia"], briques: [assoc("Vercingétorix"), assoc("César"), assoc("Gaule")] },
      { rang: 4, reponse: "Marignan", briques: [assoc("François Ier"), assoc("Suisses"), assoc("Bayard")] },
    ],
  },
  {
    id: "np-204",
    version: "2026-10-23",
    difficulte: "difficile",
    theme: "Écrivains russes",
    noms: [
      { rang: 1, reponse: "Tolstoï", variantes: ["Tolstoi"], briques: [assoc("Karénine"), assoc("Natacha"), assoc("Iasnaïa")] },
      { rang: 2, reponse: "Dostoïevski", variantes: ["Dostoievski", "Dostoïevsky"], briques: [assoc("Raskolnikov"), assoc("Karamazov"), assoc("bagne")] },
      { rang: 3, reponse: "Tchekhov", variantes: ["Tchékhov"], briques: [assoc("Cerisaie"), assoc("mouette"), assoc("Taganrog")] },
      { rang: 4, reponse: "Pouchkine", briques: [assoc("Onéguine"), assoc("duel"), assoc("Tsarskoïe")] },
    ],
  },
  {
    id: "np-205",
    version: "2026-10-23",
    difficulte: "moyen",
    theme: "Savants de l'Antiquité",
    noms: [
      { rang: 1, reponse: "Archimède", variantes: ["Archimede"], briques: [assoc("eurêka"), assoc("Syracuse"), assoc("levier")] },
      { rang: 2, reponse: "Euclide", briques: [assoc("géométrie"), assoc("Alexandrie"), assoc("Éléments")] },
      { rang: 3, reponse: "Pythagore", briques: [assoc("théorème"), assoc("hypoténuse"), assoc("Samos")] },
      { rang: 4, reponse: "Hippocrate", briques: [assoc("serment"), assoc("médecine"), assoc("Cos")] },
    ],
  },
  {
    id: "np-206",
    version: "2026-10-23",
    difficulte: "difficile",
    theme: "Compositeurs baroques",
    noms: [
      { rang: 1, reponse: "Vivaldi", briques: [assoc("Saisons"), assoc("Venise"), assoc("roux")] },
      { rang: 2, reponse: "Rameau", briques: [assoc("Indes"), assoc("Dijon"), syn("branche", "homonyme")] },
      { rang: 3, reponse: "Lully", briques: [assoc("Versailles"), assoc("Florence"), assoc("bâton")] },
      { rang: 4, reponse: "Haendel", variantes: ["Händel", "Handel"], briques: [assoc("Messie"), assoc("Londres"), assoc("Halle")] },
    ],
  },
];
