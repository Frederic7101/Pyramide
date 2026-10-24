# Test à l'aveugle de Syno, joué comme en partie (niveau @tests-aveugle/echantillon-facile-reecrit.json)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-003 | facile | Compagnon des jours gris | ciel (1/2), bouclier (1/3), baleines (1/2), vent (1/2), train (1/3) | 8 | ✓ | 14 |
| e-006 | facile | Le dormeur | siècles (2/2), feu (1/2), lave (1/2), ville (1/2), cratère (1/3) | 7 | ✓ | 13 |
| e-007 | facile | Il passe chaque matin | tournée (1/3), sacoche (1/3), lettres (1/2), boîte (1/2), vélo (1/2) | 8 | ✓ | 14 |
| e-008 | facile | Or liquide | ruche (1/3), abeilles (1/2), nectar (1/2), sucré (1/2), tranche (1/2) | 8 | ✓ | 14 |
| e-009 | facile | Septième art | salle (1/2), écran (1/2), réalisateur (2/3), scène (1/3), actrice (1/2) | 7 | ✓ | 13 |
| e-403 | facile | Pôle Nord de la cuisine | armoire (1/3), frais (2/2), beurre (1/2), yaourts (1/2), jambon (2/2) | 6 | ✓ | 12 |
| e-428 | facile | Tchou-tchou ! | quai (1/2), voie (1/3), wagon (1/3), contrôleur (1/3), billets (1/2) | 8 | ✓ | 14 |
| e-430 | facile | Hotte sur le dos | traîneau (1/3), rennes (1/2), cheminée (1/3), cadeaux (1/2), sapin (1/3) | 8 | ✓ | 14 |
| e-435 | facile | Petite reine | selle (2/2), guidon (1/2), pédales (1/2), équilibre (1/2), chambre (2/3) | 6 | ✓ | 12 |
| e-437 | facile | Au-dessus des nuages | aéroport (1/2), valises (1/2), pilote (1/2), piste (2/3), hôtesse (1/2) | 7 | ✓ | 13 |

Score moyen : 13.3 sur 10 énigme(s).

Mots trouvés : 43 à la brique 1, 7 à la brique 2.

## Raisonnement de Syno

### e-003 : « Compagnon des jours gris » → un parapluie

**Mot 1 : ciel** (trouvé à la brique 1, mise 2) — piste : firmament + nuages

- firmament → *ciel* ✓ — « Firmament » est un synonyme direct de « ciel », nom masculin singulier ; un ciel gris va avec le thème des jours gris.

**Mot 2 : bouclier** (trouvé à la brique 1, mise 3) — piste : écu + épée + bouteille

- écu → *bouclier* ✓ — L'écu est un bouclier ; le parapluie, compagnon des jours gris, protège du ciel comme un bouclier.

**Mot 3 : baleines** (trouvé à la brique 1, mise 2) — piste : cétacés + haut

- cétacés → *baleines* ✓ — Les cétacés sont les baleines, au pluriel ; le parapluie a des baleines.

**Mot 4 : vent** (trouvé à la brique 1, mise 2) — piste : brise + acheter

- brise → *vent* ✓ — La brise est un vent léger ; le parapluie affronte le vent les jours gris.

**Mot 5 : train** (trouvé à la brique 1, mise 3) — piste : convoi + rails + accélérateur

- convoi → *train* ✓ — Un convoi a pour synonyme direct « train », nom masculin singulier.

**Solution : un parapluie** — texte découvert : « Je m'ouvre quand le ciel est menaçant ; je suis votre bouclier contre l'averse ; mes baleines plient par grand vent ; on m'oublie souvent dans le train. »

- *le parapluie* ✓ — Il s'ouvre quand le ciel menace, protège de l'averse, a des baleines et s'oublie dans le train : c'est le parapluie.

### e-006 : « Le dormeur » → un volcan

**Mot 1 : siècles** (trouvé à la brique 2, mise 2) — piste : époques + terre

- époques → *ères* ✗ — « Époques » au pluriel appelle un synonyme pluriel : « ères ». Le dormeur traverse les ères.
- époques + terre → *siècles* ✓ — « Terre » ne s'accorde pas avec « époques » : c'est une incitation, terre → ciel → son [sjɛ]. Parmi les synonymes pluriels d'époques, « siècles » commence par ce son.

**Mot 2 : feu** (trouvé à la brique 1, mise 2) — piste : flamme + beaucoup

- flamme → *feu* ✓ — « Flamme » a pour synonyme direct « feu », nom masculin singulier.

**Mot 3 : lave** (trouvé à la brique 1, mise 2) — piste : magma + ici

- magma → *lave* ✓ — Le magma devient la lave ; le dormeur est un volcan endormi (feu, siècles).

