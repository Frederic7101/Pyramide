# Test à l'aveugle de Syno, joué comme en partie (niveau @tests-aveugle/echantillon-10-par-niveau.json)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-003 | facile | Compagnon des jours gris | ciel (1/2), bouclier (2/3), baleines (1/2), vent (1/2), train (2/3) | 6 | ✓ | 12 |
| e-006 | facile | Le dormeur | siècles (1/2), ~~feu~~, lave (1/2), ~~ville~~, cratère (1/3) | 0 | ✓ | 4 |
| e-007 | facile | Il passe chaque matin | tournée (1/3), ~~sacoche~~, lettres (2/2), boîte (1/2), vélo (1/2) | 0 | ✓ | 5 |
| e-008 | facile | Or liquide | ruche (1/3), abeilles (1/2), nectar (1/2), sucré (2/2), tranche (2/2) | 6 | ✓ | 12 |
| e-009 | facile | Septième art | salle (2/2), écran (1/2), réalisateur (1/3), scène (2/3), actrice (1/2) | 6 | ✓ | 12 |
| e-204 | moyen | Effacé, pas oublié | parchemin (2/2), moine (1/3), texte (1/2), rayons (1/2), écritures (1/3) | 7 | ✓ | 13 |
| e-304 | difficile | Faux dévot | masque (2/2), duplicité (2/3), ~~parangon~~, simagrées (1/3), crocodile (2/2) | 0 | ✗ (Le Tartuffe, Le bigot) | 4 |
| e-305 | difficile | Le pardon des grands | clémence (2/2), félon (2/3), magnanimité (1/3), rancœur (2/3), sanction (2/2) | 4 | ✗ (La clémence d'Auguste, La clémence, L'amnistie) | 9 |
| e-308 | difficile | Raisonnement trompeur | rigoureux (2/2), faille (1/2), prémisses (1/3), conclusion (2/2), piège (1/2) | 6 | ✓ | 12 |
| e-325 | difficile | Le désert intérieur | anachorète (3/3), jeûne (1/2), abstinence (2/2), ~~discipline~~, purification (1/3) | 0 | ✓ | 5 |
| e-326 | difficile | La lanterne de Diogène | tonneau (1/2), conventions (2/3), ~~argent~~, impudence (2/2), notables (2/2) | 0 | ✓ | 5 |
| e-329 | difficile | Bernin et Borromini | profusion (2/2), volutes (2/2), torses (1/2), trompe-l'œil (1/2), ostentation (1/2) | 6 | ✓ | 12 |
| e-331 | difficile | Brebis égarées | dogme (1/2), excommunication (1/3), inquisition (1/2), dissidents (2/3), bûcher (1/2) | 7 | ✓ | 13 |
| e-335 | difficile | Querelle des images | empereur (1/2), icônes (1/2), frondeur (3/3), bousculer (2/2), dogmes (1/2) | 5 | ✓ | 11 |
| e-339 | difficile | Héraclès au marais | monstre (2/2), multiples (2/2), décapitation (1/3), cautériser (1/3), bout (2/2) | 5 | ✓ | 11 |
| e-341 | difficile | Coup de dés | destin (2/2), chance (1/2), fortune (1/2), étoile (1/2), poisse (2/2) | 6 | ✓ | 12 |
| e-403 | facile | Pôle Nord de la cuisine | armoire (2/3), frais (2/2), beurre (1/2), yaourts (1/2), jambon (2/2) | 5 | ✓ | 11 |
| e-428 | facile | Tchou-tchou ! | quai (1/2), voie (1/3), wagon (1/3), contrôleur (1/3), billets (1/2) | 8 | ✓ | 14 |
| e-430 | facile | Hotte sur le dos | traîneau (1/3), rennes (1/2), cheminée (1/3), cadeaux (1/2), sapin (1/3) | 8 | ✓ | 14 |
| e-435 | facile | Petite reine | selle (2/2), guidon (1/2), ~~pédales~~, équilibre (1/2), ~~chambre~~ | 0 | ✓ | 4 |
| e-437 | facile | Au-dessus des nuages | aéroport (1/2), valises (2/2), pilote (1/2), piste (2/3), hôtesse (1/2) | 6 | ✓ | 12 |
| e-503 | moyen | Le cerf-volant de Benjamin | faîte (2/3), tige (2/2), foudre (2/2), câble (2/2), incendie (2/3) | 3 | ✓ | 9 |
| e-506 | moyen | Peindre dans le frais | pigments (1/2), enduit (1/2), humide (1/3), échafaudage (1/3), plafond (1/2) | 8 | ✓ | 14 |
| e-509 | moyen | Embouchure en éventail | ~~fleuve~~, bras (1/2), crues (1/2), alluvions (1/2), triangle (2/2) | 0 | ✓ | 5 |
| e-515 | moyen | Le cheval de fer | foyer (2/2), pelle (1/2), charbon (1/2), wagons (1/2), rails (1/3) | 7 | ✓ | 13 |
| e-520 | moyen | La Chevauchée fantastique | diligence (1/2), shérif (1/2), flèches (1/2), duel (1/2), revolver (2/2) | 7 | ✓ | 13 |
| e-530 | moyen | Un plat qui se mange froid | affront (1/2), ressentiment (1/2), représailles (1/3), implacable (1/3), châtiment (1/3) | 8 | ✓ | 14 |
| e-533 | moyen | Salle des pas perdus | prévenu (1/2), greffier (1/3), ~~réquisitoire~~, jurés (1/3), verdict (1/2) | 0 | ✓ | 5 |
| e-536 | moyen | Je sens la chair fraîche | bottes (1/2), colosse (2/2), dévorer (1/2), couronnes (1/2), cailloux (1/2) | 7 | ✓ | 13 |
| e-541 | moyen | Le comte des Carpates | crocs (1/2), cercueil (1/2), ail (1/2), aube (2/2), pieu (1/2) | 7 | ✓ | 13 |

Score moyen : 10.2 sur 30 énigme(s).

Mots trouvés : 92 à la brique 1, 46 à la brique 2, 2 à la brique 3, 10 non trouvés.

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
| np-434 | facile | Outre-mer français | Martinique (1), La Réunion (1), Tahiti (2), Guyane (1) | 4/4 |
| np-437 | facile | Mers et océans | Méditerranée (1), Pacifique (1), Manche (1), Mer Morte (1) | 4/4 |
| np-441 | facile | Personnages de Star Wars | Dark Vador (1), Yoda (1), Chewbacca (1), Luke Skywalker (1) | 4/4 |
| np-448 | facile | Présidents de la République | Charles de Gaulle (1), Jacques Chirac (1), François Mitterrand (1), Emmanuel Macron (1) | 4/4 |
| np-449 | facile | Présidents américains | Abraham Lincoln (1), John F. Kennedy (2), George Washington (1), Barack Obama (1) | 4/4 |
| np-501 | moyen | Opéras de Verdi | Aïda (1), Rigoletto (1), Nabucco (1), Le Trouvère (1) | 4/4 |
| np-505 | moyen | Fauves et cubistes | Matisse (1), Braque (1), Derain (1), Fernand Léger (1) | 4/4 |
| np-511 | moyen | Moralistes et fabulistes du Grand Siècle | La Fontaine (1), La Bruyère (1), La Rochefoucauld (2), Boileau (1) | 4/4 |
| np-524 | moyen | Héroïnes de la mythologie grecque | Pénélope (1), Eurydice (1), Pandore (1), Hélène (1) | 4/4 |
| np-528 | moyen | Ministres de l'Ancien Régime | Mazarin (1), Colbert (1), Sully (1), Necker (1) | 4/4 |
| np-534 | moyen | Pionniers de l'aviation | Louis Blériot (1), Saint-Exupéry (1), Jean Mermoz (1), Roland Garros (1) | 4/4 |
| np-542 | moyen | Groupes de rock britanniques | Led Zeppelin (1), The Who (1), Pink Floyd (1), Oasis (1) | 4/4 |
| np-549 | moyen | Villes ibériques | Séville (1), Grenade (1), Barcelone (1), Porto (1) | 4/4 |

Noms trouvés : 120 sur 120.

## Raisonnement de Syno

### e-003 : « Compagnon des jours gris » → un parapluie

**Mot 1 : ciel** (trouvé à la brique 1, mise 2) — piste : firmament + nuages

- firmament → *ciel* ✓ — Firmament est synonyme de ciel, et les jours gris évoquent le ciel.

**Mot 2 : bouclier** (trouvé à la brique 2, mise 3) — piste : écu + épée + bouteille

- écu → *parapluie* ✗ — Écu est un bouclier, une protection ; le compagnon des jours gris est le parapluie.
- écu + épée → *bouclier* ✓ — Écu et épée évoquent le bouclier, protection du compagnon des jours gris.

**Mot 3 : baleines** (trouvé à la brique 1, mise 2) — piste : cétacés + haut

- cétacés → *baleines* ✓ — Cétacés évoque les baleines du parapluie.

**Mot 4 : vent** (trouvé à la brique 1, mise 2) — piste : brise + acheter

- brise → *vent* ✓ — Brise est un vent léger, compagnon des jours gris.

**Mot 5 : train** (trouvé à la brique 2, mise 3) — piste : convoi + rails + accélérateur

- convoi → *cortège* ✗ — Convoi est synonyme de cortège, groupe qui accompagne.
- convoi + rails → *train* ✓ — Convoi et rails désignent le train ; le train-train, compagnon des jours gris.

**Solution : un parapluie** — texte découvert : « Je m'ouvre quand le ciel est menaçant ; je suis votre bouclier contre l'averse ; mes baleines plient par grand vent ; on m'oublie souvent dans le train. »

- *Le parapluie* ✓ — Bouclier contre l'averse, baleines, s'ouvre sous le ciel : le parapluie.

### e-006 : « Le dormeur » → un volcan

**Mot 1 : siècles** (trouvé à la brique 1, mise 2) — piste : époques + terre

- époques → *siècles* ✓ — Époques a pour synonyme pluriel siècles ; le dormeur qui dort des siècles.

**Mot 2 : feu** (non trouvé, mise 2) — piste : flamme + beaucoup

- flamme → *volcan* ✗ — Le dormeur peut être un volcan endormi, avec flamme et lave.
- flamme + beaucoup → *cendre* ✗ — Flamme appelle la cendre où dort le feu ; beaucoup évoque cent, qui sonne comme le début de cendre.

