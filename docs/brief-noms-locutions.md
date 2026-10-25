# Noms Propres : plus de groupes de mots dans les briques

Lis `docs/brief-redaction.md` (partie Noms Propres), `docs/brief-noms-incitations.md` et les articles 4.2.2 et 5.3 du règlement (`docs/reglementjeu2027.pdf`, texte résumé ci-dessous).

## La règle
Une brique est UN SEUL MOT. Les groupes de mots et locutions sont interdits (« coup de boule », « terre battue », « Yes we can », « Tomb Raider »…). Les seules exceptions en plusieurs mots :
- le **nom d'une personne ou d'un personnage** : « prénom + nom » (« Clark Kent », « Steve Jobs »), un saint (« Saint François d'Assise »), un rang de lignée (« Louis IX ») ;
- un **nom de lieu** géographique, historique, cosmique ou un monument, tel qu'au dictionnaire (« Le Havre », « Promenade des Anglais », « Ponte Vecchio »).
Sont INTERDITS en plusieurs mots : titres d'œuvres (films, livres, chansons, pièces, tableaux, albums), marques, groupes, clubs, associations, surnoms et pseudonymes (« Big Apple », « Lady Day », « Ville rose »), qualificatifs (« le Bien-Aimé », « la Divine »), titres de personne (Madame, Don, Rabbi, Docteur, Duke, Lady, Mademoiselle, abbé, comte…) accolés à un nom.

Un titre d'œuvre, un groupe ou une marque est autorisé en UN SEUL mot (« Titanic », « Shining »), à condition de ne pas partager 3 lettres consécutives (phonétiquement) avec la réponse. On peut aussi le décomposer en plusieurs briques, mais on n'a que 3 briques par nom : préfère un mot unique évocateur.

## Ta tâche
Dans le fichier assigné, remplace chaque brique qui est un groupe de mots interdit par une brique d'UN SEUL MOT tout aussi évocatrice (un mot du titre, un personnage, un lieu, un objet, un nom propre en un mot). Garde les briques valides (prénom + nom de personne, lieu). Ne change pas les réponses, les variantes, les `partielles`, ni les identifiants. Garde 3 briques par nom, et garde les incitations (elles sont déjà d'un seul mot : vérifie le son si tu modifies l'ordre). N'utilise pas de mot de la réponse ni un autre nom de la même liste.

Pour repérer les briques à traiter : `npx tsx tools/valider-lot.ts <ton fichier>` liste les erreurs (groupes de mots avec minuscules) et les avertissements (noms propres en plusieurs mots, à classer toi-même : personne ou lieu = garder ; œuvre, marque, groupe, surnom, titre, qualificatif = remplacer). Tu dois arriver à « Aucun problème détecté » **sans avertissement restant**, hors personnes et lieux que tu justifies dans ton compte rendu.

## Compte rendu
Fichier ; nombre de briques remplacées ; liste « ancienne brique → nouvelle brique » ; avertissements restants (personnes/lieux conservés) ; les 8 remplacements dont tu es le moins sûr. Ne touche à aucun autre fichier.