**Mot 4 : ville** (trouvé à la brique 1, mise 2) — piste : cité + mort

- cité → *ville* ✓ — « Cité » a pour synonyme « ville » ; le volcan endormi qui ensevelit une ville sous la lave (Pompéi).

**Mot 5 : cratère** (trouvé à la brique 1, mise 3) — piste : bouche + Lune + grenouille

- bouche → *cratère* ✓ — La bouche du volcan est son cratère, d'où sortent le feu et la lave.

**Solution : un volcan** — texte découvert : « Je dors parfois pendant des siècles ; à mon réveil, je crache du feu et de la lave ; j'ai jadis enseveli une ville romaine ; mon cratère fume au sommet. »

- *le volcan* ✓ — Il dort des siècles, crache feu et lave, a enseveli Pompéi et a un cratère : c'est le volcan.

### e-007 : « Il passe chaque matin » → le facteur

**Mot 1 : tournée** (trouvé à la brique 1, mise 3) — piste : virée + concerts + rien

- virée → *tournée* ✓ — « Virée » a pour synonyme « tournée », même terminaison en -ée ; la tournée du facteur passe chaque matin.

**Mot 2 : sacoche** (trouvé à la brique 1, mise 3) — piste : besace + cartable + propre

- besace → *sacoche* ✓ — « Besace » a pour synonyme « sacoche », celle du facteur qui passe chaque matin.

**Mot 3 : lettres** (trouvé à la brique 1, mise 2) — piste : missives + beau

- missives → *lettres* ✓ — Les missives sont des lettres, que le facteur porte dans sa sacoche.

**Mot 4 : boîte** (trouvé à la brique 1, mise 2) — piste : coffret + manger

- coffret → *boîte* ✓ — Un coffret est une boîte ; la boîte aux lettres que le facteur remplit.

**Mot 5 : vélo** (trouvé à la brique 1, mise 2) — piste : bicyclette + mensonge

- bicyclette → *vélo* ✓ — La bicyclette est un vélo, celui du facteur pendant sa tournée.

**Solution : le facteur** — texte découvert : « Je fais ma tournée chaque matin ; ma sacoche est pleine de lettres ; je glisse le courrier dans la boîte ; jadis, je circulais à vélo. »

- *le facteur* ✓ — Tournée chaque matin, sacoche de lettres, courrier glissé dans la boîte, vélo : c'est le facteur.

### e-008 : « Or liquide » → le miel

**Mot 1 : ruche** (trouvé à la brique 1, mise 3) — piste : nid + alvéoles + lisse

- nid → *ruche* ✓ — Le nid est l'abri de l'oiseau comme la ruche est celui de l'abeille ; l'or liquide évoque le miel, donc « ruche ».

**Mot 2 : abeilles** (trouvé à la brique 1, mise 2) — piste : bourdons + lendemain

- bourdons → *abeilles* ✓ — Les bourdons sont proches des abeilles, au pluriel ; avec la ruche et le miel (or liquide), « abeilles ».

**Mot 3 : nectar** (trouvé à la brique 1, mise 2) — piste : ambroisie + tôt

- ambroisie → *nectar* ✓ — L'ambroisie et le nectar sont la paire des mets des dieux ; le nectar est aussi ce que butinent les abeilles.

**Mot 4 : sucré** (trouvé à la brique 1, mise 2) — piste : doux + nord

- doux → *sucré* ✓ — « Doux » au sens gustatif a pour synonyme « sucré », adjectif ; le miel est sucré.

**Mot 5 : tranche** (trouvé à la brique 1, mise 2) — piste : rondelle + vingt-neuf

- rondelle → *tranche* ✓ — Une rondelle est une tranche ronde ; le miel se tartine sur une tranche.

**Solution : le miel** — texte découvert : « Je suis né dans une ruche ; les abeilles m'ont fabriqué avec le nectar des fleurs ; je suis sucré et doré ; on m'étale sur une tranche de pain. »

- *le miel* ✓ — Né dans la ruche, fait par les abeilles avec le nectar, sucré et doré, étalé sur le pain : c'est le miel.

### e-009 : « Septième art » → le cinéma

**Mot 1 : salle** (trouvé à la brique 1, mise 2) — piste : pièce + propre

- pièce → *salle* ✓ — « Pièce » a pour synonyme « salle » ; le titre (cinéma) oriente vers la salle de cinéma.

**Mot 2 : écran** (trouvé à la brique 1, mise 2) — piste : moniteur + boulon

- moniteur → *écran* ✓ — Un moniteur est un écran ; au cinéma, la salle et l'écran.

**Mot 3 : réalisateur** (trouvé à la brique 2, mise 3) — piste : Truffaut + producteur + do

