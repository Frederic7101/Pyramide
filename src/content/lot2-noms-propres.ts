import type { ListeNomsPropres } from "../engine/types";
import { assoc, inc, syn } from "./briques";

/**
 * Lot 2 : listes de Noms Propres de niveau moyen et difficile, rédigées par Claude, à relire (version 2026-10-23).
 * Rébus et incitations sont autorisés ici (art. 5.3.1). Réponse sans prénom quand le Larousse le met entre parenthèses.
 * 3e brique : une incitation quand elle est évidente (docs/brief-noms-incitations.md).
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
      { rang: 1, reponse: "Gutenberg", briques: [assoc("imprimerie"), assoc("Mayence"), inc("Titanic", "iceberg", "berg", "berg", "fin")] },
      { rang: 2, reponse: "Pasteur", briques: [assoc("rage"), assoc("vaccin"), inc("curé", "pasteur", "Pasteur")] },
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
      { rang: 1, reponse: "Ulysse", briques: [assoc("Pénélope"), assoc("Ithaque"), inc("rugueux", "lisse", "ysse", "isse", "fin")] },
      { rang: 2, reponse: "Icare", briques: [assoc("ailes"), assoc("cire"), inc("demi", "quart", "care", "quart", "fin")] },
      { rang: 3, reponse: "Prométhée", variantes: ["Promethee"], briques: [assoc("feu"), assoc("foie"), inc("café", "thé", "thée", "thé", "fin")] },
      { rang: 4, reponse: "Narcisse", briques: [assoc("reflet"), assoc("Écho"), inc("cinq", "six", "cisse", "six", "fin")] },
    ],
  },
  {
    id: "np-103",
    version: VERSION,
    difficulte: "moyen",
    theme: "Villes de France",
    noms: [
      { rang: 1, reponse: "Strasbourg", briques: [assoc("Alsace"), assoc("cathédrale"), inc("paillettes", "strass", "Stras", "strass")] },
      { rang: 2, reponse: "Marseille", briques: [assoc("calanques"), assoc("Canebière"), inc("Vénus", "Mars", "Mars")] },
      { rang: 3, reponse: "Lille", briques: [assoc("braderie"), assoc("beffroi"), inc("elle", "il", "ille", "il", "fin")] },
      { rang: 4, reponse: "Bordeaux", briques: [assoc("vin"), assoc("Garonne"), inc("ventre", "dos", "deaux", "dos", "fin")] },
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
      { rang: 2, reponse: "Kant", briques: [assoc("Königsberg"), assoc("impératif"), inc("lorsque", "quand", "Kan", "quan")] },
      { rang: 3, reponse: "Montaigne", briques: [assoc("Essais"), assoc("Boétie"), inc("ton", "mon", "Mon")] },
      { rang: 4, reponse: "Pascal", briques: [assoc("Pensées"), assoc("roseau"), inc("maman", "papa", "Pa")] },
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
      { rang: 3, reponse: "Dürer", variantes: ["Durer"], briques: [assoc("Nuremberg"), assoc("rhinocéros"), inc("mou", "dur", "Dür", "dur")] },
      { rang: 4, reponse: "Titien", briques: [assoc("Venise"), assoc("Urbino"), inc("mien", "tien", "tien", "tien", "fin")] },
    ],
  },
  {
    id: "np-203",
    version: VERSION,
    difficulte: "facile",
    theme: "Batailles",
    noms: [
      { rang: 1, reponse: "Austerlitz", briques: [assoc("Napoléon"), assoc("soleil"), inc("feu", "eau", "Au", "eau")] },
      { rang: 2, reponse: "Verdun", briques: [assoc("Meuse"), assoc("poilus"), inc("rouge", "vert", "Ver", "ver")] },
      { rang: 3, reponse: "Alésia", variantes: ["Alesia"], briques: [assoc("Vercingétorix"), assoc("César"), inc("retour", "aller", "Alé", "alle")] },
      { rang: 4, reponse: "Marignan", briques: [assoc("François Ier"), assoc("Suisses"), inc("épouse", "mari", "Mari")] },
    ],
  },
  {
    id: "np-204",
    version: "2026-10-23",
    difficulte: "difficile",
    theme: "Écrivains russes",
    noms: [
      { rang: 1, reponse: "Tolstoï", variantes: ["Tolstoi"], briques: [assoc("Karénine"), assoc("Natacha"), assoc("Iasnaïa")] },
      { rang: 2, reponse: "Dostoïevski", variantes: ["Dostoievski", "Dostoïevsky"], briques: [assoc("Raskolnikov"), assoc("Karamazov"), inc("luge", "ski", "ski", "ski", "fin")] },
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
      { rang: 1, reponse: "Archimède", variantes: ["Archimede"], briques: [assoc("eurêka"), assoc("Syracuse"), inc("Noé", "arche", "Arch", "arch")] },
      { rang: 2, reponse: "Euclide", briques: [assoc("géométrie"), assoc("Alexandrie"), inc("elles", "eux", "Eu", "eu")] },
      { rang: 3, reponse: "Pythagore", briques: [assoc("théorème"), assoc("hypoténuse"), assoc("Samos")] },
      { rang: 4, reponse: "Hippocrate", briques: [assoc("serment"), assoc("médecine"), inc("sincère", "hypocrite", "Hippocr", "hypocr")] },
    ],
  },
  {
    id: "np-206",
    version: "2026-10-23",
    difficulte: "difficile",
    theme: "Compositeurs baroques",
    noms: [
      { rang: 1, reponse: "Vivaldi", briques: [assoc("Saisons"), assoc("Venise"), inc("mort", "vie", "Vi")] },
      { rang: 2, reponse: "Rameau", briques: [assoc("Indes"), assoc("Dijon"), syn("branche", "homonyme")] },
      { rang: 3, reponse: "Lully", briques: [assoc("Versailles"), assoc("Florence"), inc("matelas", "lit", "lly", "lit", "fin")] },
      { rang: 4, reponse: "Haendel", variantes: ["Händel", "Handel"], briques: [assoc("Messie"), assoc("Londres"), assoc("Halle")] },
    ],
  },
];
