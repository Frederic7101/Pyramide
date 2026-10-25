# Test à l'aveugle de Syno, joué comme en partie (niveau @tests-aveugle/echantillon-10-par-niveau.json)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-003 | facile | Compagnon des jours gris | ciel (1/2), bouclier (1/3), baleines (1/2), vent (1/2), train (2/3) | 1 | ✓ | 7 |
| e-006 | facile | Le dormeur | ~~siècles~~, feu (1/2), lave (2/2), ~~ville~~, cratère (1/3) | 0 | ✓ | 4 |
| e-007 | facile | Il passe chaque matin | tournée (1/3), sacoche (1/3), lettres (1/2), boîte (2/2), vélo (1/2) | 1 | ✓ | 7 |
| e-008 | facile | Or liquide | ruche (1/3), abeilles (1/2), nectar (1/2), sucré (2/2), tranche (1/2) | 2 | ✓ | 8 |
| e-009 | facile | Septième art | salle (1/2), écran (1/2), réalisateur (1/3), scène (1/3), actrice (1/2) | 1 | ✓ | 7 |
| e-204 | moyen | Effacé, pas oublié | parchemin (1/2), moine (1/3), texte (1/2), rayons (1/2), écritures (1/3) | 1 | ✓ | 7 |
| e-304 | difficile | Faux dévot | masque (1/2), duplicité (2/3), parangon (2/3), simagrées (1/3), crocodile (1/2) | 0 | ✓ | 6 |
| e-305 | difficile | Le pardon des grands | clémence (2/2), félon (1/3), magnanimité (1/3), rancœur (3/3), sanction (2/2) | 0 | ✗ (la grâce, la générosité, le pardon) | 5 |
| e-308 | difficile | Raisonnement trompeur | rigoureux (1/2), faille (1/2), prémisses (1/3), conclusion (2/2), piège (1/2) | 2 | ✓ | 8 |
| e-325 | difficile | Le désert intérieur | anachorète (3/3), jeûne (1/2), abstinence (2/2), ~~discipline~~, purification (1/3) | 0 | ✓ | 5 |
| e-326 | difficile | La lanterne de Diogène | tonneau (1/2), conventions (2/3), argent (1/2), impudence (1/2), notables (2/2) | 2 | ✓ | 8 |
| e-329 | difficile | Bernin et Borromini | profusion (1/2), volutes (2/2), torses (2/2), trompe-l'œil (1/2), ostentation (1/2) | 3 | ✓ | 9 |
| e-331 | difficile | Brebis égarées | dogme (1/2), excommunication (2/3), inquisition (1/2), dissidents (1/3), bûcher (1/2) | 1 | ✓ | 7 |
| e-335 | difficile | Querelle des images | empereur (1/2), icônes (1/2), frondeur (2/3), bousculer (2/2), ~~dogmes~~ | 0 | ✓ | 5 |
| e-339 | difficile | Héraclès au marais | monstre (1/2), multiples (2/2), décapitation (1/3), cautériser (1/3), bout (1/2) | 1 | ✓ | 7 |
| e-341 | difficile | Coup de dés | destin (2/2), chance (1/2), fortune (1/2), étoile (1/2), poisse (2/2) | 3 | ✓ | 9 |
| e-403 | facile | Pôle Nord de la cuisine | armoire (2/3), frais (1/2), beurre (1/2), yaourts (1/2), jambon (2/2) | 2 | ✓ | 8 |
| e-428 | facile | Tchou-tchou ! | quai (1/2), voie (1/3), wagon (1/3), contrôleur (1/3), billets (1/2) | 0 | ✓ | 6 |
| e-430 | facile | Hotte sur le dos | traîneau (1/3), rennes (1/2), cheminée (1/3), cadeaux (1/2), sapin (1/3) | 0 | ✓ | 6 |
| e-435 | facile | Petite reine | selle (1/2), guidon (1/2), pédales (1/2), équilibre (1/2), chambre (2/3) | 2 | ✓ | 8 |
| e-437 | facile | Au-dessus des nuages | aéroport (1/2), valises (1/2), pilote (1/2), piste (3/3), hôtesse (1/2) | 2 | ✓ | 8 |
| e-503 | moyen | Le cerf-volant de Benjamin | faîte (2/3), tige (1/2), foudre (1/2), câble (2/2), incendie (1/3) | 1 | ✓ | 7 |
| e-506 | moyen | Peindre dans le frais | pigments (1/2), enduit (1/2), humide (1/3), échafaudage (1/3), plafond (2/2) | 1 | ✓ | 7 |
| e-509 | moyen | Embouchure en éventail | fleuve (1/2), bras (1/2), crues (1/2), alluvions (1/2), triangle (1/2) | 3 | ✓ | 9 |
| e-515 | moyen | Le cheval de fer | foyer (1/2), pelle (1/2), charbon (1/2), wagons (1/2), rails (1/3) | 2 | ✓ | 8 |
| e-520 | moyen | La Chevauchée fantastique | diligence (1/2), shérif (1/2), flèches (1/2), duel (1/2), revolver (2/2) | 3 | ✓ | 9 |
| e-530 | moyen | Un plat qui se mange froid | affront (1/2), ressentiment (1/2), représailles (1/3), implacable (1/3), châtiment (1/3) | 0 | ✓ | 6 |
| e-533 | moyen | Salle des pas perdus | prévenu (1/2), greffier (1/3), ~~réquisitoire~~, ~~jurés~~, verdict (1/2) | 0 | ✓ | 4 |
| e-536 | moyen | Je sens la chair fraîche | bottes (1/2), colosse (2/2), dévorer (1/2), couronnes (1/2), cailloux (2/2) | 3 | ✓ | 9 |
| e-541 | moyen | Le comte des Carpates | crocs (1/2), cercueil (1/2), ail (1/2), aube (2/2), pieu (1/2) | 3 | ✓ | 9 |

Score moyen : 7.1 sur 30 énigme(s).

Mots trouvés : 111 à la brique 1, 30 à la brique 2, 3 à la brique 3, 6 non trouvés.

## Noms Propres

| Liste | Niveau | Thème | Noms (brique où trouvé) | Points |
|---|---|---|---|---|
| np-002 | facile | Écrivains français | Victor Hugo (1), Molière (1), Émile Zola (1), Jules Verne (1) | 4/4 |
| np-103 | moyen | Villes de France | Strasbourg (1), Marseille (1), Lille (1), Bordeaux (1) | 4/4 |
| np-204 | difficile | Écrivains russes | Tolstoï (1), Dostoïevski (1), Tchekhov (1), Pouchkine (1) | 4/4 |
| np-205 | moyen | Savants de l'Antiquité | Archimède (1), Euclide (1), Pythagore (1), Hippocrate (1) | 4/4 |
| np-307 | difficile | Écrivains des Lumières | Diderot (1), Montesquieu (1), Marivaux (1), Beaumarchais (1) | 4/4 |
| np-316 | difficile | Empereurs romains | Hadrien (1), Caligula (1), Néron (1), Marc Aurèle (1) | 4/4 |
| np-322 | difficile | Personnages de Shakespeare | Hamlet (1), Othello (1), Falstaff (1), Prospero (1) | 4/4 |
| np-327 | difficile | Grands de la chanson | Brassens (1), Brel (1), Ferré (1), Barbara (1) | 4/4 |
| np-328 | difficile | Peintres espagnols | Goya (1), Vélasquez (1), Zurbarán (1), Le Greco (1) | 4/4 |
| np-331 | difficile | Philosophes allemands | Hegel (1), Nietzsche (1), Schopenhauer (1), Heidegger (1) | 4/4 |
| np-338 | difficile | Maréchaux d'Empire | Ney (1), Murat (1), Davout (1), Lannes (1) | 4/4 |
| np-345 | difficile | Dieux nordiques | Odin (1), Thor (1), Loki (1), Freyja (1) | 4/4 |
| np-349 | difficile | Héros de bande dessinée réaliste | Blake (1), Corto Maltese (1), Valérian (1), Blueberry (1) | 4/4 |
| np-403 | facile | Grandes villes du monde | New York (1), Londres (1), Rio de Janeiro (1), Venise (1) | 4/4 |
| np-420 | facile | Champions de tennis | Roger Federer (1), Rafael Nadal (1), Yannick Noah (1), Serena Williams (1) | 4/4 |
| np-424 | facile | Actrices françaises | Brigitte Bardot (1), Catherine Deneuve (1), Audrey Tautou (1), Marion Cotillard (1) | 4/4 |
| np-432 | facile | Marques gourmandes | Coca-Cola (2), Nutella (1), Haribo (1), Danone (1) | 4/4 |
| np-434 | facile | Outre-mer français | Martinique (1), La Réunion (1), Tahiti (1), Guyane (1) | 4/4 |
| np-437 | facile | Mers et océans | Méditerranée (1), Pacifique (1), Manche (1), Mer Morte (1) | 4/4 |
| np-441 | facile | Personnages de Star Wars | Dark Vador (1), Yoda (1), Chewbacca (1), Luke Skywalker (1) | 4/4 |
| np-448 | facile | Présidents de la République | Charles de Gaulle (1), Jacques Chirac (1), François Mitterrand (1), Emmanuel Macron (1) | 4/4 |
| np-449 | facile | Présidents américains | Abraham Lincoln (1), John F. Kennedy (1), George Washington (1), Barack Obama (1) | 4/4 |
| np-501 | moyen | Opéras de Verdi | Aïda (1), Rigoletto (1), Nabucco (1), Le Trouvère (1) | 4/4 |
| np-505 | moyen | Fauves et cubistes | Matisse (1), Braque (1), Derain (1), Fernand Léger (1) | 4/4 |
| np-511 | moyen | Moralistes et fabulistes du Grand Siècle | La Fontaine (1), La Bruyère (1), La Rochefoucauld (1), Boileau (1) | 4/4 |
| np-524 | moyen | Héroïnes de la mythologie grecque | Pénélope (1), Eurydice (1), Pandore (1), Hélène (1) | 4/4 |
| np-528 | moyen | Ministres de l'Ancien Régime | Mazarin (2), Colbert (1), Sully (1), Necker (1) | 4/4 |
| np-534 | moyen | Pionniers de l'aviation | Louis Blériot (1), Saint-Exupéry (1), Jean Mermoz (1), Roland Garros (1) | 4/4 |
| np-542 | moyen | Groupes de rock britanniques | Led Zeppelin (1), The Who (1), Pink Floyd (1), Oasis (1) | 4/4 |
| np-549 | moyen | Villes ibériques | Séville (1), Grenade (1), Barcelone (1), Porto (1) | 4/4 |

