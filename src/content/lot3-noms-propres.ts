import type { ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc } from "./briques";

/**
 * Lot 3 : 50 listes de Noms Propres de niveau difficile, rédigées par Claude, à relire (version 2026-10-23).
 * Rébus et incitations sont permis ici (art. 5.3.1) ; toutes les briques sont des associations.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: string[], options?: { variantes?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "difficile",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => assoc(b)), ...options })),
  };
}

export const LOT3_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-301", "Philosophes présocratiques", [
    ["Héraclite", ["Éphèse", "fleuve", "obscur"], { variantes: ["Heraclite"] }],
    ["Parménide", ["Élée", "être", "poème"], { variantes: ["Parmenide"] }],
    ["Démocrite", ["atomes", "Abdère", "rire"], { variantes: ["Democrite"] }],
    ["Thalès", ["Milet", "eau", "éclipse"], { variantes: ["Thales"] }],
  ]),
  liste("np-302", "Primitifs flamands et maîtres d'Anvers", [
    ["Van Eyck", ["Arnolfini", "Bruges", "Agneau"], { variantes: ["Jan van Eyck"] }],
    ["Rubens", ["Anvers", "baroque", "rondeurs"]],
    ["Memling", ["châsse", "Ursule", "Bruges"]],
    ["Jordaens", ["festin", "fève", "satyre"]],
  ]),
  liste("np-303", "Impressionnistes méconnus", [
    ["Sisley", ["inondation", "Moret", "Marly"]],
    ["Pissarro", ["Pontoise", "Éragny", "toits"]],
    ["Caillebotte", ["raboteurs", "parquet", "Yerres"]],
    ["Berthe Morisot", ["berceau", "Bougival", "belle-sœur"], { partielles: ["Morisot"] }],
  ]),
  liste("np-304", "Compositeurs romantiques", [
    ["Schumann", ["Clara", "Carnaval", "Düsseldorf"]],
    ["Liszt", ["Hongrie", "rhapsodies", "virtuose"]],
    ["Berlioz", ["fantastique", "Troyens", "Côte-Saint-André"]],
    ["Mendelssohn", ["noces", "Songe", "Leipzig"]],
  ]),
  liste("np-305", "Compositeurs russes", [
    ["Moussorgski", ["Boris", "tableaux", "exposition"], { variantes: ["Moussorgsky"] }],
    ["Rimski-Korsakov", ["Shéhérazade", "bourdon", "Sadko"], { variantes: ["Rimsky-Korsakov"], partielles: ["Korsakov"] }],
    ["Tchaïkovski", ["cygnes", "Casse-Noisette", "pathétique"], { variantes: ["Tchaikovski", "Tchaikovsky"] }],
    ["Borodine", ["Igor", "steppes", "chimiste"]],
  ]),
  liste("np-306", "Poètes latins", [
    ["Virgile", ["Énéide", "Mantoue", "Bucoliques"]],
    ["Ovide", ["Métamorphoses", "exil", "Amours"]],
    ["Horace", ["Odes", "Mécène", "Satires"]],
    ["Catulle", ["Lesbie", "moineau", "Vérone"]],
  ]),
  liste("np-307", "Écrivains des Lumières", [
    ["Diderot", ["Encyclopédie", "Langres", "fataliste"]],
    ["Montesquieu", ["Persanes", "Brède", "lois"]],
    ["Marivaux", ["badinage", "Arlequin", "hasard"]],
    ["Beaumarchais", ["Figaro", "Barbier", "Almaviva"]],
  ]),
  liste("np-308", "Poètes symbolistes", [
    ["Mallarmé", ["faune", "azur", "cygne"], { variantes: ["Mallarme"] }],
    ["Verlaine", ["Saturniens", "absinthe", "Mathilde"]],
    ["Rimbaud", ["Charleville", "voyelles", "Harar"]],
    ["Laforgue", ["complaintes", "Montevideo", "Pierrot"]],
  ]),
  liste("np-309", "Navigateurs et explorateurs", [
    ["Magellan", ["détroit", "circumnavigation", "Philippines"]],
    ["Jacques Cartier", ["Saint-Malo", "Hochelaga", "Canada"], { partielles: ["Cartier"] }],
    ["Bougainville", ["Tahiti", "Boudeuse", "fleur"]],
    ["Vasco de Gama", ["Calicut", "Inde", "Lusiades"], { partielles: ["Gama", "De Gama"] }],
  ]),
  liste("np-310", "Savants de la Renaissance", [
    ["Copernic", ["héliocentrisme", "Toruń", "révolutions"]],
    ["Kepler", ["ellipses", "Prague", "Brahé"]],
    ["Galilée", ["lunette", "Pise", "Jupiter"], { variantes: ["Galilee"] }],
    ["Vésale", ["anatomie", "Fabrica", "Padoue"], { variantes: ["Vesale"] }],
  ]),
  liste("np-311", "Mathématiciens", [
    ["Euler", ["Bâle", "graphes", "Königsberg"]],
    ["Gauss", ["cloche", "Göttingen", "prince"]],
    ["Fermat", ["théorème", "Toulouse", "marge"]],
    ["Riemann", ["hypothèse", "zêta", "géométrie"]],
  ]),
  liste("np-312", "Physiciens", [
    ["Maxwell", ["équations", "électromagnétisme", "démon"]],
    ["Faraday", ["cage", "induction", "Davy"]],
    ["Planck", ["constante", "quanta", "Kiel"]],
    ["Heisenberg", ["incertitude", "matrices", "Copenhague"]],
  ]),
  liste("np-313", "Révolutionnaires", [
    ["Danton", ["audace", "Arcis", "Cordeliers"]],
    ["Robespierre", ["Incorruptible", "Arras", "Thermidor"]],
    ["Marat", ["baignoire", "Corday", "Ami"]],
    ["Saint-Just", ["archange", "Terreur", "Blérancourt"]],
  ]),
  liste("np-314", "Rois de France médiévaux", [
    ["Philippe Auguste", ["Bouvines", "Louvre", "croisade"], { partielles: ["Philippe"] }],
    ["Louis IX", ["chêne", "Vincennes", "Tunis"], { variantes: ["Saint Louis", "saint Louis"] }],
    ["Charles V", ["sage", "Du Guesclin", "librairie"], { variantes: ["Charles cinq"] }],
    ["Louis XI", ["araignée", "Plessis", "Téméraire"], { variantes: ["Louis onze"] }],
  ]),
  liste("np-315", "Reines et régentes", [
    ["Aliénor d'Aquitaine", ["troubadours", "Plantagenêt", "Fontevraud"], { partielles: ["Aliénor"] }],
    ["Catherine de Médicis", ["Florence", "Saint-Barthélemy", "astrologue"], { partielles: ["Médicis", "Catherine"] }],
    ["Anne de Bretagne", ["duchesse", "Blois", "cordelière"], { partielles: ["Anne"] }],
    ["Blanche de Castille", ["régente", "Louis IX", "Maubuisson"], { partielles: ["Blanche"] }],
  ]),
  liste("np-316", "Empereurs romains", [
    ["Hadrien", ["mur", "villa", "Antinoüs"]],
    ["Caligula", ["cheval", "consul", "Camus"]],
    ["Néron", ["incendie", "lyre", "Agrippine"], { variantes: ["Neron"] }],
    ["Marc Aurèle", ["Pensées", "stoïcien", "Danube"], { variantes: ["Marc Aurele"], partielles: ["Aurèle"] }],
  ]),
  liste("np-317", "Pharaons", [
    ["Akhenaton", ["Aton", "Néfertiti", "Amarna"], { variantes: ["Akhénaton"] }],
    ["Ramsès", ["Abou Simbel", "Kadesh", "momie"], { variantes: ["Ramses"] }],
    ["Khéops", ["pyramide", "Gizeh", "barque"], { variantes: ["Kheops"] }],
    ["Toutankhamon", ["Carter", "masque", "malédiction"]],
  ]),
  liste("np-318", "Dieux de l'Olympe", [
    ["Héphaïstos", ["forge", "boiteux", "Aphrodite"], { variantes: ["Hephaistos"] }],
    ["Hermès", ["messager", "caducée", "sandales"], { variantes: ["Hermes"] }],
    ["Déméter", ["moissons", "Perséphone", "Éleusis"], { variantes: ["Demeter"] }],
    ["Dionysos", ["vigne", "bacchantes", "thyrse"]],
  ]),
  liste("np-319", "Héroïnes tragiques", [
    ["Phèdre", ["Hippolyte", "Thésée", "Racine"], { variantes: ["Phedre"] }],
    ["Antigone", ["Créon", "Polynice", "Anouilh"]],
    ["Andromaque", ["Hector", "Astyanax", "Pyrrhus"]],
    ["Médée", ["Jason", "toison", "Colchide"], { variantes: ["Medee"] }],
  ]),
  liste("np-320", "Personnages de Balzac", [
    ["Rastignac", ["ambition", "Vauquer", "Père-Lachaise"]],
    ["Goriot", ["vermicellier", "pension", "filles"]],
    ["Vautrin", ["forçat", "Collin", "bagne"]],
    ["Grandet", ["avare", "Saumur", "Eugénie"]],
  ]),
  liste("np-321", "Personnages de Proust", [
    ["Swann", ["Odette", "Combray", "côté"]],
    ["Charlus", ["baron", "Guermantes", "Jupien"]],
    ["Verdurin", ["salon", "clan", "Vinteuil"]],
    ["Albertine", ["prisonnière", "disparue", "Balbec"]],
  ]),
  liste("np-322", "Personnages de Shakespeare", [
    ["Hamlet", ["Elseneur", "crâne", "Ophélie"]],
    ["Othello", ["Desdémone", "Iago", "mouchoir"]],
    ["Falstaff", ["Windsor", "ivrogne", "Verdi"]],
    ["Prospero", ["tempête", "Ariel", "Caliban"]],
  ]),
  liste("np-323", "Héroïnes d'opéra", [
    ["Carmen", ["Séville", "cigarière", "Bizet"]],
    ["Tosca", ["Cavaradossi", "Scarpia", "Puccini"]],
    ["Violetta", ["Traviata", "Alfredo", "courtisane"]],
    ["Norma", ["druidesse", "Bellini", "diva"]],
  ]),
  liste("np-324", "Sculpteurs", [
    ["Rodin", ["Penseur", "Camille", "Meudon"]],
    ["Giacometti", ["filiforme", "Diego", "marche"]],
    ["Bourdelle", ["archer", "Montparnasse", "Pénélope"]],
    ["Houdon", ["Voltaire", "bustes", "Diane"]],
  ]),
  liste("np-325", "Architectes", [
    ["Vauban", ["citadelles", "Neuf-Brisach", "fortifications"]],
    ["Haussmann", ["boulevards", "préfet", "Paris"]],
    ["Le Corbusier", ["Ronchamp", "Modulor", "Savoye"], { partielles: ["Corbusier"] }],
    ["Viollet-le-Duc", ["Carcassonne", "Pierrefonds", "restauration"]],
  ]),
  liste("np-326", "Cinéastes de la Nouvelle Vague", [
    ["Truffaut", ["Doinel", "Jules", "nuit"]],
    ["Godard", ["souffle", "Belmondo", "Pierrot"]],
    ["Rohmer", ["contes", "Maud", "saisons"]],
    ["Chabrol", ["bourgeoisie", "Huppert", "boucher"]],
  ]),
  liste("np-327", "Grands de la chanson", [
    ["Brassens", ["Sète", "pipe", "gorille"]],
    ["Brel", ["Amsterdam", "Marquises", "quitte"]],
    ["Ferré", ["Monaco", "anarchie", "Aragon"], { variantes: ["Ferre"] }],
    ["Barbara", ["aigle", "Nantes", "Göttingen"]],
  ]),
  liste("np-328", "Peintres espagnols", [
    ["Goya", ["Majas", "désastres", "Saturne"]],
    ["Vélasquez", ["Ménines", "infante", "Philippe IV"], { variantes: ["Velasquez", "Velázquez"] }],
    ["Zurbarán", ["moines", "Séville", "Estrémadure"], { variantes: ["Zurbaran"] }],
    ["Le Greco", ["Tolède", "Crète", "Orgaz"], { variantes: ["Greco"] }],
  ]),
  liste("np-329", "Écrivains italiens", [
    ["Dante", ["Béatrice", "Enfer", "Florence"]],
    ["Pétrarque", ["Laure", "sonnets", "Vaucluse"], { variantes: ["Petrarque"] }],
    ["Boccace", ["Décaméron", "peste", "nouvelles"]],
    ["Machiavel", ["Prince", "Médicis", "ruse"]],
  ]),
  liste("np-330", "Écrivains de langue allemande", [
    ["Goethe", ["Werther", "Faust", "Weimar"]],
    ["Schiller", ["brigands", "Tell", "joie"]],
    ["Kafka", ["Prague", "procès", "métamorphose"]],
    ["Rilke", ["Élégies", "Duino", "Lou"]],
  ]),
  liste("np-331", "Philosophes allemands", [
    ["Hegel", ["dialectique", "Iéna", "esprit"]],
    ["Nietzsche", ["Zarathoustra", "surhomme", "moustache"]],
    ["Schopenhauer", ["volonté", "pessimisme", "caniche"]],
    ["Heidegger", ["Dasein", "Forêt-Noire", "être"]],
  ]),
  liste("np-332", "Philosophes britanniques", [
    ["Hobbes", ["Léviathan", "loup", "Malmesbury"]],
    ["Locke", ["empirisme", "tolérance", "table rase"]],
    ["Hume", ["Édimbourg", "scepticisme", "causalité"]],
    ["Bentham", ["utilitarisme", "panoptique", "momie"]],
  ]),
  liste("np-333", "Médecins célèbres", [
    ["Laennec", ["stéthoscope", "Quimper", "auscultation"]],
    ["Charcot", ["Salpêtrière", "hystérie", "Freud"]],
    ["Ambroise Paré", ["ligature", "chirurgien", "Laval"], { variantes: ["Ambroise Pare"], partielles: ["Paré"] }],
    ["Bichat", ["tissus", "anatomie", "Hôtel-Dieu"]],
  ]),
  liste("np-334", "Chimistes", [
    ["Lavoisier", ["oxygène", "fermier", "perd"]],
    ["Mendeleïev", ["tableau", "éléments", "Tobolsk"], { variantes: ["Mendeleiev", "Mendeleev"] }],
    ["Berthollet", ["chlore", "Javel", "Égypte"]],
    ["Gay-Lussac", ["ballon", "gaz", "Sorbonne"], { variantes: ["Gay Lussac"] }],
  ]),
  liste("np-335", "Inventeurs français", [
    ["Jacquard", ["métier", "cartes", "Lyon"]],
    ["Daguerre", ["Niépce", "diorama", "plaque"]],
    ["Montgolfier", ["ballon", "Annonay", "frères"]],
    ["Braille", ["aveugle", "points", "Coupvray"]],
  ]),
  liste("np-336", "Gens de mer", [
    ["Surcouf", ["corsaire", "Saint-Malo", "Kent"]],
    ["Jean Bart", ["Dunkerque", "flibustier", "Louis XIV"], { partielles: ["Bart"] }],
    ["La Pérouse", ["Boussole", "Astrolabe", "Vanikoro"], { variantes: ["Lapérouse", "La Perouse"], partielles: ["Pérouse"] }],
    ["Cousteau", ["Calypso", "bonnet", "silence"]],
  ]),
  liste("np-337", "Figures de la Résistance", [
    ["Jean Moulin", ["Rex", "Caluire", "chapeau"], { partielles: ["Moulin"] }],
    ["Lucie Aubrac", ["Raymond", "Libération", "Lyon"], { partielles: ["Aubrac"] }],
    ["Pierre Brossolette", ["Panthéon", "BBC", "mèche"], { partielles: ["Brossolette"] }],
    ["Missak Manouchian", ["affiche", "Arménien", "Aragon"], { partielles: ["Manouchian"] }],
  ]),
  liste("np-338", "Maréchaux d'Empire", [
    ["Ney", ["braves", "Moskova", "fusillé"]],
    ["Murat", ["cavalerie", "Naples", "Caroline"]],
    ["Davout", ["Auerstaedt", "Eckmühl", "fer"]],
    ["Lannes", ["Montebello", "Essling", "Roland"]],
  ]),
  liste("np-339", "Batailles navales", [
    ["Trafalgar", ["Nelson", "Villeneuve", "Cadix"]],
    ["Lépante", ["Ottomans", "Cervantès", "galères"], { variantes: ["Lepante"] }],
    ["Salamine", ["Thémistocle", "Perses", "trières"]],
    ["Aboukir", ["Brueys", "Égypte", "Bonaparte"]],
  ]),
  liste("np-340", "Sites antiques", [
    ["Alhambra", ["Grenade", "Nasrides", "lions"]],
    ["Angkor", ["Khmers", "Cambodge", "temples"]],
    ["Petra", ["Nabatéens", "Jordanie", "Indiana"], { variantes: ["Pétra"] }],
    ["Persépolis", ["Darius", "Achéménides", "apadana"], { variantes: ["Persepolis"] }],
  ]),
  liste("np-341", "Fleuves du monde", [
    ["Mékong", ["Laos", "delta", "Cambodge"], { variantes: ["Mekong"] }],
    ["Ienisseï", ["Sibérie", "Krasnoïarsk", "Arctique"], { variantes: ["Ienissei", "Iénisseï"] }],
    ["Zambèze", ["Victoria", "Mozambique", "chutes"], { variantes: ["Zambeze"] }],
    ["Orénoque", ["Venezuela", "Humboldt", "llanos"], { variantes: ["Orenoque"] }],
  ]),
  liste("np-342", "Capitales lointaines", [
    ["Oulan-Bator", ["Mongolie", "yourtes", "Gengis"], { variantes: ["Oulan Bator", "Oulaanbaatar"] }],
    ["Asmara", ["Érythrée", "Massaoua", "Corne"]],
    ["Tbilissi", ["Géorgie", "Caucase", "Koura"], { variantes: ["Tbilisi"] }],
    ["Katmandou", ["Népal", "Himalaya", "hippies"]],
  ]),
  liste("np-343", "Îles", [
    ["Madère", ["Funchal", "vin", "Portugal"], { variantes: ["Madere"] }],
    ["Zanzibar", ["épices", "Tanzanie", "Mercury"]],
    ["Sakhaline", ["Tchekhov", "bagne", "Russie"]],
    ["Pâques", ["moaïs", "Rapa", "Chili"], { variantes: ["île de Pâques", "Paques"] }],
  ]),
  liste("np-344", "Sommets", [
    ["Annapurna", ["Herzog", "Népal", "Lachenal"]],
    ["Kilimandjaro", ["Tanzanie", "neiges", "Hemingway"]],
    ["Aconcagua", ["Andes", "Argentine", "Mendoza"]],
    ["Cervin", ["Zermatt", "Whymper", "Toblerone"]],
  ]),
  liste("np-345", "Dieux nordiques", [
    ["Odin", ["corbeaux", "Walhalla", "Sleipnir"]],
    ["Thor", ["marteau", "tonnerre", "Mjöllnir"]],
    ["Loki", ["ruse", "Baldr", "serpent"]],
    ["Freyja", ["chats", "amour", "Vanes"], { variantes: ["Freya"] }],
  ]),
  liste("np-346", "Divinités égyptiennes", [
    ["Anubis", ["chacal", "embaumement", "balance"]],
    ["Thot", ["ibis", "scribe", "Hermopolis"]],
    ["Hathor", ["vache", "amour", "Dendérah"]],
    ["Sekhmet", ["lionne", "guerre", "Memphis"]],
  ]),
  liste("np-347", "Figures bibliques", [
    ["Salomon", ["jugement", "sagesse", "Saba"]],
    ["Jonas", ["baleine", "Ninive", "prophète"]],
    ["Judith", ["Holopherne", "Béthulie", "décapitation"]],
    ["Job", ["patience", "épreuves", "fumier"]],
  ]),
  liste("np-348", "Saints", [
    ["François d'Assise", ["oiseaux", "pauvreté", "Ombrie"], { variantes: ["Francois d'Assise", "saint François"], partielles: ["François"] }],
    ["Christophe", ["voyageurs", "passeur", "Enfant"], { variantes: ["saint Christophe"] }],
    ["Geneviève", ["Paris", "Attila", "patronne"], { variantes: ["Genevieve", "sainte Geneviève"] }],
    ["Martin", ["manteau", "Tours", "partage"], { variantes: ["saint Martin"] }],
  ]),
  liste("np-349", "Héros de bande dessinée réaliste", [
    ["Blake", ["Mortimer", "espadon", "Jacobs"]],
    ["Corto Maltese", ["Pratt", "Venise", "marin"], { partielles: ["Corto"] }],
    ["Valérian", ["Laureline", "Mézières", "spatio-temporel"], { variantes: ["Valerian"] }],
    ["Blueberry", ["Giraud", "lieutenant", "Ouest"]],
  ]),
  liste("np-350", "Écrivains d'Amérique latine", [
    ["Borges", ["Aleph", "labyrinthes", "Buenos Aires"]],
    ["García Márquez", ["Macondo", "solitude", "Colombie"], { variantes: ["Garcia Marquez", "Gabriel García Márquez"], partielles: ["Márquez", "Marquez"] }],
    ["Neruda", ["Chili", "Isla", "Nobel"]],
    ["Cortázar", ["marelle", "Rayuela", "Argentine"], { variantes: ["Cortazar"] }],
  ]),
];