- Truffaut → *cinéaste* ✗ — Truffaut est un cinéaste emblématique, ce qui va avec le septième art.
- Truffaut + producteur → *réalisateur* ✓ — Truffaut est un réalisateur ; « producteur » est son pendant habituel dans un film, ce qui écarte cinéaste au profit de réalisateur.

**Mot 4 : scène** (trouvé à la brique 1, mise 3) — piste : séquence + théâtre + six

- séquence → *scène* ✓ — Une séquence de film a pour synonyme proche « scène ».

**Mot 5 : actrice** (trouvé à la brique 1, mise 2) — piste : comédienne + désaccord

- comédienne → *actrice* ✓ — « Comédienne » a pour synonyme direct « actrice », nom féminin, ce qui va avec le cinéma.

**Solution : le cinéma** — texte découvert : « Dans la salle obscure, on fixe le grand écran ; le réalisateur crie « Moteur ! » ; une scène jouée par une actrice fait pleurer le public. »

- *le cinéma* ✓ — Salle obscure, écran, réalisateur, scène et actrice décrivent le cinéma, le septième art.

### e-403 : « Pôle Nord de la cuisine » → le réfrigérateur

**Mot 1 : armoire** (trouvé à la brique 1, mise 3) — piste : placard + normande + fusil

- placard → *armoire* ✓ — « Placard » a pour synonyme « armoire » ; le pôle Nord de la cuisine est le réfrigérateur, l'armoire froide.

**Mot 2 : frais** (trouvé à la brique 2, mise 2) — piste : frisquet + sœur

- frisquet → *froid* ✗ — « Frisquet » est un synonyme familier de « froid », adjectif ; l'armoire froide du réfrigérateur.
- frisquet + sœur → *frais* ✓ — « Sœur » est une incitation : sœur → frère → son [fʁɛ]. Synonyme de frisquet qui commence ainsi : « frais ».

**Mot 3 : beurre** (trouvé à la brique 1, mise 2) — piste : margarine + courage

- margarine → *beurre* ✓ — La margarine est l'équivalent du beurre, qu'on range au réfrigérateur.

**Mot 4 : yaourts** (trouvé à la brique 1, mise 2) — piste : Danone + long

- Danone → *yaourt* ✓ — Danone est la marque emblématique du yaourt, rangé au réfrigérateur.

**Mot 5 : jambon** (trouvé à la brique 2, mise 2) — piste : saucisson + mauvais

- saucisson → *charcuterie* ✗ — Le saucisson fait partie de la charcuterie, qu'on range au réfrigérateur.
- saucisson + mauvais → *jambon* ✓ — « Mauvais » est une incitation : mauvais → bon → son [bɔ̃], qui termine « jambon », charcuterie comme le saucisson.

**Solution : le réfrigérateur** — texte découvert : « Dans la cuisine, cette grande armoire blanche garde au frais le beurre, les yaourts et le jambon. »

- *le réfrigérateur* ✓ — Grande armoire blanche de la cuisine qui garde au frais le beurre, les yaourts et le jambon : c'est le réfrigérateur.

### e-428 : « Tchou-tchou ! » → le train

**Mot 1 : quai** (trouvé à la brique 1, mise 2) — piste : embarcadère + Montréal

- embarcadère → *quai* ✓ — Un embarcadère est un quai ; le titre évoque le train, d'où le quai de gare.

**Mot 2 : voie** (trouvé à la brique 1, mise 3) — piste : chemin + ferrée + entendre

- chemin → *voie* ✓ — « Chemin » a pour synonyme « voie » ; avec le train et le quai, la voie ferrée.

**Mot 3 : wagon** (trouvé à la brique 1, mise 3) — piste : voiture + compartiment + taureau

- voiture → *wagon* ✓ — Une voiture de train est un wagon.

**Mot 4 : contrôleur** (trouvé à la brique 1, mise 3) — piste : inspecteur + amende + pour

- inspecteur → *contrôleur* ✓ — L'inspecteur dans le train est le contrôleur.

**Mot 5 : billets** (trouvé à la brique 1, mise 2) — piste : tickets + boules

- tickets → *billets* ✓ — Les tickets sont des billets, au pluriel, que vérifie le contrôleur.

**Solution : le train** — texte découvert : « Sur le quai, on attend en regardant l'horloge ; il arrive sur la voie ; on monte dans un wagon ; le contrôleur vérifie les billets. »

- *le train* ✓ — Quai, voie, wagon, contrôleur et billets décrivent le train.

### e-430 : « Hotte sur le dos » → le père Noël

**Mot 1 : traîneau** (trouvé à la brique 1, mise 3) — piste : luge + chiens + vos

- luge → *traîneau* ✓ — « Luge » a pour synonyme proche « traîneau », celui du Père Noël avec sa hotte.

