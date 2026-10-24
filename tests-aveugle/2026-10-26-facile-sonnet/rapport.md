# Test à l'aveugle de Syno, joué comme en partie (niveau @tests-aveugle/echantillon-facile-reecrit.json)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-003 | facile | Compagnon des jours gris | ciel (1/2), bouclier (1/3), baleines (1/2), vent (1/2), train (2/3) | 7 | ✓ | 13 |
| e-006 | facile | Le dormeur | ~~siècles~~, feu (2/2), lave (1/2), ~~ville~~, cratère (1/3) | 0 | ✓ | 4 |
| e-007 | facile | Il passe chaque matin | tournée (1/3), sacoche (1/3), lettres (1/2), boîte (2/2), vélo (1/2) | 7 | ✓ | 13 |
| e-008 | facile | Or liquide | ruche (1/3), abeilles (1/2), nectar (1/2), sucré (2/2), tranche (1/2) | 7 | ✓ | 13 |
| e-009 | facile | Septième art | salle (2/2), écran (1/2), réalisateur (1/3), scène (2/3), actrice (1/2) | 6 | ✓ | 12 |
| e-403 | facile | Pôle Nord de la cuisine | armoire (1/3), frais (1/2), beurre (1/2), yaourts (1/2), jambon (2/2) | 7 | ✓ | 13 |
| e-428 | facile | Tchou-tchou ! | quai (1/2), voie (2/3), wagon (1/3), contrôleur (1/3), billets (1/2) | 7 | ✓ | 13 |
| e-430 | facile | Hotte sur le dos | traîneau (1/3), rennes (1/2), cheminée (1/3), cadeaux (1/2), sapin (1/3) | 8 | ✓ | 14 |
| e-435 | facile | Petite reine | selle (2/2), guidon (1/2), pédales (1/2), équilibre (1/2), chambre (2/3) | 6 | ✓ | 12 |
| e-437 | facile | Au-dessus des nuages | aéroport (1/2), valises (1/2), pilote (1/2), piste (2/3), hôtesse (1/2) | 7 | ✓ | 13 |

Score moyen : 12.0 sur 10 énigme(s).

Mots trouvés : 37 à la brique 1, 11 à la brique 2, 2 non trouvés.

## Raisonnement de Syno

### e-003 : « Compagnon des jours gris » → un parapluie

**Mot 1 : ciel** (trouvé à la brique 1, mise 2) — piste : firmament + nuages

- firmament → *ciel* ✓ — Firmament a pour synonyme direct ciel, et le ciel est gris les jours gris.

**Mot 2 : bouclier** (trouvé à la brique 1, mise 3) — piste : écu + épée + bouteille

- écu → *bouclier* ✓ — Écu est un bouclier ; le compagnon des jours gris, c'est ce qui protège de la pluie.

**Mot 3 : baleines** (trouvé à la brique 1, mise 2) — piste : cétacés + haut

- cétacés → *baleines* ✓ — Les baleines sont des cétacés, et ce sont aussi les tiges du parapluie, compagnon des jours gris.

**Mot 4 : vent** (trouvé à la brique 1, mise 2) — piste : brise + acheter

- brise → *vent* ✓ — Brise est un vent léger ; le parapluie affronte le vent comme la pluie.

**Mot 5 : train** (trouvé à la brique 2, mise 3) — piste : convoi + rails + accélérateur

- convoi → *cortège* ✗ — Convoi a pour synonyme cortège ; je n'ai pas d'autre lien net avec le parapluie, c'est le synonyme le plus proche.
- convoi + rails → *train* ✓ — Convoi et rails désignent le train.

**Solution : un parapluie** — texte découvert : « Je m'ouvre quand le ciel est menaçant ; je suis votre bouclier contre l'averse ; mes baleines plient par grand vent ; on m'oublie souvent dans le train. »

- *le parapluie* ✓ — S'ouvre sous la menace du ciel, bouclier contre l'averse, baleines, oublié dans le train.

### e-006 : « Le dormeur » → un volcan

**Mot 1 : siècles** (non trouvé, mise 2) — piste : époques + terre

- époques → *âges* ✗ — Époques est un nom pluriel ; âges en est un synonyme pluriel, lié au sommeil des dormeurs à travers les âges.
- époques + terre → *ères* ✗ — Époques et terre évoquent les ères géologiques ; âges est écarté.

**Mot 2 : feu** (trouvé à la brique 2, mise 2) — piste : flamme + beaucoup

- flamme → *veilleuse* ✗ — Flamme évoque une petite lumière qui veille près du dormeur : la veilleuse.
- flamme + beaucoup → *feu* ✓ — Flamme évoque le feu ; beaucoup, par son contraire peu, donne le son final de feu.

