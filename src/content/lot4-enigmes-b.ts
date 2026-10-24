import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, inc, syn } from "./briques";

/**
 * Lot 4 (b) : 25 énigmes de niveau facile (métiers, sports, transports, loisirs, fêtes, école,
 * corps humain, vêtements, musique), rédigées par Claude, à relire (version 2026-10-23).
 * Pistes réécrites le 2026-10-24 : une incitation en dernière brique pour la plupart des mots.
 */
const VERSION = "2026-10-23";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "facile", titre, texte, solution, solutionVariantes, mots };
}

export const LOT4B_ENIGMES: Enigme[] = [
  e("e-426", "Ouvrez grand !", "Il soigne la {1} de son patient installé dans le {2} ; il manie la {3} ; il veille sur votre {4} et vous conseille une bonne {5}.", "le dentiste", ["dentiste", "la dentiste", "un dentiste"], [
    m(1, "carie", [syn("cavité"), inc("bus", "car", "car")], { variantes: ["caries"], famille: ["carier"] }),
    m(2, "fauteuil", [syn("siège"), inc("vrai", "faux", "fau")]),
    m(3, "roulette", [assoc("baccara", "voisin"), assoc("bille"), inc("blond", "roux", "rou")], { famille: ["rouler", "roue", "roulement"] }),
    m(4, "sourire", [contraire("grimace"), assoc("Joconde"), inc("chat", "souris", "souri")], { famille: ["rire", "souriant"] }),
    m(5, "brosse", [assoc("peigne", "voisin"), assoc("poils"), inc("chair", "os", "osse", "os", "fin")], { famille: ["brosser", "brossage"] }),
  ]),
  e("e-427", "Homme en noir", "Sur le {1}, il punit chaque {2} d'un {3} jaune ; il n'hésite pas à {4}, et les {5} le contestent.", "l'arbitre", ["arbitre", "un arbitre"], [
    m(1, "terrain", [syn("pelouse"), assoc("stade"), inc("ciel", "terre", "ter")], { famille: ["terre", "terrestre", "territoire"] }),
    m(2, "faute", [syn("infraction"), inc("vrai", "faux", "fau")], { famille: ["fautif", "fauter"] }),
    m(3, "carton", [syn("avertissement"), inc("bus", "car", "car")], { famille: ["carte", "cartonner", "cartonnage"] }),
    m(4, "siffler", [syn("huer"), assoc("bouilloire"), inc("cinq", "six", "si")], { famille: ["sifflet", "sifflement", "siffloter"] }),
    m(5, "joueurs", [syn("équipiers"), assoc("vestiaire"), inc("minute", "heure", "eurs", "eure", "fin")], { variantes: ["joueur"], famille: ["jouer", "jeu", "jouet"] }),
  ]),
  e("e-428", "Tchou-tchou !", "Sur le {1}, on attend en regardant l'horloge ; il arrive sur la {2} ; on monte dans un {3} ; le {4} vérifie les {5}.", "le train", ["train", "un train"], [
    m(1, "quai", [syn("embarcadère"), inc("Montréal", "Québec", "quai", "qué")], { variantes: ["quais"] }),
    m(2, "voie", [syn("chemin"), assoc("ferrée"), inc("entendre", "voir", "voi")], { famille: ["voyage", "voirie"] }),
    m(3, "wagon", [syn("voiture"), assoc("compartiment"), inc("taureau", "vache", "wa", "va")]),
    m(4, "contrôleur", [syn("inspecteur"), assoc("amende"), inc("pour", "contre", "contr")], { variantes: ["controleur", "contrôleuse"], famille: ["contrôle", "contrôler"] }),
    m(5, "billets", [syn("tickets"), inc("boules", "billes", "bill")], { variantes: ["billet"], famille: ["billetterie"] }),
  ]),
  e("e-429", "Le jeu des Provençaux", "Sur la place du village, on lance le {1}, puis les {2} ; on choisit de {3} ou de {4} ; la partie se termine à l'heure de l'{5}.", "la pétanque", ["pétanque", "petanque"], [
    m(1, "cochonnet", [syn("bouchon"), inc("poule", "coq", "co")]),
    m(2, "boules", [assoc("billes", "voisin"), inc("Bill", "Boule", "boul")], { variantes: ["boule"], famille: ["bouler", "boulet", "bouliste"] }),
    m(3, "pointer", [syn("désigner"), assoc("index"), inc("pied", "poing", "poin")], { famille: ["pointe", "pointeur", "point"] }),
    m(4, "tirer", [contraire("pousser"), assoc("pistolet"), inc("tac", "tic", "ti")], { famille: ["tir", "tireur", "tiroir"] }),
    m(5, "apéritif", [assoc("pastis", "exemple"), assoc("olives")], { variantes: ["aperitif"], famille: ["apéro"] }),
  ]),
  e("e-430", "Hotte sur le dos", "Dans son {1} tiré par des {2}, il descend par la {3} et dépose les {4} au pied du {5}.", "le père Noël", ["père Noël", "pere noel", "le pere noel", "papa Noël"], [
    m(1, "traîneau", [assoc("luge", "voisin"), assoc("chiens"), inc("vos", "nos", "neau", "nos", "fin")], { variantes: ["traineau"], famille: ["traîner", "traîne"] }),
    m(2, "rennes", [assoc("cervidés", "genre"), inc("roi", "reine", "ren", "rein")], { variantes: ["renne"] }),
    m(3, "cheminée", [syn("âtre"), assoc("ramoneur"), inc("cravate", "chemise", "chemi")], { variantes: ["cheminee"] }),
    m(4, "cadeaux", [syn("présents"), inc("aîné", "cadet", "cad")], { variantes: ["cadeau"] }),
    m(5, "sapin", [assoc("conifère", "genre"), assoc("guirlande"), inc("vin", "pain", "pin", "pain", "fin")], { variantes: ["sapins"], famille: ["sapinière"] }),
  ]),
  e("e-431", "Rentrée des classes", "Sur le dos de l'{1}, il contient la {2}, les {3}, la {4} et le {5} pour la récréation.", "le cartable", ["cartable", "un cartable"], [
    m(1, "écolier", [syn("élève"), inc("délier", "lier", "lier", undefined, "fin")], { variantes: ["ecolier"], famille: ["école", "scolaire"] }),
    m(2, "trousse", [syn("étui"), assoc("crayons"), inc("blonde", "rousse", "rousse", undefined, "fin")], { famille: ["trousseau", "retrousser"] }),
    m(3, "cahiers", [syn("carnets"), inc("canoë", "kayak", "cahi", "kay")], { variantes: ["cahier"] }),
    m(4, "règle", [assoc("équerre", "voisin"), assoc("graduée"), inc("Marley", "reggae", "règ", "reg")], { variantes: ["regle"], famille: ["régler", "règlement", "régulier"] }),
    m(5, "goûter", [syn("collation"), inc("café", "thé", "ter", "thé", "fin")], { variantes: ["gouter"], famille: ["goût", "goûteux", "dégoût"] }),
  ]),
  e("e-432", "Battements", "Ce {1} bat dans la {2} ; il envoie le {3} dans les {4} ; on le dit brisé par un {5} d'amour.", "le cœur", ["cœur", "coeur", "le coeur"], [
    m(1, "muscle", [assoc("biceps", "exemple"), inc("Sand", "Musset", "mus")], { famille: ["musclé", "musculaire", "musculation"] }),
    m(2, "poitrine", [syn("thorax"), assoc("côtes"), inc("rayures", "pois", "poi")]),
    m(3, "sang", [syn("hémoglobine"), inc("avec", "sans", "san")], { famille: ["sanguin", "saigner", "sanglant"] }),
    m(4, "artères", [assoc("veines", "paire"), inc("ciel", "terre", "tères", "terre", "fin")], { variantes: ["artère", "arteres"], famille: ["artériel"] }),
    m(5, "chagrin", [syn("peine"), assoc("larmes"), inc("souris", "chat", "cha")], { famille: ["chagriner"] }),
  ]),
  e("e-433", "Toile de Nîmes", "Ce {1} de toile {2}, né chez les {3} américains, se porte avec une {4} et se déchire aux {5}.", "le jean", ["jean", "un jean", "jeans"], [
    m(1, "pantalon", [assoc("jupe", "voisin"), inc("court", "long", "lon", "lon", "fin")]),
    m(2, "bleue", [syn("azurée"), assoc("Schtroumpf")], { variantes: ["bleu", "bleus", "bleues"], famille: ["bleuté", "bleuir"] }),
    m(3, "ouvriers", [syn("travailleurs"), inc("fermer", "ouvrir", "ouvri")], { variantes: ["ouvrier"], famille: ["ouvrage", "œuvre", "ouvrer"] }),
    m(4, "ceinture", [assoc("bretelles", "voisin"), inc("malade", "sain", "cein", "sain")], { famille: ["ceindre", "ceinturer"] }),
    m(5, "genoux", [assoc("coudes", "voisin"), assoc("rotule"), inc("vous", "nous", "noux", "nous", "fin")], { variantes: ["genou"], famille: ["agenouiller", "genouillère"] }),
  ]),
  e("e-434", "Feu de camp", "Le {1} pince ses {2} avec les {3} ; en {4}, on chante autour du feu ; branchée, elle devient {5}.", "la guitare", ["guitare", "une guitare"], [
    m(1, "musicien", [syn("instrumentiste"), inc("Louvre", "musée", "mus")], { variantes: ["musicienne"], famille: ["musique", "musical"] }),
    m(2, "cordes", [syn("ficelles"), inc("âme", "corps", "cor")], { variantes: ["corde"], famille: ["cordage", "cordon", "cordée"] }),
    m(3, "ongles", [assoc("griffes", "voisin"), inc("tante", "oncle", "on")], { variantes: ["ongle"] }),
    m(4, "camping", [syn("bivouac"), inc("pong", "ping", "ping", undefined, "fin")], { famille: ["camp", "camper", "campeur"] }),
    m(5, "électrique", [contraire("acoustique"), inc("vote", "élection", "élec")], { variantes: ["electrique"], famille: ["électricité", "électricien"] }),
  ]),
  e("e-435", "Petite reine", "On s'assoit sur la {1}, on tient le {2}, on appuie sur les {3} ; il faut garder l'{4} ; une crevaison, et il faut changer la {5} à air.", "la bicyclette", ["bicyclette", "le vélo", "vélo", "velo"], [
    m(1, "selle", [assoc("étrier", "voisin"), inc("poivre", "sel", "sel")], { famille: ["seller", "sellier"] }),
    m(2, "guidon", [assoc("volant", "voisin"), inc("houx", "gui", "gui")], { famille: ["guider", "guide"] }),
    m(3, "pédales", [assoc("accélérateur", "exemple"), inc("mémé", "pépé", "pé")], { variantes: ["pédale", "pedales"], famille: ["pédaler", "pédalier"] }),
    m(4, "équilibre", [syn("stabilité"), inc("occupé", "libre", "libre", undefined, "fin")], { variantes: ["equilibre"], famille: ["équilibrer", "déséquilibre", "équilibriste"] }),
    m(5, "chambre", [syn("pièce"), assoc("pneu"), inc("Élysées", "champs", "cham")], { famille: ["chambrer", "chambrée"] }),
  ]),
  e("e-436", "Pivot et ses pièges", "Le {1} lit lentement ; chacun écrit sur sa {2} ; l'{3} est mise à rude épreuve ; on oublie des {4} ; trop de fautes, et c'est le {5}.", "la dictée", ["dictée", "dictee", "une dictée"], [
    m(1, "maître", [syn("instituteur"), inc("centimètre", "mètre", "maître", "mètre")], { variantes: ["maitre", "maîtresse"], famille: ["maîtriser", "maîtrise"] }),
    m(2, "copie", [syn("devoir"), inc("copine", "copain", "cop")], { famille: ["copier", "photocopie"] }),
    m(3, "orthographe", [assoc("grammaire", "voisin"), inc("argent", "or", "or")], { famille: ["orthographier", "orthographique"] }),
    m(4, "accents", [assoc("circonflexe", "exemple"), inc("avec", "sans", "cents", "sans", "fin")], { variantes: ["accent"], famille: ["accentuer"] }),
    m(5, "zéro", [syn("néant"), assoc("pointé")], { variantes: ["zero"] }),
  ]),
  e("e-437", "Au-dessus des nuages", "Dans l'{1}, on dépose ses {2} ; le {3} attend l'autorisation de quitter la {4} ; à bord, l'{5} sert un plateau-repas.", "l'avion", ["avion", "un avion"], [
    m(1, "aéroport", [assoc("Roissy", "exemple"), inc("cochon", "porc", "port", "porc", "fin")], { variantes: ["aeroport"], famille: ["port", "aérien"] }),
    m(2, "valises", [syn("bagages"), inc("vient", "va", "va")], { variantes: ["valise"] }),
    m(3, "pilote", [syn("commandant"), inc("face", "pile", "pil")], { famille: ["piloter", "copilote", "pilotage"] }),
    m(4, "piste", [syn("trace"), assoc("atterrissage"), inc("mieux", "pis", "pis")], { famille: ["pister"] }),
    m(5, "hôtesse", [assoc("steward", "paire"), inc("bas", "haut", "hô", "hau")], { variantes: ["hotesse"], famille: ["hôte"] }),
  ]),
  e("e-438", "Le grand bain", "On plonge dans le {1} ; on enchaîne les {2} en {3} ou en brasse ; les {4} protègent les yeux, le {5} la tête.", "la natation", ["natation", "la nage", "nage"], [
    m(1, "bassin", [syn("piscine"), inc("haut", "bas", "bas")]),
    m(2, "longueurs", [assoc("largeurs", "paire"), inc("Tamise", "Londres", "lon")], { variantes: ["longueur"], famille: ["long", "longer", "allonger"] }),
    m(3, "crawl", [assoc("brasse", "voisin"), inc("acteur", "rôle", "rawl", "rôle", "fin")]),
    m(4, "lunettes", [syn("binocles"), inc("soleil", "lune", "lun")], { variantes: ["lunette"] }),
    m(5, "bonnet", [assoc("écharpe", "voisin"), inc("mauvaise", "bonne", "bonn")], { famille: ["bonneterie"] }),
  ]),
  e("e-439", "Mardi gras", "Les {1} défilent au son des {2} ; chacun aime se {3} ; on lance des {4} ; Rio et Venise en sont les {5}.", "le carnaval", ["carnaval", "un carnaval"], [
    m(1, "chars", [syn("tank"), assoc("fleuri"), inc("souris", "chat", "cha")], { variantes: ["char"], famille: ["charrette", "chariot"] }),
    m(2, "tambours", [assoc("percussion", "genre"), inc("oncle", "tante", "tam", "tan")], { variantes: ["tambour"], famille: ["tambouriner", "tambourin"] }),
    m(3, "déguiser", [syn("travestir"), inc("victoire", "défaite", "dé")], { variantes: ["deguiser"], famille: ["déguisement", "guise"] }),
    m(4, "confettis", [assoc("serpentins", "voisin"), inc("grand", "petit", "tis", "tit", "fin")], { variantes: ["confetti"] }),
    m(5, "capitales", [assoc("Paris", "exemple"), inc("épée", "cape", "cap")], { variantes: ["capitale"], famille: ["capital", "capitaine", "chef"] }),
  ]),
  e("e-440", "Celle qu'on tend", "Au bout du {1}, elle compte cinq {2}, dont le {3} ; la voyante lit dans sa {4} ; l'hiver, on la glisse dans un {5}.", "la main", ["main", "une main"], [
    m(1, "bras", [assoc("jambe", "paire"), inc("Brel", "Brassens", "bras")], { famille: ["brassard", "embrasser", "bracelet"] }),
    m(2, "doigts", [assoc("orteils", "paire"), assoc("bague")], { variantes: ["doigt"], famille: ["doigté", "digital"] }),
    m(3, "pouce", [assoc("index", "voisin"), inc("tirer", "pousser", "pouc", "pouss")]),
    m(4, "paume", [contraire("dos"), inc("os", "peau", "pau", "peau")]),
    m(5, "gant", [assoc("moufle", "voisin"), inc("Mahatma", "Gandhi", "gan")], { variantes: ["gants"], famille: ["ganter", "gantier"] }),
  ]),
  e("e-441", "Soldat du feu", "Au son de la {1}, il enfile son {2}, saute dans le {3} et déroule le {4} ; il sauve aussi les {5} perchés dans les arbres.", "le pompier", ["pompier", "un pompier", "les pompiers", "sapeur-pompier"], [
    m(1, "sirène", [assoc("gyrophare", "voisin"), inc("roi", "reine", "rène", "reine", "fin")], { variantes: ["sirene"] }),
    m(2, "casque", [assoc("képi", "voisin"), assoc("moto")], { famille: ["casquette", "casqué"] }),
    m(3, "camion", [syn("fourgon"), assoc("échelle")], { famille: ["camionnette", "camionneur"] }),
    m(4, "tuyau", [syn("conduit"), inc("ardoise", "tuile", "tuy", "tui")], { variantes: ["tuyaux"], famille: ["tuyauterie"] }),
    m(5, "chats", [syn("matous"), assoc("souris")], { variantes: ["chat"], famille: ["chaton", "chatte"] }),
  ]),
  e("e-442", "Noires et blanches", "Ses {1} cachent des {2} qui frappent les cordes ; on s'assoit sur un {3} pour jouer ses {4} ; Chopin en était un {5}.", "le piano", ["piano", "un piano"], [
    m(1, "touches", [syn("boutons"), assoc("clavier"), inc("rien", "tout", "tou")], { variantes: ["touche"], famille: ["toucher", "attouchement"] }),
    m(2, "marteaux", [assoc("enclume", "paire"), inc("épouse", "mari", "mar")], { variantes: ["marteau"], famille: ["marteler", "martèlement"] }),
    m(3, "tabouret", [assoc("chaise", "voisin"), inc("totem", "tabou", "tabou")]),
    m(4, "gammes", [assoc("arpèges", "voisin"), inc("bêta", "gamma", "gam")], { variantes: ["gamme"] }),
    m(5, "virtuose", [syn("maestro"), inc("point", "virgule", "vir")], { famille: ["virtuosité", "vertu"] }),
  ]),
  e("e-443", "Piste aux étoiles", "Sous le {1}, le {2} fait rire ; le {3} avance sur son fil ; le dompteur fait entrer les {4} ; les acrobates s'élancent du {5}.", "le cirque", ["cirque", "un cirque"], [
    m(1, "chapiteau", [syn("tente"), inc("tard", "tôt", "teau", "tôt", "fin")]),
    m(2, "clown", [syn("pitre"), inc("marteau", "clou", "clo", "clou")], { famille: ["clownerie", "clownesque"] }),
    m(3, "funambule", [syn("équilibriste"), inc("feu", "fumée", "fu")]),
    m(4, "fauves", [assoc("tigres", "exemple"), inc("vrai", "faux", "fau")], { variantes: ["fauve"], famille: ["fauvisme"] }),
    m(5, "trapèze", [assoc("losange", "voisin"), assoc("voltigeur")], { variantes: ["trapeze"], famille: ["trapéziste"] }),
  ]),
  e("e-444", "Talons et semelles", "On la choisit à sa {1} ; on serre ses {2} ; on la cire pour la faire {3} ; le {4} la répare ; Cendrillon en perdit une, de {5}.", "la chaussure", ["chaussure", "une chaussure", "le soulier", "soulier"], [
    m(1, "pointure", [syn("taille"), inc("pied", "poing", "poin")]),
    m(2, "lacets", [syn("cordons"), inc("sol", "la", "la")], { variantes: ["lacet"], famille: ["lacer", "délacer", "lacis"] }),
    m(3, "briller", [syn("luire"), inc("Bardot", "Brigitte", "bri")], { variantes: ["brille"], famille: ["brillant", "brillance"] }),
    m(4, "cordonnier", [assoc("bottier", "voisin"), inc("âme", "corps", "cor")], { famille: ["cordonnerie"] }),
    m(5, "verre", [syn("cristal"), inc("rouge", "vert", "ver")], { famille: ["verrerie", "vitre", "verrier"] }),
  ]),
  e("e-445", "Sous les trottoirs", "On descend sous {1} ; on valide son {2} ; la {3} entre dans la {4} ; aux heures de {5}, on voyage serrés.", "le métro", ["métro", "metro", "le metro", "le métropolitain"], [
    m(1, "terre", [assoc("ciel", "paire"), assoc("planète")], { famille: ["terrain", "terrestre", "enterrer", "territoire"] }),
    m(2, "ticket", [syn("billet"), inc("tac", "tic", "tic")], { variantes: ["tickets"] }),
    m(3, "rame", [assoc("aviron", "voisin"), inc("carême", "ramadan", "ram")], { famille: ["ramer", "rameur"] }),
    m(4, "station", [syn("arrêt"), inc("Liberté", "statue", "sta")], { famille: ["stationner", "stationnement", "stationnaire"] }),
    m(5, "pointe", [syn("extrémité"), assoc("affluence"), inc("pied", "poing", "poin")], { famille: ["point", "pointu", "pointer"] }),
  ]),
  e("e-446", "Jeu, set et match", "Sur le {1} en terre battue, le joueur frappe la {2} avec sa {3} ; elle doit passer au-dessus du {4} ; un {5} gagnant, et le point est marqué.", "le tennis", ["tennis"], [
    m(1, "court", [syn("terrain"), inc("marcher", "courir", "cour")]),
    m(2, "balle", [syn("projectile"), inc("sorcière", "balai", "bal")], { famille: ["ballon", "ballot"] }),
    m(3, "raquette", [assoc("batte", "voisin"), inc("fondue", "raclette", "raq", "rac")]),
    m(4, "filet", [assoc("épuisette", "voisin"), inc("beau", "laid", "let", "laid", "fin")], { famille: ["fil", "filer"] }),
    m(5, "service", [syn("engagement"), assoc("militaire"), inc("biche", "cerf", "ser", "cer")], { famille: ["servir", "serveur", "serviteur"] }),
  ]),
  e("e-447", "Faire un vœu", "On souffle les {1} plantées dans le {2} ; tout le monde chante en {3} ; on déballe les {4} ; et l'on compte une {5} de plus.", "l'anniversaire", ["anniversaire", "un anniversaire"], [
    m(1, "bougies", [syn("chandelles"), assoc("cire")], { variantes: ["bougie"] }),
    m(2, "gâteau", [syn("pâtisserie"), inc("tard", "tôt", "teau", "tôt", "fin")], { variantes: ["gateau", "gâteaux"] }),
    m(3, "chœur", [syn("chorale"), assoc("enfants"), inc("pique", "cœur", "chœur", "cœur")], { variantes: ["choeur", "chœurs"], famille: ["choral", "choriste"] }),
    m(4, "paquets", [syn("colis"), inc("Titanic", "paquebot", "paqu")], { variantes: ["paquet"], famille: ["empaqueter"] }),
    m(5, "ride", [syn("pli"), assoc("front"), inc("pâtes", "riz", "ri")], { variantes: ["rides"], famille: ["rider", "ridé"] }),
  ]),
  e("e-448", "Dix heures, on sort !", "La {1} sonne ; dans la {2}, on saute à la {3} ou l'on joue aux {4} ; quand il pleut, on reste sous le {5}.", "la récréation", ["récréation", "recreation"], [
    m(1, "cloche", [assoc("carillon", "voisin"), assoc("Pâques"), inc("beau", "moche", "oche", undefined, "fin")], { famille: ["clocher", "clochette"] }),
    m(2, "cour", [assoc("jardin", "paire"), inc("long", "court", "cour")], { famille: ["courtisan", "courtois"] }),
    m(3, "marelle", [assoc("élastique", "voisin"), assoc("craie"), inc("épouse", "mari", "mar")]),
    m(4, "billes", [assoc("osselets", "voisin"), inc("garçon", "fille", "illes", "ille", "fin")], { variantes: ["bille"] }),
    m(5, "préau", [syn("abri"), assoc("école"), inc("prairie", "pré", "pré")], { variantes: ["preau"] }),
  ]),
  e("e-449", "Une coupe, s'il vous plaît", "Après le {1}, il sort ses {2} et son {3} ; il égalise la {4} et dégage la {5}.", "le coiffeur", ["coiffeur", "la coiffeuse", "coiffeuse", "un coiffeur"], [
    m(1, "shampooing", [assoc("savon", "voisin"), assoc("cheveux"), inc("pied", "poing", "pooing", "poing", "fin")], { variantes: ["shampoing", "shampooings"] }),
    m(2, "ciseaux", [assoc("tondeuse", "voisin"), inc("la", "si", "ci", "si")], { variantes: ["ciseau"], famille: ["ciseler", "ciselure"] }),
    m(3, "peigne", [assoc("brosse", "voisin"), inc("guerre", "paix", "pei", "pai")], { famille: ["peigner", "peignoir"] }),
    m(4, "frange", [syn("bordure"), assoc("front"), inc("euro", "franc", "fran")], { famille: ["franger"] }),
    m(5, "nuque", [syn("cou"), inc("habillé", "nu", "nu")]),
  ]),
  e("e-450", "Bal musette", "Cet {1} à soufflet anime le bal {2} ; ses {3} passent sur les épaules ; on danse la {4} dans les {5} au bord de l'eau.", "l'accordéon", ["accordéon", "accordeon", "un accordéon"], [
    m(1, "instrument", [syn("outil"), assoc("musique"), inc("papa", "maman", "ment", "man", "fin")], { famille: ["instrumental", "instrumentiste"] }),
    m(2, "populaire", [syn("apprécié"), assoc("Front"), inc("Olive", "Popeye", "pop")], { famille: ["peuple", "population", "popularité"] }),
    m(3, "bretelles", [assoc("ceinture", "voisin"), inc("il", "elle", "elles", "elle", "fin")], { variantes: ["bretelle"] }),
    m(4, "valse", [assoc("tango", "voisin"), inc("dame", "valet", "val")], { famille: ["valser", "valseur"] }),
    m(5, "guinguettes", [syn("buvette"), assoc("Marne"), inc("perte", "gain", "guin", "gain")], { variantes: ["guinguette"] }),
  ]),
];
