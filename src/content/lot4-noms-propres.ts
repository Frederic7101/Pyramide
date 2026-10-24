import type { ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc } from "./briques";

/**
 * Lot 4 : 50 listes de Noms Propres de niveau facile, rédigées par Claude, à relire (version 2026-10-23).
 * Toutes les briques sont des associations, de la plus évocatrice à la plus décisive.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: string[], options?: { variantes?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "facile",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => assoc(b)), ...options })),
  };
}

export const LOT4_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-401", "Pays d'Europe", [
    ["Italie", ["pizza", "Toscane", "botte"]],
    ["Suisse", ["chocolat", "montres", "Genève"]],
    ["Grèce", ["Acropole", "feta", "Athènes"], { variantes: ["Grece"] }],
    ["Belgique", ["frites", "Bruxelles", "Manneken-Pis"]],
  ]),
  liste("np-402", "Pays lointains", [
    ["Japon", ["sushis", "samouraïs", "Tokyo"]],
    ["Brésil", ["café", "Amazonie", "Brasilia"], { variantes: ["Bresil"] }],
    ["Canada", ["érable", "caribou", "Québec"]],
    ["Australie", ["kangourou", "koala", "boomerang"]],
  ]),
  liste("np-403", "Grandes villes du monde", [
    ["New York", ["Manhattan", "gratte-ciel", "Big Apple"], { variantes: ["New-York"] }],
    ["Londres", ["Tamise", "Buckingham", "bus rouge"]],
    ["Rio de Janeiro", ["Copacabana", "Corcovado", "carnaval"], { variantes: ["Rio"] }],
    ["Venise", ["gondoles", "canaux", "doges"]],
  ]),
  liste("np-404", "Villes du Midi", [
    ["Nice", ["Promenade des Anglais", "salade", "Côte d'Azur"]],
    ["Toulouse", ["Ville rose", "cassoulet", "Airbus"]],
    ["Avignon", ["pont", "papes", "danse"]],
    ["Cannes", ["Croisette", "festival", "Palme d'or"]],
  ]),
  liste("np-405", "Monuments de Paris", [
    ["Tour Eiffel", ["fer", "Exposition universelle", "Champ-de-Mars"], { partielles: ["Eiffel"] }],
    ["Arc de Triomphe", ["Étoile", "Soldat inconnu", "Champs-Élysées"]],
    ["Notre-Dame", ["Quasimodo", "cathédrale", "gargouilles"], { variantes: ["Notre-Dame de Paris", "Notre Dame"] }],
    ["Sacré-Cœur", ["Montmartre", "basilique", "blanche"], { variantes: ["Sacre-Coeur", "Sacré-Coeur", "Sacré Cœur"] }],
  ]),
  liste("np-406", "Monuments du monde", [
    ["Colisée", ["gladiateurs", "arène", "Rome"], { variantes: ["Colisee"] }],
    ["Taj Mahal", ["mausolée", "marbre", "Inde"], { variantes: ["Taj Mahall"] }],
    ["Grande Muraille de Chine", ["Ming", "Mongols", "Pékin"], { variantes: ["Grande Muraille", "Muraille de Chine"] }],
    ["Statue de la Liberté", ["flambeau", "Bartholdi", "Ellis Island"], { variantes: ["Statue de la Liberte"] }],
  ]),
  liste("np-407", "Planètes", [
    ["Mars", ["rouge", "Curiosity", "Phobos"]],
    ["Jupiter", ["géante", "Grande Tache rouge", "Io"]],
    ["Saturne", ["anneaux", "Titan", "sixième"]],
    ["Vénus", ["étoile du Berger", "Milo", "brûlante"], { variantes: ["Venus"] }],
  ]),
  liste("np-408", "La bande à Mickey", [
    ["Mickey", ["souris", "Minnie", "oreilles"]],
    ["Donald", ["canard", "Daisy", "marin"]],
    ["Picsou", ["oncle", "coffre", "sou fétiche"]],
    ["Dingo", ["chien", "Goofy", "maladroit"]],
  ]),
  liste("np-409", "Héroïnes de contes", [
    ["Blanche-Neige", ["nains", "pomme", "miroir"], { variantes: ["Blanche Neige"] }],
    ["Cendrillon", ["pantoufle", "citrouille", "minuit"]],
    ["La Belle au bois dormant", ["fuseau", "cent ans", "Aurore"], { variantes: ["Belle au bois dormant"] }],
    ["Raiponce", ["cheveux", "tour", "Grimm"]],
  ]),
  liste("np-410", "Héros de contes", [
    ["Le Petit Chaperon rouge", ["loup", "galette", "mère-grand"], { variantes: ["Petit Chaperon rouge"], partielles: ["Chaperon rouge"] }],
    ["Le Petit Poucet", ["cailloux", "ogre", "bottes de sept lieues"], { variantes: ["Petit Poucet"], partielles: ["Poucet"] }],
    ["Pinocchio", ["nez", "Geppetto", "mensonge"]],
    ["Peter Pan", ["Crochet", "Wendy", "fée Clochette"]],
  ]),
  liste("np-411", "Héros de BD franco-belge", [
    ["Tintin", ["houppette", "reporter", "Hergé"]],
    ["Lucky Luke", ["cow-boy", "Dalton", "Jolly Jumper"]],
    ["Gaston Lagaffe", ["Franquin", "Prunelle", "Mademoiselle Jeanne"], { partielles: ["Gaston", "Lagaffe"] }],
    ["Spirou", ["groom", "Fantasio", "Marsupilami"]],
  ]),
  liste("np-412", "Super-héros", [
    ["Superman", ["Krypton", "Clark Kent", "cape"]],
    ["Batman", ["Gotham", "Joker", "chauve-souris"]],
    ["Spider-Man", ["araignée", "toile", "Peter Parker"], { variantes: ["Spiderman", "Spider Man"] }],
    ["Hulk", ["vert", "Banner", "Avengers"]],
  ]),
  liste("np-413", "Rois de France", [
    ["Louis XIV", ["Versailles", "Soleil", "Colbert"], { variantes: ["Louis 14", "Louis Quatorze"] }],
    ["Henri IV", ["poule au pot", "Navarre", "Ravaillac"], { variantes: ["Henri 4", "Henri Quatre"] }],
    ["François Ier", ["Chambord", "Marignan", "Renaissance"], { variantes: ["François 1er", "François premier", "Francois Ier", "Francois 1er"] }],
    ["Louis XVI", ["Marie-Antoinette", "Varennes", "guillotine"], { variantes: ["Louis 16", "Louis Seize"] }],
  ]),
  liste("np-414", "Grandes figures de l'histoire de France", [
    ["Napoléon", ["Corse", "Joséphine", "Waterloo"], { variantes: ["Napoleon", "Napoléon Bonaparte", "Bonaparte"] }],
    ["Jeanne d'Arc", ["Orléans", "Pucelle", "bûcher"], { variantes: ["Jeanne d Arc"] }],
    ["Charlemagne", ["barbe fleurie", "école", "empereur"]],
    ["Vercingétorix", ["Gaulois", "Alésia", "César"], { variantes: ["Vercingetorix"] }],
  ]),
  liste("np-415", "Chanteurs de légende", [
    ["Johnny Hallyday", ["rockeur", "Laeticia", "Allumer le feu"], { partielles: ["Hallyday", "Johnny"] }],
    ["Édith Piaf", ["môme", "Vie en rose", "moineau"], { variantes: ["Edith Piaf"], partielles: ["Piaf"] }],
    ["Charles Aznavour", ["Bohème", "Arménie", "Emmenez-moi"], { partielles: ["Aznavour"] }],
    ["Claude François", ["Magnolias", "Alexandrie", "Lundi au soleil"], { variantes: ["Cloclo"] }],
  ]),
  liste("np-416", "Chanteuses", [
    ["Céline Dion", ["Québec", "René", "Las Vegas"], { variantes: ["Celine Dion"], partielles: ["Dion"] }],
    ["Mylène Farmer", ["rousse", "Libertine", "Désenchantée"], { variantes: ["Mylene Farmer"], partielles: ["Farmer"] }],
    ["Dalida", ["Bambino", "Égypte", "Paroles, paroles"]],
    ["Vanessa Paradis", ["Joe le taxi", "Johnny Depp", "Lily-Rose"], { partielles: ["Paradis"] }],
  ]),
  liste("np-417", "Stars de la pop et du rock", [
    ["Michael Jackson", ["Thriller", "moonwalk", "gant blanc"], { partielles: ["Jackson"] }],
    ["Elvis Presley", ["King", "Memphis", "Love Me Tender"], { variantes: ["Elvis"], partielles: ["Presley"] }],
    ["Madonna", ["Like a Virgin", "Material Girl", "Ciccone"]],
    ["Freddie Mercury", ["Queen", "moustache", "Bohemian Rhapsody"], { variantes: ["Freddy Mercury"], partielles: ["Mercury"] }],
  ]),
  liste("np-418", "Groupes de musique", [
    ["Beatles", ["Liverpool", "Lennon", "Yellow Submarine"], { variantes: ["The Beatles", "Les Beatles"] }],
    ["Rolling Stones", ["Jagger", "langue", "Satisfaction"], { variantes: ["The Rolling Stones", "Les Rolling Stones"], partielles: ["Stones"] }],
    ["ABBA", ["Suède", "Dancing Queen", "Mamma Mia"]],
    ["Indochine", ["Sirkis", "L'Aventurier", "Trois nuits par semaine"]],
  ]),
  liste("np-419", "Footballeurs", [
    ["Zinédine Zidane", ["Zizou", "coup de boule", "Real Madrid"], { variantes: ["Zinedine Zidane"], partielles: ["Zidane"] }],
    ["Kylian Mbappé", ["Bondy", "PSG", "vitesse"], { variantes: ["Kylian Mbappe"], partielles: ["Mbappé", "Mbappe"] }],
    ["Michel Platini", ["Juventus", "coup franc", "UEFA"], { partielles: ["Platini"] }],
    ["Pelé", ["Brésil", "Santos", "roi"], { variantes: ["Pele"] }],
  ]),
  liste("np-420", "Champions de tennis", [
    ["Roger Federer", ["Bâle", "élégance", "Wimbledon"], { partielles: ["Federer"] }],
    ["Rafael Nadal", ["Majorque", "terre battue", "Roland-Garros"], { partielles: ["Nadal"] }],
    ["Yannick Noah", ["dreadlocks", "Saga Africa", "Joakim"], { partielles: ["Noah"] }],
    ["Serena Williams", ["Venus", "sœur", "Américaine"], { partielles: ["Williams"] }],
  ]),
  liste("np-421", "Légendes du sport", [
    ["Usain Bolt", ["Jamaïque", "éclair", "sprint"], { partielles: ["Bolt"] }],
    ["Teddy Riner", ["judo", "géant", "Guadeloupe"], { partielles: ["Riner"] }],
    ["Mohamed Ali", ["boxe", "papillon", "Cassius Clay"], { variantes: ["Muhammad Ali", "Mohammed Ali"], partielles: ["Ali"] }],
    ["Michael Phelps", ["natation", "médailles", "Baltimore"], { partielles: ["Phelps"] }],
  ]),
  liste("np-422", "Champions du Tour de France", [
    ["Bernard Hinault", ["Blaireau", "Bretagne", "Yffiniac"], { partielles: ["Hinault"] }],
    ["Eddy Merckx", ["Cannibale", "Belgique", "Molteni"], { partielles: ["Merckx"] }],
    ["Raymond Poulidor", ["éternel second", "Poupou", "Limousin"], { partielles: ["Poulidor"] }],
    ["Jacques Anquetil", ["Normand", "contre-la-montre", "Rouen"], { partielles: ["Anquetil"] }],
  ]),
  liste("np-423", "Acteurs français", [
    ["Gérard Depardieu", ["Obélix", "Cyrano", "Russie"], { variantes: ["Gerard Depardieu"], partielles: ["Depardieu"] }],
    ["Jean-Paul Belmondo", ["Bébel", "Le Magnifique", "Le Professionnel"], { variantes: ["Jean Paul Belmondo"], partielles: ["Belmondo"] }],
    ["Louis de Funès", ["gendarme", "Fantômas", "Rabbi Jacob"], { variantes: ["Louis de Funes"], partielles: ["de Funès", "De Funès", "de Funes", "Funès"] }],
    ["Alain Delon", ["Samouraï", "La Piscine", "Romy"], { partielles: ["Delon"] }],
  ]),
  liste("np-424", "Actrices françaises", [
    ["Brigitte Bardot", ["BB", "Saint-Tropez", "animaux"], { partielles: ["Bardot"] }],
    ["Catherine Deneuve", ["Parapluies", "Cherbourg", "Belle de jour"], { partielles: ["Deneuve"] }],
    ["Audrey Tautou", ["Amélie Poulain", "Da Vinci Code", "Coco"], { partielles: ["Tautou"] }],
    ["Marion Cotillard", ["Piaf", "oscar", "Taxi"], { partielles: ["Cotillard"] }],
  ]),
  liste("np-425", "Stars d'Hollywood", [
    ["Marilyn Monroe", ["blonde", "robe blanche", "Kennedy"], { partielles: ["Monroe", "Marilyn"] }],
    ["Charlie Chaplin", ["muet", "canne", "Temps modernes"], { partielles: ["Chaplin"] }],
    ["Leonardo DiCaprio", ["Titanic", "Gatsby", "Revenant"], { variantes: ["Leonardo Di Caprio", "Léonardo DiCaprio"], partielles: ["DiCaprio", "Di Caprio"] }],
    ["Tom Cruise", ["Top Gun", "Mission impossible", "scientologie"], { partielles: ["Cruise"] }],
  ]),
  liste("np-426", "Réalisateurs", [
    ["Steven Spielberg", ["Dents de la mer", "Jurassic Park", "Schindler"], { partielles: ["Spielberg"] }],
    ["Luc Besson", ["Grand Bleu", "Nikita", "Cinquième Élément"], { partielles: ["Besson"] }],
    ["Alfred Hitchcock", ["suspense", "Psychose", "Les Oiseaux"], { partielles: ["Hitchcock"] }],
    ["James Cameron", ["Avatar", "Terminator", "Abyss"], { partielles: ["Cameron"] }],
  ]),
  liste("np-427", "Héros de dessins animés", [
    ["Bob l'éponge", ["ananas", "Patrick", "carré"], { variantes: ["Bob l'eponge", "Bob l éponge"] }],
    ["Scooby-Doo", ["dogue", "Sammy", "Mystère"], { variantes: ["Scooby Doo", "Scoubidou"] }],
    ["Pikachu", ["Pokémon", "électrique", "Sacha"]],
    ["Bugs Bunny", ["lapin", "carotte", "Quoi de neuf docteur"], { partielles: ["Bugs"] }],
  ]),
  liste("np-428", "Héros de jeux vidéo", [
    ["Mario", ["plombier", "Luigi", "champignon"]],
    ["Sonic", ["hérisson", "bleu", "Sega"]],
    ["Pac-Man", ["fantômes", "pastilles", "labyrinthe"], { variantes: ["Pacman", "Pac Man"] }],
    ["Lara Croft", ["Tomb Raider", "aventurière", "tresse"], { partielles: ["Croft"] }],
  ]),
  liste("np-429", "Marques automobiles", [
    ["Peugeot", ["lion", "Sochaux", "Montbéliard"]],
    ["Renault", ["losange", "Clio", "Billancourt"]],
    ["Ferrari", ["cheval cabré", "rouge", "Maranello"]],
    ["Citroën", ["chevrons", "deux-chevaux", "DS"], { variantes: ["Citroen"] }],
  ]),
  liste("np-430", "Marques de mode", [
    ["Chanel", ["Coco", "parfum", "petite robe noire"]],
    ["Louis Vuitton", ["malle", "monogramme", "LV"], { partielles: ["Vuitton"] }],
    ["Dior", ["New Look", "Christian", "avenue Montaigne"]],
    ["Lacoste", ["crocodile", "polo", "René"]],
  ]),
  liste("np-431", "Géants de la tech", [
    ["Apple", ["pomme", "iPhone", "Steve Jobs"]],
    ["Google", ["recherche", "Android", "Gmail"]],
    ["Microsoft", ["Windows", "Bill Gates", "Xbox"]],
    ["Amazon", ["colis", "Prime", "Bezos"]],
  ]),
  liste("np-432", "Marques gourmandes", [
    ["Coca-Cola", ["soda", "bouteille", "recette secrète"], { variantes: ["Coca Cola", "Coca"] }],
    ["Nutella", ["pâte à tartiner", "noisettes", "Ferrero"]],
    ["Haribo", ["bonbons", "Tagada", "ours"]],
    ["Danone", ["yaourt", "Actimel", "Danette"]],
  ]),
  liste("np-433", "Pays d'Afrique", [
    ["Égypte", ["pyramides", "Nil", "Le Caire"], { variantes: ["Egypte"] }],
    ["Maroc", ["tajine", "Marrakech", "Rabat"]],
    ["Sénégal", ["Dakar", "Lions de la Teranga", "Senghor"], { variantes: ["Senegal"] }],
    ["Madagascar", ["Tananarive", "lémuriens", "île"]],
  ]),
  liste("np-434", "Outre-mer français", [
    ["Martinique", ["Fort-de-France", "Madinina", "montagne Pelée"]],
    ["La Réunion", ["piton de la Fournaise", "océan Indien", "Saint-Denis"], { variantes: ["Réunion", "Reunion", "La Reunion"] }],
    ["Tahiti", ["vahiné", "Polynésie", "Papeete"]],
    ["Guyane", ["Kourou", "fusée", "Cayenne"]],
  ]),
  liste("np-435", "Régions de France", [
    ["Bretagne", ["crêpes", "menhirs", "Rennes"]],
    ["Alsace", ["choucroute", "cigognes", "Strasbourg"]],
    ["Provence", ["lavande", "cigales", "Aix"]],
    ["Normandie", ["camembert", "Débarquement", "Rouen"]],
  ]),
  liste("np-436", "Massifs montagneux de France", [
    ["Alpes", ["Mont-Blanc", "Chamonix", "Savoie"]],
    ["Pyrénées", ["Andorre", "Tourmalet", "Lourdes"], { variantes: ["Pyrenees"] }],
    ["Jura", ["comté", "vin jaune", "Franche-Comté"]],
    ["Vosges", ["ballon", "Gérardmer", "Lorraine"]],
  ]),
  liste("np-437", "Mers et océans", [
    ["Méditerranée", ["Grande Bleue", "Corse", "Marseille"], { variantes: ["Mediterranee", "Mer Méditerranée"] }],
    ["Pacifique", ["Hawaï", "le plus grand", "Polynésie"], { variantes: ["Océan Pacifique", "Ocean Pacifique"] }],
    ["Manche", ["tunnel", "Calais", "Douvres"], { variantes: ["La Manche"] }],
    ["Mer Morte", ["sel", "flotter", "Israël"], { partielles: ["Morte"] }],
  ]),
  liste("np-438", "Le village d'Astérix", [
    ["Obélix", ["menhir", "sanglier", "Idéfix"], { variantes: ["Obelix"] }],
    ["Panoramix", ["druide", "serpe", "potion magique"]],
    ["Abraracourcix", ["chef", "bouclier", "Bonemine"]],
    ["Assurancetourix", ["barde", "ligoté", "lyre"]],
  ]),
  liste("np-439", "L'entourage de Tintin", [
    ["Haddock", ["mille sabords", "whisky", "Moulinsart"], { variantes: ["Capitaine Haddock"] }],
    ["Milou", ["fox-terrier", "os", "blanc"]],
    ["Tournesol", ["savant", "sourd", "pendule"], { variantes: ["Professeur Tournesol"] }],
    ["Castafiore", ["cantatrice", "bijoux", "Marguerite"], { variantes: ["Bianca Castafiore", "La Castafiore"] }],
  ]),
  liste("np-440", "Personnages de Harry Potter", [
    ["Hermione", ["Ron", "studieuse", "Gryffondor"]],
    ["Dumbledore", ["directeur", "barbe", "Poudlard"]],
    ["Voldemort", ["Tom Jedusor", "serpent", "mage noir"]],
    ["Hagrid", ["géant", "garde-chasse", "Crockdur"]],
  ]),
  liste("np-441", "Personnages de Star Wars", [
    ["Dark Vador", ["masque", "respiration", "Empire"], { variantes: ["Darth Vader", "Dark Vader"], partielles: ["Vador"] }],
    ["Yoda", ["petit", "oreilles pointues", "maître Jedi"]],
    ["Chewbacca", ["Wookiee", "poils", "Han Solo"]],
    ["Luke Skywalker", ["sabre laser", "Leia", "Tatooine"], { partielles: ["Luke", "Skywalker"] }],
  ]),
  liste("np-442", "Personnages de Molière", [
    ["Harpagon", ["avare", "cassette", "Cléante"]],
    ["Tartuffe", ["dévot", "Orgon", "imposteur"]],
    ["Scapin", ["fourberies", "galère", "valet"]],
    ["Monsieur Jourdain", ["bourgeois gentilhomme", "prose", "Mamamouchi"], { variantes: ["M. Jourdain"], partielles: ["Jourdain"] }],
  ]),
  liste("np-443", "Héros de romans d'aventures", [
    ["D'Artagnan", ["mousquetaires", "Gascon", "Dumas"], { variantes: ["d'Artagnan", "Dartagnan"], partielles: ["Artagnan"] }],
    ["Sherlock Holmes", ["Watson", "loupe", "Baker Street"], { partielles: ["Holmes", "Sherlock"] }],
    ["Robinson Crusoé", ["naufragé", "île", "Vendredi"], { variantes: ["Robinson Crusoe", "Robinson"], partielles: ["Crusoé", "Crusoe"] }],
    ["Phileas Fogg", ["quatre-vingts jours", "Passepartout", "pari"], { variantes: ["Philéas Fogg"], partielles: ["Fogg"] }],
  ]),
  liste("np-444", "Héros de films", [
    ["James Bond", ["espion", "Martini", "Aston Martin"], { partielles: ["Bond"] }],
    ["Indiana Jones", ["fouet", "archéologue", "Harrison Ford"], { variantes: ["Indy"], partielles: ["Indiana", "Jones"] }],
    ["Rocky", ["boxeur", "Philadelphie", "Stallone"]],
    ["Zorro", ["masque", "épée", "Don Diego"]],
  ]),
  liste("np-445", "Animaux héros", [
    ["Babar", ["éléphant", "Céleste", "roi"]],
    ["Garfield", ["chat", "lasagnes", "Odie"]],
    ["Flipper", ["dauphin", "Floride", "Sandy"]],
    ["Lassie", ["colley", "fidèle", "chienne"]],
  ]),
  liste("np-446", "Grands savants", [
    ["Einstein", ["relativité", "langue tirée", "génie"], { variantes: ["Albert Einstein"] }],
    ["Marie Curie", ["radium", "Pologne", "deux prix Nobel"], { partielles: ["Curie"] }],
    ["Newton", ["pomme", "gravitation", "Anglais"], { variantes: ["Isaac Newton"] }],
    ["Darwin", ["évolution", "singe", "Galápagos"], { variantes: ["Charles Darwin"] }],
  ]),
  liste("np-447", "Aventuriers et pionniers", [
    ["Christophe Colomb", ["Amérique", "caravelles", "Santa María"], { partielles: ["Colomb"] }],
    ["Neil Armstrong", ["Lune", "Apollo", "petit pas"], { partielles: ["Armstrong"] }],
    ["Marco Polo", ["Venise", "Chine", "soie"], { partielles: ["Polo"] }],
    ["Charles Lindbergh", ["Atlantique", "avion", "Spirit of Saint Louis"], { partielles: ["Lindbergh"] }],
  ]),
  liste("np-448", "Présidents de la République", [
    ["Charles de Gaulle", ["croix de Lorraine", "appel", "Colombey"], { variantes: ["De Gaulle", "de Gaulle", "Général de Gaulle"] }],
    ["Jacques Chirac", ["Corrèze", "pommes", "Bernadette"], { partielles: ["Chirac"] }],
    ["François Mitterrand", ["rose", "Jarnac", "Mazarine"], { variantes: ["Francois Mitterrand"], partielles: ["Mitterrand"] }],
    ["Emmanuel Macron", ["Brigitte", "En marche", "Amiens"], { partielles: ["Macron"] }],
  ]),
  liste("np-449", "Présidents américains", [
    ["Abraham Lincoln", ["esclavage", "haut-de-forme", "Gettysburg"], { partielles: ["Lincoln"] }],
    ["John F. Kennedy", ["Dallas", "Jackie", "Cuba"], { variantes: ["John Kennedy", "JFK"], partielles: ["Kennedy"] }],
    ["George Washington", ["premier", "dollar", "cerisier"], { partielles: ["Washington"] }],
    ["Barack Obama", ["Michelle", "Hawaï", "Yes we can"], { partielles: ["Obama"] }],
  ]),
  liste("np-450", "Légendes du roi Arthur", [
    ["Arthur", ["Excalibur", "Table ronde", "Camelot"], { variantes: ["Roi Arthur"] }],
    ["Merlin", ["enchanteur", "Brocéliande", "Viviane"]],
    ["Lancelot", ["du Lac", "Guenièvre", "chevalier"]],
    ["Perceval", ["Graal", "Gallois", "Kaamelott"]],
  ]),
];
