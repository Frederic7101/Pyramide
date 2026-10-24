# Test à l'aveugle de Syno, joué comme en partie (niveau difficile)

> **Test invalide** : par erreur, Syno voyait le texte à trous pendant la recherche des mots, alors qu'il ne le découvre qu'à la phase de solution. Voir le test refait dans `../2026-10-23-difficile-v2/rapport.md`.

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en voyant le titre, le texte de l'énigme avec les mots déjà trouvés, les briques du mot en cours et ses réponses déjà jugées fausses. Il explique chaque réponse. Score calculé par le moteur du jeu.

| Énigme | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|
| e-201 | Humeur noire | langueur (1/3), bile (1/2), gravure (1/3), spleen (1/3), charme (1/2) | 8 | ✓ | 14 |
| e-203 | Dire le contraire | faux (1/2), vrai (1/2), méthode (1/2), finesse (1/2), sarcasme (1/3) | 8 | ✓ | 14 |
| e-205 | Demain sans faute | lendemain (1/2), aujourd'hui (1/3), prétextes (1/2), effort (1/3), échéance (1/3) | 8 | ✓ | 14 |
| e-301 | Sagesse du Portique | adversité (1/2), flegme (2/2), ataraxie (1/3), esclave (1/2), résignation (1/2) | 7 | ✓ | 13 |
| e-302 | Le moulin à paroles | verbiage (1/3), intarissable (1/2), digressions (1/3), circonlocutions (1/3), silence (1/2) | 8 | ✓ | 14 |
| e-303 | Retournement de veste | revirement (1/2), opinion (1/2), girouette (1/2), désaveu (1/2), parjure (1/3) | 8 | ✓ | 14 |
| e-304 | Faux dévot | masque (1/2), duplicité (2/3), parangon (2/3), simagrées (1/3), crocodile (1/2) | 6 | ✓ | 12 |
| e-305 | Le pardon des grands | clémence (1/2), félon (1/3), magnanimité (1/3), rancœur (1/3), sanction (1/2) | 8 | ✓ | 14 |
| e-306 | Un seul jour | larve (1/3), rivière (1/2), fugace (2/2), précarité (1/3), périr (1/2) | 7 | ✓ | 13 |
| e-307 | Hors de son temps | légionnaire (1/2), bévue (1/3), ~~incongruités~~, limier (1/2), erreur (1/2) | 0 | ✓ | 5 |
| e-308 | Raisonnement trompeur | rigoureux (1/2), faille (1/2), prémisses (1/3), conclusion (1/2), piège (1/2) | 8 | ✓ | 14 |
| e-309 | Nature morte | crâne (1/2), bougie (1/2), sablier (1/2), fanées (1/2), brièveté (1/2) | 8 | ✓ | 14 |
| e-310 | Obscure clarté | étoiles (1/2), contradictoires (2/2), style (1/2), paradoxe (1/3), rhétorique (1/2) | 7 | ✓ | 13 |
| e-311 | Mots de velours | mort (1/2), détour (1/2), pudique (1/2), atténuer (1/2), sensibilité (1/2) | 8 | ✓ | 14 |
| e-312 | Le théâtre qui soigne | tragédie (1/2), crainte (2/2), apaisé (1/2), passions (1/2), purgées (1/3) | 7 | ✓ | 13 |
| e-313 | Big Brother | sinistre (2/2), épier (1/3), censure (2/3), pensée (1/2), mensonge (1/2) | 6 | ✓ | 12 |
| e-314 | Tout s'use | désordre (1/2), chaos (1/2), énergie (1/2), chaleur (1/2), thermodynamique (1/3) | 8 | ✓ | 14 |
| e-315 | Madeleine trempée | impression (1/2), saveur (1/2), resurgir (1/2), souvenir (1/2), évocation (2/3) | 7 | ✓ | 13 |
| e-316 | Femme aux yeux bandés | balance (1/2), glaive (1/2), justice (1/2), artiste (1/3), abstraite (1/2) | 8 | ✓ | 14 |
| e-317 | Élégance insolente | modèle (1/2), nonchalance (1/2), costume (1/2), impertinence (1/2), vulgarité (1/3) | 8 | ✓ | 14 |
| e-318 | Alceste | semblables (1/3), fausseté (2/2), retraite (1/2), solitude (1/2), ~~rancune~~ | 0 | ✓ | 5 |
| e-319 | Carpe diem | plaisir (1/2), douleur (1/2), instant (1/2), modération (1/2), ivresse (1/2) | 8 | ✓ | 14 |
| e-320 | Pyrrhon d'Élis | jugement (1/2), certitude (1/2), illusoire (1/2), ignorance (1/2), crédulité (1/2) | 8 | ✓ | 14 |
| e-321 | Toujours demain | ouvrage (1/2), subterfuges (2/3), délais (1/2), tergiversations (1/2), créanciers (1/2) | 7 | ✓ | 13 |
| e-322 | Éclair intérieur | fulgurant (1/2), illumination (1/2), limpide (1/2), manifestation (1/2), galette (1/2) | 8 | ✓ | 14 |
| e-323 | Bienfaiteur des arts | princes (1/2), artistes (1/2), fortune (1/2), statues (1/2), déduction (2/2) | 7 | ✓ | 13 |
| e-324 | Comparaison sans comme | automne (2/2), poétique (1/2), analogie (1/2), orateurs (1/2), ornement (1/3) | 7 | ✓ | 13 |
| e-325 | Le désert intérieur | anachorète (2/3), jeûne (1/2), abstinence (2/2), ~~discipline~~, purification (1/3) | 0 | ✓ | 5 |
| e-326 | La lanterne de Diogène | tonneau (1/2), conventions (1/3), argent (1/2), impudence (1/2), notables (1/2) | 8 | ✓ | 14 |
| e-327 | Le temps qui coule | horloge (1/2), heures (1/2), eau (1/2), vase (1/2), tribunaux (1/3) | 8 | ✓ | 14 |
| e-328 | Disque des astres | laiton (1/3), hauteur (1/2), savants (1/2), pilotes (2/2), point (1/2) | 7 | ✓ | 13 |
| e-329 | Bernin et Borromini | profusion (1/2), volutes (1/2), torses (1/2), trompe-l'œil (1/2), ostentation (1/2) | 8 | ✓ | 14 |
| e-330 | L'art de Socrate | sage-femme (1/2), accoucheur (1/2), questions (1/2), découvrir (1/2), vérité (1/2) | 8 | ✓ | 14 |
| e-331 | Brebis égarées | dogme (1/2), excommunication (1/3), inquisition (1/2), dissidents (1/3), bûcher (1/2) | 8 | ✓ | 14 |
| e-332 | Le vote des potiers | tesson (1/2), bannir (1/2), influent (1/3), éloignement (1/2), exclusion (1/2) | 8 | ✓ | 14 |
| e-333 | Affaire de famille | neveux (1/2), péché (1/2), pouvoir (1/2), parenté (1/3), mérite (1/2) | 8 | ✓ | 14 |
| e-334 | Le tribun | flatter (1/2), merveilles (1/2), discours (1/2), populistes (1/3), foule (1/2) | 8 | ✓ | 14 |
| e-335 | Querelle des images | empereur (1/2), icônes (1/2), frondeur (3/3), bousculer (1/2), dogmes (1/2) | 6 | ✓ | 12 |
| e-336 | Moi seul | esprit (1/2), projection (1/3), conscience (1/2), fantôme (1/2), songe (1/2) | 8 | ✓ | 14 |
| e-337 | Le grand œuvre | laboratoire (1/2), initié (2/2), philosophale (1/3), plomb (1/2), élixir (1/2) | 7 | ✓ | 13 |
| e-338 | Fin des temps | cavaliers (1/2), bête (1/2), jugement (1/2), révélation (1/3), catastrophe (1/2) | 8 | ✓ | 14 |
| e-339 | Héraclès au marais | monstre (1/2), multiples (1/2), décapitation (1/3), cautériser (1/3), bout (1/2) | 8 | ✓ | 14 |
| e-340 | Ailes de cire | ambition (1/2), soleil (1/2), présomption (1/2), démesure (1/2), vanité (1/3) | 8 | ✓ | 14 |
| e-341 | Coup de dés | destin (1/2), chance (1/2), fortune (1/2), étoile (1/2), poisse (2/2) | 7 | ✓ | 13 |
| e-342 | Seul au désert | grotte (1/2), racines (1/2), sérénité (2/2), cri (1/2), corbeaux (1/2) | 7 | ✓ | 13 |
| e-343 | Oasis trompeuse | trembler (1/2), nappe (1/2), miroiter (1/2), illusion (1/2), optique (1/3) | 8 | ✓ | 14 |
| e-344 | Rive des Enfers | fleuve (1/2), mémoire (1/2), âme (1/2), souvenirs (1/2), cicatriser (1/3) | 8 | ✓ | 14 |
| e-345 | Énigme de Thèbes | lion (1/2), devinette (2/2), dévoré (1/2), clé (2/2), précipice (2/3) | 5 | ✓ | 11 |
| e-346 | Ce qui était écrit | dieux (1/2), destin (1/2), prédit (1/2), malédiction (1/3), tragique (1/2) | 8 | ✓ | 14 |
| e-347 | Antichambre du paradis | sauvée (1/2), expier (1/3), montagne (1/2), vivants (1/2), attente (1/2) | 8 | ✓ | 14 |
| e-348 | Le bègue d'Athènes | cailloux (1/2), entraînement (2/2), orateur (1/2), persuasif (1/3), verve (2/3) | 6 | ✓ | 12 |
| e-349 | Pensée brève | sentence (1/3), vérité (1/2), maximes (1/2), esprit (1/2), désespoir (1/2) | 8 | ✓ | 14 |
| e-350 | Loin du pays | patrie (1/2), manque (1/2), poèmes (1/2), usurpateur (1/3), mer (1/2) | 8 | ✓ | 14 |

Score moyen : 13.1 sur 53 énigme(s).

Mots trouvés : 237 à la brique 1, 24 à la brique 2, 1 à la brique 3, 3 non trouvés.

## Raisonnement de Syno, énigme par énigme

### e-201 : « Humeur noire » → la mélancolie

**Mot 1 : langueur** (trouvé à la brique 1, mise 3) — piste : torpeur + nonchalance + oïl

- torpeur → *langueur* ✓ — Le titre et la bile noire, Dürer (Melencolia I) et Baudelaire (spleen) désignent la mélancolie, qui est donc la solution et pas le mot 1. « Torpeur » est un synonyme d'un mot féminin (« Cette ... de l'âme ») : j'ai envisagé langueur, apathie et léthargie, et retenu langueur, qui va le mieux avec « de l'âme ».

**Mot 2 : bile** (trouvé à la brique 1, mise 2) — piste : fiel + vésicule

- fiel → *bile* ✓ — « Fiel » est un synonyme de bile. Le texte décrit la mélancolie, qui vient étymologiquement de la « bile noire » des Anciens, et le féminin « la ... noire » colle. Pas d'autre candidat sérieux.

**Mot 3 : gravure** (trouvé à la brique 1, mise 3) — piste : estampe + burin + adipeux

- estampe → *gravure* ✓ — Le thème est la mélancolie, et la « Melencolia I » de Dürer est une gravure. La brique « estampe » en est un synonyme. Le mot est féminin, ce qui colle avec « une célèbre gravure ».

**Mot 4 : spleen** (trouvé à la brique 1, mise 3) — piste : ennui + anglicisme + magnifique

- ennui → *spleen* ✓ — Le thème est la mélancolie (bile noire, gravure de Dürer). Baudelaire l'appelait « spleen », et « ennui » en est le synonyme baudelairien direct. J'ai aussi pensé à « ennui » lui-même, mais une brique ne peut pas être la réponse.

**Mot 5 : charme** (trouvé à la brique 1, mise 2) — piste : attrait + hêtre

- attrait → *charme* ✓ — La mélancolie (bile noire, Dürer, spleen) « n'est pas sans charme » : expression figée. « Attrait » est un synonyme direct de charme ; « séduction » ou « attrait » lui-même étaient moins idiomatiques après « sans ».

**Solution : la mélancolie** — texte vu : « Cette langueur de l'âme, que les Anciens attribuaient à la bile noire, inspira à Dürer une célèbre gravure ; Baudelaire l'appelait spleen ; elle n'est pourtant pas sans charme. »

- *la mélancolie* ✓ — La bile noire (melaina kholè), la gravure Melencolia I de Dürer et le spleen de Baudelaire désignent tous la mélancolie. Le titre « Humeur noire » le confirme. Candidat écarté : la neurasthénie, trop moderne.

### e-203 : « Dire le contraire » → l'ironie

**Mot 1 : faux** (trouvé à la brique 1, mise 2) — piste : erroné + moissonneur

- erroné → *faux* ✓ — La solution est l'ironie : dire le faux pour faire entendre le vrai. « Erroné » est un synonyme direct de faux, et le masculin convient (« le ... »).

**Mot 2 : vrai** (trouvé à la brique 1, mise 2) — piste : exact + mensonger

- exact → *vrai* ✓ — « Exact » est un synonyme de vrai, et « dire le faux pour faire entendre le vrai » définit l'ironie (titre « Dire le contraire »). Le masculin « le » convient. J'ai écarté « juste », moins idiomatique ici.

**Mot 3 : méthode** (trouvé à la brique 1, mise 2) — piste : démarche + Descartes

- démarche → *méthode* ✓ — Le thème est l'ironie, et on parle de « l'ironie socratique » comme d'une méthode. La brique « démarche » est un synonyme de « méthode ». Le mot est féminin, comme le demande « une ». J'ai écarté « art » et « arme », qui sont plus éloignés de la brique.

**Mot 4 : finesse** (trouvé à la brique 1, mise 2) — piste : délicatesse + épaisseur

- délicatesse → *finesse* ✓ — Le thème est l'ironie. « Une [mot] redoutable » demande un nom féminin, et « délicatesse » donne le synonyme « finesse ». J'ai écarté « subtilité », moins courant après « manier avec ».

**Mot 5 : sarcasme** (trouvé à la brique 1, mise 3) — piste : raillerie + caustique + huile

- raillerie → *sarcasme* ✓ — Le thème est l'ironie (dire le faux pour le vrai, Socrate, Voltaire). « Frôle le » demande un masculin ; la raillerie amère, c'est le sarcasme. « Persiflage » était possible, mais sarcasme est le voisin classique de l'ironie.

**Solution : l'ironie** — texte vu : « Elle dit le faux pour faire entendre le vrai ; Socrate en fit une méthode ; Voltaire la maniait avec une finesse redoutable ; elle frôle parfois le sarcasme. »

- *l'ironie* ✓ — Dire le faux pour faire entendre le vrai, c'est la définition de l'ironie, et le titre « Dire le contraire » va dans ce sens. L'ironie socratique et celle de Voltaire confirment, et le sarcasme en est une forme voisine.

### e-205 : « Demain sans faute » → la procrastination

**Mot 1 : lendemain** (trouvé à la brique 1, mise 2) — piste : veille + suivant

- veille → *lendemain* ✓ — Le proverbe dit : « remettre au lendemain ce qu'on peut faire le jour même », et la solution est la procrastination. « Veille » est le contraire de lendemain, et « au ... » demande un masculin singulier.

**Mot 2 : aujourd'hui** (trouvé à la brique 1, mise 3) — piste : maintenant + hier + bas

- maintenant → *aujourd'hui* ✓ — « Maintenant » est proche d'aujourd'hui, et le proverbe « ne remets pas au lendemain ce que tu peux faire aujourd'hui » s'insère tel quel. Le thème est la procrastination.

**Mot 3 : prétextes** (trouvé à la brique 1, mise 2) — piste : excuses + dérobade

- excuses → *prétextes* ✓ — Le thème est la procrastination. Il faut un pluriel après « mille » et la brique est « excuses ». « Prétextes » en est le synonyme le plus naturel dans « trouver mille prétextes ».

**Mot 4 : effort** (trouvé à la brique 1, mise 3) — piste : labeur + sueur + faible