Noms trouvés : 120 sur 120.

## Raisonnement de Syno

### e-003 : « Compagnon des jours gris » → un parapluie

**Mot 1 : ciel** (trouvé à la brique 1, mise 2) — piste : firmament + nuages

- firmament → *ciel* ✓ — Synonyme de firmament, et le ciel est le compagnon des jours gris.

**Mot 2 : bouclier** (trouvé à la brique 1, mise 3) — piste : écu + épée + bouteille

- écu → *bouclier* ✓ — Écu est un bouclier, qui protège comme le compagnon des jours gris.

**Mot 3 : baleines** (trouvé à la brique 1, mise 2) — piste : cétacés + haut

- cétacés → *baleine* ✓ — Cétacé; les baleines du parapluie, compagnon des jours gris.

**Mot 4 : vent** (trouvé à la brique 1, mise 2) — piste : brise + acheter

- brise → *vent* ✓ — Brise = vent, qui retourne le parapluie.

**Mot 5 : train** (trouvé à la brique 2, mise 3) — piste : convoi + rails + accélérateur

- convoi → *cortège* ✗ — Convoi = cortège, lié aux jours gris.
- convoi + rails → *train* ✓ — Convoi sur rails = train.

**Solution : un parapluie** — texte découvert : « Je m'ouvre quand le ciel est menaçant ; je suis votre bouclier contre l'averse ; mes baleines plient par grand vent ; on m'oublie souvent dans le train. »

- *le parapluie* ✓ — S'ouvre contre l'averse, baleines, oublié dans le train.

### e-006 : « Le dormeur » → un volcan

**Mot 1 : siècles** (non trouvé, mise 2) — piste : époques + terre

- époques → *âges* ✗ — Synonyme pluriel d'époques.
- époques + terre → *ères* ✗ — Époques = ères, ères géologiques en lien avec terre.

**Mot 2 : feu** (trouvé à la brique 1, mise 2) — piste : flamme + beaucoup

- flamme → *feu* ✓ — Flamme = feu.

**Mot 3 : lave** (trouvé à la brique 2, mise 2) — piste : magma + ici

- magma → *volcan* ✗ — Magma, feu: le volcan dormant.
- magma + ici → *lave* ✓ — Ici -> là [la]; magma = lave, volcan refusé.

**Mot 4 : ville** (non trouvé, mise 2) — piste : cité + mort

- cité → *Pompéi* ✗ — Cité détruite par un volcan.
- cité + mort → *nécropole* ✗ — Cité des morts; Pompéi refusé.

**Mot 5 : cratère** (trouvé à la brique 1, mise 3) — piste : bouche + Lune + grenouille

- bouche → *cratère* ✓ — Bouche du volcan = cratère.

**Solution : un volcan** — texte découvert : « Je dors parfois pendant des ____ ; à mon réveil, je crache du feu et de la lave ; j'ai jadis enseveli une ____ romaine ; mon cratère fume au sommet. »

- *un volcan* ✓ — Dort des siècles, crache feu et lave, cratère.

### e-007 : « Il passe chaque matin » → le facteur

**Mot 1 : tournée** (trouvé à la brique 1, mise 3) — piste : virée + concerts + rien

- virée → *tournée* ✓ — Virée = tournée, et le facteur passe chaque matin.

**Mot 2 : sacoche** (trouvé à la brique 1, mise 3) — piste : besace + cartable + propre

- besace → *sacoche* ✓ — Besace du facteur = sacoche.

**Mot 3 : lettres** (trouvé à la brique 1, mise 2) — piste : missives + beau

- missives → *lettres* ✓ — Missives = lettres, que porte le facteur.

**Mot 4 : boîte** (trouvé à la brique 2, mise 2) — piste : coffret + manger

- coffret → *colis* ✗ — Coffret = colis que livre le facteur.
- coffret + manger → *boîte* ✓ — Manger -> boire [bwa]; coffret = boîte (aux lettres).

**Mot 5 : vélo** (trouvé à la brique 1, mise 2) — piste : bicyclette + mensonge

- bicyclette → *vélo* ✓ — Bicyclette = vélo du facteur.

**Solution : le facteur** — texte découvert : « Je fais ma tournée chaque matin ; ma sacoche est pleine de lettres ; je glisse le courrier dans la boîte ; jadis, je circulais à vélo. »

- *le facteur* ✓ — Tournée, sacoche, lettres, boîte, vélo.

### e-008 : « Or liquide » → le miel

**Mot 1 : ruche** (trouvé à la brique 1, mise 3) — piste : nid + alvéoles + lisse

- nid → *ruche* ✓ — Nid d'abeilles, lié à l'or liquide (miel).

**Mot 2 : abeilles** (trouvé à la brique 1, mise 2) — piste : bourdons + lendemain

- bourdons → *abeilles* ✓ — Bourdons, insectes proches des abeilles de la ruche.

**Mot 3 : nectar** (trouvé à la brique 1, mise 2) — piste : ambroisie + tôt

- ambroisie → *nectar* ✓ — Ambroisie, boisson divine = nectar, lié aux abeilles.

**Mot 4 : sucré** (trouvé à la brique 2, mise 2) — piste : doux + nord

- doux → *miel* ✗ — Doux, or liquide des abeilles.
- doux + nord → *sucre* ✓ — Nord -> sud [sy]; doux, sucre; miel refusé.

**Mot 5 : tranche** (trouvé à la brique 1, mise 2) — piste : rondelle + vingt-neuf

- rondelle → *tranche* ✓ — Rondelle = tranche, tartine au miel.

**Solution : le miel** — texte découvert : « Je suis né dans une ruche ; les abeilles m'ont fabriqué avec le nectar des fleurs ; je suis sucré et doré ; on m'étale sur une tranche de pain. »

- *le miel* ✓ — Ruche, abeilles, nectar, tartine.

### e-009 : « Septième art » → le cinéma

**Mot 1 : salle** (trouvé à la brique 1, mise 2) — piste : pièce + propre

- pièce → *salle* ✓ — Pièce (de la maison) = salle, et salle de cinéma pour le septième art.

**Mot 2 : écran** (trouvé à la brique 1, mise 2) — piste : moniteur + boulon

- moniteur → *écran* ✓ — Moniteur = écran, cinéma.

**Mot 3 : réalisateur** (trouvé à la brique 1, mise 3) — piste : Truffaut + producteur + do

- Truffaut → *réalisateur* ✓ — Truffaut est un réalisateur.

**Mot 4 : scène** (trouvé à la brique 1, mise 3) — piste : séquence + théâtre + six

- séquence → *scène* ✓ — Séquence = scène de film.

**Mot 5 : actrice** (trouvé à la brique 1, mise 2) — piste : comédienne + désaccord

- comédienne → *actrice* ✓ — Comédienne = actrice.

**Solution : le cinéma** — texte découvert : « Dans la salle obscure, on fixe le grand écran ; le réalisateur crie « Moteur ! » ; une scène jouée par une actrice fait pleurer le public. »

- *le cinéma* ✓ — Le texte décrit le cinéma, septième art.

### e-204 : « Effacé, pas oublié » → un palimpseste

**Mot 1 : parchemin** (trouvé à la brique 1, mise 2) — piste : vélin + papyrus

- vélin → *parchemin* ✓ — Vélin est un parchemin; texte effacé mais lisible.

**Mot 2 : moine** (trouvé à la brique 1, mise 3) — piste : religieux + abbaye + toi

- religieux → *moine* ✓ — Religieux copiste de manuscrits sur parchemin.

**Mot 3 : texte** (trouvé à la brique 1, mise 2) — piste : énoncé + paragraphe

- énoncé → *texte* ✓ — Énoncé = texte, manuscrit effacé.

**Mot 4 : rayons** (trouvé à la brique 1, mise 2) — piste : faisceaux + Röntgen

- faisceaux → *rayons* ✓ — Faisceaux = rayons (UV) pour lire le texte effacé.

**Mot 5 : écritures** (trouvé à la brique 1, mise 3) — piste : graphies + Champollion + boulon

- graphies → *écritures* ✓ — Graphies = écritures.

**Solution : un palimpseste** — texte découvert : « Sur ce parchemin ancien, un moine gratta le premier texte pour en copier un autre ; mais les rayons modernes révèlent les écritures effacées. »

- *palimpseste* ✓ — Parchemin gratté et réécrit, texte révélé.

### e-304 : « Faux dévot » → l'hypocrisie

**Mot 1 : masque** (trouvé à la brique 1, mise 2) — piste : loup + carnaval

- loup → *masque* ✓ — Le loup est un masque; le faux dévot porte un masque.

**Mot 2 : duplicité** (trouvé à la brique 2, mise 3) — piste : fausseté + Janus + naïf

