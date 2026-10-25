# Rédaction de contenu pour « Pyramide Solo »

Tu rédiges du contenu pour une version web solo du jeu télévisé français Pyramide (règlement de la Fédération Francophone des Clubs Pyramide). Projet : `C:\Users\frede\OneDrive\Documents\Onedrive\Cursor\pyramide-solo`.

L'utilisateur, un joueur expérimenté, est très exigeant sur la qualité des pistes. Ses consignes ci-dessous sont impératives.

## Le jeu

**Énigme**
- 5 mots à faire deviner, un par un. Chaque mot remplit un trou {1} à {5} d'un texte court qui décrit une **solution**.
- Dico donne des « briques » (indices d'un mot), une à une. Syno propose une réponse après chaque brique.
- 13 briques au total pour l'énigme. Dico mise un nombre de briques par mot, et le **total des mises ne dépasse pas 13**.
- Score :
  - 1 point par mot trouvé ;
  - si les 5 mots sont trouvés (même si la solution ne l’est pas), un bonus égal à 13 moins les briques MISÉES par Dico (pas les briques utilisées) : mises 3-3-2-2-1 = 11 briques pariées, donc 2 points de bonus ;
  - +1 point si Syno trouve la solution.
- **Ce que Syno sait.** Pendant la recherche des mots, il ne connaît QUE :
  - le TITRE ;
  - les briques du mot en cours ;
  - les mots qu'il a déjà trouvés.

  Il ne voit le texte à trous qu'à la fin, pour trouver la solution. Les pistes doivent donc fonctionner sans le texte.

**Liste de Noms Propres**
- Un thème et 4 noms propres (personnes, lieux, œuvres…), 3 briques chacun.
- Toutes les briques sont des associations. Seule la prononciation compte.
- 1 point par nom trouvé. Une réponse incomplète prévue (« Hugo » pour « Victor Hugo ») déclenche « Complétez ».

## Format (TypeScript, comme `src/content/lot3-enigmes.ts` et `src/content/lot3-noms-propres.ts`)

Lis ces deux fichiers comme modèles, ainsi que `src/content/briques.ts` pour les fonctions syn, contraire, assoc, inc et precise. Ne lis aucun autre fichier du projet, sauf ceux indiqués ici.

**Énigmes**
- Fonction `m(rang, reponse, briques, { variantes, famille })`. La mise vaut par défaut le nombre de briques.
- Fonction `e(id, titre, texte, solution, solutionVariantes, mots)`.
- Recopie ces deux fonctions dans ton fichier, en remplaçant `difficulte: "difficile"` par le niveau demandé.

**Noms Propres**
- Fonction `liste(id, theme, [[reponse, briques[], { variantes, partielles }], ...])`. Recopie-la de la même façon.
- `partielles` : le nom de famille seul quand la réponse est « Prénom Nom ».
- `variantes` : graphies sans accent, autres graphies courantes.

**Briques**
- `syn("x")` : synonyme du mot à deviner.
- `contraire("x")` : contraire du mot à deviner.
- `assoc("x", nature?)` : association. `nature` vaut « paire », « genre », « exemple », « marque », « voisin » ou « autre ».
- `inc(texte, amene, son, sonEvoque?, position?)` : incitation.
  - Le mot `texte` évoque le mot `amene`. Celui-ci partage un son avec le mot à deviner.
  - `son` est la graphie de ce son dans le mot à deviner. `sonEvoque` est sa graphie dans `amene`, si elle diffère.
  - `position` vaut « debut » par défaut, ou « fin ».
  - Exemple : `inc("Prévost", "abbé", "ab")` → abeilles.
- `precise(contraire("x"), "raison")` : contraire placé après un synonyme, quand il lève une ambiguïté. Exemple : `subtilité + précise(contraire("épaisseur"), "subtilité amène aussi nuance ; épaisseur ne garde que finesse")` → finesse.

**Mots à deviner**
- `famille` : la famille de racine du mot (mots de même racine). Aucune brique ne doit en faire partie.
- `variantes` : formes acceptées (sans accent, féminin, pluriel irrégulier).

## Règles de rédaction des pistes (impératives)

**La 1re brique**
1. C'est de préférence un **synonyme** du mot. Sinon un contraire, ou une association forte : la paire (cheville pour poignet), le genre (cétacés pour baleines), l'exemple ou la marque en un mot (Panzani pour pâte).
2. Elle a la **même forme grammaticale** que le mot : nom pour nom, adjectif pour adjectif, verbe pour verbe. Si possible, elle a aussi la même terminaison : « retournement » pour revirement, bien meilleur que « volte-face ».
3. Ne mets pas de contraire en 1re brique quand un synonyme existe : il est souvent lu comme un synonyme.
4. Évite une 1re brique polysémique, qui disperse Syno. « Onde » pour eau est mauvais.
5. Préfère la brique la plus précise et le synonyme le plus proche (exclure pour bannir, pas proscrire).

**L'enchaînement**

6. **Principe central : chaque brique COMPLÈTE les précédentes.** La 2e affine la 1re, la 3e affine les deux premières.
   - Jamais deux synonymes ou contraires de même valeur à la suite (« vivant + décédé → mort » est redondant).
   - Seule exception : le contraire qui lève une ambiguïté, déclaré avec `precise`.
7. L'association en 2e ou 3e brique précise le sens, en tenant compte du titre et des mots déjà trouvés.

**L'incitation**

8. Elle vient **toujours en dernière brique**, et une seule par mot.
9. Le mot évoqué partage un **son équivalent** avec le mot à deviner, le plus souvent au début, parfois à la fin. La **prononciation** doit être exacte : « onéreux → cher » [ʃɛʁ] ne convient pas pour ro-cher [ʃe].
10. Elle doit être **évidente en un seul pas**. Idéalement, la brique est le synonyme, le contraire ou le pendant du mot évoqué :
    - supérieur → inférieur, bas → haut, avec → sans ;
    - chat → souris, professeur → élève, Bardot → Brigitte, mère → père.

    Sont mauvaises :
    - une chaîne : aiguilles → tricoter → tricot ;
    - une association indirecte : camembert → brie (lu « Dalí »), facture → addition (lu « la douloureuse »), « Saisons » → Vivaldi (lu « morte-saison »).

**Prudence**

11. Un mot perdu supprime tout le bonus. Dès que le budget de 13 le permet et qu'il reste une ambiguïté ou plusieurs réponses possibles, **ajoute une incitation** en dernière brique, ou une brique de précision. Sur un mot simple et sans ambiguïté, 2 briques suffisent : « spirale + matelas → ressort ».

**Règles du règlement**

12. Pas de brique de la même racine que le mot (« isolé » pour seul est interdit). En cas de doute sur l'étymologie, écarte la brique.
13. Aucune brique ne doit être un des autres mots de l'énigme ni la solution.
14. **Titre.** Il ne contient aucun des 5 mots ni la solution, mais il oriente vers le thème : « Veilleur de nuit » pour le phare. Il doit être évocateur.
15. **Texte.** {1} à {5} y figurent une fois chacun, dans l'ordre, et le texte ne contient pas la solution.
16. **Solution.** C'est un nom avec son article (« le phare »). `solutionVariantes` contient la solution sans article et les variantes défendables : par exemple « le misanthrope » si le texte décrit la personne et que la solution est « la misanthropie ».

**Mots à deviner**

17. Ce sont des noms communs, adjectifs ou verbes du dictionnaire courant. Le pluriel est accepté automatiquement : la forme du nombre importe peu, sauf si elle change la prononciation (cheval / chevaux).

## Niveaux

- **Facile** : mots simples, concrets et très courants ; solution évidente une fois les mots trouvés. Pistes de 2 briques le plus souvent, 3 si une ambiguïté demande une incitation.
- **Moyen** : mots moins courants, quelques notions abstraites ; solution qui demande un peu de réflexion. Pistes de 2 à 3 briques, avec une incitation dès qu'il y a ambiguïté.
- Le niveau se juge surtout sur la difficulté des 5 mots, pas seulement sur la solution.
- **Noms Propres faciles** : noms très connus du grand public français, avec des briques évidentes (Cosette, Gavroche, Guernesey → Victor Hugo).
- **Noms Propres moyens** : noms connus d'une personne cultivée, avec des briques un peu moins directes.
- 3 briques par nom, de la plus évocatrice à la plus décisive. Les 4 noms d'une liste relèvent du thème, et chaque nom ne se confond pas avec un autre du même thème.

## À éviter

Le contenu déjà publié est celui de `src/content/index.ts` : dresse-en la liste (titres, solutions, mots, thèmes et noms) avant d'écrire. `tools/valider-lot.ts` signale aussi les doublons avec lui. Ne reprends ni ses solutions, ni ses thèmes de listes, ni ses noms propres. Varie les thèmes, et évite les doublons de solutions et de noms à l'intérieur de ton propre fichier.

## Validation (obligatoire)

Lance `npx tsx tools/valider-lot.ts <ton fichier>` depuis le dossier pyramide-solo. Corrige jusqu'à obtenir **aucune erreur, aucun conseil, aucun avertissement**.
- Un mot de réponse absent du dictionnaire est une erreur : choisis un autre mot.
- Si l'outil signale une incitation dont le son n'est pas au début du mot, ou qui ne figure pas dans le mot évoqué, corrige `son` et `sonEvoque`.

Puis relis chaque piste avec les règles 1 à 11, en te mettant à la place de Syno, qui ne voit que le titre, les mots déjà trouvés et les briques.

Ne modifie AUCUN autre fichier que le tien : ni `index.ts`, ni les autres lots.

À la fin, réponds en une dizaine de lignes :
- le fichier écrit ;
- le nombre de contenus ;
- le résultat de la validation ;
- les pistes dont tu es le moins sûr.

## Règles ajoutées après les premiers essais (octobre 2026)

**A. Dico découvre les mots un à un, comme Syno.** Pour rédiger les briques du mot n°k, Dico ne connaît que le TITRE et les mots n°1 à n°k−1 (déjà trouvés). Il ne connaît NI les mots suivants, NI la solution de l'énigme, NI le texte à trous. Donc :
- aucune brique du mot k ne peut être un mot suivant de l'énigme (k+1 à 5), ni un mot de la solution, ni un synonyme évident de l'un d'eux (« matou » pour la solution « le chat » est une fuite) ;
- les mots déjà trouvés (1 à k−1) et le titre peuvent en revanche servir ;
- ne rédige jamais une piste en t'appuyant sur le texte de l'énigme : elle doit marcher avec le seul titre.
`tools/valider-lot.ts` signale les mots suivants et la solution, mais pas leurs synonymes : c'est à toi d'y penser.

**B. Une brique est UN SEUL mot** (un mot composé avec trait d'union compte pour un : « papier-toilette », « quatre-vingt-dix-neuf »). Interdit : « petit canard », « bas de laine », « pain au chocolat », « tête de mort », « fer rouge ». Un nom propre à plusieurs mots est déconseillé (préfère « Hugo » à « Victor Hugo »), il n'est toléré que si le nom est connu et sans équivalent en un mot.

**C. Les nombres sont permis** (« un », « neuf », « dix », 10…), comme n'importe quel mot ; seules les dates (années, jours) sont interdites. « neuf » pour inciter vers « dix » est une très bonne incitation.

**D. Incitations évidentes : leçons des tests.** Syno ne décode pas l'incitation quand l'évoqué est indirect ou peu courant. Mal lues : camembert → brie, facture → addition, « Saisons » → Vivaldi, écolier → élève, sur → sous, chèvre → bouc. Préfère le CONTRAIRE ou le PENDANT usuel du mot évoqué (haut/bas, avec/sans, jour/nuit, chat/souris, mère/père, nord/sud, oui/non, neuf/dix, roi/reine), ou un mot de la même famille de sons immédiatement associé. Teste mentalement : « si Syno lit seulement ce mot, pense-t-il tout de suite au mot évoqué ? ».

**E. La brique « contraire » (consigne de Dico).** Dico peut dire le mot « contraire » : c'est une consigne qui demande à Syno de dire le contraire, soit du sens de la 1re brique, soit de la réponse précédente de Syno (quand Syno vient de proposer un mot refusé, c'est le contraire de ce mot). Elle s'écrit `decl("contraire")` (déclinaison) et se place après une brique qui a déjà amené quelque chose, jamais en 1re position. Elle sert à dire « l'inverse de ce que tu penses » sans ajouter un nouveau mot : « faible + contraire → fort » (le contraire de la 1re brique) ; « chaud + froid + contraire → … » est à éviter (redondant). Elle compte comme une brique pour la mise. Syno ordinateur et l'arbitre la connaissent déjà (server/syno.ts, server/arbitre.ts).

**F. Surnoms des noms propres.** Seuls les mots du NOM lui-même sont interdits comme briques. Un surnom accepté comme réponse (« Saint Louis » pour Louis IX) se déclare dans `variantes` ET dans `surnoms` : ses mots restent permis comme briques (« Saint » est permis pour Louis IX, « Louis » ne l'est pas). Un DIMINUTIF du nom ou d'un de ses mots n'est pas un surnom à déclarer : il est interdit (« Cloclo » pour Claude François, « Indy » pour Indiana Jones). Sans `surnoms`, tous les mots des `variantes` sont interdits.
