import type { Brique, Enigme, MotEnigme } from "../engine/types";
import { assoc, contraire, decl, inc, precise, syn } from "./briques";

/**
 * Lot 6 : 25 énigmes de niveau difficile (mots rares ou abstraits), rédigées par Claude, à relire
 * (version 2026-10-24). Rédaction selon les consignes de l'utilisateur : 1re brique synonyme,
 * contraire ou association forte ; pas de briques redondantes ; familles de racine déclarées ;
 * une brique = un mot ; incitation en dernière brique quand un mot reste ambigu.
 */
const VERSION = "2026-10-24";

function m(rang: number, reponse: string, briques: Brique[], options: { variantes?: string[]; famille?: string[]; mise?: number } = {}): MotEnigme {
  const { mise = briques.length, ...reste } = options;
  return { rang, reponse, mise, briques, ...reste };
}

function e(id: string, titre: string, texte: string, solution: string, solutionVariantes: string[], mots: MotEnigme[]): Enigme {
  return { id, version: VERSION, difficulte: "difficile", titre, texte, solution, solutionVariantes, mots };
}

export const LOT6_ENIGMES: Enigme[] = [
  e("e-351", "Philosopher au marteau", "Si tout est {1} et qu'aucune {2} ne tient, il ne reste que le {3} ; Nietzsche y voyait le {4} de l'Europe, Camus lui opposait la {5}.", "le nihilisme", ["nihilisme", "le nihiliste", "nihiliste"], [
    m(1, "vain", [syn("futile"), inc("dix-neuf", "vingt", "vain", "vingt")], { variantes: ["vaine"], famille: ["vanité", "vainement", "vanter"] }),
    m(2, "valeur", [syn("prix"), assoc("morale")], { famille: ["valoir", "valable", "évaluer", "valeureux"] }),
    m(3, "néant", [syn("vide"), assoc("Sartre")], { variantes: ["neant"], famille: ["anéantir", "fainéant"] }),
    m(4, "déclin", [syn("décadence"), assoc("Occident")], { variantes: ["declin"], famille: ["décliner", "déclinaison"] }),
    m(5, "révolte", [syn("rébellion"), assoc("Camus")], { variantes: ["revolte"], famille: ["révolter", "révolté", "révolution", "volte"] }),
  ]),
  e("e-352", "Le chagrin d'Écho", "Épris de son propre {1}, il réclame une {2} constante ; Freud y voyait un repli de la {3} sur le moi ; son {4} d'autrui masque souvent une grande {5}.", "le narcissisme", ["narcissisme", "le narcissique", "narcissique"], [
    m(1, "reflet", [syn("image"), assoc("miroir")], { famille: ["refléter", "réflexion", "réfléchir"] }),
    m(2, "flatterie", [syn("flagornerie"), assoc("corbeau")], { famille: ["flatter", "flatteur"] }),
    m(3, "libido", [syn("désir"), assoc("Freud"), inc("matelas", "lit", "li")], { famille: ["libidineux"] }),
    m(4, "mépris", [syn("dédain"), assoc("Godard")], { variantes: ["mepris"], famille: ["mépriser", "méprisant", "prix", "priser"] }),
    m(5, "fragilité", [syn("faiblesse"), assoc("verre")], { variantes: ["fragilite"], famille: ["fragile", "fragiliser"] }),
  ]),
  e("e-353", "L'art de se fondre", "Le {1} se fait brindille, le {2} change de couleur ; ce {3} naturel trompe le {4} ; inoffensif, le syrphe se déguise en guêpe {5}.", "le mimétisme", ["mimétisme", "mimetisme"], [
    m(1, "phasme", [assoc("insecte", "genre"), assoc("brindille")], { variantes: ["phasmes"] }),
    m(2, "caméléon", [assoc("lézard", "genre"), assoc("couleur")], { variantes: ["cameleon"] }),
    m(3, "camouflage", [syn("dissimulation"), assoc("kaki")], { famille: ["camoufler"] }),
    m(4, "prédateur", [syn("chasseur"), precise(contraire("proie"), "chasseur amène aussi tireur ou chasseur alpin ; proie fixe le sens animal")], { variantes: ["predateur"], famille: ["prédation", "prédatrice"] }),
    m(5, "venimeuse", [syn("toxique"), assoc("dard")], { variantes: ["venimeux"], famille: ["venin"] }),
  ]),
  e("e-354", "Donnant, donnant", "Le lichen unit une {1} et un {2} ; dans cette {3}, chacun tire {4} de l'autre, à la différence du {5}, qui ne fait que prendre.", "la symbiose", ["symbiose"], [
    m(1, "algue", [syn("goémon"), assoc("spiruline", "exemple")], { variantes: ["algues"] }),
    m(2, "champignon", [assoc("cèpe", "exemple"), assoc("moisissure")], { famille: ["champignonnière"] }),
    m(3, "entraide", [syn("solidarité"), assoc("mutuelle"), inc("sortie", "entrée", "entr")], { famille: ["aide", "aider", "entraider"] }),
    m(4, "profit", [syn("avantage"), inc("élève", "professeur", "prof")], { famille: ["profiter", "profitable", "profiteur"] }),
    m(5, "parasite", [syn("pique-assiette"), assoc("tique", "exemple")], { famille: ["parasiter", "parasitisme", "parasitaire"] }),
  ]),
  e("e-355", "Le champignon qui guérit", "Une {1} poussée par {2} sur une boîte de Petri, et les {3} périssent : cette {4} de Fleming vint à bout de mainte {5}.", "la pénicilline", ["pénicilline", "penicilline"], [
    m(1, "moisissure", [syn("pourriture"), assoc("roquefort")], { famille: ["moisi", "moisir"] }),
    m(2, "hasard", [syn("aléa"), assoc("dés")], { famille: ["hasardeux", "hasarder"] }),
    m(3, "bactéries", [syn("microbes"), assoc("lactiques")], { variantes: ["bactérie", "bacteries"], famille: ["bactérien", "bactériologie"] }),
    m(4, "découverte", [syn("trouvaille"), assoc("Colomb")], { variantes: ["decouverte"], famille: ["découvrir", "couvrir", "couverture"] }),
    m(5, "infection", [syn("contamination"), assoc("nosocomiale")], { famille: ["infecter", "infectieux", "désinfecter"] }),
  ]),
  e("e-356", "Rester sur sa lancée", "Tout {1} persévère dans son {2} de repos ou de mouvement {3} et {4}, tant qu'aucune {5} ne vient l'en détourner.", "l'inertie", ["inertie", "le principe d'inertie"], [
    m(1, "corps", [syn("objet"), assoc("âme", "paire")], { famille: ["corporel", "corpulent", "corpuscule"] }),
    m(2, "état", [syn("situation"), inc("hiver", "été", "ét")], { variantes: ["etat"], famille: ["étatique", "statut", "station"] }),
    m(3, "rectiligne", [syn("droit"), precise(contraire("courbe"), "droit amène aussi le droit, la loi ; courbe fixe le sens de la trajectoire")], { famille: ["ligne", "linéaire", "rectifier", "rectangle"] }),
    m(4, "uniforme", [syn("constant"), assoc("soldat")], { famille: ["uniformité", "forme", "uniformiser"] }),
    m(5, "force", [syn("contrainte"), assoc("Newton")], { famille: ["forcer", "fort", "effort", "renforcer"] }),
  ]),
  e("e-357", "Peindre en plein air", "Monet peignait sur le {1}, en plein air ; il saisissait la {2} changeante d'une {3} rapide ; la critique moqua ces simples {4} ; Renoir et Pissarro furent ses {5}.", "l'impressionnisme", ["impressionnisme", "les impressionnistes", "impressionniste"], [
    m(1, "motif", [syn("sujet"), assoc("papier-peint")], { famille: ["motiver", "motivation"] }),
    m(2, "lumière", [syn("clarté"), assoc("photon")], { variantes: ["lumiere"], famille: ["lumineux", "luminosité", "illuminer", "lueur"] }),
    m(3, "touche", [syn("bouton"), assoc("pinceau")], { famille: ["toucher", "touchant"] }),
    m(4, "esquisses", [syn("ébauches"), inc("ouest", "est", "es")], { variantes: ["esquisse"], famille: ["esquisser"] }),
    m(5, "compagnons", [syn("camarades"), assoc("Emmaüs")], { variantes: ["compagnon"], famille: ["compagnie", "compagne", "accompagner", "pain"] }),
  ]),
  e("e-358", "La manière de Rembrandt", "Chez Caravage, un {1} de lumière perce la {2} ; ce {3} saisissant fait surgir les {4} et donne à la scène une intensité {5}.", "le clair-obscur", ["clair-obscur", "clair obscur"], [
    m(1, "rayon", [syn("faisceau"), assoc("laser")], { famille: ["rayonner", "rayonnement", "rai", "radieux"] }),
    m(2, "pénombre", [syn("demi-jour"), inc("chiffre", "nombre", "nombre", undefined, "fin")], { variantes: ["penombre"], famille: ["ombre", "ombrage", "sombre"] }),
    m(3, "contraste", [syn("opposition"), assoc("luminosité")], { famille: ["contraster", "contrastant"] }),
    m(4, "visages", [syn("figures"), assoc("portrait")], { variantes: ["visage"], famille: ["vis-à-vis", "visagiste", "viser", "vision"] }),
    m(5, "dramatique", [syn("théâtral"), precise(contraire("comique"), "théâtral amène aussi emphatique, affecté ; comique fixe le registre")], { famille: ["drame", "dramaturge", "dramatiser"] }),
  ]),
  e("e-359", "Foi et hommage", "Le {1} jure fidélité à son {2}, qui lui doit {3} ; le {4}, attaché à la glèbe, doit la {5}.", "la féodalité", ["féodalité", "feodalite", "le féodalisme", "féodalisme"], [
    m(1, "vassal", [syn("sujet"), assoc("lige")], { variantes: ["vassaux"], famille: ["vassalité", "vassaliser"] }),
    m(2, "suzerain", [syn("seigneur")], { famille: ["suzeraineté"] }),
    m(3, "protection", [syn("sauvegarde"), assoc("bouclier")], { famille: ["protéger", "protecteur", "protégé"] }),
    m(4, "serf", [syn("manant"), assoc("glèbe")], { famille: ["servage", "servir", "serviteur", "servile"] }),
    m(5, "corvée", [syn("besogne"), inc("âme", "corps", "cor", "corps")], { variantes: ["corvee"], famille: ["corvéable"] }),
  ]),
  e("e-360", "Le Roi-Soleil", "Le {1} concentre tous les pouvoirs : il règne de {2} divin, sans {3} ni partage ; une simple {4} de cachet suffit à embastiller l'{5}.", "l'absolutisme", ["absolutisme", "la monarchie absolue", "monarchie absolue"], [
    m(1, "monarque", [syn("souverain"), inc("Lisa", "Mona", "mona")], { famille: ["monarchie", "monarchiste", "monarchique"] }),
    m(2, "droit", [syn("prérogative"), precise(contraire("devoir"), "prérogative amène aussi privilège ; devoir appelle son pendant, droit")], { famille: ["droiture", "adroit", "direct"] }),
    m(3, "contrôle", [syn("vérification"), assoc("technique")], { variantes: ["controle"], famille: ["contrôler", "contrôleur", "rôle"] }),
    m(4, "lettre", [syn("missive")], { famille: ["lettré", "littéraire", "littéral", "illettré"] }),
    m(5, "opposant", [syn("adversaire"), assoc("régime")], { famille: ["opposer", "opposition", "poser"] }),
  ]),
  e("e-361", "Ésope reste ici et se repose", "Le mot {1} se lit dans les deux {2} : on peut le {3} de droite à gauche ; « kayak » en est un autre {4}, d'une parfaite {5}.", "le palindrome", ["palindrome", "un palindrome"], [
    m(1, "radar", [assoc("sonar", "voisin"), assoc("flash")], { famille: ["radariste"] }),
    m(2, "sens", [syn("direction"), assoc("interdit")], { famille: ["sensé", "sensible", "sentir", "sensation"] }),
    m(3, "lire", [syn("déchiffrer"), assoc("livre")], { famille: ["lecture", "lecteur", "lisible", "relire"] }),
    m(4, "exemple", [syn("spécimen"), assoc("suivre")], { famille: ["exemplaire", "exemplarité"] }),
    m(5, "symétrie", [syn("équilibre"), assoc("axe")], { variantes: ["symetrie"], famille: ["symétrique", "asymétrie", "métrique"] }),
  ]),
  e("e-362", "Descendre en bas", "Dire « monter en haut » trahit une {1} et une certaine {2} ; les {3} la condamnent, mais Molière en tire des effets {4}, et les poètes de l'{5}.", "le pléonasme", ["pléonasme", "pleonasme", "un pléonasme"], [
    m(1, "redondance", [syn("répétition"), assoc("superflu")], { famille: ["redondant", "abondance", "onde"] }),
    m(2, "maladresse", [syn("gaucherie"), inc("bien", "mal", "mal")], { famille: ["maladroit", "adresse", "adroit"] }),
    m(3, "grammairiens", [syn("linguistes"), assoc("Vaugelas")], { variantes: ["grammairien"], famille: ["grammaire", "grammatical"] }),
    m(4, "comiques", [syn("drôles"), precise(contraire("tragiques"), "drôles amène aussi bizarres, étranges ; tragiques fixe le registre théâtral")], { variantes: ["comique"], famille: ["comédie", "comédien"] }),
    m(5, "emphase", [syn("grandiloquence"), inc("étape", "phase", "phase", undefined, "fin")], { famille: ["emphatique"] }),
  ]),
  e("e-363", "Plouf, vroum, miaou", "« Tic-tac » cherche à {1} le bruit de l'horloge ; ce mot {2} est comme un {3} des choses ; la bande {4} en raffole, jusque dans ses {5}.", "l'onomatopée", ["onomatopée", "onomatopee", "une onomatopée"], [
    m(1, "imiter", [syn("copier"), assoc("singe")], { variantes: ["imite"], famille: ["imitation", "imitateur", "inimitable"] }),
    m(2, "sonore", [syn("acoustique"), assoc("onde")], { famille: ["son", "sonner", "sonorité", "résonner"] }),
    m(3, "écho", [syn("résonance"), assoc("Narcisse")], { variantes: ["echo"], famille: ["échographie"] }),
    m(4, "dessinée", [syn("illustrée"), assoc("Tintin")], { variantes: ["dessiné", "dessinee"], famille: ["dessin", "dessiner", "dessinateur"] }),
    m(5, "phylactères", [syn("bulles"), inc("aiguille", "fil", "phyl", "fil")], { variantes: ["phylactère", "phylacteres"] }),
  ]),
  e("e-364", "Ce que disent les juges", "Les {1} de la Cour de cassation font {2} ; face au {3} de la loi, le juge s'appuie sur un {4} ; décision après décision se fixe une {5} constante.", "la jurisprudence", ["jurisprudence"], [
    m(1, "arrêts", [syn("décisions"), assoc("bus")], { variantes: ["arrêt", "arrets"], famille: ["arrêter", "arrestation"] }),
    m(2, "autorité", [syn("pouvoir"), assoc("parentale")], { variantes: ["autorite"], famille: ["autoritaire", "autoriser", "auteur"] }),
    m(3, "silence", [syn("mutisme")], { famille: ["silencieux"] }),
    m(4, "précédent", [contraire("suivant"), decl("contraire")], { variantes: ["precedent"], famille: ["précéder", "antécédent", "céder"] }),
    m(5, "interprétation", [syn("exégèse"), assoc("rêves")], { variantes: ["interpretation"], famille: ["interprète", "interpréter"] }),
  ]),
  e("e-365", "Passer l'éponge", "Votée dans un souci d'{1}, cette loi entraîne l'{2} des peines ; les {3} sont libérés ; mais l'{4} imposé par l'État n'efface pas la {5} des victimes.", "l'amnistie", ["amnistie"], [
    m(1, "apaisement", [syn("adoucissement"), assoc("conflit")], { famille: ["paix", "apaiser", "paisible"] }),
    m(2, "extinction", [syn("disparition"), assoc("dinosaures")], { famille: ["éteindre", "extincteur", "éteint"] }),
    m(3, "détenus", [syn("captifs"), inc("tension", "détente", "dét")], { variantes: ["détenu", "detenus"], famille: ["détenir", "détention", "tenir"] }),
    m(4, "oubli", [syn("omission"), assoc("Léthé")], { famille: ["oublier", "oubliette"] }),
    m(5, "mémoire", [syn("souvenir"), assoc("devoir")], { variantes: ["memoire"], famille: ["mémoriser", "mémorial", "remémorer"] }),
  ]),
  e("e-366", "L'oiseau d'Héliopolis", "Cet oiseau {1}, au plumage {2}, se consume sur un {3} puis renaît de ses cendres : il est l'{4} de l'{5}.", "le phénix", ["phénix", "phenix", "le phoenix", "phoenix"], [
    m(1, "sacré", [syn("divin"), precise(contraire("profane"), "divin amène aussi délicieux, sublime ; profane fixe le sens religieux")], { variantes: ["sacre"], famille: ["sacrer", "sacrifice", "consacrer", "sacrement"] }),
    m(2, "pourpre", [syn("écarlate"), inc("contre", "pour", "pour")], { famille: ["pourpré"] }),
    m(3, "bûcher", [syn("brasier"), assoc("Jeanne")], { variantes: ["bucher"], famille: ["bûche", "bûcheron"] }),
    m(4, "emblème", [syn("symbole"), inc("pâle", "blême", "blème", "blême", "fin")], { variantes: ["embleme"], famille: ["emblématique"] }),
    m(5, "immortalité", [syn("éternité"), assoc("ambroisie")], { variantes: ["immortalite"], famille: ["mort", "mortel", "immortel", "mourir", "mortalité"] }),
  ]),
  e("e-367", "Le berger de Sicile", "Ce {1} n'a qu'un {2} au milieu du front ; il enferme Ulysse dans sa {3} ; enivré, il est aveuglé par un {4} brûlant ; « Personne ! », hurle-t-il à ses {5}.", "le cyclope", ["cyclope", "un cyclope"], [
    m(1, "géant", [syn("colosse"), assoc("Gargantua")], { variantes: ["geant"], famille: ["gigantesque", "géante"] }),
    m(2, "œil", [syn("mirette"), assoc("monocle")], { variantes: ["oeil", "yeux"], famille: ["œillade", "œillère", "œillet"] }),
    m(3, "caverne", [syn("grotte"), assoc("Platon")], { famille: ["cave", "caverneux", "cavité"] }),
    m(4, "pieu", [syn("piquet"), assoc("vampire")], { variantes: ["pieux"] }),
    m(5, "frères", [syn("frangins")], { variantes: ["frère", "freres"], famille: ["fraternel", "fraternité", "confrère"] }),
  ]),
  e("e-368", "Valmont et Merteuil", "Souvent {1}, le roué méprise les {2} ; Valmont, séducteur {3}, enchaîne les {4} jusqu'à sa {5}.", "le libertinage", ["libertinage", "le libertin", "libertin"], [
    m(1, "athée", [syn("mécréant"), inc("café", "thé", "thée", "thé", "fin")], { variantes: ["athee", "athées"], famille: ["athéisme", "théisme", "théologie"] }),
    m(2, "dogmes", [syn("credo"), assoc("Église")], { variantes: ["dogme"], famille: ["dogmatique", "dogmatisme"] }),
    m(3, "impénitent", [syn("incorrigible"), inc("pair", "impair", "imp")], { variantes: ["impenitent"], famille: ["pénitent", "pénitence", "repentir"] }),
    m(4, "conquêtes", [syn("victoires"), assoc("amoureuses")], { variantes: ["conquête", "conquetes"], famille: ["conquérir", "conquérant", "quête"] }),
    m(5, "chute", [syn("déchéance"), assoc("Camus")], { famille: ["chuter"] }),
  ]),
  e("e-369", "Le démon de Laplace", "Tout {1} a sa {2} ; une {3} qui connaîtrait l'état présent de l'univers pourrait {4} l'avenir : la {5} n'y serait qu'une illusion.", "le déterminisme", ["déterminisme", "determinisme"], [
    m(1, "effet", [syn("conséquence"), assoc("papillon")], { famille: ["effectif", "effectuer", "efficace"] }),
    m(2, "cause", [syn("origine"), assoc("perdue")], { famille: ["causer", "causalité", "causal"] }),
    m(3, "intelligence", [syn("esprit"), assoc("artificielle")], { famille: ["intelligent", "intelligible", "intellectuel"] }),
    m(4, "prédire", [syn("prophétiser"), inc("faire", "dire", "dire", undefined, "fin")], { variantes: ["predire"], famille: ["dire", "prédiction", "diction"] }),
    m(5, "liberté", [syn("autonomie"), assoc("statue")], { variantes: ["liberte"], famille: ["libre", "libérer", "libéral", "libération"] }),
  ]),
  e("e-370", "Tic-tac au conservatoire", "Cet {1} bat la {2} grâce à son {3} ; le musicien y règle son {4}, de l'adagio au {5}.", "le métronome", ["métronome", "metronome"], [
    m(1, "appareil", [syn("dispositif"), assoc("photo")], { famille: ["appareiller", "pareil"] }),
    m(2, "mesure", [syn("cadence"), assoc("tailleur")], { famille: ["mesurer", "démesure", "mètre"] }),
    m(3, "balancier", [syn("pendule"), assoc("funambule")], { famille: ["balance", "balancer", "balançoire"] }),
    m(4, "tempo", [syn("vitesse"), assoc("andante")], { famille: ["temps", "temporel", "tempérer"] }),
    m(5, "presto", [assoc("allegro", "voisin"), inc("tard", "tôt", "to", "tô", "fin")], { famille: ["prestement", "prestissimo"] }),
  ]),
  e("e-371", "L'astre chevelu", "Son {1} de glace décrit une longue {2} ; près du Soleil se déploie sa {3} ; jadis, chaque {4} passait pour un {5}.", "la comète", ["comète", "comete"], [
    m(1, "noyau", [syn("cœur"), assoc("atome")], { famille: ["noyauter", "noix"] }),
    m(2, "ellipse", [syn("ovale"), assoc("Kepler")], { famille: ["elliptique"] }),
    m(3, "queue", [syn("traîne"), assoc("billard")], { famille: ["queuter"] }),
    m(4, "apparition", [syn("manifestation"), assoc("fantôme")], { famille: ["apparaître", "paraître", "apparent", "disparition"] }),
    m(5, "présage", [syn("augure"), assoc("funeste")], { variantes: ["presage"], famille: ["présager", "sage"] }),
  ]),
  e("e-372", "Le Clavier bien tempéré", "Un {1} passe d'une {2} à l'autre par {3} ; tout l'édifice repose sur le {4} ; Bach en reste le {5} incontesté.", "la fugue", ["fugue", "une fugue"], [
    m(1, "thème", [syn("sujet"), assoc("variations")], { variantes: ["theme"], famille: ["thématique"] }),
    m(2, "voix", [assoc("soprano", "exemple"), assoc("chorale")], { famille: ["vocal", "vocaliser", "voyelle"] }),
    m(3, "imitation", [syn("reproduction"), assoc("pastiche")], { famille: ["imiter", "imitateur", "inimitable"] }),
    m(4, "contrepoint", [assoc("polyphonie", "voisin"), inc("virgule", "point", "point", undefined, "fin")], { famille: ["point", "pointer", "contre", "ponctuer"] }),
    m(5, "maître", [syn("virtuose"), precise(contraire("élève"), "virtuose amène aussi soliste, prodige ; élève appelle son pendant, maître")], { variantes: ["maitre"], famille: ["maîtrise", "maîtresse", "maîtriser"] }),
  ]),
  e("e-373", "La reine de Carie", "Artémise, {1} inconsolable, fit bâtir pour son époux un tombeau {2} ; orné de {3} et de frises, il abritait ses {4} ; il compte parmi les sept {5} du monde.", "le mausolée", ["mausolée", "mausolee"], [
    m(1, "veuve", [syn("douairière"), assoc("Clicquot")], { famille: ["veuf", "veuvage"] }),
    m(2, "colossal", [syn("gigantesque"), inc("glue", "colle", "col")], { famille: ["colosse"] }),
    m(3, "colonnes", [syn("piliers"), assoc("Buren")], { variantes: ["colonne"], famille: ["colonnade"] }),
    m(4, "cendres", [syn("restes"), assoc("urne")], { variantes: ["cendre"], famille: ["cendrier", "Cendrillon", "incinérer"] }),
    m(5, "merveilles", [syn("prodiges"), assoc("Alice")], { variantes: ["merveille"], famille: ["merveilleux", "émerveiller"] }),
  ]),
  e("e-374", "Ni entrer ni sortir", "Une {1} encercle le port ; les navires {2} restent à quai ; la {3} gagne la ville ; Napoléon voulut ainsi ruiner le {4} anglais ; Berlin-Ouest tint grâce au pont {5}.", "le blocus", ["blocus"], [
    m(1, "flotte", [syn("escadre"), assoc("amiral")], { famille: ["flottille"] }),
    m(2, "marchands", [syn("négociants"), assoc("tapis")], { variantes: ["marchand"], famille: ["marchandise", "marché", "marchander"] }),
    m(3, "disette", [syn("pénurie"), inc("neuf", "dix", "di")], { famille: [] }),
    m(4, "commerce", [syn("échanges"), assoc("équitable")], { famille: ["commerçant", "commercial", "commercer"] }),
    m(5, "aérien", [syn("éthéré"), assoc("pont")], { variantes: ["aerien"], famille: ["air", "aération", "aéroport"] }),
  ]),
  e("e-375", "Le menteur crétois", "Si le Crétois qui affirme mentir dit {1}, alors il ment : cette {2} défie l'{3} ; Zénon en tirait des {4} étonnants ; Pascal y voyait la {5} même de l'homme.", "le paradoxe", ["paradoxe", "un paradoxe"], [
    m(1, "vrai", [syn("exact"), precise(contraire("faux"), "exact amène aussi précis, ponctuel ; faux fixe le sens de vérité")], { famille: ["vérité", "véritable", "véridique", "vraiment"] }),
    m(2, "contradiction", [syn("antinomie"), inc("pour", "contre", "contr")], { famille: ["contredire", "contradictoire", "dire"] }),
    m(3, "intuition", [syn("instinct"), assoc("féminine")], { famille: ["intuitif"] }),
    m(4, "arguments", [syn("raisonnements"), assoc("massue")], { variantes: ["argument"], famille: ["argumenter", "argumentation"] }),
    m(5, "condition", [syn("situation"), assoc("Malraux")], { famille: ["conditionnel", "conditionner"] }),
  ]),
];