**Mot 3 : lave** (trouvé à la brique 1, mise 2) — piste : magma + ici

- magma → *lave* ✓ — Magma renvoie à lave, liée au dormeur volcanique.

**Mot 4 : ville** (non trouvé, mise 2) — piste : cité + mort

- cité → *Pompéi* ✗ — Cité endormie sous la lave : Pompéi.
- cité + mort → *nécropole* ✗ — Cité des morts : nécropole, où dorment les défunts.

**Mot 5 : cratère** (trouvé à la brique 1, mise 3) — piste : bouche + Lune + grenouille

- bouche → *cratère* ✓ — Bouche du volcan dormant : le cratère.

**Solution : un volcan** — texte découvert : « Je dors parfois pendant des siècles ; à mon réveil, je crache du ____ et de la lave ; j'ai jadis enseveli une ____ romaine ; mon cratère fume au sommet. »

- *Le volcan* ✓ — Dort des siècles, crache lave, cratère : le volcan.

### e-007 : « Il passe chaque matin » → le facteur

**Mot 1 : tournée** (trouvé à la brique 1, mise 3) — piste : virée + concerts + rien

- virée → *tournée* ✓ — Virée est synonyme de tournée, et le facteur passe chaque matin.

**Mot 2 : sacoche** (non trouvé, mise 3) — piste : besace + cartable + propre

- besace → *facteur* ✗ — Besace évoque la sacoche du facteur qui passe chaque matin.
- besace + cartable → *écolier* ✗ — Besace et cartable : l'écolier passe chaque matin.
- besace + cartable + propre → *salarié* ✗ — Propre évoque sale, qui sonne comme le début de salarié, qui part chaque matin avec sa besace.

**Mot 3 : lettres** (trouvé à la brique 2, mise 2) — piste : missives + beau

- missives → *courrier* ✗ — Missives est synonyme de courrier, qui passe chaque matin.
- missives + beau → *lettres* ✓ — Missives donne lettres ; beau est une incitation : contraire laid, début de lettres.

**Mot 4 : boîte** (trouvé à la brique 1, mise 2) — piste : coffret + manger

- coffret → *boîte* ✓ — Coffret est synonyme de boîte, comme la boîte aux lettres.

**Mot 5 : vélo** (trouvé à la brique 1, mise 2) — piste : bicyclette + mensonge

- bicyclette → *vélo* ✓ — Bicyclette est synonyme de vélo.

**Solution : le facteur** — texte découvert : « Je fais ma tournée chaque matin ; ma ____ est pleine de lettres ; je glisse le courrier dans la boîte ; jadis, je circulais à vélo. »

- *Le facteur* ✓ — Tournée, lettres, courrier, boîte, vélo : le facteur, avec sa sacoche.

### e-008 : « Or liquide » → le miel

**Mot 1 : ruche** (trouvé à la brique 1, mise 3) — piste : nid + alvéoles + lisse

- nid → *ruche* ✓ — L'or liquide est le miel ; nid d'abeilles correspond à la ruche.

**Mot 2 : abeilles** (trouvé à la brique 1, mise 2) — piste : bourdons + lendemain

- bourdons → *abeilles* ✓ — Bourdons, la ruche et le miel mènent aux abeilles.

**Mot 3 : nectar** (trouvé à la brique 1, mise 2) — piste : ambroisie + tôt

- ambroisie → *nectar* ✓ — Ambroisie est synonyme de nectar, or liquide des abeilles.

**Mot 4 : sucré** (trouvé à la brique 2, mise 2) — piste : doux + nord

- doux → *miel* ✗ — Doux : l'or liquide est le miel.
- doux + nord → *sucre* ✓ — Doux appelle sucre ; nord évoque sud, début de sucre.

**Mot 5 : tranche** (trouvé à la brique 2, mise 2) — piste : rondelle + vingt-neuf

- rondelle → *pièce* ✗ — Rondelle d'or : pièce.
- rondelle + vingt-neuf → *tranche* ✓ — Rondelle donne tranche ; vingt-neuf évoque trente, début de tranche.

**Solution : le miel** — texte découvert : « Je suis né dans une ruche ; les abeilles m'ont fabriqué avec le nectar des fleurs ; je suis sucré et doré ; on m'étale sur une tranche de pain. »

- *Le miel* ✓ — Fait par les abeilles dans la ruche avec le nectar : le miel.

### e-009 : « Septième art » → le cinéma

**Mot 1 : salle** (trouvé à la brique 2, mise 2) — piste : pièce + propre

- pièce → *scène* ✗ — Au cinéma, une pièce de théâtre renvoie à scène.
- pièce + propre → *salle* ✓ — Pièce donne salle ; propre est une incitation : contraire sale, qui se prononce comme salle.

**Mot 2 : écran** (trouvé à la brique 1, mise 2) — piste : moniteur + boulon

- moniteur → *écran* ✓ — Moniteur est synonyme d'écran, dans la salle de cinéma.

**Mot 3 : réalisateur** (trouvé à la brique 1, mise 3) — piste : Truffaut + producteur + do

- Truffaut → *réalisateur* ✓ — Truffaut est un réalisateur du septième art.

**Mot 4 : scène** (trouvé à la brique 2, mise 3) — piste : séquence + théâtre + six

- séquence → *plan* ✗ — Séquence est proche de plan au cinéma.
- séquence + théâtre → *scène* ✓ — Séquence et théâtre convergent sur scène.

**Mot 5 : actrice** (trouvé à la brique 1, mise 2) — piste : comédienne + désaccord

- comédienne → *actrice* ✓ — Comédienne est synonyme d'actrice.

**Solution : le cinéma** — texte découvert : « Dans la salle obscure, on fixe le grand écran ; le réalisateur crie « Moteur ! » ; une scène jouée par une actrice fait pleurer le public. »

- *Le cinéma* ✓ — Salle, écran, réalisateur, scène, actrice : le cinéma.

### e-204 : « Effacé, pas oublié » → un palimpseste

**Mot 1 : parchemin** (trouvé à la brique 2, mise 2) — piste : vélin + papyrus

- vélin → *palimpseste* ✗ — Vélin est un parchemin ; effacé mais pas oublié, c'est le palimpseste.
- vélin + papyrus → *parchemin* ✓ — Vélin et papyrus sont des supports d'écriture, proches du parchemin.

**Mot 2 : moine** (trouvé à la brique 1, mise 3) — piste : religieux + abbaye + toi

- religieux → *moine* ✓ — Religieux est synonyme de moine, qui grattait les parchemins.

**Mot 3 : texte** (trouvé à la brique 1, mise 2) — piste : énoncé + paragraphe

- énoncé → *texte* ✓ — Énoncé est synonyme de texte, celui qu'on efface sur le palimpseste.

**Mot 4 : rayons** (trouvé à la brique 1, mise 2) — piste : faisceaux + Röntgen

- faisceaux → *rayons* ✓ — Faisceaux est synonyme de rayons, qui révèlent le texte effacé.

**Mot 5 : écritures** (trouvé à la brique 1, mise 3) — piste : graphies + Champollion + boulon

- graphies → *écritures* ✓ — Graphies est synonyme d'écritures, celles effacées du palimpseste.

**Solution : un palimpseste** — texte découvert : « Sur ce parchemin ancien, un moine gratta le premier texte pour en copier un autre ; mais les rayons modernes révèlent les écritures effacées. »

- *palimpseste* ✓ — Parchemin gratté et récrit dont on lit les écritures effacées : le palimpseste.

### e-304 : « Faux dévot » → l'hypocrisie

**Mot 1 : masque** (trouvé à la brique 2, mise 2) — piste : loup + carnaval

- loup → *hypocrite* ✗ — Le loup déguisé en agneau désigne l'hypocrite, faux dévot.
- loup + carnaval → *masque* ✓ — Loup et carnaval désignent le masque, que porte le faux dévot.

**Mot 2 : duplicité** (trouvé à la brique 2, mise 3) — piste : fausseté + Janus + naïf

- fausseté → *hypocrisie* ✗ — Fausseté est synonyme d'hypocrisie, vice du faux dévot.
- fausseté + Janus → *duplicité* ✓ — Fausseté et Janus : duplicité.

**Mot 3 : parangon** (non trouvé, mise 3) — piste : modèle + vertu + père

- modèle → *Tartuffe* ✗ — Modèle du faux dévot : Tartuffe.
- modèle + vertu → *pharisien* ✗ — Modèle de vertu affichée : le pharisien, faux dévot.
- modèle + vertu + père → *papelard* ✗ — Père évoque papa, début de papelard, synonyme de faux dévot.

**Mot 4 : simagrées** (trouvé à la brique 1, mise 3) — piste : minauderies + grimaces + sommet

- minauderies → *simagrées* ✓ — Minauderies est synonyme de simagrées du faux dévot.

**Mot 5 : crocodile** (trouvé à la brique 2, mise 2) — piste : caïman + Nil

- caïman → *larmes* ✗ — Caïman évoque le crocodile, dont les larmes sont feintes comme celles du faux dévot.
- caïman + Nil → *crocodile* ✓ — Caïman et Nil mènent au crocodile, dont les larmes feintes sont celles du faux dévot.

**Solution : l'hypocrisie** — texte découvert : « Sous le masque de la vertu se cache la duplicité ; Tartuffe en est le ____ ; ses simagrées sont des larmes de crocodile. »

- *Le Tartuffe* ✗ — Masque de vertu, duplicité, simagrées : Tartuffe, figure du faux dévot (le blanc serait le tartufe).
- *Le bigot* ✗ — Tartuffe refusé ; le texte décrit un faux dévot aux simagrées : le bigot.

### e-305 : « Le pardon des grands » → la mansuétude

**Mot 1 : clémence** (trouvé à la brique 2, mise 2) — piste : indulgence + sévérité

- indulgence → *grâce* ✗ — Indulgence est proche de grâce, le pardon des grands.
- indulgence + sévérité → *clémence* ✓ — Indulgence a pour contraire sévérité ; clémence est le pardon des grands.

**Mot 2 : félon** (trouvé à la brique 2, mise 3) — piste : traître + vassal + sorcière

- traître → *Cinna* ✗ — Traître pardonné par Auguste dans la pièce de Corneille : Cinna.
- traître + vassal → *félon* ✓ — Traître et vassal : le félon.