- labeur → *effort* ✓ — Le thème est la procrastination. L'élision « l' » impose une initiale vocalique, ce qui écarte « travail » ; « labeur » donne alors « effort » ou « ouvrage ». J'ai retenu « effort », plus naturel après « fuir l' ».

**Mot 5 : échéance** (trouvé à la brique 1, mise 3) — piste : terme + délai + roi

- terme → *échéance* ✓ — Le thème est la procrastination. « L' » demande un mot commençant par une voyelle ; « terme » au sens de date limite donne échéance, que le procrastinateur redoute.

**Solution : la procrastination** — texte vu : « Je remets toujours au lendemain ce que je pourrais faire aujourd'hui ; je trouve mille prétextes pour fuir l'effort ; mon pire ennemi est l'échéance. »

- *le procrastinateur* ✗ — Remettre au lendemain et fuir l'effort jusqu'à l'échéance, c'est la procrastination. Le texte est écrit à la première personne (« je »), donc la solution désigne la personne. J'ai retenu « le procrastinateur » plutôt que « la procrastination ».
- *le paresseux* ✗ — Le texte décrit quelqu'un qui remet tout au lendemain et fuit l'effort, à la 1re personne. « Le procrastinateur » est refusé ; parmi les autres candidats (le retardataire, le cossard, le paresseux), je retiens « le paresseux », plus général et qui colle à « fuir l'effort ».
- *la procrastination* ✓ — Le texte décrit le fait de remettre au lendemain, de fuir l'effort et l'échéance. « Le procrastinateur » et « le paresseux » ont été refusés, donc la solution est sans doute le concept plutôt que la personne. Je retiens la procrastination plutôt que la paresse, plus précise ici.

### e-301 : « Sagesse du Portique » → le stoïcisme

**Mot 1 : adversité** (trouvé à la brique 1, mise 2) — piste : infortune + facture

- infortune → *adversité* ✓ — Le Portique renvoie au stoïcisme (Sénèque, Épictète). « Infortune » a pour synonyme adversité, qui commence par une voyelle (« l'... ») et va avec « Face à ».

**Mot 2 : flegme** (trouvé à la brique 2, mise 2) — piste : impassibilité + Anglais

- impassibilité → *calme* ✗ — « Impassibilité » donne calme, sang-froid ou flegme. Le thème est le stoïcisme (le Portique), et « garde ton calme » est la tournure la plus courante après le possessif masculin « ton ». J'ai préféré « calme » à « sang-froid ».
- impassibilité + Anglais → *flegme* ✓ — Le thème est le stoïcisme et « calme » a été refusé. « Impassibilité » est un synonyme, et « Anglais » renvoie au célèbre « flegme britannique ». Le mot est masculin, ce qui va avec « ton flegme ».

**Mot 3 : ataraxie** (trouvé à la brique 1, mise 3) — piste : quiétude + Épicure + offensive

- quiétude → *ataraxie* ✓ — Le titre renvoie au stoïcisme. « Quiétude » donne l'absence de trouble de l'âme, soit l'ataraxie, et l'élision « l' » colle. J'ai écarté « impassibilité », plus long et moins attendu.

**Mot 4 : esclave** (trouvé à la brique 1, mise 2) — piste : serf + Spartacus

- serf → *esclave* ✓ — Le thème est le stoïcisme ; Épictète était un ancien esclave affranchi. « Serf » est un quasi-synonyme d'esclave, et l'article « ancien » demande un masculin.

**Mot 5 : résignation** (trouvé à la brique 1, mise 2) — piste : acceptation + domicile

- acceptation → *résignation* ✓ — La brique « acceptation » appelle un synonyme. Le texte demande un nom féminin après « la », et c'est l'attitude stoïcienne d'Épictète face à ce qui ne dépend pas de nous. « Résignation » convient mieux que « soumission ».

**Solution : le stoïcisme** — texte vu : « Face à l'adversité, garde ton flegme ; Sénèque prônait l'ataraxie ; Épictète, ancien esclave, enseignait la résignation. »

- *le stoïcisme* ✓ — Le Portique (Stoa), Sénèque, Épictète, l'ataraxie et la résignation désignent tous la philosophie stoïcienne. J'ai hésité avec « le stoïque », mais le texte décrit une doctrine, donc « le stoïcisme ».

### e-302 : « Le moulin à paroles » → la logorrhée

**Mot 1 : verbiage** (trouvé à la brique 1, mise 3) — piste : bavardage + creux + conjugaison

- bavardage → *verbiage* ✓ — Le moulin à paroles fait penser à la logorrhée ou à la verbosité. « Bavardage » a pour synonyme un nom masculin (« Son ... ») : j'ai hésité entre verbiage et discours, et retenu verbiage, qui est un synonyme plus direct.

**Mot 2 : intarissable** (trouvé à la brique 1, mise 2) — piste : inépuisable + source

- inépuisable → *intarissable* ✓ — « Inépuisable » est un synonyme direct d'intarissable, l'adjectif classique pour un bavard. Il se place bien après « Son verbiage est ». J'ai écarté « interminable », plus éloigné de la brique.

**Mot 3 : digressions** (trouvé à la brique 1, mise 3) — piste : parenthèses + Montaigne + neuf

- parenthèses → *digressions* ✓ — Le thème est le bavardage, avec un pluriel féminin après « s'égare en ». Les « parenthèses » sont une association d'idées avec les digressions. J'ai écarté « détours ».

**Mot 4 : circonlocutions** (trouvé à la brique 1, mise 3) — piste : périphrases + détours + chapiteau

- périphrases → *circonlocutions* ✓ — Le thème est la logorrhée. Il faut un nom féminin pluriel qui accompagne « digressions », et « périphrases » donne son synonyme « circonlocutions ». J'ai écarté « détours » à cause du genre.

**Mot 5 : silence** (trouvé à la brique 1, mise 2) — piste : bruit + or

- bruit → *silence* ✓ — Le thème est la logorrhée. « Bruit » est donné comme contraire : le silence serait salutaire au bavard. Le masculin « le » convient.

**Solution : la logorrhée** — texte vu : « Son verbiage est intarissable ; chaque phrase s'égare en digressions et en circonlocutions ; seul le silence lui serait salutaire. »

- *la logorrhée* ✓ — Le verbiage intarissable, les digressions et le titre « moulin à paroles » décrivent un flux de paroles qu'on ne peut pas arrêter. C'est la logorrhée. Candidat écarté : la prolixité, moins forte.

### e-303 : « Retournement de veste » → la palinodie

**Mot 1 : revirement** (trouvé à la brique 1, mise 2) — piste : retournement + magazine

- retournement → *revirement* ✓ — Retourner sa veste, c'est la palinodie. « Retournement » a pour synonyme revirement, masculin, et « un brusque revirement » est une tournure courante.

**Mot 2 : opinion** (trouvé à la brique 1, mise 2) — piste : avis + sondage

- avis → *opinion* ✓ — « Avis » est un synonyme d'opinion. Le féminin « sa propre » exclut « avis » lui-même, et « renier sa propre opinion » correspond au retournement de veste de la girouette.

**Mot 3 : girouette** (trouvé à la brique 1, mise 2) — piste : coq + clocher

- coq → *girouette* ✓ — Le titre « Retournement de veste » et le texte « tourne au gré du vent » demandent un mot féminin. La brique « coq » évoque le coq de clocher, qui est une girouette.

**Mot 4 : désaveu** (trouvé à la brique 1, mise 2) — piste : reniement + catastrophe

- reniement → *désaveu* ✓ — Le thème est le retournement de veste. « Reniement » donne « désaveu », masculin, ce qui va avec « ce ». J'ai écarté « revirement », déjà présent dans le texte. La phrase finit sans doute en jeu de mots : « désaveu… sonne comme un aveu ».

**Mot 5 : parjure** (trouvé à la brique 1, mise 3) — piste : trahison + serment + portion

- trahison → *parjure* ✓ — Le thème est la palinodie / le retournement de veste. « Un » demande un masculin ; « trahison » oriente vers parjure. « Reniement » était candidat, mais « renie » figure déjà dans le texte.

**Solution : la palinodie** — texte vu : « Après un brusque revirement, l'orateur renie sa propre opinion ; telle une girouette, il tourne au gré du vent ; ce désaveu public sonne comme un parjure. »

- *la palinodie* ✓ — Revirement, renier sa propre opinion, girouette, désaveu : tout cela décrit le fait de se rétracter publiquement. C'est la palinodie. J'ai envisagé « le reniement » et « la volte-face », mais « palinodie » est le terme exact pour une opinion qu'on renie.

### e-304 : « Faux dévot » → l'hypocrisie

**Mot 1 : masque** (trouvé à la brique 1, mise 2) — piste : loup + carnaval

- loup → *masque* ✓ — Le faux dévot, c'est l'hypocrisie (Tartuffe). Un « loup » est un masque, et « sous le masque de la vertu » est une expression consacrée.

**Mot 2 : duplicité** (trouvé à la brique 2, mise 3) — piste : fausseté + Janus + naïf

- fausseté → *hypocrisie* ✗ — « Fausseté » est un synonyme d'hypocrisie. Le féminin « la » colle, et Tartuffe en est l'archétype (« larmes de crocodile » plus loin).
- fausseté + Janus → *duplicité* ✓ — « Hypocrisie » a été refusé. La brique « fausseté » est un synonyme, et « Janus », le dieu à deux visages, évoque le double jeu. Le mot est féminin, ce qui va avec « la duplicité ».

**Mot 3 : parangon** (trouvé à la brique 2, mise 3) — piste : modèle + vertu + père

- modèle → *archétype* ✗ — Le thème est l'hypocrisie. Il faut un nom masculin après « le », et « modèle » donne archétype, parangon ou prototype. J'ai retenu « archétype », le plus employé pour Tartuffe ; la suite parle sans doute de larmes de crocodile.
- modèle + vertu → *parangon* ✓ — Thème : hypocrisie. « Modèle » plus « vertu » évoquent l'expression « parangon de vertu ». « Archétype » a été refusé ; parangon est le synonyme de modèle qui colle à la 2e brique.

**Mot 4 : simagrées** (trouvé à la brique 1, mise 3) — piste : minauderies + grimaces + sommet

- minauderies → *simagrées* ✓ — La brique « minauderies » appelle un synonyme au pluriel (« ses ___ sont »). Pour le faux dévot Tartuffe, ce sont des simagrées, et la suite « larmes de crocodile » renvoie à l'hypocrisie. Candidat écarté : grimaces.

**Mot 5 : crocodile** (trouvé à la brique 1, mise 2) — piste : caïman + Nil

- caïman → *crocodile* ✓ — « Larmes de crocodile » est l'expression figée qui désigne une émotion feinte, ce qui va avec Tartuffe et les simagrées. Le caïman est un proche cousin du crocodile, d'où la brique.

**Solution : l'hypocrisie** — texte vu : « Sous le masque de la vertu se cache la duplicité ; Tartuffe en est le parangon ; ses simagrées sont des larmes de crocodile. »

- *l'hypocrite* ✗ — Le titre « Faux dévot » et les mots masque, duplicité, Tartuffe, simagrées et larmes de crocodile renvoient tous à l'hypocrisie. J'ai hésité entre « l'hypocrisie » et « l'hypocrite ». Je retiens l'hypocrite, puisque Tartuffe en est « le parangon », c'est-à-dire le type humain.
- *l'hypocrisie* ✓ — Le titre « Faux dévot » et les mots masque, vertu, duplicité, Tartuffe, larmes de crocodile décrivent tous la fausseté. « L'hypocrite » (la personne) a été refusé, donc la solution attendue est sans doute le défaut lui-même : l'hypocrisie. J'ai aussi pensé à « la tartufferie », mais elle est trop proche d'un mot du texte.

### e-305 : « Le pardon des grands » → la mansuétude

**Mot 1 : clémence** (trouvé à la brique 1, mise 2) — piste : indulgence + sévérité

- indulgence → *clémence* ✓ — Le pardon des grands, c'est la clémence (on pense à celle d'Auguste). « Indulgence » en est un synonyme, et « faire preuve de clémence » colle au texte. La solution pourrait être la clémence elle-même, mais c'est le synonyme le plus naturel de la brique.

**Mot 2 : félon** (trouvé à la brique 1, mise 3) — piste : traître + vassal + sorcière

- traître → *félon* ✓ — « Traître » est un synonyme de félon, et le masculin « le » convient. Le contexte royal (clémence, courtisans, châtiment exemplaire) appelle ce mot de vocabulaire féodal. J'ai écarté « conjuré » et « renégat », moins directs.

**Mot 3 : magnanimité** (trouvé à la brique 1, mise 3) — piste : générosité + Auguste + nabab

- générosité → *magnanimité* ✓ — Le thème est le pardon du roi, et il faut un mot féminin après « sa ». La brique « générosité » est un synonyme de « magnanimité », qui convient mieux au pardon d'un grand que « bonté ».

**Mot 4 : rancœur** (trouvé à la brique 1, mise 3) — piste : aigreur + fiel + file

- aigreur → *rancœur* ✓ — Le thème est la clémence. Il faut un nom féminin après « la » ; « aigreur » donne « rancœur » ou « rancune ». J'ai retenu « rancœur », le synonyme le plus proche d'aigreur.

**Mot 5 : sanction** (trouvé à la brique 1, mise 2) — piste : punition + avec

- punition → *sanction* ✓ — Thème : clémence / magnanimité. « Une … exemplaire » au féminin ; « punition » donne sanction, collocation « sanction exemplaire ». « Vengeance » était possible avec la rancœur, mais la punition oriente vers sanction.

**Solution : la mansuétude** — texte vu : « Le roi fit preuve de clémence envers le félon ; sa magnanimité désarma la rancœur des courtisans, qui attendaient une sanction exemplaire. »

- *la grâce* ✗ — Le roi épargne un félon au lieu de le sanctionner : c'est la grâce royale, le pardon accordé par les grands. Clémence et magnanimité figurent déjà dans le texte. J'ai donc choisi « la grâce » plutôt que « le pardon », qui est dans le titre.
- *l'indulgence* ✗ — Le texte parle de clémence, de magnanimité et d'une sanction épargnée, donc du pardon accordé par un puissant. « La grâce » est refusée ; parmi la mansuétude, l'indulgence et le pardon, je propose « l'indulgence ».
- *la mansuétude* ✓ — Le texte parle de clémence et de magnanimité, et le titre de pardon accordé par un grand. « La grâce » et « l'indulgence » ont été refusées, et « clémence » figure déjà dans le texte. Il reste la mansuétude, la bonté indulgente du puissant envers le fautif.

### e-306 : « Un seul jour » → l'éphémère

**Mot 1 : larve** (trouvé à la brique 1, mise 3) — piste : asticot + chenille + bacon

