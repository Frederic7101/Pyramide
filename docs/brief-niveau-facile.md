# Réécriture des pistes du niveau FACILE : une incitation systématique

Lis d'abord `docs/brief-redaction.md` en entier (consignes de rédaction, section « Règles ajoutées » comprise).

## Ta tâche
Le fichier qui t'est assigné contient des énigmes de niveau facile déjà publiées. **Réécris les briques de chaque mot** pour que **chaque mot se termine par une incitation**, dans les limites du budget de 13 briques par énigme (somme des mises ≤ 13).

Ne change PAS : les identifiants, les titres, les textes à trous, les solutions et variantes de solution, les mots à deviner (`reponse`), leurs `variantes` et `famille` (tu peux ajouter des variantes). Tu ne modifies que les briques et les mises.

## Structure d'une piste du niveau facile
- **1re brique** : synonyme (de préférence), contraire ou association forte, de même forme grammaticale que le mot. Tu peux garder celle qui existe si elle est bonne.
- **Brique de précision** (facultative) : une association qui précise le sens, seulement si le mot reste ambigu après la 1re brique.
- **Dernière brique : une incitation**, évidente en un seul pas (contraire ou pendant usuel du mot évoqué), à la prononciation exacte, qui amène le début (ou la fin) du mot. Une seule par mot.
- Budget : 5 mots × (relation + incitation) = 10 briques. Les 3 briques restantes servent à ajouter une brique de précision aux mots les plus ambigus. Maximum 13, jamais plus.
- Si, pour un mot, aucune incitation vraiment évidente n'existe, ne force pas : laisse ce mot sans incitation et dis-le dans ton compte rendu (avec la raison). Ce doit être l'exception.

## Rappel des règles qui comptent le plus ici
- Dico ne connaît que le titre et les mots déjà trouvés (voir A) : jamais un mot suivant, la solution ou un de leurs synonymes évidents comme brique, même pour la précision.
- Une brique = un seul mot (voir B). Nombres permis, dates interdites (voir C).
- Les incitations « sonnent » : relis la règle D et la méthode (mot évoqué → son initial → début du mot cherché).
- Pas de brique de la même racine que le mot (utilise `famille`).

## Format
Édite le fichier en place avec les helpers `syn`, `contraire`, `assoc`, `inc`, `precise` de `src/content/briques.ts` (si le fichier est en objets bruts, tu peux le réécrire avec ces helpers en gardant le même export et les mêmes champs). Dans `inc(texte, amene, son, sonEvoque?, position?)`, `son` s'écrit comme dans le mot à deviner, `sonEvoque` comme dans le mot évoqué si l'orthographe diffère.

## Validation
`npx tsx tools/valider-lot.ts <ton fichier>` doit afficher « Aucun problème détecté » (hors avertissement de nom propre en plusieurs mots, à éviter de toute façon). Lance aussi `npx tsc --noEmit`.

## Compte rendu (une quinzaine de lignes)
Fichier modifié ; nombre d'énigmes ; nombre de mots avec incitation sur le total ; les mots laissés sans incitation et pourquoi ; les 5 pistes dont tu es le moins sûr.
