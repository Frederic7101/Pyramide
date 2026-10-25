import type { Brique, ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc, inc } from "./briques";

/**
 * Lot 6 : 25 listes de Noms Propres de niveau difficile, rédigées par Claude, à relire (version 2026-10-24).
 * Rébus et incitations sont permis ici (art. 5.3.1) ; toutes les briques sont des associations.
 */
const VERSION = "2026-10-24";

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

export const LOT6_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-351", "Compositeurs du XXe siècle", [
    ["Stravinsky", ["Sacre", "Pétrouchka", inc("slalom", "ski", "sky", "ski", "fin")], { variantes: ["Stravinski", "Igor Stravinsky", "Igor Stravinski"] }],
    ["Bartók", ["Hongrie", "Barbe-Bleue", inc("bistrot", "bar", "Bar")], { variantes: ["Bartok", "Béla Bartók", "Bela Bartok"] }],
    ["Prokofiev", ["loup", "Pierre", inc("amateur", "pro", "Pro")], { variantes: ["Prokofieff", "Serge Prokofiev", "Sergueï Prokofiev"] }],
    ["Chostakovitch", ["Leningrad", "Macbeth", "jazz"], { variantes: ["Chostakovich", "Shostakovich", "Dmitri Chostakovitch"] }],
  ]),
  liste("np-352", "Expressionnistes et Sécession viennoise", [
    ["Munch", ["cri", "Oslo", inc("dur", "mou", "Mun", "mou")], { variantes: ["Edvard Munch"] }],
    ["Klimt", ["baiser", "Sécession", inc("chauffage", "clim", "Klim", "clim")], { variantes: ["Gustav Klimt"] }],
    ["Egon Schiele", ["Wally", "Vienne", "nus"], { partielles: ["Schiele"] }],
    ["Kokoschka", ["tempête", "Alma", inc("poule", "coq", "Kok", "coq")], { variantes: ["Oskar Kokoschka"] }],
  ]),
  liste("np-353", "Naturalistes et biologistes", [
    ["Linné", ["botanique", "binomiale", inc("Pinocchio", "nez", "né", "nez", "fin")], { variantes: ["Linne", "Carl von Linné"] }],
    ["Buffon", ["Montbard", "style", inc("forme", "fond", "fon", "fon", "fin")]],
    ["Mendel", ["pois", "hérédité", "moine"], { variantes: ["Gregor Mendel"] }],
    ["Pavlov", ["chien", "réflexe", inc("opium", "pavot", "Pav")], { variantes: ["Ivan Pavlov"] }],
  ]),
  liste("np-354", "Romanciers des îles Britanniques au XXe siècle", [
    ["Virginia Woolf", ["Dalloway", "phare", "Bloomsbury"], { partielles: ["Woolf"] }],
    ["George Orwell", ["Winston", "ferme", inc("argent", "or", "Or", "or", "milieu")], { partielles: ["Orwell"] }],
    ["Aldous Huxley", ["mondes", "mescaline", "soma"], { partielles: ["Huxley"] }],
    ["James Joyce", ["Dublin", "Bloom", "Finnegans"], { partielles: ["Joyce"] }],
  ]),
  liste("np-355", "Explorateurs polaires", [
    ["Shackleton", ["Endurance", "banquise", inc("souris", "chat", "Sha", "cha")], { variantes: ["Ernest Shackleton"] }],
    ["Nansen", ["Fram", "Norvège", inc("coulisses", "scène", "sen", "cène", "fin")], { variantes: ["Fridtjof Nansen"] }],
    ["Paul-Émile Victor", ["Groenland", "Terre-Adélie", inc("raison", "tort", "tor", "tor", "fin")], { variantes: ["Paul-Emile Victor", "Paul Émile Victor"], partielles: ["Victor"] }],
    ["Robert Scott", ["Terra", "Amundsen", inc("adhésif", "scotch", "Scot", "scot", "milieu")], { partielles: ["Scott"] }],
  ]),
  liste("np-356", "Cinéastes italiens", [
    ["Visconti", ["Guépard", "Senso", inc("écrou", "vis", "Vis")], { variantes: ["Luchino Visconti"] }],
    ["Pasolini", ["Théorème", "Salò", inc("oiseau", "nid", "ni", "ni", "fin")], { variantes: ["Pier Paolo Pasolini"] }],
    ["Antonioni", ["Blow-Up", "Vitti", "Zabriskie"], { variantes: ["Michelangelo Antonioni"] }],
    ["Sergio Leone", ["western", "Morricone", inc("Cyrano", "nez", "ne", "ne", "fin")], { partielles: ["Leone"] }],
  ]),
  liste("np-357", "Grands réalisateurs du cinéma classique américain", [
    ["Orson Welles", ["Rosebud", "Kane", "Martiens"], { partielles: ["Welles"] }],
    ["John Ford", ["diligence", "Wayne", inc("faible", "fort", "For", "for", "milieu")], { partielles: ["Ford"] }],
    ["Billy Wilder", ["Sunset", "Lemmon", "Marilyn"], { partielles: ["Wilder"] }],
    ["Fritz Lang", ["Metropolis", "Mabuse", inc("rapide", "lent", "Lan", "len", "milieu")], { partielles: ["Lang"] }],
  ]),
  liste("np-358", "Légendes de l'athlétisme", [
    ["Jesse Owens", ["Berlin", "Alabama", "quatre"], { partielles: ["Owens"] }],
    ["Sergueï Bubka", ["perche", "Ukraine", inc("pétanque", "boule", "Bub", "bou", "milieu")], { variantes: ["Serguei Bubka", "Sergey Bubka"], partielles: ["Bubka"] }],
    ["Emil Zátopek", ["locomotive", "Prague", "marathon"], { variantes: ["Emil Zatopek"], partielles: ["Zátopek", "Zatopek"] }],
    ["Marie-José Pérec", ["Atlanta", "Guadeloupe", inc("mémé", "pépé", "Pé", "pé", "milieu")], { variantes: ["Marie-José Perec", "Marie-Jose Perec"], partielles: ["Pérec", "Perec"] }],
  ]),
  liste("np-359", "Alpinistes", [
    ["Edmund Hillary", ["Everest", "Tenzing", inc("elle", "il", "Hil", "il", "milieu")], { partielles: ["Hillary"] }],
    ["Reinhold Messner", ["oxygène", "quatorze", inc("curé", "messe", "Mess", "mess", "milieu")], { partielles: ["Messner"] }],
    ["Maurice Herzog", ["Annapurna", "Lachenal", "doigts"], { partielles: ["Herzog"] }],
    ["Walter Bonatti", ["Dru", "K2", inc("mauvaise", "bonne", "Bon", "bon", "milieu")], { partielles: ["Bonatti"] }],
  ]),
  liste("np-360", "Conquérants d'Orient", [
    ["Gengis Khan", ["Mongols", "Temüdjin", "horde"], { variantes: ["Genghis Khan", "Gengis Kahn"], partielles: ["Gengis"] }],
    ["Tamerlan", ["Samarcande", "boiteux", inc("rapide", "lent", "lan", "len", "fin")], { variantes: ["Timour Lang"] }],
    ["Cyrus", ["Perse", "Babylone", inc("bougie", "cire", "Cyr", "cir")], { variantes: ["Cyrus le Grand", "Cyrus II"] }],
    ["Soliman", ["Roxelane", "Ottoman", inc("plafond", "sol", "Sol")], { variantes: ["Soliman le Magnifique", "Suleyman"] }],
  ]),
  liste("np-361", "Stratèges et hommes d'État grecs", [
    ["Périclès", ["Parthénon", "Aspasie", inc("mémé", "pépé", "Pé", "pé")], { variantes: ["Pericles"] }],
    ["Léonidas", ["Thermopyles", "Sparte", "trois-cents"], { variantes: ["Leonidas"] }],
    ["Thémistocle", ["Salamine", "ostracisme", inc("café", "thé", "Thé")], { variantes: ["Themistocle"] }],
    ["Alcibiade", ["Socrate", "Sicile", "transfuge"]],
  ]),
  liste("np-362", "Déserts", [
    ["Gobi", ["Mongolie", "dinosaures", "Chine"]],
    ["Atacama", ["Chili", "aride", inc("défense", "attaque", "Atac", "attaq")]],
    ["Kalahari", ["Botswana", "Bochimans", "Namibie"]],
    ["Néguev", ["Israël", "kibboutz", inc("narine", "nez", "Né", "ne")], { variantes: ["Neguev", "Negev"] }],
  ]),
  liste("np-363", "Lacs du monde", [
    ["Titicaca", ["Bolivie", "Pérou", inc("Grosminet", "Titi", "Titi")]],
    ["Baïkal", ["Sibérie", "Irkoutsk", "profondeur"], { variantes: ["Baikal"] }],
    ["Tanganyika", ["Burundi", "Tanzanie", inc("oncle", "tante", "Tan")]],
    ["Balaton", ["Hongrie", "Tihany", inc("raquette", "balle", "Bal")]],
  ]),
  liste("np-364", "Détroits", [
    ["Bosphore", ["Istanbul", "Marmara", inc("chameau", "bosse", "Bos")]],
    ["Gibraltar", ["colonnes", "Hercule", inc("tôt", "tard", "tar", "tar", "fin")]],
    ["Béring", ["Alaska", "Sibérie", "Danois"], { variantes: ["Bering"] }],
    ["Ormuz", ["pétrole", "Iran", inc("argent", "or", "Or")]],
  ]),
  liste("np-365", "Cités sacrées et royales d'Asie", [
    ["Ispahan", ["Iran", "mosquée", "moitié"]],
    ["Kyoto", ["Japon", "temples", inc("tard", "tôt", "to", "to", "fin")], { variantes: ["Kyōto"] }],
    ["Lhassa", ["Potala", "Tibet", inc("ici", "là", "Lha", "la")], { variantes: ["Lhasa"] }],
    ["Bénarès", ["Gange", "crémations", "ghats"], { variantes: ["Benares", "Varanasi"] }],
  ]),
  liste("np-366", "Héros de l'Iliade", [
    ["Hector", ["Andromaque", "Priam", inc("raison", "tort", "tor", "tor", "fin")]],
    ["Patrocle", ["Achille", "armure", inc("employé", "patron", "Patr")]],
    ["Agamemnon", ["Mycènes", "Iphigénie", inc("oui", "non", "non", "non", "fin")]],
    ["Ajax", ["Télamon", "bouclier", "folie"]],
  ]),
  liste("np-367", "Monstres de la mythologie grecque", [
    ["Méduse", ["Gorgone", "serpents", "Persée"], { variantes: ["Meduse"] }],
    ["Cerbère", ["Enfers", "trois", inc("biche", "cerf", "Cer")], { variantes: ["Cerbere"] }],
    ["Charybde", ["Scylla", "tourbillon", inc("rond", "carré", "Char", "car")]],
    ["Chimère", ["Bellérophon", "lion", inc("père", "mère", "mère", "mère", "fin")], { variantes: ["Chimere"] }],
  ]),
  liste("np-368", "Dieux de l'hindouisme", [
    ["Shiva", ["destructeur", "trident", inc("vient", "va", "va", "va", "fin")], { variantes: ["Siva", "Çiva"] }],
    ["Vishnou", ["avatars", "conservateur", inc("vous", "nous", "nou", "nou", "fin")], { variantes: ["Vishnu"] }],
    ["Ganesh", ["éléphant", "souris", "obstacles"], { variantes: ["Ganesha"] }],
    ["Brahma", ["créateur", "lotus", inc("jambe", "bras", "Bra")]],
  ]),
  liste("np-369", "Personnages de Jules Verne", [
    ["Nemo", ["Nautilus", "Ned", inc("Pinocchio", "nez", "Ne", "ne")], { variantes: ["Capitaine Nemo"] }],
    ["Michel Strogoff", ["tsar", "courrier", "Sibérie"], { partielles: ["Strogoff"] }],
    ["Passepartout", ["Fogg", "valet", inc("rien", "tout", "tout", "tout", "fin")]],
    ["Robur", ["Albatros", "dirigeable", inc("jupe", "robe", "Rob")]],
  ]),
  liste("np-370", "Personnages de romans russes", [
    ["Raskolnikov", ["hache", "Sonia", "châtiment"], { variantes: ["Raskolnikoff", "Raskolnikof"] }],
    ["Oblomov", ["paresse", "divan", "Gontcharov"], { variantes: ["Oblomoff"] }],
    ["Anna Karénine", ["Vronski", "train", inc("rond", "carré", "Karé", "carre", "milieu")], { variantes: ["Anna Karenine"], partielles: ["Karénine", "Karenine"] }],
    ["Mychkine", ["idiot", "prince", "épilepsie"], { variantes: ["Myshkin"] }],
  ]),
  liste("np-371", "Poètes du XVIe siècle", [
    ["Ronsard", ["Cassandre", "mignonne", inc("carré", "rond", "Ron")], { variantes: ["Pierre de Ronsard"] }],
    ["Du Bellay", ["Regrets", "Liré", inc("bête", "belle", "Bell", "bell", "milieu")], { variantes: ["Joachim du Bellay"] }],
    ["Louise Labé", ["cordière", "Lyon", inc("ici", "là", "La", "la", "milieu")], { variantes: ["Louise Labe"], partielles: ["Labé", "Labe"] }],
    ["Agrippa d'Aubigné", ["Tragiques", "huguenot", inc("ventre", "dos", "d'Au", "do", "milieu")], { variantes: ["Agrippa d'Aubigne"], partielles: ["d'Aubigné", "Aubigné", "d'Aubigne"] }],
  ]),
  liste("np-372", "Chefs d'orchestre", [
    ["Karajan", ["Salzbourg", "Berlin", inc("judo", "karaté", "Kara", "kara")], { variantes: ["Herbert von Karajan", "von Karajan"] }],
    ["Toscanini", ["Scala", "NBC", inc("oiseau", "nid", "ni", "ni", "fin")], { variantes: ["Arturo Toscanini"] }],
    ["Leonard Bernstein", ["Broadway", "Candide", inc("Suisse", "Berne", "Bern", "Bern", "milieu")], { partielles: ["Bernstein"] }],
    ["Pierre Boulez", ["IRCAM", "sériel", inc("pétanque", "boule", "Boul", "boul", "milieu")], { partielles: ["Boulez"] }],
  ]),
  liste("np-373", "Grandes voix de l'opéra", [
    ["Maria Callas", ["Divine", "Onassis", inc("tempête", "calme", "Cal", "cal", "milieu")], { partielles: ["Callas"] }],
    ["Enrico Caruso", ["Naples", "ténor", inc("rond", "carré", "Car", "car", "milieu")], { partielles: ["Caruso"] }],
    ["Luciano Pavarotti", ["Modène", "mouchoir", "trois"], { partielles: ["Pavarotti"] }],
    ["Montserrat Caballé", ["Barcelona", "Mercury", "Catalogne"], { variantes: ["Montserrat Caballe"], partielles: ["Caballé", "Caballe"] }],
  ]),
  liste("np-374", "Peintres abstraits", [
    ["Kandinsky", ["Bauhaus", "spirituel", inc("slalom", "ski", "sky", "ski", "fin")], { variantes: ["Kandinski", "Vassily Kandinsky", "Wassily Kandinsky"] }],
    ["Mondrian", ["quadrillage", "Boogie-Woogie", inc("vallée", "mont", "Mon")], { variantes: ["Piet Mondrian"] }],
    ["Malevitch", ["carré", "suprématisme", inc("bien", "mal", "Mal")], { variantes: ["Kasimir Malevitch"] }],
    ["Rothko", ["aplats", "chapelle", "Houston"], { variantes: ["Mark Rothko"] }],
  ]),
  liste("np-375", "Pionniers de l'informatique", [
    ["Alan Turing", ["Enigma", "Bletchley", inc("vous", "tu", "Tu", "tu", "milieu")], { partielles: ["Turing"] }],
    ["Charles Babbage", ["analytique", "Lovelace", inc("Ali", "Baba", "Bab", "Bab")], { partielles: ["Babbage"] }],
    ["John von Neumann", ["architecture", "Budapest", "Princeton"], { variantes: ["John Von Neumann"], partielles: ["von Neumann", "Von Neumann", "Neumann"] }],
    ["Claude Shannon", ["information", "entropie", inc("souris", "chat", "Sha", "cha", "milieu")], { partielles: ["Shannon"] }],
  ]),
];