**Mot 3 : magnanimité** (trouvé à la brique 1, mise 3) — piste : générosité + Auguste + nabab

- générosité → *magnanimité* ✓ — Générosité des grands est la magnanimité.

**Mot 4 : rancœur** (trouvé à la brique 2, mise 3) — piste : aigreur + fiel + file

- aigreur → *rancune* ✗ — Aigreur est synonyme de rancune, que le pardon dépasse.
- aigreur + fiel → *rancœur* ✓ — Aigreur et fiel donnent rancœur.

**Mot 5 : sanction** (trouvé à la brique 2, mise 2) — piste : punition + avec

- punition → *châtiment* ✗ — Punition donne châtiment, contraire du pardon.
- punition + avec → *sanction* ✓ — Punition donne sanction ; avec évoque sans, qui sonne comme san-.

**Solution : la mansuétude** — texte découvert : « Le roi fit preuve de clémence envers le félon ; sa magnanimité désarma la rancœur des courtisans, qui attendaient une sanction exemplaire. »

- *La clémence d'Auguste* ✗ — Clémence envers un félon, magnanimité : le pardon d'Auguste à Cinna.
- *La clémence* ✗ — La clémence d'Auguste étant refusée, j'essaie le mot simple : le pardon du roi est la clémence.
- *L'amnistie* ✗ — La clémence étant refusée, je vise l'acte de pardon du souverain : l'amnistie.

### e-308 : « Raisonnement trompeur » → un sophisme

**Mot 1 : rigoureux** (trouvé à la brique 2, mise 2) — piste : strict + hiver

- strict → *sophisme* ✗ — Raisonnement trompeur : sophisme.
- strict + hiver → *rigoureux* ✓ — Strict et hiver se rejoignent dans rigoureux.

**Mot 2 : faille** (trouvé à la brique 1, mise 2) — piste : brèche + sismique

- brèche → *faille* ✓ — Brèche est synonyme de faille, que cache le raisonnement.

**Mot 3 : prémisses** (trouvé à la brique 1, mise 3) — piste : postulats + syllogisme + accusé

- postulats → *prémisses* ✓ — Postulats est synonyme de prémisses du raisonnement.

**Mot 4 : conclusion** (trouvé à la brique 2, mise 2) — piste : déduction + cornichon

- déduction → *syllogisme* ✗ — Déduction renvoie au syllogisme.
- déduction + cornichon → *conclusion* ✓ — Déduction donne conclusion ; cornichon évoque concombre, début con-.

**Mot 5 : piège** (trouvé à la brique 1, mise 2) — piste : traquenard + souris

- traquenard → *piège* ✓ — Traquenard est synonyme de piège.

**Solution : un sophisme** — texte découvert : « Ce raisonnement paraît rigoureux, mais il cache une faille ; ses prémisses sont vraies, sa conclusion est fausse : c'est un piège déguisé. »

- *Le sophisme* ✓ — Raisonnement qui semble rigoureux mais piégé : le sophisme.

### e-325 : « Le désert intérieur » → l'ascèse

**Mot 1 : anachorète** (trouvé à la brique 3, mise 3) — piste : ermite + Thébaïde + boa

- ermite → *solitude* ✗ — L'ermite incarne la solitude, désert intérieur.
- ermite + Thébaïde → *retraite* ✗ — Ermite et Thébaïde évoquent la retraite loin du monde.
- ermite + Thébaïde + boa → *anachorète* ✓ — Ermite et Thébaïde mènent à anachorète ; boa évoque anaconda, début ana-.

**Mot 2 : jeûne** (trouvé à la brique 1, mise 2) — piste : festin + carême

- festin → *jeûne* ✓ — Festin a pour contraire jeûne, désert intérieur.

**Mot 3 : abstinence** (trouvé à la brique 2, mise 2) — piste : continence + manquant

- continence → *chasteté* ✗ — Continence est synonyme de chasteté.
- continence + manquant → *abstinence* ✓ — Continence donne abstinence ; manquant évoque absent, début abs-.

**Mot 4 : discipline** (non trouvé, mise 2) — piste : rigueur + fouet

- rigueur → *austérité* ✗ — Rigueur donne austérité, désert intérieur.
- rigueur + fouet → *mortification* ✗ — Rigueur et fouet évoquent la mortification de l'ascète.

**Mot 5 : purification** (trouvé à la brique 1, mise 3) — piste : ablutions + encens + netteté

- ablutions → *purification* ✓ — Ablutions est proche de purification.

**Solution : l'ascèse** — texte découvert : « L'anachorète se prive de tout : jeûne, abstinence et veilles ; par cette ____, il cherche la purification de l'âme. »

- *L'ascétisme* ✓ — Privations, jeûne, abstinence en vue de la purification : l'ascétisme.

### e-326 : « La lanterne de Diogène » → le cynisme

**Mot 1 : tonneau** (trouvé à la brique 1, mise 2) — piste : fût + vin

- fût → *tonneau* ✓ — Fût est synonyme de tonneau, la demeure de Diogène.

**Mot 2 : conventions** (trouvé à la brique 2, mise 3) — piste : usages + Genève + invité

- usages → *mœurs* ✗ — Usages est synonyme de mœurs, que Diogène bravait.
- usages + Genève → *conventions* ✓ — Usages donne conventions, et Genève évoque ses conventions.

**Mot 3 : argent** (non trouvé, mise 2) — piste : fric + Harpagon

- fric → *monnaie* ✗ — Fric est de la monnaie ; Diogène falsifiait la monnaie.
- fric + Harpagon → *richesse* ✗ — Fric et Harpagon évoquent la richesse, que Diogène méprisait.

**Mot 4 : impudence** (trouvé à la brique 2, mise 2) — piste : effronterie + taxe

- effronterie → *cynisme* ✗ — Effronterie est proche du cynisme de Diogène.
- effronterie + taxe → *impudence* ✓ — Effronterie donne impudence ; taxe évoque impôt, début de impudence.

**Mot 5 : notables** (trouvé à la brique 2, mise 2) — piste : dignitaires + bourgeois

- dignitaires → *puissants* ✗ — Dignitaires désigne les puissants que Diogène bravait.
- dignitaires + bourgeois → *notables* ✓ — Dignitaires et bourgeois désignent les notables.

**Solution : le cynisme** — texte découvert : « Le philosophe vivait dans un tonneau ; il méprisait les conventions et l'____ ; son impudence provocante choquait les notables d'Athènes : quelle est sa doctrine ? »

- *Le cynisme* ✓ — Tonneau, mépris des conventions, impudence : la doctrine de Diogène est le cynisme.

### e-329 : « Bernin et Borromini » → le baroque

**Mot 1 : profusion** (trouvé à la brique 2, mise 2) — piste : abondance + élève

- abondance → *baroque* ✗ — Bernin et Borromini sont baroques, style d'abondance.
- abondance + élève → *profusion* ✓ — Abondance donne profusion ; élève évoque prof, début de profusion.

**Mot 2 : volutes** (trouvé à la brique 2, mise 2) — piste : spirales + fumée

- spirales → *colonnes* ✗ — Spirales évoque les colonnes torses du baldaquin de Bernin.
- spirales + fumée → *volutes* ✓ — Spirales et fumée : volutes.

**Mot 3 : torses** (trouvé à la brique 1, mise 2) — piste : tordues + raison

- tordues → *torses* ✓ — Tordues donne torses, colonnes torses de Bernin.

**Mot 4 : trompe-l'œil** (trouvé à la brique 1, mise 2) — piste : illusion + fresque

- illusion → *trompe-l'œil* ✓ — Illusion baroque : le trompe-l'œil.

**Mot 5 : ostentation** (trouvé à la brique 1, mise 2) — piste : exhibition + squelette

- exhibition → *ostentation* ✓ — Exhibition est synonyme d'ostentation baroque.

**Solution : le baroque** — texte découvert : « Cet art de la profusion aime les volutes et les colonnes torses ; il cultive le trompe-l'œil et le goût de l'ostentation. »

- *Le baroque* ✓ — Profusion, volutes, colonnes torses, trompe-l'œil : le baroque.

### e-331 : « Brebis égarées » → l'hérésie

**Mot 1 : dogme** (trouvé à la brique 1, mise 2) — piste : doctrine + Église

- doctrine → *dogme* ✓ — Doctrine a pour synonyme dogme, que les brebis égarées quittent.

**Mot 2 : excommunication** (trouvé à la brique 1, mise 3) — piste : anathème + pape + divorcé

- anathème → *excommunication* ✓ — Anathème est synonyme d'excommunication, sanction des brebis égarées.

**Mot 3 : inquisition** (trouvé à la brique 1, mise 2) — piste : Torquemada + tribunal

- Torquemada → *inquisition* ✓ — Torquemada est l'inquisiteur : l'Inquisition.

**Mot 4 : dissidents** (trouvé à la brique 2, mise 3) — piste : opposants + goulag + neuf

- opposants → *hérétiques* ✗ — Opposants à la doctrine : les hérétiques.
- opposants + goulag → *dissidents* ✓ — Opposants et goulag : dissidents.

**Mot 5 : bûcher** (trouvé à la brique 1, mise 2) — piste : autodafé + fagots

- autodafé → *bûcher* ✓ — Autodafé évoque le bûcher.

**Solution : l'hérésie** — texte découvert : « S'écarter du dogme, c'est risquer l'excommunication ; l'inquisition traquait ces dissidents et les livrait au bûcher. »

- *hérésie* ✓ — Le texte décrit l'hérésie, écart du dogme.

### e-335 : « Querelle des images » → un iconoclaste

**Mot 1 : empereur** (trouvé à la brique 1, mise 2) — piste : césar + Napoléon

- césar → *empereur* ✓ — César est un empereur, ici celui de la querelle des images.

**Mot 2 : icônes** (trouvé à la brique 1, mise 2) — piste : images + orthodoxe

- images → *icônes* ✓ — Images sacrées de la querelle : les icônes.

**Mot 3 : frondeur** (trouvé à la brique 3, mise 3) — piste : contestataire + Mazarin + limite

- contestataire → *iconoclastes* ✗ — Contestataire des images : iconoclastes.
- contestataire + Mazarin → *iconoclaste* ✗ — Contestataire au singulier : iconoclaste, le pluriel étant refusé.
- contestataire + Mazarin + limite → *frondeur* ✓ — Contestataire est frondeur ; Mazarin et la Fronde, limite évoque frontière, de même début.

