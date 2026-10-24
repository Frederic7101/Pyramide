import type { ListeNomsPropres, NomPropre } from "../engine/types";
import { assoc } from "./briques";

/**
 * Lot 6 : 25 listes de Noms Propres de niveau difficile, rédigées par Claude, à relire (version 2026-10-24).
 * Rébus et incitations sont permis ici (art. 5.3.1) ; toutes les briques sont des associations.
 */
const VERSION = "2026-10-24";

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

export const LOT6_NOMS_PROPRES: ListeNomsPropres[] = [
  liste("np-351", "Compositeurs du XXe siècle", [
    ["Stravinsky", ["Sacre", "Pétrouchka", "Oiseau"], { variantes: ["Stravinski", "Igor Stravinsky", "Igor Stravinski"] }],
    ["Bartók", ["Hongrie", "Barbe-Bleue", "Mandarin"], { variantes: ["Bartok", "Béla Bartók", "Bela Bartok"] }],
    ["Prokofiev", ["loup", "Pierre", "Roméo"], { variantes: ["Prokofieff", "Serge Prokofiev", "Sergueï Prokofiev"] }],
    ["Chostakovitch", ["Leningrad", "Macbeth", "jazz"], { variantes: ["Chostakovich", "Shostakovich", "Dmitri Chostakovitch"] }],
  ]),
  liste("np-352", "Expressionnistes et Sécession viennoise", [
    ["Munch", ["cri", "Oslo", "Madone"], { variantes: ["Edvard Munch"] }],
    ["Klimt", ["baiser", "Sécession", "Adele"], { variantes: ["Gustav Klimt"] }],
    ["Egon Schiele", ["Wally", "Vienne", "nus"], { partielles: ["Schiele"] }],
    ["Kokoschka", ["tempête", "Alma", "poupée"], { variantes: ["Oskar Kokoschka"] }],
  ]),
  liste("np-353", "Naturalistes et biologistes", [
    ["Linné", ["botanique", "Uppsala", "binomiale"], { variantes: ["Linne", "Carl von Linné"] }],
    ["Buffon", ["Montbard", "Histoire", "style"]],
    ["Mendel", ["pois", "hérédité", "moine"], { variantes: ["Gregor Mendel"] }],
    ["Pavlov", ["chien", "réflexe", "cloche"], { variantes: ["Ivan Pavlov"] }],
  ]),
  liste("np-354", "Romanciers des îles Britanniques au XXe siècle", [
    ["Virginia Woolf", ["Dalloway", "phare", "Bloomsbury"], { partielles: ["Woolf"] }],
    ["George Orwell", ["Winston", "ferme", "Catalogne"], { partielles: ["Orwell"] }],
    ["Aldous Huxley", ["mondes", "mescaline", "soma"], { partielles: ["Huxley"] }],
    ["James Joyce", ["Dublin", "Bloom", "Finnegans"], { partielles: ["Joyce"] }],
  ]),
  liste("np-355", "Explorateurs polaires", [
    ["Shackleton", ["Endurance", "banquise", "Géorgie"], { variantes: ["Ernest Shackleton"] }],
    ["Nansen", ["Fram", "Norvège", "réfugiés"], { variantes: ["Fridtjof Nansen"] }],
    ["Paul-Émile Victor", ["Groenland", "Terre-Adélie", "Bora-Bora"], { variantes: ["Paul-Emile Victor", "Paul Émile Victor"], partielles: ["Victor"] }],
    ["Robert Scott", ["Terra", "Amundsen", "Oates"], { partielles: ["Scott"] }],
  ]),
  liste("np-356", "Cinéastes italiens", [
    ["Visconti", ["Guépard", "Venise", "Senso"], { variantes: ["Luchino Visconti"] }],
    ["Pasolini", ["Théorème", "Ostie", "Salò"], { variantes: ["Pier Paolo Pasolini"] }],
    ["Antonioni", ["Blow-Up", "Vitti", "Zabriskie"], { variantes: ["Michelangelo Antonioni"] }],
    ["Sergio Leone", ["western", "Morricone", "dollars"], { partielles: ["Leone"] }],
  ]),
  liste("np-357", "Grands réalisateurs du cinéma classique américain", [
    ["Orson Welles", ["Rosebud", "Kane", "Martiens"], { partielles: ["Welles"] }],
    ["John Ford", ["diligence", "Wayne", "Monument"], { partielles: ["Ford"] }],
    ["Billy Wilder", ["Sunset", "Lemmon", "Marilyn"], { partielles: ["Wilder"] }],
    ["Fritz Lang", ["Metropolis", "Mabuse", "monocle"], { partielles: ["Lang"] }],
  ]),
  liste("np-358", "Légendes de l'athlétisme", [
    ["Jesse Owens", ["Berlin", "Alabama", "quatre"], { partielles: ["Owens"] }],
    ["Sergueï Bubka", ["perche", "Ukraine", "Donetsk"], { variantes: ["Serguei Bubka", "Sergey Bubka"], partielles: ["Bubka"] }],
    ["Emil Zátopek", ["locomotive", "Prague", "marathon"], { variantes: ["Emil Zatopek"], partielles: ["Zátopek", "Zatopek"] }],
    ["Marie-José Pérec", ["Atlanta", "Guadeloupe", "gazelle"], { variantes: ["Marie-José Perec", "Marie-Jose Perec"], partielles: ["Pérec", "Perec"] }],
  ]),
  liste("np-359", "Alpinistes", [
    ["Edmund Hillary", ["Everest", "Tenzing", "Zélande"], { partielles: ["Hillary"] }],
    ["Reinhold Messner", ["oxygène", "Tyrol", "quatorze"], { partielles: ["Messner"] }],
    ["Maurice Herzog", ["Annapurna", "Lachenal", "doigts"], { partielles: ["Herzog"] }],
    ["Walter Bonatti", ["Dru", "K2", "Courmayeur"], { partielles: ["Bonatti"] }],
  ]),
  liste("np-360", "Conquérants d'Orient", [
    ["Gengis Khan", ["Mongols", "Temüdjin", "horde"], { variantes: ["Genghis Khan", "Gengis Kahn"], partielles: ["Gengis"] }],
    ["Tamerlan", ["Samarcande", "boiteux", "Bajazet"], { variantes: ["Timour Lang"] }],
    ["Cyrus", ["Perse", "Babylone", "Achéménides"], { variantes: ["Cyrus le Grand", "Cyrus II"] }],
    ["Soliman", ["Roxelane", "Ottoman", "Vienne"], { variantes: ["Soliman le Magnifique", "Suleyman"] }],
  ]),
  liste("np-361", "Stratèges et hommes d'État grecs", [
    ["Périclès", ["Parthénon", "Aspasie", "Athènes"], { variantes: ["Pericles"] }],
    ["Léonidas", ["Thermopyles", "Sparte", "trois-cents"], { variantes: ["Leonidas"] }],
    ["Thémistocle", ["Salamine", "trières", "ostracisme"], { variantes: ["Themistocle"] }],
    ["Alcibiade", ["Socrate", "Sicile", "transfuge"]],
  ]),
  liste("np-362", "Déserts", [
    ["Gobi", ["Mongolie", "dinosaures", "Chine"]],
    ["Atacama", ["Chili", "aride", "observatoires"]],
    ["Kalahari", ["Botswana", "Bochimans", "Namibie"]],
    ["Néguev", ["Israël", "kibboutz", "Beer-Sheva"], { variantes: ["Neguev", "Negev"] }],
  ]),
  liste("np-363", "Lacs du monde", [
    ["Titicaca", ["Bolivie", "Pérou", "Uros"]],
    ["Baïkal", ["Sibérie", "Irkoutsk", "profondeur"], { variantes: ["Baikal"] }],
    ["Tanganyika", ["Burundi", "Tanzanie", "Kigoma"]],
    ["Balaton", ["Hongrie", "Tihany", "Siófok"]],
  ]),
  liste("np-364", "Détroits", [
    ["Bosphore", ["Istanbul", "Marmara", "Asie"]],
    ["Gibraltar", ["colonnes", "Hercule", "Tarifa"]],
    ["Béring", ["Alaska", "Sibérie", "Danois"], { variantes: ["Bering"] }],
    ["Ormuz", ["pétrole", "Iran", "Oman"]],
  ]),
  liste("np-365", "Cités sacrées et royales d'Asie", [
    ["Ispahan", ["Iran", "mosquée", "moitié"]],
    ["Kyoto", ["Japon", "temples", "protocole"], { variantes: ["Kyōto"] }],
    ["Lhassa", ["Potala", "Tibet", "dalaï-lama"], { variantes: ["Lhasa"] }],
    ["Bénarès", ["Gange", "crémations", "ghats"], { variantes: ["Benares", "Varanasi"] }],
  ]),
  liste("np-366", "Héros de l'Iliade", [
    ["Hector", ["Andromaque", "Troie", "Priam"]],
    ["Patrocle", ["Achille", "armure", "ami"]],
    ["Agamemnon", ["Mycènes", "Clytemnestre", "Iphigénie"]],
    ["Ajax", ["Télamon", "bouclier", "folie"]],
  ]),
  liste("np-367", "Monstres de la mythologie grecque", [
    ["Méduse", ["Gorgone", "serpents", "Persée"], { variantes: ["Meduse"] }],
    ["Cerbère", ["chien", "Enfers", "trois"], { variantes: ["Cerbere"] }],
    ["Charybde", ["Scylla", "tourbillon", "Messine"]],
    ["Chimère", ["Bellérophon", "lion", "chèvre"], { variantes: ["Chimere"] }],
  ]),
  liste("np-368", "Dieux de l'hindouisme", [
    ["Shiva", ["destructeur", "trident", "Parvati"], { variantes: ["Siva", "Çiva"] }],
    ["Vishnou", ["avatars", "Krishna", "conservateur"], { variantes: ["Vishnu"] }],
    ["Ganesh", ["éléphant", "souris", "obstacles"], { variantes: ["Ganesha"] }],
    ["Brahma", ["créateur", "lotus", "quatre"]],
  ]),
  liste("np-369", "Personnages de Jules Verne", [
    ["Nemo", ["Nautilus", "Ned", "lieues"], { variantes: ["Capitaine Nemo"] }],
    ["Michel Strogoff", ["tsar", "courrier", "Sibérie"], { partielles: ["Strogoff"] }],
    ["Passepartout", ["Fogg", "valet", "quatre-vingts"]],
    ["Robur", ["Albatros", "conquérant", "dirigeable"]],
  ]),
  liste("np-370", "Personnages de romans russes", [
    ["Raskolnikov", ["hache", "Sonia", "châtiment"], { variantes: ["Raskolnikoff", "Raskolnikof"] }],
    ["Oblomov", ["paresse", "divan", "Gontcharov"], { variantes: ["Oblomoff"] }],
    ["Anna Karénine", ["Vronski", "train", "Tolstoï"], { variantes: ["Anna Karenine"], partielles: ["Karénine", "Karenine"] }],
    ["Mychkine", ["idiot", "prince", "épilepsie"], { variantes: ["Myshkin"] }],
  ]),
  liste("np-371", "Poètes du XVIe siècle", [
    ["Ronsard", ["Cassandre", "mignonne", "rose"], { variantes: ["Pierre de Ronsard"] }],
    ["Du Bellay", ["Regrets", "Liré", "Ulysse"], { variantes: ["Joachim du Bellay"] }],
    ["Louise Labé", ["cordière", "Lyon", "sonnets"], { variantes: ["Louise Labe"], partielles: ["Labé", "Labe"] }],
    ["Agrippa d'Aubigné", ["Tragiques", "huguenot", "Maintenon"], { variantes: ["Agrippa d'Aubigne"], partielles: ["d'Aubigné", "Aubigné", "d'Aubigne"] }],
  ]),
  liste("np-372", "Chefs d'orchestre", [
    ["Karajan", ["Salzbourg", "Berlin", "Autrichien"], { variantes: ["Herbert von Karajan", "von Karajan"] }],
    ["Toscanini", ["Scala", "Parme", "NBC"], { variantes: ["Arturo Toscanini"] }],
    ["Leonard Bernstein", ["Broadway", "Candide", "Mahler"], { partielles: ["Bernstein"] }],
    ["Pierre Boulez", ["IRCAM", "sériel", "Montbrison"], { partielles: ["Boulez"] }],
  ]),
  liste("np-373", "Grandes voix de l'opéra", [
    ["Maria Callas", ["Divine", "Onassis", "Médée"], { partielles: ["Callas"] }],
    ["Enrico Caruso", ["Naples", "gramophone", "ténor"], { partielles: ["Caruso"] }],
    ["Luciano Pavarotti", ["Modène", "mouchoir", "trois"], { partielles: ["Pavarotti"] }],
    ["Montserrat Caballé", ["Barcelona", "Mercury", "Catalogne"], { variantes: ["Montserrat Caballe"], partielles: ["Caballé", "Caballe"] }],
  ]),
  liste("np-374", "Peintres abstraits", [
    ["Kandinsky", ["Bauhaus", "spirituel", "Moscou"], { variantes: ["Kandinski", "Vassily Kandinsky", "Wassily Kandinsky"] }],
    ["Mondrian", ["quadrillage", "primaires", "Boogie-Woogie"], { variantes: ["Piet Mondrian"] }],
    ["Malevitch", ["carré", "suprématisme", "blanc"], { variantes: ["Kasimir Malevitch"] }],
    ["Rothko", ["aplats", "chapelle", "Houston"], { variantes: ["Mark Rothko"] }],
  ]),
  liste("np-375", "Pionniers de l'informatique", [
    ["Alan Turing", ["Enigma", "Bletchley", "pomme"], { partielles: ["Turing"] }],
    ["Charles Babbage", ["analytique", "Lovelace", "différences"], { partielles: ["Babbage"] }],
    ["John von Neumann", ["architecture", "Budapest", "Princeton"], { variantes: ["John Von Neumann"], partielles: ["von Neumann", "Von Neumann", "Neumann"] }],
    ["Claude Shannon", ["information", "bit", "entropie"], { partielles: ["Shannon"] }],
  ]),
];
