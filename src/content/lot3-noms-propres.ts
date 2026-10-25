import type { Brique, ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc, inc } from "./briques";

/**
 * Lot 3 : 50 listes de Noms Propres de niveau difficile, rédigées par Claude, à relire (version 2026-10-23).
 * Rébus et incitations sont permis ici (art. 5.3.1) ; toutes les briques sont des associations.
 */
const VERSION = "2026-10-23";

type Entree = [reponse: string, briques: (string | Brique)[], options?: { variantes?: string[]; surnoms?: string[]; partielles?: string[] }];

function liste(id: string, theme: string, noms: Entree[]): ListeNomsPropres {
  return {
    id,
    version: VERSION,
    difficulte: "difficile",
    theme,
    noms: noms.map(([reponse, briques, options], i): NomPropre => ({ rang: i + 1, reponse, briques: briques.map((b) => (typeof b === "string" ? assoc(b) : b)), ...options })),
  };
}

export const LOT3_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-301", "Philosophes présocratiques", [
    ["Héraclite", ["Éphèse", "fleuve", inc("Zeus", "Héra", "Héra")], { variantes: ["Heraclite"] }],
    ["Parménide", ["Élée", "être", inc("musique", "paroles", "Par")], { variantes: ["Parmenide"] }],
    ["Démocrite", ["atomes", "Abdère", inc("sincère", "hypocrite", "crite", undefined, "fin")], { variantes: ["Democrite"] }],
    ["Thalès", ["Milet", "eau", inc("chien", "laisse", "lès", "laisse", "fin")], { variantes: ["Thales"] }],
  ]),
  liste("np-302", "Primitifs flamands et maîtres d'Anvers", [
    ["Van Eyck", ["Arnolfini", "Bruges", inc("moulin", "vent", "Van", "ven")], { variantes: ["Jan van Eyck"] }],
    ["Rubens", ["Anvers", "baroque", inc("cube", "Rubik", "Rub")]],
    ["Memling", ["châsse", "Ursule", inc("différent", "même", "Mem", "mêm")]],
    ["Jordaens", ["festin", "fève", inc("chant", "danse", "daens", "danse", "fin")]],
  ]),
  liste("np-303", "Impressionnistes méconnus", [
    ["Sisley", ["inondation", "Moret", inc("cinq", "six", "Sis", "six")]],
    ["Pissarro", ["Pontoise", "Éragny", inc("mieux", "pis", "Pi")]],
    ["Caillebotte", ["raboteurs", "parquet", inc("foin", "botte", "botte", undefined, "fin")]],
    ["Berthe Morisot", ["berceau", "Bougival", inc("vivant", "mort", "Mor", undefined, "milieu")], { partielles: ["Morisot"] }],
  ]),
  liste("np-304", "Compositeurs romantiques", [
    ["Schumann", ["Clara", "Carnaval", inc("chèvre", "chou", "Schu", "chou")]],
    ["Liszt", ["Hongrie", "rhapsodies", inc("courses", "liste", "Lis", "lis")]],
    ["Berlioz", ["fantastique", "Troyens", inc("bergère", "berger", "Ber")]],
    ["Mendelssohn", ["noces", "Songe", "Leipzig"]],
  ]),
  liste("np-305", "Compositeurs russes", [
    ["Moussorgski", ["Boris", "tableaux", inc("dur", "mou", "Mou")], { variantes: ["Moussorgsky"] }],
    ["Rimski-Korsakov", ["Shéhérazade", "bourdon", inc("âme", "corps", "Kor", "cor", "milieu")], { variantes: ["Rimsky-Korsakov"], partielles: ["Korsakov"] }],
    ["Tchaïkovski", ["cygnes", "Casse-Noisette", "pathétique"], { variantes: ["Tchaikovski", "Tchaikovsky"] }],
    ["Borodine", ["Igor", "steppes", inc("Bourgogne", "Bordeaux", "Bor")]],
  ]),
  liste("np-306", "Poètes latins", [
    ["Virgile", ["Énéide", "Mantoue", inc("point", "virgule", "Vir")]],
    ["Ovide", ["Métamorphoses", "exil", inc("plein", "vide", "vide", undefined, "fin")]],
    ["Horace", ["Odes", "Mécène", inc("argent", "or", "Hor", "or")]],
    ["Catulle", ["Lesbie", "moineau", inc("trois", "quatre", "Cat", "quat")]],
  ]),
  liste("np-307", "Écrivains des Lumières", [
    ["Diderot", ["Encyclopédie", "Langres", "fataliste"]],
    ["Montesquieu", ["Persanes", "Brède", inc("descend", "monte", "Mont")]],
    ["Marivaux", ["badinage", "Arlequin", inc("femme", "mari", "Mari")]],
    ["Beaumarchais", ["Figaro", "Barbier", inc("laid", "beau", "Beau")]],
  ]),
  liste("np-308", "Poètes symbolistes", [
    ["Mallarmé", ["faune", "azur", inc("bien", "mal", "Mal")], { variantes: ["Mallarme"] }],
    ["Verlaine", ["Saturniens", "absinthe", inc("mouton", "laine", "laine", undefined, "fin")]],
    ["Rimbaud", ["Charleville", "voyelles", inc("laid", "beau", "baud", "beau", "fin")]],
    ["Laforgue", ["complaintes", "Montevideo", inc("ici", "là", "La", "là")]],
  ]),
  liste("np-309", "Navigateurs et explorateurs", [
    ["Magellan", ["détroit", "circumnavigation", inc("mineur", "majeur", "Mag", "maj")]],
    ["Jacques Cartier", ["Saint-Malo", "Canada", inc("demi", "quart", "Car", "quar", "milieu")], { partielles: ["Cartier"] }],
    ["Bougainville", ["Tahiti", "fleur", inc("campagne", "ville", "ville", undefined, "fin")]],
    ["Vasco de Gama", ["Calicut", "Inde", inc("bêta", "gamma", "Gama", "gamma", "fin")], { partielles: ["Gama", "De Gama"] }],
  ]),
  liste("np-310", "Savants de la Renaissance", [
    ["Copernic", ["héliocentrisme", "révolutions", inc("copine", "copain", "Cope", "copai")]],
    ["Kepler", ["ellipses", "Prague", "Brahé"]],
    ["Galilée", ["lunette", "Pise", inc("crêpe", "galette", "Gal")], { variantes: ["Galilee"] }],
    ["Vésale", ["anatomie", "Fabrica", "Padoue"], { variantes: ["Vesale"] }],
  ]),
  liste("np-311", "Mathématiciens", [
    ["Euler", ["Bâle", "graphes", "Königsberg"]],
    ["Gauss", ["cloche", "Göttingen", inc("droite", "gauche", "Gau")]],
    ["Fermat", ["théorème", "marge", inc("ouvre", "ferme", "Ferm")]],
    ["Riemann", ["hypothèse", "zêta", inc("pleurer", "rire", "Ri")]],
  ]),
  liste("np-312", "Physiciens", [
    ["Maxwell", ["équations", "démon", inc("minimum", "maximum", "Max")]],
    ["Faraday", ["cage", "induction", inc("codes", "phares", "Far", "phar")]],
    ["Planck", ["constante", "quanta", inc("plafond", "plancher", "Plan")]],
    ["Heisenberg", ["incertitude", "Copenhague", inc("Titanic", "iceberg", "berg", undefined, "fin")]],
  ]),
  liste("np-313", "Révolutionnaires", [
    ["Danton", ["audace", "Cordeliers", inc("mon", "ton", "ton", undefined, "fin")]],
    ["Robespierre", ["Incorruptible", "Thermidor", inc("mariée", "robe", "Robe")]],
    ["Marat", ["baignoire", "Corday", inc("papa", "maman", "Ma")]],
    ["Saint-Just", ["archange", "Terreur", inc("malade", "sain", "Saint", "sain")]],
  ]),
  liste("np-314", "Rois de France médiévaux", [
    ["Philippe Auguste", ["Bouvines", "Louvre", inc("aiguille", "fil", "Phil", "fil")], { partielles: ["Philippe"] }],
    ["Louis IX", ["chêne", "Tunis", inc("vieux", "neuf", "IX", "neuf", "fin")], { variantes: ["Saint Louis", "saint Louis"], surnoms: ["Saint Louis", "saint Louis"] }],
    ["Charles V", ["sage", "Du Guesclin", inc("quatre", "cinq", "V", "cinq", "fin")], { variantes: ["Charles cinq"] }],
    ["Louis XI", ["araignée", "Téméraire", inc("douze", "onze", "XI", "onze", "fin")], { variantes: ["Louis onze"] }],
  ]),
  liste("np-315", "Reines et régentes", [
    ["Aliénor d'Aquitaine", ["troubadours", "Plantagenêt", inc("Baba", "Ali", "Ali")], { partielles: ["Aliénor"] }],
    ["Catherine de Médicis", ["Florence", "Saint-Barthélemy", inc("trois", "quatre", "Cath", "quat")], { partielles: ["Médicis", "Catherine"] }],
    ["Anne de Bretagne", ["duchesse", "Blois", inc("bœuf", "âne", "Anne", "âne")], { partielles: ["Anne"] }],
    ["Blanche de Castille", ["régente", "Louis IX", "Maubuisson"], { partielles: ["Blanche"] }],
  ]),
  liste("np-316", "Empereurs romains", [
    ["Hadrien", ["mur", "villa", inc("tout", "rien", "rien", undefined, "fin")]],
    ["Caligula", ["cheval", "consul", "Camus"]],
    ["Néron", ["incendie", "lyre", inc("carré", "rond", "ron", undefined, "fin")], { variantes: ["Neron"] }],
    ["Marc Aurèle", ["Pensées", "stoïcien", inc("argent", "or", "Aur", "or", "milieu")], { variantes: ["Marc Aurele"], partielles: ["Aurèle"] }],
  ]),
  liste("np-317", "Pharaons", [
    ["Akhenaton", ["Aton", "Néfertiti", inc("mon", "ton", "ton", undefined, "fin")], { variantes: ["Akhénaton"] }],
    ["Ramsès", ["Abou Simbel", "Kadesh", inc("aviron", "rame", "Ram")], { variantes: ["Ramses"] }],
    ["Khéops", ["pyramide", "Gizeh", "barque"], { variantes: ["Kheops"] }],
    ["Toutankhamon", ["Carter", "masque", inc("rien", "tout", "Tout")]],
  ]),
  liste("np-318", "Dieux de l'Olympe", [
    ["Héphaïstos", ["forge", "boiteux", "Aphrodite"], { variantes: ["Hephaistos"] }],
    ["Hermès", ["messager", "caducée", inc("curé", "messe", "mès", "messe", "fin")], { variantes: ["Hermes"] }],
    ["Déméter", ["moissons", "Perséphone", inc("ciel", "terre", "ter", "terre", "fin")], { variantes: ["Demeter"] }],
    ["Dionysos", ["vigne", "bacchantes", inc("chair", "os", "os", undefined, "fin")]],
  ]),
  liste("np-319", "Héroïnes tragiques", [
    ["Phèdre", ["Hippolyte", "Thésée", "Racine"], { variantes: ["Phedre"] }],
    ["Antigone", ["Créon", "Polynice", inc("pro", "anti", "Anti")]],
    ["Andromaque", ["Hector", "Astyanax", "Pyrrhus"]],
    ["Médée", ["Jason", "toison", inc("tes", "mes", "Mé", "me")], { variantes: ["Medee"] }],
  ]),
  liste("np-320", "Personnages de Balzac", [
    ["Rastignac", ["ambition", "Vauquer", inc("souris", "rat", "Ra")]],
    ["Goriot", ["vermicellier", "pension", "filles"]],
    ["Vautrin", ["forçat", "Collin", inc("vache", "veau", "Vau", "veau")]],
    ["Grandet", ["avare", "Saumur", inc("petit", "grand", "Grand")]],
  ]),
  liste("np-321", "Personnages de Proust", [
    ["Swann", ["Odette", "Combray", "côté"]],
    ["Charlus", ["baron", "Guermantes", inc("souris", "chat", "Cha")]],
    ["Verdurin", ["salon", "clan", inc("rouge", "vert", "Ver")]],
    ["Albertine", ["prisonnière", "Balbec", inc("Einstein", "Albert", "Albert")]],
  ]),
  liste("np-322", "Personnages de Shakespeare", [
    ["Hamlet", ["Elseneur", "crâne", inc("corps", "âme", "Ham", "âm")]],
    ["Othello", ["Desdémone", "Iago", inc("restaurant", "hôtel", "Othel", "hôtel")]],
    ["Falstaff", ["Windsor", "ivrogne", "Verdi"]],
    ["Prospero", ["tempête", "Ariel", "Caliban"]],
  ]),
  liste("np-323", "Héroïnes d'opéra", [
    ["Carmen", ["Séville", "cigarière", inc("demi", "quart", "Car", "quar")]],
    ["Tosca", ["Cavaradossi", "Scarpia", "Puccini"]],
    ["Violetta", ["Traviata", "Alfredo", inc("archet", "violon", "Viol")]],
    ["Norma", ["druidesse", "Bellini", inc("sud", "nord", "Nor")]],
  ]),
  liste("np-324", "Sculpteurs", [
    ["Rodin", ["Penseur", "Camille", "Meudon"]],
    ["Giacometti", ["filiforme", "Diego", inc("Frère", "Jacques", "Giac", "Jacq")]],
    ["Bourdelle", ["archer", "Montparnasse", inc("abeille", "bourdon", "Bourd")]],
    ["Houdon", ["Voltaire", "bustes", inc("dinde", "dindon", "don", undefined, "fin")]],
  ]),
  liste("np-325", "Architectes", [
    ["Vauban", ["citadelles", "Neuf-Brisach", inc("vache", "veau", "Vau", "veau")]],
    ["Haussmann", ["boulevards", "préfet", inc("baisse", "hausse", "Hauss", "hauss")]],
    ["Le Corbusier", ["Ronchamp", "Modulor", inc("renard", "corbeau", "Corb", undefined, "milieu")], { partielles: ["Corbusier"] }],
    ["Viollet-le-Duc", ["Carcassonne", "Pierrefonds", inc("duchesse", "duc", "Duc", undefined, "fin")]],
  ]),
  liste("np-326", "Cinéastes de la Nouvelle Vague", [
    ["Truffaut", ["Doinel", "Jules", inc("vrai", "faux", "faut", "faux", "fin")]],
    ["Godard", ["souffle", "Belmondo", inc("guêpe", "dard", "dard", undefined, "fin")]],
    ["Rohmer", ["contes", "Maud", inc("terre", "mer", "mer", undefined, "fin")]],
    ["Chabrol", ["bourgeoisie", "Huppert", inc("souris", "chat", "Cha")]],
  ]),
  liste("np-327", "Grands de la chanson", [
    ["Brassens", ["Sète", "pipe", inc("jambe", "bras", "Bras")]],
    ["Brel", ["Amsterdam", "Marquises", "quitte"]],
    ["Ferré", ["Monaco", "anarchie", inc("do", "ré", "ré", undefined, "fin")], { variantes: ["Ferre"] }],
    ["Barbara", ["aigle", "Nantes", inc("moustache", "barbe", "Barb")]],
  ]),
  liste("np-328", "Peintres espagnols", [
    ["Goya", ["Majas", "désastres", inc("crayon", "gomme", "Go")]],
    ["Vélasquez", ["Ménines", "infante", inc("moto", "vélo", "Vél")], { variantes: ["Velasquez", "Velázquez"] }],
    ["Zurbarán", ["moines", "Séville", "Estrémadure"], { variantes: ["Zurbaran"] }],
    ["Le Greco", ["Tolède", "Crète", "Orgaz"], { variantes: ["Greco"] }],
  ]),
  liste("np-329", "Écrivains italiens", [
    ["Dante", ["Béatrice", "Enfer", inc("dentiste", "dent", "Dan", "den")]],
    ["Pétrarque", ["Laure", "sonnets", inc("flèche", "arc", "arque", "arc", "fin")], { variantes: ["Petrarque"] }],
    ["Boccace", ["Décaméron", "peste", inc("poisson", "bocal", "Bocca", "boca")]],
    ["Machiavel", ["Prince", "Médicis", inc("garrigue", "maquis", "Machi", "maqui")]],
  ]),
  liste("np-330", "Écrivains de langue allemande", [
    ["Goethe", ["Werther", "Faust", "Weimar"]],
    ["Schiller", ["brigands", "Tell", inc("Argentine", "Chili", "Schil", "Chil")]],
    ["Kafka", ["Prague", "procès", inc("thé", "café", "Kaf", "caf")]],
    ["Rilke", ["Élégies", "Duino", "Lou"]],
  ]),
  liste("np-331", "Philosophes allemands", [
    ["Hegel", ["dialectique", "Iéna", "esprit"]],
    ["Nietzsche", ["Zarathoustra", "surhomme", "moustache"]],
    ["Schopenhauer", ["volonté", "pessimisme", inc("bière", "chope", "Schop", "chop")]],
    ["Heidegger", ["Dasein", "Forêt-Noire", inc("ouille", "aïe", "Hei", "aïe")]],
  ]),
  liste("np-332", "Philosophes britanniques", [
    ["Hobbes", ["Léviathan", "loup", "Malmesbury"]],
    ["Locke", ["empirisme", "tolérance", inc("wagon", "locomotive", "Lock", "loco")]],
    ["Hume", ["Édimbourg", "scepticisme", "causalité"]],
    ["Bentham", ["utilitarisme", "panoptique", inc("Big", "Ben", "Ben")]],
  ]),
  liste("np-333", "Médecins célèbres", [
    ["Laennec", ["stéthoscope", "Quimper", inc("ici", "là", "La", "là")]],
    ["Charcot", ["Salpêtrière", "hystérie", inc("souris", "chat", "Cha")]],
    ["Ambroise Paré", ["ligature", "chirurgien", inc("do", "ré", "ré", undefined, "fin")], { variantes: ["Ambroise Pare"], partielles: ["Paré"] }],
    ["Bichat", ["tissus", "anatomie", inc("cerf", "biche", "Bich")]],
  ]),
  liste("np-334", "Chimistes", [
    ["Lavoisier", ["oxygène", "fermier", inc("volcan", "lave", "Lav")]],
    ["Mendeleïev", ["tableau", "éléments", inc("pied", "main", "Men", "main")], { variantes: ["Mendeleiev", "Mendeleev"] }],
    ["Berthollet", ["chlore", "Javel", inc("vache", "lait", "let", "lait", "fin")]],
    ["Gay-Lussac", ["ballon", "gaz", inc("triste", "gai", "Gay", "gai")], { variantes: ["Gay Lussac"] }],
  ]),
  liste("np-335", "Inventeurs français", [
    ["Jacquard", ["métier", "cartes", inc("Frère", "Jacques", "Jacq")]],
    ["Daguerre", ["Niépce", "diorama", inc("paix", "guerre", "guerre", undefined, "fin")]],
    ["Montgolfier", ["ballon", "Annonay", inc("vallée", "mont", "Mont")]],
    ["Braille", ["aveugle", "points", inc("jambe", "bras", "Bra")]],
  ]),
  liste("np-336", "Gens de mer", [
    ["Surcouf", ["corsaire", "Saint-Malo", "Kent"]],
    ["Jean Bart", ["Dunkerque", "flibustier", inc("comptoir", "bar", "Bart", "bar", "fin")], { partielles: ["Bart"] }],
    ["La Pérouse", ["Boussole", "Astrolabe", inc("Lima", "Pérou", "Pérou", undefined, "milieu")], { variantes: ["Lapérouse", "La Perouse"], partielles: ["Pérouse"] }],
    ["Cousteau", ["Calypso", "bonnet", inc("tard", "tôt", "teau", "tôt", "fin")]],
  ]),
  liste("np-337", "Figures de la Résistance", [
    ["Jean Moulin", ["Rex", "Caluire", inc("frites", "moules", "Moul", undefined, "milieu")], { partielles: ["Moulin"] }],
    ["Lucie Aubrac", ["Raymond", "Libération", inc("crépuscule", "aube", "Aub", undefined, "milieu")], { partielles: ["Aubrac"] }],
    ["Pierre Brossolette", ["Panthéon", "BBC", inc("peigne", "brosse", "Bross", undefined, "milieu")], { partielles: ["Brossolette"] }],
    ["Missak Manouchian", ["affiche", "Arménien", inc("croûte", "mie", "Mi")], { partielles: ["Manouchian"] }],
  ]),
  liste("np-338", "Maréchaux d'Empire", [
    ["Ney", ["braves", "Moskova", "fusillé"]],
    ["Murat", ["cavalerie", "Naples", inc("framboise", "mûre", "Mur", "mûr")]],
    ["Davout", ["Auerstaedt", "Eckmühl", inc("tu", "vous", "vout", "vous", "fin")]],
    ["Lannes", ["Montebello", "Essling", inc("ici", "là", "La", "là")]],
  ]),
  liste("np-339", "Batailles navales", [
    ["Trafalgar", ["Nelson", "Villeneuve", inc("train", "gare", "gar", "gare", "fin")]],
    ["Lépante", ["Ottomans", "Cervantès", "galères"], { variantes: ["Lepante"] }],
    ["Salamine", ["Thémistocle", "Perses", inc("saucisson", "salami", "Salami")]],
    ["Aboukir", ["Brueys", "Égypte", inc("cassis", "kir", "kir", undefined, "fin")]],
  ]),
  liste("np-340", "Sites antiques", [
    ["Alhambra", ["Grenade", "Nasrides", inc("jambe", "bras", "bra", "bra", "fin")]],
    ["Angkor", ["Khmers", "Cambodge", inc("bis", "encore", "Angkor", "encore")]],
    ["Petra", ["Nabatéens", "Jordanie", "Indiana"], { variantes: ["Pétra"] }],
    ["Persépolis", ["Darius", "Achéménides", inc("gendarmerie", "police", "polis", "police", "fin")], { variantes: ["Persepolis"] }],
  ]),
  liste("np-341", "Fleuves du monde", [
    ["Mékong", ["Laos", "delta", inc("King", "Kong", "kong", undefined, "fin")], { variantes: ["Mekong"] }],
    ["Ienisseï", ["Sibérie", "Krasnoïarsk", "Arctique"], { variantes: ["Ienissei", "Iénisseï"] }],
    ["Zambèze", ["Victoria", "Mozambique", "chutes"], { variantes: ["Zambeze"] }],
    ["Orénoque", ["Venezuela", "Humboldt", inc("argent", "or", "Or")], { variantes: ["Orenoque"] }],
  ]),
  liste("np-342", "Capitales lointaines", [
    ["Oulan-Bator", ["Mongolie", "yourtes", inc("raison", "tort", "tor", "tort", "fin")], { variantes: ["Oulan Bator", "Oulaanbaatar"] }],
    ["Asmara", ["Érythrée", "Massaoua", "Corne"]],
    ["Tbilissi", ["Géorgie", "Caucase", "Koura"], { variantes: ["Tbilisi"] }],
    ["Katmandou", ["Népal", "Himalaya", inc("aigre", "doux", "dou", "doux", "fin")]],
  ]),
  liste("np-343", "Îles", [
    ["Madère", ["Funchal", "vin", inc("papa", "maman", "Ma")], { variantes: ["Madere"] }],
    ["Zanzibar", ["épices", "Tanzanie", inc("comptoir", "bar", "bar", undefined, "fin")]],
    ["Sakhaline", ["Tchekhov", "bagne", "Russie"]],
    ["Pâques", ["moaïs", "Rapa", "Chili"], { variantes: ["île de Pâques", "Paques"] }],
  ]),
  liste("np-344", "Sommets", [
    ["Annapurna", ["Herzog", "Népal", inc("bœuf", "âne", "An", "ân")]],
    ["Kilimandjaro", ["Tanzanie", "neiges", "Hemingway"]],
    ["Aconcagua", ["Andes", "Argentine", "Mendoza"]],
    ["Cervin", ["Zermatt", "Whymper", inc("biche", "cerf", "Cer")]],
  ]),
  liste("np-345", "Dieux nordiques", [
    ["Odin", ["corbeaux", "Walhalla", "Sleipnir"]],
    ["Thor", ["marteau", "tonnerre", inc("raison", "tort", "Thor", "tort")]],
    ["Loki", ["ruse", "Baldr", inc("wagon", "locomotive", "Lok", "loc")]],
    ["Freyja", ["chats", "amour", inc("sœur", "frère", "Frey", "frè")], { variantes: ["Freya"] }],
  ]),
  liste("np-346", "Divinités égyptiennes", [
    ["Anubis", ["chacal", "embaumement", inc("encore", "bis", "bis", undefined, "fin")]],
    ["Thot", ["ibis", "scribe", "Hermopolis"]],
    ["Hathor", ["vache", "amour", inc("raison", "tort", "thor", "tort", "fin")]],
    ["Sekhmet", ["lionne", "guerre", inc("humide", "sec", "Sek", "sec")]],
  ]),
  liste("np-347", "Figures bibliques", [
    ["Salomon", ["jugement", "sagesse", inc("propre", "sale", "Sal")]],
    ["Jonas", ["baleine", "Ninive", "prophète"]],
    ["Judith", ["Holopherne", "Béthulie", inc("karaté", "judo", "Jud")]],
    ["Job", ["patience", "épreuves", "fumier"]],
  ]),
  liste("np-348", "Saints", [
    ["François d'Assise", ["oiseaux", "pauvreté", inc("euro", "franc", "Fran")], { variantes: ["Francois d'Assise", "saint François"], surnoms: ["saint François"], partielles: ["François"] }],
    ["Christophe", ["voyageurs", "passeur", "Enfant"], { variantes: ["saint Christophe"], surnoms: ["saint Christophe"] }],
    ["Geneviève", ["Paris", "Attila", inc("coude", "genou", "Gen")], { variantes: ["Genevieve", "sainte Geneviève"], surnoms: ["sainte Geneviève"] }],
    ["Martin", ["manteau", "Tours", inc("clou", "marteau", "Mart")], { variantes: ["saint Martin"], surnoms: ["saint Martin"] }],
  ]),
  liste("np-349", "Héros de bande dessinée réaliste", [
    ["Blake", ["Mortimer", "espadon", "Jacobs"]],
    ["Corto Maltese", ["Pratt", "Venise", inc("âme", "corps", "Cor")], { partielles: ["Corto"] }],
    ["Valérian", ["Laureline", "Mézières", inc("montagne", "vallée", "Valé", "vallé")], { variantes: ["Valerian"] }],
    ["Blueberry", ["Giraud", "lieutenant", "Ouest"]],
  ]),
  liste("np-350", "Écrivains d'Amérique latine", [
    ["Borges", ["Aleph", "labyrinthes", inc("Bourgogne", "Bordeaux", "Bor")]],
    ["García Márquez", ["Macondo", "solitude", inc("lundi", "mardi", "Már", "mar", "milieu")], { variantes: ["Garcia Marquez", "Gabriel García Márquez"], partielles: ["Márquez", "Marquez"] }],
    ["Neruda", ["Chili", "Isla", inc("Pinocchio", "nez", "Ne")]],
    ["Cortázar", ["marelle", "Argentine", inc("âme", "corps", "Cor")], { variantes: ["Cortazar"] }],
  ]),
];
