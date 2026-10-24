# Comparaison de modèles de Syno

Échantillon fixe : 60 contenus (tests-aveugle/echantillon-10-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 6.97 | 84 | 29 | 1 | 36 | 26/30 | 2.30 | 118/120 |
| Sonnet | 10.20 | 92 | 46 | 2 | 10 | 28/30 | 4.60 | 120/120 |
| Opus | 13.13 | 124 | 26 | 0 | 0 | 30/30 | 7.13 | 120/120 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 8.40 | 33 | 5 | 0 | 12 | 9/10 | 3.70 | 39/40 |
| Sonnet | 10.00 | 32 | 13 | 0 | 5 | 10/10 | 4.50 | 40/40 |
| Opus | 13.30 | 43 | 7 | 0 | 0 | 10/10 | 7.30 | 40/40 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 6.80 | 29 | 10 | 0 | 11 | 8/10 | 2.10 | 40/40 |
| Sonnet | 11.20 | 37 | 11 | 0 | 2 | 10/10 | 5.40 | 40/40 |
| Opus | 13.30 | 43 | 7 | 0 | 0 | 10/10 | 7.30 | 40/40 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Haiku | 5.70 | 22 | 14 | 1 | 13 | 9/10 | 1.10 | 39/40 |
| Sonnet | 9.40 | 23 | 22 | 2 | 3 | 8/10 | 3.90 | 40/40 |
| Opus | 12.80 | 38 | 12 | 0 | 0 | 10/10 | 6.80 | 40/40 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Haiku | Sonnet | Opus |
|---|---|---|---|---|
| e-003 | facile | 13 | 12 | 13 |
| e-006 | facile | 5 | 4 | 14 |
| e-007 | facile | 13 | 5 | 14 |
| e-008 | facile | 4 | 12 | 14 |
| e-009 | facile | 5 | 12 | 13 |
| e-204 | moyen | 14 | 13 | 14 |
| e-304 | difficile | 5 | 4 | 12 |
| e-305 | difficile | 11 | 9 | 12 |
| e-308 | difficile | 3 | 12 | 14 |
| e-325 | difficile | 5 | 5 | 11 |
| e-326 | difficile | 4 | 5 | 14 |
| e-329 | difficile | 4 | 12 | 14 |
| e-331 | difficile | 12 | 13 | 13 |
| e-335 | difficile | 5 | 11 | 11 |
| e-339 | difficile | 4 | 11 | 14 |
| e-341 | difficile | 4 | 12 | 13 |
| e-403 | facile | 2 | 11 | 12 |
| e-428 | facile | 13 | 14 | 14 |
| e-435 | facile | 2 | 4 | 12 |
| e-437 | facile | 13 | 12 | 13 |
| e-503 | moyen | 5 | 9 | 12 |
| e-506 | moyen | 13 | 14 | 14 |
| e-509 | moyen | 3 | 5 | 14 |
| e-515 | moyen | 5 | 13 | 14 |
| e-520 | moyen | 3 | 13 | 13 |
| e-530 | moyen | 5 | 14 | 13 |
| e-533 | moyen | 4 | 5 | 12 |
| e-536 | moyen | 11 | 13 | 13 |
| e-541 | moyen | 5 | 13 | 14 |
| np-327 | difficile | 3 | 4 | 4 |
| np-449 | facile | 3 | 4 | 4 |
