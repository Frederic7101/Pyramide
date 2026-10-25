# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 3.80 | 70 | 22 | 0 | 58 | 19/30 | 0.10 | 120/120 |
| Sonnet | 7.10 | 111 | 30 | 3 | 6 | 29/30 | 1.33 | 120/120 |
| Opus | 7.53 | 126 | 23 | 1 | 0 | 30/30 | 1.53 | 120/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 3.00 | 20 | 4 | 0 | 26 | 6/10 | 0.00 | 40/40 |
| Sonnet | 6.90 | 40 | 7 | 1 | 2 | 10/10 | 1.10 | 40/40 |
| Opus | 7.30 | 43 | 7 | 0 | 0 | 10/10 | 1.30 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 4.00 | 24 | 10 | 0 | 16 | 6/10 | 0.00 | 40/40 |
| Sonnet | 7.50 | 41 | 7 | 0 | 2 | 10/10 | 1.70 | 40/40 |
| Opus | 7.80 | 44 | 5 | 1 | 0 | 10/10 | 1.80 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 4.40 | 26 | 8 | 0 | 16 | 7/10 | 0.30 | 40/40 |
| Sonnet | 6.90 | 30 | 16 | 2 | 2 | 9/10 | 1.20 | 40/40 |
| Opus | 7.50 | 39 | 11 | 0 | 0 | 10/10 | 1.50 | 40/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Haiku | Sonnet | Opus |
|---|---|---|---|---|
| e-003 | facile | 3 | 7 | 7 |
| e-006 | facile | 3 | 4 | 8 |
| e-007 | facile | 2 | 7 | 7 |
| e-008 | facile | 1 | 8 | 8 |
| e-009 | facile | 4 | 7 | 7 |
| e-204 | moyen | 5 | 7 | 7 |
| e-304 | difficile | 5 | 6 | 6 |
| e-305 | difficile | 2 | 5 | 6 |
| e-308 | difficile | 4 | 8 | 8 |
| e-325 | difficile | 5 | 5 | 7 |
| e-326 | difficile | 5 | 8 | 8 |
| e-329 | difficile | 4 | 9 | 9 |
| e-331 | difficile | 5 | 7 | 7 |
| e-335 | difficile | 5 | 5 | 8 |
| e-339 | difficile | 1 | 7 | 7 |
| e-341 | difficile | 8 | 9 | 9 |
| e-403 | facile | 3 | 8 | 8 |
| e-430 | facile | 5 | 6 | 6 |
| e-435 | facile | 1 | 8 | 8 |
| e-437 | facile | 2 | 8 | 8 |
| e-503 | moyen | 4 | 7 | 7 |
| e-506 | moyen | 3 | 7 | 7 |
| e-509 | moyen | 4 | 9 | 9 |
| e-515 | moyen | 4 | 8 | 8 |
| e-520 | moyen | 5 | 9 | 9 |
| e-530 | moyen | 5 | 6 | 6 |
| e-533 | moyen | 4 | 4 | 7 |
| e-536 | moyen | 3 | 9 | 9 |
| e-541 | moyen | 3 | 9 | 9 |