- asticot → *larve* ✓ — Un insecte qui ne vit qu'un jour et danse au-dessus de l'eau, c'est l'éphémère. Un « asticot » est une larve, et le féminin convient (« d'une ... »).

**Mot 2 : rivière** (trouvé à la brique 1, mise 2) — piste : fleuve + berge

- fleuve → *rivière* ✓ — « Fleuve » est proche de rivière. L'éphémère danse au-dessus de l'eau, et le féminin « la » exclut fleuve lui-même. J'ai écarté « l'onde », qui n'irait pas avec « de la ».

**Mot 3 : fugace** (trouvé à la brique 2, mise 2) — piste : passagère + rage

- passagère → *éphémère* ✗ — Il s'agit de l'insecte appelé éphémère, qui sort d'une larve et ne vit qu'un jour. La brique « passagère » est un synonyme de l'adjectif « éphémère », et « ma vie éphémère » s'insère bien. J'ai écarté « brève ».
- passagère + rage → *fugace* ✓ — C'est l'éphémère (l'insecte), et l'adjectif « éphémère » a déjà été refusé. « Passagère » donne fugace ou brève. Je lis « rage » comme une incitation : rage évoque « furie », qui donne le son « fu » de « fugace ».

**Mot 4 : précarité** (trouvé à la brique 1, mise 3) — piste : fragilité + emploi + prairie

- fragilité → *précarité* ✓ — Thème : l'éphémère (insecte d'un seul jour). Féminin après « la » ; « fragilité » donne précarité, symbole de la vie précaire. « Brièveté » ou « fugacité » envisagés, mais « fugace » est déjà dans le texte et la brique parle de fragilité.

**Mot 5 : périr** (trouvé à la brique 1, mise 2) — piste : mourir + mère

- mourir → *périr* ✓ — La brique « mourir » appelle un synonyme à l'infinitif (« je dois ___ »). L'énigme décrit l'éphémère, l'insecte qui ne vit qu'un jour. J'ai retenu « périr » plutôt que « trépasser » ou « disparaître ».

**Solution : l'éphémère** — texte vu : « Sorti d'une larve, je danse au-dessus de la rivière ; ma vie fugace fait de moi le symbole de la précarité ; le soir venu, je dois périr. »

- *l'éphémère* ✓ — Un insecte qui sort d'une larve, danse au-dessus de l'eau, vit un seul jour et meurt le soir : c'est l'éphémère, dont le nom même signifie la fugacité.

### e-307 : « Hors de son temps » → l'anachronisme

**Mot 1 : légionnaire** (trouvé à la brique 1, mise 2) — piste : centurion + Astérix

- centurion → *légionnaire* ✓ — Le thème est l'anachronisme. « Centurion » évoque le soldat romain, et j'ai retenu légionnaire, plus précis que soldat, qui va avec « romain ».

**Mot 2 : bévue** (trouvé à la brique 1, mise 3) — piste : gaffe + maladresse + nourrisson

- gaffe → *bévue* ✓ — « Gaffe » est un synonyme de bévue. Le féminin « quelle ... ! » convient, et une montre chez un légionnaire est une erreur grossière (l'anachronisme). J'ai envisagé « erreur », mais « bévue » est plus proche de la brique.

**Mot 3 : incongruités** (non trouvé, mise 2) — piste : bizarreries + anonyme

- bizarreries → *anomalies* ✗ — Le thème est l'anachronisme, mais c'est sans doute la solution, donc on cherche un autre mot. Il faut un pluriel. La brique « bizarreries » donne « anomalies » ou « incongruités », et j'ai retenu « anomalies », plus courant pour un historien qui les « traque ».
- bizarreries + anonyme → *anachronismes* ✗ — Une montre chez un Romain est un anachronisme ; il faut un masculin pluriel après « ces ». « Bizarreries » oriente vers une anomalie, mais « anomalies » a été refusé. Je lis « anonyme » comme une incitation par le son « ana/ano » : elle mène à « anachronismes ».

**Mot 4 : limier** (trouvé à la brique 1, mise 2) — piste : détective + Holmes

- détective → *limier* ✓ — Thème : l'anachronisme. L'historien traque les anachronismes comme le limier traque l'indice/l'erreur. « Détective » a pour synonyme imagé limier, masculin après « le ».

**Mot 5 : erreur** (trouvé à la brique 1, mise 2) — piste : faute + humaine

- faute → *erreur* ✓ — La brique « faute » appelle un synonyme qui commence par une voyelle à cause de l'élision « l'[MOT] ». L'historien traque les anachronismes, des erreurs de date. « Erreur » convient mieux que « impair ».

**Solution : l'anachronisme** — texte vu : « Une montre au poignet d'un légionnaire romain : quelle bévue ! L'historien traque ces ____ comme le limier traque l'erreur. »

- *l'anachronisme* ✓ — Le titre « Hors de son temps » et la montre au poignet d'un légionnaire désignent une erreur de chronologie : l'anachronisme.

### e-308 : « Raisonnement trompeur » → un sophisme

**Mot 1 : rigoureux** (trouvé à la brique 1, mise 2) — piste : strict + hiver

- strict → *rigoureux* ✓ — Le raisonnement trompeur est le sophisme. « Strict » a pour synonyme rigoureux, un adjectif masculin qui s'accorde avec « raisonnement paraît ... ».

**Mot 2 : faille** (trouvé à la brique 1, mise 2) — piste : brèche + sismique

- brèche → *faille* ✓ — « Brèche » est un synonyme de faille, et « cacher une faille » est l'expression idiomatique pour un raisonnement. Le féminin colle, et le thème est le sophisme.

**Mot 3 : prémisses** (trouvé à la brique 1, mise 3) — piste : postulats + syllogisme + accusé

- postulats → *prémisses* ✓ — Le thème est le sophisme : « ses prémisses sont vraies, sa conclusion est fausse ». La brique « postulats » est proche de « prémisses ». Le mot est au pluriel.

**Mot 4 : conclusion** (trouvé à la brique 1, mise 2) — piste : déduction + cornichon

- déduction → *conclusion* ✓ — Le thème est le sophisme : des prémisses vraies et une conclusion fausse. Il faut un nom féminin, et « déduction » donne « conclusion », qui s'oppose naturellement aux prémisses.

**Mot 5 : piège** (trouvé à la brique 1, mise 2) — piste : traquenard + souris

- traquenard → *piège* ✓ — Thème : sophisme / paralogisme. « Un … déguisé » au masculin ; « traquenard » est un synonyme direct de piège.

**Solution : un sophisme** — texte vu : « Ce raisonnement paraît rigoureux, mais il cache une faille ; ses prémisses sont vraies, sa conclusion est fausse : c'est un piège déguisé. »

- *le sophisme* ✓ — Un raisonnement qui paraît rigoureux mais cache une faille, avec une conclusion fausse et une volonté de piéger : c'est le sophisme. Le paralogisme, lui, n'a pas l'intention de tromper, ce qui l'écarte.

### e-309 : « Nature morte » → une vanité

**Mot 1 : crâne** (trouvé à la brique 1, mise 2) — piste : tête de mort + Hamlet

- tête de mort → *crâne* ✓ — Une nature morte qui rappelle la vanité de la vie, c'est une Vanité. La « tête de mort » est le crâne, nom masculin (« Un ... »).

**Mot 2 : bougie** (trouvé à la brique 1, mise 2) — piste : chandelle + cire

- chandelle → *bougie* ✓ — « Chandelle » est un synonyme de bougie. Le féminin et « éteinte » collent, et une bougie éteinte est un motif classique des vanités, avec le crâne et les fleurs fanées.

**Mot 3 : sablier** (trouvé à la brique 1, mise 2) — piste : clepsydre + minuteur

- clepsydre → *sablier* ✓ — Le thème est la vanité en peinture. Il faut un mot masculin qui peut être « renversé ». La brique « clepsydre » est une horloge à eau, de la même famille que le sablier.

**Mot 4 : fanées** (trouvé à la brique 1, mise 2) — piste : flétries + maquillage

- flétries → *fanées* ✓ — La scène décrit une vanité (crâne, bougie, sablier). Il faut un adjectif féminin pluriel accordé à « fleurs », et « flétries » donne son synonyme « fanées ».

**Mot 5 : brièveté** (trouvé à la brique 1, mise 2) — piste : fugacité + camembert

- fugacité → *brièveté* ✓ — Thème : la vanité (crâne, sablier, fleurs fanées). « Fugacité » donne brièveté de la vie, expression usuelle. « Précarité » ou « fragilité » envisagés, moins proches de fugacité.

**Solution : une vanité** — texte vu : « Un crâne posé près d'une bougie éteinte, un sablier renversé, des fleurs fanées : tout rappelle la brièveté de la vie. »

- *la vanité* ✓ — Le crâne, la bougie éteinte, le sablier et les fleurs fanées sont les attributs de la nature morte appelée vanité, qui rappelle la brièveté de la vie. Candidat écarté : le memento mori.

### e-310 : « Obscure clarté » → l'oxymore

**Mot 1 : étoiles** (trouvé à la brique 1, mise 2) — piste : astres + firmament

- astres → *étoiles* ✓ — Le titre cite Corneille : « Cette obscure clarté qui tombe des étoiles », et la solution est l'oxymore. « Astres » est un synonyme d'étoiles, au pluriel (« des ... »).

**Mot 2 : contradictoires** (trouvé à la brique 2, mise 2) — piste : opposés + pacte

- opposés → *contraires* ✗ — « Opposés » est un synonyme de contraires. Le pluriel « deux termes ... » convient, et le thème est l'oxymore (« obscure clarté »). J'ai écarté « antithétiques », plus rare.
- opposés + pacte → *contradictoires* ✓ — Le thème est l'oxymore (« obscure clarté ») et « contraires » a été refusé. La brique « opposés » est un synonyme. « Pacte » est une incitation : il évoque « contrat », qui donne le son « contra » de « contradictoires ».

**Mot 3 : style** (trouvé à la brique 1, mise 2) — piste : écriture + Flaubert

- écriture → *style* ✓ — « Obscure clarté » est un oxymore, ce qui donne l'expression « figure de style ». La brique « écriture » oriente aussi vers « style ».

**Mot 4 : paradoxe** (trouvé à la brique 1, mise 3) — piste : antinomie + Zénon + ombrelle

- antinomie → *paradoxe* ✓ — Thème : l'oxymore (obscure clarté). « Le » demande un masculin ; « antinomie » donne paradoxe. « Contraste » possible, mais l'antinomie est une contradiction, donc paradoxe.

**Mot 5 : rhétorique** (trouvé à la brique 1, mise 2) — piste : éloquence + Cicéron

- éloquence → *rhétorique* ✓ — La brique « éloquence » appelle un synonyme sans article après « amateurs de ». La figure décrite est l'oxymore (« obscure clarté » chez Corneille), et ce sont les amateurs de rhétorique qu'elle ravit.

**Solution : l'oxymore** — texte vu : « Cette lueur qui tombe des étoiles unit deux termes contradictoires ; cette figure de style cultive le paradoxe et ravit les amateurs de rhétorique. »

- *l'oxymore* ✓ — « Obscure clarté » (Corneille) réunit deux termes contradictoires : c'est la figure de style de l'oxymore.

### e-311 : « Mots de velours » → un euphémisme

**Mot 1 : mort** (trouvé à la brique 1, mise 2) — piste : décédé + bride

- décédé → *mort* ✓ — « Il nous a quittés » est un euphémisme pour « il est mort ». « Décédé » est un synonyme direct de mort.

**Mot 2 : détour** (trouvé à la brique 1, mise 2) — piste : crochet + valoir

- crochet → *détour* ✓ — « Crochet » évoque un détour (« faire un crochet »). Le texte décrit l'euphémisme, une manière détournée de dire, et « un détour » convient au masculin devant l'adjectif masqué.

**Mot 3 : pudique** (trouvé à la brique 1, mise 2) — piste : réservé + chandail

- réservé → *pudique* ✓ — Le thème est l'euphémisme et il faut un adjectif masculin après « détour ». La brique « réservé » est un synonyme de « pudique ». J'ai écarté « délicat » et « poli ».

**Mot 4 : atténuer** (trouvé à la brique 1, mise 2) — piste : adoucir + mécréant

- adoucir → *atténuer* ✓ — Le thème est l'euphémisme. Il faut un infinitif après « chercher à », et « adoucir » donne « atténuer » la réalité. J'ai écarté « édulcorer », plus péjoratif.

**Mot 5 : sensibilité** (trouvé à la brique 1, mise 2) — piste : émotivité + épiderme

- émotivité → *sensibilité* ✓ — Thème : l'euphémisme. « Ménager la … d'autrui » au féminin ; « émotivité » donne sensibilité, la collocation la plus naturelle.

**Solution : un euphémisme** — texte vu : « Dire « il nous a quittés » pour « il est mort » : voilà un détour pudique ; on cherche à atténuer la réalité pour ménager la sensibilité d'autrui. »

- *l'euphémisme* ✓ — Dire « il nous a quittés » pour atténuer une réalité pénible, c'est l'euphémisme. Le titre « Mots de velours » et l'idée de détour pudique le confirment. Candidat écarté : la litote, qui dit moins pour suggérer plus.

### e-312 : « Le théâtre qui soigne » → la catharsis

**Mot 1 : tragédie** (trouvé à la brique 1, mise 2) — piste : comédie + Racine

- comédie → *tragédie* ✓ — Le philosophe de Stagire est Aristote, la solution est la catharsis : la tragédie suscite crainte et pitié. « Comédie » en est le contraire, et le féminin convient.

**Mot 2 : crainte** (trouvé à la brique 2, mise 2) — piste : peur + Dieu

- peur → *terreur* ✗ — « Peur » est proche de terreur. Selon Aristote (le Stagirite), la tragédie suscite « terreur et pitié » : c'est la formule consacrée de la catharsis.
- peur + Dieu → *crainte* ✓ — Le thème est la catharsis selon Aristote : la tragédie suscite « crainte et pitié ». « Terreur » a été refusé. La brique « peur » est un synonyme, et « Dieu » renvoie à l'expression « la crainte de Dieu ».

**Mot 3 : apaisé** (trouvé à la brique 1, mise 2) — piste : rasséréné + disciple

- rasséréné → *apaisé* ✓ — Le thème est la catharsis selon Aristote. Il faut un participe au masculin singulier qui s'accorde avec « le spectateur », et « rasséréné » donne « apaisé ». J'ai écarté « soulagé » et « purgé » ; « purgées » viendra sans doute plus loin, pour les passions.

**Mot 4 : passions** (trouvé à la brique 1, mise 2) — piste : émotions + Christ

- émotions → *passions* ✓ — Thème : la catharsis aristotélicienne (purgation des passions). « Ses … » au pluriel ; « émotions » donne passions, terme consacré, le mot suivant étant sans doute « purgées ».

**Mot 5 : purgées** (trouvé à la brique 1, mise 3) — piste : libérées + laxatif + netteté

- libérées → *purgées* ✓ — La brique « libérées » appelle un synonyme au féminin pluriel, accordé avec « passions ». Chez Aristote (né à Stagire), la catharsis purge les passions. « Purgées » s'impose, devant « épurées ».

**Solution : la catharsis** — texte vu : « Pour le philosophe de Stagire, la tragédie suscite crainte et pitié ; le spectateur en sort apaisé, ses passions ainsi purgées. »

- *la catharsis* ✓ — Le philosophe de Stagire est Aristote ; la tragédie qui purge les passions par la crainte et la pitié, c'est la catharsis.

### e-313 : « Big Brother » → une dystopie

**Mot 1 : sinistre** (trouvé à la brique 2, mise 2) — piste : lugubre + assurance

- lugubre → *sombre* ✗ — Big Brother renvoie à 1984, donc à la dystopie. « Lugubre » a pour synonymes sombre et sinistre, et j'ai retenu sombre, plus courant pour qualifier un futur.
- lugubre + assurance → *sinistre* ✓ — « Lugubre » donne sombre (déjà refusé) ou sinistre. « Assurance » renvoie aussi à « sinistre » au sens du vocabulaire des assurances, ce qui confirme le mot. « Futur sinistre » convient pour la dystopie d'Orwell.

**Mot 2 : épier** (trouvé à la brique 1, mise 3) — piste : guetter + judas + sabre

- guetter → *épier* ✓ — Le thème est « 1984 » d'Orwell. Il faut un verbe à l'infinitif qui commence par une voyelle, à cause de « d' ». La brique « guetter » est un synonyme d'« épier ». J'ai écarté « espionner », un peu plus loin de « guetter ».

**Mot 3 : censure** (trouvé à la brique 2, mise 3) — piste : liberté + ciseaux + avec

- liberté → *tyrannie* ✗ — Le décor est celui de 1984 d'Orwell. Il faut un nom féminin après « la », et je lis « liberté » comme un contraire : tyrannie, oppression ou servitude. J'ai écarté « surveillance », qui n'est pas vraiment le contraire de la liberté, et retenu « tyrannie », qui « règne ».
- liberté + ciseaux → *censure* ✓ — Thème : 1984. « Tyrannie » refusé ; « liberté » en contraire et « ciseaux » (Anastasie et ses ciseaux, symbole de la censure) mènent à censure, féminin, cohérent avec « la pensée libre est un crime ».

**Mot 4 : pensée** (trouvé à la brique 1, mise 2) — piste : réflexion + Pascal

- réflexion → *pensée* ✓ — La brique « réflexion » appelle un synonyme féminin (« la ___ libre »). Dans 1984 d'Orwell, la libre pensée est un crime (le crimepensée). « Pensée » convient mieux que « parole ».

**Mot 5 : mensonge** (trouvé à la brique 1, mise 2) — piste : tromperie + Pinocchio

- tromperie → *mensonge* ✓ — Il faut un nom masculin après « le », que la brique « tromperie » oriente vers son synonyme. Dans 1984, le mensonge remplace la vérité : je retiens « mensonge », de préférence à « leurre ».

**Solution : une dystopie** — texte vu : « Dans ce futur sinistre, le Parti ne cesse d'épier chaque citoyen ; la censure règne, la pensée libre est un crime, et le mensonge a remplacé la vérité. »

- *1984* ✗ — Big Brother, le Parti, la surveillance, la police de la pensée et le mensonge érigé en vérité : c'est le roman d'Orwell. J'ai envisagé « la dystopie » et « Orwell », mais le texte décrit l'univers précis de ce livre.
- *le totalitarisme* ✗ — Big Brother, le Parti, la surveillance, la censure, le crime par la pensée et le mensonge d'État renvoient à l'univers d'Orwell. « 1984 » a été refusé, donc la solution est plutôt le concept décrit. J'ai hésité avec « la dystopie » et « la dictature ». Le totalitarisme résume le mieux le contrôle total que décrit le texte.
- *la dystopie* ✓ — Le titre « Big Brother » et le texte (Parti, surveillance, censure, crime de pensée, mensonge à la place de la vérité) renvoient à l'univers de 1984 d'Orwell. Comme « 1984 » et « le totalitarisme » ont déjà été refusés, je retiens le genre décrit par « ce futur sinistre » : la dystopie. Autres candidats envisagés : « la surveillance », « Orwell », « le roman d'Orwell », mais « futur sinistre » définit le plus directement une dystopie.

### e-314 : « Tout s'use » → l'entropie

**Mot 1 : désordre** (trouvé à la brique 1, mise 2) — piste : pagaille + chambre

- pagaille → *désordre* ✓ — Le second principe de la thermodynamique, c'est l'entropie. « Pagaille » a pour synonyme désordre, masculin, et « le désordre ne fait que croître » colle au texte.

**Mot 2 : chaos** (trouvé à la brique 1, mise 2) — piste : harmonie + secousse

- harmonie → *chaos* ✓ — « Harmonie » est le contraire de chaos, et « l'ordre cède au chaos » est cohérent avec « au » masculin. Le thème est l'entropie. J'ai écarté « désordre », déjà présent dans le texte.

**Mot 3 : énergie** (trouvé à la brique 1, mise 2) — piste : vigueur + joule

- vigueur → *énergie* ✓ — Le thème est l'entropie : l'énergie se dissipe en chaleur, selon le second principe de la thermodynamique. Le mot commence par une voyelle, à cause de « l' ». La brique « vigueur » est un synonyme d'« énergie ».

**Mot 4 : chaleur** (trouvé à la brique 1, mise 2) — piste : froid + canicule

- froid → *chaleur* ✓ — Le thème est l'entropie, et le texte cite le second principe de la thermodynamique. Pris comme contraire, « froid » donne « chaleur », et « l'énergie se dissipe en chaleur » est l'énoncé classique.

**Mot 5 : thermodynamique** (trouvé à la brique 1, mise 3) — piste : Carnot + physique + bains

- Carnot → *thermodynamique* ✓ — Thème : l'entropie. Le second principe de la thermodynamique a été énoncé par Sadi Carnot, brique d'association évidente.

**Solution : l'entropie** — texte vu : « Le désordre ne fait que croître ; l'ordre cède au chaos ; l'énergie se dissipe en chaleur : c'est le second principe de la thermodynamique. »

- *l'entropie* ✓ — Le désordre qui croît, l'énergie qui se dissipe et le second principe de la thermodynamique désignent l'entropie. Le titre « Tout s'use » le confirme.

### e-315 : « Madeleine trempée » → la réminiscence

**Mot 1 : impression** (trouvé à la brique 1, mise 2) — piste : sensation + Monet

- sensation → *impression* ✓ — La madeleine de Proust renvoie à la réminiscence. « Sensation » a pour synonyme un mot féminin (« Une ... oubliée ») : j'ai envisagé impression et émotion, et retenu impression, plus proche.

**Mot 2 : saveur** (trouvé à la brique 1, mise 2) — piste : goût + ignorant

- goût → *saveur* ✓ — « Goût » est un synonyme de saveur. Le féminin « une » exclut goût lui-même, et la paire « un parfum, une saveur » renvoie à la madeleine de Proust (la réminiscence).

**Mot 3 : resurgir** (trouvé à la brique 1, mise 2) — piste : réapparaître + phénix

- réapparaître → *resurgir* ✓ — Le thème est la réminiscence de Proust, et il faut un infinitif après « se met à ». La brique « réapparaître » est un synonyme de « resurgir ». J'ai écarté « revivre ».

**Mot 4 : souvenir** (trouvé à la brique 1, mise 2) — piste : mémoire + sur

- mémoire → *souvenir* ✓ — Le titre évoque la madeleine de Proust. Il faut un nom masculin après « un vrai » ; « mémoire » donne « souvenir », que la suite oppose à une réminiscence confuse.

**Mot 5 : évocation** (trouvé à la brique 2, mise 3) — piste : rappel + spiritisme + progression

- rappel → *réminiscence* ✗ — Thème : la madeleine de Proust. « Une … confuse » au féminin, souvenir vague : réminiscence ; « rappel » en est un synonyme. « Évocation » possible mais moins juste.
- rappel + spiritisme → *évocation* ✓ — « Rappel » est un synonyme, et « spiritisme » est une incitation : le spiritisme évoque les esprits, d'où l'évocation. « Réminiscence » a déjà été refusé. « Évocation » est féminin et s'accorde avec « une ___ confuse ».

**Solution : la réminiscence** — texte vu : « Une impression oubliée remonte : un parfum, une saveur, et le passé se met à resurgir ; ce n'est pas un vrai souvenir, mais une évocation confuse. »

- *la réminiscence* ✓ — La madeleine de Proust, un souvenir qui remonte de façon confuse par un parfum ou une saveur : c'est la réminiscence, que le texte distingue d'un vrai souvenir.

### e-316 : « Femme aux yeux bandés » → l'allégorie

**Mot 1 : balance** (trouvé à la brique 1, mise 2) — piste : bascule + plateaux

- bascule → *balance* ✓ — Une femme aux yeux bandés avec une balance et un glaive, c'est la Justice, et la solution est l'allégorie. La « bascule » est une sorte de balance, au féminin.

**Mot 2 : glaive** (trouvé à la brique 1, mise 2) — piste : épée + bouclier

- épée → *glaive* ✓ — « Épée » est un synonyme de glaive. Le masculin « un » exclut épée, et la Justice est figurée avec une balance et un glaive (l'allégorie).

**Mot 3 : justice** (trouvé à la brique 1, mise 2) — piste : équité + tribunal

- équité → *justice* ✓ — Une femme avec une balance et un glaive, c'est l'allégorie de la Justice. Le mot est féminin. La brique « équité » est un synonyme de « justice ».

**Mot 4 : artiste** (trouvé à la brique 1, mise 3) — piste : créateur + atelier + veine

- créateur → *artiste* ✓ — Le thème est l'allégorie. L'élision « l' » impose une initiale vocalique, et « créateur » donne « artiste » ou « auteur ». J'ai retenu « artiste », qui colle mieux à une image visible.

**Mot 5 : abstraite** (trouvé à la brique 1, mise 2) — piste : théorique + curé

- théorique → *abstraite* ✓ — Thème : l'allégorie. « Une idée … » demande un adjectif féminin ; « théorique » donne abstraite, l'allégorie rendant visible l'abstrait.

**Solution : l'allégorie** — texte vu : « Une femme tenant une balance et un glaive : voici la justice figurée ; l'artiste rend visible une idée abstraite. »

- *l'allégorie* ✓ — La femme aux yeux bandés, avec sa balance et son glaive, figure la Justice : c'est une idée abstraite rendue visible, autrement dit une allégorie. Candidat écarté : le symbole, moins précis.

### e-317 : « Élégance insolente » → le dandysme

**Mot 1 : modèle** (trouvé à la brique 1, mise 2) — piste : parangon + défilé

- parangon → *modèle* ✓ — Brummell incarne le dandysme. « Parangon » signifie modèle : j'ai envisagé modèle, archétype et prince, et retenu modèle, synonyme le plus direct.

**Mot 2 : nonchalance** (trouvé à la brique 1, mise 2) — piste : indolence + oui

- indolence → *nonchalance* ✓ — « Indolence » est un synonyme de nonchalance. Le féminin colle, et la « nonchalance étudiée » est un trait type du dandy, comme Brummell.

**Mot 3 : costume** (trouvé à la brique 1, mise 2) — piste : complet + cravate

- complet → *costume* ✓ — Le thème est le dandy (Brummell). La brique « complet » désigne un costume, et le mot est masculin, ce qui va avec « un costume impeccable ».

**Mot 4 : impertinence** (trouvé à la brique 1, mise 2) — piste : insolence + ciré

- insolence → *impertinence* ✓ — Brummell incarne le dandysme. Il faut un nom féminin, et « insolence » donne son synonyme « impertinence », qui s'accorde avec « affectée ».

**Mot 5 : vulgarité** (trouvé à la brique 1, mise 3) — piste : trivialité + beauf + Héphaïstos

- trivialité → *vulgarité* ✓ — Thème : le dandysme. Féminin après « la » ; « trivialité » est synonyme de vulgarité, ce que méprise le dandy.

**Solution : le dandysme** — texte vu : « Brummell en fut le modèle : une nonchalance étudiée, un costume impeccable, une impertinence affectée et un mépris souverain pour la vulgarité. »

- *le dandysme* ✓ — Brummell est le modèle du dandy : nonchalance étudiée, costume impeccable, impertinence et mépris de la vulgarité. Le texte décrit une attitude (« en fut le modèle »), d'où « le dandysme » plutôt que « le dandy ».

### e-318 : « Alceste » → la misanthropie

**Mot 1 : semblables** (trouvé à la brique 1, mise 3) — piste : congénères + prochain + avec

- congénères → *semblables* ✓ — Alceste, c'est le Misanthrope. « Congénères » a pour synonyme semblables, au pluriel (« ses ... »).

**Mot 2 : fausseté** (trouvé à la brique 2, mise 2) — piste : duplicité + tombe

- duplicité → *hypocrisie* ✗ — « Duplicité » est un synonyme d'hypocrisie. Alceste, le misanthrope, déteste l'hypocrisie des hommes, et le féminin « leur » est compatible. J'ai envisagé « fausseté ».
- duplicité + tombe → *fausseté* ✓ — Le thème est le misanthrope (Alceste), et « hypocrisie » a été refusé. La brique « duplicité » est un synonyme. « Tombe » est une incitation : il évoque « fosse », qui donne le son « fo » de « fausseté ».

**Mot 3 : retraite** (trouvé à la brique 1, mise 2) — piste : refuge + ermitage

- refuge → *retraite* ✓ — Alceste est le Misanthrope. Il faut un nom féminin après « sa », et « refuge » donne « retraite ». J'ai écarté « solitude », qui semble plutôt réservé à la suite (« il cultive sa solitude »).

**Mot 4 : solitude** (trouvé à la brique 1, mise 2) — piste : isolement + Cent ans

- isolement → *solitude* ✓ — Thème : le misanthrope (Alceste). Féminin après « sa » ; « isolement » donne solitude, l'autre mot masqué étant sans doute « rancœur » ou « misanthropie ».

**Mot 5 : rancune** (non trouvé, mise 2) — piste : ressentiment + file

- ressentiment → *rancœur* ✗ — La brique « ressentiment » appelle un synonyme féminin (« sa ___ »). Alceste est le misanthrope de Molière, amer envers ses semblables. J'ai retenu « rancœur » plutôt que « rancune » ou « amertume ».
- ressentiment + file → *misanthropie* ✗ — Alceste est le Misanthrope de Molière ; le mot est féminin (« sa ») et « rancœur » a été refusé. « File » est sans doute une incitation par le son « phil », qui évoque « philanthropie », le contraire de « misanthropie ».

**Solution : la misanthropie** — texte vu : « Il fuit ses semblables, déteste leur fausseté ; reclus dans sa retraite, il cultive sa solitude et sa ____. »

- *le misanthrope* ✗ — Alceste est le héros du Misanthrope de Molière. Fuir ses semblables, détester leur fausseté et vivre reclus, c'est la définition du misanthrope. Le mot masqué en fin de texte est sans doute « misanthropie ».
- *la misanthropie* ✓ — Alceste est le héros du Misanthrope de Molière, et le texte décrit quelqu'un qui fuit et déteste ses semblables. « Le misanthrope » a été refusé, donc on attend sans doute le trait de caractère lui-même : la misanthropie. Il est féminin et colle au thème.

### e-319 : « Carpe diem » → l'hédonisme

**Mot 1 : plaisir** (trouvé à la brique 1, mise 2) — piste : jouissance + blessure

- jouissance → *plaisir* ✓ — Carpe diem, c'est l'hédonisme : le plaisir est le souverain bien. « Jouissance » en est un synonyme, et le masculin convient.

**Mot 2 : douleur** (trouvé à la brique 1, mise 2) — piste : souffrance + aspirine

- souffrance → *douleur* ✓ — « Souffrance » est un synonyme de douleur. Le féminin « la » colle, et « fuir la douleur » est le principe hédoniste et épicurien.

**Mot 3 : instant** (trouvé à la brique 1, mise 2) — piste : moment + fourmi

- moment → *instant* ✓ — Le thème est l'hédonisme et le carpe diem. Il faut un nom singulier après « chaque », et la brique « moment » est un synonyme d'« instant ».

**Mot 4 : modération** (trouvé à la brique 1, mise 2) — piste : tempérance + vogue

- tempérance → *modération* ✓ — Le thème est l'épicurisme, opposé à l'hédonisme débridé. Il faut un nom féminin, et « tempérance » donne « modération » ; la phrase l'oppose sans doute à « l'excès ».

**Mot 5 : ivresse** (trouvé à la brique 1, mise 2) — piste : griserie + Bacchus

- griserie → *ivresse* ✓ — Thème : l'hédonisme. « L' » demande une voyelle ; « griserie » donne ivresse, opposée à la modération. « Excès » possible mais moins proche de griserie.

**Solution : l'hédonisme** — texte vu : « Cueille le jour : le plaisir est le souverain bien ; fuis la douleur, savoure chaque instant ; Épicure prônait pourtant la modération plus que l'ivresse. »

- *l'hédonisme* ✓ — « Le plaisir est le souverain bien », « savoure chaque instant », Carpe diem : c'est l'hédonisme. Le « pourtant » qui oppose Épicure à l'ivresse indique que la solution n'est pas exactement l'épicurisme.

### e-320 : « Pyrrhon d'Élis » → le scepticisme

**Mot 1 : jugement** (trouvé à la brique 1, mise 2) — piste : verdict + dernier

- verdict → *jugement* ✓ — Pyrrhon est le père du scepticisme, dont le principe est de suspendre son jugement (l'épochè). « Verdict » est un synonyme de jugement.

**Mot 2 : certitude** (trouvé à la brique 1, mise 2) — piste : conviction + biche

- conviction → *certitude* ✓ — « Conviction » est proche de certitude. Le féminin « toute » colle, et le sceptique pyrrhonien tient toute certitude pour douteuse.

**Mot 3 : illusoire** (trouvé à la brique 1, mise 2) — piste : trompeuse + atoll

- trompeuse → *illusoire* ✓ — Le thème est le scepticisme de Pyrrhon : il tenait toute certitude pour illusoire. La brique « trompeuse » est un synonyme. J'ai écarté « douteuse ».

**Mot 4 : ignorance** (trouvé à la brique 1, mise 2) — piste : connaissance + crasse

- connaissance → *ignorance* ✓ — Pyrrhon est le père du scepticisme. Je lis « connaissance » comme un contraire, ce qui donne « ignorance » ; l'initiale vocalique va avec « l' ».

**Mot 5 : crédulité** (trouvé à la brique 1, mise 2) — piste : naïveté + invention

- naïveté → *crédulité* ✓ — Thème : le scepticisme. Féminin après « la » ; « naïveté » donne crédulité, défaut que le sceptique redoute plus que l'ignorance.

**Solution : le scepticisme** — texte vu : « Le sage suspendait son jugement ; il tenait toute certitude pour illusoire ; l'ignorance l'inquiétait moins que la crédulité. »

- *le scepticisme* ✓ — Pyrrhon d'Élis fonde le scepticisme : il suspend son jugement (l'épochè) et tient toute certitude pour illusoire. Le pyrrhonisme en est un synonyme, mais il reprend le titre.

### e-321 : « Toujours demain » → l'atermoiement

**Mot 1 : ouvrage** (trouvé à la brique 1, mise 2) — piste : travail + métier

- travail → *ouvrage* ✓ — La solution est la procrastination. « Travail » a pour synonymes ouvrage, labeur et tâche, mais l'élision (« l'... ») exige une voyelle, donc ouvrage.

**Mot 2 : subterfuges** (trouvé à la brique 2, mise 3) — piste : échappatoires + ruse + endurer

- échappatoires → *prétextes* ✗ — « Échappatoires » renvoie à prétextes, excuses ou faux-fuyants. Le pluriel « des » convient, et « chercher des prétextes » est le geste type du procrastinateur. J'ai écarté « excuses » pour garder une nuance proche de la brique.
- échappatoires + ruse → *subterfuges* ✓ — Le thème est la procrastination et « prétextes » a été refusé. Il faut un pluriel. La brique « échappatoires » est un synonyme, et « ruse » oriente vers « subterfuges » plutôt que vers « faux-fuyants ».

**Mot 3 : délais** (trouvé à la brique 1, mise 2) — piste : sursis + livraison

- sursis → *délais* ✓ — Le thème est la procrastination. Il faut un pluriel après « les », et « sursis » donne « délais ». J'ai écarté « atermoiements », possible mais plus éloigné de sursis.

**Mot 4 : tergiversations** (trouvé à la brique 1, mise 2) — piste : hésitations + planète

- hésitations → *tergiversations* ✓ — Thème : la procrastination. Pluriel après « les » ; « hésitations » est synonyme de tergiversations. « Atermoiements » envisagé, mais il renvoie au délai plutôt qu'à l'hésitation.

**Mot 5 : créanciers** (trouvé à la brique 1, mise 2) — piste : débiteurs + dette

- débiteurs → *créanciers* ✓ — La brique « débiteurs » appelle son contraire, au pluriel (« les ___ »). Les délais et les tergiversations de la procrastination exaspèrent ceux à qui l'on doit, les créanciers.

**Solution : l'atermoiement** — texte vu : « Remettre sans cesse l'ouvrage, chercher des subterfuges, multiplier les délais et les tergiversations : voilà qui exaspère les créanciers. »

- *les atermoiements* ✓ — Remettre l'ouvrage, chercher des délais et tergiverser face aux créanciers renvoie au vocabulaire des atermoiements, terme très lié aux dettes. J'ai envisagé « la procrastination », mais la mention des créanciers me fait choisir « les atermoiements ».

### e-322 : « Éclair intérieur » → l'épiphanie

**Mot 1 : fulgurant** (trouvé à la brique 1, mise 2) — piste : foudroyant + ascension

- foudroyant → *fulgurant* ✓ — Un éclair intérieur, les mages et la galette des rois pointent vers l'Épiphanie. « Foudroyant » a pour synonyme fulgurant, et « un éclair fulgurant » se dit couramment.

**Mot 2 : illumination** (trouvé à la brique 1, mise 2) — piste : inspiration + Rimbaud

- inspiration → *illumination* ✓ — « Inspiration » est proche d'illumination. Le féminin « une soudaine » colle, et l'éclair intérieur est l'épiphanie (fêtée ensuite avec une galette).

**Mot 3 : limpide** (trouvé à la brique 1, mise 2) — piste : clair + trouble

- clair → *limpide* ✓ — Le thème est l'épiphanie, qui se fête avec une galette. Il faut un adjectif après « devient ». La brique « clair » donne « limpide », « évident » ou « lumineux », et j'ai retenu « limpide ».

**Mot 4 : manifestation** (trouvé à la brique 1, mise 2) — piste : apparition + pancarte

- apparition → *manifestation* ✓ — Le thème est l'épiphanie : les mages, et la galette qu'on partage pour fêter cela. Il faut un nom féminin, et « apparition » donne « manifestation », le sens premier d'épiphanie.

**Mot 5 : galette** (trouvé à la brique 1, mise 2) — piste : gâteau + fève

- gâteau → *galette* ✓ — Thème : l'épiphanie (illumination, Rois mages). « Une … » au féminin ; « gâteau » donne galette des rois, qu'on mange à l'Épiphanie.

**Solution : l'épiphanie** — texte vu : « Un éclair fulgurant dans l'esprit, une soudaine illumination : tout devient limpide ; les mages y virent la manifestation d'un dieu ; nous fêtons cela avec une galette. »

- *l'épiphanie* ✓ — L'illumination soudaine, la manifestation d'un dieu aux mages et la galette des rois renvoient à l'Épiphanie, au double sens de révélation et de fête.

### e-323 : « Bienfaiteur des arts » → le mécénat

**Mot 1 : princes** (trouvé à la brique 1, mise 2) — piste : monarques + Machiavel

- monarques → *princes* ✓ — Le bienfaiteur des arts est le mécène (mécénat). « Monarques » a pour synonyme princes, au pluriel, qui convient aux Médicis de la Renaissance.

**Mot 2 : artistes** (trouvé à la brique 1, mise 2) — piste : créateurs + bohème

- créateurs → *artistes* ✓ — « Créateurs » est un synonyme d'artistes. Le pluriel colle, et les princes mécènes protégeaient les artistes (thème du mécénat).

**Mot 3 : fortune** (trouvé à la brique 1, mise 2) — piste : richesse + Forbes

- richesse → *fortune* ✓ — Le thème est le mécénat. Il faut un nom féminin après « leur » qui puisse « financer ». La brique « richesse » est un synonyme de « fortune ».

**Mot 4 : statues** (trouvé à la brique 1, mise 2) — piste : sculptures + piédestal

- sculptures → *statues* ✓ — Le thème est le mécénat. Il faut un pluriel à côté de « fresques », et « sculptures » donne son synonyme « statues ».

**Mot 5 : déduction** (trouvé à la brique 2, mise 2) — piste : abattement + challenge

- abattement → *réduction* ✗ — Thème : le mécénat. « Une … fiscale » au féminin ; « abattement » donne réduction (réduction d'impôt du mécénat). « Déduction » ou « exonération » envisagées, réduction est la plus courante.
- abattement + challenge → *déduction* ✓ — « Abattement » est un synonyme, et « challenge » une incitation : il évoque « défi », d'où le son « dé ». « Réduction » a été refusé. « Déduction fiscale » est féminin, commence par « dé » et va avec le mécénat.

**Solution : le mécénat** — texte vu : « Les princes de la Renaissance protégeaient les artistes ; leur fortune finançait fresques et statues ; aujourd'hui, une déduction fiscale encourage ce soutien. »

- *le mécénat* ✓ — Des princes de la Renaissance qui protègent les artistes, et une déduction fiscale qui encourage ce soutien aujourd'hui : c'est le mécénat.

### e-324 : « Comparaison sans comme » → une métaphore

**Mot 1 : automne** (trouvé à la brique 2, mise 2) — piste : printemps + feuilles

- printemps → *hiver* ✗ — Une comparaison sans « comme », c'est la métaphore ; pour la vieillesse, on dit « l'hiver de la vie ». « Printemps » en est le contraire, et le h muet permet l'élision.
- printemps + feuilles → *automne* ✓ — « Hiver » a été refusé. « Printemps » est l'opposé de l'automne, et « feuilles » évoque leur chute à l'automne. « L'automne de la vie » est la métaphore classique de la vieillesse, et l'élision « l' » colle.

**Mot 2 : poétique** (trouvé à la brique 1, mise 2) — piste : lyrique + licence

- lyrique → *poétique* ✓ — Le thème est la métaphore, et il faut un adjectif féminin après « image ». La brique « lyrique » est proche de « poétique », qui convient à « une image poétique ».

**Mot 3 : analogie** (trouvé à la brique 1, mise 2) — piste : similitude + examen

- similitude → *analogie* ✓ — Une comparaison sans « comme », c'est une métaphore. Il faut un nom féminin, et « similitude » donne « analogie ». J'ai écarté « comparaison », que le titre exclut.

**Mot 4 : orateurs** (trouvé à la brique 1, mise 2) — piste : tribuns + Démosthène

- tribuns → *orateurs* ✓ — Thème : la métaphore. Pluriel masculin après « les » ; « tribuns » donne orateurs, qui en font un ornement du discours.

**Mot 5 : ornement** (trouvé à la brique 1, mise 3) — piste : parure + guirlande + argent

- parure → *ornement* ✓ — La brique « parure » appelle un synonyme masculin (« un ___ du discours »). La métaphore est traditionnellement un ornement du discours. Candidat écarté : embellissement.

**Solution : une métaphore** — texte vu : « Dire « l'automne de la vie » pour la vieillesse : voilà une image poétique ; elle repose sur une analogie implicite ; les orateurs en font un ornement du discours. »

- *la métaphore* ✓ — Une comparaison sans outil de comparaison, fondée sur une analogie implicite (« l'automne de la vie ») : c'est la métaphore.

### e-325 : « Le désert intérieur » → l'ascèse

**Mot 1 : anachorète** (trouvé à la brique 2, mise 3) — piste : ermite + Thébaïde + boa

- ermite → *ascète* ✗ — Le désert intérieur et les privations renvoient à l'ascèse. « Ermite » est voisin d'ascète, qui commence par une voyelle (« L'... ») et désigne celui qui se prive de tout.
- ermite + Thébaïde → *anachorète* ✓ — « Ermite » est un synonyme d'anachorète, et la Thébaïde est le désert des anachorètes. Le mot commence par une voyelle (élision « L' »), et « ascète » a déjà été refusé.

**Mot 2 : jeûne** (trouvé à la brique 1, mise 2) — piste : festin + carême

- festin → *jeûne* ✓ — Le thème est l'ascèse de l'anachorète, qui se prive de nourriture. La brique « festin » est le contraire du jeûne. Le mot va bien dans « jeûne, ____ et veilles ».

**Mot 3 : abstinence** (trouvé à la brique 2, mise 2) — piste : continence + manquant

- continence → *chasteté* ✗ — Le thème est l'ascèse de l'anachorète. Il faut un nom féminin à côté de « jeûne » et « veilles », et « continence » donne son synonyme « chasteté ».
- continence + manquant → *abstinence* ✓ — Thème : ascèse / ascétisme. « Chasteté » refusé ; « continence » et « manquant » (privation) orientent vers abstinence, féminin, dans l'énumération jeûne, abstinence et veilles.

**Mot 4 : discipline** (non trouvé, mise 2) — piste : rigueur + fouet

- rigueur → *austérité* ✗ — La brique « rigueur » appelle un synonyme féminin (« cette ___ »). Les privations de l'anachorète relèvent de l'ascèse. « Austérité » est le synonyme direct de rigueur, devant « mortification ».
- rigueur + fouet → *mortification* ✗ — Il faut un nom féminin (« cette ») pour les privations de l'anachorète, et « austérité » a été refusée. « Fouet » évoque la flagellation, donc les pénitences corporelles : « mortification » convient mieux qu'« ascèse ».

**Mot 5 : purification** (trouvé à la brique 1, mise 3) — piste : ablutions + encens + netteté

- ablutions → *purification* ✓ — Les ablutions sont un rite de purification. Le texte porte sur l'ascèse de l'anachorète (le mot masqué est probablement « ascèse »), qui recherche « la ... de l'âme » : il faut un nom féminin. J'ai hésité avec « pureté », mais les ablutions évoquent plutôt l'action de purifier.

**Solution : l'ascèse** — texte vu : « L'anachorète se prive de tout : jeûne, abstinence et veilles ; par cette ____, il cherche la purification de l'âme. »

- *l'ascèse* ✓ — L'anachorète, le jeûne, l'abstinence, les veilles, la privation et la purification de l'âme décrivent une discipline de renoncement. Le mot masqué est féminin (« cette ____ »). Les candidats étaient l'ascèse, l'ascétisme et la mortification. J'ai retenu l'ascèse, le terme le plus juste pour cette pratique.

### e-326 : « La lanterne de Diogène » → le cynisme

**Mot 1 : tonneau** (trouvé à la brique 1, mise 2) — piste : fût + vin

- fût → *tonneau* ✓ — Diogène et sa lanterne, c'est le cynisme, et le philosophe vivait dans un tonneau. Un « fût » est un tonneau.

**Mot 2 : conventions** (trouvé à la brique 1, mise 3) — piste : usages + Genève + invité

- usages → *conventions* ✓ — « Usages » est un synonyme de conventions. Le pluriel colle, et Diogène le cynique méprisait les conventions sociales.

**Mot 3 : argent** (trouvé à la brique 1, mise 2) — piste : fric + Harpagon

- fric → *argent* ✓ — Le thème est le cynisme de Diogène. Le mot commence par une voyelle, à cause de « l' ». La brique « fric » est un synonyme familier d'« argent ».

**Mot 4 : impudence** (trouvé à la brique 1, mise 2) — piste : effronterie + taxe

- effronterie → *impudence* ✓ — Diogène est le modèle du cynisme. Il faut un nom féminin, car « provocante » est au féminin, et « effronterie » donne « impudence ». J'ai écarté « insolence », un peu moins proche d'effronterie.

**Mot 5 : notables** (trouvé à la brique 1, mise 2) — piste : dignitaires + bourgeois

- dignitaires → *notables* ✓ — Thème : le cynisme. Pluriel après « les » ; « dignitaires » donne notables d'Athènes, choqués par Diogène.

**Solution : le cynisme** — texte vu : « Le philosophe vivait dans un tonneau ; il méprisait les conventions et l'argent ; son impudence provocante choquait les notables d'Athènes. »

- *le cynisme* ✓ — Diogène dans son tonneau, son mépris des conventions et son impudence provocante représentent l'école cynique. J'ai retenu « le cynisme » plutôt que « le cynique ».

### e-327 : « Le temps qui coule » → la clepsydre

**Mot 1 : horloge** (trouvé à la brique 1, mise 2) — piste : pendule + coucou

- pendule → *horloge* ✓ — Le temps qui coule, c'est la clepsydre, ancêtre de l'horloge. « Pendule » est voisin d'horloge, féminin et à élision (« l'... »).

**Mot 2 : heures** (trouvé à la brique 1, mise 2) — piste : minutes + plombes

- minutes → *heures* ✓ — « Minutes » est associé aux heures, et le pluriel féminin colle. La clepsydre mesurait les heures par l'écoulement de l'eau.

**Mot 3 : eau** (trouvé à la brique 1, mise 2) — piste : liquide + bas

- liquide → *eau* ✓ — Le thème est la clepsydre, une horloge à eau. Le mot commence par une voyelle, à cause de « l' ». La brique « liquide » renvoie à l'eau qui s'écoule d'un vase percé.

**Mot 4 : vase** (trouvé à la brique 1, mise 2) — piste : récipient + Soissons

- récipient → *vase* ✓ — Le thème est la clepsydre. Il faut un nom masculin après « un », et « récipient » donne « vase » ; « vase percé » est la description classique.

**Mot 5 : tribunaux** (trouvé à la brique 1, mise 3) — piste : juridictions + verdict + Iseut

- juridictions → *tribunaux* ✓ — Thème : la clepsydre. « Les … grecs » au masculin pluriel ; « juridictions » donne tribunaux, où la clepsydre limitait le temps de parole.

**Solution : la clepsydre** — texte vu : « Avant l'horloge, on mesurait les heures grâce à l'eau qui s'écoulait d'un vase percé ; les tribunaux grecs la consultaient. »

- *la clepsydre* ✓ — Mesurer le temps grâce à l'eau qui s'écoule d'un vase percé, comme dans les tribunaux athéniens : c'est la clepsydre.

### e-328 : « Disque des astres » → l'astrolabe

**Mot 1 : laiton** (trouvé à la brique 1, mise 3) — piste : cuivre + zinc + beau

- cuivre → *laiton* ✓ — Le disque des astres, c'est l'astrolabe, traditionnellement en laiton. « Cuivre » évoque le laiton, un alliage de cuivre, qui va avec « disque de ... ».

**Mot 2 : hauteur** (trouvé à la brique 1, mise 2) — piste : altitude + bas

- altitude → *hauteur* ✓ — « Altitude » est un synonyme de hauteur. Le féminin « la » colle, et l'astrolabe mesure la hauteur des astres.

**Mot 3 : savants** (trouvé à la brique 1, mise 2) — piste : érudits + Nobel

- érudits → *savants* ✓ — Le thème est l'astrolabe. Il faut un pluriel masculin. La brique « érudits » est un synonyme de « savants ». J'ai écarté « astronomes », plus éloigné de la brique.

**Mot 4 : pilotes** (trouvé à la brique 2, mise 2) — piste : timoniers + avion

- timoniers → *navigateurs* ✗ — Le thème est l'astrolabe. « Timoniers » donne « navigateurs » (ou marins) au masculin pluriel, et la phrase finit sur l'expression « faire le point ».
- timoniers + avion → *pilotes* ✓ — Thème : l'astrolabe. « Navigateurs » refusé ; « timoniers » plus « avion » mènent à pilotes (de navire comme d'avion), qui l'emportaient pour faire le point.

**Mot 5 : point** (trouvé à la brique 1, mise 2) — piste : position + virgule

- position → *point* ✓ — La brique « position » appelle un synonyme. L'expression « faire le point », c'est-à-dire déterminer sa position en mer, impose « point ». L'instrument décrit est l'astrolabe.

**Solution : l'astrolabe** — texte vu : « Ce disque de laiton servait à mesurer la hauteur des étoiles ; les savants arabes le perfectionnèrent ; les pilotes l'emportaient pour faire le point. »

- *l'astrolabe* ✓ — Un disque de laiton qui mesure la hauteur des astres, perfectionné par les savants arabes et utilisé par les navigateurs : l'astrolabe.

### e-329 : « Bernin et Borromini » → le baroque

**Mot 1 : profusion** (trouvé à la brique 1, mise 2) — piste : abondance + élève

- abondance → *profusion* ✓ — Bernin et Borromini, c'est le baroque. « Abondance » a pour synonymes profusion et exubérance, au féminin (« de la ... ») ; j'ai retenu profusion, plus proche de la brique.

**Mot 2 : volutes** (trouvé à la brique 1, mise 2) — piste : spirales + fumée

- spirales → *volutes* ✓ — « Spirales » est un synonyme de volutes. Le pluriel féminin colle, et l'art baroque aime les volutes et les colonnes torses.

**Mot 3 : torses** (trouvé à la brique 1, mise 2) — piste : tordues + raison

- tordues → *torses* ✓ — Le thème est l'art baroque, connu pour ses colonnes torses (le baldaquin du Bernin). La brique « tordues » est un synonyme, et le mot est au féminin pluriel.

**Mot 4 : trompe-l'œil** (trouvé à la brique 1, mise 2) — piste : illusion + fresque

- illusion → *trompe-l'œil* ✓ — Bernin et Borromini, c'est le baroque. Il faut un nom masculin après « le », et « illusion » donne « trompe-l'œil », procédé emblématique du baroque.

**Mot 5 : ostentation** (trouvé à la brique 1, mise 2) — piste : exhibition + squelette

- exhibition → *ostentation* ✓ — Thème : le baroque. « L' » demande une voyelle ; « exhibition » donne ostentation, goût baroque du spectaculaire.

**Solution : le baroque** — texte vu : « Cet art de la profusion aime les volutes et les colonnes torses ; il cultive le trompe-l'œil et le goût de l'ostentation. »

- *le baroque* ✓ — Bernin et Borromini, les volutes, les colonnes torses, le trompe-l'œil et l'ostentation sont les marques de l'art baroque.

### e-330 : « L'art de Socrate » → la maïeutique

**Mot 1 : sage-femme** (trouvé à la brique 1, mise 2) — piste : accoucheuse + maternité

- accoucheuse → *sage-femme* ✓ — Socrate, fils de la sage-femme Phénarète, pratiquait la maïeutique. « Accoucheuse » est un synonyme de sage-femme.

**Mot 2 : accoucheur** (trouvé à la brique 1, mise 2) — piste : obstétricien + forceps

- obstétricien → *accoucheur* ✓ — « Obstétricien » est un synonyme d'accoucheur. Socrate, fils d'une sage-femme, se disait accoucheur des esprits (la maïeutique).

**Mot 3 : questions** (trouvé à la brique 1, mise 2) — piste : interrogations + Graal

- interrogations → *questions* ✓ — Le thème est la maïeutique. Il faut un féminin pluriel, à cause de « insistantes ». La brique « interrogations » est un synonyme de « questions ».

**Mot 4 : découvrir** (trouvé à la brique 1, mise 2) — piste : trouver + Amérique

- trouver → *découvrir* ✓ — Le thème est la maïeutique. Il faut un infinitif après « mener à », et « trouver » donne « découvrir » ; l'objet sera sans doute sa propre vérité.

**Mot 5 : vérité** (trouvé à la brique 1, mise 2) — piste : mensonge + puits

- mensonge → *vérité* ✓ — Thème : la maïeutique. « Mensonge » est le contraire : l'élève découvre sa propre vérité. Féminin après « sa ».

**Solution : la maïeutique** — texte vu : « Fils d'une sage-femme, Socrate se disait accoucheur des esprits ; par ses questions insistantes, il menait l'élève à découvrir sa propre vérité. »

- *la maïeutique* ✓ — Socrate, fils d'une sage-femme, se disait accoucheur des esprits : c'est la maïeutique, l'art de faire accoucher les esprits par des questions.

### e-331 : « Brebis égarées » → l'hérésie

**Mot 1 : dogme** (trouvé à la brique 1, mise 2) — piste : doctrine + Église

- doctrine → *dogme* ✓ — Les brebis égarées sont les hérétiques, et la solution est l'hérésie. « Doctrine » a pour synonyme dogme, masculin (« du ... »).

**Mot 2 : excommunication** (trouvé à la brique 1, mise 3) — piste : anathème + pape + divorcé

- anathème → *excommunication* ✓ — « Anathème » est un synonyme d'excommunication. Le mot commence par une voyelle (l'), et il convient pour l'hérésie et l'Inquisition qui suit.

**Mot 3 : inquisition** (trouvé à la brique 1, mise 2) — piste : Torquemada + tribunal

- Torquemada → *Inquisition* ✓ — Le thème est l'hérésie : l'Inquisition traquait les hérétiques et les livrait au bûcher. Le mot commence par une voyelle, à cause de « l' ». La brique « Torquemada », le grand inquisiteur, l'évoque directement.

**Mot 4 : dissidents** (trouvé à la brique 1, mise 3) — piste : opposants + goulag + neuf

- opposants → *dissidents* ✓ — Le thème est l'hérésie. Il faut un masculin pluriel après « ces », et « opposants » donne « dissidents ». J'ai envisagé « hérétiques », mais il est moins proche de la brique et sans doute trop proche de la solution.

**Mot 5 : bûcher** (trouvé à la brique 1, mise 2) — piste : autodafé + fagots

- autodafé → *bûcher* ✓ — Thème : l'hérésie. « Livrer au … » au masculin ; « autodafé » donne bûcher, supplice des hérétiques.

**Solution : l'hérésie** — texte vu : « S'écarter du dogme, c'est risquer l'excommunication ; l'inquisition traquait ces dissidents et les livrait au bûcher. »

- *l'hérésie* ✓ — S'écarter du dogme, risquer l'excommunication, être poursuivi par l'Inquisition et finir au bûcher : c'est l'hérésie. Les brebis égarées du titre sont les hérétiques.

### e-332 : « Le vote des potiers » → l'ostracisme

**Mot 1 : tesson** (trouvé à la brique 1, mise 2) — piste : débris + poterie

- débris → *tesson* ✓ — Le vote des potiers, c'est l'ostracisme : on gravait le nom sur un ostrakon, un tesson de poterie. « Débris » mène à tesson, masculin.

**Mot 2 : bannir** (trouvé à la brique 1, mise 2) — piste : exclure + haut

- exclure → *bannir* ✓ — « Exclure » est un synonyme de bannir, et un infinitif est attendu après « pour ». L'ostracisme servait à bannir un citoyen. J'ai envisagé « exiler », mais « bannir » est plus courant.

**Mot 3 : influent** (trouvé à la brique 1, mise 3) — piste : puissant + lobbyiste + supérieur

- puissant → *influent* ✓ — Le thème est l'ostracisme à Athènes, où l'on bannissait les citoyens jugés trop puissants. Il faut un adjectif masculin, et la brique « puissant » donne « influent ». J'ai écarté « ambitieux ».

**Mot 4 : éloignement** (trouvé à la brique 1, mise 2) — piste : distance + écolier

- distance → *éloignement* ✓ — Le thème est l'ostracisme. Il faut un nom masculin à initiale vocalique après « cet » ; « distance » donne « éloignement ». J'ai écarté « exil », possible mais moins proche de la brique.

**Mot 5 : exclusion** (trouvé à la brique 1, mise 2) — piste : éviction + sociale

- éviction → *exclusion* ✓ — Thème : l'ostracisme. « Une … légale » au féminin ; « éviction » donne exclusion. « Proscription » envisagée, exclusion plus proche d'éviction.

**Solution : l'ostracisme** — texte vu : « À Athènes, on gravait un nom sur un tesson pour bannir un citoyen trop influent ; cet éloignement durait dix ans : une exclusion légale. »

- *l'ostracisme* ✓ — Graver un nom sur un tesson (ostrakon) pour bannir un citoyen pendant dix ans, c'est l'ostracisme athénien.

### e-333 : « Affaire de famille » → le népotisme

**Mot 1 : neveux** (trouvé à la brique 1, mise 2) — piste : oncle + Donald

- oncle → *neveux* ✓ — Placer sa famille aux postes clés, c'est le népotisme (de nepos, neveu). « Oncle » est le pendant de neveu, au pluriel (« ses ... »).

**Mot 2 : péché** (trouvé à la brique 1, mise 2) — piste : faute + capital

- faute → *péché* ✓ — « Faute » est un synonyme de péché, et l'expression figée « péché mignon » s'impose. Le thème est le népotisme.

**Mot 3 : pouvoir** (trouvé à la brique 1, mise 2) — piste : puissance + Montesquieu

- puissance → *pouvoir* ✓ — Le thème est le népotisme, « le péché mignon du pouvoir ». Le mot est masculin, à cause de « du ». La brique « puissance » est un synonyme de « pouvoir ».

**Mot 4 : parenté** (trouvé à la brique 1, mise 3) — piste : filiation + cousinage + jardin

- filiation → *parenté* ✓ — Le thème est le népotisme. Il faut un nom féminin, et « filiation » donne « parenté » ; la phrase l'oppose sans doute au « mérite ».

**Mot 5 : mérite** (trouvé à la brique 1, mise 2) — piste : valeur + médaille

- valeur → *mérite* ✓ — Thème : le népotisme. « Le … » au masculin ; « valeur » donne mérite, que la parenté supplante.

**Solution : le népotisme** — texte vu : « Placer ses neveux aux postes clés : voilà le péché mignon du pouvoir ; ici la parenté prime sur le mérite. »

- *le népotisme* ✓ — Placer ses neveux (nepos) aux postes clés, la parenté passant avant le mérite : c'est le népotisme.

### e-334 : « Le tribun » → la démagogie

**Mot 1 : flatter** (trouvé à la brique 1, mise 2) — piste : cajoler + corbeau

- cajoler → *flatter* ✓ — Le tribun qui promet monts et merveilles pratique la démagogie. « Cajoler » a pour synonyme flatter, à l'infinitif (« sait ... »), et l'on dit « flatter la plèbe ».

**Mot 2 : merveilles** (trouvé à la brique 1, mise 2) — piste : prodiges + Alice

- prodiges → *merveilles* ✓ — « Prodiges » est un synonyme de merveilles, et l'expression « promettre monts et merveilles » s'impose. Le thème est la démagogie.

**Mot 3 : discours** (trouvé à la brique 1, mise 2) — piste : harangues + tribune

- harangues → *discours* ✓ — Le thème est le démagogue. Il faut un pluriel suivi d'un adjectif (« ses discours ____ »). La brique « harangues » est un synonyme de « discours ».

**Mot 4 : populistes** (trouvé à la brique 1, mise 3) — piste : élitistes + tribuns + cuisine

- élitistes → *populistes* ✓ — Le thème est la démagogie. Je lis « élitistes » comme un contraire, ce qui donne « populistes », au masculin pluriel comme « discours ».

**Mot 5 : foule** (trouvé à la brique 1, mise 2) — piste : multitude + cohue

- multitude → *foule* ✓ — Thème : la démagogie. « Enflamment la … » au féminin ; « multitude » donne foule.

**Solution : la démagogie** — texte vu : « L'orateur sait flatter la plèbe et promettre monts et merveilles ; ses discours populistes enflamment la foule. »

- *la démagogie* ✓ — Flatter la plèbe, promettre monts et merveilles, tenir des discours populistes : c'est la démagogie. J'ai hésité avec « le démagogue » et retenu la notion.

### e-335 : « Querelle des images » → un iconoclaste

**Mot 1 : empereur** (trouvé à la brique 1, mise 2) — piste : césar + Napoléon

- césar → *empereur* ✓ — La querelle des images à Byzance, c'est l'iconoclasme. « César » évoque l'empereur, masculin à élision (« l'... »), qui fit briser les icônes.

