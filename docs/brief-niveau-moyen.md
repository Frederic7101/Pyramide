# Niveau MOYEN : des incitations là où une piste est ambiguë

Lis d'abord `docs/brief-redaction.md` en entier (section « Règles ajoutées » comprise) et `docs/brief-niveau-facile.md` (méthode des incitations).

## Ta tâche
Le fichier qui t'est assigné contient des énigmes de niveau moyen (seules celles dont `difficulte` est « moyen » ou dont l'identifiant t'est donné). Pour chaque mot à deviner :
1. Place-toi comme Dico/Syno : tu ne connais que le titre, les mots déjà trouvés et les briques du mot en cours. Vois si les briques existantes conduisent à **une seule** réponse.
2. Si **plusieurs réponses plausibles** subsistent (autre synonyme, mot de la même famille, pluriel/forme voisine, hyponyme…), **ajoute une incitation en dernière brique** (évidente en un pas, prononciation exacte, voir brief facile) — et seulement dans ce cas. Si le mot est déjà univoque, ne touche à rien.
3. Tu peux aussi corriger une brique de précision inutile ou trompeuse si elle crée l'ambiguïté, mais sans en retirer plus que nécessaire.
4. Respecte le budget : somme des mises ≤ 13 par énigme (mise = nombre de briques du mot, par défaut). Si le budget est atteint, ne mets l'incitation que sur les mots les plus ambigus ; une brique de précision peu utile peut être remplacée par l'incitation.

Ne change PAS : identifiants, titres, textes à trous, solutions, mots à deviner, `variantes`/`famille` (tu peux en ajouter). Seules les briques et mises changent.

## Rappels
- Une brique = un seul mot (trait d'union permis). Nombres permis, dates interdites.
- Jamais un mot suivant, la solution ou un synonyme évident comme brique.
- 1re brique : synonyme/contraire/association forte, même forme grammaticale que le mot.
- Pas de brique de la même racine que le mot (utilise `famille`).

## Format et validation
Helpers `syn`, `contraire`, `assoc`, `inc`, `precise` de `src/content/briques.ts` ; `inc(texte, amene, son, sonEvoque?, position?)`. Édite en place. `npx tsx tools/valider-lot.ts <ton fichier>` doit afficher « Aucun problème détecté » ; lance aussi `npx tsc --noEmit`. Ne touche à aucun autre fichier.

## Compte rendu (une quinzaine de lignes)
Fichier ; énigmes examinées ; mots où tu as ajouté une incitation (liste id/mot) ; mots laissés tels quels ; les 5 pistes dont tu es le moins sûr.