- fausseté → *hypocrisie* ✗ — Fausseté du faux dévot.
- fausseté + Janus → *duplicité* ✓ — Fausseté, Janus à deux visages.

**Mot 3 : parangon** (trouvé à la brique 2, mise 3) — piste : modèle + vertu + père

- modèle → *archétype* ✗ — Modèle du faux dévot, évitant Tartuffe.
- modèle + vertu → *parangon* ✓ — Modèle de vertu, archétype refusé.

**Mot 4 : simagrées** (trouvé à la brique 1, mise 3) — piste : minauderies + grimaces + sommet

- minauderies → *simagrées* ✓ — Minauderies = simagrées.

**Mot 5 : crocodile** (trouvé à la brique 1, mise 2) — piste : caïman + Nil

- caïman → *crocodile* ✓ — Caïman -> crocodile, larmes de crocodile, hypocrite.

**Solution : l'hypocrisie** — texte découvert : « Sous le masque de la vertu se cache la duplicité ; Tartuffe en est le parangon ; ses simagrées sont des larmes de crocodile. »

- *l'hypocrite* ✓ — Masque, duplicité, simagrées: le faux dévot hypocrite.

### e-305 : « Le pardon des grands » → la mansuétude

**Mot 1 : clémence** (trouvé à la brique 2, mise 2) — piste : indulgence + sévérité

- indulgence → *grâce* ✗ — Indulgence synonyme de grâce, pardon des rois.
- indulgence + sévérité → *clémence* ✓ — Indulgence, contraire sévérité, grâce refusée.

**Mot 2 : félon** (trouvé à la brique 1, mise 3) — piste : traître + vassal + sorcière

- traître → *félon* ✓ — Traître = félon, pardonné par le roi.

**Mot 3 : magnanimité** (trouvé à la brique 1, mise 3) — piste : générosité + Auguste + nabab

- générosité → *magnanimité* ✓ — Générosité des grands qui pardonnent.

**Mot 4 : rancœur** (trouvé à la brique 3, mise 3) — piste : aigreur + fiel + file

- aigreur → *rancune* ✗ — Aigreur = rancune, contraire du pardon.
- aigreur + fiel → *amertume* ✗ — Aigreur, fiel = amertume; rancune refusé.
- aigreur + fiel + file → *rancœur* ✓ — File -> rang [ʁɑ̃]; aigreur, fiel = rancœur.

**Mot 5 : sanction** (trouvé à la brique 2, mise 2) — piste : punition + avec

- punition → *châtiment* ✗ — Punition = châtiment, opposé au pardon.
- punition + avec → *sanction* ✓ — Avec -> sans [sɑ̃]; punition = sanction; châtiment refusé.

**Solution : la mansuétude** — texte découvert : « Le roi fit preuve de clémence envers le félon ; sa magnanimité désarma la rancœur des courtisans, qui attendaient une sanction exemplaire. »

- *la grâce* ✗ — Le pardon accordé par le roi malgré l'attente d'une sanction: la grâce royale.
- *la générosité* ✗ — Le texte décrit la grandeur d'âme du souverain qui pardonne; la grâce est refusée et les mots du texte sont exclus, donc la générosité des grands.
- *le pardon* ✗ — Le texte décrit le roi qui pardonne au félon; grâce et générosité refusées, reste la notion même du pardon des grands.

### e-308 : « Raisonnement trompeur » → un sophisme

**Mot 1 : rigoureux** (trouvé à la brique 1, mise 2) — piste : strict + hiver

- strict → *rigoureux* ✓ — Strict ~ rigoureux, lié au raisonnement.

**Mot 2 : faille** (trouvé à la brique 1, mise 2) — piste : brèche + sismique

- brèche → *faille* ✓ — Brèche = faille, dans un raisonnement.

**Mot 3 : prémisses** (trouvé à la brique 1, mise 3) — piste : postulats + syllogisme + accusé

- postulats → *prémisses* ✓ — Postulats = prémisses d'un raisonnement.

**Mot 4 : conclusion** (trouvé à la brique 2, mise 2) — piste : déduction + cornichon

- déduction → *syllogisme* ✗ — Déduction logique, raisonnement trompeur.
- déduction + cornichon → *conclusion* ✓ — Cornichon -> concombre [kõ]; déduction = conclusion.

**Mot 5 : piège** (trouvé à la brique 1, mise 2) — piste : traquenard + souris

- traquenard → *piège* ✓ — Traquenard = piège.

**Solution : un sophisme** — texte découvert : « Ce raisonnement paraît rigoureux, mais il cache une faille ; ses prémisses sont vraies, sa conclusion est fausse : c'est un piège déguisé. »

- *le sophisme* ✓ — Raisonnement faux d'apparence rigoureuse.

### e-325 : « Le désert intérieur » → l'ascèse

**Mot 1 : anachorète** (trouvé à la brique 3, mise 3) — piste : ermite + Thébaïde + boa

- ermite → *solitaire* ✗ — Ermite vit seul; solitude du désert intérieur.
- ermite + Thébaïde → *retraite* ✗ — Ermite et Thébaïde évoquent la retraite.
- ermite + Thébaïde + boa → *anachorète* ✓ — Boa -> anaconda -> [ana]; ermite = anachorète.

**Mot 2 : jeûne** (trouvé à la brique 1, mise 2) — piste : festin + carême

- festin → *jeûne* ✓ — Contraire de festin, vie d'anachorète.

**Mot 3 : abstinence** (trouvé à la brique 2, mise 2) — piste : continence + manquant

- continence → *chasteté* ✗ — Continence = chasteté de l'ascète.
- continence + manquant → *abstinence* ✓ — Manquant -> absent [abs]; continence = abstinence.

**Mot 4 : discipline** (non trouvé, mise 2) — piste : rigueur + fouet

- rigueur → *austérité* ✗ — Rigueur de l'ascète.
- rigueur + fouet → *mortification* ✗ — Rigueur, fouet: mortification de l'ascète; austérité refusée.

**Mot 5 : purification** (trouvé à la brique 1, mise 3) — piste : ablutions + encens + netteté

- ablutions → *purification* ✓ — Ablutions = purification.

**Solution : l'ascèse** — texte découvert : « L'anachorète se prive de tout : jeûne, abstinence et veilles ; par cette ____, il cherche la purification de l'âme. »

- *l'ascèse* ✓ — Privations (jeûne, abstinence) pour purifier l'âme: l'ascèse, désert intérieur.

### e-326 : « La lanterne de Diogène » → le cynisme

**Mot 1 : tonneau** (trouvé à la brique 1, mise 2) — piste : fût + vin

- fût → *tonneau* ✓ — Le fût de Diogène est un tonneau.

**Mot 2 : conventions** (trouvé à la brique 2, mise 3) — piste : usages + Genève + invité

- usages → *coutumes* ✗ — Usages = coutumes, que Diogène rejetait.
- usages + Genève → *conventions* ✓ — Usages = conventions, Convention de Genève.

**Mot 3 : argent** (trouvé à la brique 1, mise 2) — piste : fric + Harpagon

- fric → *argent* ✓ — Fric = argent, méprisé par Diogène.

**Mot 4 : impudence** (trouvé à la brique 1, mise 2) — piste : effronterie + taxe

- effronterie → *impudence* ✓ — Effronterie = impudence, cynisme.

**Mot 5 : notables** (trouvé à la brique 2, mise 2) — piste : dignitaires + bourgeois

- dignitaires → *rois* ✗ — Dignitaires, Alexandre le roi.
- dignitaires + bourgeois → *notables* ✓ — Dignitaires, bourgeois = notables; rois refusé.

**Solution : le cynisme** — texte découvert : « Le philosophe vivait dans un tonneau ; il méprisait les conventions et l'argent ; son impudence provocante choquait les notables d'Athènes : quelle est sa doctrine ? »

- *le cynisme* ✓ — Doctrine de Diogène.

### e-329 : « Bernin et Borromini » → le baroque

**Mot 1 : profusion** (trouvé à la brique 1, mise 2) — piste : abondance + élève

- abondance → *profusion* ✓ — Abondance, style baroque exubérant.

**Mot 2 : volutes** (trouvé à la brique 2, mise 2) — piste : spirales + fumée

- spirales → *colonnes* ✗ — Colonnes torses en spirales du baroque.
- spirales + fumée → *volutes* ✓ — Spirales de fumée = volutes.

**Mot 3 : torses** (trouvé à la brique 2, mise 2) — piste : tordues + raison

- tordues → *torsades* ✗ — Tordues, comme les colonnes torses baroques.
- tordues + raison → *torses* ✓ — Raison -> tort [tɔʁ]; tordues = torses.

**Mot 4 : trompe-l'œil** (trouvé à la brique 1, mise 2) — piste : illusion + fresque

- illusion → *trompe-l'œil* ✓ — Illusion baroque: le trompe-l'œil.

**Mot 5 : ostentation** (trouvé à la brique 1, mise 2) — piste : exhibition + squelette

- exhibition → *ostentation* ✓ — Exhibition = ostentation baroque.

**Solution : le baroque** — texte découvert : « Cet art de la profusion aime les volutes et les colonnes torses ; il cultive le trompe-l'œil et le goût de l'ostentation. »

- *le baroque* ✓ — Art de Bernin et Borromini.

### e-331 : « Brebis égarées » → l'hérésie

**Mot 1 : dogme** (trouvé à la brique 1, mise 2) — piste : doctrine + Église

- doctrine → *dogme* ✓ — Doctrine religieuse, hérésie.

**Mot 2 : excommunication** (trouvé à la brique 2, mise 3) — piste : anathème + pape + divorcé

