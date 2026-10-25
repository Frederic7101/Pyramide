# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.13 | 88 | 26 | 1 | 35 | 22/30 | 0.57 | 119/120 |
| Sonnet | 6.43 | 100 | 29 | 3 | 18 | 29/30 | 1.07 | 120/120 |
| Opus | 7.43 | 122 | 26 | 1 | 1 | 30/30 | 1.47 | 120/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 4.10 | 25 | 6 | 0 | 19 | 9/10 | 0.10 | 40/40 |
| Sonnet | 6.10 | 36 | 7 | 1 | 6 | 10/10 | 0.70 | 40/40 |
| Opus | 7.00 | 43 | 6 | 0 | 1 | 10/10 | 1.10 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.40 | 32 | 9 | 0 | 9 | 6/10 | 0.70 | 40/40 |
| Sonnet | 7.50 | 38 | 10 | 0 | 2 | 10/10 | 1.70 | 40/40 |
| Opus | 7.80 | 42 | 7 | 1 | 0 | 10/10 | 1.80 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.90 | 31 | 11 | 1 | 7 | 7/10 | 0.90 | 39/40 |
| Sonnet | 5.70 | 26 | 12 | 2 | 10 | 9/10 | 0.80 | 40/40 |
| Opus | 7.50 | 37 | 13 | 0 | 0 | 10/10 | 1.50 | 40/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Haiku | Sonnet | Opus |
|---|---|---|---|---|
| e-003 | facile | 3 | 7 | 7 |
| e-006 | facile | 3 | 5 | 8 |
| e-008 | facile | 2 | 8 | 8 |
| e-009 | facile | 5 | 7 | 7 |
| e-204 | moyen | 4 | 7 | 7 |
| e-304 | difficile | 5 | 6 | 6 |
| e-305 | difficile | 4 | 3 | 6 |
| e-308 | difficile | 8 | 5 | 8 |
| e-325 | difficile | 7 | 4 | 7 |
| e-326 | difficile | 7 | 8 | 8 |
| e-329 | difficile | 4 | 9 | 9 |
| e-331 | difficile | 7 | 4 | 7 |
| e-335 | difficile | 5 | 5 | 8 |
| e-339 | difficile | 4 | 4 | 7 |
| e-341 | difficile | 8 | 9 | 9 |
| e-403 | facile | 2 | 2 | 8 |
| e-435 | facile | 3 | 5 | 5 |
| e-437 | facile | 4 | 8 | 8 |
| e-503 | moyen | 4 | 7 | 7 |
| e-509 | moyen | 8 | 9 | 9 |
| e-515 | moyen | 5 | 8 | 8 |
| e-520 | moyen | 5 | 9 | 9 |
| e-530 | moyen | 4 | 6 | 6 |
| e-533 | moyen | 4 | 4 | 7 |
| e-536 | moyen | 8 | 9 | 9 |
| e-541 | moyen | 5 | 9 | 9 |
| np-327 | difficile | 3 | 4 | 4 |
