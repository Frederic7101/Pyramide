import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, inc, syn } from "./briques";

/**
 * Lot 1 : 10 énigmes de niveau facile rédigées par Claude, à relire.
 * Version 2026-10-24 : briques réécrites pour que chaque mot se termine par une incitation
 * (sauf exceptions sans incitation évidente), budget de 13 briques par énigme.
 */
const VERSION = "2026-10-24";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "facile", titre, texte, solution, solutionVariantes, mots };
}

export const LOT1_ENIGMES: Enigme[] = [
  e("e-001", "Veilleur de nuit",
    "Debout sur mon {1}, je veille la nuit ; ma {2} tourne pour guider les {3} ; on me trouve au bout d'une {4}, et mon gardien y vivait {5}.",
    "le phare", ["phare", "un phare"], [
    m(1, "rocher", [syn("écueil"), inc("Juliette", "Roméo", "ro")], { variantes: ["rochers"], famille: ["roc", "roche", "rocheux", "rocaille"] }),
    m(2, "lumière", [syn("clarté"), inc("soleil", "lune", "lu")], { famille: ["lumineux", "luminaire", "luminosité", "illuminer", "allumer"] }),
    m(3, "navires", [syn("bateaux"), inc("Bonaparte", "Napoléon", "na")], { variantes: ["navire"], famille: ["naval", "navigation", "naviguer", "nef", "naufrage", "nautique"] }),
    m(4, "jetée", [syn("digue"), inc("café", "thé", "tée", "thé", "fin")], { variantes: ["jetee"], famille: ["jeter", "jet", "projeter"] }),
    m(5, "seul", [syn("unique"), inc("frère", "sœur", "seu", "sœu")], { variantes: ["seule"], famille: ["seulement", "esseulé", "solitaire", "solitude", "solo", "isolé", "isoler", "isolement"] }),
  ]),
  e("e-002", "Au bras",
    "Mes deux {1} ne se rejoignent qu'à midi ; on me remontait grâce à un {2} ; je loge au {3} de mon maître ; la Suisse est mon {4} de prédilection ; sans moi, vous seriez toujours en {5}.",
    "une montre", ["montre", "la montre"], [
    m(1, "aiguilles", [syn("épingles"), assoc("sapin", undefined, "homonyme"), inc("inégal", "égal", "aig", "ég")], { variantes: ["aiguille"], famille: ["aiguillon", "aiguiser", "aigu", "aiguillage"] }),
    m(2, "ressort", [assoc("spirale", "genre"), assoc("matelas"), inc("argent", "or", "ort", "or", "fin")], { famille: ["ressortir", "sortir", "sortie"] }),
    m(3, "poignet", [assoc("cheville", "paire"), inc("pomme", "poire", "poi")], { famille: ["poing", "poigne", "poignée", "empoigner"] }),
    m(4, "pays", [syn("nation"), inc("guerre", "paix", "pa")], { famille: ["paysan", "paysage", "dépayser"] }),
    m(5, "retard", [contraire("avance"), inc("aller", "retour", "re")], { famille: ["tard", "tardif", "retarder", "attarder"] }),
  ]),
  e("e-003", "Compagnon des jours gris",
    "Je m'ouvre quand le {1} est menaçant ; je suis votre {2} contre l'averse ; mes {3} plient par grand {4} ; on m'oublie souvent dans le {5}.",
    "un parapluie", ["parapluie", "le parapluie"], [
    // ciel : pas d'incitation évidente sur [sjɛ] ; « firmament » est quasi univoque.
    m(1, "ciel", [syn("firmament"), assoc("nuages")], { famille: ["céleste", "cieux"] }),
    m(2, "bouclier", [syn("écu"), assoc("épée", "paire"), inc("bouteille", "bouchon", "bou")], { famille: ["boucle", "boucler"] }),
    m(3, "baleines", [assoc("cétacés", "genre"), inc("haut", "bas", "ba")], { variantes: ["baleine"], famille: ["baleinier", "baleineau", "baleinière"] }),
    m(4, "vent", [syn("brise"), inc("acheter", "vendre", "ven")], { famille: ["venter", "venteux", "éventer", "ventiler", "ventilateur", "éventail"] }),
    m(5, "train", [syn("convoi"), assoc("rails"), inc("accélérateur", "frein", "rain", "rein", "fin")], { variantes: ["trains"], famille: ["traîner", "entraîner", "traînée", "traîneau"] }),
  ]),
  e("e-004", "Artisan de l'aube",
    "Je me lève avant le {1} ; je pétris la {2} ; ma {3} sort dorée de mon {4} ; on me paie souvent avec la petite {5}.",
    "le boulanger", ["boulanger", "un boulanger", "la boulangère", "boulangère"], [
    // jour : pas d'incitation évidente sur [ʒu] ; « nuit » est un contraire univoque.
    m(1, "jour", [contraire("nuit"), assoc("aube")], { famille: ["journée", "journal", "journalier", "ajourner", "séjour", "toujours", "bonjour", "aujourd'hui"] }),
    m(2, "pâte", [assoc("Panzani", "marque", "mot", "4.1.3.f"), inc("Noël", "Pâques", "pâ", "Pâ")], { variantes: ["pate", "pâtes"], famille: ["pâtisserie", "pâtissier", "pâté", "empâter", "pâteux"] }),
    m(3, "baguette", [syn("flûte"), assoc("magique"), inc("haut", "bas", "ba")]),
    m(4, "four", [syn("fiasco"), inc("couteau", "fourchette", "four")], { famille: ["fourneau", "fournée", "fournil", "enfourner"] }),
    m(5, "monnaie", [syn("argent"), assoc("pièces"), inc("vivant", "mort", "mo")], { famille: ["monétaire", "monnayer", "monnayeur"] }),
  ]),
  e("e-005", "Champ de bataille",
    "Sur moi, un {1} tremble d'être mis en échec ; j'ai soixante-quatre {2}, blanches et {3} ; une {4} y file en ligne droite et un {5} en diagonale.",
    "un échiquier", ["échiquier", "l'échiquier", "echiquier"], [
    m(1, "roi", [syn("monarque"), inc("chaud", "froid", "roi", "roi", "fin")], { famille: ["royal", "royaume", "royauté", "reine", "régner", "règne"] }),
    m(2, "cases", [syn("carreaux"), syn("hutte", "homonyme"), inc("thé", "café", "ca")], { variantes: ["case"], famille: ["caser", "casier"] }),
    m(3, "noires", [syn("obscures"), assoc("ébène"), inc("matin", "soir", "oires", "oir", "fin")], { variantes: ["noire", "noir", "noirs"], famille: ["noirceur", "noircir", "noirâtre"] }),
    m(4, "tour", [syn("donjon"), inc("rien", "tout", "tou")], { famille: ["tourelle", "tourillon"] }),
    m(5, "fou", [syn("dément"), inc("cigale", "fourmi", "fou")], { variantes: ["folle"], famille: ["folie", "affoler", "follet"] }),
  ]),
  e("e-006", "Le dormeur",
    "Je dors parfois pendant des {1} ; à mon réveil, je crache du {2} et de la {3} ; j'ai jadis enseveli une {4} romaine ; mon {5} fume au sommet.",
    "un volcan", ["volcan", "le volcan"], [
    m(1, "siècles", [syn("époques"), inc("terre", "ciel", "siè", "cie")], { variantes: ["siècle", "siecles"], famille: ["séculaire", "séculier"] }),
    m(2, "feu", [syn("flamme"), inc("beaucoup", "peu", "eu", "eu", "fin")], { famille: ["feux", "foyer", "focal"] }),
    m(3, "lave", [syn("magma"), inc("ici", "là", "la")]),
    m(4, "ville", [syn("cité"), inc("mort", "vie", "vi")], { famille: ["village", "villageois", "villa", "villégiature"] }),
    m(5, "cratère", [syn("bouche"), assoc("Lune"), inc("grenouille", "crapaud", "cra")], { variantes: ["cratere"] }),
  ]),
  e("e-007", "Il passe chaque matin",
    "Je fais ma {1} chaque matin ; ma {2} est pleine de {3} ; je glisse le courrier dans la {4} ; jadis, je circulais à {5}.",
    "le facteur", ["facteur", "un facteur", "la factrice", "factrice"], [
    m(1, "tournée", [syn("virée"), assoc("concerts"), inc("rien", "tout", "tou")], { variantes: ["tournee"], famille: ["tourner", "tournant", "détour", "contourner", "entourer"] }),
    m(2, "sacoche", [syn("besace"), assoc("cartable"), inc("propre", "sale", "sa")], { famille: ["sac"] }),
    m(3, "lettres", [syn("missives"), inc("beau", "laid", "le", "lai")], { variantes: ["lettre"], famille: ["lettré", "illettré", "lettrine", "littéraire", "littérature", "littéral"] }),
    m(4, "boîte", [syn("coffret"), inc("manger", "boire", "boî", "boi")], { variantes: ["boite"], famille: ["boîtier", "emboîter", "déboîter"] }),
    m(5, "vélo", [syn("bicyclette"), inc("mensonge", "vérité", "vé")], { variantes: ["velo"], famille: ["vélocipède", "vélodrome", "vélocité", "véloce"] }),
  ]),
  e("e-008", "Or liquide",
    "Je suis né dans une {1} ; les {2} m'ont fabriqué avec le {3} des fleurs ; je suis {4} et doré ; on m'étale sur une {5} de pain.",
    "le miel", ["miel", "du miel"], [
    m(1, "ruche", [assoc("nid", "voisin"), assoc("alvéoles"), inc("lisse", "rugueux", "ru")], { famille: ["rucher"] }),
    m(2, "abeilles", [assoc("bourdons", "voisin"), inc("lendemain", "veille", "eilles", "eille", "fin")], { variantes: ["abeille"], famille: ["abeillage", "apiculture", "apiculteur", "apidé"] }),
    m(3, "nectar", [assoc("ambroisie", "paire"), inc("tôt", "tard", "tar", "tar", "fin")], { famille: ["nectarine"] }),
    m(4, "sucré", [syn("doux"), inc("nord", "sud", "su")], { variantes: ["sucrée", "sucrés"], famille: ["sucre", "sucrer", "sucrerie", "sucrier"] }),
    m(5, "tranche", [syn("rondelle"), inc("vingt-neuf", "trente", "tran", "tren")], { famille: ["trancher", "tranchant", "tranchée", "retrancher"] }),
  ]),
  e("e-009", "Septième art",
    "Dans la {1} obscure, on fixe le grand {2} ; le {3} crie « Moteur ! » ; une {4} jouée par une {5} fait pleurer le public.",
    "le cinéma", ["cinéma", "au cinéma", "cinema"], [
    m(1, "salle", [syn("pièce"), inc("propre", "sale", "sal")], { famille: ["salon"] }),
    m(2, "écran", [syn("moniteur"), inc("boulon", "écrou", "écr")], { variantes: ["ecran"] }),
    m(3, "réalisateur", [assoc("Truffaut", "exemple", "mot", "4.1.3.b"), assoc("producteur"), inc("do", "ré", "ré")], { variantes: ["realisateur", "réalisatrice"], famille: ["réaliser", "réalisation", "réel", "réalité", "réalisme"] }),
    m(4, "scène", [syn("séquence"), assoc("théâtre"), inc("six", "sept", "scè", "se")], { variantes: ["scene"], famille: ["scénario", "scénariste", "scénique"] }),
    m(5, "actrice", [syn("comédienne"), inc("désaccord", "accord", "ac", "acc")], { variantes: ["acteur"], famille: ["action", "acte", "actif", "agir"] }),
  ]),
  e("e-010", "Manteau blanc",
    "Je couvre les {1} d'un manteau blanc ; les enfants lancent des {2} de neige ; les {3} partent vers le sud ; on se réchauffe près de la {4} ; je commence en {5}.",
    "l'hiver", ["hiver", "un hiver", "le hiver"], [
    m(1, "toits", [syn("couvertures"), assoc("tuiles"), inc("moi", "toi", "toi")], { variantes: ["toit"], famille: ["toiture"] }),
    m(2, "boules", [syn("sphères"), inc("Bill", "Boule", "bou", "Bou")], { variantes: ["boule"], famille: ["boulet", "boulette", "boulier"] }),
    // oiseaux : pas d'incitation évidente sur [wa] ; « volatiles » + « hirondelles » suffisent.
    m(3, "oiseaux", [syn("volatiles"), assoc("hirondelles")], { variantes: ["oiseau"], famille: ["oiselet", "oiselier", "oisellerie"] }),
    m(4, "cheminée", [syn("âtre"), inc("sentier", "chemin", "chem")], { variantes: ["cheminee"] }),
    m(5, "décembre", [assoc("mois", "genre"), assoc("Noël"), inc("monter", "descendre", "décem", "descen")], { variantes: ["decembre"], famille: ["décimal", "décennie", "décembriste"] }),
  ]),
];
