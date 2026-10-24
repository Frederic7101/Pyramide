import type { ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc } from "./briques";

/**
 * Lot 5 : 50 listes de Noms Propres de niveau moyen, rédigées par Claude, à relire (version 2026-10-23).
 * Toutes les briques sont des associations, de la plus évocatrice à la plus décisive.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: string[], options?: { variantes?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "moyen",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => assoc(b)), ...options })),
  };
}

export const LOT5_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-501", "Opéras de Verdi", [
    ["Aïda", ["Égypte", "Radamès", "marche triomphale"], { variantes: ["Aida"] }],
    ["Rigoletto", ["bouffon", "Mantoue", "bossu"]],
    ["Nabucco", ["Babylone", "Hébreux", "chœur des esclaves"]],
    ["Le Trouvère", ["gitane", "Azucena", "chœur des enclumes"], { variantes: ["Trouvère", "Le Trouvere", "Trouvere", "Il Trovatore"] }],
  ]),
  liste("np-502", "Opéras de Puccini", [
    ["Madame Butterfly", ["geisha", "Pinkerton", "Nagasaki"], { variantes: ["Madama Butterfly"], partielles: ["Butterfly"] }],
    ["La Bohème", ["mansarde", "Rodolphe", "Mimi"], { variantes: ["Bohème", "La Boheme", "Boheme"] }],
    ["Turandot", ["princesse", "énigmes", "Nessun dorma"]],
    ["Manon Lescaut", ["Des Grieux", "Louisiane", "abbé Prévost"], { partielles: ["Lescaut"] }],
  ]),
  liste("np-503", "Peintres italiens", [
    ["Raphaël", ["Urbino", "Fornarina", "École d'Athènes"], { variantes: ["Raphael"] }],
    ["Michel-Ange", ["Pietà", "David", "Sixtine"], { variantes: ["Michelangelo"] }],
    ["Caravage", ["clair-obscur", "meurtre", "Méduse"], { variantes: ["Le Caravage"] }],
    ["Fra Angelico", ["moine", "San Marco", "Annonciation"], { variantes: ["Fra Angélico"], partielles: ["Angelico"] }],
  ]),
  liste("np-504", "Peintres néerlandais", [
    ["Rembrandt", ["autoportraits", "Leyde", "Ronde de nuit"]],
    ["Vermeer", ["Delft", "laitière", "perle"]],
    ["Frans Hals", ["Haarlem", "rires", "Bohémienne"], { partielles: ["Hals"] }],
    ["Jérôme Bosch", ["monstres", "Bois-le-Duc", "Jardin des délices"], { variantes: ["Jerome Bosch", "Hieronymus Bosch"], partielles: ["Bosch"] }],
  ]),
  liste("np-505", "Fauves et cubistes", [
    ["Matisse", ["odalisques", "Nice", "papiers découpés"]],
    ["Braque", ["Estaque", "oiseaux", "papiers collés"]],
    ["Derain", ["Collioure", "Chatou", "Tamise"]],
    ["Fernand Léger", ["tubes", "Biot", "Constructeurs"], { variantes: ["Fernand Leger"], partielles: ["Léger", "Leger"] }],
  ]),
  liste("np-506", "Surréalistes", [
    ["Dalí", ["Figueras", "moustache", "montres molles"], { variantes: ["Dali", "Salvador Dalí", "Salvador Dali"] }],
    ["Magritte", ["chapeau melon", "Belge", "pipe"]],
    ["André Breton", ["Nadja", "manifeste", "pape du surréalisme"], { variantes: ["Andre Breton"], partielles: ["Breton"] }],
    ["Max Ernst", ["Dada", "frottage", "Loplop"], { partielles: ["Ernst"] }],
  ]),
  liste("np-507", "Artistes américains", [
    ["Andy Warhol", ["Factory", "Marilyn", "soupe Campbell"], { partielles: ["Warhol"] }],
    ["Edward Hopper", ["solitude", "station-service", "Nighthawks"], { partielles: ["Hopper"] }],
    ["Jackson Pollock", ["action painting", "éclaboussures", "dripping"], { partielles: ["Pollock"] }],
    ["Roy Lichtenstein", ["pop art", "trames", "Whaam!"], { partielles: ["Lichtenstein"] }],
  ]),
  liste("np-508", "Écrivains britanniques du XIXe siècle", [
    ["Charles Dickens", ["Pickwick", "orphelin", "Oliver Twist"], { partielles: ["Dickens"] }],
    ["Jane Austen", ["Bath", "Darcy", "Orgueil et Préjugés"], { partielles: ["Austen"] }],
    ["Thomas Hardy", ["Wessex", "Jude", "Tess"], { partielles: ["Hardy"] }],
    ["Lewis Carroll", ["Oxford", "lapin blanc", "Alice"], { partielles: ["Carroll"] }],
  ]),
  liste("np-509", "Romanciers américains", [
    ["Hemingway", ["Cuba", "corrida", "Le Vieil Homme et la Mer"], { variantes: ["Ernest Hemingway"] }],
    ["Steinbeck", ["Californie", "Des souris et des hommes", "Les Raisins de la colère"], { variantes: ["John Steinbeck"] }],
    ["Faulkner", ["Mississippi", "Yoknapatawpha", "Le Bruit et la Fureur"], { variantes: ["William Faulkner"] }],
    ["Scott Fitzgerald", ["Zelda", "années folles", "Gatsby"], { variantes: ["Francis Scott Fitzgerald", "F. Scott Fitzgerald"], partielles: ["Fitzgerald"] }],
  ]),
  liste("np-510", "Poètes romantiques français", [
    ["Lamartine", ["Mâcon", "Elvire", "Le Lac"]],
    ["Alfred de Musset", ["George Sand", "Lorenzaccio", "Les Nuits"], { partielles: ["Musset", "de Musset"] }],
    ["Alfred de Vigny", ["Chatterton", "Servitude et grandeur militaires", "La Mort du loup"], { partielles: ["Vigny", "de Vigny"] }],
    ["Gérard de Nerval", ["Aurélia", "Sylvie", "Les Chimères"], { variantes: ["Gerard de Nerval"], partielles: ["Nerval", "de Nerval"] }],
  ]),
  liste("np-511", "Moralistes et fabulistes du Grand Siècle", [
    ["La Fontaine", ["Château-Thierry", "Fables", "Le Corbeau et le Renard"], { variantes: ["Jean de La Fontaine"] }],
    ["La Bruyère", ["Théophraste", "Condé", "Les Caractères"], { variantes: ["La Bruyere"] }],
    ["La Rochefoucauld", ["Fronde", "amour-propre", "Maximes"]],
    ["Boileau", ["Lutrin", "Satires", "Art poétique"]],
  ]),
  liste("np-512", "Auteurs de théâtre", [
    ["Corneille", ["Rouen", "Cinna", "Le Cid"], { variantes: ["Pierre Corneille"] }],
    ["Racine", ["Port-Royal", "Bérénice", "Britannicus"], { variantes: ["Jean Racine"] }],
    ["Feydeau", ["vaudeville", "Le Dindon", "La Puce à l'oreille"], { variantes: ["Georges Feydeau"] }],
    ["Ionesco", ["absurde", "Rhinocéros", "La Cantatrice chauve"], { variantes: ["Eugène Ionesco"] }],
  ]),
  liste("np-513", "Écrivains français du XXe siècle", [
    ["Camus", ["Oran", "Sisyphe", "L'Étranger"], { variantes: ["Albert Camus"] }],
    ["Sartre", ["existentialisme", "Huis clos", "La Nausée"], { variantes: ["Jean-Paul Sartre"] }],
    ["Marguerite Duras", ["Indochine", "Hiroshima mon amour", "L'Amant"], { partielles: ["Duras"] }],
    ["Colette", ["chats", "Saint-Sauveur", "Claudine"]],
  ]),
  liste("np-514", "Poètes du XXe siècle", [
    ["Apollinaire", ["Calligrammes", "Alcools", "pont Mirabeau"], { variantes: ["Guillaume Apollinaire"] }],
    ["Paul Éluard", ["Gala", "Capitale de la douleur", "Liberté"], { variantes: ["Paul Eluard"], partielles: ["Éluard", "Eluard"] }],
    ["Jacques Prévert", ["Paroles", "Inventaire", "Les Feuilles mortes"], { variantes: ["Jacques Prevert"], partielles: ["Prévert", "Prevert"] }],
    ["Louis Aragon", ["Le Paysan de Paris", "Elsa", "Les Yeux d'Elsa"], { partielles: ["Aragon"] }],
  ]),
  liste("np-515", "Conteurs", [
    ["Perrault", ["Barbe-Bleue", "Peau d'âne", "Cendrillon"], { variantes: ["Charles Perrault"] }],
    ["Grimm", ["Raiponce", "Hansel et Gretel", "Blanche-Neige"], { variantes: ["Frères Grimm", "les frères Grimm"] }],
    ["Andersen", ["Danemark", "Petite Sirène", "Vilain Petit Canard"], { variantes: ["Hans Christian Andersen"] }],
    ["Shéhérazade", ["sultan", "Shahryar", "Mille et Une Nuits"], { variantes: ["Scheherazade", "Schéhérazade", "Sheherazade"] }],
  ]),
  liste("np-516", "Contes de Voltaire", [
    ["Candide", ["Cunégonde", "Pangloss", "cultiver son jardin"]],
    ["Zadig", ["Babylone", "Astarté", "destinée"]],
    ["Micromégas", ["géant", "Saturne", "Sirius"], { variantes: ["Micromegas"] }],
    ["L'Ingénu", ["Huron", "Basse-Bretagne", "Mlle de Saint-Yves"], { variantes: ["Ingénu", "L'Ingenu", "Ingenu"] }],
  ]),
  liste("np-517", "Personnages des Misérables", [
    ["Jean Valjean", ["bagnard", "chandeliers", "Monsieur Madeleine"], { partielles: ["Valjean"] }],
    ["Javert", ["inspecteur", "traque", "Seine"]],
    ["Thénardier", ["Montfermeil", "Éponine", "aubergiste"], { variantes: ["Thenardier", "les Thénardier"] }],
    ["Marius", ["barricade", "Gillenormand", "Cosette"], { variantes: ["Marius Pontmercy"] }],
  ]),
  liste("np-518", "Personnages d'Alexandre Dumas", [
    ["Porthos", ["mousquetaire", "colosse", "Mousqueton"]],
    ["Athos", ["aîné", "Bragelonne", "comte de La Fère"]],
    ["Milady", ["espionne", "Buckingham", "fleur de lys"], { variantes: ["Milady de Winter"] }],
    ["Edmond Dantès", ["château d'If", "abbé Faria", "Monte-Cristo"], { variantes: ["Edmond Dantes"], partielles: ["Dantès", "Dantes"] }],
  ]),
  liste("np-519", "Personnages des Rougon-Macquart", [
    ["Nana", ["courtisane", "Muffat", "variole"]],
    ["Gervaise", ["lavoir", "Coupeau", "L'Assommoir"]],
    ["Étienne Lantier", ["mineur", "Montsou", "Germinal"], { variantes: ["Etienne Lantier"], partielles: ["Lantier"] }],
    ["Octave Mouret", ["Pot-Bouille", "grand magasin", "Au Bonheur des Dames"], { partielles: ["Mouret"] }],
  ]),
  liste("np-520", "Héros de Flaubert et de Stendhal", [
    ["Emma Bovary", ["Yonville", "arsenic", "Charles"], { partielles: ["Bovary", "Madame Bovary"] }],
    ["Julien Sorel", ["Verrières", "Madame de Rênal", "Le Rouge et le Noir"], { partielles: ["Sorel"] }],
    ["Fabrice del Dongo", ["Waterloo", "Clélia", "Chartreuse de Parme"], { partielles: ["del Dongo", "Dongo"] }],
    ["Frédéric Moreau", ["Madame Arnoux", "Nogent", "L'Éducation sentimentale"], { variantes: ["Frederic Moreau"], partielles: ["Moreau"] }],
  ]),
  liste("np-521", "Personnages de Tolkien", [
    ["Frodon", ["hobbit", "Comté", "Anneau"], { variantes: ["Frodo", "Frodon Sacquet"] }],
    ["Gandalf", ["magicien", "Balrog", "le Gris"]],
    ["Gollum", ["Sméagol", "caverne", "mon précieux"]],
    ["Aragorn", ["rôdeur", "Grands-Pas", "Gondor"]],
  ]),
  liste("np-522", "Héros grecs", [
    ["Persée", ["Andromède", "bouclier", "Méduse"], { variantes: ["Persee"] }],
    ["Thésée", ["Ariane", "labyrinthe", "Minotaure"], { variantes: ["Thesee"] }],
    ["Jason", ["Argonautes", "Médée", "Toison d'or"]],
    ["Achille", ["Patrocle", "Troie", "talon"]],
  ]),
  liste("np-523", "Divinités romaines", [
    ["Janus", ["portes", "janvier", "deux visages"]],
    ["Junon", ["paon", "juin", "épouse de Jupiter"]],
    ["Cérès", ["moissons", "Proserpine", "blé"], { variantes: ["Ceres"] }],
    ["Minerve", ["chouette", "sagesse", "Capitole"]],
  ]),
  liste("np-524", "Héroïnes de la mythologie grecque", [
    ["Pénélope", ["Ithaque", "prétendants", "tapisserie"], { variantes: ["Penelope"] }],
    ["Eurydice", ["serpent", "Enfers", "Orphée"]],
    ["Pandore", ["Épiméthée", "espérance", "boîte"]],
    ["Hélène", ["Sparte", "Ménélas", "Pâris"], { variantes: ["Helene", "Hélène de Troie"] }],
  ]),
  liste("np-525", "Chevaliers et preux", [
    ["Roland", ["Durandal", "olifant", "Roncevaux"]],
    ["Bertrand du Guesclin", ["connétable", "Bretagne", "Cocherel"], { variantes: ["Bertrand Du Guesclin"], partielles: ["du Guesclin", "Du Guesclin", "Guesclin"] }],
    ["Bayard", ["chevalier", "Garigliano", "sans peur et sans reproche"]],
    ["Godefroy de Bouillon", ["croisade", "Saint-Sépulcre", "Jérusalem"], { variantes: ["Godefroi de Bouillon"], partielles: ["Bouillon"] }],
  ]),
  liste("np-526", "Femmes dans l'histoire de France", [
    ["Christine de Pizan", ["poétesse", "veuve", "Cité des dames"], { variantes: ["Christine de Pisan"], partielles: ["Pizan", "de Pizan", "Pisan"] }],
    ["Olympe de Gouges", ["Déclaration", "droits de la femme", "guillotine"], { partielles: ["Gouges", "de Gouges"] }],
    ["Louise Michel", ["Commune", "Nouvelle-Calédonie", "Vierge rouge"], { partielles: ["Michel"] }],
    ["Simone Veil", ["Parlement européen", "Auschwitz", "IVG"], { partielles: ["Veil"] }],
  ]),
  liste("np-527", "Rois de France de la Renaissance aux Lumières", [
    ["Charles IX", ["Catherine de Médicis", "arquebuse", "Saint-Barthélemy"], { variantes: ["Charles 9", "Charles neuf"] }],
    ["Henri III", ["mignons", "Blois", "Jacques Clément"], { variantes: ["Henri 3", "Henri trois"] }],
    ["Louis XIII", ["Richelieu", "Anne d'Autriche", "le Juste"], { variantes: ["Louis 13", "Louis treize"] }],
    ["Louis XV", ["Pompadour", "Damiens", "le Bien-Aimé"], { variantes: ["Louis 15", "Louis quinze"] }],
  ]),
  liste("np-528", "Ministres de l'Ancien Régime", [
    ["Mazarin", ["Italien", "cardinal", "Fronde"]],
    ["Colbert", ["manufactures", "marine", "Fouquet"]],
    ["Sully", ["Rosny", "labourage", "pâturage"]],
    ["Necker", ["Genève", "Madame de Staël", "Compte rendu au roi"]],
  ]),
  liste("np-529", "Figures du Premier Empire", [
    ["Joséphine", ["Martinique", "Malmaison", "Beauharnais"], { variantes: ["Josephine"] }],
    ["Talleyrand", ["Bénévent", "diable boiteux", "Valençay"]],
    ["Fouché", ["police", "Otrante", "régicide"], { variantes: ["Fouche", "Joseph Fouché"] }],
    ["Cambacérès", ["archichancelier", "gourmet", "Code civil"], { variantes: ["Cambaceres"] }],
  ]),
  liste("np-530", "Figures de l'Antiquité", [
    ["Cléopâtre", ["Antoine", "nez", "aspic"], { variantes: ["Cleopatre"] }],
    ["Spartacus", ["gladiateur", "Crassus", "révolte des esclaves"]],
    ["Attila", ["Huns", "herbe", "fléau de Dieu"]],
    ["Hannibal", ["Carthage", "Alpes", "éléphants"]],
  ]),
  liste("np-531", "Philosophes grecs", [
    ["Platon", ["Académie", "idées", "caverne"]],
    ["Aristote", ["Lycée", "Alexandre", "Stagire"]],
    ["Épicure", ["plaisir", "jardin", "ataraxie"], { variantes: ["Epicure"] }],
    ["Zénon", ["paradoxes", "Achille", "tortue"], { variantes: ["Zenon", "Zénon d'Élée"] }],
  ]),
  liste("np-532", "Auteurs grecs", [
    ["Homère", ["aède", "aveugle", "Iliade"], { variantes: ["Homere"] }],
    ["Sophocle", ["Colone", "Antigone", "Œdipe roi"]],
    ["Eschyle", ["Perses", "Euménides", "Orestie"]],
    ["Hérodote", ["Halicarnasse", "Enquêtes", "père de l'histoire"], { variantes: ["Herodote"] }],
  ]),
  liste("np-533", "Grands explorateurs", [
    ["James Cook", ["Endeavour", "Nouvelle-Zélande", "Hawaï"], { variantes: ["capitaine Cook"], partielles: ["Cook"] }],
    ["Ibn Battûta", ["Tanger", "Rihla", "voyageur arabe"], { variantes: ["Ibn Battuta", "Ibn Battouta"], partielles: ["Battûta", "Battuta"] }],
    ["Livingstone", ["Stanley", "chutes Victoria", "Je présume"], { variantes: ["David Livingstone"] }],
    ["Amundsen", ["Fram", "Norvégien", "pôle Sud"], { variantes: ["Roald Amundsen"] }],
  ]),
  liste("np-534", "Pionniers de l'aviation", [
    ["Louis Blériot", ["monoplan", "Douvres", "traversée de la Manche"], { variantes: ["Louis Bleriot"], partielles: ["Blériot", "Bleriot"] }],
    ["Saint-Exupéry", ["Courrier sud", "Vol de nuit", "Petit Prince"], { variantes: ["Saint-Exupery", "Antoine de Saint-Exupéry", "Saint Exupéry"] }],
    ["Jean Mermoz", ["Aéropostale", "Atlantique Sud", "Croix-du-Sud"], { partielles: ["Mermoz"] }],
    ["Roland Garros", ["Méditerranée", "Bizerte", "stade"], { partielles: ["Garros"] }],
  ]),
  liste("np-535", "Astronomes", [
    ["Tycho Brahé", ["Danois", "nez d'argent", "Uraniborg"], { variantes: ["Tycho Brahe"], partielles: ["Brahé", "Brahe"] }],
    ["Halley", ["Greenwich", "Bayeux", "comète"], { variantes: ["Edmond Halley"] }],
    ["Hubble", ["galaxies", "expansion", "télescope spatial"], { variantes: ["Edwin Hubble"] }],
    ["Herschel", ["Bath", "infrarouge", "Uranus"], { variantes: ["William Herschel"] }],
  ]),
  liste("np-536", "Savants français", [
    ["Ampère", ["Lyon", "électrodynamique", "intensité"], { variantes: ["Ampere", "André-Marie Ampère"] }],
    ["Fourier", ["Auxerre", "chaleur", "séries"], { variantes: ["Joseph Fourier"] }],
    ["Lamarck", ["girafe", "transformisme", "Muséum"]],
    ["Cuvier", ["fossiles", "anatomie comparée", "paléontologie"], { variantes: ["Georges Cuvier"] }],
  ]),
  liste("np-537", "Femmes de science", [
    ["Ada Lovelace", ["Byron", "machine analytique", "programme"], { partielles: ["Lovelace"] }],
    ["Rosalind Franklin", ["cristallographie", "Watson", "ADN"], { partielles: ["Franklin"] }],
    ["Hypatie", ["Alexandrie", "mathématicienne", "lapidée"], { variantes: ["Hypatia"] }],
    ["Émilie du Châtelet", ["Cirey", "Voltaire", "traduction de Newton"], { variantes: ["Emilie du Chatelet", "Madame du Châtelet"], partielles: ["du Châtelet", "Châtelet", "Chatelet"] }],
  ]),
  liste("np-538", "Compositeurs français", [
    ["Debussy", ["Pelléas", "Prélude à l'après-midi d'un faune", "La Mer"], { variantes: ["Claude Debussy"] }],
    ["Bizet", ["Pêcheurs de perles", "L'Arlésienne", "Carmen"], { variantes: ["Georges Bizet"] }],
    ["Satie", ["Arcueil", "Honfleur", "Gymnopédies"], { variantes: ["Erik Satie"] }],
    ["Saint-Saëns", ["Samson et Dalila", "Danse macabre", "Carnaval des animaux"], { variantes: ["Saint-Saens", "Camille Saint-Saëns"] }],
  ]),
  liste("np-539", "Musiciens italiens", [
    ["Rossini", ["tournedos", "Guillaume Tell", "Barbier de Séville"], { variantes: ["Gioachino Rossini"] }],
    ["Monteverdi", ["Crémone", "madrigaux", "Orfeo"], { variantes: ["Claudio Monteverdi"] }],
    ["Paganini", ["diable", "caprices", "violon"], { variantes: ["Niccolò Paganini"] }],
    ["Bellini", ["Catane", "Les Puritains", "Casta diva"], { variantes: ["Vincenzo Bellini"] }],
  ]),
  liste("np-540", "Compositeurs germaniques", [
    ["Bach", ["fugue", "Leipzig", "cantor"], { variantes: ["Jean-Sébastien Bach"] }],
    ["Wagner", ["Walkyrie", "Tristan", "Bayreuth"], { variantes: ["Richard Wagner"] }],
    ["Brahms", ["Clara", "berceuse", "Danses hongroises"], { variantes: ["Johannes Brahms"] }],
    ["Schubert", ["lieder", "Inachevée", "La Truite"], { variantes: ["Franz Schubert"] }],
  ]),
  liste("np-541", "Géants du jazz", [
    ["Duke Ellington", ["Cotton Club", "big band", "Take the A Train"], { partielles: ["Ellington"] }],
    ["Miles Davis", ["trompette", "Ascenseur pour l'échafaud", "Kind of Blue"], { partielles: ["Davis"] }],
    ["Billie Holiday", ["Lady Day", "gardénia", "Strange Fruit"], { partielles: ["Holiday"] }],
    ["Charlie Parker", ["saxophone alto", "Bird", "bebop"], { partielles: ["Parker"] }],
  ]),
  liste("np-542", "Groupes de rock britanniques", [
    ["Led Zeppelin", ["dirigeable", "Robert Plant", "Stairway to Heaven"]],
    ["The Who", ["Townshend", "guitares cassées", "Tommy"], { variantes: ["Who", "les Who"] }],
    ["Pink Floyd", ["prisme", "The Wall", "Dark Side of the Moon"]],
    ["Oasis", ["Manchester", "Gallagher", "Wonderwall"]],
  ]),
  liste("np-543", "Voix de la chanson française", [
    ["Juliette Gréco", ["Saint-Germain-des-Prés", "robe noire", "Jolie Môme"], { variantes: ["Juliette Greco"], partielles: ["Gréco", "Greco"] }],
    ["Charles Trenet", ["fou chantant", "Narbonne", "La Mer"], { partielles: ["Trenet"] }],
    ["Georges Moustaki", ["Alexandrie", "barbe", "Le Métèque"], { partielles: ["Moustaki"] }],
    ["Serge Gainsbourg", ["Gitanes", "Birkin", "La Javanaise"], { partielles: ["Gainsbourg"] }],
  ]),
  liste("np-544", "Maîtres du cinéma d'auteur", [
    ["Kurosawa", ["Japon", "samouraïs", "Rashōmon"], { variantes: ["Akira Kurosawa"] }],
    ["Fellini", ["Rimini", "Mastroianni", "La Dolce Vita"], { variantes: ["Federico Fellini"] }],
    ["Kubrick", ["Shining", "Orange mécanique", "L'Odyssée de l'espace"], { variantes: ["Stanley Kubrick"] }],
    ["Bergman", ["Suède", "Fårö", "Le Septième Sceau"], { variantes: ["Ingmar Bergman"] }],
  ]),
  liste("np-545", "Photographes", [
    ["Nadar", ["Tournachon", "aérostat", "portraits de Baudelaire"]],
    ["Henri Cartier-Bresson", ["Leica", "Magnum", "instant décisif"], { partielles: ["Cartier-Bresson"] }],
    ["Robert Doisneau", ["Gentilly", "banlieue", "Le Baiser de l'Hôtel de Ville"], { partielles: ["Doisneau"] }],
    ["Robert Capa", ["guerre d'Espagne", "Omaha Beach", "milicien"], { partielles: ["Capa"] }],
  ]),
  liste("np-546", "Actrices de l'âge d'or hollywoodien", [
    ["Rita Hayworth", ["gant", "Orson Welles", "Gilda"], { partielles: ["Hayworth"] }],
    ["Greta Garbo", ["la Divine", "Suédoise", "Ninotchka"], { partielles: ["Garbo"] }],
    ["Audrey Hepburn", ["Givenchy", "Vacances romaines", "Diamants sur canapé"], { partielles: ["Hepburn"] }],
    ["Grace Kelly", ["Fenêtre sur cour", "Rainier", "Monaco"], { partielles: ["Kelly"] }],
  ]),
  liste("np-547", "Provinces d'Ancien Régime", [
    ["Dauphiné", ["Vizille", "Grenoble", "héritier du trône"], { variantes: ["Dauphine"] }],
    ["Berry", ["Nohant", "Très Riches Heures", "Bourges"]],
    ["Lorraine", ["mirabelle", "quiche", "Nancy"]],
    ["Artois", ["beffroi", "Lens", "Arras"]],
  ]),
  liste("np-548", "Villes d'Italie", [
    ["Vérone", ["Adige", "arènes", "Roméo et Juliette"], { variantes: ["Verone", "Verona"] }],
    ["Florence", ["Arno", "Médicis", "Ponte Vecchio"], { variantes: ["Firenze"] }],
    ["Naples", ["pizza", "Vésuve", "baie"], { variantes: ["Napoli"] }],
    ["Sienne", ["Toscane", "louve", "Palio"], { variantes: ["Siena"] }],
  ]),
  liste("np-549", "Villes ibériques", [
    ["Séville", ["Andalousie", "Giralda", "Guadalquivir"], { variantes: ["Seville", "Sevilla"] }],
    ["Grenade", ["Boabdil", "Sierra Nevada", "Albaicín"], { variantes: ["Granada"] }],
    ["Barcelone", ["Ramblas", "Gaudí", "Sagrada Família"], { variantes: ["Barcelona"] }],
    ["Porto", ["vin", "Ribeira", "Douro"], { variantes: ["Oporto"] }],
  ]),
  liste("np-550", "Villes allemandes", [
    ["Berlin", ["Spree", "porte de Brandebourg", "Mur"]],
    ["Munich", ["bière", "Bavière", "Oktoberfest"], { variantes: ["München"] }],
    ["Cologne", ["Rhin", "eau de toilette", "cathédrale"], { variantes: ["Köln", "Koln"] }],
    ["Dresde", ["Elbe", "Zwinger", "capitale de la Saxe"], { variantes: ["Dresden"] }],
  ]),
];