- anathème → *hérésie* ✗ — Anathème frappe l'hérésie, brebis égarées.
- anathème + pape → *excommunication* ✓ — Anathème prononcé par le pape.

**Mot 3 : inquisition** (trouvé à la brique 1, mise 2) — piste : Torquemada + tribunal

- Torquemada → *inquisition* ✓ — Torquemada, grand inquisiteur; hérétiques.

**Mot 4 : dissidents** (trouvé à la brique 1, mise 3) — piste : opposants + goulag + neuf

- opposants → *dissidents* ✓ — Opposants = dissidents.

**Mot 5 : bûcher** (trouvé à la brique 1, mise 2) — piste : autodafé + fagots

- autodafé → *bûcher* ✓ — Autodafé, bûcher.

**Solution : l'hérésie** — texte découvert : « S'écarter du dogme, c'est risquer l'excommunication ; l'inquisition traquait ces dissidents et les livrait au bûcher. »

- *l'hérésie* ✓ — Écart du dogme, traqué par l'inquisition.

### e-335 : « Querelle des images » → un iconoclaste

**Mot 1 : empereur** (trouvé à la brique 1, mise 2) — piste : césar + Napoléon

- césar → *empereur* ✓ — César = empereur; querelle des images sous les empereurs byzantins.

**Mot 2 : icônes** (trouvé à la brique 1, mise 2) — piste : images + orthodoxe

- images → *icônes* ✓ — Images sacrées = icônes.

**Mot 3 : frondeur** (trouvé à la brique 2, mise 3) — piste : contestataire + Mazarin + limite

- contestataire → *iconoclaste* ✗ — Contestataire des images.
- contestataire + Mazarin → *frondeur* ✓ — Contestataire; Mazarin évoque la Fronde.

**Mot 4 : bousculer** (trouvé à la brique 2, mise 2) — piste : secouer + habitudes

- secouer → *ébranler* ✗ — Secouer = ébranler.
- secouer + habitudes → *bousculer* ✓ — Secouer les habitudes = bousculer.

**Mot 5 : dogmes** (non trouvé, mise 2) — piste : principes + Église

- principes → *valeurs* ✗ — Principes = valeurs, remises en cause.
- principes + Église → *doctrine* ✗ — Principes de l'Église = doctrine; valeurs refusé.

**Solution : un iconoclaste** — texte découvert : « À Byzance, l'empereur faisait briser les icônes ; aujourd'hui, l'esprit frondeur aime bousculer les ____ établis. »

- *l'iconoclasme* ✓ — Briser les images, bousculer les idées reçues.

### e-339 : « Héraclès au marais » → l'hydre

**Mot 1 : monstre** (trouvé à la brique 1, mise 2) — piste : créature + Godzilla

- créature → *monstre* ✓ — Créature affrontée par Héraclès: l'hydre de Lerne.

**Mot 2 : multiples** (trouvé à la brique 2, mise 2) — piste : nombreuses + choix

- nombreuses → *têtes* ✗ — L'hydre aux nombreuses têtes.
- nombreuses + choix → *multiples* ✓ — Nombreuses, choix multiples.

**Mot 3 : décapitation** (trouvé à la brique 1, mise 3) — piste : décollation + guillotine + dizaine

- décollation → *décapitation* ✓ — Décollation des têtes de l'hydre.

**Mot 4 : cautériser** (trouvé à la brique 1, mise 3) — piste : brûler + brasier + falaise

- brûler → *cautériser* ✓ — Brûler les plaies de l'hydre.

**Mot 5 : bout** (trouvé à la brique 1, mise 2) — piste : extrémité + chandelle

- extrémité → *bout* ✓ — Extrémité = bout.

**Solution : l'hydre** — texte découvert : « Ce monstre aux têtes multiples renaissait à chaque décapitation ; Héraclès dut cautériser les plaies pour en venir à bout. »

- *l'hydre* ✓ — Monstre aux têtes qui repoussent.

### e-341 : « Coup de dés » → le hasard

**Mot 1 : destin** (trouvé à la brique 2, mise 2) — piste : sort + Parques

- sort → *hasard* ✗ — Sort ~ hasard, coup de dés.
- sort + Parques → *destin* ✓ — Sort, Parques: le destin.

**Mot 2 : chance** (trouvé à la brique 1, mise 2) — piste : veine + trèfle

- veine → *chance* ✓ — Veine = chance.

**Mot 3 : fortune** (trouvé à la brique 1, mise 2) — piste : aubaine + roue

- aubaine → *fortune* ✓ — Aubaine = bonne fortune.

**Mot 4 : étoile** (trouvé à la brique 1, mise 2) — piste : astre + berger

- astre → *étoile* ✓ — Astre, bonne étoile.

**Mot 5 : poisse** (trouvé à la brique 2, mise 2) — piste : malchance + sardine

- malchance → *guigne* ✗ — Malchance = guigne.
- malchance + sardine → *poisse* ✓ — Sardine -> poisson [pwa]; malchance = poisse.

**Solution : le hasard** — texte découvert : « Ni destin ni calcul : seule la chance décide ; la fortune sourit aux audacieux ; le joueur invoque sa bonne étoile et redoute la poisse. »

- *le hasard* ✓ — Coup de dés.

### e-403 : « Pôle Nord de la cuisine » → le réfrigérateur

**Mot 1 : armoire** (trouvé à la brique 2, mise 3) — piste : placard + normande + fusil

- placard → *frigo* ✗ — Placard de cuisine froid: le frigo.
- placard + normande → *armoire* ✓ — Placard, armoire normande.

**Mot 2 : frais** (trouvé à la brique 1, mise 2) — piste : frisquet + sœur

- frisquet → *frais* ✓ — Frisquet = frais.

**Mot 3 : beurre** (trouvé à la brique 1, mise 2) — piste : margarine + courage

- margarine → *beurre* ✓ — Margarine, substitut du beurre, produit frais.

**Mot 4 : yaourts** (trouvé à la brique 1, mise 2) — piste : Danone + long

- Danone → *yaourt* ✓ — Danone, produit frais.

**Mot 5 : jambon** (trouvé à la brique 2, mise 2) — piste : saucisson + mauvais

- saucisson → *charcuterie* ✗ — Saucisson, produit frais.
- saucisson + mauvais → *jambon* ✓ — Mauvais -> bon; saucisson = jambon (finit par bon).

**Solution : le réfrigérateur** — texte découvert : « Dans la cuisine, cette grande armoire blanche garde au frais le beurre, les yaourts et le jambon. »

- *le réfrigérateur* ✓ — Armoire blanche qui garde au frais.

### e-428 : « Tchou-tchou ! » → le train

**Mot 1 : quai** (trouvé à la brique 1, mise 2) — piste : embarcadère + Montréal

- embarcadère → *quai* ✓ — Embarcadère = quai, lié au train.

**Mot 2 : voie** (trouvé à la brique 1, mise 3) — piste : chemin + ferrée + entendre

- chemin → *voie* ✓ — Chemin = voie, voie ferrée.

**Mot 3 : wagon** (trouvé à la brique 1, mise 3) — piste : voiture + compartiment + taureau

- voiture → *wagon* ✓ — Voiture de train = wagon.

**Mot 4 : contrôleur** (trouvé à la brique 1, mise 3) — piste : inspecteur + amende + pour

- inspecteur → *contrôleur* ✓ — Inspecteur dans le train = contrôleur.

**Mot 5 : billets** (trouvé à la brique 1, mise 2) — piste : tickets + boules

- tickets → *billets* ✓ — Tickets = billets.

**Solution : le train** — texte découvert : « Sur le quai, on attend en regardant l'horloge ; il arrive sur la voie ; on monte dans un wagon ; le contrôleur vérifie les billets. »

- *la gare* ✗ — Quai, voie, wagon, billets: la gare.
- *le train* ✓ — Quai, voie, wagon, billets; la gare refusée.

### e-430 : « Hotte sur le dos » → le père Noël

**Mot 1 : traîneau** (trouvé à la brique 1, mise 3) — piste : luge + chiens + vos

- luge → *traîneau* ✓ — Luge ~ traîneau, hotte du Père Noël.

**Mot 2 : rennes** (trouvé à la brique 1, mise 2) — piste : cervidés + roi

- cervidés → *rennes* ✓ — Cervidés tirant le traîneau.

**Mot 3 : cheminée** (trouvé à la brique 1, mise 3) — piste : âtre + ramoneur + cravate

- âtre → *cheminée* ✓ — Âtre, hotte, Père Noël descend la cheminée.

**Mot 4 : cadeaux** (trouvé à la brique 1, mise 2) — piste : présents + aîné

- présents → *cadeaux* ✓ — Présents = cadeaux du Père Noël.

**Mot 5 : sapin** (trouvé à la brique 1, mise 3) — piste : conifère + guirlande + vin

- conifère → *sapin* ✓ — Conifère de Noël.

**Solution : le père Noël** — texte découvert : « Dans son traîneau tiré par des rennes, il descend par la cheminée et dépose les cadeaux au pied du sapin. »

- *le Père Noël* ✓ — Traîneau, rennes, cheminée, cadeaux.

### e-435 : « Petite reine » → la bicyclette

**Mot 1 : selle** (trouvé à la brique 1, mise 2) — piste : étrier + poivre

- étrier → *selle* ✓ — L'étrier tient à la selle; petite reine = vélo.

**Mot 2 : guidon** (trouvé à la brique 1, mise 2) — piste : volant + houx

- volant → *guidon* ✓ — Volant de vélo = guidon.

**Mot 3 : pédales** (trouvé à la brique 1, mise 2) — piste : accélérateur + mémé

- accélérateur → *pédale* ✓ — Accélérateur de voiture = pédale, aussi vélo.