**Mot 2 : icônes** (trouvé à la brique 1, mise 2) — piste : images + orthodoxe

- images → *icônes* ✓ — « Images » est la traduction d'icônes. À Byzance, l'empereur iconoclaste faisait briser les icônes, et le pluriel colle.

**Mot 3 : frondeur** (trouvé à la brique 3, mise 3) — piste : contestataire + Mazarin + limite

- contestataire → *rebelle* ✗ — Le thème est l'iconoclasme, qui est sans doute la solution, donc on cherche un autre adjectif après « l'esprit ». La brique « contestataire » donne « rebelle », « frondeur » ou « subversif », et j'ai retenu « rebelle », le plus courant.
- contestataire + Mazarin → *iconoclaste* ✗ — Le thème est l'iconoclasme byzantin, et il faut un adjectif masculin pour « l'esprit ». « Contestataire » va dans ce sens ; « rebelle » a été refusé. Je lis « Mazarin » comme une incitation, sans en être sûr : le cardinal d'origine italienne donnerait le son « i ».
- contestataire + Mazarin + limite → *frondeur* ✓ — Thème : l'iconoclaste, refusé, comme « rebelle ». « Contestataire » est synonyme de frondeur ; « Mazarin » évoque la Fronde et « limite » évoque frontière : deux incitations sur le son « fron ».

