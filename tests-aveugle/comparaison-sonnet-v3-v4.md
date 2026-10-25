# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Sonnet_ancienne | 6.73 | 92 | 46 | 2 | 10 | 28/30 | 1.13 | 120/120 |
| Sonnet_nouvelle | 6.43 | 100 | 29 | 3 | 18 | 29/30 | 1.07 | 120/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Sonnet_ancienne | 6.30 | 32 | 13 | 0 | 5 | 10/10 | 0.80 | 40/40 |
| Sonnet_nouvelle | 6.10 | 36 | 7 | 1 | 6 | 10/10 | 0.70 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Sonnet_ancienne | 7.20 | 37 | 11 | 0 | 2 | 10/10 | 1.40 | 40/40 |
| Sonnet_nouvelle | 7.50 | 38 | 10 | 0 | 2 | 10/10 | 1.70 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Sonnet_ancienne | 6.70 | 23 | 22 | 2 | 3 | 8/10 | 1.20 | 40/40 |
| Sonnet_nouvelle | 5.70 | 26 | 12 | 2 | 10 | 9/10 | 0.80 | 40/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Sonnet_ancienne | Sonnet_nouvelle |
|---|---|---|---|
| e-006 | facile | 4 | 5 |
| e-007 | facile | 5 | 7 |
| e-304 | difficile | 4 | 6 |
| e-305 | difficile | 5 | 3 |
| e-308 | difficile | 8 | 5 |
| e-325 | difficile | 5 | 4 |
| e-326 | difficile | 5 | 8 |
| e-331 | difficile | 7 | 4 |
| e-335 | difficile | 8 | 5 |
| e-339 | difficile | 7 | 4 |
| e-403 | facile | 8 | 2 |
| e-435 | facile | 4 | 5 |
| e-509 | moyen | 5 | 9 |
| e-533 | moyen | 5 | 4 |
