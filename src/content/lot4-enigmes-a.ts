import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, inc, syn } from "./briques";

/**
 * Lot 4 A : 25 énigmes de niveau facile (maison, cuisine, animaux, nature, météo, jardin, objets du
 * quotidien), rédigées par Claude, à relire (version 2026-10-23). Rédaction selon les consignes de
 * l'utilisateur : 1re brique synonyme, contraire ou association forte ; pas de briques redondantes ;
 * incitation en dernière brique ; familles de racine déclarées.
 */
const VERSION = "2026-10-23";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "facile", titre, texte, solution, solutionVariantes, mots };
}

export const LOT4A_ENIGMES: Enigme[] = [
  e("e-401", "Neuf vies", "Il aime {1} sur le canapé, guetter la {2}, faire ses {3} sur le fauteuil et grignoter ses {4} ; il retombe toujours sur ses {5}.", "le chat", ["chat", "matou", "le matou", "chatte", "la chatte"], [
    m(1, "ronronner", [syn("vrombir"), inc("carré", "rond", "ron")], { famille: ["ronron", "ronronnement"] }),
    m(2, "souris", [assoc("mulot", "voisin"), inc("pleurer", "rire", "ris", "ri", "fin")], { famille: ["souriceau", "souricière"] }),
    m(3, "griffes", [syn("ongles"), inc("barbecue", "gril", "gri")], { variantes: ["griffe"], famille: ["griffer", "griffure"] }),
    m(4, "croquettes", [assoc("gamelle"), inc("alligator", "crocodile", "cro")], { variantes: ["croquette"], famille: ["croquer", "croquant"] }),
    m(5, "pattes", [syn("jambes"), inc("maman", "papa", "pa")], { variantes: ["patte"], famille: ["patte-d'oie"] }),
  ]),
  e("e-402", "L'heure anglaise", "Remplie d'{1} et branchée sur la {2}, elle crache sa {3} et se met à {4} : place au {5} !", "la bouilloire", ["bouilloire", "une bouilloire"], [
    m(1, "eau", [assoc("liquide", "genre"), assoc("potable"), inc("bas", "haut", "eau", "au")], { famille: ["aquatique", "aqueux"] }),
    m(2, "prise", [assoc("fiche", "paire"), assoc("électrique"), inc("coût", "prix", "pri")], { famille: ["prendre", "multiprise", "surprise"] }),
    m(3, "vapeur", [syn("buée"), inc("courage", "peur", "peur", undefined, "fin")], { famille: ["vaporiser", "évaporer", "vaporeux"] }),
    m(4, "siffler", [syn("chanter"), assoc("arbitre"), inc("cinq", "six", "si")], { famille: ["sifflet", "sifflement", "siffloter"] }),
    m(5, "thé", [assoc("tisane", "voisin"), inc("hiver", "été", "thé", "té", "fin")], { variantes: ["the"], famille: ["théière"] }),
  ]),
  e("e-403", "Pôle Nord de la cuisine", "Dans la cuisine, cette grande {1} blanche garde au {2} le {3}, les {4} et le {5}.", "le réfrigérateur", ["réfrigérateur", "refrigerateur", "frigo", "le frigo", "frigidaire", "le frigidaire"], [
    m(1, "armoire", [syn("placard"), assoc("normande"), inc("fusil", "arme", "arm")]),
    m(2, "frais", [syn("frisquet"), inc("sœur", "frère", "frai", "frè")], { variantes: ["fraîche", "fraiche"], famille: ["fraîcheur", "rafraîchir"] }),
    m(3, "beurre", [assoc("margarine", "voisin"), inc("courage", "peur", "eurre", "eur", "fin")], { famille: ["beurrer", "beurrier"] }),
    m(4, "yaourts", [assoc("Danone", "marque"), inc("long", "court", "ourts", "ourt", "fin")], { variantes: ["yaourt", "yogourt", "yoghourt"] }),
    m(5, "jambon", [assoc("saucisson", "voisin"), inc("mauvais", "bon", "bon", undefined, "fin")], { famille: ["jambonneau", "jambe"] }),
  ]),
  e("e-404", "Après la pluie", "Après l'{1}, quand le {2} perce les {3}, sept {4} jettent un {5} entre la terre et le firmament.", "l'arc-en-ciel", ["arc-en-ciel", "arc en ciel", "un arc-en-ciel"], [
    m(1, "averse", [syn("ondée"), inc("sans", "avec", "ave")], { famille: ["verser", "renverser"] }),
    m(2, "soleil", [assoc("astre", "genre"), inc("plafond", "sol", "sol")], { famille: ["ensoleillé", "solaire", "tournesol"] }),
    m(3, "nuages", [assoc("cumulus", "exemple"), inc("jour", "nuit", "nu")], { variantes: ["nuage"], famille: ["nuageux", "nuée"] }),
    m(4, "couleurs", [syn("teintes"), inc("vipère", "couleuvre", "coul")], { variantes: ["couleur"], famille: ["coloré", "colorier", "colorer"] }),
    m(5, "pont", [syn("passerelle"), inc("Chine", "Japon", "pont", "pon", "fin")], { famille: ["ponton", "pontife"] }),
  ]),
  e("e-405", "Toujours chez lui", "Il porte sa {1} sur le dos, laisse derrière lui un filet de {2}, rentre ses {3} au moindre danger et dévore la {4} du potager ; en Bourgogne, on le déguste à l'{5}.", "l'escargot", ["escargot", "un escargot", "le colimaçon", "colimaçon", "colimacon"], [
    m(1, "coquille", [assoc("Saint-Jacques", "exemple"), inc("poule", "coq", "coq")], { famille: ["coquillage"] }),
    m(2, "bave", [syn("salive"), inc("haut", "bas", "ba")], { famille: ["baver", "baveux", "bavoir", "bavard"] }),
    m(3, "cornes", [syn("antennes"), assoc("taureau"), inc("âme", "corps", "cor")], { variantes: ["corne"], famille: ["cornu", "licorne", "corner"] }),
    m(4, "salade", [syn("laitue"), inc("propre", "sale", "sal")], { famille: ["saladier", "sel", "salé"] }),
    m(5, "ail", [assoc("oignon", "voisin"), assoc("vampire")], { famille: ["aïoli", "ailloli"] }),
  ]),
  e("e-406", "Carré de légumes", "On y vient {1} des graines, arroser les jeunes {2}, arracher les mauvaises {3}, chasser les {4} et cueillir les {5} bien mûres.", "le potager", ["potager", "le jardin potager", "jardin potager"], [
    m(1, "semer", [syn("cultiver"), assoc("graine"), inc("haïr", "aimer", "mer", undefined, "fin")], { famille: ["semis", "semence", "semeur", "ensemencer", "parsemer"] }),
    m(2, "plants", [syn("pousses"), inc("plafond", "plancher", "plan")], { variantes: ["plant"], famille: ["planter", "plantation", "plante"] }),
    m(3, "herbes", [syn("gazon"), inc("sujet", "verbe", "erbes", "erbe", "fin")], { variantes: ["herbe"], famille: ["herbier", "herbivore", "désherber"] }),
    m(4, "limaces", [assoc("escargot", "voisin"), inc("écrire", "lire", "li")], { variantes: ["limace"], famille: ["limaçon"] }),
    m(5, "tomates", [assoc("poivrons", "voisin"), assoc("ketchup"), inc("brillant", "mat", "mates", "mat", "fin")], { variantes: ["tomate"] }),
  ]),
  e("e-407", "Ciel en colère", "Le {1} gronde, un {2} zèbre le ciel, la {3} tombe à verse ; le chien se cache sous le {4} et l'on éteint l'{5}.", "l'orage", ["orage", "un orage"], [
    m(1, "tonnerre", [assoc("grondement", "voisin"), inc("barrique", "tonneau", "ton")], { famille: ["tonner", "détoner", "détonation"] }),
    m(2, "éclair", [assoc("foudre", "voisin"), assoc("chocolat")], { variantes: ["eclair"], famille: ["éclairer", "clair", "éclairage"] }),
    m(3, "pluie", [syn("averse"), inc("moins", "plus", "plu")], { famille: ["pleuvoir", "pluvieux", "parapluie", "pluvial"] }),
    m(4, "lit", [syn("couche"), assoc("matelas"), inc("bouquin", "livre", "li")], { famille: ["literie", "alité", "s'aliter"] }),
    m(5, "ordinateur", [assoc("souris", "voisin"), assoc("clavier"), inc("argent", "or", "or")], { famille: ["ordonner", "ordre"] }),
  ]),
  e("e-408", "Petite ouvrière", "Dans sa {1}, elle sert sa {2} ; {3}, elle porte des {4} plus lourdes qu'elle et ne prête rien à la {5}.", "la fourmi", ["fourmi", "une fourmi"], [
    m(1, "colonie", [syn("communauté"), assoc("vacances"), inc("glue", "colle", "col")], { famille: ["colon", "coloniser", "colonial"] }),
    m(2, "reine", [syn("souveraine"), inc("caribou", "renne", "reine", "renne")], { famille: ["régner", "règne", "régent"] }),
    m(3, "infatigable", [syn("inlassable"), inc("médecin", "infirmière", "inf")], { famille: ["fatigue", "fatiguer", "fatigant"] }),
    m(4, "charges", [syn("fardeaux"), inc("tank", "char", "char")], { variantes: ["charge"], famille: ["charger", "chargement", "décharger"] }),
    m(5, "cigale", [assoc("grillon", "voisin"), assoc("Provence"), inc("cinq", "six", "ci", "si")]),
  ]),
  e("e-409", "Petite pelote vivante", "Il hiberne sous un {1} de feuilles et croque des {2} la nuit ; menacé, il se roule en {3} et dresse ses {4} ; hélas, la {5} lui est souvent fatale.", "le hérisson", ["hérisson", "herisson", "un hérisson"], [
    m(1, "tas", [syn("monceau"), inc("soucoupe", "tasse", "tas")], { famille: ["entasser", "tasser"] }),
    m(2, "insectes", [assoc("scarabée", "exemple"), inc("commissaire", "inspecteur", "ins")], { variantes: ["insecte"], famille: ["insecticide"] }),
    m(3, "boule", [syn("sphère"), inc("coq", "poule", "oule", undefined, "fin")], { famille: ["boulet", "boulette", "bouler"] }),
    m(4, "épines", [syn("piquants"), inc("Popeye", "épinards", "épin")], { variantes: ["épine", "epines"], famille: ["épineux", "aubépine"] }),
    m(5, "route", [syn("chemin"), assoc("nationale"), inc("blanc", "rouge", "rou")], { famille: ["routier", "autoroute", "déroute"] }),
  ]),
  e("e-410", "Sous les toits", "Tout en haut de la {1}, sous la {2}, on range les {3} et les vieux {4} ; on y monte par une {5} grinçante.", "le grenier", ["grenier", "les combles", "combles"], [
    m(1, "maison", [syn("logis"), inc("tort", "raison", "aison", undefined, "fin")], { famille: ["maisonnette", "maisonnée"] }),
    m(2, "charpente", [syn("ossature"), assoc("Notre-Dame"), inc("tank", "char", "char")], { famille: ["charpentier", "charpenterie"] }),
    m(3, "malles", [syn("coffres"), inc("bien", "mal", "mal")], { variantes: ["malle"], famille: ["mallette"] }),
    m(4, "jouets", [assoc("Lego", "marque"), inc("nuit", "jour", "jou")], { variantes: ["jouet"], famille: ["jouer", "joujou", "joueur"] }),
    m(5, "échelle", [syn("escabeau"), inc("succès", "échec", "éche")], { variantes: ["echelle"], famille: ["échelon", "escalier", "escalader"] }),
  ]),
  e("e-411", "Il avale tout", "Cet {1} engloutit la {2} et les {3} du chat dans un {4} assourdissant ; quand son {5} est plein, il faut le vider.", "l'aspirateur", ["aspirateur", "un aspirateur"], [
    m(1, "appareil", [syn("machine"), assoc("photo"), inc("disparaître", "apparaître", "appar")], { famille: ["appareiller", "pareil"] }),
    m(2, "poussière", [assoc("cendre", "voisin"), assoc("plumeau"), inc("index", "pouce", "pous", "pouc")], { variantes: ["poussiere"], famille: ["poussiéreux", "dépoussiérer", "poudre"] }),
    m(3, "poils", [syn("duvet"), assoc("rasoir"), inc("casserole", "poêle", "poil", "poêl")], { variantes: ["poil"], famille: ["poilu", "épiler"] }),
    m(4, "bruit", [syn("vacarme"), inc("jour", "nuit", "uit", undefined, "fin")], { famille: ["bruyant", "bruitage", "ébruiter"] }),
    m(5, "sac", [syn("besace"), assoc("poubelle")], { famille: ["sacoche", "sachet"] }),
  ]),
  e("e-412", "Rien ne sert de courir", "Sous sa {1} couverte d'{2}, elle peut vivre {3} ans, broute les {4} tombées et, chez La Fontaine, bat le {5} à la course.", "la tortue", ["tortue", "une tortue"], [
    m(1, "carapace", [syn("cuirasse"), inc("rond", "carré", "car")]),
    m(2, "écailles", [assoc("plumes", "voisin"), assoc("serpent"), inc("pierre", "caillou", "cailles", "caill", "fin")], { variantes: ["écaille", "ecailles"], famille: ["écailler", "écaillé"] }),
    m(3, "cent", [assoc("quatre-vingt-dix-neuf", "voisin"), inc("avec", "sans", "cent", "sans")], { famille: ["centaine", "centenaire", "centième", "centime", "pourcentage"] }),
    m(4, "feuilles", [assoc("branches", "voisin"), assoc("automne"), inc("canapé", "fauteuil", "euilles", "euil", "fin")], { variantes: ["feuille"], famille: ["feuillage", "feuillu", "effeuiller"] }),
    m(5, "lièvre", [assoc("lapin", "voisin"), inc("Seguin", "chèvre", "èvre", undefined, "fin")], { variantes: ["lievre"], famille: ["levraut"] }),
  ]),
  e("e-413", "Chandeleur", "On mélange la {1}, les œufs et le {2}, on verse la {3} dans la {4} bien chaude, puis on la fait {5} en l'air.", "la crêpe", ["crêpe", "crepe", "une crêpe", "les crêpes"], [
    m(1, "farine", [assoc("semoule", "voisin"), inc("blague", "farce", "far")], { famille: ["fariner", "enfariné", "farineux"] }),
    m(2, "lait", [assoc("crème", "voisin"), inc("beau", "laid", "lai")], { famille: ["laitier", "laiterie", "allaiter", "laitue", "lacté", "lactose"] }),
    m(3, "pâte", [syn("préparation"), assoc("feuilletée"), inc("maman", "papa", "pâ", "pa")], { variantes: ["pate"], famille: ["pâtisserie", "pâtissier", "pâté", "pâtée"] }),
    m(4, "poêle", [assoc("casserole", "voisin"), inc("pomme", "poire", "poê", "poi")], { variantes: ["poele"], famille: ["poêlon", "poêlée"] }),
    m(5, "sauter", [syn("bondir"), inc("pelle", "seau", "sau", "seau")], { famille: ["saut", "sautiller", "sauterelle", "sauteur"] }),
  ]),
  e("e-414", "Sentinelle de paille", "Planté au milieu du {1}, ce {2} de paille porte un vieux {3} ; ses bras en croix effraient les {4}, sauf les plus {5}.", "l'épouvantail", ["épouvantail", "epouvantail", "un épouvantail"], [
    m(1, "champ", [syn("pré"), inc("danse", "chant", "champ", "chant")], { famille: ["champêtre", "camper", "campagne"] }),
    m(2, "pantin", [syn("marionnette"), inc("bambou", "panda", "pan")]),
    m(3, "chapeau", [syn("couvre-chef"), inc("chien", "chat", "cha")], { famille: ["chapelier", "chapelle"] }),
    m(4, "corbeaux", [assoc("corneille", "voisin"), assoc("fromage"), inc("laid", "beau", "beaux", "beau", "fin")], { variantes: ["corbeau"] }),
    m(5, "malins", [syn("rusés"), inc("femelle", "mâle", "mal", "mâl")], { variantes: ["malin", "maligne", "malignes"], famille: ["malice", "malicieux", "mal"] }),
  ]),
  e("e-415", "Purée de pois", "Un {1} épais couvre la {2} ; on n'y voit pas plus loin que le bout de son {3}, les voitures allument leurs {4} et roulent {5}.", "le brouillard", ["brouillard", "la brume", "brume"], [
    m(1, "voile", [syn("rideau"), assoc("mariée"), inc("voici", "voilà", "voil")], { famille: ["voiler", "dévoiler", "voilette"] }),
    m(2, "campagne", [syn("cambrousse"), inc("mer", "montagne", "agne", undefined, "fin")], { famille: ["campagnard", "champ", "champêtre"] }),
    m(3, "nez", [assoc("bouche", "voisin"), assoc("Pinocchio")], { famille: ["nasal", "nasiller"] }),
    m(4, "feux", [syn("flammes"), assoc("tricolore"), inc("crayon", "feutre", "feu")], { variantes: ["feu"], famille: ["foyer", "feu follet"] }),
    m(5, "lentement", [syn("doucement"), inc("lunettes", "lentilles", "lent")], { famille: ["lent", "lenteur", "ralentir", "ralenti"] }),
  ]),
  e("e-416", "Sauteur des antipodes", "En Australie, il avance par {1} ; la femelle porte son {2} dans sa {3} ; appuyé sur sa {4}, il se bat comme un {5}.", "le kangourou", ["kangourou", "un kangourou"], [
    m(1, "bonds", [syn("sauts"), inc("mauvais", "bon", "bon")], { variantes: ["bond"], famille: ["bondir", "rebondir", "rebond"] }),
    m(2, "petit", [syn("rejeton"), assoc("Poucet"), inc("faim", "appétit", "petit", "pétit", "fin")], { famille: ["petitesse", "rapetisser"] }),
    m(3, "poche", [assoc("sac", "voisin"), assoc("pantalon"), inc("loin", "proche", "oche", undefined, "fin")], { famille: ["pochette", "empocher", "pocher"] }),
    m(4, "queue", [assoc("tête", "paire"), assoc("comète")], { famille: ["caudal"] }),
    m(5, "boxeur", [assoc("Tyson", "exemple"), inc("frère", "sœur", "eur", "œur", "fin")], { famille: ["boxe", "boxer"] }),
  ]),
  e("e-417", "Pluie sur commande", "Le {1} le remplit au {2}, le porte par son {3} et, grâce à sa {4} percée de trous, arrose ses {5}.", "l'arrosoir", ["arrosoir", "un arrosoir"], [
    m(1, "jardinier", [syn("horticulteur"), inc("premier", "dernier", "nier", undefined, "fin")], { famille: ["jardin", "jardinage", "jardiner"] }),
    m(2, "robinet", [assoc("mitigeur", "exemple"), assoc("lavabo"), inc("jupe", "robe", "rob")], { famille: ["robinetterie"] }),
    m(3, "anse", [syn("poignée"), inc("chant", "danse", "anse", undefined, "fin")]),
    m(4, "pomme", [assoc("poire", "voisin"), inc("femme", "homme", "omme", undefined, "fin")], { famille: ["pommier", "pommade", "pommeau"] }),
    m(5, "fleurs", [assoc("rose", "exemple"), assoc("bouquet"), inc("rivière", "fleuve", "fleu")], { variantes: ["fleur"], famille: ["fleurir", "fleuriste", "floral", "floraison"] }),
  ]),
  e("e-418", "Le jaune qui pique", "Ce {1} jaune est si {2} qu'il arrache des {3} ; on en parfume la {4} meringuée et on en arrose les {5}.", "le citron", ["citron", "un citron"], [
    m(1, "fruit", [assoc("pomme", "exemple"), assoc("verger"), inc("jour", "nuit", "uit", undefined, "fin")], { famille: ["fruitier", "fructueux", "fructose"] }),
    m(2, "acide", [syn("aigre"), inc("debout", "assis", "aci", "assi")], { famille: ["acidité", "acidulé", "acidifier"] }),
    m(3, "grimaces", [syn("mimiques"), assoc("singe"), inc("barbecue", "gril", "gri")], { variantes: ["grimace"], famille: ["grimacer", "grimaçant"] }),
    m(4, "tarte", [syn("tourte"), inc("tôt", "tard", "tar")], { famille: ["tartelette", "tartine"] }),
    m(5, "huîtres", [assoc("moules", "voisin"), inc("sept", "huit", "huît", "huit")], { variantes: ["huître", "huitres", "huitre"], famille: ["ostréiculture"] }),
  ]),
  e("e-419", "Le roi des forêts", "Cet {1} majestueux aux racines {2} laisse tomber ses {3}, que se disputent les {4} ; on en tire un {5} très dur.", "le chêne", ["chêne", "chene", "un chêne"], [
    m(1, "arbre", [assoc("sapin", "exemple"), inc("sifflet", "arbitre", "arb")], { famille: ["arbuste", "arboré", "arboriculture"] }),
    m(2, "solides", [syn("robustes"), inc("plafond", "sol", "sol")], { variantes: ["solide"], famille: ["solidité", "solidaire", "consolider"] }),
    m(3, "glands", [assoc("châtaignes", "voisin"), assoc("sanglier")], { variantes: ["gland"], famille: ["glandée"] }),
    m(4, "écureuils", [assoc("rongeur", "genre"), assoc("noisette"), inc("cheval", "écurie", "écur")], { variantes: ["écureuil", "ecureuils", "ecureuil"] }),
    m(5, "bois", [assoc("métal", "voisin"), assoc("menuisier"), inc("manger", "boire", "boi")], { famille: ["boisé", "boiserie", "sous-bois"] }),
  ]),
  e("e-420", "Prince charmant ?", "Ancien {1}, elle vit près de la {2}, attrape les {3} avec sa {4} et se met à {5} le soir venu.", "la grenouille", ["grenouille", "une grenouille"], [
    m(1, "têtard", [assoc("larve", "genre"), inc("tôt", "tard", "tard", undefined, "fin")], { variantes: ["tetard"], famille: ["tête"] }),
    m(2, "mare", [syn("étang"), inc("épouse", "mari", "mar")], { famille: ["marécage", "marais"] }),
    m(3, "mouches", [assoc("guêpes", "voisin"), assoc("tapette"), inc("dur", "mou", "mou")], { variantes: ["mouche"], famille: ["moucheron", "moustique"] }),
    m(4, "langue", [assoc("dents", "voisin"), inc("rapide", "lent", "lan", "len")], { famille: ["langage", "linguiste", "lingual"] }),
    m(5, "coasser", [assoc("crier", "genre"), inc("eucalyptus", "koala", "coa", "koa")], { famille: ["coassement"] }),
  ]),
  e("e-421", "Debout là-dedans !", "Posé sur la {1} de nuit, sa {2} retentit à six {3} ; on tape dessus pour {4} encore un peu sous la {5}.", "le réveil", ["réveil", "reveil", "le réveille-matin", "réveille-matin"], [
    m(1, "table", [assoc("chaise", "paire"), inc("ange", "diable", "able", undefined, "fin")], { famille: ["tablette", "tableau", "attabler"] }),
    m(2, "sonnerie", [syn("carillon"), inc("pleurer", "rire", "rie", "ri", "fin")], { famille: ["sonner", "son", "sonore"] }),
    m(3, "heures", [assoc("minutes", "voisin"), assoc("cadran"), inc("courage", "peur", "eures", "eur", "fin")], { variantes: ["heure"], famille: ["horaire", "horloge"] }),
    m(4, "dormir", [syn("sommeiller"), inc("argenté", "doré", "dor")], { famille: ["dortoir", "endormir", "dormeur"] }),
    m(5, "couette", [syn("édredon"), inc("hibou", "chouette", "ouette", undefined, "fin")]),
  ]),
  e("e-422", "Veillée au chalet", "Sur le {1}, le caquelon fait chauffer le {2} ; chacun y trempe un {3} de pain au bout de sa {4} ; qui le perd paie la {5}.", "la fondue", ["fondue", "la fondue savoyarde", "fondue savoyarde"], [
    m(1, "réchaud", [assoc("Camping-Gaz", "marque"), inc("do", "ré", "ré")], { variantes: ["rechaud"], famille: ["chaud", "chauffer", "réchauffer"] }),
    m(2, "fromage", [assoc("camembert", "exemple"), inc("son", "image", "mage", undefined, "fin")], { famille: ["fromager", "fromagerie"] }),
    m(3, "morceau", [syn("bout"), inc("vivant", "mort", "mor")], { famille: ["morceler", "morcellement"] }),
    m(4, "fourchette", [assoc("couteau", "paire"), inc("cigale", "fourmi", "four")], { famille: ["fourche", "fourchu"] }),
    m(5, "tournée", [syn("virée"), assoc("générale"), inc("rien", "tout", "tou")], { variantes: ["tournee"], famille: ["tour", "tourner", "tournoi"] }),
  ]),
  e("e-423", "Il répète tout", "Cet {1} au plumage {2} vit dans une {3} ; il imite la {4} de son maître et raffole des {5} de tournesol.", "le perroquet", ["perroquet", "un perroquet", "le ara", "ara"], [
    m(1, "oiseau", [assoc("moineau", "exemple"), inc("canard", "oie", "oi")], { famille: ["oiselier", "oisillon"] }),
    m(2, "coloré", [syn("bariolé"), inc("glue", "colle", "col")], { variantes: ["colorée", "colore"], famille: ["couleur", "colorer", "colorier", "coloriage"] }),
    m(3, "cage", [assoc("volière", "voisin"), inc("grenier", "cave", "ca")], { famille: ["encager"] }),
    m(4, "voix", [assoc("chant", "voisin"), assoc("extinction"), inc("voici", "voilà", "voi")], { famille: ["vocal", "vocalise", "vociférer"] }),
    m(5, "graines", [syn("semences"), inc("roi", "reine", "aines", "eine", "fin")], { variantes: ["graine"], famille: ["grain", "égrener"] }),
  ]),
  e("e-424", "Bonne nuit", "Glissé dans sa {1}, garni de {2}, il soutient la {3} du dormeur, sert d'arme lors d'une {4} entre enfants et veille sur nos {5}.", "l'oreiller", ["oreiller", "un oreiller", "le coussin", "coussin"], [
    m(1, "taie", [assoc("housse", "voisin"), inc("parler", "taire", "tai")]),
    m(2, "duvet", [assoc("plumes", "voisin"), assoc("doudoune"), inc("mou", "dur", "du")]),
    m(3, "tête", [syn("crâne"), inc("belle", "bête", "ête", undefined, "fin")], { variantes: ["tete"], famille: ["têtu", "entêté", "têtard"] }),
    m(4, "bataille", [syn("combat"), inc("avion", "bateau", "bat")], { famille: ["battre", "batailler", "bataillon"] }),
    m(5, "rêves", [syn("songes"), inc("professeur", "élève", "êves", "ève", "fin")], { variantes: ["rêve", "reves", "reve"], famille: ["rêver", "rêveur", "rêverie"] }),
  ]),
  e("e-425", "Babar et les siens", "Ce {1} d'Afrique a de larges {2}, une longue {3} et des {4} d'ivoire ; sa {5} est légendaire.", "l'éléphant", ["éléphant", "elephant", "un éléphant"], [
    m(1, "colosse", [syn("géant"), assoc("Rhodes"), inc("glue", "colle", "col")], { famille: ["colossal"] }),
    m(2, "oreilles", [assoc("yeux", "voisin"), inc("argent", "or", "or")], { variantes: ["oreille"], famille: ["oreiller", "oreillons", "auriculaire"] }),
    m(3, "trompe", [assoc("nez", "voisin"), assoc("papillon")], { famille: ["trompette", "trompettiste"] }),
    m(4, "défenses", [assoc("cornes", "voisin"), assoc("ivoire"), inc("victoire", "défaite", "déf")], { variantes: ["défense", "defenses"], famille: ["défendre", "défenseur"] }),
    m(5, "mémoire", [contraire("oubli"), assoc("ordinateur"), inc("pépé", "mémé", "mém")], { variantes: ["memoire"], famille: ["mémoriser", "mémorable", "mémorial"] }),
  ]),
];