**Mot 4 : équilibre** (trouvé à la brique 1, mise 2) — piste : stabilité + occupé

- stabilité → *équilibre* ✓ — Stabilité = équilibre à vélo.

**Mot 5 : chambre** (trouvé à la brique 2, mise 3) — piste : pièce + pneu + Élysées

- pièce → *roue* ✗ — Pièce du vélo.
- pièce + pneu → *chambre* ✓ — Pneu, chambre à air; roue refusée.

**Solution : la bicyclette** — texte découvert : « On s'assoit sur la selle, on tient le guidon, on appuie sur les pédales ; il faut garder l'équilibre ; une crevaison, et il faut changer la chambre à air. »

- *le vélo* ✓ — Selle, guidon, pédales, chambre à air.

### e-437 : « Au-dessus des nuages » → l'avion

**Mot 1 : aéroport** (trouvé à la brique 1, mise 2) — piste : Roissy + cochon

- Roissy → *aéroport* ✓ — Roissy est un aéroport, avions au-dessus des nuages.

**Mot 2 : valises** (trouvé à la brique 1, mise 2) — piste : bagages + vient

- bagages → *valises* ✓ — Bagages = valises, aéroport.

**Mot 3 : pilote** (trouvé à la brique 1, mise 2) — piste : commandant + face

- commandant → *pilote* ✓ — Commandant de bord.

**Mot 4 : piste** (trouvé à la brique 3, mise 3) — piste : trace + atterrissage + mieux

- trace → *traînée* ✗ — Trace laissée par l'avion.
- trace + atterrissage → *sillage* ✗ — Trace laissée par l'avion, traînée refusée.
- trace + atterrissage + mieux → *piste* ✓ — Mieux -> pis [pi]; trace = piste, atterrissage.

**Mot 5 : hôtesse** (trouvé à la brique 1, mise 2) — piste : steward + bas

- steward → *hôtesse* ✓ — Steward, équivalent féminin.

**Solution : l'avion** — texte découvert : « Dans l'aéroport, on dépose ses valises ; le pilote attend l'autorisation de quitter la piste ; à bord, l'hôtesse sert un plateau-repas. »

- *l'avion* ✓ — Pilote, piste, hôtesse, au-dessus des nuages.

### e-503 : « Le cerf-volant de Benjamin » → le paratonnerre

**Mot 1 : faîte** (trouvé à la brique 2, mise 3) — piste : sommet + toit + anniversaire

- sommet → *pointe* ✗ — Sommet = pointe, paratonnerre de Franklin.
- sommet + toit → *faîte* ✓ — Sommet du toit = faîte.

**Mot 2 : tige** (trouvé à la brique 1, mise 2) — piste : tringle + fleur

- tringle → *tige* ✓ — Tringle = tige du paratonnerre.

**Mot 3 : foudre** (trouvé à la brique 1, mise 2) — piste : éclair + Zeus

- éclair → *foudre* ✓ — Éclair = foudre, Franklin.

**Mot 4 : câble** (trouvé à la brique 2, mise 2) — piste : filin + télévision

- filin → *ficelle* ✗ — Filin = ficelle du cerf-volant.
- filin + télévision → *câble* ✓ — Filin = câble, télévision par câble.

**Mot 5 : incendie** (trouvé à la brique 1, mise 3) — piste : brasier + pompiers + supérieur

- brasier → *incendie* ✓ — Brasier = incendie, foudre.

**Solution : le paratonnerre** — texte découvert : « Dressée sur le faîte de l'édifice, une tige métallique attire la foudre ; un câble la conduit jusqu'au sol, évitant l'incendie. »

- *le paratonnerre* ✓ — Tige qui attire la foudre.

### e-506 : « Peindre dans le frais » → la fresque

**Mot 1 : pigments** (trouvé à la brique 1, mise 2) — piste : colorants + ocre

- colorants → *pigments* ✓ — Colorants = pigments, fresque.

**Mot 2 : enduit** (trouvé à la brique 1, mise 2) — piste : crépi + plâtrier

- crépi → *enduit* ✓ — Crépi = enduit, fresque.

**Mot 3 : humide** (trouvé à la brique 1, mise 3) — piste : moite + éponge + audacieux

- moite → *humide* ✓ — Moite = humide, plâtre frais.

**Mot 4 : échafaudage** (trouvé à la brique 1, mise 3) — piste : grue + façade + foulard

- grue → *échafaudage* ✓ — Grue, chantier; échafaudage du fresquiste.

**Mot 5 : plafond** (trouvé à la brique 2, mise 2) — piste : plancher + lustre

- plancher → *planche* ✗ — Plancher d'échafaudage.
- plancher + lustre → *plafond* ✓ — Plancher/lustre, plafond de la fresque.

**Solution : la fresque** — texte découvert : « Les pigments sont posés sur un enduit encore humide ; juché sur un échafaudage, Michel-Ange couvrit ainsi le plafond de la Sixtine. »

- *la fresque* ✓ — Peinture sur enduit humide.

### e-509 : « Embouchure en éventail » → le delta

**Mot 1 : fleuve** (trouvé à la brique 1, mise 2) — piste : Loire + océan

- Loire → *fleuve* ✓ — Loire est un fleuve, à embouchure en delta.

**Mot 2 : bras** (trouvé à la brique 1, mise 2) — piste : jambe + biceps

- jambe → *bras* ✓ — Jambe/bras du fleuve dans le delta.

**Mot 3 : crues** (trouvé à la brique 1, mise 2) — piste : débordements + Nil

- débordements → *crues* ✓ — Débordements du fleuve = crues.

**Mot 4 : alluvions** (trouvé à la brique 1, mise 2) — piste : sédiments + briquet

- sédiments → *alluvions* ✓ — Sédiments déposés formant le delta.

**Mot 5 : triangle** (trouvé à la brique 1, mise 2) — piste : carré + Bermudes

- carré → *triangle* ✓ — Forme du delta.

**Solution : le delta** — texte découvert : « Le fleuve se divise en bras ; ses crues y déposent des alluvions ; celui du Nil a la forme d'un triangle. »

- *le delta* ✓ — Embouchure en triangle: delta.

### e-515 : « Le cheval de fer » → la locomotive

**Mot 1 : foyer** (trouvé à la brique 1, mise 2) — piste : âtre + famille

- âtre → *foyer* ✓ — Âtre = foyer, locomotive cheval de fer.

**Mot 2 : pelle** (trouvé à la brique 1, mise 2) — piste : bêche + seau

- bêche → *pelle* ✓ — Bêche = pelle, chauffeur de locomotive.

**Mot 3 : charbon** (trouvé à la brique 1, mise 2) — piste : houille + mine

- houille → *charbon* ✓ — Houille = charbon de la locomotive.

**Mot 4 : wagons** (trouvé à la brique 1, mise 2) — piste : voitures + bestiaux

- voitures → *wagons* ✓ — Voitures = wagons du train à vapeur.

**Mot 5 : rails** (trouvé à la brique 1, mise 3) — piste : traverses + ballast + ironiser

- traverses → *rails* ✓ — Traverses de la voie ferrée.

**Solution : la locomotive** — texte découvert : « Son foyer chauffe l'eau ; à la pelle, on y jette le charbon ; elle tire les wagons sur les rails. »

- *la locomotive* ✓ — Foyer, charbon, wagons.

### e-520 : « La Chevauchée fantastique » → le western

**Mot 1 : diligence** (trouvé à la brique 1, mise 2) — piste : zèle + attelage

- zèle → *diligence* ✓ — Zèle = diligence, La Chevauchée fantastique (Stagecoach).

**Mot 2 : shérif** (trouvé à la brique 1, mise 2) — piste : marshal + étoile

- marshal → *shérif* ✓ — Marshal = shérif, western.

**Mot 3 : flèches** (trouvé à la brique 1, mise 2) — piste : arc + Cupidon

- arc → *flèche* ✓ — Arc et flèche des Indiens du western.

**Mot 4 : duel** (trouvé à la brique 1, mise 2) — piste : affrontement + témoins

- affrontement → *duel* ✓ — Affrontement = duel de western.

**Mot 5 : revolver** (trouvé à la brique 2, mise 2) — piste : pistolet + barillet

- pistolet → *colt* ✗ — Pistolet du western.
- pistolet + barillet → *revolver* ✓ — Pistolet à barillet = revolver.

**Solution : le western** — texte découvert : « Une diligence attaquée, un shérif à l'étoile, des flèches venues des collines, un duel au soleil couchant, un revolver qu'on dégaine : John Ford en a fait un art. »

- *le western* ✓ — Genre de John Ford.

### e-530 : « Un plat qui se mange froid » → la vengeance

**Mot 1 : affront** (trouvé à la brique 1, mise 2) — piste : outrage + laver

- outrage → *affront* ✓ — Outrage = affront, vengeance se mange froide.

**Mot 2 : ressentiment** (trouvé à la brique 1, mise 2) — piste : rancœur + similitude

- rancœur → *ressentiment* ✓ — Rancœur, suite à l'affront, vengeance.

**Mot 3 : représailles** (trouvé à la brique 1, mise 3) — piste : rétorsions + guerre + déjeuner

- rétorsions → *représailles* ✓ — Rétorsions = représailles, vengeance.

**Mot 4 : implacable** (trouvé à la brique 1, mise 3) — piste : inexorable + ennemi + armoire

- inexorable → *implacable* ✓ — Inexorable = implacable, vengeance.

**Mot 5 : châtiment** (trouvé à la brique 1, mise 3) — piste : punition + crime + félin

- punition → *châtiment* ✓ — Punition = châtiment.

