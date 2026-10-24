# Test à l'aveugle de Syno, joué comme en partie (niveau @tests-aveugle/echantillon-10-par-niveau.json)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-003 | facile | Compagnon des jours gris | ciel (1/2), bouclier (1/3), baleines (1/2), vent (1/2), train (2/3) | 7 | ✓ | 13 |
| e-006 | facile | Le dormeur | siècles (2/2), feu (1/2), lave (1/2), ~~ville~~, cratère (1/3) | 0 | ✓ | 5 |
| e-007 | facile | Il passe chaque matin | tournée (1/3), sacoche (1/3), lettres (2/2), boîte (1/2), vélo (1/2) | 7 | ✓ | 13 |
| e-008 | facile | Or liquide | ~~ruche~~, abeilles (1/2), nectar (1/2), sucré (1/2), ~~tranche~~ | 0 | ✓ | 4 |
| e-009 | facile | Septième art | ~~salle~~, écran (1/2), réalisateur (1/3), scène (2/3), actrice (1/2) | 0 | ✓ | 5 |
| e-204 | moyen | Effacé, pas oublié | parchemin (1/2), moine (1/3), texte (1/2), rayons (1/2), écritures (1/3) | 8 | ✓ | 14 |
| e-304 | difficile | Faux dévot | masque (2/2), duplicité (2/3), ~~parangon~~, simagrées (2/3), crocodile (1/2) | 0 | ✓ | 5 |
| e-305 | difficile | Le pardon des grands | clémence (1/2), félon (2/3), magnanimité (1/3), rancœur (3/3), sanction (1/2) | 5 | ✓ | 11 |
| e-308 | difficile | Raisonnement trompeur | ~~rigoureux~~, faille (1/2), ~~prémisses~~, ~~conclusion~~, piège (1/2) | 0 | ✓ | 3 |
| e-325 | difficile | Le désert intérieur | anachorète (2/3), jeûne (2/2), ~~abstinence~~, discipline (2/2), purification (1/3) | 0 | ✓ | 5 |
| e-326 | difficile | La lanterne de Diogène | tonneau (1/2), ~~conventions~~, argent (1/2), ~~impudence~~, notables (2/2) | 0 | ✓ | 4 |
| e-329 | difficile | Bernin et Borromini | profusion (1/2), volutes (1/2), ~~torses~~, trompe-l'œil (1/2), ~~ostentation~~ | 0 | ✓ | 4 |
| e-331 | difficile | Brebis égarées | dogme (2/2), excommunication (1/3), inquisition (1/2), dissidents (2/3), bûcher (1/2) | 6 | ✓ | 12 |
| e-335 | difficile | Querelle des images | empereur (1/2), icônes (1/2), frondeur (2/3), bousculer (2/2), ~~dogmes~~ | 0 | ✓ | 5 |
| e-339 | difficile | Héraclès au marais | monstre (2/2), ~~multiples~~, ~~décapitation~~, cautériser (1/3), bout (1/2) | 0 | ✓ | 4 |
| e-341 | difficile | Coup de dés | destin (2/2), chance (1/2), fortune (1/2), étoile (1/2), ~~poisse~~ | 0 | ✗ (le jeu de hasard, l'aléa, la malchance) | 4 |
| e-403 | facile | Pôle Nord de la cuisine | ~~armoire~~, ~~frais~~, beurre (1/2), ~~yaourts~~, ~~jambon~~ | 0 | ✓ | 2 |
| e-428 | facile | Tchou-tchou ! | quai (2/2), voie (1/3), wagon (1/3), contrôleur (1/3), billets (1/2) | 7 | ✓ | 13 |
| e-430 | facile | Hotte sur le dos | traîneau (1/3), rennes (1/2), cheminée (1/3), cadeaux (1/2), sapin (1/3) | 8 | ✓ | 14 |
| e-435 | facile | Petite reine | ~~selle~~, ~~guidon~~, ~~pédales~~, équilibre (1/2), ~~chambre~~ | 0 | ✓ | 2 |
| e-437 | facile | Au-dessus des nuages | aéroport (1/2), valises (1/2), pilote (1/2), piste (1/3), hôtesse (1/2) | 8 | ✗ (un voyage en avion, un aéroport, un vol) | 13 |
| e-503 | moyen | Le cerf-volant de Benjamin | faîte (2/3), tige (2/2), foudre (1/2), ~~câble~~, incendie (2/3) | 0 | ✓ | 5 |
| e-506 | moyen | Peindre dans le frais | pigments (1/2), enduit (1/2), humide (1/3), échafaudage (2/3), plafond (1/2) | 7 | ✓ | 13 |
| e-509 | moyen | Embouchure en éventail | ~~fleuve~~, ~~bras~~, crues (1/2), alluvions (1/2), triangle (2/2) | 0 | ✗ (l'embouchure, un delta fluvial, le Nil) | 3 |
| e-515 | moyen | Le cheval de fer | foyer (1/2), pelle (1/2), charbon (1/2), ~~wagons~~, rails (1/3) | 0 | ✓ | 5 |
| e-520 | moyen | La Chevauchée fantastique | ~~diligence~~, ~~shérif~~, flèches (2/2), ~~duel~~, revolver (2/2) | 0 | ✓ | 3 |
| e-530 | moyen | Un plat qui se mange froid | ~~affront~~, ressentiment (2/2), représailles (1/3), implacable (1/3), châtiment (1/3) | 0 | ✓ | 5 |
| e-533 | moyen | Salle des pas perdus | prévenu (1/2), greffier (1/3), ~~réquisitoire~~, ~~jurés~~, verdict (1/2) | 0 | ✓ | 4 |
| e-536 | moyen | Je sens la chair fraîche | bottes (1/2), colosse (2/2), dévorer (1/2), couronnes (1/2), cailloux (2/2) | 6 | ✗ (l'Ogre du Petit Poucet, un géant, un colosse) | 11 |
| e-541 | moyen | Le comte des Carpates | crocs (1/2), cercueil (1/2), ail (1/2), ~~aube~~, pieu (1/2) | 0 | ✓ | 5 |

Score moyen : 7.0 sur 30 énigme(s).

Mots trouvés : 84 à la brique 1, 29 à la brique 2, 1 à la brique 3, 36 non trouvés.

## Noms Propres

| Liste | Niveau | Thème | Noms (brique où trouvé) | Points |
|---|---|---|---|---|
| np-002 | facile | Écrivains français | Victor Hugo (1), Molière (1), Émile Zola (1), Jules Verne (1) | 4/4 |
| np-103 | moyen | Villes de France | Strasbourg (1), Marseille (1), Lille (1), Bordeaux (1) | 4/4 |
| np-204 | difficile | Écrivains russes | Tolstoï (1), Dostoïevski (1), Tchekhov (1), Pouchkine (1) | 4/4 |
| np-205 | moyen | Savants de l'Antiquité | Archimède (1), Euclide (1), Pythagore (1), Hippocrate (1) | 4/4 |
| np-307 | difficile | Écrivains des Lumières | Diderot (1), Montesquieu (1), Marivaux (2), Beaumarchais (1) | 4/4 |
| np-316 | difficile | Empereurs romains | Hadrien (1), Caligula (1), Néron (1), Marc Aurèle (1) | 4/4 |
| np-322 | difficile | Personnages de Shakespeare | Hamlet (1), Othello (1), Falstaff (1), Prospero (1) | 4/4 |
| np-327 | difficile | Grands de la chanson | Brassens (1), Brel (1), Ferré (2), ~~Barbara~~ | 3/4 |
| np-328 | difficile | Peintres espagnols | Goya (1), Vélasquez (1), Zurbarán (1), Le Greco (1) | 4/4 |
| np-331 | difficile | Philosophes allemands | Hegel (1), Nietzsche (1), Schopenhauer (1), Heidegger (1) | 4/4 |
| np-338 | difficile | Maréchaux d'Empire | Ney (1), Murat (1), Davout (1), Lannes (1) | 4/4 |
| np-345 | difficile | Dieux nordiques | Odin (1), Thor (1), Loki (1), Freyja (1) | 4/4 |
| np-349 | difficile | Héros de bande dessinée réaliste | Blake (1), Corto Maltese (2), Valérian (1), Blueberry (2) | 4/4 |
| np-403 | facile | Grandes villes du monde | New York (1), Londres (1), Rio de Janeiro (1), Venise (1) | 4/4 |
| np-420 | facile | Champions de tennis | Roger Federer (1), Rafael Nadal (1), Yannick Noah (1), Serena Williams (1) | 4/4 |
| np-424 | facile | Actrices françaises | Brigitte Bardot (1), Catherine Deneuve (1), Audrey Tautou (1), Marion Cotillard (1) | 4/4 |
| np-432 | facile | Marques gourmandes | Coca-Cola (1), Nutella (1), Haribo (1), Danone (1) | 4/4 |
| np-434 | facile | Outre-mer français | Martinique (1), La Réunion (1), Tahiti (1), Guyane (1) | 4/4 |
| np-437 | facile | Mers et océans | Méditerranée (1), Pacifique (1), Manche (1), Mer Morte (1) | 4/4 |
| np-441 | facile | Personnages de Star Wars | Dark Vador (1), Yoda (1), Chewbacca (1), Luke Skywalker (1) | 4/4 |
| np-448 | facile | Présidents de la République | Charles de Gaulle (1), Jacques Chirac (2), François Mitterrand (1), Emmanuel Macron (1) | 4/4 |
| np-449 | facile | Présidents américains | Abraham Lincoln (1), ~~John F. Kennedy~~, George Washington (1), Barack Obama (1) | 3/4 |
| np-501 | moyen | Opéras de Verdi | Aïda (1), Rigoletto (1), Nabucco (1), Le Trouvère (1) | 4/4 |
| np-505 | moyen | Fauves et cubistes | Matisse (1), Braque (1), Derain (1), Fernand Léger (2) | 4/4 |
| np-511 | moyen | Moralistes et fabulistes du Grand Siècle | La Fontaine (1), La Bruyère (1), La Rochefoucauld (1), Boileau (1) | 4/4 |
| np-524 | moyen | Héroïnes de la mythologie grecque | Pénélope (1), Eurydice (3), Pandore (1), Hélène (1) | 4/4 |
| np-528 | moyen | Ministres de l'Ancien Régime | Mazarin (1), Colbert (1), Sully (1), Necker (1) | 4/4 |
| np-534 | moyen | Pionniers de l'aviation | Louis Blériot (1), Saint-Exupéry (1), Jean Mermoz (1), Roland Garros (1) | 4/4 |
| np-542 | moyen | Groupes de rock britanniques | Led Zeppelin (1), The Who (1), Pink Floyd (1), Oasis (1) | 4/4 |
| np-549 | moyen | Villes ibériques | Séville (1), Grenade (1), Barcelone (1), Porto (2) | 4/4 |

Noms trouvés : 118 sur 120.

## Raisonnement de Syno

### e-003 : « Compagnon des jours gris » → un parapluie

**Mot 1 : ciel** (trouvé à la brique 1, mise 2) — piste : firmament + nuages

- firmament → *ciel* ✓ — Firmament est un synonyme de ciel, nom pour nom. Aucune autre brique ne précise le sens.

**Mot 2 : bouclier** (trouvé à la brique 1, mise 3) — piste : écu + épée + bouteille

- écu → *bouclier* ✓ — Écu se traduit par bouclier, nom pour nom. Le sens reste incertain, faute d'autre brique pour préciser.

**Mot 3 : baleines** (trouvé à la brique 1, mise 2) — piste : cétacés + haut

- cétacés → *baleine* ✓ — Ciel et bouclier sont trouvés, et cétacés désigne la baleine. Le mot cherché est donc baleine.

**Mot 4 : vent** (trouvé à la brique 1, mise 2) — piste : brise + acheter

- brise → *vent* ✓ — Ciel, bouclier et baleine sont trouvés, et la brise est un vent léger. Le mot cherché est vent.

**Mot 5 : train** (trouvé à la brique 2, mise 3) — piste : convoi + rails + accélérateur

- convoi → *flotte* ✗ — Ciel, bouclier, baleine et vent sont trouvés, et convoi désigne un groupe de navires qui voyagent ensemble. Flotte correspond au sens.
- convoi + rails → *train* ✓ — Ciel, bouclier, baleine et vent sont trouvés, flotte a été refusé, et convoi avec rails désigne le train.

**Solution : un parapluie** — texte découvert : « Je m'ouvre quand le ciel est menaçant ; je suis votre bouclier contre l'averse ; mes baleines plient par grand vent ; on m'oublie souvent dans le train. »

- *un parapluie* ✓ — Le texte décrit un objet qui s'ouvre contre l'averse, avec des baleines qui plient et qu'on oublie dans le train. C'est un parapluie.

### e-006 : « Le dormeur » → un volcan

**Mot 1 : siècles** (trouvé à la brique 2, mise 2) — piste : époques + terre

- époques → *âge* ✗ — Époques se traduit par âges, nom pluriel dans la forme. Le titre évoque le temps qui passe, ce qui est cohérent.
- époques + terre → *siècle* ✓ — Âge a été refusé, et époques suivi de terre évoque un long laps de temps sur la planète. Siècle est un synonyme d'époque.

**Mot 2 : feu** (trouvé à la brique 1, mise 2) — piste : flamme + beaucoup

- flamme → *feu* ✓ — Siècle est trouvé, et flamme est un synonyme de feu. Le dormeur se réveille pour retrouver la flamme du feu.

**Mot 3 : lave** (trouvé à la brique 1, mise 2) — piste : magma + ici

- magma → *lave* ✓ — Siècle et feu sont trouvés, et magma désigne la lave en fusion. Le mot cherché est lave.

**Mot 4 : ville** (non trouvé, mise 2) — piste : cité + mort

- cité → *Pompéi* ✗ — Siècle, feu et lave sont trouvés, et cité désigne Pompéi, ensevelie sous la lave du Vésuve.
- cité + mort → *nécropole* ✗ — Siècle, feu et lave sont trouvés, Pompéi a été refusé, et cité avec mort désigne une nécropole, ville des morts.

**Mot 5 : cratère** (trouvé à la brique 1, mise 3) — piste : bouche + Lune + grenouille

- bouche → *cratère* ✓ — Siècle, feu et lave sont trouvés, Pompéi et nécropole ont été refusés, et bouche avec le volcan désigne le cratère.

**Solution : un volcan** — texte découvert : « Je dors parfois pendant des siècles ; à mon réveil, je crache du feu et de la lave ; j'ai jadis enseveli une ____ romaine ; mon cratère fume au sommet. »

- *le Vésuve* ✗ — Le texte décrit un volcan qui s'éveille après des siècles, crache feu et lave et ensevelit une cité romaine. C'est le Vésuve.
- *un volcan* ✓ — Le texte décrit une créature qui dort des siècles, crache feu et lave et fume au sommet, sans nommer un volcan précis. Vésuve a été refusé, donc je propose le terme générique.

### e-007 : « Il passe chaque matin » → le facteur

**Mot 1 : tournée** (trouvé à la brique 1, mise 3) — piste : virée + concerts + rien

- virée → *tournée* ✓ — Virée est synonyme de tournée, et l'expression il passe chaque matin désigne une tournée régulière.

**Mot 2 : sacoche** (trouvé à la brique 1, mise 3) — piste : besace + cartable + propre

- besace → *sacoche* ✓ — La tournée est faite par le facteur, et la besace est une sacoche qu'il porte. Le mot cherché est donc sacoche.

**Mot 3 : lettres** (trouvé à la brique 2, mise 2) — piste : missives + beau

- missives → *courrier* ✗ — Tournée et sacoche sont trouvées, et missives désigne le courrier qu'apporte le facteur.
- missives + beau → *lettre* ✓ — Courrier n'a pas été accepté, et missives désigne les lettres que transporte le facteur. Beau ne précise pas davantage.

**Mot 4 : boîte** (trouvé à la brique 1, mise 2) — piste : coffret + manger

- coffret → *boîte* ✓ — Tournée, sacoche, courrier et lettre sont trouvés ou presque, et coffret désigne la boîte aux lettres où le facteur dépose le courrier.

**Mot 5 : vélo** (trouvé à la brique 1, mise 2) — piste : bicyclette + mensonge

- bicyclette → *vélo* ✓ — Tournée, sacoche, lettre et boîte sont trouvés, et bicyclette désigne le vélo du facteur.

**Solution : le facteur** — texte découvert : « Je fais ma tournée chaque matin ; ma sacoche est pleine de lettres ; je glisse le courrier dans la boîte ; jadis, je circulais à vélo. »

- *le facteur* ✓ — Le texte décrit un homme qui fait sa tournée, porte une sacoche de lettres et dépose le courrier, c'est le facteur.

### e-008 : « Or liquide » → le miel

**Mot 1 : ruche** (non trouvé, mise 3) — piste : nid + alvéoles + lisse

- nid → *miel* ✗ — Nid est associé au miel, produit de la ruche qui est un or liquide. Je n'ai qu'une brique, donc le choix reste fragile.
- nid + alvéoles → *rayon* ✗ — Miel a été refusé, et les alvéoles forment le rayon de la ruche. Nid et rayon s'accordent avec le thème de l'or liquide.
- nid + alvéoles + lisse → *gelée* ✗ — Miel et rayon ont été refusés, et les alvéoles, le nid et le lisse désignent la gelée produite dans la ruche. Gelée est le mot le plus proche.

**Mot 2 : abeilles** (trouvé à la brique 1, mise 2) — piste : bourdons + lendemain

- bourdons → *abeille* ✓ — Miel, rayon et gelée ont été refusés, et bourdons désigne les insectes de la ruche. Le mot cherché est abeille.

**Mot 3 : nectar** (trouvé à la brique 1, mise 2) — piste : ambroisie + tôt

- ambroisie → *nectar* ✓ — Miel, rayon et gelée ont été refusés, abeille est trouvée, et ambroisie désigne le nectar, liquide doré.

**Mot 4 : sucré** (trouvé à la brique 1, mise 2) — piste : doux + nord

- doux → *sucré* ✓ — Abeille et nectar sont trouvés, miel, rayon et gelée ont été refusés, et doux désigne le goût sucré.

**Mot 5 : tranche** (non trouvé, mise 2) — piste : rondelle + vingt-neuf

- rondelle → *cire* ✗ — Miel, rayon et gelée ont été refusés, abeille, nectar et sucré sont trouvés, et rondelle désigne la cire de la ruche.
- rondelle + vingt-neuf → *ruche* ✗ — Miel, rayon, gelée et cire ont été refusés, abeille, nectar et sucré sont trouvés, et rondelle avec vingt-neuf évoque la ruche et ses alvéoles.

**Solution : le miel** — texte découvert : « Je suis né dans une ____ ; les abeilles m'ont fabriqué avec le nectar des fleurs ; je suis sucré et doré ; on m'étale sur une ____ de pain. »

- *un produit de la ruche* ✗ — Le texte décrit une substance née dans une ruche, fabriquée par les abeilles avec le nectar, sucrée et dorée. Miel a déjà été refusé comme mot, donc je la désigne par sa catégorie.
- *le miel* ✓ — Le texte décrit une substance faite par les abeilles avec le nectar, sucrée et dorée, qu'on étale sur du pain. C'est le miel.

### e-009 : « Septième art » → le cinéma

**Mot 1 : salle** (non trouvé, mise 2) — piste : pièce + propre

- pièce → *film* ✗ — Pièce désigne ici une œuvre, et le septième art est le cinéma, donc le mot est film.
- pièce + propre → *œuvre* ✗ — Pièce et propre sont deux briques qui désignent une création, et film a été refusé. Œuvre est le mot le plus proche.

**Mot 2 : écran** (trouvé à la brique 1, mise 2) — piste : moniteur + boulon

- moniteur → *écran* ✓ — Film et œuvre ont été refusés, et moniteur désigne l'écran de cinéma. Écran correspond au septième art.

**Mot 3 : réalisateur** (trouvé à la brique 1, mise 3) — piste : Truffaut + producteur + do

- Truffaut → *réalisateur* ✓ — Film et œuvre ont été refusés, écran est trouvé, et Truffaut désigne un réalisateur de cinéma.

**Mot 4 : scène** (trouvé à la brique 2, mise 3) — piste : séquence + théâtre + six

- séquence → *plan* ✗ — Film et œuvre ont été refusés, écran et réalisateur sont trouvés, et séquence désigne le plan de cinéma.
- séquence + théâtre → *scène* ✓ — Écran et réalisateur sont trouvés, plan a été refusé, et séquence avec théâtre désigne la scène.

**Mot 5 : actrice** (trouvé à la brique 1, mise 2) — piste : comédienne + désaccord

- comédienne → *actrice* ✓ — Écran, réalisateur et scène sont trouvés, film et œuvre ont été refusés, et comédienne désigne l'actrice.

**Solution : le cinéma** — texte découvert : « Dans la ____ obscure, on fixe le grand écran ; le réalisateur crie « Moteur ! » ; une scène jouée par une actrice fait pleurer le public. »

- *le cinéma* ✓ — Le texte décrit la salle obscure, le grand écran, le réalisateur et une actrice qui joue une scène : c'est le cinéma, le septième art.

### e-204 : « Effacé, pas oublié » → un palimpseste

**Mot 1 : parchemin** (trouvé à la brique 1, mise 2) — piste : vélin + papyrus

- vélin → *parchemin* ✓ — Vélin est un synonyme de parchemin, nom pour nom, et le titre évoque un texte effacé.

**Mot 2 : moine** (trouvé à la brique 1, mise 3) — piste : religieux + abbaye + toi

- religieux → *moine* ✓ — Parchemin est trouvé, et religieux désigne le copiste moine qui écrivait sur le vélin. Moine correspond à la brique religieux.

**Mot 3 : texte** (trouvé à la brique 1, mise 2) — piste : énoncé + paragraphe

- énoncé → *texte* ✓ — Parchemin et moine sont trouvés, et énoncé est un synonyme de texte. Le mot cherché est donc texte.

**Mot 4 : rayons** (trouvé à la brique 1, mise 2) — piste : faisceaux + Röntgen

- faisceaux → *rayons* ✓ — Parchemin, moine et texte sont trouvés, et les faisceaux désignent les rayons qui révèlent le texte effacé.

**Mot 5 : écritures** (trouvé à la brique 1, mise 3) — piste : graphies + Champollion + boulon

- graphies → *écriture* ✓ — Parchemin, moine, texte et rayons sont trouvés, et graphies désigne les écritures. Le mot cherché est écriture.

**Solution : un palimpseste** — texte découvert : « Sur ce parchemin ancien, un moine gratta le premier texte pour en copier un autre ; mais les rayons modernes révèlent les écritures effacées. »

- *un palimpseste* ✓ — Le texte décrit un parchemin réutilisé dont l'écriture effacée réapparaît, ce qui définit le palimpseste.

### e-304 : « Faux dévot » → l'hypocrisie

**Mot 1 : masque** (trouvé à la brique 2, mise 2) — piste : loup + carnaval

- loup → *agneau* ✗ — Loup est le contraire habituel d'agneau, et un faux dévot est un loup déguisé en agneau.
- loup + carnaval → *masque* ✓ — Agneau a été refusé, et loup désigne aussi un masque, comme le carnaval. Masque convient aux deux briques.

**Mot 2 : duplicité** (trouvé à la brique 2, mise 3) — piste : fausseté + Janus + naïf

- fausseté → *hypocrisie* ✗ — Agneau a été refusé, masque est trouvé, et fausseté désigne l'hypocrisie du faux dévot. Hypocrisie correspond au sens.
- fausseté + Janus → *duplicité* ✓ — Masque est trouvé, hypocrisie a été refusée, et fausseté et Janus désignent la duplicité.

**Mot 3 : parangon** (non trouvé, mise 3) — piste : modèle + vertu + père

- modèle → *exemple* ✗ — Masque et duplicité sont trouvés, et modèle désigne l'exemple que donne un faux dévot. Exemple correspond au sens.
- modèle + vertu → *apparence* ✗ — Masque et duplicité sont trouvés, exemple a été refusé, et modèle avec vertu désigne l'apparence trompeuse du faux dévot.
- modèle + vertu + père → *saint* ✗ — Masque et duplicité sont trouvés, exemple et apparence ont été refusés, et modèle, vertu et père désignent le saint, figure de dévotion.

**Mot 4 : simagrées** (trouvé à la brique 2, mise 3) — piste : minauderies + grimaces + sommet

- minauderies → *affectation* ✗ — Masque et duplicité sont trouvés, exemple, apparence et saint ont été refusés, et minauderies désigne l'affectation du faux dévot.
- minauderies + grimaces → *simagrées* ✓ — Masque, duplicité et hypocrisie sont trouvés, exemple, apparence et saint ont été refusés, et minauderies avec grimaces désigne les simagrées du faux dévot.

**Mot 5 : crocodile** (trouvé à la brique 1, mise 2) — piste : caïman + Nil

- caïman → *crocodile* ✓ — Masque, duplicité, affectation et simagrées sont trouvés, exemple, apparence et saint ont été refusés, et caïman désigne le crocodile, dont les larmes passent pour hypocrites.

**Solution : l'hypocrisie** — texte découvert : « Sous le masque de la vertu se cache la duplicité ; Tartuffe en est le ____ ; ses simagrées sont des larmes de crocodile. »

- *un hypocrite* ✓ — Le texte décrit un homme qui cache la duplicité sous le masque de la vertu, avec des larmes de crocodile : c'est un hypocrite, comme Tartuffe.

### e-305 : « Le pardon des grands » → la mansuétude

**Mot 1 : clémence** (trouvé à la brique 1, mise 2) — piste : indulgence + sévérité

- indulgence → *clémence* ✓ — Indulgence est synonyme de clémence, nom pour nom, et correspond au pardon accordé par les puissants.

**Mot 2 : félon** (trouvé à la brique 2, mise 3) — piste : traître + vassal + sorcière

- traître → *grâce* ✗ — Clémence est trouvée, et traître est le contraire de ce qu'on accorde par pardon. Grâce est le synonyme qui s'accorde avec le pardon des grands.
- traître + vassal → *félon* ✓ — Clémence est trouvée, grâce a été refusé, et traître et vassal désignent un félon. Félon convient aux deux briques.

**Mot 3 : magnanimité** (trouvé à la brique 1, mise 3) — piste : générosité + Auguste + nabab

- générosité → *magnanimité* ✓ — Clémence et félon sont trouvés, et générosité désigne la magnanimité des grands. Grâce a été refusé.

**Mot 4 : rancœur** (trouvé à la brique 3, mise 3) — piste : aigreur + fiel + file

- aigreur → *rancune* ✗ — Clémence, félon et magnanimité sont trouvés, et aigreur désigne la rancune, le contraire du pardon.
- aigreur + fiel → *venin* ✗ — Clémence, félon et magnanimité sont trouvés, rancune a été refusée, et aigreur avec fiel désigne le venin.
- aigreur + fiel + file → *rancœur* ✓ — Clémence, félon et magnanimité sont trouvés, rancune et venin ont été refusés, et aigreur, fiel et file désignent la rancœur.

**Mot 5 : sanction** (trouvé à la brique 1, mise 2) — piste : punition + avec

- punition → *sanction* ✓ — Clémence, félon, magnanimité et rancœur sont trouvés, et punition désigne la sanction que le pardon des grands refuse.

**Solution : la mansuétude** — texte découvert : « Le roi fit preuve de clémence envers le félon ; sa magnanimité désarma la rancœur des courtisans, qui attendaient une sanction exemplaire. »

- *le pardon royal* ✗ — Le texte décrit la clémence du roi envers le félon, qui désarme la rancœur des courtisans. C'est le pardon royal.
- *la mansuétude* ✓ — Le texte décrit la clémence royale envers un félon, une bonté qui désarme la rancœur. Le pardon royal a été refusé, donc je propose un synonyme plus précis.

### e-308 : « Raisonnement trompeur » → un sophisme

**Mot 1 : rigoureux** (non trouvé, mise 2) — piste : strict + hiver

- strict → *lâche* ✗ — Strict est le contraire de lâche, et un raisonnement lâche est un raisonnement trompeur. La brique écarte un sens plutôt que d'en ajouter un.
- strict + hiver → *captieux* ✗ — Lâche a été refusé, et strict écarte un sens rigoureux. Captieux qualifie un raisonnement trompeur, et hiver ne fournit pas plus de précision.

**Mot 2 : faille** (trouvé à la brique 1, mise 2) — piste : brèche + sismique

- brèche → *faille* ✓ — Lâche et captieux ont été refusés, et brèche désigne une faille dans le raisonnement. Faille est le mot qui correspond à la brique.

**Mot 3 : prémisses** (non trouvé, mise 3) — piste : postulats + syllogisme + accusé

- postulats → *axiomes* ✗ — Faille est trouvée, et postulats désigne les axiomes sur lesquels repose un raisonnement.
- postulats + syllogisme → *sophisme* ✗ — Faille est trouvée, axiomes a été refusé, et postulats avec syllogisme désignent un sophisme, raisonnement trompeur.
- postulats + syllogisme + accusé → *paralogisme* ✗ — Faille est trouvée, axiomes et sophisme ont été refusés, et postulats avec syllogisme désignent un paralogisme, raisonnement faux.

**Mot 4 : conclusion** (non trouvé, mise 2) — piste : déduction + cornichon

- déduction → *raisonnement* ✗ — Faille est trouvée, axiomes, sophisme et paralogisme ont été refusés, et déduction désigne le raisonnement.
- déduction + cornichon → *logique* ✗ — Faille est trouvée, raisonnement, axiomes, sophisme et paralogisme ont été refusés, et déduction avec cornichon désigne la logique.

**Mot 5 : piège** (trouvé à la brique 1, mise 2) — piste : traquenard + souris

- traquenard → *piège* ✓ — Faille est trouvée, axiomes, sophisme, paralogisme, raisonnement et logique ont été refusés, et traquenard désigne le piège.

**Solution : un sophisme** — texte découvert : « Ce raisonnement paraît ____, mais il cache une faille ; ses ____ sont vraies, sa ____ est fausse : c'est un piège déguisé. »

- *un sophisme* ✓ — Le texte décrit un raisonnement qui paraît valide, aux prémisses vraies et à la conclusion fausse, qui cache une faille : c'est un sophisme.

### e-325 : « Le désert intérieur » → l'ascèse

**Mot 1 : anachorète** (trouvé à la brique 2, mise 3) — piste : ermite + Thébaïde + boa

- ermite → *solitaire* ✗ — Ermite se rapproche de solitaire, nom pour nom, et le désert intérieur évoque l'isolement.
- ermite + Thébaïde → *anachorète* ✓ — Solitaire a été refusé, et Thébaïde désigne le désert d'Égypte où vivaient les ermites. Anachorète est le synonyme exact d'ermite.

**Mot 2 : jeûne** (trouvé à la brique 2, mise 2) — piste : festin + carême

- festin → *ripaille* ✗ — Anachorète est trouvé, et festin est le contraire de la vie ascétique de l'ermite. Ripaille désigne le festin excessif.
- festin + carême → *jeûne* ✓ — Anachorète est trouvé, ripaille a été refusée, et festin et carême sont opposés au jeûne de l'ermite.

**Mot 3 : abstinence** (non trouvé, mise 2) — piste : continence + manquant

- continence → *chasteté* ✗ — Anachorète et jeûne sont trouvés, ripaille a été refusée, et continence désigne la chasteté de l'ermite.
- continence + manquant → *privation* ✗ — Anachorète et jeûne sont trouvés, chasteté et ripaille ont été refusées, et continence avec manquant désigne la privation.

**Mot 4 : discipline** (trouvé à la brique 2, mise 2) — piste : rigueur + fouet

- rigueur → *austérité* ✗ — Anachorète et jeûne sont trouvés, chasteté et privation ont été refusées, et rigueur désigne l'austérité de l'ermite.
- rigueur + fouet → *discipline* ✓ — Anachorète et jeûne sont trouvés, austérité, chasteté et privation ont été refusées, et rigueur avec fouet désigne la discipline.

**Mot 5 : purification** (trouvé à la brique 1, mise 3) — piste : ablutions + encens + netteté

- ablutions → *purification* ✓ — Anachorète, jeûne et discipline sont trouvés, chasteté et privation ont été refusées, et ablutions désigne la purification.

**Solution : l'ascèse** — texte découvert : « L'anachorète se prive de tout : jeûne, ____ et veilles ; par cette discipline, il cherche la purification de l'âme. »

- *l'ascèse* ✓ — Le texte décrit la pratique de privation de l'anachorète, jeûne, veilles et discipline, qui vise la purification de l'âme. C'est l'ascèse.

### e-326 : « La lanterne de Diogène » → le cynisme

**Mot 1 : tonneau** (trouvé à la brique 1, mise 2) — piste : fût + vin

- fût → *tonneau* ✓ — Fût désigne un tonneau, et Diogène vivait dans un tonneau selon l'anecdote.

**Mot 2 : conventions** (non trouvé, mise 3) — piste : usages + Genève + invité

- usages → *coutume* ✗ — Tonneau est trouvé, et usages est un synonyme de coutume. Le mot cherché reste proche de la notion d'usage.
- usages + Genève → *mœurs* ✗ — Tonneau est trouvé, coutume a été refusé, et usages désigne les mœurs que Diogène remet en cause. Genève ne donne pas de précision supplémentaire.
- usages + Genève + invité → *hôte* ✗ — Tonneau est trouvé, coutume et mœurs ont été refusés, et invité avec usages et Genève désigne l'hôte.

**Mot 3 : argent** (trouvé à la brique 1, mise 2) — piste : fric + Harpagon

- fric → *argent* ✓ — Tonneau est trouvé, coutume, mœurs et hôte ont été refusés, et fric désigne l'argent. Diogène méprisait la richesse.

**Mot 4 : impudence** (non trouvé, mise 2) — piste : effronterie + taxe

- effronterie → *cynisme* ✗ — Tonneau et argent sont trouvés, coutume, mœurs et hôte ont été refusés, et effronterie désigne le cynisme de Diogène.
- effronterie + taxe → *impôt* ✗ — Tonneau et argent sont trouvés, coutume, mœurs, hôte et cynisme ont été refusés, et taxe avec effronterie désigne l'impôt.

**Mot 5 : notables** (trouvé à la brique 2, mise 2) — piste : dignitaires + bourgeois

- dignitaires → *puissants* ✗ — Tonneau et argent sont trouvés, coutume, mœurs, hôte, cynisme et impôt ont été refusés, et dignitaires désigne les puissants que Diogène méprise.
- dignitaires + bourgeois → *notables* ✓ — Tonneau et argent sont trouvés, coutume, mœurs, hôte, cynisme, impôt et puissants ont été refusés, et dignitaires avec bourgeois désigne les notables.

**Solution : le cynisme** — texte découvert : « Le philosophe vivait dans un tonneau ; il méprisait les ____ et l'argent ; son ____ provocante choquait les notables d'Athènes : quelle est sa doctrine ? »

- *le cynisme* ✓ — Le texte décrit un philosophe qui vit dans un tonneau, méprise les richesses et choque les notables. Sa doctrine est le cynisme.

### e-329 : « Bernin et Borromini » → le baroque

**Mot 1 : profusion** (trouvé à la brique 1, mise 2) — piste : abondance + élève

- abondance → *profusion* ✓ — Abondance est synonyme de profusion, nom pour nom. Le titre renvoie au baroque, mais le mot cherché reste le synonyme.

**Mot 2 : volutes** (trouvé à la brique 1, mise 2) — piste : spirales + fumée

- spirales → *volute* ✓ — Profusion est trouvé, et spirales désigne la forme des volutes baroques de Bernin et Borromini. Volute est le mot qui correspond à la brique.

**Mot 3 : torses** (non trouvé, mise 2) — piste : tordues + raison

- tordues → *salomoniques* ✗ — Profusion et volute sont trouvées, et tordues désigne les colonnes salomoniques du baroque. Salomonique est le qualificatif qui correspond à la brique.
- tordues + raison → *torsade* ✗ — Profusion et volute sont trouvées, salomoniques a été refusé, et tordues et raison désignent la torsade.

**Mot 4 : trompe-l'œil** (trouvé à la brique 1, mise 2) — piste : illusion + fresque

- illusion → *trompe-l'œil* ✓ — Profusion et volute sont trouvées, salomoniques et torsade ont été refusées, et illusion désigne le trompe-l'œil du baroque.

**Mot 5 : ostentation** (non trouvé, mise 2) — piste : exhibition + squelette

- exhibition → *exposition* ✗ — Profusion, volute et trompe-l'œil sont trouvés, et exhibition désigne l'exposition ostentatoire du baroque.
- exhibition + squelette → *charpente* ✗ — Profusion, volute et trompe-l'œil sont trouvés, salomoniques, torsade et exposition ont été refusés, et squelette avec exhibition désigne la charpente.

**Solution : le baroque** — texte découvert : « Cet art de la profusion aime les volutes et les colonnes ____ ; il cultive le trompe-l'œil et le goût de l'____. »

- *le baroque* ✓ — Le texte décrit l'art de la profusion, des volutes, des colonnes tordues et du trompe-l'œil, c'est le baroque.

### e-331 : « Brebis égarées » → l'hérésie

**Mot 1 : dogme** (trouvé à la brique 2, mise 2) — piste : doctrine + Église

- doctrine → *enseignement* ✗ — Doctrine se rapproche d'enseignement, nom pour nom. Le titre évoque la parabole des brebis.
- doctrine + Église → *dogme* ✓ — Enseignement a été refusé, et doctrine avec Église désigne un dogme. Dogme est le mot qui réunit les deux briques.

**Mot 2 : excommunication** (trouvé à la brique 1, mise 3) — piste : anathème + pape + divorcé

- anathème → *excommunication* ✓ — Dogme est trouvé, et anathème désigne l'excommunication prononcée par l'Église. Le mot cherché est donc excommunication.

**Mot 3 : inquisition** (trouvé à la brique 1, mise 2) — piste : Torquemada + tribunal

- Torquemada → *inquisition* ✓ — Dogme et excommunication sont trouvés, et Torquemada désigne l'Inquisition espagnole.

**Mot 4 : dissidents** (trouvé à la brique 2, mise 3) — piste : opposants + goulag + neuf

- opposants → *hérétiques* ✗ — Dogme, excommunication et inquisition sont trouvés, et opposants désigne les hérétiques persécutés.
- opposants + goulag → *dissidents* ✓ — Dogme, excommunication et inquisition sont trouvés, hérétiques a été refusé, et opposants avec goulag désignent les dissidents.

**Mot 5 : bûcher** (trouvé à la brique 1, mise 2) — piste : autodafé + fagots

- autodafé → *bûcher* ✓ — Dogme, excommunication, inquisition et dissidents sont trouvés, et autodafé désigne le bûcher.

**Solution : l'hérésie** — texte découvert : « S'écarter du dogme, c'est risquer l'excommunication ; l'inquisition traquait ces dissidents et les livrait au bûcher. »

- *l'Inquisition* ✗ — Le texte décrit le tribunal qui traquait les dissidents et les livrait au bûcher, c'est l'Inquisition.
- *l'hérésie* ✓ — Le texte décrit l'écart par rapport au dogme, puni par l'excommunication et l'inquisition. C'est l'hérésie. L'Inquisition a été refusée.

### e-335 : « Querelle des images » → un iconoclaste

**Mot 1 : empereur** (trouvé à la brique 1, mise 2) — piste : césar + Napoléon

- césar → *empereur* ✓ — César désigne un empereur, nom pour nom. La querelle des images concerne les empereurs byzantins.

**Mot 2 : icônes** (trouvé à la brique 1, mise 2) — piste : images + orthodoxe

- images → *icône* ✓ — Empereur est trouvé, et images désigne les icônes objets de la querelle. Icône est le mot cherché.

**Mot 3 : frondeur** (trouvé à la brique 2, mise 3) — piste : contestataire + Mazarin + limite

- contestataire → *iconoclaste* ✗ — Empereur et icône sont trouvés, et contestataire désigne l'iconoclaste qui s'oppose aux images. Iconoclaste correspond à la brique.
- contestataire + Mazarin → *frondeur* ✓ — Empereur et icône sont trouvés, iconoclaste a été refusé, et contestataire avec Mazarin désigne le frondeur.

**Mot 4 : bousculer** (trouvé à la brique 2, mise 2) — piste : secouer + habitudes

- secouer → *ébranler* ✗ — Empereur, icône et frondeur sont trouvés, et secouer est synonyme d'ébranler, le verbe qui convient à la querelle.
- secouer + habitudes → *bousculer* ✓ — Empereur, icône et frondeur sont trouvés, ébranler a été refusé, et secouer avec habitudes désigne bousculer.

**Mot 5 : dogmes** (non trouvé, mise 2) — piste : principes + Église

- principes → *idées* ✗ — Empereur, icône, frondeur et bousculer sont trouvés, et principes désigne les idées qui s'affrontent dans la querelle.
- principes + Église → *doctrines* ✗ — Empereur, icône, frondeur et bousculer sont trouvés, idées a été refusé, et principes avec Église désigne les doctrines.

**Solution : un iconoclaste** — texte découvert : « À Byzance, l'empereur faisait briser les icônes ; aujourd'hui, l'esprit frondeur aime bousculer les ____ établis. »

- *l'iconoclasme* ✓ — Le texte décrit la politique d'un empereur qui fait briser les icônes, puis l'esprit frondeur qui bouscule les normes. C'est l'iconoclasme.

### e-339 : « Héraclès au marais » → l'hydre

**Mot 1 : monstre** (trouvé à la brique 2, mise 2) — piste : créature + Godzilla

- créature → *hydre* ✗ — Créature désigne un monstre, et l'hydre est la créature qui vit dans le marais de Lerne.
- créature + Godzilla → *monstre* ✓ — Hydre a été refusé, et Godzilla comme créature désignent un monstre. Monstre convient aux deux briques.

**Mot 2 : multiples** (non trouvé, mise 2) — piste : nombreuses + choix

- nombreuses → *têtes* ✗ — Monstre est trouvé, et nombreuses désigne les têtes de l'hydre qui repoussent. Le mot cherché est têtes.
- nombreuses + choix → *cou* ✗ — Monstre est trouvé, têtes a été refusé, et nombreuses et choix désignent les cous de l'hydre qui repoussent.

**Mot 3 : décapitation** (non trouvé, mise 3) — piste : décollation + guillotine + dizaine

- décollation → *tronc* ✗ — Monstre et têtes sont refusés, cou a été refusé, et décollation désigne le tronc qui reste après l'ablation des têtes.
- décollation + guillotine → *couper* ✗ — Monstre est trouvé, têtes, cou et tronc ont été refusés, et décollation avec guillotine désigne l'action de couper.
- décollation + guillotine + dizaine → *neuf* ✗ — Monstre est trouvé, têtes, cou, tronc et couper ont été refusés, et décollation, guillotine et dizaine évoquent les neuf têtes de l'hydre.

**Mot 4 : cautériser** (trouvé à la brique 1, mise 3) — piste : brûler + brasier + falaise

- brûler → *cautériser* ✓ — Monstre est trouvé, têtes, cou, tronc, couper et neuf ont été refusés, et brûler désigne le geste de cautériser une plaie après décollation.

**Mot 5 : bout** (trouvé à la brique 1, mise 2) — piste : extrémité + chandelle

- extrémité → *bout* ✓ — Monstre, cautériser sont trouvés, têtes, cou, tronc, couper et neuf ont été refusés, et extrémité désigne le bout, ce qui se coupe.

**Solution : l'hydre** — texte découvert : « Ce monstre aux têtes ____ renaissait à chaque ____ ; Héraclès dut cautériser les plaies pour en venir à bout. »

- *l'hydre de Lerne* ✓ — Le texte décrit un monstre aux têtes qui renaissent, vaincu par Héraclès au marais. C'est l'hydre de Lerne. Hydre seule a été refusée comme mot.

### e-341 : « Coup de dés » → le hasard

**Mot 1 : destin** (trouvé à la brique 2, mise 2) — piste : sort + Parques

- sort → *hasard* ✗ — Sort est synonyme de hasard, et Coup de dés évoque le hasard.
- sort + Parques → *destin* ✓ — Hasard a été refusé, et les Parques sont les divinités du destin. Destin correspond au sens de sort.

**Mot 2 : chance** (trouvé à la brique 1, mise 2) — piste : veine + trèfle

- veine → *chance* ✓ — Destin est trouvé, et veine est un synonyme de chance. Le mot cherché est donc chance.

**Mot 3 : fortune** (trouvé à la brique 1, mise 2) — piste : aubaine + roue

- aubaine → *fortune* ✓ — Destin et chance sont trouvés, et aubaine désigne la fortune.

**Mot 4 : étoile** (trouvé à la brique 1, mise 2) — piste : astre + berger

- astre → *étoile* ✓ — Destin, chance et fortune sont trouvés, et astre désigne l'étoile. Le mot cherché est étoile.

**Mot 5 : poisse** (non trouvé, mise 2) — piste : malchance + sardine

- malchance → *guigne* ✗ — Destin, chance, fortune et étoile sont trouvés, et malchance désigne la guigne.
- malchance + sardine → *poisson* ✗ — Destin, chance, fortune et étoile sont trouvés, guigne a été refusée, et malchance avec sardine désigne le poisson, signe du hasard.

**Solution : le hasard** — texte découvert : « Ni destin ni calcul : seule la chance décide ; la fortune sourit aux audacieux ; le joueur invoque sa bonne étoile et redoute la ____. »

- *le jeu de hasard* ✗ — Le texte décrit un jeu où la chance décide, sans calcul ni destin, c'est le jeu de hasard.
- *l'aléa* ✗ — Le texte oppose le destin et le calcul à la chance qui décide. Le mot le plus proche est l'aléa. Le jeu de hasard a été refusé.
- *la malchance* ✗ — Le texte oppose le destin et le calcul à la chance, et le joueur redoute la malchance. Guigne a déjà été refusé.

### e-403 : « Pôle Nord de la cuisine » → le réfrigérateur

**Mot 1 : armoire** (non trouvé, mise 3) — piste : placard + normande + fusil

- placard → *frigo* ✗ — Un placard est un meuble de cuisine, et le pôle Nord évoque le froid, donc le frigo. Je reste incertain sur la forme exacte.
- placard + normande → *glacière* ✗ — Frigo a été refusé, et normande évoque une glacière dans la cuisine. Glacière est proche du sens de pôle Nord.
- placard + normande + fusil → *congélateur* ✗ — Frigo et glacière ont été refusés, et placard, normande et fusil évoquent un appareil frigorifique. Congélateur est le mot le plus proche du pôle Nord de la cuisine.

**Mot 2 : frais** (non trouvé, mise 2) — piste : frisquet + sœur

- frisquet → *réfrigérateur* ✗ — Frigo, glacière et congélateur ont été refusés, et frisquet désigne l'appareil qui refroidit. Réfrigérateur est le mot le plus proche.
- frisquet + sœur → *glacée* ✗ — Frigo, glacière, congélateur et réfrigérateur ont été refusés, et frisquet avec sœur désigne la glacée.

**Mot 3 : beurre** (trouvé à la brique 1, mise 2) — piste : margarine + courage

- margarine → *beurre* ✓ — Frigo, glacière, congélateur, réfrigérateur et glacée ont été refusés, et margarine désigne le beurre.

**Mot 4 : yaourts** (non trouvé, mise 2) — piste : Danone + long

- Danone → *glaçon* ✗ — Beurre est trouvé, frigo, glacière, congélateur, réfrigérateur et glacée ont été refusés, et Danone avec le pôle Nord désigne le glaçon.
- Danone + long → *beurrier* ✗ — Beurre est trouvé, frigo, glacière, congélateur, réfrigérateur, glacée et glaçon ont été refusés, et Danone avec long désigne le beurrier.

**Mot 5 : jambon** (non trouvé, mise 2) — piste : saucisson + mauvais

- saucisson → *charcuterie* ✗ — Beurre est trouvé, frigo, glacière, congélateur, réfrigérateur, glacée, glaçon et beurrier ont été refusés, et saucisson désigne la charcuterie.
- saucisson + mauvais → *boudin* ✗ — Beurre est trouvé, glaçon et beurrier ont été refusés, saucisson et mauvais évoquent le boudin, charcuterie a été refusée.

**Solution : le réfrigérateur** — texte découvert : « Dans la cuisine, cette grande ____ blanche garde au ____ le beurre, les ____ et le ____. »

- *l'armoire frigorifique* ✗ — Le texte décrit une grande armoire blanche de cuisine qui garde le beurre, les œufs et le lait au froid. Le réfrigérateur et le frigo ont déjà été refusés.
- *le frigidaire* ✓ — Le texte décrit une grande armoire blanche qui garde le beurre, les œufs et le lait au froid, dans la cuisine. L'armoire frigorifique a été refusée, donc je propose le terme courant.

### e-428 : « Tchou-tchou ! » → le train

**Mot 1 : quai** (trouvé à la brique 2, mise 2) — piste : embarcadère + Montréal

- embarcadère → *gare* ✗ — Embarcadère désigne un lieu d'arrivée ou de départ, et le tchou-tchou évoque le train, donc la gare.
- embarcadère + Montréal → *quai* ✓ — Gare a été refusé, et embarcadère désigne le quai où accoste le train ou le bateau. Montréal ne fournit pas plus de précision.

**Mot 2 : voie** (trouvé à la brique 1, mise 3) — piste : chemin + ferrée + entendre

- chemin → *voie* ✓ — Gare et quai sont trouvés, et chemin désigne la voie ferrée. Voie correspond à la brique.

**Mot 3 : wagon** (trouvé à la brique 1, mise 3) — piste : voiture + compartiment + taureau

- voiture → *wagon* ✓ — Quai, gare et voie sont trouvés, et voiture désigne le wagon du train.

**Mot 4 : contrôleur** (trouvé à la brique 1, mise 3) — piste : inspecteur + amende + pour

- inspecteur → *contrôleur* ✓ — Gare, quai, voie et wagon sont trouvés, et inspecteur désigne le contrôleur du train.

**Mot 5 : billets** (trouvé à la brique 1, mise 2) — piste : tickets + boules

- tickets → *billet* ✓ — Gare, quai, voie, wagon et contrôleur sont trouvés, et tickets désigne le billet de train.

**Solution : le train** — texte découvert : « Sur le quai, on attend en regardant l'horloge ; il arrive sur la voie ; on monte dans un wagon ; le contrôleur vérifie les billets. »

- *le train* ✓ — Le texte décrit l'attente sur le quai, l'arrivée sur la voie, le wagon et le contrôleur, c'est le train.

### e-430 : « Hotte sur le dos » → le père Noël

**Mot 1 : traîneau** (trouvé à la brique 1, mise 3) — piste : luge + chiens + vos

- luge → *traîneau* ✓ — Luge est un synonyme de traîneau, nom pour nom. La hotte sur le dos évoque le père Noël.

**Mot 2 : rennes** (trouvé à la brique 1, mise 2) — piste : cervidés + roi

- cervidés → *rennes* ✓ — Traîneau est trouvé, et cervidés désigne les rennes qui le tirent. Rennes est le mot qui correspond à la brique.

**Mot 3 : cheminée** (trouvé à la brique 1, mise 3) — piste : âtre + ramoneur + cravate

- âtre → *cheminée* ✓ — Traîneau et rennes sont trouvés, et âtre désigne la cheminée par laquelle passe le Père Noël. Cheminée correspond au thème.

**Mot 4 : cadeaux** (trouvé à la brique 1, mise 2) — piste : présents + aîné

- présents → *cadeau* ✓ — Traîneau, rennes et cheminée sont trouvés, et présents désigne les cadeaux du père Noël.

**Mot 5 : sapin** (trouvé à la brique 1, mise 3) — piste : conifère + guirlande + vin

- conifère → *sapin* ✓ — Traîneau, rennes, cheminée et cadeau sont trouvés, et conifère désigne le sapin de Noël.

**Solution : le père Noël** — texte découvert : « Dans son traîneau tiré par des rennes, il descend par la cheminée et dépose les cadeaux au pied du sapin. »

- *le Père Noël* ✓ — Le texte décrit le personnage qui descend par la cheminée en traîneau tiré par des rennes, soit le Père Noël.

### e-435 : « Petite reine » → la bicyclette

**Mot 1 : selle** (non trouvé, mise 2) — piste : étrier + poivre

- étrier → *pédale* ✗ — Étrier est associé à la pédale, et la petite reine désigne le vélo.
- étrier + poivre → *guidon* ✗ — Pédale a été refusée, et étrier désigne une pièce de la bicyclette. Le guidon est la pièce qui s'accorde avec poivre dans le thème du vélo.

**Mot 2 : guidon** (non trouvé, mise 2) — piste : volant + houx

- volant → *selle* ✗ — Pédale et guidon ont été refusés, et volant désigne une pièce de véhicule. Selle est la pièce de la petite reine qui s'accorde le mieux.
- volant + houx → *roue* ✗ — Pédale, guidon et selle ont été refusés, et volant avec houx désigne la roue de la bicyclette.

**Mot 3 : pédales** (non trouvé, mise 2) — piste : accélérateur + mémé

- accélérateur → *vitesse* ✗ — Pédale, guidon, selle et roue ont été refusés, et accélérateur désigne la vitesse du vélo.
- accélérateur + mémé → *frein* ✗ — Pédale, guidon, selle, roue et vitesse ont été refusés, et accélérateur avec mémé désigne le frein, son contraire.

**Mot 4 : équilibre** (trouvé à la brique 1, mise 2) — piste : stabilité + occupé

- stabilité → *équilibre* ✓ — Pédale, guidon, selle, roue, vitesse et frein ont été refusés, et stabilité désigne l'équilibre du cycliste.

**Mot 5 : chambre** (non trouvé, mise 3) — piste : pièce + pneu + Élysées

- pièce → *chaîne* ✗ — Équilibre est trouvé, pédale, guidon, selle, roue, vitesse et frein ont été refusés, et pièce désigne la chaîne de la bicyclette.
- pièce + pneu → *chambre à air* ✗ — Équilibre est trouvé, pédale, guidon, selle, roue, vitesse, frein et chaîne ont été refusés, et pièce avec pneu désigne la chambre à air.
- pièce + pneu + Élysées → *Champs* ✗ — Équilibre est trouvé, chaîne et chambre à air ont été refusées, et pièce avec pneu et Élysées évoque les Champs-Élysées.

**Solution : la bicyclette** — texte découvert : « On s'assoit sur la ____, on tient le ____, on appuie sur les ____ ; il faut garder l'équilibre ; une crevaison, et il faut changer la ____ à air. »

- *le vélo* ✓ — Le texte décrit la selle, le guidon, les pédales, l'équilibre et la chambre à air : c'est le vélo.

### e-437 : « Au-dessus des nuages » → l'avion

**Mot 1 : aéroport** (trouvé à la brique 1, mise 2) — piste : Roissy + cochon

- Roissy → *aéroport* ✓ — Roissy est un aéroport, et au-dessus des nuages évoque l'avion. La brique désigne le lieu.

**Mot 2 : valises** (trouvé à la brique 1, mise 2) — piste : bagages + vient

- bagages → *valise* ✓ — Aéroport est trouvé, et bagages désigne la valise. Valise correspond à la brique.

**Mot 3 : pilote** (trouvé à la brique 1, mise 2) — piste : commandant + face

- commandant → *pilote* ✓ — Aéroport et valise sont trouvés, et commandant désigne le pilote de l'avion. Pilote correspond au sens.

**Mot 4 : piste** (trouvé à la brique 1, mise 3) — piste : trace + atterrissage + mieux

- trace → *piste* ✓ — Aéroport, valise et pilote sont trouvés, et trace désigne la piste d'envol. Le mot cherché est piste.

**Mot 5 : hôtesse** (trouvé à la brique 1, mise 2) — piste : steward + bas

- steward → *hôtesse* ✓ — Aéroport, valise, pilote et piste sont trouvés, et steward désigne l'hôtesse de l'air.

**Solution : l'avion** — texte découvert : « Dans l'aéroport, on dépose ses valises ; le pilote attend l'autorisation de quitter la piste ; à bord, l'hôtesse sert un plateau-repas. »

- *un voyage en avion* ✗ — Le texte décrit un voyage en avion depuis l'aéroport, avec valises, pilote, piste et hôtesse.
- *un aéroport* ✗ — Le texte décrit un lieu où l'on dépose ses valises et d'où décolle l'avion. C'est l'aéroport.
- *un vol* ✗ — Le texte décrit l'embarquement et le départ d'un avion, c'est un vol. Les réponses un aéroport et un voyage en avion ont été refusées.

### e-503 : « Le cerf-volant de Benjamin » → le paratonnerre

**Mot 1 : faîte** (trouvé à la brique 2, mise 3) — piste : sommet + toit + anniversaire

- sommet → *cime* ✗ — Sommet est synonyme de cime, nom pour nom. Le cerf-volant monte vers le haut.
- sommet + toit → *faîte* ✓ — Cime a été refusée, et toit désigne le faîte d'un toit. Faîte est synonyme de sommet.

**Mot 2 : tige** (trouvé à la brique 2, mise 2) — piste : tringle + fleur

- tringle → *baguette* ✗ — Cime et faîte sont trouvés, et tringle désigne la baguette rigide du cerf-volant. Baguette correspond à la brique.
- tringle + fleur → *tige* ✓ — Faîte est trouvé, baguette a été refusée, et tringle et fleur désignent la tige du cerf-volant.

**Mot 3 : foudre** (trouvé à la brique 1, mise 2) — piste : éclair + Zeus

- éclair → *foudre* ✓ — Faîte et tige sont trouvés, baguette a été refusée, et éclair désigne la foudre.

**Mot 4 : câble** (non trouvé, mise 2) — piste : filin + télévision

- filin → *corde* ✗ — Faîte, tige et foudre sont trouvés, baguette a été refusée, et filin désigne la corde du cerf-volant.
- filin + télévision → *antenne* ✗ — Faîte, tige et foudre sont trouvés, corde a été refusée, et filin avec télévision désigne l'antenne.

**Mot 5 : incendie** (trouvé à la brique 2, mise 3) — piste : brasier + pompiers + supérieur

- brasier → *lampe* ✗ — Faîte, tige et foudre sont trouvés, corde et antenne ont été refusées, et brasier désigne la lampe lumineuse du cerf-volant.
- brasier + pompiers → *incendie* ✓ — Faîte, tige et foudre sont trouvés, corde, antenne et lampe ont été refusées, et brasier avec pompiers désigne l'incendie.

**Solution : le paratonnerre** — texte découvert : « Dressée sur le faîte de l'édifice, une tige métallique attire la foudre ; un ____ la conduit jusqu'au sol, évitant l'incendie. »

- *le paratonnerre* ✓ — Le texte décrit une tige métallique posée sur le faîte qui attire la foudre et la conduit au sol : c'est le paratonnerre.

### e-506 : « Peindre dans le frais » → la fresque

**Mot 1 : pigments** (trouvé à la brique 1, mise 2) — piste : colorants + ocre

- colorants → *pigment* ✓ — Colorants se rapproche de pigment, nom pour nom. Peindre dans le frais évoque une technique de peinture.

**Mot 2 : enduit** (trouvé à la brique 1, mise 2) — piste : crépi + plâtrier

- crépi → *enduit* ✓ — Pigment est trouvé, et crépi est un enduit appliqué sur un mur. Enduit est le mot qui correspond à la brique.

**Mot 3 : humide** (trouvé à la brique 1, mise 3) — piste : moite + éponge + audacieux

- moite → *humide* ✓ — Pigment et enduit sont trouvés, et moite désigne ce qui est humide. Peindre dans le frais évoque la peinture sur enduit humide.

**Mot 4 : échafaudage** (trouvé à la brique 2, mise 3) — piste : grue + façade + foulard

- grue → *fresque* ✗ — Pigment, enduit et humide sont trouvés, et grue évoque le chantier de la fresque.
- grue + façade → *échafaudage* ✓ — Pigment, enduit et humide sont trouvés, fresque a été refusé, et grue avec façade désigne l'échafaudage.

**Mot 5 : plafond** (trouvé à la brique 1, mise 2) — piste : plancher + lustre

- plancher → *plafond* ✓ — Pigment, enduit, humide, fresque et échafaudage sont trouvés ou proches, et plancher désigne le plafond peint.

**Solution : la fresque** — texte découvert : « Les pigments sont posés sur un enduit encore humide ; juché sur un échafaudage, Michel-Ange couvrit ainsi le plafond de la Sixtine. »

- *la fresque* ✓ — Le texte décrit la peinture murale réalisée sur enduit humide, technique de la fresque, comme celle de Michel-Ange à la Sixtine.

### e-509 : « Embouchure en éventail » → le delta

**Mot 1 : fleuve** (non trouvé, mise 2) — piste : Loire + océan

- Loire → *delta* ✗ — Une embouchure en éventail est un delta, et la Loire est un fleuve. Le mot cherché est delta.
- Loire + océan → *estuaire* ✗ — Delta a été refusé, et océan désigne l'estuaire, embouchure où le fleuve rencontre la mer. Estuaire convient à la Loire et à l'océan.

**Mot 2 : bras** (non trouvé, mise 2) — piste : jambe + biceps

- jambe → *patte* ✗ — Delta et estuaire ont été refusés, et jambe désigne la patte de l'oie qui évoque l'éventail. Patte d'oie correspond au motif de l'embouchure.
- jambe + biceps → *mollet* ✗ — Delta et estuaire ont été refusés, patte a été refusée, et jambe et biceps désignent le mollet.

**Mot 3 : crues** (trouvé à la brique 1, mise 2) — piste : débordements + Nil

- débordements → *crue* ✓ — Delta, estuaire, patte et mollet ont été refusés, et débordements désigne la crue du fleuve.

**Mot 4 : alluvions** (trouvé à la brique 1, mise 2) — piste : sédiments + briquet

- sédiments → *alluvions* ✓ — Crue est trouvée, delta, estuaire, patte et mollet ont été refusés, et sédiments désigne les alluvions.

**Mot 5 : triangle** (trouvé à la brique 2, mise 2) — piste : carré + Bermudes

- carré → *cône* ✗ — Crue et alluvions sont trouvés, delta, estuaire, patte et mollet ont été refusés, et carré désigne le cône de déjection en éventail.
- carré + Bermudes → *triangle* ✓ — Crue et alluvions sont trouvés, delta, estuaire, patte, mollet et cône ont été refusés, et carré avec Bermudes désigne le triangle.

**Solution : le delta** — texte découvert : « Le ____ se divise en ____ ; ses crues y déposent des alluvions ; celui du Nil a la forme d'un triangle. »

- *l'embouchure* ✗ — Le texte décrit un fleuve qui se divise à son arrivée à la mer en déposant des alluvions. C'est l'embouchure. Delta a été refusé comme mot.
- *un delta fluvial* ✗ — Le texte décrit un fleuve qui se divise à son embouchure, déposant des alluvions en forme de triangle. C'est un delta. L'embouchure a été refusée.
- *le Nil* ✗ — Le texte évoque le fleuve dont les crues déposent des alluvions et qui forme un triangle à son embouchure. L'embouchure et le delta ont été refusés, donc je désigne le fleuve lui-même.

### e-515 : « Le cheval de fer » → la locomotive

**Mot 1 : foyer** (trouvé à la brique 1, mise 2) — piste : âtre + famille

- âtre → *foyer* ✓ — Âtre désigne le foyer, et le cheval de fer évoque la locomotive dont le foyer chauffe.

**Mot 2 : pelle** (trouvé à la brique 1, mise 2) — piste : bêche + seau

- bêche → *pelle* ✓ — Foyer est trouvé, et bêche désigne un outil d'âtre comme la pelle. Pelle correspond à la brique.

**Mot 3 : charbon** (trouvé à la brique 1, mise 2) — piste : houille + mine

- houille → *charbon* ✓ — Foyer et pelle sont trouvés, et houille désigne le charbon qui alimente la locomotive. Charbon est le mot qui correspond.

**Mot 4 : wagons** (non trouvé, mise 2) — piste : voitures + bestiaux

- voitures → *machine* ✗ — Foyer, pelle et charbon sont trouvés, et voitures désigne les machines du cheval de fer. Machine correspond au sens.
- voitures + bestiaux → *bétail* ✗ — Foyer, pelle et charbon sont trouvés, machine a été refusée, et bestiaux avec voitures désigne le bétail transporté par le train.

**Mot 5 : rails** (trouvé à la brique 1, mise 3) — piste : traverses + ballast + ironiser

- traverses → *rails* ✓ — Foyer, pelle et charbon sont trouvés, machine et bétail ont été refusés, et traverses désigne les rails du chemin de fer.

**Solution : la locomotive** — texte découvert : « Son foyer chauffe l'eau ; à la pelle, on y jette le charbon ; elle tire les ____ sur les rails. »

- *la locomotive* ✓ — Le texte décrit le cheval de fer qui chauffe son foyer, reçoit le charbon et tire des wagons, c'est la locomotive.

### e-520 : « La Chevauchée fantastique » → le western

**Mot 1 : diligence** (non trouvé, mise 2) — piste : zèle + attelage

- zèle → *ardeur* ✗ — Zèle est synonyme d'ardeur, nom pour nom. La chevauchée fantastique évoque une course enflammée.
- zèle + attelage → *élan* ✗ — Ardeur a été refusée, et attelage évoque la chevauchée qui part sur son élan. Élan est le mot qui correspond à zèle.

**Mot 2 : shérif** (non trouvé, mise 2) — piste : marshal + étoile

- marshal → *maréchal* ✗ — Ardeur et élan ont été refusés, et attelage désigne la chevauchée militaire. Maréchal correspond au marshal de la brique.
- marshal + étoile → *général* ✗ — Ardeur, élan et maréchal ont été refusés, et marshal avec étoile désigne le général.

**Mot 3 : flèches** (trouvé à la brique 2, mise 2) — piste : arc + Cupidon

- arc → *cavalier* ✗ — Ardeur, élan, maréchal et général ont été refusés, et arc désigne le cavalier archer de la chevauchée.
- arc + Cupidon → *flèche* ✓ — Arc et Cupidon sont les deux briques, ardeur, élan, maréchal, général et cavalier ont été refusés, et flèche correspond à l'arc et à Cupidon.

**Mot 4 : duel** (non trouvé, mise 2) — piste : affrontement + témoins

- affrontement → *bataille* ✗ — Flèche et cavalier sont trouvés, ardeur, élan, maréchal et général ont été refusés, et affrontement désigne la bataille.
- affrontement + témoins → *combat* ✗ — Flèche et cavalier sont trouvés, ardeur, élan, maréchal, général et bataille ont été refusés, et affrontement avec témoins désigne le combat.

**Mot 5 : revolver** (trouvé à la brique 2, mise 2) — piste : pistolet + barillet

- pistolet → *duel* ✗ — Flèche et cavalier sont trouvés, ardeur, élan, maréchal, général, bataille et combat ont été refusés, et pistolet désigne le duel.
- pistolet + barillet → *revolver* ✓ — Flèche et cavalier sont trouvés, duel a été refusé, et pistolet avec barillet désigne le revolver.

**Solution : le western** — texte découvert : « Une ____ attaquée, un ____ à l'étoile, des flèches venues des collines, un ____ au soleil couchant, un revolver qu'on dégaine : John Ford en a fait un art. »

- *un western* ✓ — Le texte évoque une diligence attaquée, un shérif, des cavaliers et un revolver dans un film de John Ford. C'est un western.

### e-530 : « Un plat qui se mange froid » → la vengeance

**Mot 1 : affront** (non trouvé, mise 2) — piste : outrage + laver

- outrage → *vengeance* ✗ — Outrage appelle l'offense, et un plat qui se mange froid est la vengeance. Le mot cherché est vengeance.
- outrage + laver → *réparation* ✗ — Vengeance a été refusée, et laver évoque l'affront à réparer. Réparation désigne le sens de l'outrage lavé.

**Mot 2 : ressentiment** (trouvé à la brique 2, mise 2) — piste : rancœur + similitude

- rancœur → *revanche* ✗ — Vengeance et réparation ont été refusées, et rancœur désigne la revanche. La revanche se mange froid selon le proverbe.
- rancœur + similitude → *ressentiment* ✓ — Vengeance, réparation et revanche ont été refusées, et rancœur et similitude désignent le ressentiment.

**Mot 3 : représailles** (trouvé à la brique 1, mise 3) — piste : rétorsions + guerre + déjeuner

- rétorsions → *représailles* ✓ — Ressentiment et revanche sont trouvés ou proches, vengeance et réparation ont été refusées, et rétorsions désigne les représailles.

**Mot 4 : implacable** (trouvé à la brique 1, mise 3) — piste : inexorable + ennemi + armoire

- inexorable → *implacable* ✓ — Ressentiment, revanche et représailles sont trouvés ou proches, vengeance et réparation ont été refusées, et inexorable désigne le caractère implacable.

**Mot 5 : châtiment** (trouvé à la brique 1, mise 3) — piste : punition + crime + félin

- punition → *châtiment* ✓ — Ressentiment, représailles et implacable sont trouvés, vengeance, réparation et revanche ont été refusés, et punition désigne le châtiment.

**Solution : la vengeance** — texte découvert : « Trahi, il ne pardonne pas l'____ ; son ressentiment grandit au château d'If ; Monte-Cristo prépare ses représailles avec une froideur implacable : le châtiment des traîtres sera exemplaire. »

- *la vengeance* ✓ — Le texte décrit un homme trahi qui ne pardonne pas, dont la revanche est préparée avec froideur, c'est la vengeance.

### e-533 : « Salle des pas perdus » → le tribunal

**Mot 1 : prévenu** (trouvé à la brique 1, mise 2) — piste : accusé + prairie

- accusé → *prévenu* ✓ — Accusé est synonyme de prévenu, nom pour nom. La salle des pas perdus est au palais de justice.

**Mot 2 : greffier** (trouvé à la brique 1, mise 3) — piste : clerc + audience + Athènes

- clerc → *greffier* ✓ — Prévenu est trouvé, et clerc désigne le greffier du palais de justice. Greffier correspond à la brique.

**Mot 3 : réquisitoire** (non trouvé, mise 2) — piste : plaidoirie + procureur

- plaidoirie → *avocat* ✗ — Prévenu et greffier sont trouvés, et plaidoirie désigne la prestation de l'avocat. Avocat correspond au palais de justice.
- plaidoirie + procureur → *juge* ✗ — Prévenu et greffier sont trouvés, avocat a été refusé, et plaidoirie et procureur désignent le juge.

**Mot 4 : jurés** (non trouvé, mise 3) — piste : assesseurs + délibération + pantalon

- assesseurs → *magistrat* ✗ — Prévenu et greffier sont trouvés, avocat et juge ont été refusés, et assesseurs désigne les magistrats.
- assesseurs + délibération → *jury* ✗ — Prévenu et greffier sont trouvés, avocat, juge et magistrat ont été refusés, et assesseurs avec délibération désignent le jury.
- assesseurs + délibération + pantalon → *toge* ✗ — Prévenu et greffier sont trouvés, avocat, juge, magistrat et jury ont été refusés, et assesseurs, délibération et pantalon évoquent la toge.

**Mot 5 : verdict** (trouvé à la brique 1, mise 2) — piste : sentence + rouge

- sentence → *verdict* ✓ — Prévenu et greffier sont trouvés, avocat, juge, magistrat, jury et toge ont été refusés, et sentence désigne le verdict.

**Solution : le tribunal** — texte découvert : « Le prévenu comparaît ; le greffier consigne les débats ; le procureur prononce son ____ ; les ____ se retirent avant le verdict. »

- *un procès* ✓ — Le texte décrit la comparution d'un prévenu, le réquisitoire du procureur et le verdict : c'est un procès.

### e-536 : « Je sens la chair fraîche » → l'ogre

**Mot 1 : bottes** (trouvé à la brique 1, mise 2) — piste : cuissardes + éperons

- cuissardes → *bottes* ✓ — Cuissardes désigne des bottes, nom pour nom. Le titre évoque un vêtement de cuir.

**Mot 2 : colosse** (trouvé à la brique 2, mise 2) — piste : géant + Rhodes

- géant → *ogre* ✗ — Bottes est trouvé, et géant désigne l'ogre qui sent la chair fraîche. Ogre est le mot qui correspond à la brique.
- géant + Rhodes → *colosse* ✓ — Bottes est trouvé, et géant et Rhodes désignent le colosse de Rhodes. Ogre a été refusé.

**Mot 3 : dévorer** (trouvé à la brique 1, mise 2) — piste : engloutir + livres

- engloutir → *dévorer* ✓ — Bottes et colosse sont trouvés, ogre est trouvé aussi, et engloutir désigne l'action de dévorer.

**Mot 4 : couronnes** (trouvé à la brique 1, mise 2) — piste : diadèmes + rois

- diadèmes → *couronne* ✓ — Bottes, colosse et dévorer sont trouvés, et diadèmes désigne la couronne.

**Mot 5 : cailloux** (trouvé à la brique 2, mise 2) — piste : pierres + Poucet

- pierres → *château* ✗ — Bottes, colosse, dévorer et couronne sont trouvés, et pierres désigne le château, lieu où l'ogre règne.
- pierres + Poucet → *cailloux* ✓ — Bottes, colosse, dévorer et couronne sont trouvés, château a été refusé, et pierres avec Poucet désignent les cailloux semés par le Petit Poucet.

**Solution : l'ogre** — texte découvert : « Chaussé de bottes de sept lieues, ce colosse rêve de dévorer sept frères ; il égorge ses filles, trompé par leurs couronnes, échangées par le petit dernier, celui des cailloux. »

- *l'Ogre du Petit Poucet* ✗ — Le texte décrit le colosse aux bottes de sept lieues qui veut dévorer les sept frères, c'est l'ogre du Petit Poucet.
- *un géant* ✗ — Le texte décrit un colosse aux bottes de sept lieues, qui veut dévorer des frères et égorge ses filles. C'est un géant. L'Ogre du Petit Poucet a été refusé.
- *un colosse* ✗ — Le texte décrit un géant aux bottes de sept lieues qui veut dévorer des frères et égorge ses filles. Un géant et l'Ogre ont été refusés, donc je propose colosse.

### e-541 : « Le comte des Carpates » → le vampire

**Mot 1 : crocs** (trouvé à la brique 1, mise 2) — piste : canines + loup

- canines → *crocs* ✓ — Canines désigne les crocs, nom pour nom. Le comte des Carpates est Dracula, aux crocs féroces.

**Mot 2 : cercueil** (trouvé à la brique 1, mise 2) — piste : sarcophage + croque-mort

- sarcophage → *cercueil* ✓ — Crocs est trouvé, et sarcophage désigne le cercueil de Dracula. Cercueil est le synonyme exact.

**Mot 3 : ail** (trouvé à la brique 1, mise 2) — piste : échalote + gousse

- échalote → *ail* ✓ — Crocs et cercueil sont trouvés, et échalote désigne un légume de la famille de l'ail. Le comte des Carpates fuit l'ail.

**Mot 4 : aube** (non trouvé, mise 2) — piste : aurore + communiant

- aurore → *soleil* ✗ — Crocs, cercueil et ail sont trouvés, et aurore désigne le lever du soleil, qui détruit Dracula.
- aurore + communiant → *crucifix* ✗ — Crocs, cercueil et ail sont trouvés, soleil a été refusé, et aurore avec communiant désigne le crucifix qui repousse Dracula.

**Mot 5 : pieu** (trouvé à la brique 1, mise 2) — piste : piquet + lit

- piquet → *pieu* ✓ — Crocs, cercueil et ail sont trouvés, soleil et crucifix ont été refusés, et piquet désigne le pieu qui tue Dracula.

**Solution : le vampire** — texte découvert : « Il plante ses crocs dans les cous, dort le jour dans un cercueil, fuit l'ail et redoute l'____ ; un pieu dans le cœur l'achève. »

- *Dracula* ✗ — Le texte décrit un vampire qui plante ses crocs dans les cous, dort dans un cercueil et fuit l'ail. C'est le comte Dracula.
- *un vampire* ✓ — Le texte décrit une créature qui boit le sang, dort dans un cercueil et craint l'ail et le pieu. C'est un vampire.

### np-002 : Écrivains français

**Nom 1 : Victor Hugo** (trouvé à la brique 1) — briques : Cosette + Gavroche + Guernesey

- Cosette → *Victor Hugo* ✓ — Cosette est un personnage des Misérables, roman de Victor Hugo, écrivain français. La brique évoque l'auteur par son œuvre.

**Nom 2 : Molière** (trouvé à la brique 1) — briques : Tartuffe + Harpagon + Alceste

- Tartuffe → *Molière* ✓ — Victor Hugo est trouvé, et Tartuffe est un personnage de Molière, écrivain français. Le nom cherché est donc Molière.

**Nom 3 : Émile Zola** (trouvé à la brique 1) — briques : Germinal + Rougon + Dreyfus

- Germinal → *Émile Zola* ✓ — Victor Hugo et Molière sont trouvés, et Germinal est un roman d'Émile Zola, écrivain français.

**Nom 4 : Jules Verne** (trouvé à la brique 1) — briques : Nautilus + Nemo + Fogg

- Nautilus → *Jules Verne* ✓ — Hugo, Molière et Zola sont trouvés, et le Nautilus est le sous-marin de Jules Verne, écrivain français.

### np-103 : Villes de France

**Nom 1 : Strasbourg** (trouvé à la brique 1) — briques : Alsace + cathédrale + Parlement

- Alsace → *Strasbourg* ✓ — L'Alsace a pour préfecture Strasbourg, ville de France. Rébus autorisé pour un nom propre.

**Nom 2 : Marseille** (trouvé à la brique 1) — briques : calanques + Canebière + bouillabaisse

- calanques → *Marseille* ✓ — Strasbourg est trouvé, et les calanques sont typiques de Marseille, ville de France. Rébus autorisé pour un nom propre.

**Nom 3 : Lille** (trouvé à la brique 1) — briques : braderie + beffroi + Flandre

- braderie → *Lille* ✓ — Strasbourg et Marseille sont trouvées, et la braderie est associée à Lille, grande ville du Nord.

**Nom 4 : Bordeaux** (trouvé à la brique 1) — briques : vin + Garonne + Aquitaine

- vin → *Bordeaux* ✓ — Strasbourg, Marseille et Lille sont trouvées, et le vin évoque Bordeaux, ville de France.

### np-204 : Écrivains russes

**Nom 1 : Tolstoï** (trouvé à la brique 1) — briques : Karénine + Natacha + Iasnaïa

- Karénine → *Léon Tolstoï* ✓ — Karénine est l'héroïne d'Anna Karénine, roman de l'écrivain russe Léon Tolstoï.

**Nom 2 : Dostoïevski** (trouvé à la brique 1) — briques : Raskolnikov + Karamazov + bagne

- Raskolnikov → *Fiodor Dostoïevski* ✓ — Tolstoï est trouvé, et Raskolnikov est le héros de Crime et Châtiment de Dostoïevski. Le nom de l'écrivain russe est donc Dostoïevski.

**Nom 3 : Tchekhov** (trouvé à la brique 1) — briques : Cerisaie + mouette + Taganrog

- Cerisaie → *Anton Tchekhov* ✓ — Tolstoï et Dostoïevski sont trouvés, et La Cerisaie est une pièce d'Anton Tchekhov, écrivain russe.

**Nom 4 : Pouchkine** (trouvé à la brique 1) — briques : Onéguine + duel + Tsarskoïe

- Onéguine → *Alexandre Pouchkine* ✓ — Tolstoï, Dostoïevski et Tchekhov sont trouvés, et Eugène Onéguine est le roman de Pouchkine, écrivain russe.

### np-205 : Savants de l'Antiquité

**Nom 1 : Archimède** (trouvé à la brique 1) — briques : eurêka + Syracuse + levier

- eurêka → *Archimède* ✓ — Eurêka est le cri attribué à Archimède, savant de l'Antiquité.

**Nom 2 : Euclide** (trouvé à la brique 1) — briques : géométrie + Alexandrie + Éléments

- géométrie → *Euclide* ✓ — Archimède est trouvé, et la géométrie est associée à Euclide, savant de l'Antiquité.

**Nom 3 : Pythagore** (trouvé à la brique 1) — briques : théorème + hypoténuse + Samos

- théorème → *Pythagore* ✓ — Archimède et Euclide sont trouvés, et le théorème est associé à Pythagore, savant de l'Antiquité.

**Nom 4 : Hippocrate** (trouvé à la brique 1) — briques : serment + médecine + Cos

- serment → *Hippocrate* ✓ — Archimède, Euclide et Pythagore sont trouvés, et le serment désigne le serment d'Hippocrate, savant de l'Antiquité.

### np-307 : Écrivains des Lumières

**Nom 1 : Diderot** (trouvé à la brique 1) — briques : Encyclopédie + Langres + fataliste

- Encyclopédie → *Denis Diderot* ✓ — L'Encyclopédie a été dirigée par Diderot, écrivain des Lumières.

**Nom 2 : Montesquieu** (trouvé à la brique 1) — briques : Persanes + Brède + lois

- Persanes → *Montesquieu* ✓ — Diderot est trouvé, et Les Lettres persanes sont de Montesquieu, écrivain des Lumières.

**Nom 3 : Marivaux** (trouvé à la brique 2) — briques : badinage + Arlequin + hasard

- badinage → *Voltaire* ✗ — Diderot et Montesquieu sont trouvés, et le badinage est la marque de Voltaire, écrivain des Lumières.
- badinage + Arlequin → *Marivaux* ✓ — Diderot et Montesquieu sont trouvés, Voltaire a été refusé, et badinage et Arlequin désignent Marivaux, écrivain des Lumières.

**Nom 4 : Beaumarchais** (trouvé à la brique 1) — briques : Figaro + Barbier + Almaviva

- Figaro → *Beaumarchais* ✓ — Diderot, Montesquieu et Marivaux sont trouvés, et Figaro est le personnage de Beaumarchais, écrivain des Lumières.

### np-316 : Empereurs romains

**Nom 1 : Hadrien** (trouvé à la brique 1) — briques : mur + villa + Antinoüs

- mur → *Hadrien* ✓ — Le mur d'Hadrien est associé à l'empereur Hadrien, empereur romain.

**Nom 2 : Caligula** (trouvé à la brique 1) — briques : cheval + consul + Camus

- cheval → *Caligula* ✓ — Hadrien est trouvé, et le cheval évoque Incitatus, le cheval de Caligula.

**Nom 3 : Néron** (trouvé à la brique 1) — briques : incendie + lyre + Agrippine

- incendie → *Néron* ✓ — Hadrien et Caligula sont trouvés, et l'incendie de Rome est associé à Néron, empereur romain.

**Nom 4 : Marc Aurèle** (trouvé à la brique 1) — briques : Pensées + stoïcien + Danube

- Pensées → *Marc Aurèle* ✓ — Hadrien, Caligula et Néron sont trouvés, et les Pensées sont l'œuvre de Marc Aurèle, empereur romain.

### np-322 : Personnages de Shakespeare

**Nom 1 : Hamlet** (trouvé à la brique 1) — briques : Elseneur + crâne + Ophélie

- Elseneur → *Hamlet* ✓ — Elseneur est le château où se déroule la pièce de Shakespeare, dont le personnage principal est Hamlet.

**Nom 2 : Othello** (trouvé à la brique 1) — briques : Desdémone + Iago + mouchoir

- Desdémone → *Othello* ✓ — Hamlet est trouvé, et Desdémone est un personnage d'Othello, pièce de Shakespeare.

**Nom 3 : Falstaff** (trouvé à la brique 1) — briques : Windsor + ivrogne + Verdi

- Windsor → *Falstaff* ✓ — Hamlet et Othello sont trouvés, et Windsor renvoie aux Joyeuses Commères de Windsor, où Falstaff est le personnage principal.

**Nom 4 : Prospero** (trouvé à la brique 1) — briques : tempête + Ariel + Caliban

- tempête → *Prospero* ✓ — Hamlet, Othello et Falstaff sont trouvés, et La Tempête a pour personnage principal Prospero.

### np-327 : Grands de la chanson

**Nom 1 : Brassens** (trouvé à la brique 1) — briques : Sète + pipe + gorille

- Sète → *Georges Brassens* ✓ — Sète est la ville natale de Georges Brassens, grand nom de la chanson française.

**Nom 2 : Brel** (trouvé à la brique 1) — briques : Amsterdam + Marquises + quitte

- Amsterdam → *Jacques Brel* ✓ — Brassens est trouvé, et Amsterdam est une chanson de Jacques Brel, grand nom de la chanson.

**Nom 3 : Ferré** (trouvé à la brique 2) — briques : Monaco + anarchie + Aragon

- Monaco → *Charles Trenet* ✗ — Brassens et Brel sont trouvés, et Monaco évoque Charles Trenet, grand nom de la chanson française.
- Monaco + anarchie → *Léo Ferré* ✓ — Brassens et Brel sont trouvés, Charles Trenet a été refusé, et Monaco et l'anarchie évoquent Léo Ferré.

**Nom 4 : Barbara** (non trouvé) — briques : aigle + Nantes + Göttingen

- aigle → *Charles Aznavour* ✗ — Brassens, Brel et Ferré sont trouvés, et l'aigle évoque Charles Aznavour, grand nom de la chanson française.
- aigle + Nantes → *Michel Sardou* ✗ — Brassens, Brel et Ferré sont trouvés, Charles Aznavour a été refusé, et Nantes avec l'aigle désigne Michel Sardou.
- aigle + Nantes + Göttingen → *Serge Gainsbourg* ✗ — Brassens, Brel et Ferré sont trouvés, Aznavour et Sardou ont été refusés, et l'aigle avec Nantes et Göttingen désigne Serge Gainsbourg, grand nom de la chanson.

### np-328 : Peintres espagnols

**Nom 1 : Goya** (trouvé à la brique 1) — briques : Majas + désastres + Saturne

- Majas → *Francisco Goya* ✓ — Les Majas sont des tableaux du peintre espagnol Francisco Goya.

**Nom 2 : Vélasquez** (trouvé à la brique 1) — briques : Ménines + infante + Philippe IV

- Ménines → *Diego Vélasquez* ✓ — Goya est trouvé, et Las Meninas est un tableau de Vélasquez, peintre espagnol.

**Nom 3 : Zurbarán** (trouvé à la brique 1) — briques : moines + Séville + Estrémadure

- moines → *Francisco de Zurbarán* ✓ — Goya et Vélasquez sont trouvés, et les moines sont le thème de Zurbarán, peintre espagnol.

**Nom 4 : Le Greco** (trouvé à la brique 1) — briques : Tolède + Crète + Orgaz

- Tolède → *El Greco* ✓ — Goya, Vélasquez et Zurbarán sont trouvés, et Tolède est la ville du peintre El Greco.

### np-331 : Philosophes allemands

**Nom 1 : Hegel** (trouvé à la brique 1) — briques : dialectique + Iéna + esprit

- dialectique → *Hegel* ✓ — La dialectique est associée à Hegel, philosophe allemand.

**Nom 2 : Nietzsche** (trouvé à la brique 1) — briques : Zarathoustra + surhomme + moustache

- Zarathoustra → *Friedrich Nietzsche* ✓ — Hegel est trouvé, et Zarathoustra est le héros de Nietzsche, philosophe allemand.

**Nom 3 : Schopenhauer** (trouvé à la brique 1) — briques : volonté + pessimisme + caniche

- volonté → *Arthur Schopenhauer* ✓ — Hegel et Nietzsche sont trouvés, et la volonté est le concept central de Schopenhauer, philosophe allemand.

**Nom 4 : Heidegger** (trouvé à la brique 1) — briques : Dasein + Forêt-Noire + être

- Dasein → *Martin Heidegger* ✓ — Hegel, Nietzsche et Schopenhauer sont trouvés, et le Dasein est le concept central de Heidegger, philosophe allemand.

### np-338 : Maréchaux d'Empire

**Nom 1 : Ney** (trouvé à la brique 1) — briques : braves + Moskova + fusillé

- braves → *Michel Ney* ✓ — Ney est le brave des braves, maréchal d'Empire.

**Nom 2 : Murat** (trouvé à la brique 1) — briques : cavalerie + Naples + Caroline

- cavalerie → *Joachim Murat* ✓ — Ney est trouvé, et la cavalerie est associée à Murat, maréchal d'Empire.

**Nom 3 : Davout** (trouvé à la brique 1) — briques : Auerstaedt + Eckmühl + fer

- Auerstaedt → *Louis-Nicolas Davout* ✓ — Ney et Murat sont trouvés, et Auerstaedt est la bataille remportée par Davout, maréchal d'Empire.

**Nom 4 : Lannes** (trouvé à la brique 1) — briques : Montebello + Essling + Roland

- Montebello → *Jean Lannes* ✓ — Ney, Murat et Davout sont trouvés, et Montebello est le titre de Lannes, maréchal d'Empire.

### np-345 : Dieux nordiques

**Nom 1 : Odin** (trouvé à la brique 1) — briques : corbeaux + Walhalla + Sleipnir

- corbeaux → *Odin* ✓ — Odin est accompagné de deux corbeaux, Huginn et Muninn, dans la mythologie nordique.

**Nom 2 : Thor** (trouvé à la brique 1) — briques : marteau + tonnerre + Mjöllnir

- marteau → *Thor* ✓ — Odin est trouvé, et le marteau désigne Thor, dieu nordique.

**Nom 3 : Loki** (trouvé à la brique 1) — briques : ruse + Baldr + serpent

- ruse → *Loki* ✓ — Odin et Thor sont trouvés, et la ruse désigne Loki, dieu nordique.

**Nom 4 : Freyja** (trouvé à la brique 1) — briques : chats + amour + Vanes

- chats → *Freyja* ✓ — Odin, Thor et Loki sont trouvés, et les chats sont associés à Freyja, déesse nordique.

### np-349 : Héros de bande dessinée réaliste

**Nom 1 : Blake** (trouvé à la brique 1) — briques : Mortimer + espadon + Jacobs

- Mortimer → *Francis Blake* ✓ — Mortimer est le compagnon de Blake, héros de la bande dessinée Blake et Mortimer.

**Nom 2 : Corto Maltese** (trouvé à la brique 2) — briques : Pratt + Venise + marin

- Pratt → *Hugo Pratt* ✗ — Francis Blake est trouvé, et Pratt est le créateur de Corto Maltese et de la BD réaliste italienne.
- Pratt + Venise → *Corto Maltese* ✓ — Francis Blake est trouvé, Hugo Pratt a été refusé, et Venise évoque Corto Maltese, héros de la BD réaliste de Pratt.

**Nom 3 : Valérian** (trouvé à la brique 1) — briques : Laureline + Mézières + spatio-temporel

- Laureline → *Valérian* ✓ — Blake et Corto Maltese sont trouvés, et Laureline est la compagne de Valérian, héros de BD réaliste.

**Nom 4 : Blueberry** (trouvé à la brique 2) — briques : Giraud + lieutenant + Ouest

- Giraud → *Moebius* ✗ — Blake, Corto Maltese et Valérian sont trouvés, et Giraud est le vrai nom de Moebius, dessinateur de la BD réaliste.
- Giraud + lieutenant → *Blueberry* ✓ — Blake, Corto Maltese et Valérian sont trouvés, Moebius a été refusé, et Giraud avec lieutenant désigne la BD Blueberry.

### np-403 : Grandes villes du monde

**Nom 1 : New York** (trouvé à la brique 1) — briques : Manhattan + gratte-ciel + Big Apple

- Manhattan → *New York* ✓ — Manhattan est un quartier de New York, grande ville du monde.

**Nom 2 : Londres** (trouvé à la brique 1) — briques : Tamise + Buckingham + bus rouge

- Tamise → *Londres* ✓ — New York est trouvé, et la Tamise traverse Londres, grande ville du monde.

**Nom 3 : Rio de Janeiro** (trouvé à la brique 1) — briques : Copacabana + Corcovado + carnaval

- Copacabana → *Rio de Janeiro* ✓ — New York et Londres sont trouvées, et Copacabana est une plage de Rio de Janeiro, grande ville du monde.

**Nom 4 : Venise** (trouvé à la brique 1) — briques : gondoles + canaux + doges

- gondoles → *Venise* ✓ — New York, Londres et Rio sont trouvées, et les gondoles désignent Venise.

### np-420 : Champions de tennis

**Nom 1 : Roger Federer** (trouvé à la brique 1) — briques : Bâle + élégance + Wimbledon

- Bâle → *Roger Federer* ✓ — Bâle est associée à Roger Federer, champion de tennis suisse originaire de la ville.

**Nom 2 : Rafael Nadal** (trouvé à la brique 1) — briques : Majorque + terre battue + Roland-Garros

- Majorque → *Rafael Nadal* ✓ — Federer est trouvé, et Majorque est la terre natale de Rafael Nadal, champion de tennis.

**Nom 3 : Yannick Noah** (trouvé à la brique 1) — briques : dreadlocks + Saga Africa + Joakim

- dreadlocks → *Yannick Noah* ✓ — Federer et Nadal sont trouvés, et les dreadlocks évoquent Yannick Noah, champion de tennis français.

**Nom 4 : Serena Williams** (trouvé à la brique 1) — briques : Venus + sœur + Américaine

- Venus → *Serena Williams* ✓ — Federer, Nadal et Noah sont trouvés, et Vénus désigne Serena Williams, championne de tennis américaine.

### np-424 : Actrices françaises

**Nom 1 : Brigitte Bardot** (trouvé à la brique 1) — briques : BB + Saint-Tropez + animaux

- BB → *Brigitte Bardot* ✓ — BB désigne Brigitte Bardot, actrice française.

**Nom 2 : Catherine Deneuve** (trouvé à la brique 1) — briques : Parapluies + Cherbourg + Belle de jour

- Parapluies → *Catherine Deneuve* ✓ — Bardot est trouvée, et Les Parapluies de Cherbourg sont un film de Catherine Deneuve, actrice française.

**Nom 3 : Audrey Tautou** (trouvé à la brique 1) — briques : Amélie Poulain + Da Vinci Code + Coco

- Amélie Poulain → *Audrey Tautou* ✓ — Bardot et Deneuve sont trouvées, et Amélie Poulain est le rôle d'Audrey Tautou, actrice française.

**Nom 4 : Marion Cotillard** (trouvé à la brique 1) — briques : Piaf + oscar + Taxi

- Piaf → *Marion Cotillard* ✓ — Bardot, Deneuve et Tautou sont trouvées, et Piaf désigne Marion Cotillard, qui l'a incarnée dans La Môme.

### np-432 : Marques gourmandes

**Nom 1 : Coca-Cola** (trouvé à la brique 1) — briques : soda + bouteille + recette secrète

- soda → *Coca-Cola* ✓ — Le soda le plus connu est le Coca-Cola, marque gourmande.

**Nom 2 : Nutella** (trouvé à la brique 1) — briques : pâte à tartiner + noisettes + Ferrero

- pâte à tartiner → *Nutella* ✓ — Coca-Cola est trouvé, et la pâte à tartiner la plus connue est Nutella, marque gourmande.

**Nom 3 : Haribo** (trouvé à la brique 1) — briques : bonbons + Tagada + ours

- bonbons → *Haribo* ✓ — Coca-Cola et Nutella sont trouvés, et les bonbons désignent Haribo, marque gourmande.

**Nom 4 : Danone** (trouvé à la brique 1) — briques : yaourt + Actimel + Danette

- yaourt → *Danone* ✓ — Coca-Cola, Nutella et Haribo sont trouvés, et le yaourt désigne la marque Danone.

### np-434 : Outre-mer français

**Nom 1 : Martinique** (trouvé à la brique 1) — briques : Fort-de-France + Madinina + montagne Pelée

- Fort-de-France → *Martinique* ✓ — Fort-de-France est la préfecture de la Martinique, département d'outre-mer.

**Nom 2 : La Réunion** (trouvé à la brique 1) — briques : piton de la Fournaise + océan Indien + Saint-Denis

- piton de la Fournaise → *La Réunion* ✓ — Martinique est trouvée, et le piton de la Fournaise est un volcan de La Réunion, département d'outre-mer.

**Nom 3 : Tahiti** (trouvé à la brique 1) — briques : vahiné + Polynésie + Papeete

- vahiné → *Tahiti* ✓ — Martinique et La Réunion sont trouvées, et la vahiné évoque Tahiti, en Polynésie française.

**Nom 4 : Guyane** (trouvé à la brique 1) — briques : Kourou + fusée + Cayenne

- Kourou → *Guyane* ✓ — Martinique, La Réunion et Tahiti sont trouvées, et Kourou est la base spatiale de Guyane.

### np-437 : Mers et océans

**Nom 1 : Méditerranée** (trouvé à la brique 1) — briques : Grande Bleue + Corse + Marseille

- Grande Bleue → *Méditerranée* ✓ — La Grande Bleue désigne la Méditerranée, mer.

**Nom 2 : Pacifique** (trouvé à la brique 1) — briques : Hawaï + le plus grand + Polynésie

- Hawaï → *Pacifique* ✓ — Méditerranée est trouvée, et Hawaï se trouve dans l'océan Pacifique.

**Nom 3 : Manche** (trouvé à la brique 1) — briques : tunnel + Calais + Douvres

- tunnel → *La Manche* ✓ — Méditerranée et Pacifique sont trouvés, et le tunnel désigne le tunnel sous La Manche.

**Nom 4 : Mer Morte** (trouvé à la brique 1) — briques : sel + flotter + Israël

- sel → *mer Morte* ✓ — Méditerranée, Pacifique et La Manche sont trouvées, et le sel évoque la mer Morte, très salée.

### np-441 : Personnages de Star Wars

**Nom 1 : Dark Vador** (trouvé à la brique 1) — briques : masque + respiration + Empire

- masque → *Dark Vador* ✓ — Le masque est un élément visuel associé à Dark Vador, personnage de Star Wars.

**Nom 2 : Yoda** (trouvé à la brique 1) — briques : petit + oreilles pointues + maître Jedi

- petit → *Yoda* ✓ — Dark Vador est trouvé, et petit désigne Yoda, personnage de Star Wars.

**Nom 3 : Chewbacca** (trouvé à la brique 1) — briques : Wookiee + poils + Han Solo

- Wookiee → *Chewbacca* ✓ — Dark Vador et Yoda sont trouvés, et le Wookiee désigne Chewbacca, personnage de Star Wars.

**Nom 4 : Luke Skywalker** (trouvé à la brique 1) — briques : sabre laser + Leia + Tatooine

- sabre laser → *Luke Skywalker* ✓ — Dark Vador, Yoda et Chewbacca sont trouvés, et le sabre laser désigne Luke Skywalker, personnage de Star Wars.

### np-448 : Présidents de la République

**Nom 1 : Charles de Gaulle** (trouvé à la brique 1) — briques : croix de Lorraine + appel + Colombey

- croix de Lorraine → *Charles de Gaulle* ✓ — La croix de Lorraine est le symbole de la France libre de Charles de Gaulle, président de la République.

**Nom 2 : Jacques Chirac** (trouvé à la brique 2) — briques : Corrèze + pommes + Bernadette

- Corrèze → *François Hollande* ✗ — De Gaulle est trouvé, et la Corrèze est le département de François Hollande, président de la République.
- Corrèze + pommes → *Jacques Chirac* ✓ — De Gaulle est trouvé, Hollande a été refusé, et la Corrèze évoque Jacques Chirac, président de la République.

**Nom 3 : François Mitterrand** (trouvé à la brique 1) — briques : rose + Jarnac + Mazarine

- rose → *François Mitterrand* ✓ — De Gaulle et Chirac sont trouvés, Hollande a été refusé, et la rose désigne le président socialiste Mitterrand.

**Nom 4 : Emmanuel Macron** (trouvé à la brique 1) — briques : Brigitte + En marche + Amiens

- Brigitte → *Emmanuel Macron* ✓ — De Gaulle, Chirac et Mitterrand sont trouvés, Hollande a été refusé, et Brigitte désigne l'épouse de Macron, président de la République.

### np-449 : Présidents américains

**Nom 1 : Abraham Lincoln** (trouvé à la brique 1) — briques : esclavage + haut-de-forme + Gettysburg

- esclavage → *Abraham Lincoln* ✓ — Lincoln est associé à l'abolition de l'esclavage, président américain.

**Nom 2 : John F. Kennedy** (non trouvé) — briques : Dallas + Jackie + Cuba

- Dallas → *John Fitzgerald Kennedy* ✗ — Lincoln est trouvé, et Dallas est la ville où fut assassiné Kennedy, président américain.
- Dallas (« Complétez ») → *Lyndon Baines Johnson* ✗ — Lincoln est trouvé, Kennedy a été refusé, et Dallas évoque le successeur Lyndon Johnson, président américain. Dico demande le nom complet.
- Dallas + Jackie → *Andrew Jackson* ✗ — Lincoln est trouvé, Kennedy et Johnson ont été refusés, et Jackie évoque Jackson, président américain.
- Dallas + Jackie + Cuba → *Dwight David Eisenhower* ✗ — Lincoln est trouvé, Kennedy, Jackson et Johnson ont été refusés, et Cuba évoque la baie des Cochons planifiée sous Eisenhower.

**Nom 3 : George Washington** (trouvé à la brique 1) — briques : premier + dollar + cerisier

- premier → *George Washington* ✓ — Lincoln est trouvé, Kennedy, Jackson, Eisenhower et Johnson ont été refusés, et premier désigne George Washington, premier président américain.

**Nom 4 : Barack Obama** (trouvé à la brique 1) — briques : Michelle + Hawaï + Yes we can

- Michelle → *Barack Obama* ✓ — Lincoln et Washington sont trouvés, Kennedy, Jackson, Eisenhower et Johnson ont été refusés, et Michelle désigne Barack Obama, son mari.

### np-501 : Opéras de Verdi

**Nom 1 : Aïda** (trouvé à la brique 1) — briques : Égypte + Radamès + marche triomphale

- Égypte → *Aida* ✓ — L'Égypte est le cadre de l'opéra Aida de Verdi.

**Nom 2 : Rigoletto** (trouvé à la brique 1) — briques : bouffon + Mantoue + bossu

- bouffon → *Rigoletto* ✓ — Aida est trouvée, et le bouffon désigne Rigoletto, opéra de Verdi.

**Nom 3 : Nabucco** (trouvé à la brique 1) — briques : Babylone + Hébreux + chœur des esclaves

- Babylone → *Nabucco* ✓ — Aida et Rigoletto sont trouvés, et Babylone est le cadre de Nabucco, opéra de Verdi.

**Nom 4 : Le Trouvère** (trouvé à la brique 1) — briques : gitane + Azucena + chœur des enclumes

- gitane → *Il trovatore* ✓ — Aida, Rigoletto et Nabucco sont trouvés, et la gitane évoque Il trovatore, opéra de Verdi au personnage tzigane.

### np-505 : Fauves et cubistes

**Nom 1 : Matisse** (trouvé à la brique 1) — briques : odalisques + Nice + papiers découpés

- odalisques → *Henri Matisse* ✓ — Les odalisques sont un thème célèbre de Matisse, peintre fauve.

**Nom 2 : Braque** (trouvé à la brique 1) — briques : Estaque + oiseaux + papiers collés

- Estaque → *Georges Braque* ✓ — Matisse est trouvé, et L'Estaque est le lieu où Braque a peint le cubisme naissant.

**Nom 3 : Derain** (trouvé à la brique 1) — briques : Collioure + Chatou + Tamise

- Collioure → *André Derain* ✓ — Matisse et Braque sont trouvés, et Collioure est le lieu où Derain a peint avec Matisse, peintre fauve.

**Nom 4 : Fernand Léger** (trouvé à la brique 2) — briques : tubes + Biot + Constructeurs

- tubes → *Maurice de Vlaminck* ✗ — Matisse, Braque et Derain sont trouvés, et les tubes de peinture évoquent Vlaminck, peintre fauve.
- tubes + Biot → *Fernand Léger* ✓ — Matisse, Braque et Derain sont trouvés, Vlaminck a été refusé, et tubes avec Biot désignent Fernand Léger, qui vécut à Biot.

### np-511 : Moralistes et fabulistes du Grand Siècle

**Nom 1 : La Fontaine** (trouvé à la brique 1) — briques : Château-Thierry + Fables + Le Corbeau et le Renard

- Château-Thierry → *Jean de La Fontaine* ✓ — Château-Thierry est la ville natale de Jean de La Fontaine, fabuliste du Grand Siècle.

**Nom 2 : La Bruyère** (trouvé à la brique 1) — briques : Théophraste + Condé + Les Caractères

- Théophraste → *Jean de La Bruyère* ✓ — La Fontaine est trouvé, et Théophraste est l'auteur antique dont La Bruyère a traduit les Caractères, moraliste du Grand Siècle.

**Nom 3 : La Rochefoucauld** (trouvé à la brique 1) — briques : Fronde + amour-propre + Maximes

- Fronde → *François de La Rochefoucauld* ✓ — La Fontaine et La Bruyère sont trouvés, et la Fronde est liée à La Rochefoucauld, moraliste du Grand Siècle.

**Nom 4 : Boileau** (trouvé à la brique 1) — briques : Lutrin + Satires + Art poétique

- Lutrin → *Nicolas Boileau* ✓ — La Fontaine, La Bruyère et La Rochefoucauld sont trouvés, et le Lutrin est le poème satirique de Boileau.

### np-524 : Héroïnes de la mythologie grecque

**Nom 1 : Pénélope** (trouvé à la brique 1) — briques : Ithaque + prétendants + tapisserie

- Ithaque → *Pénélope* ✓ — Ithaque est le royaume d'Ulysse, et Pénélope est son épouse, héroïne de la mythologie grecque.

**Nom 2 : Eurydice** (trouvé à la brique 3) — briques : serpent + Enfers + Orphée

- serpent → *Méduse* ✗ — Pénélope est trouvée, et le serpent évoque Méduse, héroïne de la mythologie grecque.
- serpent + Enfers → *Perséphone* ✗ — Pénélope est trouvée, Méduse a été refusée, et les Enfers et le serpent évoquent Perséphone, héroïne de la mythologie grecque.
- serpent + Enfers + Orphée → *Eurydice* ✓ — Pénélope est trouvée, Méduse et Perséphone ont été refusées, et le serpent, les Enfers et Orphée désignent Eurydice.

**Nom 3 : Pandore** (trouvé à la brique 1) — briques : Épiméthée + espérance + boîte

- Épiméthée → *Pandore* ✓ — Pénélope, Eurydice sont trouvées, et Épiméthée est le frère de Pandore, héroïne de la mythologie grecque.

**Nom 4 : Hélène** (trouvé à la brique 1) — briques : Sparte + Ménélas + Pâris

- Sparte → *Hélène* ✓ — Pénélope, Eurydice et Pandore sont trouvées, et Sparte est la cité de la reine Hélène dans la mythologie grecque.

### np-528 : Ministres de l'Ancien Régime

**Nom 1 : Mazarin** (trouvé à la brique 1) — briques : Italien + cardinal + Fronde

- Italien → *Jules Mazarin* ✓ — Mazarin est un ministre d'Ancien Régime d'origine italienne.

**Nom 2 : Colbert** (trouvé à la brique 1) — briques : manufactures + marine + Fouquet

- manufactures → *Jean-Baptiste Colbert* ✓ — Mazarin est trouvé, et les manufactures sont associées à Colbert, ministre de l'Ancien Régime.

**Nom 3 : Sully** (trouvé à la brique 1) — briques : Rosny + labourage + pâturage

- Rosny → *Sully* ✓ — Mazarin et Colbert sont trouvés, et Rosny désigne Sully, ministre de l'Ancien Régime.

**Nom 4 : Necker** (trouvé à la brique 1) — briques : Genève + Madame de Staël + Compte rendu au roi

- Genève → *Jacques Necker* ✓ — Mazarin, Colbert et Sully sont trouvés, et Genève est la ville d'origine de Necker, ministre de Louis XVI.

### np-534 : Pionniers de l'aviation

**Nom 1 : Louis Blériot** (trouvé à la brique 1) — briques : monoplan + Douvres + traversée de la Manche

- monoplan → *Louis Blériot* ✓ — Le monoplan est associé à Louis Blériot, pionnier de l'aviation.

**Nom 2 : Saint-Exupéry** (trouvé à la brique 1) — briques : Courrier sud + Vol de nuit + Petit Prince

- Courrier sud → *Antoine de Saint-Exupéry* ✓ — Blériot est trouvé, et Courrier sud est un roman de Saint-Exupéry, pionnier de l'aviation.

**Nom 3 : Jean Mermoz** (trouvé à la brique 1) — briques : Aéropostale + Atlantique Sud + Croix-du-Sud

- Aéropostale → *Jean Mermoz* ✓ — Blériot et Saint-Exupéry sont trouvés, et l'Aéropostale est liée à Jean Mermoz, pionnier de l'aviation.

**Nom 4 : Roland Garros** (trouvé à la brique 1) — briques : Méditerranée + Bizerte + stade

- Méditerranée → *Roland Garros* ✓ — Blériot, Saint-Exupéry et Mermoz sont trouvés, et la Méditerranée évoque Roland Garros, aviateur qui la traversa.

### np-542 : Groupes de rock britanniques

**Nom 1 : Led Zeppelin** (trouvé à la brique 1) — briques : dirigeable + Robert Plant + Stairway to Heaven

- dirigeable → *Led Zeppelin* ✓ — Le dirigeable évoque le nom du groupe britannique Led Zeppelin.

**Nom 2 : The Who** (trouvé à la brique 1) — briques : Townshend + guitares cassées + Tommy

- Townshend → *The Who* ✓ — Led Zeppelin est trouvé, et Townshend est le guitariste de The Who, groupe de rock britannique.

**Nom 3 : Pink Floyd** (trouvé à la brique 1) — briques : prisme + The Wall + Dark Side of the Moon

- prisme → *Pink Floyd* ✓ — Led Zeppelin et The Who sont trouvés, et le prisme évoque la pochette de Pink Floyd, groupe de rock britannique.

**Nom 4 : Oasis** (trouvé à la brique 1) — briques : Manchester + Gallagher + Wonderwall

- Manchester → *Oasis* ✓ — Led Zeppelin, The Who et Pink Floyd sont trouvés, et Manchester est la ville du groupe britannique Oasis.

### np-549 : Villes ibériques

**Nom 1 : Séville** (trouvé à la brique 1) — briques : Andalousie + Giralda + Guadalquivir

- Andalousie → *Séville* ✓ — L'Andalousie a pour capitale Séville, ville ibérique.

**Nom 2 : Grenade** (trouvé à la brique 1) — briques : Boabdil + Sierra Nevada + Albaicín

- Boabdil → *Grenade* ✓ — Séville est trouvée, et Boabdil est le dernier roi de Grenade, ville ibérique.

**Nom 3 : Barcelone** (trouvé à la brique 1) — briques : Ramblas + Gaudí + Sagrada Família

- Ramblas → *Barcelone* ✓ — Séville et Grenade sont trouvées, et les Ramblas sont à Barcelone, ville ibérique.

**Nom 4 : Porto** (trouvé à la brique 2) — briques : vin + Ribeira + Douro

- vin → *Jerez* ✗ — Séville, Grenade et Barcelone sont trouvées, et le vin évoque Jerez, cité du xérès en Andalousie.
- vin + Ribeira → *Porto* ✓ — Séville, Grenade et Barcelone sont trouvées, Jerez a été refusé, et le vin avec Ribeira désigne Porto, ville ibérique.
