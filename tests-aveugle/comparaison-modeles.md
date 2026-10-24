# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus 5.5 | 12.00 | 119 | 27 | 0 | 4 | 29/30 | 6.17 | 120/120 |
| Sonnet 5.5 | 8.90 | 90 | 43 | 0 | 17 | 29/30 | 3.50 | 120/120 |
| Haiku 5.5 | 3.30 | 48 | 23 | 1 | 78 | 14/30 | 0.43 | 119/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus 5.5 | 12.30 | 41 | 8 | 0 | 1 | 10/10 | 6.40 | 40/40 |
| Sonnet 5.5 | 8.60 | 28 | 17 | 0 | 5 | 10/10 | 3.10 | 40/40 |
| Haiku 5.5 | 3.80 | 17 | 8 | 1 | 24 | 6/10 | 0.60 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus 5.5 | 12.60 | 43 | 6 | 0 | 1 | 10/10 | 6.70 | 40/40 |
| Sonnet 5.5 | 9.30 | 34 | 11 | 0 | 5 | 10/10 | 3.80 | 40/40 |
| Haiku 5.5 | 3.70 | 16 | 8 | 0 | 26 | 6/10 | 0.70 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus 5.5 | 11.10 | 35 | 13 | 0 | 2 | 9/10 | 5.40 | 40/40 |
| Sonnet 5.5 | 8.80 | 28 | 15 | 0 | 7 | 9/10 | 3.60 | 40/40 |
| Haiku 5.5 | 2.40 | 15 | 7 | 0 | 28 | 2/10 | 0.00 | 39/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Opus 5.5 | Sonnet 5.5 | Haiku 5.5 |
|---|---|---|---|---|
| e-003 | facile | 13 | 5 | 4 |
| e-006 | facile | 14 | 5 | 2 |
| e-007 | facile | 14 | 5 | 2 |
| e-008 | facile | 5 | 12 | 1 |
| e-009 | facile | 14 | 5 | 4 |
| e-204 | moyen | 14 | 13 | 3 |
| e-304 | difficile | 11 | 5 | 1 |
| e-305 | difficile | 4 | 3 | 2 |
| e-308 | difficile | 14 | 5 | 2 |
| e-325 | difficile | 5 | 3 | 4 |
| e-326 | difficile | 13 | 12 | 3 |
| e-329 | difficile | 14 | 13 | 2 |
| e-331 | difficile | 14 | 13 | 4 |
| e-335 | difficile | 12 | 11 | 1 |
| e-339 | difficile | 12 | 11 | 1 |
| e-341 | difficile | 12 | 12 | 4 |
| e-403 | facile | 12 | 11 | 3 |
| e-428 | facile | 13 | 13 | 4 |
| e-430 | facile | 14 | 14 | 4 |
| e-435 | facile | 11 | 5 | 2 |
| e-437 | facile | 13 | 11 | 12 |
| e-503 | moyen | 13 | 12 | 4 |
| e-506 | moyen | 14 | 5 | 3 |
| e-509 | moyen | 14 | 5 | 3 |
| e-515 | moyen | 14 | 14 | 3 |
| e-520 | moyen | 12 | 11 | 13 |
| e-530 | moyen | 13 | 5 | 1 |
| e-533 | moyen | 5 | 4 | 2 |
| e-536 | moyen | 13 | 12 | 3 |
| e-541 | moyen | 14 | 12 | 2 |
| np-327 | difficile | 4 | 4 | 3 |