**Mot 4 : bousculer** (trouvé à la brique 2, mise 2) — piste : secouer + habitudes

- secouer → *ébranler* ✗ — Secouer donne ébranler, ce que fait l'iconoclasme.
- secouer + habitudes → *bousculer* ✓ — Secouer les habitudes : bousculer.

**Mot 5 : dogmes** (trouvé à la brique 1, mise 2) — piste : principes + Église

- principes → *dogmes* ✓ — Principes établis que l'on bouscule : les dogmes.

**Solution : un iconoclaste** — texte découvert : « À Byzance, l'empereur faisait briser les icônes ; aujourd'hui, l'esprit frondeur aime bousculer les dogmes établis. »

- *L'iconoclasme* ✓ — Briser les icônes et bousculer les dogmes : l'iconoclasme.

### e-339 : « Héraclès au marais » → l'hydre

**Mot 1 : monstre** (trouvé à la brique 2, mise 2) — piste : créature + Godzilla

- créature → *hydre* ✗ — La créature de Lerne affrontée par Héraclès est l'hydre.
- créature + Godzilla → *monstre* ✓ — Créature et Godzilla donnent monstre, ce que fut l'hydre.

**Mot 2 : multiples** (trouvé à la brique 2, mise 2) — piste : nombreuses + choix

- nombreuses → *têtes* ✗ — L'hydre a de nombreuses têtes.
- nombreuses + choix → *multiples* ✓ — Nombreuses et choix : multiples.

**Mot 3 : décapitation** (trouvé à la brique 1, mise 3) — piste : décollation + guillotine + dizaine

- décollation → *décapitation* ✓ — Décollation est synonyme de décapitation, ce qui n'arrête pas l'hydre.

**Mot 4 : cautériser** (trouvé à la brique 1, mise 3) — piste : brûler + brasier + falaise

- brûler → *cautériser* ✓ — Héraclès brûlait les cous coupés de l'hydre pour cautériser.

**Mot 5 : bout** (trouvé à la brique 2, mise 2) — piste : extrémité + chandelle

- extrémité → *moignon* ✗ — Extrémité du cou tranché de l'hydre : le moignon.
- extrémité + chandelle → *bout* ✓ — Extrémité et chandelle donnent bout.

**Solution : l'hydre** — texte découvert : « Ce monstre aux têtes multiples renaissait à chaque décapitation ; Héraclès dut cautériser les plaies pour en venir à bout. »

- *L'hydre de Lerne* ✓ — Monstre aux têtes multiples vaincu par Héraclès.

### e-341 : « Coup de dés » → le hasard

**Mot 1 : destin** (trouvé à la brique 2, mise 2) — piste : sort + Parques

- sort → *hasard* ✗ — Sort est synonyme de hasard, comme un coup de dés.
- sort + Parques → *destin* ✓ — Sort et Parques mènent au destin.

**Mot 2 : chance** (trouvé à la brique 1, mise 2) — piste : veine + trèfle

- veine → *chance* ✓ — Veine est synonyme de chance.

**Mot 3 : fortune** (trouvé à la brique 1, mise 2) — piste : aubaine + roue

- aubaine → *fortune* ✓ — Aubaine est proche de fortune.

**Mot 4 : étoile** (trouvé à la brique 1, mise 2) — piste : astre + berger

- astre → *étoile* ✓ — Astre donne étoile, comme la bonne étoile.

**Mot 5 : poisse** (trouvé à la brique 2, mise 2) — piste : malchance + sardine

- malchance → *déveine* ✗ — Malchance est synonyme de déveine, contraire de veine au jeu.
- malchance + sardine → *poisse* ✓ — Malchance donne poisse ; sardine évoque poisson.

**Solution : le hasard** — texte découvert : « Ni destin ni calcul : seule la chance décide ; la fortune sourit aux audacieux ; le joueur invoque sa bonne étoile et redoute la poisse. »

- *Le hasard* ✓ — Chance, fortune, étoile, poisse : le hasard.

### e-403 : « Pôle Nord de la cuisine » → le réfrigérateur

**Mot 1 : armoire** (trouvé à la brique 2, mise 3) — piste : placard + normande + fusil

- placard → *frigo* ✗ — Placard familier, pôle Nord de la cuisine : le frigo.
- placard + normande → *armoire* ✓ — Placard et normande renvoient à armoire (armoire normande).

**Mot 2 : frais** (trouvé à la brique 2, mise 2) — piste : frisquet + sœur

- frisquet → *froid* ✗ — Frisquet est proche de froid, pôle Nord de la cuisine.
- frisquet + sœur → *frais* ✓ — Frisquet donne frais ; sœur évoque frère, début de frais.

**Mot 3 : beurre** (trouvé à la brique 1, mise 2) — piste : margarine + courage

- margarine → *beurre* ✓ — Margarine évoque le beurre rangé au frigo.

**Mot 4 : yaourts** (trouvé à la brique 1, mise 2) — piste : Danone + long

- Danone → *yaourt* ✓ — Danone est une marque de yaourt, rangé au frais.

**Mot 5 : jambon** (trouvé à la brique 2, mise 2) — piste : saucisson + mauvais

- saucisson → *charcuterie* ✗ — Saucisson évoque la charcuterie du frigo.
- saucisson + mauvais → *jambon* ✓ — Saucisson évoque le jambon ; mauvais évoque bon, fin de jambon.

**Solution : le réfrigérateur** — texte découvert : « Dans la cuisine, cette grande armoire blanche garde au frais le beurre, les yaourts et le jambon. »

- *Le réfrigérateur* ✓ — Grande armoire blanche qui garde au frais : le réfrigérateur.

### e-428 : « Tchou-tchou ! » → le train

**Mot 1 : quai** (trouvé à la brique 1, mise 2) — piste : embarcadère + Montréal

- embarcadère → *quai* ✓ — Embarcadère est synonyme de quai, où fait tchou-tchou le train.

**Mot 2 : voie** (trouvé à la brique 1, mise 3) — piste : chemin + ferrée + entendre

- chemin → *voie* ✓ — Chemin est synonyme de voie, ferrée pour le train.

**Mot 3 : wagon** (trouvé à la brique 1, mise 3) — piste : voiture + compartiment + taureau

- voiture → *wagon* ✓ — Voiture de train : wagon.

**Mot 4 : contrôleur** (trouvé à la brique 1, mise 3) — piste : inspecteur + amende + pour

- inspecteur → *contrôleur* ✓ — Inspecteur du train : contrôleur.

**Mot 5 : billets** (trouvé à la brique 1, mise 2) — piste : tickets + boules

- tickets → *billets* ✓ — Tickets est synonyme de billets.

**Solution : le train** — texte découvert : « Sur le quai, on attend en regardant l'horloge ; il arrive sur la voie ; on monte dans un wagon ; le contrôleur vérifie les billets. »

- *train* ✓ — Quai, voie, wagon, contrôleur et billets décrivent le train.

### e-430 : « Hotte sur le dos » → le père Noël

**Mot 1 : traîneau** (trouvé à la brique 1, mise 3) — piste : luge + chiens + vos

- luge → *traîneau* ✓ — Luge évoque traîneau, celui du Père Noël à la hotte.

**Mot 2 : rennes** (trouvé à la brique 1, mise 2) — piste : cervidés + roi

- cervidés → *rennes* ✓ — Cervidés qui tirent le traîneau : les rennes.

**Mot 3 : cheminée** (trouvé à la brique 1, mise 3) — piste : âtre + ramoneur + cravate

- âtre → *cheminée* ✓ — Âtre évoque la cheminée par laquelle descend le Père Noël.

**Mot 4 : cadeaux** (trouvé à la brique 1, mise 2) — piste : présents + aîné

- présents → *cadeaux* ✓ — Présents est synonyme de cadeaux dans la hotte.

**Mot 5 : sapin** (trouvé à la brique 1, mise 3) — piste : conifère + guirlande + vin

- conifère → *sapin* ✓ — Conifère de Noël : le sapin.

**Solution : le père Noël** — texte découvert : « Dans son traîneau tiré par des rennes, il descend par la cheminée et dépose les cadeaux au pied du sapin. »

- *Père Noël* ✓ — Traîneau, rennes, cheminée, cadeaux et sapin décrivent le Père Noël.

### e-435 : « Petite reine » → la bicyclette

**Mot 1 : selle** (trouvé à la brique 2, mise 2) — piste : étrier + poivre

- étrier → *pédale* ✗ — Étrier désigne aussi la pédale, pièce de la petite reine.
- étrier + poivre → *selle* ✓ — Étrier appartient à la selle ; poivre évoque sel, qui sonne comme selle.

**Mot 2 : guidon** (trouvé à la brique 1, mise 2) — piste : volant + houx

- volant → *guidon* ✓ — Volant du vélo : le guidon.

**Mot 3 : pédales** (non trouvé, mise 2) — piste : accélérateur + mémé

- accélérateur → *dérailleur* ✗ — Accélérateur du vélo : le dérailleur.
- accélérateur + mémé → *pédalier* ✗ — Accélérateur du vélo ; mémé évoque pépé, début de pédalier.

**Mot 4 : équilibre** (trouvé à la brique 1, mise 2) — piste : stabilité + occupé

- stabilité → *équilibre* ✓ — Stabilité est synonyme d'équilibre, nécessaire à vélo.

**Mot 5 : chambre** (non trouvé, mise 3) — piste : pièce + pneu + Élysées

- pièce → *roue* ✗ — Pièce du vélo : la roue.
- pièce + pneu → *jante* ✗ — Pièce du pneu : la jante.
- pièce + pneu + Élysées → *chambre à air* ✗ — Pièce du pneu : chambre à air ; Élysées évoque Champs, qui sonne comme chambre.

**Solution : la bicyclette** — texte découvert : « On s'assoit sur la selle, on tient le guidon, on appuie sur les ____ ; il faut garder l'équilibre ; une crevaison, et il faut changer la ____ à air. »

- *La bicyclette* ✓ — Selle, guidon, pédales, équilibre, chambre à air : la bicyclette.

### e-437 : « Au-dessus des nuages » → l'avion

**Mot 1 : aéroport** (trouvé à la brique 1, mise 2) — piste : Roissy + cochon