**Solution : la vengeance** — texte découvert : « Trahi, il ne pardonne pas l'affront ; son ressentiment grandit au château d'If ; Monte-Cristo prépare ses représailles avec une froideur implacable : le châtiment des traîtres sera exemplaire. »

- *la vengeance* ✓ — Monte-Cristo, plat qui se mange froid.

### e-533 : « Salle des pas perdus » → le tribunal

**Mot 1 : prévenu** (trouvé à la brique 1, mise 2) — piste : accusé + prairie

- accusé → *prévenu* ✓ — Accusé = prévenu, tribunal.

**Mot 2 : greffier** (trouvé à la brique 1, mise 3) — piste : clerc + audience + Athènes

- clerc → *greffier* ✓ — Clerc de tribunal.

**Mot 3 : réquisitoire** (non trouvé, mise 2) — piste : plaidoirie + procureur

- plaidoirie → *avocat* ✗ — Plaidoirie de l'avocat.
- plaidoirie + procureur → *défense* ✗ — Plaidoirie et contraire du procureur: la défense.

**Mot 4 : jurés** (non trouvé, mise 3) — piste : assesseurs + délibération + pantalon

- assesseurs → *juges* ✗ — Assesseurs = juges.
- assesseurs + délibération → *jury* ✗ — Assesseurs, délibération = jury.
- assesseurs + délibération + pantalon → *cour* ✗ — Pantalon -> court [kuʁ]; assesseurs de la cour d'assises.

**Mot 5 : verdict** (trouvé à la brique 1, mise 2) — piste : sentence + rouge

- sentence → *verdict* ✓ — Sentence = verdict.

**Solution : le tribunal** — texte découvert : « Le prévenu comparaît ; le greffier consigne les débats ; le procureur prononce son ____ ; les ____ se retirent avant le verdict. »

- *le tribunal* ✓ — Prévenu, greffier, procureur, verdict: salle de justice.

### e-536 : « Je sens la chair fraîche » → l'ogre

**Mot 1 : bottes** (trouvé à la brique 1, mise 2) — piste : cuissardes + éperons

- cuissardes → *bottes* ✓ — Cuissardes = bottes, bottes de l'ogre.

**Mot 2 : colosse** (trouvé à la brique 2, mise 2) — piste : géant + Rhodes

- géant → *ogre* ✗ — Géant qui sent la chair fraîche.
- géant + Rhodes → *colosse* ✓ — Géant de Rhodes = colosse.

**Mot 3 : dévorer** (trouvé à la brique 1, mise 2) — piste : engloutir + livres

- engloutir → *dévorer* ✓ — Engloutir = dévorer, ogre.

**Mot 4 : couronnes** (trouvé à la brique 1, mise 2) — piste : diadèmes + rois

- diadèmes → *couronnes* ✓ — Diadèmes = couronnes du géant, ogre des contes.

**Mot 5 : cailloux** (trouvé à la brique 2, mise 2) — piste : pierres + Poucet

- pierres → *bijoux* ✗ — Couronnes, pierres précieuses.
- pierres + Poucet → *cailloux* ✓ — Poucet sème des cailloux, pierres.

**Solution : l'ogre** — texte découvert : « Chaussé de bottes de sept lieues, ce colosse rêve de dévorer sept frères ; il égorge ses filles, trompé par leurs couronnes, échangées par le petit dernier, celui des cailloux. »

- *l'ogre* ✓ — Bottes de sept lieues, dévore, Petit Poucet.

### e-541 : « Le comte des Carpates » → le vampire

**Mot 1 : crocs** (trouvé à la brique 1, mise 2) — piste : canines + loup

- canines → *crocs* ✓ — Canines = crocs, Dracula.

**Mot 2 : cercueil** (trouvé à la brique 1, mise 2) — piste : sarcophage + croque-mort

- sarcophage → *cercueil* ✓ — Sarcophage de Dracula.

**Mot 3 : ail** (trouvé à la brique 1, mise 2) — piste : échalote + gousse

- échalote → *ail* ✓ — Échalote voisine l'ail, qui repousse les vampires.

**Mot 4 : aube** (trouvé à la brique 2, mise 2) — piste : aurore + communiant

- aurore → *soleil* ✗ — Aurore, la lumière qui tue le vampire.
- aurore + communiant → *aube* ✓ — Aurore = aube, aube de communiant, tue le vampire.

**Mot 5 : pieu** (trouvé à la brique 1, mise 2) — piste : piquet + lit

- piquet → *pieu* ✓ — Piquet = pieu, qui tue le vampire.

**Solution : le vampire** — texte découvert : « Il plante ses crocs dans les cous, dort le jour dans un cercueil, fuit l'ail et redoute l'aube ; un pieu dans le cœur l'achève. »

- *le vampire* ✓ — Crocs, cercueil, ail, aube, pieu.

### np-002 : Écrivains français

**Nom 1 : Victor Hugo** (trouvé à la brique 1) — briques : Cosette + Gavroche + défaite

- Cosette → *Victor Hugo* ✓ — Cosette est dans Les Misérables de Hugo.

**Nom 2 : Molière** (trouvé à la brique 1) — briques : Tartuffe + Harpagon + demain

- Tartuffe → *Molière* ✓ — Tartuffe est de Molière.

**Nom 3 : Émile Zola** (trouvé à la brique 1) — briques : Germinal + Rougon + ici

- Germinal → *Zola* ✗ — Germinal.
- Germinal (« Complétez ») → *Émile Zola* ✓ — Complétez: nom complet de Zola.

**Nom 4 : Jules Verne** (trouvé à la brique 1) — briques : Nautilus + Nemo + rouge

- Nautilus → *Jules Verne* ✓ — Nautilus, Vingt mille lieues.

### np-103 : Villes de France

**Nom 1 : Strasbourg** (trouvé à la brique 1) — briques : Alsace + cathédrale + paillettes

- Alsace → *Strasbourg* ✓ — Ville principale d'Alsace.

**Nom 2 : Marseille** (trouvé à la brique 1) — briques : calanques + Canebière + Vénus

- calanques → *Marseille* ✓ — Calanques.

**Nom 3 : Lille** (trouvé à la brique 1) — briques : braderie + beffroi + elle

- braderie → *Lille* ✓ — Braderie de Lille.

**Nom 4 : Bordeaux** (trouvé à la brique 1) — briques : vin + Garonne + ventre

- vin → *Bordeaux* ✓ — Vin.

### np-204 : Écrivains russes

**Nom 1 : Tolstoï** (trouvé à la brique 1) — briques : Karénine + Natacha + Iasnaïa

- Karénine → *Tolstoï* ✓ — Anna Karénine.

**Nom 2 : Dostoïevski** (trouvé à la brique 1) — briques : Raskolnikov + Karamazov + luge

- Raskolnikov → *Dostoïevski* ✓ — Raskolnikov, Crime et Châtiment.

**Nom 3 : Tchekhov** (trouvé à la brique 1) — briques : Cerisaie + mouette + Taganrog

- Cerisaie → *Tchekhov* ✓ — La Cerisaie.

**Nom 4 : Pouchkine** (trouvé à la brique 1) — briques : Onéguine + duel + Tsarskoïe

- Onéguine → *Pouchkine* ✓ — Eugène Onéguine.

### np-205 : Savants de l'Antiquité

**Nom 1 : Archimède** (trouvé à la brique 1) — briques : eurêka + Syracuse + Noé

- eurêka → *Archimède* ✓ — Eurêka d'Archimède.

**Nom 2 : Euclide** (trouvé à la brique 1) — briques : géométrie + Alexandrie + elles

- géométrie → *Euclide* ✓ — Géométrie.

**Nom 3 : Pythagore** (trouvé à la brique 1) — briques : théorème + hypoténuse + Samos

- théorème → *Pythagore* ✓ — Théorème de Pythagore.

**Nom 4 : Hippocrate** (trouvé à la brique 1) — briques : serment + médecine + sincère

- serment → *Hippocrate* ✓ — Serment d'Hippocrate.

### np-307 : Écrivains des Lumières

**Nom 1 : Diderot** (trouvé à la brique 1) — briques : Encyclopédie + Langres + fataliste

- Encyclopédie → *Diderot* ✓ — Directeur de l'Encyclopédie.

**Nom 2 : Montesquieu** (trouvé à la brique 1) — briques : Persanes + Brède + descend

- Persanes → *Montesquieu* ✓ — Lettres persanes.

**Nom 3 : Marivaux** (trouvé à la brique 1) — briques : badinage + Arlequin + femme

- badinage → *Marivaux* ✓ — Marivaudage, badinage.

**Nom 4 : Beaumarchais** (trouvé à la brique 1) — briques : Figaro + Barbier + laid

- Figaro → *Beaumarchais* ✓ — Le Mariage de Figaro.

### np-316 : Empereurs romains

**Nom 1 : Hadrien** (trouvé à la brique 1) — briques : mur + villa + tout

- mur → *Hadrien* ✓ — Mur d'Hadrien.

**Nom 2 : Caligula** (trouvé à la brique 1) — briques : cheval + consul + Camus

- cheval → *Caligula* ✓ — Son cheval Incitatus consul.

**Nom 3 : Néron** (trouvé à la brique 1) — briques : incendie + lyre + carré

- incendie → *Néron* ✓ — Incendie de Rome.

**Nom 4 : Marc Aurèle** (trouvé à la brique 1) — briques : Pensées + stoïcien + argent

- Pensées → *Marc Aurèle* ✓ — Pensées pour moi-même.

### np-322 : Personnages de Shakespeare

**Nom 1 : Hamlet** (trouvé à la brique 1) — briques : Elseneur + crâne + corps

- Elseneur → *Hamlet* ✓ — Elseneur, château d'Hamlet.

