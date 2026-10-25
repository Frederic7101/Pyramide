import type { Brique, ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc, inc } from "./briques";

/**
 * Lot 5 : 50 listes de Noms Propres de niveau moyen, rédigées par Claude, à relire (version 2026-10-23).
 * Briques 1 et 2 : associations, de la plus évocatrice à la plus décisive ; 3e brique : une incitation
 * quand une incitation évidente existe (contraire ou pendant usuel du mot évoqué), sinon une association.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: (string | Brique)[], options?: { variantes?: string[]; surnoms?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "moyen",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => (typeof b === "string" ? assoc(b) : b)), ...options })),
  };
}

export const LOT5_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-501", "Opéras de Verdi", [
    ["Aïda", ["Égypte", "Radamès", inc("ouille", "aïe", "Aï", "aïe")], { variantes: ["Aida"] }],
    ["Rigoletto", ["bouffon", "bossu", inc("pleurer", "rire", "Ri")]],
    ["Nabucco", ["Babylone", "Hébreux", "chœur des esclaves"]],
    ["Le Trouvère", ["gitane", "Azucena", inc("perdre", "trouver", "Trouv", "trouv", "milieu")], { variantes: ["Trouvère", "Le Trouvere", "Trouvere", "Il Trovatore"] }],
  ]),
  liste("np-502", "Opéras de Puccini", [
    ["Madame Butterfly", ["geisha", "Pinkerton", inc("papa", "maman", "Ma")], { variantes: ["Madama Butterfly"], partielles: ["Butterfly"] }],
    ["La Bohème", ["mansarde", "Mimi", inc("ici", "là", "La", "là")], { variantes: ["Bohème", "La Boheme", "Boheme"] }],
    ["Turandot", ["princesse", "énigmes", inc("je", "tu", "Tu")]],
    ["Manon Lescaut", ["Des Grieux", "abbé Prévost", inc("beau", "laid", "Les", "laid")], { partielles: ["Lescaut"] }],
  ]),
  liste("np-503", "Peintres italiens", [
    ["Raphaël", ["Urbino", "École d'Athènes", inc("lui", "elle", "ël", "elle", "fin")], { variantes: ["Raphael"] }],
    ["Michel-Ange", ["Pietà", "Sixtine", inc("démon", "ange", "Ange", "ange", "fin")], { variantes: ["Michelangelo"] }],
    ["Caravage", ["clair-obscur", "meurtre", inc("diamant", "carat", "Cara")], { variantes: ["Le Caravage"] }],
    ["Fra Angelico", ["moine", "San Marco", "Annonciation"], { variantes: ["Fra Angélico"], partielles: ["Angelico"] }],
  ]),
  liste("np-504", "Peintres néerlandais", [
    ["Rembrandt", ["autoportraits", "Leyde", "Ronde de nuit"]],
    ["Vermeer", ["Delft", "laitière", inc("terre", "mer", "meer", "mer", "fin")]],
    ["Frans Hals", ["Haarlem", "rires", inc("euro", "franc", "Fran")], { partielles: ["Hals"] }],
    ["Jérôme Bosch", ["monstres", "Bois-le-Duc", "Jardin des délices"], { variantes: ["Jerome Bosch", "Hieronymus Bosch"], partielles: ["Bosch"] }],
  ]),
  liste("np-505", "Fauves et cubistes", [
    ["Matisse", ["odalisques", "papiers découpés", inc("échec", "mat", "Mat")]],
    ["Braque", ["Estaque", "papiers collés", inc("jambe", "bras", "Bra", "bra")]],
    ["Derain", ["Collioure", "Chatou", "Tamise"]],
    ["Fernand Léger", ["tubes", "Constructeurs", inc("lourd", "léger", "Léger")], { variantes: ["Fernand Leger"], partielles: ["Léger", "Leger"] }],
  ]),
  liste("np-506", "Surréalistes", [
    ["Dalí", ["Figueras", "moustache", "montres molles"], { variantes: ["Dali", "Salvador Dalí", "Salvador Dali"] }],
    ["Magritte", ["chapeau melon", "pipe", inc("papa", "maman", "Ma")]],
    ["André Breton", ["Nadja", "manifeste", inc("Normand", "Breton", "Breton")], { variantes: ["Andre Breton"], partielles: ["Breton"] }],
    ["Max Ernst", ["Dada", "frottage", inc("min", "max", "Max")], { partielles: ["Ernst"] }],
  ]),
  liste("np-507", "Artistes américains", [
    ["Andy Warhol", ["Factory", "Marilyn", "soupe Campbell"], { partielles: ["Warhol"] }],
    ["Edward Hopper", ["solitude", "station-service", "Nighthawks"], { partielles: ["Hopper"] }],
    ["Jackson Pollock", ["action painting", "dripping", inc("Pierre", "Paul", "Pol", "Paul")], { partielles: ["Pollock"] }],
    ["Roy Lichtenstein", ["pop art", "Whaam!", inc("matelas", "lit", "Li")], { partielles: ["Lichtenstein"] }],
  ]),
  liste("np-508", "Écrivains britanniques du XIXe siècle", [
    ["Charles Dickens", ["Pickwick", "orphelin", "Oliver Twist"], { partielles: ["Dickens"] }],
    ["Jane Austen", ["Darcy", "Orgueil et Préjugés", inc("Tarzan", "Jane", "Jane")], { partielles: ["Austen"] }],
    ["Thomas Hardy", ["Wessex", "Tess", inc("Laurel", "Hardy", "Hardy")], { partielles: ["Hardy"] }],
    ["Lewis Carroll", ["lapin blanc", "Alice", inc("citrouille", "carrosse", "Carro", "carro")], { partielles: ["Carroll"] }],
  ]),
  liste("np-509", "Romanciers américains", [
    ["Hemingway", ["Cuba", "Le Vieil Homme et la Mer", inc("haïr", "aimer", "Hem", "aim")], { variantes: ["Ernest Hemingway"] }],
    ["Steinbeck", ["Californie", "Des souris et des hommes", "Les Raisins de la colère"], { variantes: ["John Steinbeck"] }],
    ["Faulkner", ["Mississippi", "Le Bruit et la Fureur", inc("vrai", "faux", "Fau", "fau")], { variantes: ["William Faulkner"] }],
    ["Scott Fitzgerald", ["Zelda", "Gatsby", inc("whisky", "scotch", "Scot", "scot")], { variantes: ["Francis Scott Fitzgerald", "F. Scott Fitzgerald"], partielles: ["Fitzgerald"] }],
  ]),
  liste("np-510", "Poètes romantiques français", [
    ["Lamartine", ["Elvire", "Le Lac", inc("dalaï", "lama", "Lama", "lama")]],
    ["Alfred de Musset", ["George Sand", "Lorenzaccio", "Les Nuits"], { partielles: ["Musset", "de Musset"] }],
    ["Alfred de Vigny", ["Chatterton", "La Mort du loup", inc("raisin", "vigne", "Vign", "vign")], { partielles: ["Vigny", "de Vigny"] }],
    ["Gérard de Nerval", ["Aurélia", "Sylvie", "Les Chimères"], { variantes: ["Gerard de Nerval"], partielles: ["Nerval", "de Nerval"] }],
  ]),
  liste("np-511", "Moralistes et fabulistes du Grand Siècle", [
    ["La Fontaine", ["Château-Thierry", "Fables", inc("forme", "fond", "Fon", "fon", "milieu")], { variantes: ["Jean de La Fontaine"] }],
    ["La Bruyère", ["Théophraste", "Les Caractères", inc("net", "brut", "Bru", "bru", "milieu")], { variantes: ["La Bruyere"] }],
    ["La Rochefoucauld", ["Fronde", "amour-propre", "Maximes"]],
    ["Boileau", ["Lutrin", "Art poétique", inc("feu", "eau", "eau", "eau", "fin")]],
  ]),
  liste("np-512", "Auteurs de théâtre", [
    ["Corneille", ["Rouen", "Le Cid", inc("âme", "corps", "Cor", "cor")], { variantes: ["Pierre Corneille"] }],
    ["Racine", ["Port-Royal", "Bérénice", "Britannicus"], { variantes: ["Jean Racine"] }],
    ["Feydeau", ["vaudeville", "Le Dindon", inc("ventre", "dos", "deau", "dos", "fin")], { variantes: ["Georges Feydeau"] }],
    ["Ionesco", ["absurde", "Rhinocéros", "La Cantatrice chauve"], { variantes: ["Eugène Ionesco"] }],
  ]),
  liste("np-513", "Écrivains français du XXe siècle", [
    ["Camus", ["Oran", "Sisyphe", "L'Étranger"], { variantes: ["Albert Camus"] }],
    ["Sartre", ["existentialisme", "Huis clos", "La Nausée"], { variantes: ["Jean-Paul Sartre"] }],
    ["Marguerite Duras", ["Indochine", "L'Amant", inc("mou", "dur", "Dur")], { partielles: ["Duras"] }],
    ["Colette", ["chats", "Claudine", inc("ciseaux", "colle", "Col", "col")]],
  ]),
  liste("np-514", "Poètes du XXe siècle", [
    ["Apollinaire", ["Calligrammes", "Alcools", inc("Artémis", "Apollon", "Apol", "Apol")], { variantes: ["Guillaume Apollinaire"] }],
    ["Paul Éluard", ["Gala", "Liberté", inc("Pierre", "Paul", "Paul")], { variantes: ["Paul Eluard"], partielles: ["Éluard", "Eluard"] }],
    ["Jacques Prévert", ["Paroles", "Inventaire", "Les Feuilles mortes"], { variantes: ["Jacques Prevert"], partielles: ["Prévert", "Prevert"] }],
    ["Louis Aragon", ["Le Paysan de Paris", "Elsa", inc("perroquet", "ara", "Ara", "ara")], { partielles: ["Aragon"] }],
  ]),
  liste("np-515", "Conteurs", [
    ["Perrault", ["Barbe-Bleue", "Cendrillon", inc("mère", "père", "Per", "pèr")], { variantes: ["Charles Perrault"] }],
    ["Grimm", ["Raiponce", "Hansel et Gretel", "Blanche-Neige"], { variantes: ["Frères Grimm", "les frères Grimm"] }],
    ["Andersen", ["Danemark", "Petite Sirène", inc("cordillère", "Andes", "And", "And")], { variantes: ["Hans Christian Andersen"] }],
    ["Shéhérazade", ["sultan", "Shahryar", "Mille et Une Nuits"], { variantes: ["Scheherazade", "Schéhérazade", "Sheherazade"] }],
  ]),
  liste("np-516", "Contes de Voltaire", [
    ["Candide", ["Cunégonde", "Pangloss", "cultiver son jardin"]],
    ["Zadig", ["Babylone", "Astarté", "destinée"]],
    ["Micromégas", ["géant", "Sirius", inc("macro", "micro", "Micro", "micro")], { variantes: ["Micromegas"] }],
    ["L'Ingénu", ["Huron", "Basse-Bretagne", inc("vêtu", "nu", "nu", "nu", "fin")], { variantes: ["Ingénu", "L'Ingenu", "Ingenu"] }],
  ]),
  liste("np-517", "Personnages des Misérables", [
    ["Jean Valjean", ["bagnard", "chandeliers", inc("mont", "val", "Val", "val")], { partielles: ["Valjean"] }],
    ["Javert", ["inspecteur", "traque", inc("chlore", "javel", "Jave", "jave")]],
    ["Thénardier", ["Montfermeil", "Éponine", inc("café", "thé", "Thé")], { variantes: ["Thenardier", "les Thénardier"] }],
    ["Marius", ["barricade", "Cosette", inc("papa", "maman", "Ma")], { variantes: ["Marius Pontmercy"] }],
  ]),
  liste("np-518", "Personnages d'Alexandre Dumas", [
    ["Porthos", ["mousquetaire", "Mousqueton", inc("fenêtre", "porte", "Port", "port")]],
    ["Athos", ["aîné", "Bragelonne", "comte de La Fère"]],
    ["Milady", ["espionne", "fleur de lys", inc("minuit", "midi", "Mi", "mi")], { variantes: ["Milady de Winter"] }],
    ["Edmond Dantès", ["château d'If", "abbé Faria", inc("molaire", "dent", "Dan", "den")], { variantes: ["Edmond Dantes"], partielles: ["Dantès", "Dantes"] }],
  ]),
  liste("np-519", "Personnages des Rougon-Macquart", [
    ["Nana", ["courtisane", "Muffat", inc("mec", "nana", "Nana", "nana")]],
    ["Gervaise", ["lavoir", "Coupeau", "L'Assommoir"]],
    ["Étienne Lantier", ["mineur", "Germinal", inc("rapide", "lent", "Lan", "len")], { variantes: ["Etienne Lantier"], partielles: ["Lantier"] }],
    ["Octave Mouret", ["grand magasin", "Au Bonheur des Dames", inc("dur", "mou", "Mou", "mou")], { partielles: ["Mouret"] }],
  ]),
  liste("np-520", "Héros de Flaubert et de Stendhal", [
    ["Emma Bovary", ["Yonville", "arsenic", "Charles"], { partielles: ["Bovary", "Madame Bovary"] }],
    ["Julien Sorel", ["Verrières", "Le Rouge et le Noir", inc("entrer", "sortir", "Sor", "sor")], { partielles: ["Sorel"] }],
    ["Fabrice del Dongo", ["Waterloo", "Chartreuse de Parme", inc("ding", "dong", "Dong", "dong")], { partielles: ["del Dongo", "Dongo"] }],
    ["Frédéric Moreau", ["Madame Arnoux", "L'Éducation sentimentale", inc("vivant", "mort", "Mor", "mor")], { variantes: ["Frederic Moreau"], partielles: ["Moreau"] }],
  ]),
  liste("np-521", "Personnages de Tolkien", [
    ["Frodon", ["hobbit", "Comté", "Anneau"], { variantes: ["Frodo", "Frodon Sacquet"] }],
    ["Gandalf", ["magicien", "le Gris", inc("moufle", "gant", "Gan", "gan")]],
    ["Gollum", ["Sméagol", "caverne", "mon précieux"]],
    ["Aragorn", ["rôdeur", "Gondor", inc("perroquet", "ara", "Ara", "ara")]],
  ]),
  liste("np-522", "Héros grecs", [
    ["Persée", ["Andromède", "Méduse", inc("mère", "père", "Per", "pèr")], { variantes: ["Persee"] }],
    ["Thésée", ["labyrinthe", "Minotaure", inc("café", "thé", "Thé")], { variantes: ["Thesee"] }],
    ["Jason", ["Argonautes", "Médée", "Toison d'or"]],
    ["Achille", ["Patrocle", "talon", inc("bûcheron", "hache", "Ach", "hach")]],
  ]),
  liste("np-523", "Divinités romaines", [
    ["Janus", ["portes", "guerre", "deux visages"]],
    ["Junon", ["paon", "épouse de Jupiter", inc("oui", "non", "non", "non", "fin")]],
    ["Cérès", ["moissons", "Proserpine", "blé"], { variantes: ["Ceres"] }],
    ["Minerve", ["chouette", "sagesse", inc("crayon", "mine", "Min", "min")]],
  ]),
  liste("np-524", "Héroïnes de la mythologie grecque", [
    ["Pénélope", ["Ithaque", "prétendants", "tapisserie"], { variantes: ["Penelope"] }],
    ["Eurydice", ["serpent", "Orphée", inc("neuf", "dix", "dice", "dix", "fin")]],
    ["Pandore", ["Épiméthée", "boîte", inc("argent", "or", "ore", "or", "fin")]],
    ["Hélène", ["Sparte", "Pâris", inc("mouton", "laine", "lène", "laine", "fin")], { variantes: ["Helene", "Hélène de Troie"] }],
  ]),
  liste("np-525", "Chevaliers et preux", [
    ["Roland", ["Durandal", "Roncevaux", inc("rapide", "lent", "land", "lent", "fin")]],
    ["Bertrand du Guesclin", ["connétable", "Bretagne", inc("triste", "gai", "Gue", "gai")], { variantes: ["Bertrand Du Guesclin"], partielles: ["du Guesclin", "Du Guesclin", "Guesclin"] }],
    ["Bayard", ["chevalier", "Garigliano", "sans peur et sans reproche"]],
    ["Godefroy de Bouillon", ["croisade", "Jérusalem", inc("cube", "bouillon", "Bouillon", "bouillon")], { variantes: ["Godefroi de Bouillon"], partielles: ["Bouillon"] }],
  ]),
  liste("np-526", "Femmes dans l'histoire de France", [
    ["Christine de Pizan", ["poétesse", "veuve", "Cité des dames"], { variantes: ["Christine de Pisan"], partielles: ["Pizan", "de Pizan", "Pisan"] }],
    ["Olympe de Gouges", ["Déclaration", "guillotine", inc("Zeus", "Olympe", "Olympe")], { partielles: ["Gouges", "de Gouges"] }],
    ["Louise Michel", ["Commune", "Nouvelle-Calédonie", inc("minuit", "midi", "Mi", "mi")], { partielles: ["Michel"] }],
    ["Simone Veil", ["Auschwitz", "IVG", inc("lendemain", "veille", "Veil", "veil")], { partielles: ["Veil"] }],
  ]),
  liste("np-527", "Rois de France de la Renaissance aux Lumières", [
    ["Charles IX", ["Catherine de Médicis", "Saint-Barthélemy", inc("vieux", "neuf", "neuf", "neuf", "fin")], { variantes: ["Charles 9", "Charles neuf"] }],
    ["Henri III", ["mignons", "Jacques Clément", inc("deux", "trois", "trois", "trois", "fin")], { variantes: ["Henri 3", "Henri trois"] }],
    ["Louis XIII", ["Richelieu", "Anne d'Autriche", inc("vendredi", "treize", "treize", "treize", "fin")], { variantes: ["Louis 13", "Louis treize"] }],
    ["Louis XV", ["Pompadour", "Damiens", "le Bien-Aimé"], { variantes: ["Louis 15", "Louis quinze"] }],
  ]),
  liste("np-528", "Ministres de l'Ancien Régime", [
    ["Mazarin", ["cardinal", "Fronde", inc("papa", "maman", "Ma")]],
    ["Colbert", ["manufactures", "marine", "Fouquet"]],
    ["Sully", ["Rosny", "labourage", inc("sel", "sucre", "Su", "su")]],
    ["Necker", ["Genève", "Madame de Staël", "Compte rendu au roi"]],
  ]),
  liste("np-529", "Figures du Premier Empire", [
    ["Joséphine", ["Martinique", "Malmaison", inc("épaisse", "fine", "phine", "fine", "fin")], { variantes: ["Josephine"] }],
    ["Talleyrand", ["Bénévent", "diable boiteux", inc("Achille", "talon", "Tal", "tal")]],
    ["Fouché", ["police", "Otrante", inc("sage", "fou", "Fou", "fou")], { variantes: ["Fouche", "Joseph Fouché"] }],
    ["Cambacérès", ["archichancelier", "gourmet", "Code civil"], { variantes: ["Cambaceres"] }],
  ]),
  liste("np-530", "Figures de l'Antiquité", [
    ["Cléopâtre", ["Antoine", "aspic", inc("serrure", "clé", "Clé")], { variantes: ["Cleopatre"] }],
    ["Spartacus", ["gladiateur", "Crassus", "révolte des esclaves"]],
    ["Attila", ["Huns", "fléau de Dieu", inc("ici", "là", "la", "là", "fin")]],
    ["Hannibal", ["Carthage", "Alpes", "éléphants"]],
  ]),
  liste("np-531", "Philosophes grecs", [
    ["Platon", ["Académie", "caverne", inc("mon", "ton", "ton", "ton", "fin")]],
    ["Aristote", ["Lycée", "Alexandre", "Stagire"]],
    ["Épicure", ["plaisir", "ataraxie", inc("blé", "épi", "Épi")], { variantes: ["Epicure"] }],
    ["Zénon", ["paradoxes", "tortue", inc("oui", "non", "non", "non", "fin")], { variantes: ["Zenon", "Zénon d'Élée"] }],
  ]),
  liste("np-532", "Auteurs grecs", [
    ["Homère", ["aveugle", "Iliade", inc("femme", "homme", "Hom", "hom")], { variantes: ["Homere"] }],
    ["Sophocle", ["Antigone", "Œdipe roi", inc("canapé", "sofa", "Soph", "sof")]],
    ["Eschyle", ["Perses", "Euménides", "Orestie"]],
    ["Hérodote", ["Halicarnasse", "Enquêtes", "père de l'histoire"], { variantes: ["Herodote"] }],
  ]),
  liste("np-533", "Grands explorateurs", [
    ["James Cook", ["Endeavour", "Hawaï", inc("Bond", "James", "James")], { variantes: ["capitaine Cook"], partielles: ["Cook"] }],
    ["Ibn Battûta", ["Tanger", "Rihla", inc("haut", "bas", "Ba", "ba")], { variantes: ["Ibn Battuta", "Ibn Battouta"], partielles: ["Battûta", "Battuta"] }],
    ["Livingstone", ["Stanley", "chutes Victoria", "Je présume"], { variantes: ["David Livingstone"] }],
    ["Amundsen", ["Fram", "pôle Sud", inc("haine", "amour", "Amu", "amou")], { variantes: ["Roald Amundsen"] }],
  ]),
  liste("np-534", "Pionniers de l'aviation", [
    ["Louis Blériot", ["monoplan", "traversée de la Manche", inc("épi", "blé", "Blé")], { variantes: ["Louis Bleriot"], partielles: ["Blériot", "Bleriot"] }],
    ["Saint-Exupéry", ["Courrier sud", "Vol de nuit", "Petit Prince"], { variantes: ["Saint-Exupery", "Antoine de Saint-Exupéry", "Saint Exupéry"] }],
    ["Jean Mermoz", ["Aéropostale", "Croix-du-Sud", inc("terre", "mer", "Mer", "mer")], { partielles: ["Mermoz"] }],
    ["Roland Garros", ["Méditerranée", "stade", inc("train", "gare", "Gar", "gar")], { partielles: ["Garros"] }],
  ]),
  liste("np-535", "Astronomes", [
    ["Tycho Brahé", ["Danois", "nez d'argent", inc("jambe", "bras", "Bra", "bra")], { variantes: ["Tycho Brahe"], partielles: ["Brahé", "Brahe"] }],
    ["Halley", ["Greenwich", "Bayeux", "comète"], { variantes: ["Edmond Halley"] }],
    ["Hubble", ["galaxies", "expansion", "télescope spatial"], { variantes: ["Edwin Hubble"] }],
    ["Herschel", ["infrarouge", "Uranus", inc("oxygène", "air", "Her", "air")], { variantes: ["William Herschel"] }],
  ]),
  liste("np-536", "Savants français", [
    ["Ampère", ["Lyon", "intensité", inc("mère", "père", "père", "père", "fin")], { variantes: ["Ampere", "André-Marie Ampère"] }],
    ["Fourier", ["chaleur", "séries", inc("sage", "fou", "Fou", "fou")], { variantes: ["Joseph Fourier"] }],
    ["Lamarck", ["girafe", "transformisme", inc("dalaï", "lama", "Lama", "lama")]],
    ["Cuvier", ["fossiles", "anatomie comparée", "paléontologie"], { variantes: ["Georges Cuvier"] }],
  ]),
  liste("np-537", "Femmes de science", [
    ["Ada Lovelace", ["Byron", "machine analytique", "programme"], { partielles: ["Lovelace"] }],
    ["Rosalind Franklin", ["Watson", "ADN", inc("euro", "franc", "Fran", "fran")], { partielles: ["Franklin"] }],
    ["Hypatie", ["Alexandrie", "mathématicienne", "lapidée"], { variantes: ["Hypatia"] }],
    ["Émilie du Châtelet", ["Cirey", "Voltaire", inc("souris", "chat", "Châ", "cha")], { variantes: ["Emilie du Chatelet", "Madame du Châtelet"], partielles: ["du Châtelet", "Châtelet", "Chatelet"] }],
  ]),
  liste("np-538", "Compositeurs français", [
    ["Debussy", ["Pelléas", "Prélude à l'après-midi d'un faune", "La Mer"], { variantes: ["Claude Debussy"] }],
    ["Bizet", ["Pêcheurs de perles", "Carmen", inc("bisou", "bise", "Biz", "bis")], { variantes: ["Georges Bizet"] }],
    ["Satie", ["Arcueil", "Gymnopédies", inc("soie", "satin", "Sati", "sati")], { variantes: ["Erik Satie"] }],
    ["Saint-Saëns", ["Danse macabre", "Carnaval des animaux", inc("avec", "sans", "Saëns", "sans", "milieu")], { variantes: ["Saint-Saens", "Camille Saint-Saëns"] }],
  ]),
  liste("np-539", "Musiciens italiens", [
    ["Rossini", ["tournedos", "Guillaume Tell", "Barbier de Séville"], { variantes: ["Gioachino Rossini"] }],
    ["Monteverdi", ["madrigaux", "Orfeo", inc("descend", "monte", "Monte", "monte")], { variantes: ["Claudio Monteverdi"] }],
    ["Paganini", ["diable", "caprices", "violon"], { variantes: ["Niccolò Paganini"] }],
    ["Bellini", ["Catane", "Casta diva", inc("Bête", "Belle", "Bell", "Bell")], { variantes: ["Vincenzo Bellini"] }],
  ]),
  liste("np-540", "Compositeurs germaniques", [
    ["Bach", ["fugue", "cantor", inc("examen", "bac", "Bac", "bac")], { variantes: ["Jean-Sébastien Bach"] }],
    ["Wagner", ["Walkyrie", "Bayreuth", inc("surf", "vague", "Wag", "vag")], { variantes: ["Richard Wagner"] }],
    ["Brahms", ["Clara", "Danses hongroises", inc("jambe", "bras", "Bra", "bra")], { variantes: ["Johannes Brahms"] }],
    ["Schubert", ["lieder", "Inachevée", "La Truite"], { variantes: ["Franz Schubert"] }],
  ]),
  liste("np-541", "Géants du jazz", [
    ["Duke Ellington", ["Cotton Club", "big band", inc("lui", "elle", "Ell", "ell")], { partielles: ["Ellington"] }],
    ["Miles Davis", ["trompette", "Ascenseur pour l'échafaud", "Kind of Blue"], { partielles: ["Davis"] }],
    ["Billie Holiday", ["Lady Day", "Strange Fruit", inc("huile", "olive", "Holi", "oli")], { partielles: ["Holiday"] }],
    ["Charlie Parker", ["saxophone alto", "bebop", inc("chocolaterie", "Charlie", "Charlie")], { partielles: ["Parker"] }],
  ]),
  liste("np-542", "Groupes de rock britanniques", [
    ["Led Zeppelin", ["dirigeable", "Stairway to Heaven", inc("beau", "laid", "Led", "laid")]],
    ["The Who", ["Townshend", "guitares cassées", "Tommy"], { variantes: ["Who", "les Who"] }],
    ["Pink Floyd", ["prisme", "The Wall", "Dark Side of the Moon"]],
    ["Oasis", ["Manchester", "Gallagher", inc("désert", "oasis", "Oasis", "oasis")]],
  ]),
  liste("np-543", "Voix de la chanson française", [
    ["Juliette Gréco", ["Saint-Germain-des-Prés", "robe noire", inc("Roméo", "Juliette", "Juliette")], { variantes: ["Juliette Greco"], partielles: ["Gréco", "Greco"] }],
    ["Charles Trenet", ["fou chantant", "Narbonne", "La Mer"], { partielles: ["Trenet"] }],
    ["Georges Moustaki", ["Alexandrie", "Le Métèque", inc("barbe", "moustache", "Mousta", "mousta")], { partielles: ["Moustaki"] }],
    ["Serge Gainsbourg", ["Birkin", "La Javanaise", inc("perte", "gain", "Gain", "gain")], { partielles: ["Gainsbourg"] }],
  ]),
  liste("np-544", "Maîtres du cinéma d'auteur", [
    ["Kurosawa", ["samouraïs", "Rashōmon", inc("fourchette", "couteau", "Ku", "cou")], { variantes: ["Akira Kurosawa"] }],
    ["Fellini", ["Rimini", "Mastroianni", "La Dolce Vita"], { variantes: ["Federico Fellini"] }],
    ["Kubrick", ["Shining", "Orange mécanique", inc("carré", "cube", "Kub", "cub")], { variantes: ["Stanley Kubrick"] }],
    ["Bergman", ["Suède", "Fårö", "Le Septième Sceau"], { variantes: ["Ingmar Bergman"] }],
  ]),
  liste("np-545", "Photographes", [
    ["Nadar", ["Tournachon", "aérostat", "portraits de Baudelaire"]],
    ["Henri Cartier-Bresson", ["Leica", "instant décisif", inc("demi", "quart", "Car", "quar")], { partielles: ["Cartier-Bresson"] }],
    ["Robert Doisneau", ["Gentilly", "Le Baiser de l'Hôtel de Ville", inc("orteil", "doigt", "Doi", "doi")], { partielles: ["Doisneau"] }],
    ["Robert Capa", ["guerre d'Espagne", "Omaha Beach", inc("épée", "cape", "Cap", "cap")], { partielles: ["Capa"] }],
  ]),
  liste("np-546", "Actrices de l'âge d'or hollywoodien", [
    ["Rita Hayworth", ["gant", "Orson Welles", "Gilda"], { partielles: ["Hayworth"] }],
    ["Greta Garbo", ["la Divine", "Ninotchka", inc("train", "gare", "Gar", "gar")], { partielles: ["Garbo"] }],
    ["Audrey Hepburn", ["Givenchy", "Vacances romaines", "Diamants sur canapé"], { partielles: ["Hepburn"] }],
    ["Grace Kelly", ["Fenêtre sur cour", "Monaco", inc("maigre", "grasse", "Grace", "grasse")], { partielles: ["Kelly"] }],
  ]),
  liste("np-547", "Provinces d'Ancien Régime", [
    ["Dauphiné", ["Vizille", "Grenoble", inc("ventre", "dos", "Dau", "do")], { variantes: ["Dauphine"] }],
    ["Berry", ["Nohant", "Bourges", inc("pleure", "rit", "rry", "rit", "fin")]],
    ["Lorraine", ["mirabelle", "Nancy", inc("roi", "reine", "raine", "reine", "fin")]],
    ["Artois", ["beffroi", "Arras", inc("moi", "toi", "tois", "toi", "fin")]],
  ]),
  liste("np-548", "Villes d'Italie", [
    ["Vérone", ["Adige", "arènes", "Roméo et Juliette"], { variantes: ["Verone", "Verona"] }],
    ["Florence", ["Arno", "Ponte Vecchio", inc("faune", "flore", "Flor", "flor")], { variantes: ["Firenze"] }],
    ["Naples", ["pizza", "Vésuve", inc("serviette", "nappe", "Nap", "nap")], { variantes: ["Napoli"] }],
    ["Sienne", ["Toscane", "Palio", inc("mienne", "sienne", "Sienne", "sienne")], { variantes: ["Siena"] }],
  ]),
  liste("np-549", "Villes ibériques", [
    ["Séville", ["Andalousie", "Guadalquivir", inc("campagne", "ville", "ville", "ville", "fin")], { variantes: ["Seville", "Sevilla"] }],
    ["Grenade", ["Boabdil", "Albaicín", inc("goupille", "grenade", "Grenade", "grenade")], { variantes: ["Granada"] }],
    ["Barcelone", ["Ramblas", "Gaudí", "Sagrada Família"], { variantes: ["Barcelona"] }],
    ["Porto", ["Ribeira", "Douro", inc("fenêtre", "porte", "Port", "port")], { variantes: ["Oporto"] }],
  ]),
  liste("np-550", "Villes allemandes", [
    ["Berlin", ["Spree", "Mur", inc("mouton", "berger", "Ber", "ber")]],
    ["Munich", ["bière", "Oktoberfest", inc("sourd", "muet", "Mu", "mu")], { variantes: ["München"] }],
    ["Cologne", ["Rhin", "eau de toilette", "cathédrale"], { variantes: ["Köln", "Koln"] }],
    ["Dresde", ["Elbe", "Zwinger", "capitale de la Saxe"], { variantes: ["Dresden"] }],
  ]),
];
