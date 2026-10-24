import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, inc, precise, syn } from "./briques";

/**
 * Lot 5 A : 25 énigmes de niveau moyen (sciences, techniques, histoire, géographie, arts,
 * architecture, cinéma, théâtre), rédigées par Claude, à relire (version 2026-10-23).
 */
const VERSION = "2026-10-23";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "moyen", titre, texte, solution, solutionVariantes, mots };
}

export const LOT5A_ENIGMES: Enigme[] = [
  e("e-501", "Nuit en plein midi", "La {1} masque le soleil ; l'{2} tombe en plein jour ; seule la {3} du disque brille encore ; on l'observe à travers des {4} ; jadis, on y lisait un {5} funeste.", "une éclipse", ["éclipse", "l'éclipse", "eclipse"], [
    m(1, "lune", [assoc("satellite", "genre"), assoc("croissant")], { famille: ["lunaire", "lunette", "alunir"] }),
    m(2, "obscurité", [syn("ténèbres"), inc("funérailles", "obsèques", "obs")], { variantes: ["obscurite"], famille: ["obscur", "obscurcir"] }),
    m(3, "couronne", [syn("diadème"), assoc("épines")], { famille: ["couronner", "couronnement"] }),
    m(4, "filtres", [syn("tamis"), assoc("café")], { variantes: ["filtre"], famille: ["filtrer", "filtration", "infiltrer"] }),
    m(5, "présage", [syn("augure"), inc("cadeau", "présent", "prés")], { variantes: ["presage"], famille: ["présager"] }),
  ]),
  e("e-502", "Repas de lumière", "Dans la feuille, la {1} capte les rayons ; le {2} de l'air est absorbé ; la plante en tire du {3}, source d'{4}, et rejette l'{5} que nous respirons.", "la photosynthèse", ["photosynthèse", "photosynthese"], [
    m(1, "chlorophylle", [assoc("pigment", "genre"), assoc("vert")]),
    m(2, "carbone", [assoc("azote", "voisin"), assoc("diamant")], { famille: ["carbonique", "charbon"] }),
    m(3, "glucose", [assoc("sucre", "genre"), assoc("fructose", "voisin")]),
    m(4, "énergie", [syn("vitalité"), assoc("solaire")], { variantes: ["energie"], famille: ["énergique", "énergétique"] }),
    m(5, "oxygène", [assoc("gaz", "genre"), assoc("plongeur"), inc("embarras", "gêne", "gène", "gêne", "fin")], { variantes: ["oxygene"], famille: ["oxygéner"] }),
  ]),
  e("e-503", "Le cerf-volant de Benjamin", "Dressée sur le {1} de l'édifice, une {2} métallique attire la {3} ; un {4} la conduit jusqu'au sol, évitant l'{5}.", "le paratonnerre", ["paratonnerre"], [
    m(1, "faîte", [syn("sommet"), assoc("toit"), inc("anniversaire", "fête", "faî", "fê")], { variantes: ["faite"] }),
    m(2, "tige", [syn("tringle"), assoc("fleur")]),
    m(3, "foudre", [syn("éclair"), assoc("Zeus")], { famille: ["foudroyer", "foudroyant"] }),
    m(4, "câble", [syn("filin"), assoc("télévision")], { variantes: ["cable"], famille: ["câbler", "câblage"] }),
    m(5, "incendie", [syn("brasier"), assoc("pompiers"), inc("supérieur", "inférieur", "in")], { famille: ["incendier", "incendiaire"] }),
  ]),
  e("e-504", "La Bible à quarante-deux lignes", "Des {1} mobiles coulés dans un {2}, une {3} à vis et de l'{4} grasse : l'atelier de Mayence fit du {5} un bien partagé.", "l'imprimerie", ["imprimerie", "l'impression", "impression"], [
    m(1, "caractères", [syn("lettres"), assoc("Bruyère")], { variantes: ["caractère", "caracteres"], famille: ["caractériser", "caractéristique"] }),
    m(2, "moule", [syn("matrice"), assoc("frites")], { famille: ["mouler", "moulage"] }),
    m(3, "presse", [syn("journaux"), assoc("citron")], { famille: ["presser", "pression", "pressoir"] }),
    m(4, "encre", [assoc("plume", "paire"), assoc("seiche")], { famille: ["encrier", "encrer"] }),
    m(5, "savoir", [syn("connaissance"), assoc("vivre")], { famille: ["savant", "su"] }),
  ]),
  e("e-505", "Chartres en mille éclats", "Sertis de {1}, des verres {2} illuminent la {3} ; on y lit la vie des {4}, et le célèbre {5} de Chartres y domine.", "le vitrail", ["vitrail", "les vitraux", "vitraux"], [
    m(1, "plomb", [assoc("métal", "genre"), assoc("soldats")], { famille: ["plombier", "plomber", "aplomb"] }),
    m(2, "colorés", [syn("bariolés"), inc("fureur", "colère", "col")], { variantes: ["coloré", "colores", "colorées"], famille: ["couleur", "colorer", "coloration"] }),
    m(3, "nef", [syn("vaisseau"), assoc("cathédrale")]),
    m(4, "apôtres", [syn("disciples"), assoc("douze")], { variantes: ["apôtre", "apotres"], famille: ["apostolique"] }),
    m(5, "bleu", [syn("azur"), assoc("Klein")], { famille: ["bleuté", "bleuir"] }),
  ]),
  e("e-506", "Peindre dans le frais", "Les {1} sont posés sur un {2} encore {3} ; juché sur un {4}, Michel-Ange couvrit ainsi le {5} de la Sixtine.", "la fresque", ["fresque", "une fresque"], [
    m(1, "pigments", [syn("colorants"), assoc("ocre", "exemple")], { variantes: ["pigment"], famille: ["pigmentation"] }),
    m(2, "enduit", [syn("crépi"), assoc("plâtrier")], { famille: ["enduire"] }),
    m(3, "humide", [syn("moite"), assoc("éponge"), inc("audacieux", "timide", "mide", undefined, "fin")], { famille: ["humidité", "humidifier"] }),
    m(4, "échafaudage", [assoc("grue", "voisin"), assoc("façade"), inc("foulard", "écharpe", "écha")], { variantes: ["echafaudage"], famille: ["échafaud", "échafauder"] }),
    m(5, "plafond", [assoc("plancher", "paire"), assoc("lustre")], { famille: ["plafonner", "plafonnier"] }),
  ]),
  e("e-507", "Mémoire de pierre", "Pris dans l'{1}, le squelette s'est {2} au fil des {3} ; le {4} le dégage au pinceau ; il témoigne d'une espèce {5}.", "le fossile", ["fossile", "un fossile", "les fossiles", "fossiles"], [
    m(1, "argile", [syn("glaise"), assoc("potier")], { famille: ["argileux"] }),
    m(2, "pétrifié", [syn("figé"), assoc("Méduse")], { variantes: ["petrifie", "pétrifiée", "pétrifier"], famille: ["pétrifier", "pétrification", "pierre"] }),
    m(3, "ères", [syn("époques"), assoc("quaternaire")], { variantes: ["ère", "eres", "ere"] }),
    m(4, "paléontologue", [assoc("savant", "genre"), assoc("dinosaures")], { variantes: ["paleontologue"], famille: ["paléontologie"] }),
    m(5, "disparue", [syn("éteinte"), assoc("dodo")], { variantes: ["disparu", "disparues", "disparus"], famille: ["disparaître", "disparition", "paraître", "apparaître"] }),
  ]),
  e("e-508", "Rivière gelée", "Né des {1} éternelles, il paraît {2} vers la vallée ; ses {3} piègent les alpinistes ; il charrie des {4} ; le climat le fait {5}.", "le glacier", ["glacier"], [
    m(1, "neiges", [assoc("grêle", "voisin"), assoc("ski")], { variantes: ["neige"], famille: ["neiger", "enneigé"] }),
    m(2, "glisser", [syn("déraper"), assoc("toboggan")], { famille: ["glissade", "glissement", "glissière"] }),
    m(3, "crevasses", [syn("fissures"), assoc("piolet")], { variantes: ["crevasse"], famille: ["crever", "crevaison"] }),
    m(4, "roches", [syn("pierres"), assoc("granit", "exemple")], { variantes: ["roche", "rochers", "rocher"], famille: ["rocheux", "rocaille"] }),
    m(5, "fondre", [syn("dégeler"), assoc("chocolat")], { famille: ["fonte", "fondu", "fondant", "fonderie"] }),
  ]),
  e("e-509", "Embouchure en éventail", "Le {1} se divise en {2} ; ses {3} y déposent des {4} ; celui du Nil a la forme d'un {5}.", "le delta", ["delta"], [
    m(1, "fleuve", [assoc("Loire", "exemple"), assoc("océan")], { famille: ["fluvial"] }),
    m(2, "bras", [assoc("jambe", "paire"), assoc("biceps")], { famille: ["brasse", "embrasser", "bracelet"] }),
    m(3, "crues", [syn("débordements"), assoc("Nil")], { variantes: ["crue"], famille: ["décrue", "croître"] }),
    m(4, "alluvions", [syn("sédiments"), inc("briquet", "allumette", "allu")], { variantes: ["alluvion"], famille: ["alluvial"] }),
    m(5, "triangle", [assoc("carré", "voisin"), assoc("Bermudes")], { famille: ["triangulaire", "angle"] }),
  ]),
  e("e-510", "Puzzle de Ravenne", "Des milliers de {1} de marbre ou de {2}, fixés dans le {3}, forment un {4} sur le sol des {5} romaines.", "la mosaïque", ["mosaïque", "mosaique"], [
    m(1, "cubes", [assoc("Rubik", "marque"), assoc("glaçons")], { variantes: ["cube"], famille: ["cubique", "cubisme"] }),
    m(2, "verre", [assoc("cristal", "voisin"), assoc("Murano")], { famille: ["verrerie", "verrier", "verrière"] }),
    m(3, "mortier", [syn("ciment"), assoc("obus")]),
    m(4, "motif", [syn("dessin"), assoc("tapisserie")], { famille: ["motiver", "motivation"] }),
    m(5, "villas", [syn("demeures"), assoc("Médicis")], { variantes: ["villa"], famille: ["village", "villégiature"] }),
  ]),
  e("e-511", "Assiégé", "Ceint de {1} et de {2} remplies d'eau, il se dresse autour de son {3} ; on entre sous la {4} par le pont-levis ; les archers tirent par les {5}.", "le château fort", ["château fort", "château-fort", "chateau fort", "le château-fort", "la forteresse", "forteresse"], [
    m(1, "remparts", [syn("fortifications"), assoc("Carcassonne")], { variantes: ["rempart"], famille: ["remparer"] }),
    m(2, "douves", [syn("fossés"), assoc("pont-levis")], { variantes: ["douve"] }),
    m(3, "donjon", [assoc("tour", "genre"), assoc("Dragons")]),
    m(4, "herse", [syn("grille"), assoc("labour")], { famille: ["herser"] }),
    m(5, "meurtrières", [syn("tueuses"), assoc("fente")], { variantes: ["meurtrière", "meurtrieres"], famille: ["meurtre", "meurtrier", "meurtrir"] }),
  ]),
  e("e-512", "Le rasoir national", "Pendant la {1}, le {2} attache le {3} à la planche ; le {4} s'abat ; la foule assiste au {5}.", "la guillotine", ["guillotine"], [
    m(1, "terreur", [syn("épouvante"), assoc("Robespierre")], { famille: ["terrible", "terrifier", "terroriste", "terrorisme"] }),
    m(2, "bourreau", [syn("exécuteur"), assoc("cagoule")], { famille: ["bourrelle"] }),
    m(3, "condamné", [syn("prisonnier"), assoc("verdict"), inc("pour", "contre", "con")], { variantes: ["condamne", "condamnée"], famille: ["condamner", "condamnation", "damner"] }),
    m(4, "couperet", [syn("hachoir"), assoc("boucher")], { famille: ["couper", "coupe", "coupure"] }),
    m(5, "supplice", [syn("torture"), assoc("Tantale")], { famille: ["supplicier", "supplicié", "supplier"] }),
  ]),
  e("e-513", "L'œil du mont Palomar", "Son {1} concave capte la lumière des {2} ; l'{3} y observe des {4} lointaines ; Hubble en a placé un en {5}.", "le télescope", ["télescope", "telescope"], [
    m(1, "miroir", [syn("glace"), assoc("Blanche-Neige")], { famille: ["miroiter", "mirer", "admirer"] }),
    m(2, "étoiles", [syn("astres"), assoc("filante")], { variantes: ["étoile", "etoiles"], famille: ["étoilé"] }),
    m(3, "astronome", [assoc("savant", "genre"), assoc("Copernic")], { famille: ["astronomie", "astre", "astral"] }),
    m(4, "galaxies", [assoc("Andromède", "exemple"), assoc("spirale")], { variantes: ["galaxie"], famille: ["galactique"] }),
    m(5, "orbite", [syn("trajectoire"), assoc("satellite")], { famille: ["orbital", "orbe"] }),
  ]),
  e("e-514", "Le secret de maître Cornille", "Ses {1} tournent sous la brise ; la {2} broie le {3} ; on en tire la {4} ; Don Quichotte, lui, y voyait des {5}.", "le moulin à vent", ["moulin à vent", "moulin a vent", "le moulin", "moulin"], [
    m(1, "ailes", [syn("voilure"), assoc("avion")], { variantes: ["aile"], famille: ["ailé", "aileron"] }),
    m(2, "meule", [assoc("pilon", "voisin"), assoc("foin")], { famille: ["meulière", "meuler"] }),
    m(3, "blé", [assoc("céréale", "genre"), assoc("épi")], { variantes: ["ble", "blés"] }),
    m(4, "farine", [assoc("semoule", "voisin"), assoc("crêpes"), inc("Khéops", "pharaon", "far", "phar")], { famille: ["fariner", "farineux", "enfariner"] }),
    m(5, "géants", [syn("colosses"), assoc("Gargantua")], { variantes: ["géant", "geants"], famille: ["gigantesque", "gigantisme"] }),
  ]),
  e("e-515", "Le cheval de fer", "Son {1} chauffe l'eau ; à la {2}, on y jette le {3} ; elle tire les {4} sur les {5}.", "la locomotive", ["locomotive", "la locomotive à vapeur"], [
    m(1, "foyer", [syn("âtre"), assoc("famille")]),
    m(2, "pelle", [syn("bêche"), assoc("seau")], { famille: ["pelleter", "pelletée", "pelleteuse"] }),
    m(3, "charbon", [syn("houille"), assoc("mine")], { famille: ["charbonnier", "carbone", "carboniser"] }),
    m(4, "wagons", [syn("voitures"), assoc("bestiaux")], { variantes: ["wagon"], famille: ["wagonnet"] }),
    m(5, "rails", [assoc("traverses", "voisin"), assoc("ballast"), inc("ironiser", "railler", "rail")], { variantes: ["rail"], famille: ["dérailler", "déraillement"] }),
  ]),
  e("e-516", "Piqûre de rappel", "On va {1} un {2} affaibli ; le corps produit des {3} et acquiert une {4} contre l'{5}.", "le vaccin", ["vaccin", "la vaccination", "vaccination"], [
    m(1, "injecter", [syn("inoculer"), assoc("seringue"), inc("supérieur", "inférieur", "in")], { famille: ["injection", "jeter"] }),
    m(2, "virus", [assoc("microbe", "voisin"), assoc("informatique")], { famille: ["viral", "virulent"] }),
    m(3, "anticorps", [assoc("antigène", "paire"), assoc("défenses")], { famille: ["corps", "corporel"] }),
    m(4, "immunité", [syn("protection"), assoc("parlementaire")], { variantes: ["immunite"], famille: ["immunisé", "immuniser", "immun"] }),
    m(5, "épidémie", [assoc("peste", "exemple"), assoc("contagion"), inc("blé", "épi", "épi")], { variantes: ["epidemie"], famille: ["épidémique", "endémie"] }),
  ]),
  e("e-517", "L'œil de Leeuwenhoek", "Sous l'{1}, une {2} de verre révèle des {3} ; on règle la {4} et le {5}.", "le microscope", ["microscope"], [
    m(1, "objectif", [syn("but"), assoc("photo")], { famille: ["objet", "objectivité"] }),
    m(2, "lamelle", [syn("feuillet"), assoc("champignon"), inc("alpaga", "lama", "lam")], { variantes: ["lamelles"], famille: ["lame", "laminer"] }),
    m(3, "bactéries", [syn("microbes"), assoc("antibiotique")], { variantes: ["bactérie", "bacteries"], famille: ["bactérien", "bactériologie"] }),
    m(4, "netteté", [syn("précision"), precise(contraire("flou"), "précision amène aussi exactitude ; flou oriente vers la qualité de l'image")], { variantes: ["nettete"], famille: ["net", "nettoyer"] }),
    m(5, "grossissement", [syn("agrandissement"), assoc("loupe")], { famille: ["gros", "grossir", "grosseur"] }),
  ]),
  e("e-518", "Colère des profondeurs", "Deux {1} glissent l'une contre l'autre ; des {2} se propagent depuis l'{3} ; l'échelle de Richter mesure la {4} ; puis viennent les {5}.", "le séisme", ["séisme", "seisme", "le tremblement de terre", "tremblement de terre"], [
    m(1, "plaques", [syn("dalles"), assoc("tectonique")], { variantes: ["plaque"], famille: ["plaquer", "placage"] }),
    m(2, "ondes", [syn("vibrations"), assoc("radio")], { variantes: ["onde"], famille: ["ondulation", "onduler", "inonder"] }),
    m(3, "épicentre", [syn("foyer"), inc("blé", "épi", "épi")], { variantes: ["epicentre"], famille: ["centre", "central"] }),
    m(4, "magnitude", [syn("ampleur"), assoc("Richter")]),
    m(5, "répliques", [syn("ripostes"), assoc("secousses")], { variantes: ["réplique", "repliques"], famille: ["répliquer"] }),
  ]),
  e("e-519", "Au bout des doigts", "Caché derrière le {1}, l'artiste tire les {2} ; la poupée de {3} s'anime ; les enfants crient quand surgit le {4} armé de son {5}.", "la marionnette", ["marionnette", "les marionnettes", "le guignol", "guignol"], [
    m(1, "rideau", [syn("tenture"), assoc("douche")], { variantes: ["rideaux"] }),
    m(2, "ficelles", [syn("cordelettes"), assoc("baguette")], { variantes: ["ficelle"], famille: ["ficeler"] }),
    m(3, "bois", [assoc("chêne", "exemple"), assoc("menuisier")], { famille: ["boisé", "boiserie", "bûche"] }),
    m(4, "gendarme", [syn("pandore"), assoc("Saint-Tropez")], { famille: ["gendarmerie"] }),
    m(5, "bâton", [syn("gourdin"), assoc("ski")], { variantes: ["baton"], famille: ["bâtonnet", "bastonnade"] }),
  ]),
  e("e-520", "La Chevauchée fantastique", "Une {1} attaquée, un {2} à l'étoile, des {3} venues des collines, un {4} au soleil couchant, un {5} qu'on dégaine : John Ford en a fait un art.", "le western", ["western", "un western"], [
    m(1, "diligence", [syn("zèle"), assoc("attelage")], { famille: ["diligent", "diligenter"] }),
    m(2, "shérif", [assoc("marshal", "voisin"), assoc("étoile")], { variantes: ["sherif"] }),
    m(3, "flèches", [assoc("arc", "paire"), assoc("Cupidon")], { variantes: ["flèche", "fleches"], famille: ["fléchette", "fléché"] }),
    m(4, "duel", [syn("affrontement"), assoc("témoins")], { famille: ["duelliste"] }),
    m(5, "revolver", [syn("pistolet"), assoc("barillet")]),
  ]),
  e("e-521", "Avant le parlant", "Pas de {1} : des {2} s'affichent entre les plans ; un {3} accompagne l'image ; Chaplin y triomphe en {4} ; l'arrivée du son le rendit {5}.", "le film muet", ["film muet", "le cinéma muet", "cinéma muet", "le muet"], [
    m(1, "dialogues", [syn("conversations"), assoc("Platon")], { variantes: ["dialogue"], famille: ["dialoguer", "dialoguiste"] }),
    m(2, "cartons", [syn("boîtes"), assoc("déménagement")], { variantes: ["carton"], famille: ["cartonner", "cartonnage"] }),
    m(3, "pianiste", [assoc("musicien", "genre"), assoc("Polanski")], { famille: ["piano"] }),
    m(4, "vagabond", [syn("clochard"), assoc("Charlot")], { famille: ["vagabonder", "vagabondage"] }),
    m(5, "obsolète", [syn("dépassé"), assoc("technologie"), inc("entrave", "obstacle", "obs")], { variantes: ["obsolete"], famille: ["obsolescence"] }),
  ]),
  e("e-522", "Manhattan à la verticale", "Né à Chicago grâce à l'{1}, il empile ses {2} vers les nuages ; une {3} d'acier le soutient ; ses {4} de verre reflètent la ville ; au sommet, gare au {5} !", "le gratte-ciel", ["gratte-ciel", "gratte ciel", "la tour", "tour"], [
    m(1, "ascenseur", [syn("élévateur"), assoc("cabine")], { famille: ["ascension", "ascendant", "monter"] }),
    m(2, "étages", [syn("niveaux"), assoc("palier")], { variantes: ["étage", "etages"], famille: ["étager", "étagère"] }),
    m(3, "charpente", [syn("ossature"), assoc("toit")], { famille: ["charpentier"] }),
    m(4, "façades", [syn("devantures"), assoc("ravalement")], { variantes: ["façade", "facades"], famille: ["face"] }),
    m(5, "vertige", [syn("tournis"), assoc("hauteurs")], { famille: ["vertigineux"] }),
  ]),
  e("e-523", "Ouvrage d'art romain", "Les {1} romains bâtirent ces {2} superposées ; une légère {3} permet à l'eau de {4} jusqu'aux {5} de la cité.", "l'aqueduc", ["aqueduc", "un aqueduc"], [
    m(1, "ingénieurs", [syn("bâtisseurs"), assoc("Polytechnique")], { variantes: ["ingénieur", "ingenieurs"], famille: ["ingénieux", "génie", "ingénierie"] }),
    m(2, "arches", [syn("voûtes"), assoc("Noé")], { variantes: ["arche"], famille: ["arc", "arcade"] }),
    m(3, "pente", [syn("déclivité"), assoc("savonneuse")], { famille: ["pentu"] }),
    m(4, "couler", [syn("ruisseler"), assoc("navire")], { famille: ["coulée", "écouler", "coulant"] }),
    m(5, "thermes", [syn("bains"), assoc("Caracalla")], { famille: ["thermal", "thermique"] }),
  ]),
  e("e-524", "Le dernier voyage du pharaon", "Vidé de ses {1}, le corps est séché dans le {2}, enduit de {3}, puis enveloppé de bandes de {4} ; il repose enfin dans un {5}.", "la momie", ["momie", "la momification", "momification"], [
    m(1, "entrailles", [syn("viscères"), inc("sortie", "entrée", "entr")], {}),
    m(2, "sel", [assoc("poivre", "paire"), assoc("Guérande")], { famille: ["saler", "salé", "salin", "salière"] }),
    m(3, "résine", [syn("gomme"), assoc("pin"), inc("do", "ré", "ré")], { variantes: ["resine"], famille: ["résineux"] }),
    m(4, "lin", [assoc("chanvre", "voisin"), assoc("huile")], { famille: ["linge", "lingerie"] }),
    m(5, "sarcophage", [syn("cercueil"), assoc("Égypte"), inc("ironie", "sarcasme", "sarc")], { famille: ["phagocyter"] }),
  ]),
  e("e-525", "Le point de fuite", "Depuis la {1}, le peintre crée l'illusion de la {2} ; les lignes {3} convergent vers l'{4}, comme le montre un simple {5}. Quelle est cette nouveauté picturale ?", "la perspective", ["perspective"], [
    m(1, "renaissance", [syn("renouveau"), assoc("Florence")], { famille: ["naître", "naissance", "renaître"] }),
    m(2, "profondeur", [syn("abysses"), inc("amateur", "pro", "pro")], { famille: ["profond", "approfondir"] }),
    m(3, "parallèles", [assoc("latitude", "paire"), assoc("droites")], { variantes: ["parallèle", "paralleles"], famille: ["parallélisme"] }),
    m(4, "horizon", [syn("lointain"), assoc("ligne"), inc("fin", "origine", "hori", "ori")], { famille: ["horizontal", "horizontalité"] }),
    m(5, "carrelage", [syn("dallage"), assoc("faïence")], { famille: ["carreau", "carreler", "carré", "carreleur"] }),
  ]),
];