**Mot 3 : lave** (trouvé à la brique 1, mise 2) — piste : magma + ici

- magma → *lave* ✓ — Magma devenu lave, dans la suite feu du dormeur (volcan endormi).

**Mot 4 : ville** (non trouvé, mise 2) — piste : cité + mort

- cité → *Pompéi* ✗ — Une cité détruite par la lave du volcan : Pompéi, la ville endormie.
- cité + mort → *nécropole* ✗ — Cité et mort donnent la cité des morts, la nécropole ; Pompéi est écarté.

**Mot 5 : cratère** (trouvé à la brique 1, mise 3) — piste : bouche + Lune + grenouille

- bouche → *cratère* ✓ — Feu et lave évoquent un volcan, dont la bouche est le cratère.

**Solution : un volcan** — texte découvert : « Je dors parfois pendant des ____ ; à mon réveil, je crache du feu et de la lave ; j'ai jadis enseveli une ____ romaine ; mon cratère fume au sommet. »

- *le volcan* ✓ — Dort des siècles, crache feu et lave, a enseveli une ville romaine, cratère fumant : un volcan.

### e-007 : « Il passe chaque matin » → le facteur

**Mot 1 : tournée** (trouvé à la brique 1, mise 3) — piste : virée + concerts + rien

- virée → *tournée* ✓ — Virée a pour synonyme tournée, ce que fait le facteur qui passe chaque matin.

**Mot 2 : sacoche** (trouvé à la brique 1, mise 3) — piste : besace + cartable + propre

- besace → *sacoche* ✓ — Besace est un sac, et le facteur qui passe chaque matin porte une sacoche.

**Mot 3 : lettres** (trouvé à la brique 1, mise 2) — piste : missives + beau

- missives → *lettres* ✓ — Missives a pour synonyme lettres, que le facteur distribue chaque matin.

**Mot 4 : boîte** (trouvé à la brique 2, mise 2) — piste : coffret + manger

- coffret → *colis* ✗ — Un coffret est un petit contenant proche du colis, que le facteur distribue.
- coffret + manger → *boîte* ✓ — Coffret est une boîte ; manger évoque boire [bwa], début de boîte, qui écarte colis.

**Mot 5 : vélo** (trouvé à la brique 1, mise 2) — piste : bicyclette + mensonge

- bicyclette → *vélo* ✓ — Bicyclette a pour synonyme vélo, que le facteur utilise.

**Solution : le facteur** — texte découvert : « Je fais ma tournée chaque matin ; ma sacoche est pleine de lettres ; je glisse le courrier dans la boîte ; jadis, je circulais à vélo. »

- *le facteur* ✓ — Tournée, sacoche, lettres, courrier : le facteur.

### e-008 : « Or liquide » → le miel

**Mot 1 : ruche** (trouvé à la brique 1, mise 3) — piste : nid + alvéoles + lisse

- nid → *ruche* ✓ — L'or liquide évoque le miel ; le nid des abeilles est la ruche.

**Mot 2 : abeilles** (trouvé à la brique 1, mise 2) — piste : bourdons + lendemain

- bourdons → *abeilles* ✓ — Les bourdons sont des insectes proches des abeilles, productrices du miel (or liquide).

**Mot 3 : nectar** (trouvé à la brique 1, mise 2) — piste : ambroisie + tôt

- ambroisie → *nectar* ✓ — Ambroisie, nourriture des dieux, est proche de nectar, matière première du miel.

**Mot 4 : sucré** (trouvé à la brique 2, mise 2) — piste : doux + nord

- doux → *miel* ✗ — Doux qualifie le miel, l'or liquide produit par les abeilles.
- doux + nord → *sucre* ✓ — Doux pour sucré ; nord évoque sud [syd], dont le son initial est celui de sucre.

**Mot 5 : tranche** (trouvé à la brique 1, mise 2) — piste : rondelle + vingt-neuf

- rondelle → *tranche* ✓ — Rondelle est une coupe fine : tranche, par exemple de pain d'épices au miel.

**Solution : le miel** — texte découvert : « Je suis né dans une ruche ; les abeilles m'ont fabriqué avec le nectar des fleurs ; je suis sucré et doré ; on m'étale sur une tranche de pain. »

- *le miel* ✓ — Ruche, abeilles, nectar, sucré, doré, tartiné sur du pain : le miel.

### e-009 : « Septième art » → le cinéma

**Mot 1 : salle** (trouvé à la brique 2, mise 2) — piste : pièce + propre

- pièce → *scène* ✗ — Pièce de théâtre ou de cinéma renvoie à une scène, mot du septième art.
- pièce + propre → *salle* ✓ — Pièce est un synonyme de salle ; propre évoque le contraire sale, qui sonne comme salle (salle de cinéma).