**Mot 4 : bousculer** (trouvé à la brique 1, mise 2) — piste : secouer + habitudes

- secouer → *bousculer* ✓ — La brique « secouer » appelle un synonyme à l'infinitif (« aime ___ les ___ établis »). L'esprit frondeur et iconoclaste aime bousculer les codes établis. Candidat écarté : ébranler.

**Mot 5 : dogmes** (trouvé à la brique 1, mise 2) — piste : principes + Église

- principes → *dogmes* ✓ — Il faut un nom masculin pluriel (« établis ») que la brique « principes » oriente vers son synonyme. Comme il s'agit de bousculer, et avec l'écho iconoclaste, je retiens « dogmes » plutôt que « préceptes ».

**Solution : un iconoclaste** — texte vu : « À Byzance, l'empereur faisait briser les icônes ; aujourd'hui, l'esprit frondeur aime bousculer les dogmes établis. »

- *l'iconoclaste* ✓ — Briser les icônes à Byzance relève de l'iconoclasme. Au sens figuré, l'esprit frondeur qui bouscule les dogmes est un iconoclaste. Le mot convient aux deux sens du texte.

### e-336 : « Moi seul » → le solipsisme

**Mot 1 : esprit** (trouvé à la brique 1, mise 2) — piste : âme + Saint

