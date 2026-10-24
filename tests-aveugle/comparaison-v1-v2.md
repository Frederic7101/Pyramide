# Comparaison de modèles de Syno

Échantillon fixe : 30 contenus (tests-aveugle/echantillon-5-par-niveau.json). Même prompt, même méthode (test à l'aveugle séquentiel).

## Tous niveaux

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus v1 | 12.47 | 58 | 16 | 0 | 1 | 15/15 | 6.53 | 60/60 |
| Opus v2 | 13.20 | 63 | 12 | 0 | 0 | 15/15 | 7.20 | 60/60 |
| Sonnet v1 | 8.73 | 46 | 20 | 0 | 9 | 15/15 | 3.33 | 60/60 |
| Sonnet v2 | 11.60 | 55 | 16 | 2 | 2 | 14/15 | 5.80 | 60/60 |
| Haiku v1 | 3.00 | 21 | 9 | 1 | 44 | 8/15 | 0.40 | 59/60 |
| Haiku v2 | 9.27 | 47 | 17 | 0 | 11 | 12/15 | 4.20 | 60/60 |

## Niveau facile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus v1 | 13.00 | 20 | 5 | 0 | 0 | 5/5 | 7.00 | 20/20 |
| Opus v2 | 13.20 | 21 | 4 | 0 | 0 | 5/5 | 7.20 | 20/20 |
| Sonnet v1 | 8.00 | 15 | 7 | 0 | 3 | 5/5 | 2.60 | 20/20 |
| Sonnet v2 | 11.00 | 18 | 5 | 1 | 1 | 5/5 | 5.20 | 20/20 |
| Haiku v1 | 4.80 | 11 | 3 | 1 | 10 | 3/5 | 1.20 | 20/20 |
| Haiku v2 | 11.00 | 19 | 3 | 0 | 3 | 4/5 | 5.80 | 20/20 |

## Niveau moyen

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus v1 | 13.60 | 23 | 2 | 0 | 0 | 5/5 | 7.60 | 20/20 |
| Opus v2 | 13.80 | 24 | 1 | 0 | 0 | 5/5 | 7.80 | 20/20 |
| Sonnet v1 | 11.20 | 18 | 6 | 0 | 1 | 5/5 | 5.40 | 20/20 |
| Sonnet v2 | 13.20 | 21 | 4 | 0 | 0 | 5/5 | 7.20 | 20/20 |
| Haiku v1 | 2.40 | 6 | 3 | 0 | 16 | 3/5 | 0.00 | 20/20 |
| Haiku v2 | 11.00 | 18 | 6 | 0 | 1 | 4/5 | 5.40 | 20/20 |

## Niveau difficile

| Modèle | Score moyen énigme (max 14) | Mots à la brique 1 | à la brique 2 | à la brique 3 | non trouvés | Solutions trouvées | Bonus moyen | Noms trouvés (max 4/liste) |
|---|---|---|---|---|---|---|---|---|
| Opus v1 | 10.80 | 15 | 9 | 0 | 1 | 5/5 | 5.00 | 20/20 |
| Opus v2 | 12.60 | 18 | 7 | 0 | 0 | 5/5 | 6.60 | 20/20 |
| Sonnet v1 | 7.00 | 13 | 7 | 0 | 5 | 5/5 | 2.00 | 20/20 |
| Sonnet v2 | 10.60 | 16 | 7 | 1 | 1 | 4/5 | 5.00 | 20/20 |
| Haiku v1 | 1.80 | 4 | 3 | 0 | 18 | 2/5 | 0.00 | 19/20 |
| Haiku v2 | 5.80 | 10 | 8 | 0 | 7 | 4/5 | 1.40 | 20/20 |

## Contenus où les modèles diffèrent

| Contenu | Niveau | Opus v1 | Opus v2 | Sonnet v1 | Sonnet v2 | Haiku v1 | Haiku v2 |
|---|---|---|---|---|---|---|---|
| e-003 | facile | 13 | 13 | 5 | 5 | 4 | 13 |
| e-007 | facile | 14 | 14 | 5 | 13 | 2 | 13 |
| e-204 | moyen | 14 | 14 | 13 | 14 | 3 | 12 |
| e-304 | difficile | 11 | 12 | 5 | 11 | 1 | 4 |
| e-308 | difficile | 14 | 14 | 5 | 13 | 2 | 4 |
| e-325 | difficile | 5 | 11 | 3 | 5 | 4 | 5 |
| e-335 | difficile | 12 | 12 | 11 | 12 | 1 | 4 |
| e-339 | difficile | 12 | 14 | 11 | 12 | 1 | 12 |
| e-430 | facile | 14 | 14 | 14 | 14 | 4 | 14 |
| e-435 | facile | 11 | 12 | 5 | 11 | 2 | 3 |
| e-437 | facile | 13 | 13 | 11 | 12 | 12 | 12 |
| e-515 | moyen | 14 | 14 | 14 | 14 | 3 | 14 |
| e-530 | moyen | 13 | 13 | 5 | 12 | 1 | 5 |
| e-536 | moyen | 13 | 14 | 12 | 12 | 3 | 11 |
| e-541 | moyen | 14 | 14 | 12 | 14 | 2 | 13 |
| np-327 | difficile | 4 | 4 | 4 | 4 | 3 | 4 |