**Mot 2 : écran** (trouvé à la brique 1, mise 2) — piste : moniteur + boulon

- moniteur → *écran* ✓ — Moniteur est un synonyme d'écran, support du cinéma.

**Mot 3 : réalisateur** (trouvé à la brique 1, mise 3) — piste : Truffaut + producteur + do

- Truffaut → *réalisateur* ✓ — Truffaut était un réalisateur, métier du septième art.

**Mot 4 : scène** (trouvé à la brique 2, mise 3) — piste : séquence + théâtre + six

- séquence → *plan* ✗ — Séquence de film : le plan est l'unité du cinéma.
- séquence + théâtre → *scène* ✓ — Séquence et théâtre convergent vers scène (plan est écarté).

**Mot 5 : actrice** (trouvé à la brique 1, mise 2) — piste : comédienne + désaccord

- comédienne → *actrice* ✓ — Comédienne a pour synonyme actrice, au cinéma.

**Solution : le cinéma** — texte découvert : « Dans la salle obscure, on fixe le grand écran ; le réalisateur crie « Moteur ! » ; une scène jouée par une actrice fait pleurer le public. »

- *le cinéma* ✓ — Salle obscure, écran, réalisateur, scène, actrice : le cinéma.

### e-403 : « Pôle Nord de la cuisine » → le réfrigérateur

**Mot 1 : armoire** (trouvé à la brique 1, mise 3) — piste : placard + normande + fusil

- placard → *armoire* ✓ — Placard a pour synonyme armoire ; le pôle Nord de la cuisine serait le frigo, mais le synonyme le plus proche est armoire.

**Mot 2 : frais** (trouvé à la brique 1, mise 2) — piste : frisquet + sœur

- frisquet → *frais* ✓ — Frisquet est un synonyme familier de frais, adjectif lié au froid de la cuisine.

**Mot 3 : beurre** (trouvé à la brique 1, mise 2) — piste : margarine + courage

- margarine → *beurre* ✓ — Margarine remplace le beurre, qu'on garde au frais dans le frigo.

**Mot 4 : yaourts** (trouvé à la brique 1, mise 2) — piste : Danone + long

- Danone → *yaourt* ✓ — Danone est une marque de yaourt, produit gardé au frais dans le frigo.

**Mot 5 : jambon** (trouvé à la brique 2, mise 2) — piste : saucisson + mauvais

- saucisson → *charcuterie* ✗ — Saucisson est de la charcuterie, rangée au frigo.
- saucisson + mauvais → *jambon* ✓ — Saucisson évoque le jambon ; mauvais évoque bon, dont le son finit jambon.

**Solution : le réfrigérateur** — texte découvert : « Dans la cuisine, cette grande armoire blanche garde au frais le beurre, les yaourts et le jambon. »

- *le réfrigérateur* ✓ — Grande armoire blanche qui garde au frais beurre, yaourts, jambon : le réfrigérateur.

### e-428 : « Tchou-tchou ! » → le train

**Mot 1 : quai** (trouvé à la brique 1, mise 2) — piste : embarcadère + Montréal

- embarcadère → *quai* ✓ — Embarcadère se dit quai, lieu où l'on attend le train (tchou-tchou).

**Mot 2 : voie** (trouvé à la brique 2, mise 3) — piste : chemin + ferrée + entendre

- chemin → *rail* ✗ — Chemin évoque le chemin de fer, donc le rail du train.
- chemin + ferrée → *voie* ✓ — Chemin de fer / voie ferrée : voie est le mot du train, rail étant déjà écarté.

**Mot 3 : wagon** (trouvé à la brique 1, mise 3) — piste : voiture + compartiment + taureau

- voiture → *wagon* ✓ — Une voiture de train se dit wagon.

**Mot 4 : contrôleur** (trouvé à la brique 1, mise 3) — piste : inspecteur + amende + pour

- inspecteur → *contrôleur* ✓ — Inspecteur du train se dit contrôleur.

**Mot 5 : billets** (trouvé à la brique 1, mise 2) — piste : tickets + boules

- tickets → *billets* ✓ — Tickets au pluriel se dit billets, que le contrôleur vérifie.

**Solution : le train** — texte découvert : « Sur le quai, on attend en regardant l'horloge ; il arrive sur la voie ; on monte dans un wagon ; le contrôleur vérifie les billets. »

- *le train* ✓ — Quai, voie, wagon, contrôleur, billets : le train.

### e-430 : « Hotte sur le dos » → le père Noël

**Mot 1 : traîneau** (trouvé à la brique 1, mise 3) — piste : luge + chiens + vos