- âme → *esprit* ✓ — Croire que seul existe son propre esprit, c'est le solipsisme. « Âme » a pour synonymes esprit et moi ; j'ai retenu esprit, plus proche de la brique.

**Mot 2 : projection** (trouvé à la brique 1, mise 3) — piste : reflet + cinéma + amateur

- reflet → *projection* ✓ — « Reflet » évoque projection, illusion ou image. Le féminin « une » et la suite « de sa conscience » conviennent au solipsisme. J'ai écarté « illusion », moins proche de reflet.

**Mot 3 : conscience** (trouvé à la brique 1, mise 2) — piste : lucidité + remords

- lucidité → *conscience* ✓ — Le thème est le solipsisme : le monde n'est qu'une projection de sa conscience. Le mot est féminin, à cause de « sa ». La brique « lucidité » est proche de « conscience ».

**Mot 4 : fantôme** (trouvé à la brique 1, mise 2) — piste : spectre + Opéra

- spectre → *fantôme* ✓ — Le thème est le solipsisme. Il faut un nom masculin après « un », et « spectre » donne « fantôme ».

**Mot 5 : songe** (trouvé à la brique 1, mise 2) — piste : rêve + Shakespeare

- rêve → *songe* ✓ — Thème : le solipsisme. « Un … » au masculin ; « rêve » donne songe, autrui n'étant peut-être qu'un songe.

