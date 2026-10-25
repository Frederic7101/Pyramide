import type { Brique, ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc, inc } from "./briques";

/**
 * Lot 4 : 50 listes de Noms Propres de niveau facile, rédigées par Claude, à relire (version 2026-10-23).
 * Briques 1 et 2 : associations, de la plus évocatrice à la plus décisive ; 3e brique : une incitation
 * évidente (contraire ou pendant usuel) quand il en existe une.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: (string | Brique)[], options?: { variantes?: string[]; surnoms?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "facile",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => (typeof b === "string" ? assoc(b) : b)), ...options })),
  };
}

export const LOT4_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-401", "Pays d'Europe", [
    ["Italie", ["pizza", "Toscane", inc("oreiller", "lit", "lie", "lit", "fin")]],
    ["Suisse", ["chocolat", "montres", inc("ramoneur", "suie", "Sui")]],
    ["Grèce", ["Acropole", "feta", "Athènes"], { variantes: ["Grece"] }],
    ["Belgique", ["frites", "Bruxelles", inc("Bête", "belle", "Bel")]],
  ]),
  liste("np-402", "Pays lointains", [
    ["Japon", ["sushis", "samouraïs", inc("Avignon", "pont", "pon", "pon", "fin")]],
    ["Brésil", ["café", "Amazonie", inc("elle", "il", "il", undefined, "fin")], { variantes: ["Bresil"] }],
    ["Canada", ["érable", "caribou", inc("coin-coin", "canard", "Cana")]],
    ["Australie", ["kangourou", "koala", inc("chien", "os", "Aus", "os")]],
  ]),
  liste("np-403", "Grandes villes du monde", [
    ["New York", ["Manhattan", "gratte-ciel", "Big Apple"], { variantes: ["New-York"] }],
    ["Londres", ["Tamise", "Buckingham", inc("court", "long", "Lon")]],
    ["Rio de Janeiro", ["Copacabana", "Corcovado", inc("pleure", "rit", "Ri")], { variantes: ["Rio"] }],
    ["Venise", ["gondoles", "canaux", inc("aller", "venir", "Veni")]],
  ]),
  liste("np-404", "Villes du Midi", [
    ["Nice", ["Promenade des Anglais", "salade", inc("oiseau", "nid", "Ni")]],
    ["Toulouse", ["Ville rose", "cassoulet", inc("rien", "tout", "Tou")]],
    ["Avignon", ["pont", "papes", "danse"]],
    ["Cannes", ["Croisette", "festival", inc("canard", "cane", "Can")]],
  ]),
  liste("np-405", "Monuments de Paris", [
    ["Tour Eiffel", ["fer", "Champ-de-Mars", inc("rien", "tout", "Tou")], { partielles: ["Eiffel"] }],
    ["Arc de Triomphe", ["Étoile", "Soldat inconnu", inc("flèche", "arc", "Arc")]],
    ["Notre-Dame", ["Quasimodo", "cathédrale", inc("votre", "notre", "Notre")], { variantes: ["Notre-Dame de Paris", "Notre Dame"] }],
    ["Sacré-Cœur", ["Montmartre", "basilique", inc("profane", "sacré", "Sacré")], { variantes: ["Sacre-Coeur", "Sacré-Coeur", "Sacré Cœur"] }],
  ]),
  liste("np-406", "Monuments du monde", [
    ["Colisée", ["gladiateurs", "Rome", inc("paquet", "colis", "Coli")], { variantes: ["Colisee"] }],
    ["Taj Mahal", ["mausolée", "marbre", "Inde"], { variantes: ["Taj Mahall"] }],
    ["Grande Muraille de Chine", ["Mongols", "Pékin", inc("petite", "grande", "Grande")], { variantes: ["Grande Muraille", "Muraille de Chine"] }],
    ["Statue de la Liberté", ["flambeau", "Bartholdi", inc("égalité", "liberté", "Liberté", undefined, "fin")], { variantes: ["Statue de la Liberte"] }],
  ]),
  liste("np-407", "Planètes", [
    ["Mars", ["rouge", "Curiosity", inc("étang", "mare", "Mar")]],
    ["Jupiter", ["géante", "Grande Tache rouge", inc("pantalon", "jupe", "Jup")]],
    ["Saturne", ["anneaux", "Titan", inc("diable", "Satan", "Sat")]],
    ["Vénus", ["étoile du Berger", "Milo", "brûlante"], { variantes: ["Venus"] }],
  ]),
  liste("np-408", "La bande à Mickey", [
    ["Mickey", ["souris", "Minnie", inc("ré", "mi", "Mi")]],
    ["Donald", ["canard", "Daisy", inc("prends", "donne", "Don")]],
    ["Picsou", ["oncle", "coffre", inc("cœur", "pique", "Pic")]],
    ["Dingo", ["chien", "Goofy", inc("Noël", "dinde", "Din")]],
  ]),
  liste("np-409", "Héroïnes de contes", [
    ["Blanche-Neige", ["nains", "pomme", inc("noire", "blanche", "Blanche")], { variantes: ["Blanche Neige"] }],
    ["Cendrillon", ["pantoufle", "citrouille", inc("avec", "sans", "Cen", "san")]],
    ["La Belle au bois dormant", ["fuseau", "cent ans", inc("Bête", "belle", "Belle")], { variantes: ["Belle au bois dormant"] }],
    ["Raiponce", ["cheveux", "tour", inc("question", "réponse", "Raiponce", "réponse")]],
  ]),
  liste("np-410", "Héros de contes", [
    ["Le Petit Chaperon rouge", ["loup", "galette", inc("grand", "petit", "Petit")], { variantes: ["Petit Chaperon rouge"], partielles: ["Chaperon rouge"] }],
    ["Le Petit Poucet", ["cailloux", "ogre", inc("index", "pouce", "Pouc", "pouc")], { variantes: ["Petit Poucet"], partielles: ["Poucet"] }],
    ["Pinocchio", ["nez", "Geppetto", inc("mieux", "pis", "Pi")]],
    ["Peter Pan", ["Crochet", "Wendy", "fée Clochette"]],
  ]),
  liste("np-411", "Héros de BD franco-belge", [
    ["Tintin", ["houppette", "Hergé", inc("romarin", "thym", "Tin", "thym")]],
    ["Lucky Luke", ["cow-boy", "Dalton", "Jolly Jumper"]],
    ["Gaston Lagaffe", ["Franquin", "Prunelle", "Mademoiselle Jeanne"], { partielles: ["Gaston", "Lagaffe"] }],
    ["Spirou", ["groom", "Fantasio", "Marsupilami"]],
  ]),
  liste("np-412", "Super-héros", [
    ["Superman", ["Krypton", "Clark Kent", inc("hyper", "super", "Super")]],
    ["Batman", ["Gotham", "Joker", inc("carotte", "bâton", "Bat", "bât")]],
    ["Spider-Man", ["araignée", "toile", "Peter Parker"], { variantes: ["Spiderman", "Spider Man"] }],
    ["Hulk", ["vert", "Banner", "Avengers"]],
  ]),
  liste("np-413", "Rois de France", [
    ["Louis XIV", ["Versailles", "Soleil", inc("treize", "quatorze", "XIV", "quatorze", "fin")], { variantes: ["Louis 14", "Louis Quatorze"] }],
    ["Henri IV", ["poule au pot", "Ravaillac", inc("trois", "quatre", "IV", "quatre", "fin")], { variantes: ["Henri 4", "Henri Quatre"] }],
    ["François Ier", ["Chambord", "Marignan", inc("dernier", "premier", "Ier", "premier", "fin")], { variantes: ["François 1er", "François premier", "Francois Ier", "Francois 1er"] }],
    ["Louis XVI", ["Marie-Antoinette", "guillotine", inc("quinze", "seize", "XVI", "seize", "fin")], { variantes: ["Louis 16", "Louis Seize"] }],
  ]),
  liste("np-414", "Grandes figures de l'histoire de France", [
    ["Napoléon", ["Corse", "Waterloo", inc("serviette", "nappe", "Nap")], { variantes: ["Napoleon", "Napoléon Bonaparte", "Bonaparte"] }],
    ["Jeanne d'Arc", ["Orléans", "bûcher", inc("flèche", "arc", "Arc", undefined, "fin")], { variantes: ["Jeanne d Arc"] }],
    ["Charlemagne", ["école", "empereur", inc("souris", "chat", "Cha")]],
    ["Vercingétorix", ["Gaulois", "Alésia", inc("asticot", "ver", "Ver")], { variantes: ["Vercingetorix"] }],
  ]),
  liste("np-415", "Chanteurs de légende", [
    ["Johnny Hallyday", ["rockeur", "Laeticia", inc("Baba", "Ali", "Hally", "Ali")], { partielles: ["Hallyday", "Johnny"] }],
    ["Édith Piaf", ["môme", "moineau", inc("forte", "piano", "Pia")], { variantes: ["Edith Piaf"], partielles: ["Piaf"] }],
    ["Charles Aznavour", ["Bohème", "Arménie", "Emmenez-moi"], { partielles: ["Aznavour"] }],
    ["Claude François", ["Magnolias", "Alexandrie", "Lundi au soleil"], { variantes: ["Cloclo"] }],
  ]),
  liste("np-416", "Chanteuses", [
    ["Céline Dion", ["Québec", "René", "Las Vegas"], { variantes: ["Celine Dion"], partielles: ["Dion"] }],
    ["Mylène Farmer", ["rousse", "Libertine", "Désenchantée"], { variantes: ["Mylene Farmer"], partielles: ["Farmer"] }],
    ["Dalida", ["Bambino", "Égypte", "Paroles, paroles"]],
    ["Vanessa Paradis", ["Joe le taxi", "Lily-Rose", inc("enfer", "paradis", "Paradis")], { partielles: ["Paradis"] }],
  ]),
  liste("np-417", "Stars de la pop et du rock", [
    ["Michael Jackson", ["Thriller", "moonwalk", "gant blanc"], { partielles: ["Jackson"] }],
    ["Elvis Presley", ["King", "Memphis", inc("il", "elle", "El", "el")], { variantes: ["Elvis"], partielles: ["Presley"] }],
    ["Madonna", ["Like a Virgin", "Material Girl", "Ciccone"]],
    ["Freddie Mercury", ["Queen", "moustache", inc("père", "mère", "Mer", "mèr")], { variantes: ["Freddy Mercury"], partielles: ["Mercury"] }],
  ]),
  liste("np-418", "Groupes de musique", [
    ["Beatles", ["Liverpool", "Lennon", "Yellow Submarine"], { variantes: ["The Beatles", "Les Beatles"] }],
    ["Rolling Stones", ["Jagger", "langue", "Satisfaction"], { variantes: ["The Rolling Stones", "Les Rolling Stones"], partielles: ["Stones"] }],
    ["ABBA", ["Suède", "Dancing Queen", "Mamma Mia"]],
    ["Indochine", ["Sirkis", "L'Aventurier", inc("Gandhi", "Inde", "Ind")]],
  ]),
  liste("np-419", "Footballeurs", [
    ["Zinédine Zidane", ["Zizou", "coup de boule", "Real Madrid"], { variantes: ["Zinedine Zidane"], partielles: ["Zidane"] }],
    ["Kylian Mbappé", ["Bondy", "PSG", "vitesse"], { variantes: ["Kylian Mbappe"], partielles: ["Mbappé", "Mbappe"] }],
    ["Michel Platini", ["Juventus", "UEFA", inc("entrée", "plat", "Plat")], { partielles: ["Platini"] }],
    ["Pelé", ["Brésil", "Santos", "roi"], { variantes: ["Pele"] }],
  ]),
  liste("np-420", "Champions de tennis", [
    ["Roger Federer", ["Bâle", "Wimbledon", inc("sorcière", "fée", "Fe", "fé")], { partielles: ["Federer"] }],
    ["Rafael Nadal", ["Majorque", "terre battue", "Roland-Garros"], { partielles: ["Nadal"] }],
    ["Yannick Noah", ["dreadlocks", "Saga Africa", inc("vos", "nos", "No")], { partielles: ["Noah"] }],
    ["Serena Williams", ["Venus", "Américaine", inc("non", "oui", "Wi", "oui")], { partielles: ["Williams"] }],
  ]),
  liste("np-421", "Légendes du sport", [
    ["Usain Bolt", ["Jamaïque", "sprint", inc("tasse", "bol", "Bol")], { partielles: ["Bolt"] }],
    ["Teddy Riner", ["judo", "Guadeloupe", inc("pleure", "rit", "Ri")], { partielles: ["Riner"] }],
    ["Mohamed Ali", ["boxe", "papillon", inc("Baba", "Ali", "Ali")], { variantes: ["Muhammad Ali", "Mohammed Ali"], partielles: ["Ali"] }],
    ["Michael Phelps", ["natation", "médailles", "Baltimore"], { partielles: ["Phelps"] }],
  ]),
  liste("np-422", "Champions du Tour de France", [
    ["Bernard Hinault", ["Blaireau", "Bretagne", "Yffiniac"], { partielles: ["Hinault"] }],
    ["Eddy Merckx", ["Cannibale", "Belgique", inc("père", "mère", "Mer", "mèr")], { partielles: ["Merckx"] }],
    ["Raymond Poulidor", ["éternel second", "Limousin", inc("coq", "poule", "Poul")], { partielles: ["Poulidor"] }],
    ["Jacques Anquetil", ["Normand", "contre-la-montre", "Rouen"], { partielles: ["Anquetil"] }],
  ]),
  liste("np-423", "Acteurs français", [
    ["Gérard Depardieu", ["Obélix", "Cyrano", inc("diable", "Dieu", "dieu", undefined, "fin")], { variantes: ["Gerard Depardieu"], partielles: ["Depardieu"] }],
    ["Jean-Paul Belmondo", ["Bébel", "Le Magnifique", inc("Bête", "belle", "Bel")], { variantes: ["Jean Paul Belmondo"], partielles: ["Belmondo"] }],
    ["Louis de Funès", ["gendarme", "Fantômas", "Rabbi Jacob"], { variantes: ["Louis de Funes"], partielles: ["de Funès", "De Funès", "de Funes", "Funès"] }],
    ["Alain Delon", ["Samouraï", "Romy", inc("court", "long", "lon", "lon", "fin")], { partielles: ["Delon"] }],
  ]),
  liste("np-424", "Actrices françaises", [
    ["Brigitte Bardot", ["BB", "Saint-Tropez", inc("comptoir", "bar", "Bar")], { partielles: ["Bardot"] }],
    ["Catherine Deneuve", ["Parapluies", "Cherbourg", inc("vieille", "neuve", "neuve", undefined, "fin")], { partielles: ["Deneuve"] }],
    ["Audrey Tautou", ["Amélie Poulain", "Coco", inc("tard", "tôt", "Tau", "tôt")], { partielles: ["Tautou"] }],
    ["Marion Cotillard", ["Piaf", "oscar", "Taxi"], { partielles: ["Cotillard"] }],
  ]),
  liste("np-425", "Stars d'Hollywood", [
    ["Marilyn Monroe", ["blonde", "Kennedy", inc("ton", "mon", "Mon")], { partielles: ["Monroe", "Marilyn"] }],
    ["Charlie Chaplin", ["muet", "Temps modernes", inc("souris", "chat", "Cha")], { partielles: ["Chaplin"] }],
    ["Leonardo DiCaprio", ["Titanic", "Gatsby", inc("neuf", "dix", "Di", "di")], { variantes: ["Leonardo Di Caprio", "Léonardo DiCaprio"], partielles: ["DiCaprio", "Di Caprio"] }],
    ["Tom Cruise", ["Top Gun", "Mission impossible", "scientologie"], { partielles: ["Cruise"] }],
  ]),
  liste("np-426", "Réalisateurs", [
    ["Steven Spielberg", ["Dents de la mer", "Jurassic Park", "Schindler"], { partielles: ["Spielberg"] }],
    ["Luc Besson", ["Grand Bleu", "Nikita", inc("hausse", "baisse", "Bess", "baiss")], { partielles: ["Besson"] }],
    ["Alfred Hitchcock", ["suspense", "Psychose", "Les Oiseaux"], { partielles: ["Hitchcock"] }],
    ["James Cameron", ["Avatar", "Terminator", "Abyss"], { partielles: ["Cameron"] }],
  ]),
  liste("np-427", "Héros de dessins animés", [
    ["Bob l'éponge", ["ananas", "Patrick", inc("casquette", "bob", "Bob")], { variantes: ["Bob l'eponge", "Bob l éponge"] }],
    ["Scooby-Doo", ["dogue", "Sammy", inc("dur", "doux", "Doo", "dou", "fin")], { variantes: ["Scooby Doo", "Scoubidou"] }],
    ["Pikachu", ["Pokémon", "électrique", "Sacha"]],
    ["Bugs Bunny", ["lapin", "carotte", "Quoi de neuf docteur"], { partielles: ["Bugs"] }],
  ]),
  liste("np-428", "Héros de jeux vidéo", [
    ["Mario", ["plombier", "Luigi", inc("femme", "mari", "Mari")]],
    ["Sonic", ["hérisson", "Sega", inc("réveil", "sonne", "Son")]],
    ["Pac-Man", ["fantômes", "labyrinthe", inc("Noël", "Pâques", "Pac", "pâq")], { variantes: ["Pacman", "Pac Man"] }],
    ["Lara Croft", ["Tomb Raider", "aventurière", "tresse"], { partielles: ["Croft"] }],
  ]),
  liste("np-429", "Marques automobiles", [
    ["Peugeot", ["lion", "Sochaux", inc("beaucoup", "peu", "Peu")]],
    ["Renault", ["losange", "Clio", "Billancourt"]],
    ["Ferrari", ["cheval cabré", "Maranello", inc("forgeron", "fer", "Fer")]],
    ["Citroën", ["chevrons", "deux-chevaux", inc("orange", "citron", "Citr")], { variantes: ["Citroen"] }],
  ]),
  liste("np-430", "Marques de mode", [
    ["Chanel", ["Coco", "parfum", "petite robe noire"]],
    ["Louis Vuitton", ["malle", "monogramme", inc("mon", "ton", "ton", undefined, "fin")], { partielles: ["Vuitton"] }],
    ["Dior", ["New Look", "Christian", inc("argent", "or", "or", undefined, "fin")]],
    ["Lacoste", ["crocodile", "polo", inc("cygnes", "lac", "Lac")]],
  ]),
  liste("np-431", "Géants de la tech", [
    ["Apple", ["pomme", "iPhone", "Steve Jobs"]],
    ["Google", ["recherche", "Android", "Gmail"]],
    ["Microsoft", ["Windows", "Bill Gates", inc("karaoké", "micro", "Micro")]],
    ["Amazon", ["colis", "Bezos", inc("corps", "âme", "Am", "âm")]],
  ]),
  liste("np-432", "Marques gourmandes", [
    ["Coca-Cola", ["soda", "recette secrète", inc("poule", "coq", "Coc", "coq")], { variantes: ["Coca Cola", "Coca"] }],
    ["Nutella", ["pâte à tartiner", "Ferrero", inc("habillé", "nu", "Nu")]],
    ["Haribo", ["bonbons", "Tagada", inc("Potter", "Harry", "Hari", "Harry")]],
    ["Danone", ["yaourt", "Danette", inc("moine", "nonne", "none", "nonne", "fin")]],
  ]),
  liste("np-433", "Pays d'Afrique", [
    ["Égypte", ["pyramides", "Nil", "Le Caire"], { variantes: ["Egypte"] }],
    ["Maroc", ["tajine", "Marrakech", inc("étang", "mare", "Mar")]],
    ["Sénégal", ["Dakar", "Lions de la Teranga", "Senghor"], { variantes: ["Senegal"] }],
    ["Madagascar", ["Tananarive", "lémuriens", inc("bus", "car", "car", undefined, "fin")]],
  ]),
  liste("np-434", "Outre-mer français", [
    ["Martinique", ["Fort-de-France", "Madinina", inc("clou", "marteau", "Mart")]],
    ["La Réunion", ["piton de la Fournaise", "océan Indien", "Saint-Denis"], { variantes: ["Réunion", "Reunion", "La Reunion"] }],
    ["Tahiti", ["vahiné", "Papeete", inc("ma", "ta", "Ta")]],
    ["Guyane", ["Kourou", "fusée", "Cayenne"]],
  ]),
  liste("np-435", "Régions de France", [
    ["Bretagne", ["crêpes", "menhirs", "Rennes"]],
    ["Alsace", ["choucroute", "cigognes", "Strasbourg"]],
    ["Provence", ["lavande", "cigales", inc("amateur", "pro", "Pro")]],
    ["Normandie", ["camembert", "Débarquement", inc("sud", "nord", "Nor")]],
  ]),
  liste("np-436", "Massifs montagneux de France", [
    ["Alpes", ["Mont-Blanc", "Chamonix", "Savoie"]],
    ["Pyrénées", ["Andorre", "Tourmalet", inc("meilleur", "pire", "Pyr", "pir")], { variantes: ["Pyrenees"] }],
    ["Jura", ["comté", "vin jaune", "Franche-Comté"]],
    ["Vosges", ["ballon", "Gérardmer", inc("nos", "vos", "Vos")]],
  ]),
  liste("np-437", "Mers et océans", [
    ["Méditerranée", ["Grande Bleue", "Corse", inc("tes", "mes", "Mé", "me")], { variantes: ["Mediterranee", "Mer Méditerranée"] }],
    ["Pacifique", ["Hawaï", "le plus grand", "Polynésie"], { variantes: ["Océan Pacifique", "Ocean Pacifique"] }],
    ["Manche", ["tunnel", "Calais", inc("pingouin", "manchot", "Manch")], { variantes: ["La Manche"] }],
    ["Mer Morte", ["sel", "Israël", inc("vivante", "morte", "Morte", undefined, "fin")], { partielles: ["Morte"] }],
  ]),
  liste("np-438", "Le village d'Astérix", [
    ["Obélix", ["menhir", "sanglier", "Idéfix"], { variantes: ["Obelix"] }],
    ["Panoramix", ["druide", "serpe", "potion magique"]],
    ["Abraracourcix", ["chef", "bouclier", inc("magicien", "abracadabra", "Abra")]],
    ["Assurancetourix", ["barde", "ligoté", "lyre"]],
  ]),
  liste("np-439", "L'entourage de Tintin", [
    ["Haddock", ["mille sabords", "whisky", "Moulinsart"], { variantes: ["Capitaine Haddock"] }],
    ["Milou", ["fox-terrier", "os", inc("cent", "mille", "Mil")]],
    ["Tournesol", ["savant", "sourd", inc("plafond", "sol", "sol", undefined, "fin")], { variantes: ["Professeur Tournesol"] }],
    ["Castafiore", ["cantatrice", "bijoux", "Marguerite"], { variantes: ["Bianca Castafiore", "La Castafiore"] }],
  ]),
  liste("np-440", "Personnages de Harry Potter", [
    ["Hermione", ["Ron", "studieuse", "Gryffondor"]],
    ["Dumbledore", ["directeur", "Poudlard", inc("argent", "or", "ore", "or", "fin")]],
    ["Voldemort", ["serpent", "mage noir", inc("vivant", "mort", "mort", undefined, "fin")]],
    ["Hagrid", ["géant", "garde-chasse", "Crockdur"]],
  ]),
  liste("np-441", "Personnages de Star Wars", [
    ["Dark Vador", ["masque", "respiration", inc("argent", "or", "or", undefined, "fin")], { variantes: ["Darth Vader", "Dark Vader"], partielles: ["Vador"] }],
    ["Yoda", ["petit", "oreilles pointues", "maître Jedi"]],
    ["Chewbacca", ["Wookiee", "poils", "Han Solo"]],
    ["Luke Skywalker", ["sabre laser", "Leia", "Tatooine"], { partielles: ["Luke", "Skywalker"] }],
  ]),
  liste("np-442", "Personnages de Molière", [
    ["Harpagon", ["avare", "cassette", "Cléante"]],
    ["Tartuffe", ["dévot", "imposteur", inc("gâteau", "tarte", "Tart")]],
    ["Scapin", ["fourberies", "valet", inc("boulanger", "pain", "pin", "pain", "fin")]],
    ["Monsieur Jourdain", ["bourgeois gentilhomme", "prose", inc("nuit", "jour", "Jour")], { variantes: ["M. Jourdain"], partielles: ["Jourdain"] }],
  ]),
  liste("np-443", "Héros de romans d'aventures", [
    ["D'Artagnan", ["mousquetaires", "Gascon", inc("abeille", "dard", "D'Ar", "dar")], { variantes: ["d'Artagnan", "Dartagnan"], partielles: ["Artagnan"] }],
    ["Sherlock Holmes", ["Watson", "loupe", "Baker Street"], { partielles: ["Holmes", "Sherlock"] }],
    ["Robinson Crusoé", ["naufragé", "Vendredi", inc("jupe", "robe", "Rob")], { variantes: ["Robinson Crusoe", "Robinson"], partielles: ["Crusoé", "Crusoe"] }],
    ["Phileas Fogg", ["quatre-vingts jours", "Passepartout", inc("aiguille", "fil", "Phil", "fil")], { variantes: ["Philéas Fogg"], partielles: ["Fogg"] }],
  ]),
  liste("np-444", "Héros de films", [
    ["James Bond", ["espion", "Martini", "Aston Martin"], { partielles: ["Bond"] }],
    ["Indiana Jones", ["fouet", "archéologue", inc("Gandhi", "Inde", "Ind")], { variantes: ["Indy"], partielles: ["Indiana", "Jones"] }],
    ["Rocky", ["boxeur", "Stallone", inc("roll", "rock", "Rock")]],
    ["Zorro", ["masque", "épée", "Don Diego"]],
  ]),
  liste("np-445", "Animaux héros", [
    ["Babar", ["éléphant", "Céleste", inc("Ali", "Baba", "Baba")]],
    ["Garfield", ["chat", "lasagnes", inc("train", "gare", "Gar")]],
    ["Flipper", ["dauphin", "Floride", "Sandy"]],
    ["Lassie", ["colley", "chienne", inc("chaussure", "lacet", "Las", "lac")]],
  ]),
  liste("np-446", "Grands savants", [
    ["Einstein", ["relativité", "langue tirée", "génie"], { variantes: ["Albert Einstein"] }],
    ["Marie Curie", ["radium", "Pologne", inc("femme", "mari", "Mari")], { partielles: ["Curie"] }],
    ["Newton", ["pomme", "gravitation", inc("kilo", "tonne", "ton", "ton", "fin")], { variantes: ["Isaac Newton"] }],
    ["Darwin", ["évolution", "singe", "Galápagos"], { variantes: ["Charles Darwin"] }],
  ]),
  liste("np-447", "Aventuriers et pionniers", [
    ["Christophe Colomb", ["Amérique", "caravelles", inc("ciseaux", "colle", "Col")], { partielles: ["Colomb"] }],
    ["Neil Armstrong", ["Lune", "Apollo", inc("fusil", "arme", "Arm")], { partielles: ["Armstrong"] }],
    ["Marco Polo", ["Venise", "Chine", "soie"], { partielles: ["Polo"] }],
    ["Charles Lindbergh", ["Atlantique", "avion", inc("coton", "lin", "Lin")], { partielles: ["Lindbergh"] }],
  ]),
  liste("np-448", "Présidents de la République", [
    ["Charles de Gaulle", ["croix de Lorraine", "appel", inc("tank", "char", "Char")], { variantes: ["De Gaulle", "de Gaulle", "Général de Gaulle"] }],
    ["Jacques Chirac", ["Corrèze", "pommes", "Bernadette"], { partielles: ["Chirac"] }],
    ["François Mitterrand", ["rose", "Mazarine", inc("croûte", "mie", "Mi")], { variantes: ["Francois Mitterrand"], partielles: ["Mitterrand"] }],
    ["Emmanuel Macron", ["Brigitte", "En marche", "Amiens"], { partielles: ["Macron"] }],
  ]),
  liste("np-449", "Présidents américains", [
    ["Abraham Lincoln", ["esclavage", "Gettysburg", inc("coton", "lin", "Lin")], { partielles: ["Lincoln"] }],
    ["John F. Kennedy", ["Dallas", "Jackie", inc("Barbie", "Ken", "Ken")], { variantes: ["John Kennedy", "John Fitzgerald Kennedy", "JFK"], partielles: ["Kennedy"] }],
    ["George Washington", ["premier", "dollar", inc("kilo", "tonne", "ton", "ton", "fin")], { partielles: ["Washington"] }],
    ["Barack Obama", ["Michelle", "Hawaï", "Yes we can"], { partielles: ["Obama"] }],
  ]),
  liste("np-450", "Légendes du roi Arthur", [
    ["Arthur", ["Excalibur", "Table ronde", "Camelot"], { variantes: ["Roi Arthur"] }],
    ["Merlin", ["enchanteur", "Brocéliande", inc("plage", "mer", "Mer")]],
    ["Lancelot", ["Guenièvre", "chevalier", inc("javelot", "lance", "Lance")]],
    ["Perceval", ["Graal", "Kaamelott", inc("mère", "père", "Per", "pèr")]],
  ]),
];