- Roissy → *aéroport* ✓ — Roissy est un aéroport, au-dessus des nuages.

**Mot 2 : valises** (trouvé à la brique 2, mise 2) — piste : bagages + vient

- bagages → *soute* ✗ — Les bagages vont en soute dans l'avion.
- bagages + vient → *valises* ✓ — Bagages donne valises ; vient évoque va, début de valises.

**Mot 3 : pilote** (trouvé à la brique 1, mise 2) — piste : commandant + face

- commandant → *pilote* ✓ — Commandant de bord : pilote.

**Mot 4 : piste** (trouvé à la brique 2, mise 3) — piste : trace + atterrissage + mieux

- trace → *traînée* ✗ — Trace dans le ciel : traînée de l'avion.
- trace + atterrissage → *piste* ✓ — Trace est une piste, et l'atterrissage se fait sur la piste.

**Mot 5 : hôtesse** (trouvé à la brique 1, mise 2) — piste : steward + bas

- steward → *hôtesse* ✓ — Steward a pour pendant l'hôtesse de l'air.

**Solution : l'avion** — texte découvert : « Dans l'aéroport, on dépose ses valises ; le pilote attend l'autorisation de quitter la piste ; à bord, l'hôtesse sert un plateau-repas. »

- *L'avion* ✓ — Aéroport, valises, pilote, piste, hôtesse : l'avion.

### e-503 : « Le cerf-volant de Benjamin » → le paratonnerre

**Mot 1 : faîte** (trouvé à la brique 2, mise 3) — piste : sommet + toit + anniversaire

- sommet → *foudre* ✗ — Le cerf-volant de Franklin attire la foudre.
- sommet + toit → *faîte* ✓ — Sommet et toit désignent le faîte.

**Mot 2 : tige** (trouvé à la brique 2, mise 2) — piste : tringle + fleur

- tringle → *paratonnerre* ✗ — Tringle au sommet du toit : paratonnerre de Franklin.
- tringle + fleur → *tige* ✓ — Tringle et fleur : tige.

**Mot 3 : foudre** (trouvé à la brique 2, mise 2) — piste : éclair + Zeus

- éclair → *orage* ✗ — Éclair évoque l'orage du cerf-volant de Franklin.
- éclair + Zeus → *foudre* ✓ — Éclair et Zeus évoquent la foudre.

**Mot 4 : câble** (trouvé à la brique 2, mise 2) — piste : filin + télévision

- filin → *ficelle* ✗ — Filin du cerf-volant : la ficelle.
- filin + télévision → *câble* ✓ — Filin et télévision évoquent le câble.

**Mot 5 : incendie** (trouvé à la brique 2, mise 3) — piste : brasier + pompiers + supérieur

- brasier → *feu* ✗ — Brasier est synonyme de feu, que provoque la foudre.
- brasier + pompiers → *incendie* ✓ — Brasier et pompiers mènent à incendie, feu étant refusé.

**Solution : le paratonnerre** — texte découvert : « Dressée sur le faîte de l'édifice, une tige métallique attire la foudre ; un câble la conduit jusqu'au sol, évitant l'incendie. »

- *Le paratonnerre* ✓ — Tige sur le faîte attirant la foudre avec un câble vers le sol : le paratonnerre.

### e-506 : « Peindre dans le frais » → la fresque

**Mot 1 : pigments** (trouvé à la brique 1, mise 2) — piste : colorants + ocre

- colorants → *pigments* ✓ — Colorants synonyme de pigments, utilisés pour la fresque.

**Mot 2 : enduit** (trouvé à la brique 1, mise 2) — piste : crépi + plâtrier

- crépi → *enduit* ✓ — Crépi est un enduit, support de la fresque.

**Mot 3 : humide** (trouvé à la brique 1, mise 3) — piste : moite + éponge + audacieux

- moite → *humide* ✓ — Moite est synonyme d'humide, comme le frais de la fresque.

**Mot 4 : échafaudage** (trouvé à la brique 1, mise 3) — piste : grue + façade + foulard

- grue → *échafaudage* ✓ — Grue évoque le chantier ; l'échafaudage sert à la fresque.

**Mot 5 : plafond** (trouvé à la brique 1, mise 2) — piste : plancher + lustre

- plancher → *plafond* ✓ — Plancher a pour contraire plafond, que peint la fresque.

**Solution : la fresque** — texte découvert : « Les pigments sont posés sur un enduit encore humide ; juché sur un échafaudage, Michel-Ange couvrit ainsi le plafond de la Sixtine. »

- *fresque* ✓ — Peinture sur enduit humide : la fresque.

### e-509 : « Embouchure en éventail » → le delta

**Mot 1 : fleuve** (non trouvé, mise 2) — piste : Loire + océan

- Loire → *estuaire* ✗ — La Loire se jette dans un estuaire, contraire du delta en éventail.
- Loire + océan → *delta* ✗ — Embouchure en éventail : delta, estuaire étant refusé.

**Mot 2 : bras** (trouvé à la brique 1, mise 2) — piste : jambe + biceps

- jambe → *bras* ✓ — Jambe évoque un membre ; les bras divisent l'embouchure en éventail.

**Mot 3 : crues** (trouvé à la brique 1, mise 2) — piste : débordements + Nil

- débordements → *crues* ✓ — Débordements du fleuve : crues.

**Mot 4 : alluvions** (trouvé à la brique 1, mise 2) — piste : sédiments + briquet

- sédiments → *alluvions* ✓ — Sédiments est synonyme d'alluvions, qui forment le delta.

**Mot 5 : triangle** (trouvé à la brique 2, mise 2) — piste : carré + Bermudes

- carré → *delta* ✗ — Carré évoque dé (cube), début de delta, embouchure en éventail.
- carré + Bermudes → *triangle* ✓ — Carré et Bermudes évoquent le triangle, forme du delta.

**Solution : le delta** — texte découvert : « Le ____ se divise en bras ; ses crues y déposent des alluvions ; celui du Nil a la forme d'un triangle. »

- *delta* ✓ — Division en bras, alluvions, forme de triangle : le delta.

### e-515 : « Le cheval de fer » → la locomotive

**Mot 1 : foyer** (trouvé à la brique 2, mise 2) — piste : âtre + famille

- âtre → *chaudière* ✗ — Âtre évoque le foyer ; la chaudière de la locomotive, cheval de fer.
- âtre + famille → *foyer* ✓ — Âtre et famille se rejoignent dans foyer.

**Mot 2 : pelle** (trouvé à la brique 1, mise 2) — piste : bêche + seau

- bêche → *pelle* ✓ — Bêche est proche de pelle, outil du chauffeur de locomotive.

**Mot 3 : charbon** (trouvé à la brique 1, mise 2) — piste : houille + mine

- houille → *charbon* ✓ — Houille est synonyme de charbon, combustible de la locomotive.

**Mot 4 : wagons** (trouvé à la brique 1, mise 2) — piste : voitures + bestiaux

- voitures → *wagons* ✓ — Voitures de train : wagons.

**Mot 5 : rails** (trouvé à la brique 1, mise 3) — piste : traverses + ballast + ironiser

- traverses → *rails* ✓ — Traverses portent les rails.

**Solution : la locomotive** — texte découvert : « Son foyer chauffe l'eau ; à la pelle, on y jette le charbon ; elle tire les wagons sur les rails. »

- *locomotive* ✓ — Foyer, pelle, charbon, wagons, rails : la locomotive.

### e-520 : « La Chevauchée fantastique » → le western

**Mot 1 : diligence** (trouvé à la brique 1, mise 2) — piste : zèle + attelage

- zèle → *diligence* ✓ — Zèle est synonyme de diligence, celle de La Chevauchée fantastique.

**Mot 2 : shérif** (trouvé à la brique 1, mise 2) — piste : marshal + étoile

- marshal → *shérif* ✓ — Marshal est l'équivalent du shérif dans le western.

**Mot 3 : flèches** (trouvé à la brique 1, mise 2) — piste : arc + Cupidon

- arc → *flèche* ✓ — Arc appelle flèche, arme des Indiens attaquant la diligence.

**Mot 4 : duel** (trouvé à la brique 1, mise 2) — piste : affrontement + témoins

- affrontement → *duel* ✓ — Affrontement du western : le duel.

**Mot 5 : revolver** (trouvé à la brique 2, mise 2) — piste : pistolet + barillet

- pistolet → *colt* ✗ — Pistolet du western : colt.
- pistolet + barillet → *revolver* ✓ — Pistolet à barillet : revolver.

**Solution : le western** — texte découvert : « Une diligence attaquée, un shérif à l'étoile, des flèches venues des collines, un duel au soleil couchant, un revolver qu'on dégaine : John Ford en a fait un art. »

- *western* ✓ — John Ford, diligence, shérif et duel : le western.

### e-530 : « Un plat qui se mange froid » → la vengeance

**Mot 1 : affront** (trouvé à la brique 1, mise 2) — piste : outrage + laver

- outrage → *affront* ✓ — Outrage a pour synonyme affront, qui appelle la vengeance.

**Mot 2 : ressentiment** (trouvé à la brique 1, mise 2) — piste : rancœur + similitude

- rancœur → *ressentiment* ✓ — Rancœur est synonyme de ressentiment, nourri par la vengeance.

**Mot 3 : représailles** (trouvé à la brique 1, mise 3) — piste : rétorsions + guerre + déjeuner

- rétorsions → *représailles* ✓ — Rétorsions est synonyme de représailles, la vengeance.

**Mot 4 : implacable** (trouvé à la brique 1, mise 3) — piste : inexorable + ennemi + armoire

- inexorable → *implacable* ✓ — Inexorable est synonyme d'implacable, comme la vengeance.

**Mot 5 : châtiment** (trouvé à la brique 1, mise 3) — piste : punition + crime + félin

- punition → *châtiment* ✓ — Punition est synonyme de châtiment.

**Solution : la vengeance** — texte découvert : « Trahi, il ne pardonne pas l'affront ; son ressentiment grandit au château d'If ; Monte-Cristo prépare ses représailles avec une froideur implacable : le châtiment des traîtres sera exemplaire. »

- *la vengeance* ✓ — Monte-Cristo, affront, représailles : la vengeance, plat qui se mange froid.

### e-533 : « Salle des pas perdus » → le tribunal