**Solution : le solipsisme** — texte vu : « Pour lui, seul existe son propre esprit ; le monde n'est qu'une projection de sa conscience ; autrui ? un fantôme, peut-être un songe. »

- *le solipsisme* ✓ — Seul existe son propre esprit, le monde n'est qu'une projection de sa conscience, autrui est peut-être un songe : c'est le solipsisme. Le titre « Moi seul » le confirme.

### e-337 : « Le grand œuvre » → l'alchimie

**Mot 1 : laboratoire** (trouvé à la brique 1, mise 2) — piste : officine + éprouvette

- officine → *laboratoire* ✓ — Le grand œuvre, c'est l'alchimie, avec la pierre philosophale et l'élixir. « Officine » a pour synonyme laboratoire, masculin (« son ... »).

**Mot 2 : initié** (trouvé à la brique 2, mise 2) — piste : adepte + rite

- adepte → *alchimiste* ✗ — « Adepte » est le nom traditionnel de l'alchimiste accompli. L'élision « l' » colle, et la pierre philosophale et l'élixir de longue vie confirment le thème.
- adepte + rite → *initié* ✓ — Le thème est l'alchimie et « alchimiste » a été refusé. Le mot commence par une voyelle, à cause de « l' ». La brique « adepte » est un synonyme d'« initié », et « rite » évoque le rite d'initiation.

**Mot 3 : philosophale** (trouvé à la brique 1, mise 3) — piste : Flamel + Potter + ficelle

- Flamel → *philosophale* ✓ — Le thème est l'alchimie et le grand œuvre, ce qui donne « pierre philosophale ». « Flamel » est l'alchimiste qu'on associe à cette pierre.

**Mot 4 : plomb** (trouvé à la brique 1, mise 2) — piste : étain + saturnisme

- étain → *plomb* ✓ — Thème : l'alchimie. Changer le plomb en or est la formule consacrée ; « étain » est une association (autre métal vil), le mot suivant étant élixir.

**Mot 5 : élixir** (trouvé à la brique 1, mise 2) — piste : potion + jouvence

- potion → *élixir* ✓ — La brique « potion » appelle un synonyme qui commence par une voyelle (« l'___ de longue vie »). L'alchimiste cherchait l'élixir de longue vie.

**Solution : l'alchimie** — texte vu : « Dans son laboratoire, l'initié cherchait la pierre philosophale ; il rêvait de changer le plomb en or et de trouver l'élixir de longue vie. »

- *l'alchimiste* ✗ — Le grand œuvre, la pierre philosophale, la transmutation du plomb en or et l'élixir de longue vie relèvent de l'alchimie. Comme le texte décrit une personne (« l'initié »), je réponds « l'alchimiste ».
- *l'alchimie* ✓ — La pierre philosophale, la transmutation du plomb en or, l'élixir de longue vie et le grand œuvre décrivent l'alchimie. « L'alchimiste » a été refusé, la solution est donc la discipline elle-même.

### e-338 : « Fin des temps » → l'apocalypse

**Mot 1 : cavaliers** (trouvé à la brique 1, mise 2) — piste : écuyers + Zorro

- écuyers → *cavaliers* ✓ — Saint Jean et la fin des temps, c'est l'Apocalypse et ses quatre cavaliers. « Écuyers » est voisin de cavaliers, au pluriel.

**Mot 2 : bête** (trouvé à la brique 1, mise 2) — piste : animal + Belle

- animal → *bête* ✓ — « Animal » est un synonyme de bête. Le féminin colle, et la Bête aux sept têtes de l'Apocalypse est un passage célèbre.

**Mot 3 : jugement** (trouvé à la brique 1, mise 2) — piste : verdict + dernier

- verdict → *jugement* ✓ — Le thème est l'Apocalypse de saint Jean et le Jugement dernier (« final »). La brique « verdict » est un synonyme de « jugement », et le mot est masculin.

**Mot 4 : révélation** (trouvé à la brique 1, mise 3) — piste : découverte + scoop + rébellion

- découverte → *révélation* ✓ — Le thème est l'Apocalypse, mot grec qui signifie « révélation ». La brique « découverte » en est un synonyme.

**Mot 5 : catastrophe** (trouvé à la brique 1, mise 2) — piste : désastre + naturelle

- désastre → *catastrophe* ✓ — Thème : l'apocalypse. « Toute … » au féminin ; « désastre » donne catastrophe, sens figuré d'apocalypse.

**Solution : l'apocalypse** — texte vu : « Saint Jean y décrit quatre cavaliers, une bête aux sept têtes et le jugement final ; son nom signifie révélation ; on l'emploie pour toute catastrophe. »

- *l'Apocalypse* ✓ — Saint Jean, les quatre cavaliers, la bête aux sept têtes et un nom qui signifie « révélation » : c'est l'Apocalypse, qu'on emploie aussi pour toute catastrophe.

### e-339 : « Héraclès au marais » → l'hydre

**Mot 1 : monstre** (trouvé à la brique 1, mise 2) — piste : créature + Godzilla

- créature → *monstre* ✓ — Héraclès au marais de Lerne, c'est l'Hydre. « Créature » a pour synonyme monstre, masculin (« Ce ... »).

**Mot 2 : multiples** (trouvé à la brique 1, mise 2) — piste : nombreuses + choix

- nombreuses → *multiples* ✓ — « Nombreuses » est un synonyme de multiples. Le pluriel féminin colle, et le texte décrit l'hydre de Lerne.

**Mot 3 : décapitation** (trouvé à la brique 1, mise 3) — piste : décollation + guillotine + dizaine

- décollation → *décapitation* ✓ — Le thème est l'Hydre de Lerne, dont les têtes repoussaient quand on les coupait. Il faut un nom féminin après « chaque ». La brique « décollation » est un synonyme de « décapitation ».

**Mot 4 : cautériser** (trouvé à la brique 1, mise 3) — piste : brûler + fer rouge + falaise

- brûler → *cautériser* ✓ — Le monstre est l'hydre de Lerne. Il faut un infinitif après « dut », et « brûler » donne « cautériser », que le mythe décrit : Iolaos brûle les cous coupés.

**Mot 5 : bout** (trouvé à la brique 1, mise 2) — piste : extrémité + chandelle

- extrémité → *bout* ✓ — Thème : l'hydre de Lerne. « En venir à … » appelle « bout » ; « extrémité » est synonyme de bout.

**Solution : l'hydre** — texte vu : « Ce monstre aux têtes multiples renaissait à chaque décapitation ; Héraclès dut cautériser les plaies pour en venir à bout. »

- *l'hydre de Lerne* ✗ — Ce monstre aux têtes multiples qui repoussent, vaincu par Héraclès dans un marais en cautérisant les plaies, est l'hydre de Lerne.
- *l'hydre* ✓ — C'est clairement le monstre aux têtes qui repoussent, vaincu par Héraclès dans le marais. « L'hydre de Lerne » a été refusée, je propose donc la forme courte « l'hydre ».

### e-340 : « Ailes de cire » → l'orgueil

**Mot 1 : ambition** (trouvé à la brique 1, mise 2) — piste : aspiration + Rastignac

- aspiration → *ambition* ✓ — Icare incarne l'hubris. « Aspiration » a pour synonyme ambition, qui commence par une voyelle (« ivre d'... »).

**Mot 2 : soleil** (trouvé à la brique 1, mise 2) — piste : astre + Louis XIV

- astre → *soleil* ✓ — « Astre » désigne le soleil, et le masculin « du » colle. Icare s'approcha trop du soleil, et le thème est l'hubris.

**Mot 3 : présomption** (trouvé à la brique 1, mise 2) — piste : arrogance + Élysée

- arrogance → *présomption* ✓ — Le thème est l'hubris d'Icare, et il faut un nom féminin après « sa ». La brique « arrogance » donne « présomption », « démesure » ou « superbe ». J'ai retenu « présomption », le plus proche d'« arrogance », et je garde « démesure » pour un autre mot.

**Mot 4 : démesure** (trouvé à la brique 1, mise 2) — piste : excès + diable

- excès → *démesure* ✓ — Le thème est l'hubris d'Icare. Il faut un nom féminin, et « excès » donne « démesure » ; la suite est sans doute « l'orgueil ».

**Mot 5 : vanité** (trouvé à la brique 1, mise 3) — piste : fatuité + paon + chocolat

- fatuité → *vanité* ✓ — Thème : l'hybris. Féminin après « la » ; « fatuité » donne vanité. « Prétention » ou « suffisance » envisagées ; « présomption » est déjà dans le texte.

**Solution : l'orgueil** — texte vu : « Icare, ivre d'ambition, s'approcha trop du soleil ; sa présomption le perdit : la chute punit toujours la démesure et la vanité. »

- *l'hubris* ✓ — Icare, perdu par sa présomption et sa démesure, est puni de sa chute : c'est l'hubris grecque. Candidat écarté : l'orgueil, moins précis.

### e-341 : « Coup de dés » → le hasard

**Mot 1 : destin** (trouvé à la brique 1, mise 2) — piste : sort + Parques

- sort → *destin* ✓ — Les dés et la chance renvoient au hasard, qui est sans doute la solution. « Sort » a pour synonyme destin, opposable au calcul (« Ni ... ni calcul »).

**Mot 2 : chance** (trouvé à la brique 1, mise 2) — piste : veine + trèfle

- veine → *chance* ✓ — « Veine » est un synonyme familier de chance. Le féminin « la » colle, alors que « hasard » est masculin.

**Mot 3 : fortune** (trouvé à la brique 1, mise 2) — piste : aubaine + roue

- aubaine → *fortune* ✓ — Le thème est le hasard. « La fortune sourit aux audacieux » est un proverbe connu. La brique « aubaine » est proche de « fortune », au sens de chance, et le mot est féminin.

**Mot 4 : étoile** (trouvé à la brique 1, mise 2) — piste : astre + berger

- astre → *étoile* ✓ — Le thème est le hasard. « Bonne [mot] » appelle l'expression « bonne étoile », et « astre » donne « étoile ».

**Mot 5 : poisse** (trouvé à la brique 2, mise 2) — piste : malchance + sardine

- malchance → *déveine* ✗ — Thème : le hasard. Féminin après « la » ; « malchance » donne déveine, opposée à la bonne étoile. « Guigne » et « poisse » étaient d'autres candidats.
- malchance + sardine → *poisse* ✓ — « Malchance » est un synonyme, et « sardine » une incitation : elle évoque « poisson », d'où le son « pois ». « Déveine » a été refusé. « Poisse » est féminin et s'accorde avec « redoute la ___ ».

**Solution : le hasard** — texte vu : « Ni destin ni calcul : seule la chance décide ; la fortune sourit aux audacieux ; le joueur invoque sa bonne étoile et redoute la poisse. »

- *le hasard* ✓ — Ni destin ni calcul, la chance, la fortune, la bonne étoile et la poisse : tout cela décrit le hasard, que le titre « Coup de dés » confirme.

### e-342 : « Seul au désert » → un ermite

**Mot 1 : grotte** (trouvé à la brique 1, mise 2) — piste : caverne + Lascaux

- caverne → *grotte* ✓ — Il s'agit de l'ermite au désert. « Caverne » a pour synonyme grotte, au féminin (« sa ... »).

**Mot 2 : racines** (trouvé à la brique 1, mise 2) — piste : tubercules + arbre

- tubercules → *racines* ✓ — « Tubercules » est associé aux racines. L'ermite vit « de racines et de prière », et le pluriel colle.

**Mot 3 : sérénité** (trouvé à la brique 2, mise 2) — piste : tranquillité + aubade

- tranquillité → *quiétude* ✗ — Le thème est l'ermite. Il faut un nom féminin après « sa ». La brique « tranquillité » donne « quiétude », « paix » ou « sérénité », et j'ai retenu « quiétude », le synonyme le plus proche.
- tranquillité + aubade → *sérénité* ✓ — Le thème est l'ermite. « Tranquillité » donne un nom féminin, et « quiétude » a été refusé. Je lis « aubade » comme une incitation : elle évoque « sérénade », qui donne le son « séré » de « sérénité ».

**Mot 4 : cri** (trouvé à la brique 1, mise 2) — piste : hurlement + Munch

- hurlement → *cri* ✓ — Thème : l'ermite. « Le … des ____ » au masculin, le mot suivant étant sans doute « chacals » ou « loups » ; « hurlement » donne cri.

**Mot 5 : corbeaux** (trouvé à la brique 1, mise 2) — piste : corneilles + fromage

- corneilles → *corbeaux* ✓ — La brique « corneilles » appelle une association, au pluriel (« des ___ »). Pour l'ermite du désert, le corbeau est l'oiseau traditionnel (celui qui nourrissait saint Paul ermite).

**Solution : un ermite** — texte vu : « Retiré dans sa grotte, il vit de racines et de prière ; sa sérénité n'est troublée que par le cri des corbeaux. »

- *l'ermite* ✓ — Un homme retiré dans une grotte au désert, qui vit de racines et de prière : c'est l'ermite. J'ai préféré ce terme à « l'anachorète », plus rare.

### e-343 : « Oasis trompeuse » → le mirage

**Mot 1 : trembler** (trouvé à la brique 1, mise 2) — piste : vibrer + feuille

- vibrer → *trembler* ✓ — L'oasis trompeuse, c'est le mirage. « Vibrer » a pour synonyme trembler, à l'infinitif ; on dit que l'air tremble sous la chaleur.

**Mot 2 : nappe** (trouvé à la brique 1, mise 2) — piste : étendue + phréatique

- étendue → *nappe* ✓ — « Étendue » est un synonyme de nappe, et « une nappe d'eau » est l'expression type du mirage.

**Mot 3 : miroiter** (trouvé à la brique 1, mise 2) — piste : scintiller + alouettes

- scintiller → *miroiter* ✓ — Le thème est le mirage, et il faut un infinitif après « semble ». La brique « scintiller » est un synonyme de « miroiter », qui convient à une nappe d'eau.

**Mot 4 : illusion** (trouvé à la brique 1, mise 2) — piste : chimère + prestidigitateur