**Nom 2 : Othello** (trouvé à la brique 1) — briques : Desdémone + Iago + restaurant

- Desdémone → *Othello* ✓ — Desdémone est l'épouse d'Othello.

**Nom 3 : Falstaff** (trouvé à la brique 1) — briques : Windsor + ivrogne + Verdi

- Windsor → *Falstaff* ✓ — Les Joyeuses Commères de Windsor.

**Nom 4 : Prospero** (trouvé à la brique 1) — briques : tempête + Ariel + Caliban

- tempête → *Prospero* ✓ — La Tempête.

### np-327 : Grands de la chanson

**Nom 1 : Brassens** (trouvé à la brique 1) — briques : Sète + pipe + jambe

- Sète → *Georges Brassens* ✓ — Né à Sète, chanté Supplique pour être enterré à la plage de Sète.

**Nom 2 : Brel** (trouvé à la brique 1) — briques : Amsterdam + Marquises + quitte

- Amsterdam → *Jacques Brel* ✓ — Chanson Amsterdam.

**Nom 3 : Ferré** (trouvé à la brique 1) — briques : Monaco + anarchie + do

- Monaco → *Léo Ferré* ✓ — Monaco, où il a vécu.

**Nom 4 : Barbara** (trouvé à la brique 1) — briques : aigle + Nantes + moustache

- aigle → *Barbara* ✓ — L'Aigle noir.

### np-328 : Peintres espagnols

**Nom 1 : Goya** (trouvé à la brique 1) — briques : Majas + désastres + crayon

- Majas → *Goya* ✓ — Les Majas de Goya.

**Nom 2 : Vélasquez** (trouvé à la brique 1) — briques : Ménines + infante + moto

- Ménines → *Vélasquez* ✓ — Les Ménines.

**Nom 3 : Zurbarán** (trouvé à la brique 1) — briques : moines + Séville + Estrémadure

- moines → *Zurbarán* ✓ — Peintre de moines.

**Nom 4 : Le Greco** (trouvé à la brique 1) — briques : Tolède + Crète + Orgaz

- Tolède → *Le Greco* ✓ — Peintre de Tolède.

### np-331 : Philosophes allemands

**Nom 1 : Hegel** (trouvé à la brique 1) — briques : dialectique + Iéna + esprit

- dialectique → *Hegel* ✓ — Dialectique hégélienne.

**Nom 2 : Nietzsche** (trouvé à la brique 1) — briques : Zarathoustra + surhomme + moustache

- Zarathoustra → *Nietzsche* ✓ — Ainsi parlait Zarathoustra.

**Nom 3 : Schopenhauer** (trouvé à la brique 1) — briques : volonté + pessimisme + bière

- volonté → *Schopenhauer* ✓ — Le monde comme volonté.

**Nom 4 : Heidegger** (trouvé à la brique 1) — briques : Dasein + Forêt-Noire + ouille

- Dasein → *Heidegger* ✓ — Dasein.

### np-338 : Maréchaux d'Empire

**Nom 1 : Ney** (trouvé à la brique 1) — briques : braves + Moskova + fusillé

- braves → *Ney* ✓ — Le brave des braves.

**Nom 2 : Murat** (trouvé à la brique 1) — briques : cavalerie + Naples + framboise

- cavalerie → *Murat* ✓ — Chef de cavalerie.

**Nom 3 : Davout** (trouvé à la brique 1) — briques : Auerstaedt + Eckmühl + tu

- Auerstaedt → *Davout* ✓ — Victoire d'Auerstaedt.

**Nom 4 : Lannes** (trouvé à la brique 1) — briques : Montebello + Essling + ici

- Montebello → *Lannes* ✓ — Duc de Montebello.

### np-345 : Dieux nordiques

**Nom 1 : Odin** (trouvé à la brique 1) — briques : corbeaux + Walhalla + Sleipnir

- corbeaux → *Odin* ✓ — Corbeaux Hugin et Munin d'Odin.

**Nom 2 : Thor** (trouvé à la brique 1) — briques : marteau + tonnerre + raison

- marteau → *Thor* ✓ — Marteau Mjöllnir.

**Nom 3 : Loki** (trouvé à la brique 1) — briques : ruse + Baldr + wagon

- ruse → *Loki* ✓ — Dieu de la ruse.

**Nom 4 : Freyja** (trouvé à la brique 1) — briques : chats + amour + sœur

- chats → *Freyja* ✓ — Char tiré par des chats.

### np-349 : Héros de bande dessinée réaliste

**Nom 1 : Blake** (trouvé à la brique 1) — briques : Mortimer + espadon + Jacobs

- Mortimer → *Blake* ✓ — Blake et Mortimer.

**Nom 2 : Corto Maltese** (trouvé à la brique 1) — briques : Pratt + Venise + âme

- Pratt → *Corto Maltese* ✓ — Hugo Pratt.

**Nom 3 : Valérian** (trouvé à la brique 1) — briques : Laureline + Mézières + montagne

- Laureline → *Valérian* ✓ — Valérian et Laureline.

**Nom 4 : Blueberry** (trouvé à la brique 1) — briques : Giraud + lieutenant + Ouest

- Giraud → *Blueberry* ✓ — Giraud, héros western.

### np-403 : Grandes villes du monde

**Nom 1 : New York** (trouvé à la brique 1) — briques : Manhattan + gratte-ciel + Big Apple

- Manhattan → *New York* ✓ — Manhattan est dans New York.

**Nom 2 : Londres** (trouvé à la brique 1) — briques : Tamise + Buckingham + court

- Tamise → *Londres* ✓ — Tamise.

**Nom 3 : Rio de Janeiro** (trouvé à la brique 1) — briques : Copacabana + Corcovado + pleure

- Copacabana → *Rio de Janeiro* ✓ — Plage de Copacabana.

**Nom 4 : Venise** (trouvé à la brique 1) — briques : gondoles + canaux + aller

- gondoles → *Venise* ✓ — Gondoles.

### np-420 : Champions de tennis

**Nom 1 : Roger Federer** (trouvé à la brique 1) — briques : Bâle + Wimbledon + sorcière

- Bâle → *Federer* ✗ — Roger Federer, de Bâle.
- Bâle (« Complétez ») → *Roger Federer* ✓ — Complétez: Federer refusé, nom complet demandé.

**Nom 2 : Rafael Nadal** (trouvé à la brique 1) — briques : Majorque + terre battue + Roland-Garros

- Majorque → *Rafael Nadal* ✓ — Majorquin.

**Nom 3 : Yannick Noah** (trouvé à la brique 1) — briques : dreadlocks + Saga Africa + vos

- dreadlocks → *Yannick Noah* ✓ — Dreadlocks.

**Nom 4 : Serena Williams** (trouvé à la brique 1) — briques : Venus + Américaine + non

- Venus → *Serena Williams* ✓ — Venus évoque sa soeur Venus; le nom cherché est Serena.

### np-424 : Actrices françaises

**Nom 1 : Brigitte Bardot** (trouvé à la brique 1) — briques : BB + Saint-Tropez + comptoir

- BB → *Brigitte Bardot* ✓ — BB = Brigitte Bardot.

**Nom 2 : Catherine Deneuve** (trouvé à la brique 1) — briques : Parapluies + Cherbourg + vieille

- Parapluies → *Catherine Deneuve* ✓ — Les Parapluies de Cherbourg.

**Nom 3 : Audrey Tautou** (trouvé à la brique 1) — briques : Amélie Poulain + Coco + tard

- Amélie Poulain → *Audrey Tautou* ✓ — Rôle d'Amélie Poulain.

**Nom 4 : Marion Cotillard** (trouvé à la brique 1) — briques : Piaf + oscar + Taxi

- Piaf → *Marion Cotillard* ✓ — La Môme.

### np-432 : Marques gourmandes

**Nom 1 : Coca-Cola** (trouvé à la brique 2) — briques : soda + recette secrète + poule

- soda → *Orangina* ✗ — Soda, marque gourmande.
- soda + recette secrète → *Coca-Cola* ✓ — Soda à la recette secrète.

**Nom 2 : Nutella** (trouvé à la brique 1) — briques : pâte à tartiner + Ferrero + habillé

- pâte à tartiner → *Nutella* ✓ — Pâte à tartiner.

**Nom 3 : Haribo** (trouvé à la brique 1) — briques : bonbons + Tagada + Potter

- bonbons → *Haribo* ✓ — Bonbons.

**Nom 4 : Danone** (trouvé à la brique 1) — briques : yaourt + Danette + moine

- yaourt → *Danone* ✓ — Yaourt.

### np-434 : Outre-mer français

**Nom 1 : Martinique** (trouvé à la brique 1) — briques : Fort-de-France + Madinina + clou

- Fort-de-France → *Martinique* ✓ — Fort-de-France en est le chef-lieu.

**Nom 2 : La Réunion** (trouvé à la brique 1) — briques : piton de la Fournaise + océan Indien + Saint-Denis

- piton de la Fournaise → *La Réunion* ✓ — Piton de la Fournaise.

**Nom 3 : Tahiti** (trouvé à la brique 1) — briques : vahiné + Papeete + ma

- vahiné → *Tahiti* ✓ — Vahiné polynésienne.

**Nom 4 : Guyane** (trouvé à la brique 1) — briques : Kourou + fusée + Cayenne

- Kourou → *Guyane* ✓ — Kourou.

### np-437 : Mers et océans

**Nom 1 : Méditerranée** (trouvé à la brique 1) — briques : Grande Bleue + Corse + tes

- Grande Bleue → *Méditerranée* ✓ — Grande Bleue.