**Mot 1 : prévenu** (trouvé à la brique 1, mise 2) — piste : accusé + prairie

- accusé → *prévenu* ✓ — Accusé est synonyme de prévenu, personnage du palais de justice.

**Mot 2 : greffier** (trouvé à la brique 1, mise 3) — piste : clerc + audience + Athènes

- clerc → *greffier* ✓ — Clerc évoque le greffier du tribunal.

**Mot 3 : réquisitoire** (non trouvé, mise 2) — piste : plaidoirie + procureur

- plaidoirie → *avocat* ✗ — Plaidoirie évoque l'avocat.
- plaidoirie + procureur → *juge* ✗ — Plaidoirie et procureur dans le tribunal : le juge.

**Mot 4 : jurés** (trouvé à la brique 1, mise 3) — piste : assesseurs + délibération + pantalon

- assesseurs → *jurés* ✓ — Assesseurs évoque les jurés.

**Mot 5 : verdict** (trouvé à la brique 1, mise 2) — piste : sentence + rouge

- sentence → *verdict* ✓ — Sentence est synonyme de verdict.

**Solution : le tribunal** — texte découvert : « Le prévenu comparaît ; le greffier consigne les débats ; le procureur prononce son ____ ; les jurés se retirent avant le verdict. »

- *procès* ✓ — Prévenu, greffier, procureur, jurés : le procès.

### e-536 : « Je sens la chair fraîche » → l'ogre

**Mot 1 : bottes** (trouvé à la brique 1, mise 2) — piste : cuissardes + éperons

- cuissardes → *bottes* ✓ — Cuissardes sont de grandes bottes, celles de l'ogre.

**Mot 2 : colosse** (trouvé à la brique 2, mise 2) — piste : géant + Rhodes

- géant → *ogre* ✗ — Géant renvoie à ogre, celui du Petit Poucet.
- géant + Rhodes → *colosse* ✓ — Géant et Rhodes mènent au colosse.

**Mot 3 : dévorer** (trouvé à la brique 1, mise 2) — piste : engloutir + livres

- engloutir → *dévorer* ✓ — Engloutir est synonyme de dévorer, ce que fait l'ogre.

**Mot 4 : couronnes** (trouvé à la brique 1, mise 2) — piste : diadèmes + rois

- diadèmes → *couronnes* ✓ — Diadèmes est synonyme de couronnes, que portent les ogres des contes.

**Mot 5 : cailloux** (trouvé à la brique 1, mise 2) — piste : pierres + Poucet

- pierres → *cailloux* ✓ — Pierres : cailloux du Petit Poucet face à l'ogre.

**Solution : l'ogre** — texte découvert : « Chaussé de bottes de sept lieues, ce colosse rêve de dévorer sept frères ; il égorge ses filles, trompé par leurs couronnes, échangées par le petit dernier, celui des cailloux. »

- *Le Petit Poucet* ✗ — Ogre, bottes de sept lieues, couronnes échangées, cailloux : Le Petit Poucet.
- *L'ogre* ✓ — Le Petit Poucet refusé ; le texte décrit l'ogre.

### e-541 : « Le comte des Carpates » → le vampire

**Mot 1 : crocs** (trouvé à la brique 1, mise 2) — piste : canines + loup

- canines → *crocs* ✓ — Canines sont des crocs, ceux de Dracula.

**Mot 2 : cercueil** (trouvé à la brique 1, mise 2) — piste : sarcophage + croque-mort

- sarcophage → *cercueil* ✓ — Sarcophage est proche de cercueil, où dort Dracula.

**Mot 3 : ail** (trouvé à la brique 1, mise 2) — piste : échalote + gousse

- échalote → *ail* ✓ — Échalote évoque l'ail, qui repousse le vampire.

**Mot 4 : aube** (trouvé à la brique 2, mise 2) — piste : aurore + communiant

- aurore → *soleil* ✗ — Aurore évoque le soleil qui tue le vampire.
- aurore + communiant → *aube* ✓ — Aurore est synonyme d'aube, robe du communiant.

**Mot 5 : pieu** (trouvé à la brique 1, mise 2) — piste : piquet + lit

- piquet → *pieu* ✓ — Piquet est synonyme de pieu, qui tue le vampire.

**Solution : le vampire** — texte découvert : « Il plante ses crocs dans les cous, dort le jour dans un cercueil, fuit l'ail et redoute l'aube ; un pieu dans le cœur l'achève. »

- *Dracula* ✗ — Crocs, cercueil, ail, aube, pieu : Dracula.
- *Un vampire* ✓ — Dracula refusé ; le texte décrit un vampire.

### np-002 : Écrivains français

**Nom 1 : Victor Hugo** (trouvé à la brique 1) — briques : Cosette + Gavroche + Guernesey

- Cosette → *Victor Hugo* ✓ — Cosette est un personnage des Misérables de Victor Hugo.

**Nom 2 : Molière** (trouvé à la brique 1) — briques : Tartuffe + Harpagon + Alceste

- Tartuffe → *Molière* ✓ — Tartuffe est une pièce de Molière.

**Nom 3 : Émile Zola** (trouvé à la brique 1) — briques : Germinal + Rougon + Dreyfus

- Germinal → *Émile Zola* ✓ — Germinal est un roman de Zola.

**Nom 4 : Jules Verne** (trouvé à la brique 1) — briques : Nautilus + Nemo + Fogg

- Nautilus → *Jules Verne* ✓ — Le Nautilus est le sous-marin de Jules Verne.

### np-103 : Villes de France

**Nom 1 : Strasbourg** (trouvé à la brique 1) — briques : Alsace + cathédrale + Parlement

- Alsace → *Strasbourg* ✓ — Alsace évoque sa capitale, Strasbourg.

**Nom 2 : Marseille** (trouvé à la brique 1) — briques : calanques + Canebière + bouillabaisse

- calanques → *Marseille* ✓ — Les calanques sont près de Marseille.

**Nom 3 : Lille** (trouvé à la brique 1) — briques : braderie + beffroi + Flandre

- braderie → *Lille* ✓ — La braderie est célèbre à Lille.

**Nom 4 : Bordeaux** (trouvé à la brique 1) — briques : vin + Garonne + Aquitaine

- vin → *Bordeaux* ✓ — Ville du vin.

### np-204 : Écrivains russes

**Nom 1 : Tolstoï** (trouvé à la brique 1) — briques : Karénine + Natacha + Iasnaïa

- Karénine → *Léon Tolstoï* ✓ — Karénine est le nom d'Anna Karénine de Tolstoï.

**Nom 2 : Dostoïevski** (trouvé à la brique 1) — briques : Raskolnikov + Karamazov + bagne

- Raskolnikov → *Fiodor Dostoïevski* ✓ — Raskolnikov est le héros de Crime et Châtiment.

**Nom 3 : Tchekhov** (trouvé à la brique 1) — briques : Cerisaie + mouette + Taganrog

- Cerisaie → *Anton Tchekhov* ✓ — La Cerisaie est une pièce de Tchekhov.

**Nom 4 : Pouchkine** (trouvé à la brique 1) — briques : Onéguine + duel + Tsarskoïe

- Onéguine → *Alexandre Pouchkine* ✓ — Eugène Onéguine est de Pouchkine.

### np-205 : Savants de l'Antiquité

**Nom 1 : Archimède** (trouvé à la brique 1) — briques : eurêka + Syracuse + levier

- eurêka → *Archimède* ✓ — Eurêka est le cri d'Archimède.

**Nom 2 : Euclide** (trouvé à la brique 1) — briques : géométrie + Alexandrie + Éléments

- géométrie → *Euclide* ✓ — La géométrie évoque Euclide.

**Nom 3 : Pythagore** (trouvé à la brique 1) — briques : théorème + hypoténuse + Samos

- théorème → *Pythagore* ✓ — Le théorème de Pythagore.

**Nom 4 : Hippocrate** (trouvé à la brique 1) — briques : serment + médecine + Cos

- serment → *Hippocrate* ✓ — Le serment d'Hippocrate.

### np-307 : Écrivains des Lumières

**Nom 1 : Diderot** (trouvé à la brique 1) — briques : Encyclopédie + Langres + fataliste

- Encyclopédie → *Denis Diderot* ✓ — Diderot a dirigé l'Encyclopédie.

**Nom 2 : Montesquieu** (trouvé à la brique 1) — briques : Persanes + Brède + lois

- Persanes → *Montesquieu* ✓ — Lettres persanes de Montesquieu.

**Nom 3 : Marivaux** (trouvé à la brique 1) — briques : badinage + Arlequin + hasard

- badinage → *Marivaux* ✓ — Le badinage évoque Marivaux et le marivaudage.

**Nom 4 : Beaumarchais** (trouvé à la brique 1) — briques : Figaro + Barbier + Almaviva

- Figaro → *Beaumarchais* ✓ — Figaro est un personnage de Beaumarchais.

### np-316 : Empereurs romains

**Nom 1 : Hadrien** (trouvé à la brique 1) — briques : mur + villa + Antinoüs

- mur → *Hadrien* ✓ — Le mur d'Hadrien.

**Nom 2 : Caligula** (trouvé à la brique 1) — briques : cheval + consul + Camus

- cheval → *Caligula* ✓ — Caligula voulait faire consul son cheval.

**Nom 3 : Néron** (trouvé à la brique 1) — briques : incendie + lyre + Agrippine

- incendie → *Néron* ✓ — Néron et l'incendie de Rome.

**Nom 4 : Marc Aurèle** (trouvé à la brique 1) — briques : Pensées + stoïcien + Danube

- Pensées → *Marc Aurèle* ✓ — Pensées pour moi-même de Marc Aurèle.

### np-322 : Personnages de Shakespeare

**Nom 1 : Hamlet** (trouvé à la brique 1) — briques : Elseneur + crâne + Ophélie

- Elseneur → *Hamlet* ✓ — Elseneur est le château de Hamlet.

**Nom 2 : Othello** (trouvé à la brique 1) — briques : Desdémone + Iago + mouchoir

- Desdémone → *Othello* ✓ — Desdémone est l'épouse d'Othello.

**Nom 3 : Falstaff** (trouvé à la brique 1) — briques : Windsor + ivrogne + Verdi

- Windsor → *Falstaff* ✓ — Les Joyeuses Commères de Windsor : Falstaff.