- chimère → *illusion* ✓ — Le thème est le mirage. Il faut un nom féminin après « cette », et « chimère » donne « illusion » ; la suite est sans doute un adjectif comme « d'optique » ou « trompeuse ».

**Mot 5 : optique** (trouvé à la brique 1, mise 3) — piste : visuelle + lunettes + Garnier

- visuelle → *optique* ✓ — Thème : le mirage. « Illusion … » au féminin ; « visuelle » donne optique, collocation « illusion d'optique / optique ».

**Solution : le mirage** — texte vu : « Sous la chaleur, l'air se met à trembler ; une nappe d'eau semble miroiter au loin ; le voyageur court vers cette illusion optique. »

- *le mirage* ✓ — L'air qui tremble sous la chaleur, la nappe d'eau qui semble miroiter et l'illusion optique dans le désert : c'est le mirage.

### e-344 : « Rive des Enfers » → l'oubli

**Mot 1 : fleuve** (trouvé à la brique 1, mise 2) — piste : rivière + Amazone

- rivière → *fleuve* ✓ — La rive des Enfers où l'on boit l'oubli, c'est le Léthé. « Rivière » mène à fleuve, masculin (« au ... »).

**Mot 2 : mémoire** (trouvé à la brique 1, mise 2) — piste : rétention + éléphant

- rétention → *mémoire* ✓ — « Rétention » est associée à la mémoire. Le Léthé effaçait la mémoire, et le féminin colle.

**Mot 3 : âme** (trouvé à la brique 1, mise 2) — piste : esprit + sœur

- esprit → *âme* ✓ — Le thème est le Léthé et l'oubli. Le mot commence par une voyelle, à cause de « l' ». La brique « esprit » est un synonyme d'« âme », et « l'âme y perdait ses souvenirs » s'insère bien.

**Mot 4 : souvenirs** (trouvé à la brique 1, mise 2) — piste : réminiscences + album

- réminiscences → *souvenirs* ✓ — Le fleuve est le Léthé, celui de l'oubli. Il faut un pluriel après « ses », et « réminiscences » donne « souvenirs ».

**Mot 5 : cicatriser** (trouvé à la brique 1, mise 3) — piste : refermer + plaie + fourmi

- refermer → *cicatriser* ✓ — Thème : le Léthé, fleuve de l'oubli. Infinitif après « finit par » ; « refermer » des blessures donne cicatriser. « Panser » ou « guérir » envisagés, cicatriser est plus proche de refermer.

**Solution : l'oubli** — texte vu : « Boire au fleuve des Enfers effaçait la mémoire ; l'âme y perdait ses souvenirs ; on dit que le temps finit par cicatriser toutes les blessures. »

- *l'oubli* ✓ — Le Léthé, fleuve des Enfers qui efface la mémoire, et le temps qui cicatrise les blessures convergent vers l'oubli. J'ai écarté « le Léthé », car la dernière phrase vise la notion générale.

### e-345 : « Énigme de Thèbes » → le sphinx

**Mot 1 : lion** (trouvé à la brique 1, mise 2) — piste : tigre + crinière

- tigre → *lion* ✓ — L'énigme de Thèbes, c'est le Sphinx, lion à tête de femme. « Tigre » est un autre félin, d'où lion, masculin.

**Mot 2 : devinette** (trouvé à la brique 2, mise 2) — piste : charade + rébus

- charade → *énigme* ✗ — « Charade » est proche d'énigme. Le Sphinx posait une énigme aux voyageurs, et le féminin colle.
- charade + rébus → *devinette* ✓ — Le thème est le Sphinx et « énigme » a été refusé. Il faut un nom féminin. Les briques « charade » et « rébus » sont des jeux de la même famille que la devinette.

**Mot 3 : dévoré** (trouvé à la brique 1, mise 2) — piste : englouti + ogre

- englouti → *dévoré* ✓ — Le monstre est le Sphinx de Thèbes. Il faut un participe au masculin singulier, et « englouti » donne « dévoré », le sort des voyageurs dans le mythe.

**Mot 4 : clé** (trouvé à la brique 2, mise 2) — piste : réponse + serrure

- réponse → *solution* ✗ — Thème : le Sphinx, Œdipe fils de Laïos. « La … » au féminin ; « réponse » donne solution de la devinette ; le mot suivant est sans doute « ravin » ou « gouffre ».
- réponse + serrure → *clé* ✓ — « Réponse » est un synonyme, et « serrure » une association : la clé de l'énigme. « Solution » a été refusé. « Clé » est féminin et s'accorde avec « en trouva la ___ ».

**Mot 5 : précipice** (trouvé à la brique 2, mise 3) — piste : abîme + vertige + exact

- abîme → *gouffre* ✗ — Il faut un nom masculin après « un », que la brique « abîme » oriente vers son synonyme. Le Sphinx vaincu par Œdipe se jette dans le vide : « gouffre » plutôt que « précipice ».
- abîme + vertige → *précipice* ✓ — Il s'agit du Sphinx de Thèbes, vaincu par Œdipe, qui se jeta dans le vide. Les briques abîme et vertige désignent un gouffre, mot déjà refusé. Il faut un nom masculin après « un » : je retiens précipice.

**Solution : le sphinx** — texte vu : « Ce lion à tête de femme posait une devinette aux voyageurs ; quiconque échouait était dévoré ; le fils de Laïos en trouva la clé, et le monstre se jeta dans un précipice. »

- *le Sphinx* ✓ — Thèbes, un lion à tête de femme, une devinette posée aux voyageurs qui sont dévorés s'ils échouent, puis le fils de Laïos (Œdipe) qui trouve la réponse : c'est le Sphinx (ou la Sphinge). Le monstre s'est ensuite jeté dans le vide. Je donne la forme la plus courante, « le Sphinx ».

### e-346 : « Ce qui était écrit » → la fatalité

**Mot 1 : dieux** (trouvé à la brique 1, mise 2) — piste : hommes + Olympe

- hommes → *dieux* ✓ — Ce qui était écrit renvoie à la fatalité ou au destin. « Hommes » est l'opposé de dieux, et « les dieux jouent des mortels » colle au texte.

**Mot 2 : destin** (trouvé à la brique 1, mise 2) — piste : sort + Parques

- sort → *destin* ✓ — « Sort » est un synonyme de destin. « Nul n'échappe à son destin » convient au masculin « son », et le thème est la fatalité.

**Mot 3 : prédit** (trouvé à la brique 1, mise 2) — piste : annoncé + Nostradamus

- annoncé → *prédit* ✓ — Le thème est la fatalité, avec un participe passé après « l'avait ». La brique « annoncé » est un synonyme de « prédit », le verbe propre à un oracle.

**Mot 4 : malédiction** (trouvé à la brique 1, mise 3) — piste : imprécation + Toutankhamon + valise

- imprécation → *malédiction* ✓ — Le thème est la fatalité tragique. Il faut un nom féminin qui « s'acharne », et « imprécation » donne « malédiction ».

**Mot 5 : tragique** (trouvé à la brique 1, mise 2) — piste : comique + Sophocle

- comique → *tragique* ✓ — Thème : la fatalité. « Comique » est le contraire : le héros tragique n'y peut rien.

**Solution : la fatalité** — texte vu : « Les dieux jouent des mortels ; nul n'échappe à son destin ; l'oracle l'avait prédit ; la malédiction s'acharne, et le héros tragique n'y peut rien. »

- *la fatalité* ✓ — Nul n'échappe à son destin, l'oracle l'avait prédit, la malédiction et le héros tragique impuissant : c'est la fatalité. Le titre « Ce qui était écrit » renvoie à « mektoub ».

### e-347 : « Antichambre du paradis » → le purgatoire

**Mot 1 : sauvée** (trouvé à la brique 1, mise 2) — piste : rachetée + gong

- rachetée → *sauvée* ✓ — L'antichambre du paradis, c'est le purgatoire. « Rachetée » a pour synonyme sauvée, au féminin, qui s'oppose à « damnée ».

**Mot 2 : expier** (trouvé à la brique 1, mise 3) — piste : payer + pénitence + spécialiste

- payer → *expier* ✓ — « Payer » est proche d'expier, et un infinitif est attendu. Au purgatoire, l'âme vient expier ses fautes.

**Mot 3 : montagne** (trouvé à la brique 1, mise 2) — piste : massif + Everest

- massif → *montagne* ✓ — Le thème est le purgatoire : chez Dante, c'est une montagne que l'on gravit. Le mot est féminin, à cause de « la ». La brique « massif » est un synonyme de « montagne ».

**Mot 4 : vivants** (trouvé à la brique 1, mise 2) — piste : défunts + Saisons

- défunts → *vivants* ✓ — Le lieu est le purgatoire. Je lis « défunts » comme un contraire, ce qui donne « vivants » : dans la doctrine, ce sont les prières des vivants qui abrègent le séjour des âmes.

**Mot 5 : attente** (trouvé à la brique 1, mise 2) — piste : expectative + salle

- expectative → *attente* ✓ — Thème : le purgatoire. « Séjour d' » demande une voyelle ; « expectative » donne attente.

**Solution : le purgatoire** — texte vu : « Ni sauvée ni damnée, l'âme vient y expier ses fautes ; Dante en gravit la montagne ; les prières des vivants abrègent ce séjour d'attente. »

- *le purgatoire* ✓ — L'âme ni sauvée ni damnée qui expie ses fautes, la montagne de Dante et les prières qui abrègent l'attente : c'est le purgatoire.

### e-348 : « Le bègue d'Athènes » → l'éloquence

**Mot 1 : cailloux** (trouvé à la brique 1, mise 2) — piste : galets + Poucet

- galets → *cailloux* ✓ — Démosthène s'exerçait avec des cailloux dans la bouche, et la solution est l'éloquence. « Galets » a pour synonyme cailloux, au pluriel.

**Mot 2 : entraînement** (trouvé à la brique 2, mise 2) — piste : répétition + coach

- répétition → *exercice* ✗ — « Répétition » évoque l'exercice ou l'entraînement, et l'élision « d' » impose une voyelle. Démosthène devint l'orateur le plus éloquent « à force d'exercice ». J'ai écarté « entraînement », moins classique.
- répétition + coach → *entraînement* ✓ — « Exercice » a été refusé. Le mot commence par une voyelle, à cause de « d' ». La brique « répétition » est un synonyme, et « coach » évoque l'entraîneur, d'où « entraînement ».

**Mot 3 : orateur** (trouvé à la brique 1, mise 2) — piste : tribun + Cicéron

- tribun → *orateur* ✓ — Démosthène est le modèle de l'orateur. Il faut un nom masculin à initiale vocalique, et « tribun » donne « orateur » ; la suite est sans doute « éloquent » puis « éloquence ».

**Mot 4 : persuasif** (trouvé à la brique 1, mise 3) — piste : convaincant + argument + Iran

- convaincant → *persuasif* ✓ — Thème : l'éloquence de Démosthène. Adjectif masculin après « le plus » ; « convaincant » donne persuasif ; le mot masqué suivant est sans doute éloquence.

**Mot 5 : verve** (trouvé à la brique 2, mise 3) — piste : faconde + intarissable + lombric

- faconde → *éloquence* ✗ — La brique « faconde » appelle un synonyme féminin (« sa ___ »). Démosthène, devenu le plus persuasif des orateurs, est le modèle de l'éloquence. Candidats écartés : verve et rhétorique.
- faconde + intarissable → *verve* ✓ — Il faut un nom féminin (« sa ») ; « faconde » et « intarissable » font penser à l'expression « verve intarissable ». « Éloquence » ayant été refusée, je retiens « verve ».

**Solution : l'éloquence** — texte vu : « Démosthène mettait des cailloux dans sa bouche ; à force d'entraînement, il devint l'orateur le plus persuasif ; sa verve subjuguait l'assemblée. »

- *l'éloquence* ✓ — Démosthène s'est exercé avec des cailloux dans la bouche pour vaincre son bégaiement et devenir un grand orateur. Le texte parle de persuasion et de verve. J'ai envisagé « l'orateur », mais ce mot figure déjà dans le texte, donc je retiens l'éloquence.

### e-349 : « Pensée brève » → l'aphorisme

**Mot 1 : sentence** (trouvé à la brique 1, mise 3) — piste : adage + juge + chemin

- adage → *sentence* ✓ — La pensée brève, c'est l'aphorisme ; maxime est exclu ici, car c'est le 3e mot (La Rochefoucauld). « Adage » a pour synonyme sentence, au féminin (« Une ... courte »).

**Mot 2 : vérité** (trouvé à la brique 1, mise 2) — piste : mensonge + puits

- mensonge → *vérité* ✓ — « Mensonge » est le contraire de vérité. Une sentence brève condense une vérité (l'aphorisme), et le féminin colle.

**Mot 3 : maximes** (trouvé à la brique 1, mise 2) — piste : préceptes + proverbes

- préceptes → *maximes* ✓ — Le thème est l'aphorisme, et La Rochefoucauld a écrit les « Maximes ». Il faut un pluriel. La brique « préceptes » est un synonyme de « maximes ».

**Mot 4 : esprit** (trouvé à la brique 1, mise 2) — piste : humour + saillie

- humour → *esprit* ✓ — Le thème est l'aphorisme. Il faut un nom masculin à initiale vocalique après « de l' », et « humour » donne « esprit », qualité qu'on prête à Chamfort.

**Mot 5 : désespoir** (trouvé à la brique 1, mise 2) — piste : détresse + abîme

- détresse → *désespoir* ✓ — Thème : l'aphorisme. « Du … » au masculin ; « détresse » donne désespoir, marque de Cioran.

**Solution : l'aphorisme** — texte vu : « Une sentence courte et frappante, qui condense une vérité : La Rochefoucauld en fit des maximes ; Chamfort y mettait de l'esprit et Cioran du désespoir. »

- *l'aphorisme* ✓ — Une sentence courte et frappante qui condense une vérité, chez La Rochefoucauld, Chamfort et Cioran : c'est l'aphorisme. Candidat écarté : la maxime, déjà citée dans le texte.

### e-350 : « Loin du pays » → l'exil

**Mot 1 : patrie** (trouvé à la brique 1, mise 2) — piste : nation + Marseillaise

- nation → *patrie* ✓ — Hugo à Guernesey, c'est l'exil. « Nation » a pour synonyme patrie, au féminin (« sa ... »).

**Mot 2 : manque** (trouvé à la brique 1, mise 2) — piste : absence + sevrage

- absence → *manque* ✓ — « Absence » est proche de manque. Le masculin « le » colle, et « le manque de la terre natale » décrit l'exil de Hugo. J'ai écarté « regret » et « mal du pays », moins proches de la brique.

**Mot 3 : poèmes** (trouvé à la brique 1, mise 2) — piste : vers + recueil

- vers → *poèmes* ✓ — Le thème est l'exil de Hugo et la nostalgie. Il faut un pluriel après « ses ». La brique « vers » renvoie aux poèmes, comme « Les Châtiments » qui grondaient contre l'empereur.

**Mot 4 : usurpateur** (trouvé à la brique 1, mise 3) — piste : imposteur + trône + érosion

- imposteur → *usurpateur* ✓ — Le thème est l'exil de Hugo. Il faut un nom masculin à initiale vocalique, et « imposteur » donne « usurpateur », visant Napoléon III, que Hugo combattait dans ses poèmes.

**Mot 5 : mer** (trouvé à la brique 1, mise 2) — piste : océan + Méditerranée

- océan → *mer* ✓ — Thème : l'exil de Hugo à Guernesey. Féminin après « la » ; « océan » donne mer, qui consolait le poète.

**Solution : l'exil** — texte vu : « Chassé de sa patrie, Hugo vécut dix-neuf ans à Guernesey ; le manque de la terre natale le rongeait ; ses poèmes grondaient contre l'usurpateur ; seule la mer le consolait. »

- *l'exil* ✓ — Chassé de sa patrie, Hugo passe dix-neuf ans à Guernesey avec le manque de la terre natale : c'est l'exil. Candidat écarté : le mal du pays, qui n'est qu'une partie du thème.