- luge → *traîneau* ✓ — Luge est proche de traîneau, véhicule du Père Noël à la hotte sur le dos.

**Mot 2 : rennes** (trouvé à la brique 1, mise 2) — piste : cervidés + roi

- cervidés → *rennes* ✓ — Cervidés au pluriel : les rennes tirent le traîneau du Père Noël.

**Mot 3 : cheminée** (trouvé à la brique 1, mise 3) — piste : âtre + ramoneur + cravate

- âtre → *cheminée* ✓ — L'âtre est le foyer de la cheminée, par où descend le Père Noël.

**Mot 4 : cadeaux** (trouvé à la brique 1, mise 2) — piste : présents + aîné

- présents → *cadeaux* ✓ — Présents au pluriel : les cadeaux que porte le Père Noël dans sa hotte.

**Mot 5 : sapin** (trouvé à la brique 1, mise 3) — piste : conifère + guirlande + vin

- conifère → *sapin* ✓ — Le sapin est un conifère, arbre de Noël au pied duquel sont les cadeaux.

**Solution : le père Noël** — texte découvert : « Dans son traîneau tiré par des rennes, il descend par la cheminée et dépose les cadeaux au pied du sapin. »

- *le Père Noël* ✓ — Traîneau, rennes, cheminée, cadeaux, sapin : c'est le Père Noël.

### e-435 : « Petite reine » → la bicyclette

**Mot 1 : selle** (trouvé à la brique 2, mise 2) — piste : étrier + poivre

- étrier → *pédale* ✗ — L'étrier est une pièce où l'on pose le pied, comme la pédale de la petite reine, le vélo.
- étrier + poivre → *selle* ✓ — Étrier va avec selle ; poivre évoque sel, qui commence comme selle.

**Mot 2 : guidon** (trouvé à la brique 1, mise 2) — piste : volant + houx

- volant → *guidon* ✓ — Le volant d'un vélo est le guidon, pièce de la petite reine.

**Mot 3 : pédales** (trouvé à la brique 1, mise 2) — piste : accélérateur + mémé

- accélérateur → *pédale* ✓ — Sur le vélo, la pédale joue le rôle d'accélérateur ; la série selle, guidon, pédale est cohérente.

**Mot 4 : équilibre** (trouvé à la brique 1, mise 2) — piste : stabilité + occupé

- stabilité → *équilibre* ✓ — Stabilité se dit équilibre, ce dont a besoin le cycliste.

**Mot 5 : chambre** (trouvé à la brique 2, mise 3) — piste : pièce + pneu + Élysées

- pièce → *roue* ✗ — Pièce du vélo après selle, guidon, pédale : la roue.
- pièce + pneu → *chambre* ✓ — Pièce renvoie à chambre, et le pneu contient une chambre à air ; roue est écartée.

**Solution : la bicyclette** — texte découvert : « On s'assoit sur la selle, on tient le guidon, on appuie sur les pédales ; il faut garder l'équilibre ; une crevaison, et il faut changer la chambre à air. »

- *le vélo* ✓ — Selle, guidon, pédales, équilibre, chambre à air : le vélo.

### e-437 : « Au-dessus des nuages » → l'avion

**Mot 1 : aéroport** (trouvé à la brique 1, mise 2) — piste : Roissy + cochon

- Roissy → *aéroport* ✓ — Roissy est un aéroport, lieu des avions au-dessus des nuages.

**Mot 2 : valises** (trouvé à la brique 1, mise 2) — piste : bagages + vient

- bagages → *valises* ✓ — Bagages au pluriel se dit valises, ce qu'on enregistre à l'aéroport avant l'avion.

**Mot 3 : pilote** (trouvé à la brique 1, mise 2) — piste : commandant + face

- commandant → *pilote* ✓ — Commandant de bord se dit pilote, dans l'avion au-dessus des nuages.

**Mot 4 : piste** (trouvé à la brique 2, mise 3) — piste : trace + atterrissage + mieux

- trace → *traînée* ✗ — Trace laissée dans le ciel par l'avion : la traînée.
- trace + atterrissage → *piste* ✓ — Trace se dit piste, et l'atterrissage se fait sur la piste ; traînée est écarté.

**Mot 5 : hôtesse** (trouvé à la brique 1, mise 2) — piste : steward + bas

- steward → *hôtesse* ✓ — Steward est un membre du personnel de cabine, pendant de l'hôtesse de l'air.

**Solution : l'avion** — texte découvert : « Dans l'aéroport, on dépose ses valises ; le pilote attend l'autorisation de quitter la piste ; à bord, l'hôtesse sert un plateau-repas. »

- *l'avion* ✓ — Aéroport, pilote, piste, hôtesse : l'avion.