**Nom 4 : Prospero** (trouvé à la brique 1) — briques : tempête + Ariel + Caliban

- tempête → *Prospero* ✓ — La Tempête met en scène Prospero.

### np-327 : Grands de la chanson

**Nom 1 : Brassens** (trouvé à la brique 1) — briques : Sète + pipe + gorille

- Sète → *Georges Brassens* ✓ — Sète est la ville de Brassens.

**Nom 2 : Brel** (trouvé à la brique 1) — briques : Amsterdam + Marquises + quitte

- Amsterdam → *Jacques Brel* ✓ — Amsterdam est une chanson de Brel.

**Nom 3 : Ferré** (trouvé à la brique 1) — briques : Monaco + anarchie + Aragon

- Monaco → *Léo Ferré* ✓ — Léo Ferré vivait à Monaco.

**Nom 4 : Barbara** (trouvé à la brique 1) — briques : aigle + Nantes + Göttingen

- aigle → *Barbara* ✓ — L'Aigle noir est une chanson de Barbara.

### np-328 : Peintres espagnols

**Nom 1 : Goya** (trouvé à la brique 1) — briques : Majas + désastres + Saturne

- Majas → *Francisco de Goya* ✓ — Les Majas de Goya.

**Nom 2 : Vélasquez** (trouvé à la brique 1) — briques : Ménines + infante + Philippe IV

- Ménines → *Diego Vélasquez* ✓ — Les Ménines de Vélasquez.

**Nom 3 : Zurbarán** (trouvé à la brique 1) — briques : moines + Séville + Estrémadure

- moines → *Francisco de Zurbarán* ✓ — Zurbarán a peint des moines.

**Nom 4 : Le Greco** (trouvé à la brique 1) — briques : Tolède + Crète + Orgaz

- Tolède → *El Greco* ✓ — Le Greco a peint à Tolède.

### np-331 : Philosophes allemands

**Nom 1 : Hegel** (trouvé à la brique 1) — briques : dialectique + Iéna + esprit

- dialectique → *Hegel* ✓ — La dialectique évoque Hegel.

**Nom 2 : Nietzsche** (trouvé à la brique 1) — briques : Zarathoustra + surhomme + moustache

- Zarathoustra → *Friedrich Nietzsche* ✓ — Ainsi parlait Zarathoustra de Nietzsche.

**Nom 3 : Schopenhauer** (trouvé à la brique 1) — briques : volonté + pessimisme + caniche

- volonté → *Arthur Schopenhauer* ✓ — Le monde comme volonté et comme représentation.

**Nom 4 : Heidegger** (trouvé à la brique 1) — briques : Dasein + Forêt-Noire + être

- Dasein → *Martin Heidegger* ✓ — Le Dasein est un concept de Heidegger.

### np-338 : Maréchaux d'Empire

**Nom 1 : Ney** (trouvé à la brique 1) — briques : braves + Moskova + fusillé

- braves → *Michel Ney* ✓ — Ney, le brave des braves.

**Nom 2 : Murat** (trouvé à la brique 1) — briques : cavalerie + Naples + Caroline

- cavalerie → *Joachim Murat* ✓ — Murat, maréchal de cavalerie.

**Nom 3 : Davout** (trouvé à la brique 1) — briques : Auerstaedt + Eckmühl + fer

- Auerstaedt → *Louis Davout* ✓ — Davout, duc d'Auerstaedt.

**Nom 4 : Lannes** (trouvé à la brique 1) — briques : Montebello + Essling + Roland

- Montebello → *Jean Lannes* ✓ — Lannes, duc de Montebello.

### np-345 : Dieux nordiques

**Nom 1 : Odin** (trouvé à la brique 1) — briques : corbeaux + Walhalla + Sleipnir

- corbeaux → *Odin* ✓ — Les corbeaux Huginn et Muninn accompagnent Odin.

**Nom 2 : Thor** (trouvé à la brique 1) — briques : marteau + tonnerre + Mjöllnir

- marteau → *Thor* ✓ — Le marteau est l'attribut de Thor.

**Nom 3 : Loki** (trouvé à la brique 1) — briques : ruse + Baldr + serpent

- ruse → *Loki* ✓ — Dieu de la ruse chez les Nordiques.

**Nom 4 : Freyja** (trouvé à la brique 1) — briques : chats + amour + Vanes

- chats → *Freyja* ✓ — Le char de Freyja est tiré par des chats.

### np-349 : Héros de bande dessinée réaliste

**Nom 1 : Blake** (trouvé à la brique 1) — briques : Mortimer + espadon + Jacobs

- Mortimer → *Francis Blake* ✓ — Mortimer est le compagnon de Blake dans la BD.

**Nom 2 : Corto Maltese** (trouvé à la brique 1) — briques : Pratt + Venise + marin

- Pratt → *Corto Maltese* ✓ — Hugo Pratt a créé Corto Maltese.

**Nom 3 : Valérian** (trouvé à la brique 1) — briques : Laureline + Mézières + spatio-temporel

- Laureline → *Valérian* ✓ — Valérian et Laureline.

**Nom 4 : Blueberry** (trouvé à la brique 1) — briques : Giraud + lieutenant + Ouest

- Giraud → *Blueberry* ✓ — Jean Giraud a dessiné Blueberry.

### np-403 : Grandes villes du monde

**Nom 1 : New York** (trouvé à la brique 1) — briques : Manhattan + gratte-ciel + Big Apple

- Manhattan → *New York* ✓ — Manhattan est un quartier de New York.

**Nom 2 : Londres** (trouvé à la brique 1) — briques : Tamise + Buckingham + bus rouge

- Tamise → *Londres* ✓ — La Tamise traverse Londres.

**Nom 3 : Rio de Janeiro** (trouvé à la brique 1) — briques : Copacabana + Corcovado + carnaval

- Copacabana → *Rio de Janeiro* ✓ — Copacabana est une plage de Rio.

**Nom 4 : Venise** (trouvé à la brique 1) — briques : gondoles + canaux + doges

- gondoles → *Venise* ✓ — Les gondoles de Venise.

### np-420 : Champions de tennis

**Nom 1 : Roger Federer** (trouvé à la brique 1) — briques : Bâle + élégance + Wimbledon

- Bâle → *Roger Federer* ✓ — Bâle est la ville natale de Federer.

**Nom 2 : Rafael Nadal** (trouvé à la brique 1) — briques : Majorque + terre battue + Roland-Garros

- Majorque → *Rafael Nadal* ✓ — Nadal est de Majorque.

**Nom 3 : Yannick Noah** (trouvé à la brique 1) — briques : dreadlocks + Saga Africa + Joakim

- dreadlocks → *Yannick Noah* ✓ — Dreadlocks de Noah.

**Nom 4 : Serena Williams** (trouvé à la brique 1) — briques : Venus + sœur + Américaine

- Venus → *Serena Williams* ✓ — Venus a pour sœur Serena.

### np-424 : Actrices françaises

**Nom 1 : Brigitte Bardot** (trouvé à la brique 1) — briques : BB + Saint-Tropez + animaux

- BB → *Brigitte Bardot* ✓ — BB sont les initiales de Brigitte Bardot.

**Nom 2 : Catherine Deneuve** (trouvé à la brique 1) — briques : Parapluies + Cherbourg + Belle de jour

- Parapluies → *Catherine Deneuve* ✓ — Les Parapluies de Cherbourg avec Deneuve.

**Nom 3 : Audrey Tautou** (trouvé à la brique 1) — briques : Amélie Poulain + Da Vinci Code + Coco

- Amélie Poulain → *Audrey Tautou* ✓ — Elle joue Amélie Poulain.

**Nom 4 : Marion Cotillard** (trouvé à la brique 1) — briques : Piaf + oscar + Taxi

- Piaf → *Marion Cotillard* ✓ — Elle a joué Piaf dans La Môme.

### np-432 : Marques gourmandes

**Nom 1 : Coca-Cola** (trouvé à la brique 2) — briques : soda + bouteille + recette secrète

- soda → *Orangina* ✗ — Marque de soda gourmande.
- soda + bouteille → *Coca-Cola* ✓ — Soda en bouteille, Orangina refusé.

**Nom 2 : Nutella** (trouvé à la brique 1) — briques : pâte à tartiner + noisettes + Ferrero

- pâte à tartiner → *Nutella* ✓ — Pâte à tartiner célèbre.

**Nom 3 : Haribo** (trouvé à la brique 1) — briques : bonbons + Tagada + ours

- bonbons → *Haribo* ✓ — Marque de bonbons.

**Nom 4 : Danone** (trouvé à la brique 1) — briques : yaourt + Actimel + Danette

- yaourt → *Danone* ✓ — Marque de yaourt.

### np-434 : Outre-mer français

**Nom 1 : Martinique** (trouvé à la brique 1) — briques : Fort-de-France + Madinina + montagne Pelée

- Fort-de-France → *Martinique* ✓ — Fort-de-France est le chef-lieu de la Martinique.

**Nom 2 : La Réunion** (trouvé à la brique 1) — briques : piton de la Fournaise + océan Indien + Saint-Denis

- piton de la Fournaise → *La Réunion* ✓ — Le piton de la Fournaise est à La Réunion.

**Nom 3 : Tahiti** (trouvé à la brique 2) — briques : vahiné + Polynésie + Papeete

- vahiné → *Polynésie française* ✗ — Vahiné est une femme tahitienne ; collectivité de Polynésie.
- vahiné + Polynésie → *Tahiti* ✓ — Vahiné et Polynésie : Tahiti, Polynésie française refusée.

**Nom 4 : Guyane** (trouvé à la brique 1) — briques : Kourou + fusée + Cayenne

- Kourou → *Guyane* ✓ — Kourou est en Guyane.

### np-437 : Mers et océans

**Nom 1 : Méditerranée** (trouvé à la brique 1) — briques : Grande Bleue + Corse + Marseille

- Grande Bleue → *Méditerranée* ✓ — La Grande Bleue est la Méditerranée.

**Nom 2 : Pacifique** (trouvé à la brique 1) — briques : Hawaï + le plus grand + Polynésie

- Hawaï → *Pacifique* ✓ — Hawaï est dans l'océan Pacifique.

**Nom 3 : Manche** (trouvé à la brique 1) — briques : tunnel + Calais + Douvres

