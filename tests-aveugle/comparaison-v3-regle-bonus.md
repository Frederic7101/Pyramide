# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.00 | 84 | 29 | 1 | 36 | 26/30 | 0.33 | 118/120 |
| Sonnet | 6.73 | 92 | 46 | 2 | 10 | 28/30 | 1.13 | 120/120 |
| Opus | 7.53 | 124 | 26 | 0 | 0 | 30/30 | 1.53 | 120/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.10 | 33 | 5 | 0 | 12 | 9/10 | 0.40 | 39/40 |
| Sonnet | 6.30 | 32 | 13 | 0 | 5 | 10/10 | 0.80 | 40/40 |
| Opus | 7.30 | 43 | 7 | 0 | 0 | 10/10 | 1.30 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.20 | 29 | 10 | 0 | 11 | 8/10 | 0.50 | 40/40 |
| Sonnet | 7.20 | 37 | 11 | 0 | 2 | 10/10 | 1.40 | 40/40 |
| Opus | 7.80 | 43 | 7 | 0 | 0 | 10/10 | 1.80 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 4.70 | 22 | 14 | 1 | 13 | 9/10 | 0.10 | 39/40 |
| Sonnet | 6.70 | 23 | 22 | 2 | 3 | 8/10 | 1.20 | 40/40 |
| Opus | 7.50 | 38 | 12 | 0 | 0 | 10/10 | 1.50 | 40/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Haiku | Sonnet | Opus |
|---|---|---|---|---|
| e-006 | facile | 5 | 4 | 8 |
| e-007 | facile | 7 | 5 | 7 |
| e-008 | facile | 4 | 8 | 8 |
| e-009 | facile | 5 | 7 | 7 |
| e-304 | difficile | 5 | 4 | 6 |
| e-305 | difficile | 6 | 5 | 6 |
| e-308 | difficile | 3 | 8 | 8 |
| e-325 | difficile | 5 | 5 | 7 |
| e-326 | difficile | 4 | 5 | 8 |
| e-329 | difficile | 4 | 9 | 9 |
| e-335 | difficile | 5 | 8 | 8 |
| e-339 | difficile | 4 | 7 | 7 |
| e-341 | difficile | 4 | 9 | 9 |
| e-403 | facile | 2 | 8 | 8 |
| e-435 | facile | 2 | 4 | 8 |
| e-437 | facile | 7 | 8 | 8 |
| e-503 | moyen | 5 | 7 | 7 |
| e-509 | moyen | 3 | 5 | 9 |
| e-515 | moyen | 5 | 8 | 8 |
| e-520 | moyen | 3 | 9 | 9 |
| e-530 | moyen | 5 | 6 | 6 |
| e-533 | moyen | 4 | 5 | 7 |
| e-536 | moyen | 8 | 9 | 9 |
| e-541 | moyen | 5 | 9 | 9 |
| np-327 | difficile | 3 | 4 | 4 |
| np-449 | facile | 3 | 4 | 4 |
