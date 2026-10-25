# Noms Propres : une incitation en 3e brique

Lis d'abord `docs/brief-redaction.md` (partie Noms Propres et sections A à E) et `docs/brief-niveau-facile.md` (méthode des incitations). Les noms propres n'ont presque aucune incitation aujourd'hui (une seule dans tout le contenu) alors que l'incitation est très utile en 3e brique pour départager les candidats.

## Ta tâche
Pour chaque nom (4 par liste, 3 briques chacun) du fichier qui t'est assigné, **remplace la 3e brique par une incitation** chaque fois qu'une incitation vraiment évidente existe. Tu peux aussi retoucher les briques 1 et 2 pour qu'elles réduisent bien les candidats avant l'incitation. Si aucune incitation évidente n'existe pour un nom, laisse-le tel quel et dis-le dans ton compte rendu (c'est l'exception : vise au moins 3 noms sur 4 par liste).

## Qualité d'une incitation de nom propre
- `inc(texte, amene, son, sonEvoque?, position?)` : `texte` évoque en UN pas le mot `amene` (contraire ou pendant usuel : haut/bas, avec/sans, jour/nuit, chat/souris, mère/père, nord/sud, oui/non, roi/reine, neuf/dix), et `amene` partage un son avec le début (ou la fin, `position: "fin"`) du nom attendu. `son` s'écrit comme dans le nom à deviner.
- Seule la prononciation compte : le son doit être EXACT (« ré » ≠ « raie »). Rébus et incitations sont permis dès la 1re brique, répétables, mais l'incitation en 3e brique est la cible.
- Le son se prend sur le nom que le joueur doit dire (le nom de famille pour « Prénom Nom » avec `partielles`, ou le début de la réponse).
- Évidence d'abord : les tests ont montré que Syno ne décode pas un évoqué indirect ou peu courant (camembert → brie, facture → addition, sur → sous, chèvre → bouc). Préfère un contraire ou pendant usuel, ou un mot immédiatement associé.
- N'utilise jamais comme brique un autre nom de la même liste, ni un mot de même racine que le nom (famille de racine), ni la réponse elle-même.
- Une seule incitation par nom ; les briques 1 et 2 restent des associations d'idées (`assoc`).

## Format
Selon le fichier, une brique est une chaîne (association) ou un objet `inc(...)` (importé de `./briques`). Dans les lots 3 à 6 : `["Bach", ["fugue", "Leipzig", inc("pour", "contre", "con")], {…}]`. Édite en place, ne change pas identifiants, thèmes, noms attendus, `variantes` ni `partielles` (tu peux en ajouter).

## Validation
`npx tsx tools/valider-lot.ts <ton fichier>` doit afficher « Aucun problème détecté » (les avertissements de prononciation « à vérifier » sont à lever en choisissant un son exact) ; puis `npx tsc --noEmit`. Ne modifie aucun autre fichier.

## Compte rendu (une quinzaine de lignes)
Fichier ; listes traitées ; nombre de noms avec incitation sur le total ; noms laissés sans incitation (raison) ; les 8 incitations dont tu es le moins sûr.