- tunnel → *Manche* ✓ — Le tunnel sous la Manche.

**Nom 4 : Mer Morte** (trouvé à la brique 1) — briques : sel + flotter + Israël

- sel → *Mer Morte* ✓ — Mer très salée.

### np-441 : Personnages de Star Wars

**Nom 1 : Dark Vador** (trouvé à la brique 1) — briques : masque + respiration + Empire

- masque → *Dark Vador* ✓ — Le masque évoque Dark Vador.

**Nom 2 : Yoda** (trouvé à la brique 1) — briques : petit + oreilles pointues + maître Jedi

- petit → *Yoda* ✓ — Petit maître jedi : Yoda.

**Nom 3 : Chewbacca** (trouvé à la brique 1) — briques : Wookiee + poils + Han Solo

- Wookiee → *Chewbacca* ✓ — Chewbacca est un Wookiee.

**Nom 4 : Luke Skywalker** (trouvé à la brique 1) — briques : sabre laser + Leia + Tatooine

- sabre laser → *Luke Skywalker* ✓ — Le sabre laser évoque Luke Skywalker.

### np-448 : Présidents de la République

**Nom 1 : Charles de Gaulle** (trouvé à la brique 1) — briques : croix de Lorraine + appel + Colombey

- croix de Lorraine → *Charles de Gaulle* ✓ — La croix de Lorraine est associée à de Gaulle.

**Nom 2 : Jacques Chirac** (trouvé à la brique 1) — briques : Corrèze + pommes + Bernadette

- Corrèze → *Jacques Chirac* ✓ — Chirac, élu de Corrèze.

**Nom 3 : François Mitterrand** (trouvé à la brique 1) — briques : rose + Jarnac + Mazarine

- rose → *François Mitterrand* ✓ — La rose est l'emblème socialiste de Mitterrand.

**Nom 4 : Emmanuel Macron** (trouvé à la brique 1) — briques : Brigitte + En marche + Amiens

- Brigitte → *Emmanuel Macron* ✓ — Brigitte est l'épouse de Macron.

### np-449 : Présidents américains

**Nom 1 : Abraham Lincoln** (trouvé à la brique 1) — briques : esclavage + haut-de-forme + Gettysburg

- esclavage → *Abraham Lincoln* ✓ — Lincoln a aboli l'esclavage.

**Nom 2 : John F. Kennedy** (trouvé à la brique 2) — briques : Dallas + Jackie + Cuba

- Dallas → *John Fitzgerald Kennedy* ✗ — Kennedy fut assassiné à Dallas.
- Dallas (« Complétez ») → *Lyndon Johnson* ✗ — Kennedy refusé ; à Dallas, Johnson prête serment.
- Dallas + Jackie → *John F. Kennedy* ✓ — Dallas et Jackie désignent Kennedy ; autre graphie du nom.

**Nom 3 : George Washington** (trouvé à la brique 1) — briques : premier + dollar + cerisier

- premier → *George Washington* ✓ — Premier président américain.

**Nom 4 : Barack Obama** (trouvé à la brique 1) — briques : Michelle + Hawaï + Yes we can

- Michelle → *Barack Obama* ✓ — Michelle est l'épouse de Barack Obama.

### np-501 : Opéras de Verdi

**Nom 1 : Aïda** (trouvé à la brique 1) — briques : Égypte + Radamès + marche triomphale

- Égypte → *Aïda* ✓ — Opéra de Verdi se déroulant en Égypte.

**Nom 2 : Rigoletto** (trouvé à la brique 1) — briques : bouffon + Mantoue + bossu

- bouffon → *Rigoletto* ✓ — Le bouffon de Verdi est Rigoletto.

**Nom 3 : Nabucco** (trouvé à la brique 1) — briques : Babylone + Hébreux + chœur des esclaves

- Babylone → *Nabucco* ✓ — Babylone, opéra de Verdi Nabucco.

**Nom 4 : Le Trouvère** (trouvé à la brique 1) — briques : gitane + Azucena + chœur des enclumes

- gitane → *Le Trouvère* ✓ — Gitane Azucena dans Il Trovatore.

### np-505 : Fauves et cubistes

**Nom 1 : Matisse** (trouvé à la brique 1) — briques : odalisques + Nice + papiers découpés

- odalisques → *Henri Matisse* ✓ — Matisse a peint des odalisques.

**Nom 2 : Braque** (trouvé à la brique 1) — briques : Estaque + oiseaux + papiers collés

- Estaque → *Georges Braque* ✓ — Braque a peint à l'Estaque.

**Nom 3 : Derain** (trouvé à la brique 1) — briques : Collioure + Chatou + Tamise

- Collioure → *André Derain* ✓ — Derain a peint à Collioure avec Matisse.

**Nom 4 : Fernand Léger** (trouvé à la brique 1) — briques : tubes + Biot + Constructeurs

- tubes → *Fernand Léger* ✓ — Le tubisme de Léger.

### np-511 : Moralistes et fabulistes du Grand Siècle

**Nom 1 : La Fontaine** (trouvé à la brique 1) — briques : Château-Thierry + Fables + Le Corbeau et le Renard

- Château-Thierry → *Jean de La Fontaine* ✓ — La Fontaine est né à Château-Thierry.

**Nom 2 : La Bruyère** (trouvé à la brique 1) — briques : Théophraste + Condé + Les Caractères

- Théophraste → *Jean de La Bruyère* ✓ — La Bruyère a traduit Théophraste.

**Nom 3 : La Rochefoucauld** (trouvé à la brique 2) — briques : Fronde + amour-propre + Maximes

- Fronde → *Cardinal de Retz* ✗ — Le cardinal de Retz, acteur de la Fronde et mémorialiste.
- Fronde + amour-propre → *La Rochefoucauld* ✓ — Frondeur et auteur des Maximes sur l'amour-propre.

**Nom 4 : Boileau** (trouvé à la brique 1) — briques : Lutrin + Satires + Art poétique

- Lutrin → *Nicolas Boileau* ✓ — Le Lutrin est de Boileau.

### np-524 : Héroïnes de la mythologie grecque

**Nom 1 : Pénélope** (trouvé à la brique 1) — briques : Ithaque + prétendants + tapisserie

- Ithaque → *Pénélope* ✓ — Pénélope attend Ulysse à Ithaque.

**Nom 2 : Eurydice** (trouvé à la brique 1) — briques : serpent + Enfers + Orphée

- serpent → *Eurydice* ✓ — Eurydice est morte d'une morsure de serpent.

**Nom 3 : Pandore** (trouvé à la brique 1) — briques : Épiméthée + espérance + boîte

- Épiméthée → *Pandore* ✓ — Épiméthée a épousé Pandore.

**Nom 4 : Hélène** (trouvé à la brique 1) — briques : Sparte + Ménélas + Pâris

- Sparte → *Hélène* ✓ — Hélène de Sparte.

### np-528 : Ministres de l'Ancien Régime

**Nom 1 : Mazarin** (trouvé à la brique 1) — briques : Italien + cardinal + Fronde

- Italien → *Jules Mazarin* ✓ — Mazarin, ministre d'origine italienne.

**Nom 2 : Colbert** (trouvé à la brique 1) — briques : manufactures + marine + Fouquet

- manufactures → *Jean-Baptiste Colbert* ✓ — Colbert a développé les manufactures.

**Nom 3 : Sully** (trouvé à la brique 1) — briques : Rosny + labourage + pâturage

- Rosny → *Sully* ✓ — Sully était baron de Rosny.

**Nom 4 : Necker** (trouvé à la brique 1) — briques : Genève + Madame de Staël + Compte rendu au roi

- Genève → *Jacques Necker* ✓ — Necker, banquier genevois ministre de Louis XVI.

### np-534 : Pionniers de l'aviation

**Nom 1 : Louis Blériot** (trouvé à la brique 1) — briques : monoplan + Douvres + traversée de la Manche

- monoplan → *Louis Blériot* ✓ — Blériot a traversé la Manche en monoplan.

**Nom 2 : Saint-Exupéry** (trouvé à la brique 1) — briques : Courrier sud + Vol de nuit + Petit Prince

- Courrier sud → *Antoine de Saint-Exupéry* ✓ — Courrier sud est son roman.

**Nom 3 : Jean Mermoz** (trouvé à la brique 1) — briques : Aéropostale + Atlantique Sud + Croix-du-Sud

- Aéropostale → *Jean Mermoz* ✓ — Mermoz, pilote de l'Aéropostale.

**Nom 4 : Roland Garros** (trouvé à la brique 1) — briques : Méditerranée + Bizerte + stade

- Méditerranée → *Roland Garros* ✓ — Premier à traverser la Méditerranée en avion.

### np-542 : Groupes de rock britanniques

**Nom 1 : Led Zeppelin** (trouvé à la brique 1) — briques : dirigeable + Robert Plant + Stairway to Heaven

- dirigeable → *Led Zeppelin* ✓ — Zeppelin est un dirigeable.

**Nom 2 : The Who** (trouvé à la brique 1) — briques : Townshend + guitares cassées + Tommy

- Townshend → *The Who* ✓ — Pete Townshend est guitariste des Who.

**Nom 3 : Pink Floyd** (trouvé à la brique 1) — briques : prisme + The Wall + Dark Side of the Moon

- prisme → *Pink Floyd* ✓ — Le prisme de The Dark Side of the Moon.

**Nom 4 : Oasis** (trouvé à la brique 1) — briques : Manchester + Gallagher + Wonderwall

- Manchester → *Oasis* ✓ — Groupe de Manchester.

### np-549 : Villes ibériques

**Nom 1 : Séville** (trouvé à la brique 1) — briques : Andalousie + Giralda + Guadalquivir

- Andalousie → *Séville* ✓ — Séville est une grande ville d'Andalousie.

**Nom 2 : Grenade** (trouvé à la brique 1) — briques : Boabdil + Sierra Nevada + Albaicín

- Boabdil → *Grenade* ✓ — Boabdil, dernier roi de Grenade.

**Nom 3 : Barcelone** (trouvé à la brique 1) — briques : Ramblas + Gaudí + Sagrada Família

- Ramblas → *Barcelone* ✓ — Les Ramblas sont à Barcelone.

**Nom 4 : Porto** (trouvé à la brique 1) — briques : vin + Ribeira + Douro

- vin → *Porto* ✓ — Ville du vin de Porto.
