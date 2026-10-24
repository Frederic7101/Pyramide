import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, inc, precise, syn } from "./briques";

/**
 * Lot 5 (b) : 25 énigmes de niveau moyen (sentiments et caractères, société et institutions,
 * littérature et contes, mythes et légendes, objets anciens, mer et voyages), rédigées par Claude,
 * à relire (version 2026-10-23).
 */
const VERSION = "2026-10-23";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "moyen", titre, texte, solution, solutionVariantes, mots };
}

export const LOT5B_ENIGMES: Enigme[] = [
  e("e-526", "Le monstre aux yeux verts", "Rongé par le {1}, Othello voit en Desdémone une épouse {2} ; ce {3} le rend {4}, jusqu'au {5}.", "la jalousie", ["jalousie", "le jaloux"], [
    m(1, "soupçon", [syn("suspicion"), inc("potage", "soupe", "soup")], { variantes: ["soupcon"], famille: ["soupçonner", "soupçonneux"] }),
    m(2, "infidèle", [syn("volage"), assoc("adultère")], { variantes: ["infidele"], famille: ["fidèle", "fidélité", "infidélité"] }),
    m(3, "tourment", [syn("supplice"), inc("Eiffel", "tour", "tour")], { famille: ["tourmenter"] }),
    m(4, "possessif", [syn("exclusif"), assoc("pronom")], { variantes: ["possessive"], famille: ["posséder", "possession"] }),
    m(5, "crime", [syn("meurtre"), assoc("passionnel")], { famille: ["criminel"] }),
  ]),
  e("e-527", "Rouge aux joues", "Ce garçon {1} se sent {2} dès qu'on lui parle ; l'{3} le paralyse ; il fuit les {4} et cultive la {5}.", "la timidité", ["timidité", "timidite", "le timide"], [
    m(1, "réservé", [syn("retenu"), inc("do", "ré", "ré")], { variantes: ["reserve"], famille: ["réserve", "réserver", "réservation"] }),
    m(2, "emprunté", [syn("embarrassé"), assoc("prêt", "paire")], { variantes: ["emprunte"], famille: ["emprunt", "emprunter", "emprunteur"] }),
    m(3, "appréhension", [syn("crainte"), inc("avant", "après", "appr", "apr")], { variantes: ["apprehension"], famille: ["appréhender"] }),
    m(4, "foules", [syn("multitude"), assoc("bain")], { variantes: ["foule"], famille: ["fouler"] }),
    m(5, "discrétion", [syn("effacement"), assoc("assurée"), inc("vinyle", "disque", "disc", "disque")], { variantes: ["discretion"], famille: ["discret", "discrètement", "discerner"] }),
  ]),
  e("e-528", "La cassette d'Harpagon", "Ce vieux {1} enterre son {2} au jardin ; il ne cesse de {3} sur tout ; sa {4} le perd : il ne lâcherait pas un {5}.", "l'avarice", ["avarice", "l'avare"], [
    m(1, "radin", [syn("pingre"), inc("carotte", "radis", "rad")], { variantes: ["radine"], famille: ["radinerie"] }),
    m(2, "magot", [syn("trésor"), assoc("matelas"), inc("papa", "maman", "ma")]),
    m(3, "lésiner", [syn("chipoter"), assoc("dépense"), inc("blessure", "lésion", "lés")], { variantes: ["lesiner"], famille: ["lésine"] }),
    m(4, "rapacité", [syn("cupidité"), assoc("vautour")], { variantes: ["rapacite"], famille: ["rapace"] }),
    m(5, "sou", [syn("centime"), assoc("neuf")]),
  ]),
  e("e-529", "Voir rouge", "Pris d'une {1} noire, il se met à {2}, devient {3} ; ses {4} effraient tout le monde ; il lui faudra du temps pour se {5}.", "la colère", ["colère", "colere", "la fureur"], [
    m(1, "rage", [syn("furie"), assoc("dents")], { famille: ["rager", "enragé", "rageur"] }),
    m(2, "trépigner", [syn("piétiner"), assoc("enfant"), inc("décès", "trépas", "trép")], { variantes: ["trepigner"], famille: ["trépignement"] }),
    m(3, "écarlate", [syn("cramoisi"), assoc("lettre")], { variantes: ["ecarlate"] }),
    m(4, "jurons", [syn("grossièretés"), assoc("Haddock"), inc("pantalon", "jupe", "ju")], { variantes: ["juron"], famille: ["jurer", "juré"] }),
    m(5, "calmer", [syn("apaiser"), assoc("nerfs")], { famille: ["calme", "calmant"] }),
  ]),
  e("e-530", "Un plat qui se mange froid", "Trahi, il ne pardonne pas l'{1} ; son {2} grandit au château d'If ; Monte-Cristo prépare ses {3} avec une froideur {4} : le {5} des traîtres sera exemplaire.", "la vengeance", ["vengeance", "la revanche"], [
    m(1, "affront", [syn("outrage"), assoc("laver")], { famille: ["front", "affronter"] }),
    m(2, "ressentiment", [syn("rancœur"), inc("similitude", "ressemblance", "ressen", "ressem")], { famille: ["ressentir", "sentir", "sentiment"] }),
    m(3, "représailles", [syn("rétorsions"), assoc("guerre"), inc("déjeuner", "repas", "rep")], { variantes: ["represailles"] }),
    m(4, "implacable", [syn("inexorable"), assoc("ennemi"), inc("armoire", "placard", "pla", "placard", "milieu")]),
    m(5, "châtiment", [syn("punition"), assoc("crime"), inc("félin", "chat", "chat")], { variantes: ["chatiment"], famille: ["châtier"] }),
  ]),
  e("e-531", "La boîte de Pandore", "Cette {1} passe ses journées à {2} ses voisins, l'œil collé à la {3} ; aucun {4} ne lui résiste : c'est un bien {5} défaut.", "la curiosité", ["curiosité", "curiosite", "le curieux"], [
    m(1, "commère", [syn("pipelette"), assoc("ragots"), inc("père", "mère", "mère", undefined, "fin")], { variantes: ["commere"] }),
    m(2, "espionner", [syn("épier"), assoc("voisins"), inc("ouest", "est", "es")], { famille: ["espion", "espionnage"] }),
    m(3, "serrure", [assoc("clé", "paire"), assoc("trou")], { famille: ["serrer", "serrurier"] }),
    m(4, "secret", [syn("mystère"), assoc("défense")], { famille: ["secrète", "secrètement", "secrétaire"] }),
    m(5, "vilain", [syn("méchant"), assoc("canard")], { variantes: ["vilaine"] }),
  ]),
  e("e-532", "Les bras croisés", "L'{1} est son seul horizon : une {2} à midi dans un {3}, {4} le soir sur les boulevards ; l'Église y voit un {5} capital.", "la paresse", ["paresse", "le paresseux"], [
    m(1, "oisiveté", [syn("désœuvrement"), assoc("vices")], { variantes: ["oisivete"], famille: ["oisif"] }),
    m(2, "sieste", [syn("roupillon"), assoc("après-midi")]),
    m(3, "hamac", [assoc("transat", "voisin"), assoc("suspendu")]),
    m(4, "flâner", [syn("musarder"), assoc("badaud")], { variantes: ["flaner"], famille: ["flâneur", "flânerie"] }),
    m(5, "péché", [syn("faute"), assoc("mignon")], { variantes: ["peche"], famille: ["pécher", "pécheur"] }),
  ]),
  e("e-533", "Salle des pas perdus", "Le {1} comparaît ; le {2} consigne les débats ; le procureur prononce son {3} ; les {4} se retirent avant le {5}.", "le tribunal", ["tribunal", "le palais de justice", "la cour d'assises", "le procès"], [
    m(1, "prévenu", [syn("accusé"), inc("prairie", "pré", "pré")], { variantes: ["prevenu"], famille: ["prévenir", "prévention", "venir"] }),
    m(2, "greffier", [assoc("clerc", "voisin"), assoc("audience"), inc("Athènes", "Grèce", "gre", "grè")], { famille: ["greffe"] }),
    m(3, "réquisitoire", [contraire("plaidoirie"), assoc("procureur")], { variantes: ["requisitoire"], famille: ["requérir", "réquisition"] }),
    m(4, "jurés", [assoc("assesseurs", "voisin"), assoc("délibération"), inc("pantalon", "jupe", "ju")], { variantes: ["juré", "jures"], famille: ["jurer", "jury"] }),
    m(5, "verdict", [syn("sentence"), inc("rouge", "vert", "ver")]),
  ]),
  e("e-534", "Un dimanche à l'école", "Les {1} ont fait campagne ; le citoyen passe par l'{2}, glisse son {3} dans l'urne ; le soir vient le {4}, puis on commente l'{5}.", "l'élection", ["élection", "election", "le scrutin", "le vote"], [
    m(1, "candidats", [syn("prétendants"), assoc("programme")], { variantes: ["candidat"], famille: ["candidature"] }),
    m(2, "isoloir", [syn("cabine"), assoc("rideau"), assoc("urne")], { famille: ["isoler", "isolé", "isolement"] }),
    m(3, "bulletin", [assoc("urne", "paire"), assoc("nul"), assoc("scolaire")], { famille: ["bulle"] }),
    m(4, "dépouillement", [syn("décompte"), assoc("scrutateurs")], { variantes: ["depouillement"], famille: ["dépouiller", "dépouille"] }),
    m(5, "abstention", [contraire("participation"), assoc("boycott")], { famille: ["abstenir", "abstentionniste"] }),
  ]),
  e("e-535", "Pour le meilleur et pour le pire", "Après les {1}, on échange l'{2} devant le maire et les {3} ; jadis la promise préparait son {4} ; on fête ensuite les {5}.", "le mariage", ["mariage", "l'union"], [
    m(1, "fiançailles", [syn("accordailles"), assoc("bague")], { variantes: ["fiancailles"], famille: ["fiancé", "fiancer", "confiance"] }),
    m(2, "alliance", [syn("anneau"), assoc("OTAN")], { famille: ["allier", "allié"] }),
    m(3, "témoins", [syn("garants"), assoc("relais")], { variantes: ["témoin", "temoins"], famille: ["témoigner", "témoignage"] }),
    m(4, "trousseau", [syn("linge"), assoc("clés")]),
    m(5, "noces", [syn("épousailles"), assoc("or")], { variantes: ["noce"] }),
  ]),
  e("e-536", "Je sens la chair fraîche", "Chaussé de {1} de sept lieues, ce {2} rêve de {3} sept frères ; il égorge ses filles, trompé par leurs {4}, échangées par le petit dernier, celui des {5}.", "l'ogre", ["ogre", "un ogre"], [
    m(1, "bottes", [assoc("cuissardes", "exemple"), assoc("éperons")], { variantes: ["botte"], famille: ["botté", "bottine"] }),
    m(2, "colosse", [syn("géant"), assoc("Rhodes")], { famille: ["colossal"] }),
    m(3, "dévorer", [syn("engloutir"), assoc("livres")], { variantes: ["devorer"], famille: ["vorace", "dévoreur"] }),
    m(4, "couronnes", [syn("diadèmes"), assoc("rois")], { variantes: ["couronne"], famille: ["couronner", "couronnement"] }),
    m(5, "cailloux", [syn("pierres"), assoc("Poucet")], { variantes: ["caillou"], famille: ["caillouteux"] }),
  ]),
  e("e-537", "Maître Corbeau", "Ce court {1} met en scène des {2} qui parlent ; écrit en {3}, il se clôt sur une {4} ; La Fontaine y cherche à plaire et à {5}.", "la fable", ["fable", "l'apologue"], [
    m(1, "récit", [syn("narration"), inc("corail", "récif", "réci")], { variantes: ["recit"], famille: ["réciter", "récitation"] }),
    m(2, "animaux", [syn("bêtes"), assoc("zoo")], { famille: ["animal", "animalier"] }),
    m(3, "vers", [assoc("alexandrins", "exemple"), assoc("rimes"), inc("rouge", "vert", "ver")], { famille: ["versification", "versifier"] }),
    m(4, "moralité", [syn("leçon"), assoc("douteuse")], { variantes: ["moralite", "morale"], famille: ["moral", "morale"] }),
    m(5, "instruire", [syn("éduquer"), assoc("juge")], { famille: ["instruction", "instruit", "instructeur"] }),
  ]),
  e("e-538", "Ronsard pour Hélène", "Deux {1}, deux {2}, des {3} embrassées et une {4} saisissante : ce poème {5} fut le favori de la Pléiade.", "le sonnet", ["sonnet", "un sonnet"], [
    m(1, "quatrains", [assoc("strophes", "genre"), assoc("Nostradamus")], { variantes: ["quatrain"], famille: ["quatre"] }),
    m(2, "tercets", [assoc("strophes", "genre"), assoc("Dante"), inc("ciel", "terre", "ter")], { variantes: ["tercet"], famille: ["tiers"] }),
    m(3, "rimes", [assoc("raison", "paire"), assoc("croisées")], { variantes: ["rime"], famille: ["rimer"] }),
    m(4, "chute", [syn("dégringolade"), assoc("Niagara")], { famille: ["choir"] }),
    m(5, "ciselé", [syn("sculpté"), assoc("orfèvre")], { variantes: ["cisele", "ciselée"], famille: ["ciseler", "ciseau", "ciseaux"] }),
  ]),
  e("e-539", "Attaché au mât", "Perchée sur les {1}, elle lance son {2} pour {3} les {4} qui passent ; Andersen lui prête une {5} de poisson.", "la sirène", ["sirène", "sirene", "les sirènes"], [
    m(1, "écueils", [syn("récifs"), assoc("obstacles"), inc("monnaie", "écu", "écu")], { variantes: ["écueil", "ecueils"] }),
    m(2, "chant", [syn("mélodie"), assoc("cygne")], { famille: ["chanter", "chanson", "chanteur"] }),
    m(3, "charmer", [syn("envoûter"), assoc("serpent")], { famille: ["charme", "charmant", "charmeur"] }),
    m(4, "matelots", [syn("marins"), assoc("rayures"), inc("papa", "maman", "ma")], { variantes: ["matelot"] }),
    m(5, "queue", [syn("file"), assoc("comète")]),
  ]),
  e("e-540", "Gardien du trésor", "Tapi dans sa {1}, il déploie ses {2} et crache des {3} ; seul un {4} pourra le {5}.", "le dragon", ["dragon"], [
    m(1, "caverne", [syn("grotte"), assoc("Sésame")], { famille: ["cave", "caveau"] }),
    m(2, "ailes", [assoc("élytres", "exemple"), assoc("moulin")], { variantes: ["aile"], famille: ["ailé", "aileron"] }),
    m(3, "flammes", [assoc("feu", "voisin"), assoc("olympique")], { variantes: ["flamme"], famille: ["flamber", "flambeau", "enflammer"] }),
    m(4, "chevalier", [syn("paladin"), assoc("Arthur")], { famille: ["cheval", "chevalerie", "chevaleresque"] }),
    m(5, "terrasser", [syn("abattre"), assoc("lance"), inc("ciel", "terre", "ter")], { famille: ["terre", "terrasse", "terrain"] }),
  ]),
  e("e-541", "Le comte des Carpates", "Il plante ses {1} dans les cous, dort le jour dans un {2}, fuit l'{3} et redoute l'{4} ; un {5} dans le cœur l'achève.", "le vampire", ["vampire"], [
    m(1, "crocs", [syn("canines"), assoc("loup")], { variantes: ["croc"] }),
    m(2, "cercueil", [syn("sarcophage"), assoc("croque-mort")]),
    m(3, "ail", [assoc("échalote", "voisin"), assoc("gousse")]),
    m(4, "aube", [syn("aurore"), assoc("communiant")], { famille: ["aubade"] }),
    m(5, "pieu", [syn("piquet"), assoc("lit", "autre")]),
  ]),
  e("e-542", "La dame de Cluny", "Sur la {1}, elle incarne la {2} ; seule une {3} peut l'apprivoiser ; ce cheval {4} à une seule défense est un animal {5}.", "la licorne", ["licorne"], [
    m(1, "tapisserie", [syn("tenture"), assoc("Bayeux")], { famille: ["tapis", "tapissier", "tapisser"] }),
    m(2, "pureté", [syn("innocence"), assoc("cristal")], { variantes: ["purete"], famille: ["pur", "purifier", "purification"] }),
    m(3, "vierge", [syn("pucelle"), assoc("Marie")], { famille: ["virginité", "virginal"] }),
    m(4, "blanc", [syn("immaculé"), assoc("neige")], { variantes: ["blanche"], famille: ["blancheur", "blanchir"] }),
    m(5, "fabuleux", [syn("mythique"), assoc("destin")], { famille: ["fable", "fabuliste"] }),
  ]),
  e("e-543", "Piqûre fatale", "Sa roue tourne et le {1} se garnit de {2} ; le pied presse la {3} ; la {4} y passe ses veillées ; la Belle s'y pique et tombe dans un long {5}.", "le rouet", ["rouet"], [
    m(1, "fuseau", [assoc("bobine", "voisin"), assoc("horaire")]),
    m(2, "laine", [syn("toison"), assoc("pelote")], { famille: ["lainage", "laineux"] }),
    m(3, "pédale", [assoc("embrayage", "voisin"), assoc("douce")], { variantes: ["pedale"], famille: ["pédaler", "pédalier", "pédestre"] }),
    m(4, "fileuse", [syn("tisserande"), assoc("quenouille")], { famille: ["filer", "fil", "filature"] }),
    m(5, "sommeil", [syn("léthargie"), assoc("Morphée")], { famille: ["sommeiller", "somme", "somnoler", "somnifère"] }),
  ]),
  e("e-544", "La voix de son maître", "Un grand {1} de cuivre, une {2} à tourner, une {3} qui court sur le {4} ; le son grésille quand il est {5}.", "le gramophone", ["gramophone", "le phonographe", "phonographe"], [
    m(1, "pavillon", [syn("drapeau"), assoc("oreille")]),
    m(2, "manivelle", [syn("poignée"), assoc("orgue")]),
    m(3, "aiguille", [assoc("fil", "paire"), assoc("montre")], { famille: ["aiguillon", "aiguiser"] }),
    m(4, "disque", [syn("vinyle"), assoc("platine")], { famille: ["discothèque"] }),
    m(5, "rayé", [syn("strié"), assoc("zèbre"), assoc("carte")], { variantes: ["raye"], famille: ["raie", "rayure", "rayer"] }),
  ]),
  e("e-545", "Corps et biens", "Pris dans la {1}, le navire heurte un récif ; sa {2} se brise ; il va {3} ; on met les {4} à la mer ; les {5} sont rares.", "le naufrage", ["naufrage", "un naufrage"], [
    m(1, "tempête", [syn("tourmente"), assoc("Shakespeare")], { variantes: ["tempete"], famille: ["tempêter", "temps"] }),
    m(2, "coque", [assoc("carène", "voisin"), assoc("œuf")]),
    m(3, "sombrer", [syn("couler"), assoc("folie")], { famille: ["sombre"] }),
    m(4, "canots", [syn("chaloupes"), assoc("sauvetage"), inc("thé", "café", "ca")], { variantes: ["canot"] }),
    m(5, "rescapés", [syn("survivants"), inc("partir", "rester", "res")], { variantes: ["rescapé", "rescapes"] }),
  ]),
  e("e-546", "Jambe de bois", "Un {1} sur l'œil, un {2} au poing, il se lance à l'{3} ; il enterre son {4} sur une île ; un {5} sur l'épaule répète ses jurons.", "le pirate", ["pirate", "le flibustier", "le boucanier", "le corsaire"], [
    m(1, "bandeau", [syn("serre-tête"), assoc("borgne")], { famille: ["bande", "bander"] }),
    m(2, "sabre", [assoc("épée", "voisin"), assoc("laser")], { famille: ["sabrer"] }),
    m(3, "abordage", [syn("assaut"), assoc("grappin")], { famille: ["bord", "aborder", "abord", "border"] }),
    m(4, "butin", [syn("magot"), assoc("pillage")]),
    m(5, "perroquet", [assoc("ara", "exemple"), assoc("répéter")]),
  ]),
  e("e-547", "Le bal de Cendrillon", "D'un coup de baguette, elle change une {1} en {2} ; avant {3}, sa filleule doit fuir le bal et y perd sa {4} : que de {5} !", "la fée", ["fée", "fee", "la bonne fée", "la fée marraine"], [
    m(1, "citrouille", [syn("potiron"), assoc("Halloween")]),
    m(2, "carrosse", [syn("calèche"), assoc("Cendrillon")]),
    m(3, "minuit", [assoc("midi", "paire"), assoc("messe")], { famille: ["nuit"] }),
    m(4, "pantoufle", [syn("chausson"), assoc("vair")]),
    m(5, "sortilèges", [syn("enchantements"), inc("entrée", "sortie", "sort")], { variantes: ["sortilège", "sortileges"], famille: ["sort", "sorcier", "sorcière"] }),
  ]),
  e("e-548", "Avant le stylo-bille", "Logé dans le trou du {1}, il attendait l'{2}, qui venait y {3} sa plume ; un {4} séchait ensuite les {5}.", "l'encrier", ["encrier", "un encrier"], [
    m(1, "pupitre", [syn("bureau"), assoc("partition")]),
    m(2, "écolier", [syn("élève"), assoc("blouse"), inc("délier", "lier", "lier", undefined, "fin")], { variantes: ["ecolier"], famille: ["école", "scolaire"] }),
    m(3, "tremper", [syn("mouiller"), assoc("acier")], { famille: ["trempe", "détremper"] }),
    m(4, "buvard", [assoc("papier", "genre"), assoc("absorbant")], { famille: ["boire", "buveur"] }),
    m(5, "taches", [syn("salissures"), assoc("léopard")], { variantes: ["tache"], famille: ["tacher", "entacher"] }),
  ]),
  e("e-549", "La dîme et la gabelle", "Chaque {1} reçoit l'avis du {2} ; il paie selon ses {3}, après sa {4} annuelle ; la {5} est sévèrement punie.", "l'impôt", ["impôt", "impot", "les impôts", "la fiscalité"], [
    m(1, "contribuable", [syn("redevable"), assoc("fisc"), inc("pour", "contre", "contr")], { famille: ["contribuer", "contribution", "tribut"] }),
    m(2, "percepteur", [syn("receveur"), inc("huître", "perle", "per")], { famille: ["percevoir", "perception"] }),
    m(3, "revenus", [syn("rentrées"), precise(contraire("dépenses"), "rentrées amène aussi la rentrée scolaire ; dépenses ne garde que le sens financier")], { variantes: ["revenu"], famille: ["revenir", "venir"] }),
    m(4, "déclaration", [syn("proclamation"), assoc("amour")], { variantes: ["declaration"], famille: ["déclarer", "clair"] }),
    m(5, "fraude", [syn("tricherie"), assoc("électorale")], { famille: ["frauder", "fraudeur", "frauduleux"] }),
  ]),
  e("e-550", "L'œil de la vigie", "Ses {1} rapprochent le {2} ; le capitaine y guette le {3} qui pointe à l'{4} ; il faut la {5} avant de la porter à son œil.", "la longue-vue", ["longue-vue", "longue vue", "la lunette", "lunette", "la lunette d'approche"], [
    m(1, "lentilles", [syn("verres"), assoc("saucisse")], { variantes: ["lentille"] }),
    m(2, "lointain", [syn("distant"), assoc("passé")], { famille: ["loin", "éloigner"] }),
    m(3, "corsaire", [syn("flibustier"), assoc("Surcouf")]),
    m(4, "horizon", [syn("perspective"), assoc("marin"), inc("argent", "or", "hor", "or")], { famille: ["horizontal"] }),
    m(5, "déployer", [syn("étendre"), assoc("ailes")], { variantes: ["deployer"], famille: ["ployer", "déploiement", "plier"] }),
  ]),
];