**Mot 2 : rennes** (trouvé à la brique 1, mise 2) — piste : cervidés + roi

- cervidés → *rennes* ✓ — Les rennes sont les cervidés qui tirent le traîneau du Père Noël.

**Mot 3 : cheminée** (trouvé à la brique 1, mise 3) — piste : âtre + ramoneur + cravate

- âtre → *cheminée* ✓ — L'âtre est le foyer de la cheminée, par laquelle descend le Père Noël.

**Mot 4 : cadeaux** (trouvé à la brique 1, mise 2) — piste : présents + aîné

- présents → *cadeaux* ✓ — Les présents sont des cadeaux, au pluriel, que le Père Noël porte dans sa hotte.

**Mot 5 : sapin** (trouvé à la brique 1, mise 3) — piste : conifère + guirlande + vin

- conifère → *sapin* ✓ — Le sapin est le conifère de Noël, sous lequel le Père Noël dépose les cadeaux.

**Solution : le père Noël** — texte découvert : « Dans son traîneau tiré par des rennes, il descend par la cheminée et dépose les cadeaux au pied du sapin. »

- *le Père Noël* ✓ — Traîneau tiré par des rennes, cheminée, cadeaux au pied du sapin : c'est le Père Noël.

### e-435 : « Petite reine » → la bicyclette

**Mot 1 : selle** (trouvé à la brique 2, mise 2) — piste : étrier + poivre

- étrier → *pédale* ✗ — L'étrier est l'appui du pied à cheval, comme la pédale sur le vélo (la petite reine).
- étrier + poivre → *selle* ✓ — « Poivre » est une incitation : poivre → sel → [sɛl]. L'étrier va avec la selle, et le vélo a une selle.

**Mot 2 : guidon** (trouvé à la brique 1, mise 2) — piste : volant + houx

- volant → *guidon* ✓ — Le volant de la voiture a pour pendant le guidon du vélo.

**Mot 3 : pédales** (trouvé à la brique 1, mise 2) — piste : accélérateur + mémé

- accélérateur → *pédale* ✓ — L'accélérateur de la voiture est une pédale ; le vélo a des pédales, refusées pour le mot 1 mais plausibles ici.

**Mot 4 : équilibre** (trouvé à la brique 1, mise 2) — piste : stabilité + occupé

- stabilité → *équilibre* ✓ — La stabilité a pour synonyme « équilibre », indispensable à vélo.

**Mot 5 : chambre** (trouvé à la brique 2, mise 3) — piste : pièce + pneu + Élysées

- pièce → *rustine* ✗ — La pièce collée sur une chambre à air de vélo est une rustine.
- pièce + pneu → *chambre* ✓ — Une pièce est une chambre, et le pneu contient la chambre à air : seul mot qui convient aux deux briques.

**Solution : la bicyclette** — texte découvert : « On s'assoit sur la selle, on tient le guidon, on appuie sur les pédales ; il faut garder l'équilibre ; une crevaison, et il faut changer la chambre à air. »

- *le vélo* ✓ — Selle, guidon, pédales, équilibre, chambre à air : la petite reine est le vélo.

### e-437 : « Au-dessus des nuages » → l'avion

**Mot 1 : aéroport** (trouvé à la brique 1, mise 2) — piste : Roissy + cochon

- Roissy → *aéroport* ✓ — Roissy est l'aéroport parisien par excellence ; le titre évoque l'avion.

**Mot 2 : valises** (trouvé à la brique 1, mise 2) — piste : bagages + vient

- bagages → *valises* ✓ — « Bagages » au pluriel a pour synonyme « valises », qu'on emporte à l'aéroport.

**Mot 3 : pilote** (trouvé à la brique 1, mise 2) — piste : commandant + face

- commandant → *pilote* ✓ — Le commandant de bord est le pilote de l'avion.

**Mot 4 : piste** (trouvé à la brique 2, mise 3) — piste : trace + atterrissage + mieux

- trace → *sillage* ✗ — La trace laissée par l'avion dans le ciel est son sillage.
- trace + atterrissage → *piste* ✓ — La piste est une trace, et l'atterrissage se fait sur la piste : seul mot qui convient aux deux briques.

**Mot 5 : hôtesse** (trouvé à la brique 1, mise 2) — piste : steward + bas

- steward → *hôtesse* ✓ — Le steward a pour pendant l'hôtesse de l'air, à bord de l'avion.

**Solution : l'avion** — texte découvert : « Dans l'aéroport, on dépose ses valises ; le pilote attend l'autorisation de quitter la piste ; à bord, l'hôtesse sert un plateau-repas. »

- *l'avion* ✓ — Aéroport, valises, pilote, piste, hôtesse et plateau-repas décrivent l'avion.