**Nom 2 : Pacifique** (trouvé à la brique 1) — briques : Hawaï + le plus grand + Polynésie

- Hawaï → *Pacifique* ✓ — Hawaï dans le Pacifique.

**Nom 3 : Manche** (trouvé à la brique 1) — briques : tunnel + Calais + pingouin

- tunnel → *Manche* ✓ — Tunnel sous la Manche.

**Nom 4 : Mer Morte** (trouvé à la brique 1) — briques : sel + Israël + vivante

- sel → *Mer Morte* ✓ — Sel.

### np-441 : Personnages de Star Wars

**Nom 1 : Dark Vador** (trouvé à la brique 1) — briques : masque + respiration + argent

- masque → *Dark Vador* ✓ — Personnage masqué.

**Nom 2 : Yoda** (trouvé à la brique 1) — briques : petit + oreilles pointues + maître Jedi

- petit → *Yoda* ✓ — Petit maître jedi.

**Nom 3 : Chewbacca** (trouvé à la brique 1) — briques : Wookiee + poils + Han Solo

- Wookiee → *Chewbacca* ✓ — Wookiee.

**Nom 4 : Luke Skywalker** (trouvé à la brique 1) — briques : sabre laser + Leia + Tatooine

- sabre laser → *Luke Skywalker* ✓ — Sabre laser.

### np-448 : Présidents de la République

**Nom 1 : Charles de Gaulle** (trouvé à la brique 1) — briques : croix de Lorraine + appel + tank

- croix de Lorraine → *Charles de Gaulle* ✓ — Croix de Lorraine.

**Nom 2 : Jacques Chirac** (trouvé à la brique 1) — briques : Corrèze + pommes + Bernadette

- Corrèze → *Jacques Chirac* ✓ — Élu de Corrèze.

**Nom 3 : François Mitterrand** (trouvé à la brique 1) — briques : rose + Mazarine + croûte

- rose → *François Mitterrand* ✓ — Rose du PS.

**Nom 4 : Emmanuel Macron** (trouvé à la brique 1) — briques : Brigitte + En marche + Amiens

- Brigitte → *Emmanuel Macron* ✓ — Épouse Brigitte.

### np-449 : Présidents américains

**Nom 1 : Abraham Lincoln** (trouvé à la brique 1) — briques : esclavage + Gettysburg + coton

- esclavage → *Abraham Lincoln* ✓ — Abolition de l'esclavage.

**Nom 2 : John F. Kennedy** (trouvé à la brique 1) — briques : Dallas + Jackie + Barbie

- Dallas → *John Kennedy* ✓ — Assassiné à Dallas.

**Nom 3 : George Washington** (trouvé à la brique 1) — briques : premier + dollar + kilo

- premier → *George Washington* ✓ — Premier président.

**Nom 4 : Barack Obama** (trouvé à la brique 1) — briques : Michelle + Hawaï + Yes we can

- Michelle → *Barack Obama* ✓ — Épouse Michelle.

### np-501 : Opéras de Verdi

**Nom 1 : Aïda** (trouvé à la brique 1) — briques : Égypte + Radamès + ouille

- Égypte → *Aïda* ✓ — Opéra de Verdi se passant en Égypte.

**Nom 2 : Rigoletto** (trouvé à la brique 1) — briques : bouffon + bossu + pleurer

- bouffon → *Rigoletto* ✓ — Bouffon, opéra de Verdi.

**Nom 3 : Nabucco** (trouvé à la brique 1) — briques : Babylone + Hébreux + chœur des esclaves

- Babylone → *Nabucco* ✓ — Babylone, Nabuchodonosor.

**Nom 4 : Le Trouvère** (trouvé à la brique 1) — briques : gitane + Azucena + perdre

- gitane → *Il Trovatore* ✓ — Gitane Azucena.

### np-505 : Fauves et cubistes

**Nom 1 : Matisse** (trouvé à la brique 1) — briques : odalisques + papiers découpés + échec

- odalisques → *Matisse* ✓ — Odalisques de Matisse.

**Nom 2 : Braque** (trouvé à la brique 1) — briques : Estaque + papiers collés + jambe

- Estaque → *Braque* ✓ — L'Estaque, cubisme.

**Nom 3 : Derain** (trouvé à la brique 1) — briques : Collioure + Chatou + Tamise

- Collioure → *Derain* ✓ — Collioure, fauvisme.

**Nom 4 : Fernand Léger** (trouvé à la brique 1) — briques : tubes + Constructeurs + lourd

- tubes → *Léger* ✗ — Fernand Léger, tubisme.
- tubes (« Complétez ») → *Fernand Léger* ✓ — Complétez: Léger, tubes.

### np-511 : Moralistes et fabulistes du Grand Siècle

**Nom 1 : La Fontaine** (trouvé à la brique 1) — briques : Château-Thierry + Fables + forme

- Château-Thierry → *La Fontaine* ✓ — Né à Château-Thierry.

**Nom 2 : La Bruyère** (trouvé à la brique 1) — briques : Théophraste + Les Caractères + net

- Théophraste → *La Bruyère* ✓ — Traducteur de Théophraste.

**Nom 3 : La Rochefoucauld** (trouvé à la brique 1) — briques : Fronde + amour-propre + Maximes

- Fronde → *La Rochefoucauld* ✓ — Moraliste frondeur.

**Nom 4 : Boileau** (trouvé à la brique 1) — briques : Lutrin + Art poétique + feu

- Lutrin → *Boileau* ✓ — Le Lutrin.

### np-524 : Héroïnes de la mythologie grecque

**Nom 1 : Pénélope** (trouvé à la brique 1) — briques : Ithaque + prétendants + tapisserie

- Ithaque → *Pénélope* ✓ — Épouse d'Ulysse à Ithaque.

**Nom 2 : Eurydice** (trouvé à la brique 1) — briques : serpent + Orphée + neuf

- serpent → *Eurydice* ✓ — Morte d'une morsure de serpent.

**Nom 3 : Pandore** (trouvé à la brique 1) — briques : Épiméthée + boîte + argent

- Épiméthée → *Pandore* ✓ — Épouse d'Épiméthée.

**Nom 4 : Hélène** (trouvé à la brique 1) — briques : Sparte + Pâris + mouton

- Sparte → *Hélène* ✓ — Hélène de Sparte.

### np-528 : Ministres de l'Ancien Régime

**Nom 1 : Mazarin** (trouvé à la brique 2) — briques : cardinal + Fronde + papa

- cardinal → *Richelieu* ✗ — Cardinal ministre.
- cardinal + Fronde → *Mazarin* ✓ — Cardinal de la Fronde, Richelieu refusé.

**Nom 2 : Colbert** (trouvé à la brique 1) — briques : manufactures + marine + Fouquet

- manufactures → *Colbert* ✓ — Manufactures royales.

**Nom 3 : Sully** (trouvé à la brique 1) — briques : Rosny + labourage + sel

- Rosny → *Sully* ✓ — Baron de Rosny.

**Nom 4 : Necker** (trouvé à la brique 1) — briques : Genève + Madame de Staël + Compte rendu au roi

- Genève → *Necker* ✓ — Banquier genevois, ministre.

### np-534 : Pionniers de l'aviation

**Nom 1 : Louis Blériot** (trouvé à la brique 1) — briques : monoplan + traversée de la Manche + épi

- monoplan → *Blériot* ✗ — Monoplan de la traversée de la Manche.
- monoplan (« Complétez ») → *Louis Blériot* ✓ — Complétez: nom complet de Blériot.

**Nom 2 : Saint-Exupéry** (trouvé à la brique 1) — briques : Courrier sud + Vol de nuit + Petit Prince

- Courrier sud → *Saint-Exupéry* ✓ — Courrier sud est son roman.

**Nom 3 : Jean Mermoz** (trouvé à la brique 1) — briques : Aéropostale + Croix-du-Sud + terre

- Aéropostale → *Jean Mermoz* ✓ — Aéropostale.

**Nom 4 : Roland Garros** (trouvé à la brique 1) — briques : Méditerranée + stade + train

- Méditerranée → *Roland Garros* ✓ — Première traversée de la Méditerranée.

### np-542 : Groupes de rock britanniques

**Nom 1 : Led Zeppelin** (trouvé à la brique 1) — briques : dirigeable + Stairway to Heaven + beau

- dirigeable → *Led Zeppelin* ✓ — Dirigeable, Zeppelin.

**Nom 2 : The Who** (trouvé à la brique 1) — briques : Townshend + guitares cassées + Tommy

- Townshend → *The Who* ✓ — Pete Townshend.

**Nom 3 : Pink Floyd** (trouvé à la brique 1) — briques : prisme + The Wall + Dark Side of the Moon

- prisme → *Pink Floyd* ✓ — Prisme de The Dark Side of the Moon.

**Nom 4 : Oasis** (trouvé à la brique 1) — briques : Manchester + Gallagher + désert

- Manchester → *Oasis* ✓ — Groupe de Manchester.

### np-549 : Villes ibériques

**Nom 1 : Séville** (trouvé à la brique 1) — briques : Andalousie + Guadalquivir + campagne

- Andalousie → *Séville* ✓ — Ville d'Andalousie.

**Nom 2 : Grenade** (trouvé à la brique 1) — briques : Boabdil + Albaicín + goupille

- Boabdil → *Grenade* ✓ — Dernier roi de Grenade.

**Nom 3 : Barcelone** (trouvé à la brique 1) — briques : Ramblas + Gaudí + Sagrada Família

- Ramblas → *Barcelone* ✓ — Les Ramblas.

**Nom 4 : Porto** (trouvé à la brique 1) — briques : Ribeira + Douro + fenêtre

- Ribeira → *Porto* ✓ — Ribeira.
