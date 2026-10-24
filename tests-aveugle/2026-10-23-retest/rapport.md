# Test à l'aveugle de Syno, joué comme en partie (niveau a-retester)

Syno (sous-agent Claude sans accès aux réponses) joue les mots dans l'ordre, une brique à la fois, en ne voyant, pendant la recherche des mots, que le titre (ou le thème), les briques du mot en cours et ses propositions passées avec leur verdict ; le texte à trous ne lui est montré qu'à la phase de solution. Il explique chaque réponse. Score calculé par le moteur du jeu.

## Énigmes

| Énigme | Niveau | Titre | Mots (brique où trouvé / mise) | Bonus | Solution | Score |
|---|---|---|---|---|---|---|
| e-407 | facile | Ciel en colère | tonnerre (1/2), éclair (1/2), pluie (1/2), lit (2/3), ~~ordinateur~~ | 0 | ✓ | 5 |
| e-412 | facile | Rien ne sert de courir | carapace (1/2), écailles (1/2), ~~cent~~, feuilles (2/2), lièvre (1/2) | 0 | ✓ | 5 |
| e-420 | facile | Prince charmant ? | têtard (1/2), mare (1/2), mouches (2/2), langue (1/2), coasser (2/3) | 6 | ✓ | 12 |
| e-424 | facile | Bonne nuit | taie (3/3), duvet (1/2), tête (1/2), bataille (1/2), rêves (1/2) | 6 | ✓ | 12 |
| e-447 | facile | Faire un vœu | bougies (1/2), gâteau (1/2), chœur (2/3), paquets (2/2), ride (2/2) | 5 | ✓ | 11 |
| e-515 | moyen | Le cheval de fer | foyer (1/2), pelle (1/2), charbon (1/2), wagons (1/2), rails (1/3) | 8 | ✓ | 14 |
| e-527 | moyen | Rouge aux joues | réservé (1/2), emprunté (2/2), ~~appréhension~~, foules (1/2), ~~discrétion~~ | 0 | ✓ | 4 |
| e-528 | moyen | La cassette d'Harpagon | radin (2/2), magot (1/2), lésiner (1/3), rapacité (2/2), sou (1/2) | 6 | ✓ | 12 |
| e-533 | moyen | Salle des pas perdus | prévenu (1/2), greffier (1/3), réquisitoire (2/2), ~~jurés~~, verdict (1/2) | 0 | ✓ | 5 |
| e-535 | moyen | Pour le meilleur et pour le pire | fiançailles (1/2), alliance (1/2), témoins (1/2), trousseau (1/2), noces (1/2) | 8 | ✓ | 14 |

Score moyen : 9.4 sur 10 énigme(s).

Mots trouvés : 33 à la brique 1, 11 à la brique 2, 1 à la brique 3, 5 non trouvés.

## Raisonnement de Syno

### e-407 : « Ciel en colère » → l'orage

**Mot 1 : tonnerre** (trouvé à la brique 1, mise 2) — piste : grondement + barrique

- grondement → *tonnerre* ✓ — Le titre évoque l'orage ; le grondement du ciel, c'est le tonnerre. Écarté : orage, plus large que le grondement lui-même.

**Mot 2 : éclair** (trouvé à la brique 1, mise 2) — piste : foudre + chocolat

- foudre → *éclair* ✓ — Thème de l'orage (après tonnerre). « Foudre » est presque un synonyme d'éclair ; « orage » est écarté parce qu'il ressemble plutôt au mot du titre.

**Mot 3 : pluie** (trouvé à la brique 1, mise 2) — piste : averse + gouttes

- averse → *pluie* ✓ — Thème de l'orage après tonnerre et éclair ; « averse » est un synonyme direct de pluie. Écarté : grêle, moins proche d'averse.

**Mot 4 : lit** (trouvé à la brique 2, mise 3) — piste : couche + matelas + bouquin

- couche → *nuages* ✗ — Le thème est l'orage (tonnerre, éclair, pluie). Une « couche » dans le ciel, c'est la couche nuageuse, d'où les nuages.
- couche + matelas → *lit* ✓ — Le titre et les mots précédents parlent d'orage. « Couche » et « matelas » renvoient tous deux à « lit » (le lit au sens de couche). Nuages est déjà refusé, et j'ai écarté strate et nappe, moins naturels avec « matelas ».

**Mot 5 : ordinateur** (non trouvé, mise 3) — piste : souris + clavier + argent

- souris → *rafale* ✗ — Thème de l'orage (tonnerre, éclair, pluie, nuages). « Souris » n'est pas un phénomène météo : je la lis comme une incitation, souris évoque « rat », qui donne le son « ra » de « rafale ». J'ai écarté « grêle » (par gris souris), un lien plus faible.
- souris + clavier → *orage* ✗ — Titre et mots précédents (tonnerre, éclair, pluie, nuages) : l'orage. Souris et clavier évoquent l'ordinateur, incitation sur le son « or » d'orage.
- souris + clavier + argent → *foudre* ✗ — Thème orage (tonnerre, éclair, pluie, nuages déjà trouvés) ; orage et rafale refusés. Souris et clavier évoquent l'ordinateur, argent peut-être une incitation (fortune/fou) ; foudre est le grand mot manquant du ciel en colère.

**Solution : l'orage** — texte découvert : « Le tonnerre gronde, un éclair zèbre le ciel, la pluie tombe à verse ; le chien se cache sous le lit et l'on éteint l'____. »

- *l'orage* ✓ — Tonnerre, éclair, pluie à verse, chien caché sous le lit : tout décrit un orage, cohérent avec le titre « Ciel en colère ». Tempête écartée car l'éclair et le tonnerre désignent l'orage.

### e-412 : « Rien ne sert de courir » → la tortue

**Mot 1 : carapace** (trouvé à la brique 1, mise 2) — piste : cuirasse + crabe

- cuirasse → *carapace* ✓ — Le titre renvoie à la fable Le Lièvre et la Tortue ; la cuirasse de la tortue est sa carapace. Écarté : bouclier, hors thème.

**Mot 2 : écailles** (trouvé à la brique 1, mise 2) — piste : plumes + serpent

- plumes → *écailles* ✓ — Le titre renvoie au Lièvre et la Tortue, et le mot précédent est carapace. « Plumes » est sans doute pris par contraste avec le revêtement des reptiles, donc écailles. J'ai écarté « poils » (le lièvre).

**Mot 3 : cent** (non trouvé, mise 3) — piste : nombre + ans + avec

- nombre → *centenaire* ✗ — Le titre évoque la tortue (carapace, écailles). « Nombre » ferait penser à « cent », qui donne l'âge de la tortue centenaire. Écartés : chiffre, âge, lenteur.
- nombre + ans → *âge* ✗ — Le titre renvoie à la tortue de la fable (carapace, écailles). « Nombre » puis « ans » désignent le nombre d'années, donc l'âge ; « centenaire » a été refusé, j'écarte aussi « longévité », moins direct.
- nombre + ans + avec → *longévité* ✗ — Le titre renvoie à la fable « Le Lièvre et la Tortue », donc à la tortue. « Nombre » et « ans » désignent une longue vie, d'où longévité, centenaire et âge étant déjà refusés. « Avec » est peut-être une incitation, que je n'ai pas su décoder.

**Mot 4 : feuilles** (trouvé à la brique 2, mise 2) — piste : branches + automne

- branches → *pattes* ✗ — Le thème est la tortue (carapace, écailles). « Branches » peut désigner les membres, d'où les pattes de la tortue. J'ai écarté « ramper » (rameaux), une incitation peu probable dès la 1re brique.
- branches + automne → *feuilles* ✓ — Thème de la tortue (La Fontaine). Branches et automne évoquent les feuilles, que la tortue mange ; pattes déjà refusé.

**Mot 5 : lièvre** (trouvé à la brique 1, mise 2) — piste : lapin + hase

- lapin → *lièvre* ✓ — Le titre renvoie au Lièvre et la Tortue ; les mots précédents décrivent la tortue. La brique « lapin » est un proche du lièvre.

**Solution : la tortue** — texte découvert : « Sous sa carapace couverte d'écailles, elle peut vivre ____ ans, broute les feuilles tombées et, chez La Fontaine, bat le lièvre à la course. »

- *la tortue* ✓ — Carapace à écailles, grande longévité, herbivore et victoire sur le lièvre chez La Fontaine : c'est la tortue, comme le rappelle le titre tiré de la fable.

### e-420 : « Prince charmant ? » → la grenouille

**Mot 1 : têtard** (trouvé à la brique 1, mise 2) — piste : larve + batracien

- larve → *têtard* ✓ — Le prince charmant changé en crapaud ou en grenouille ; la larve de la grenouille est le têtard. Écarté : chenille, qui ne colle pas au thème.

**Mot 2 : mare** (trouvé à la brique 1, mise 2) — piste : étang + épouse

- étang → *mare* ✓ — Le titre fait penser à la grenouille du conte, après têtard. « Étang » est un quasi-synonyme de mare. J'ai écarté nénuphar, qui serait une association et non un synonyme.

**Mot 3 : mouches** (trouvé à la brique 2, mise 2) — piste : moustiques + tapette

- moustiques → *insectes* ✗ — La grenouille (têtard, mare) mange des moustiques ; la brique est une association vers ses proies. Écartés : mouches, langue.
- moustiques + tapette → *mouches* ✓ — Le thème est la grenouille (têtard, mare). Elle mange des insectes comme les moustiques, et la « tapette » est la tapette à mouches ; « insectes » a déjà été refusé.

**Mot 4 : langue** (trouvé à la brique 1, mise 2) — piste : dents + papilles

- dents → *langue* ✓ — Le prince charmant changé en animal, c'est la grenouille, et le mot précédent parlait des insectes qu'elle attrape. « Dents » évoque la bouche, et la langue est ce que la grenouille utilise pour chasser.

**Mot 5 : coasser** (trouvé à la brique 2, mise 3) — piste : crapaud + cri + poule

- crapaud → *batracien* ✗ — Le thème est la grenouille (têtard, mare, insectes, langue). « Crapaud » oriente vers la famille de l'animal, les batraciens. « Grenouille » est sans doute la solution, donc je l'écarte pour ce mot.
- crapaud + cri → *coasser* ✓ — Thème de la grenouille (prince charmant transformé). Crapaud et cri mènent au cri du batracien : coasser ; batracien déjà refusé.

**Solution : la grenouille** — texte découvert : « Ancien têtard, elle vit près de la mare, attrape les mouches avec sa langue et se met à coasser le soir venu. »

- *la grenouille* ✓ — Ancien têtard, mare, mouches attrapées avec la langue, coassement : la grenouille, que le prince charmant du titre évoque (la grenouille embrassée qui devient prince).

### e-424 : « Bonne nuit » → l'oreiller

**Mot 1 : taie** (trouvé à la brique 3, mise 3) — piste : housse + traversin + parler

- housse → *couette* ✗ — Le titre fait penser au lit et au sommeil. « Housse » appelle « housse de couette ». J'ai écarté oreiller, plutôt associé à la taie.
- housse + traversin → *oreiller* ✗ — Literie : une housse habille un oreiller ou une couette, et le traversin est le cousin de l'oreiller. « Couette » a déjà été refusée.
- housse + traversin + parler → *taie* ✓ — Literie : housse et traversin orientent vers la taie d'oreiller ; parler a pour contraire se taire, incitation sur « taie ». Couette et oreiller refusés.

**Mot 2 : duvet** (trouvé à la brique 1, mise 2) — piste : plumes + doudoune

- plumes → *duvet* ✓ — Thème du lit/couchage ; « plumes » évoque le duvet qui garnit couettes et oreillers. Édredon envisagé mais duvet plus direct.

**Mot 3 : tête** (trouvé à la brique 1, mise 2) — piste : crâne + cou

- crâne → *tête* ✓ — Le crâne est un synonyme courant de la tête ; dans le thème de la literie (couette/oreiller, duvet), la tête évoque aussi la tête de lit. Bonnet et chevet écartés pour une 1re brique synonyme.

**Mot 4 : bataille** (trouvé à la brique 1, mise 2) — piste : combat + navale

- combat → *bataille* ✓ — Le titre « Bonne nuit » et les mots déjà trouvés (oreiller, duvet, tête) évoquent le lit ; « combat » est un synonyme de « bataille », qui fait penser à la bataille d'oreillers (ou de polochons). J'écarte « polochon », car « combat » est plus probablement un synonyme direct qu'une association.

**Mot 5 : rêves** (trouvé à la brique 1, mise 2) — piste : songes + Freud

- songes → *rêves* ✓ — « Songes » est un synonyme direct de « rêves », ce qui colle au titre « Bonne nuit » et aux mots précédents (taie, duvet, tête, bataille), qui font penser à l'oreiller. J'ai écarté « sommeil » et « nuit », moins proches de « songes ».

**Solution : l'oreiller** — texte découvert : « Glissé dans sa taie, garni de duvet, il soutient la tête du dormeur, sert d'arme lors d'une bataille entre enfants et veille sur nos rêves. »

- *l'oreiller* ✓ — Le titre « Bonne nuit » et le texte (taie, duvet, soutient la tête, bataille entre enfants) décrivent clairement l'oreiller. Le traversin a été écarté : on parle de « bataille de polochons », mais la taie et la tête du dormeur désignent plutôt l'oreiller.

### e-447 : « Faire un vœu » → l'anniversaire

**Mot 1 : bougies** (trouvé à la brique 1, mise 2) — piste : chandelles + moteur

- chandelles → *bougies* ✓ — On fait un vœu en soufflant les bougies d'anniversaire ; chandelles en est le synonyme. Écarté : gâteau, qui n'est pas un synonyme.

**Mot 2 : gâteau** (trouvé à la brique 1, mise 2) — piste : pâtisserie + marbré

- pâtisserie → *gâteau* ✓ — Faire un vœu et souffler les bougies, c'est l'anniversaire. « Pâtisserie » mène au gâteau d'anniversaire.

**Mot 3 : chœur** (trouvé à la brique 2, mise 3) — piste : chorale + enfants + pique

- chorale → *chanson* ✗ — Anniversaire (bougies, gâteau) : la chorale évoque le chant de « Joyeux anniversaire ». Écarté : chant.
- chorale + enfants → *chœur* ✓ — Le thème est l'anniversaire (bougies, gâteau). « Chorale » est un synonyme de chœur, et « enfants » complète en « chœur d'enfants » qui chante Joyeux anniversaire ; « chanson » a été refusé.

**Mot 4 : paquets** (trouvé à la brique 2, mise 2) — piste : colis + cigarettes

- colis → *cadeaux* ✗ — Bougies, gâteau et chanson : c'est un anniversaire. « Colis » évoque le paquet qu'on offre, donc les cadeaux.
- colis + cigarettes → *paquet* ✓ — Thème de l'anniversaire. Le colis est un paquet, et l'on parle aussi d'un paquet de cigarettes. « Cadeaux » a été refusé, ce qui confirme « paquet ».

**Mot 5 : ride** (trouvé à la brique 2, mise 2) — piste : pli + front

- pli → *carte* ✗ — Anniversaire (bougies, gâteau, chanson, cadeaux). Pli au sens de courrier : la carte d'anniversaire ; enveloppe envisagé.
- pli + front → *ride* ✓ — Thème anniversaire (bougies, gâteau, chanson, cadeaux) ; pli et front donnent la ride, qui vient avec l'âge. Carte refusée.

**Solution : l'anniversaire** — texte découvert : « On souffle les bougies plantées dans le gâteau ; tout le monde chante en chœur ; on déballe les paquets ; et l'on compte une ride de plus. »

- *l'anniversaire* ✓ — Bougies soufflées sur le gâteau, chanson en chœur, cadeaux déballés et une année de plus : c'est un anniversaire, ce que confirme le titre « Faire un vœu ». La fête en général est écartée, car rien d'autre ne réunit bougies et ride de plus.

### e-515 : « Le cheval de fer » → la locomotive

**Mot 1 : foyer** (trouvé à la brique 1, mise 2) — piste : âtre + famille

- âtre → *foyer* ✓ — Le cheval de fer est la locomotive à vapeur ; l'âtre a pour synonyme foyer, qui est aussi la partie de la chaudière où brûle le charbon. Écarté : cheminée.

**Mot 2 : pelle** (trouvé à la brique 1, mise 2) — piste : bêche + seau

- bêche → *pelle* ✓ — Le cheval de fer est la locomotive à vapeur, et le foyer s'alimente au charbon. « Bêche » est proche de pelle, l'outil du chauffeur.

**Mot 3 : charbon** (trouvé à la brique 1, mise 2) — piste : houille + mine

- houille → *charbon* ✓ — Locomotive à vapeur (foyer, pelle) ; houille est un synonyme de charbon. Écarté : vapeur.

**Mot 4 : wagons** (trouvé à la brique 1, mise 2) — piste : voitures + bestiaux

- voitures → *wagons* ✓ — Le cheval de fer désigne la locomotive à vapeur (foyer, pelle, charbon). Les « voitures » d'un train sont ses wagons.

**Mot 5 : rails** (trouvé à la brique 1, mise 3) — piste : traverses + ballast + se moquer

- traverses → *rails* ✓ — Le cheval de fer, c'est le train à vapeur. Les traverses supportent les rails de la voie ferrée.

**Solution : la locomotive** — texte découvert : « Son foyer chauffe l'eau ; à la pelle, on y jette le charbon ; elle tire les wagons sur les rails. »

- *la locomotive* ✓ — Un foyer qui chauffe l'eau, du charbon jeté à la pelle, des wagons tirés sur les rails : c'est la locomotive à vapeur, le « cheval de fer ».

### e-527 : « Rouge aux joues » → la timidité

**Mot 1 : réservé** (trouvé à la brique 1, mise 2) — piste : retenu + do

- retenu → *réservé* ✓ — Rougir évoque la timidité ; retenu a pour synonyme réservé. Écarté : timide, moins proche de retenu.

**Mot 2 : emprunté** (trouvé à la brique 2, mise 2) — piste : embarrassé + prêt

- embarrassé → *gêné* ✗ — Le thème est la timidité, après réservé. « Embarrassé » est synonyme de gêné. J'ai écarté « timide », qui pourrait être la solution.
- embarrassé + prêt → *emprunté* ✓ — Thème de la timidité ; « embarrassé » est un synonyme et « prêt » serait une incitation vers « emprunt », qui donne « emprunté ». Écartés : gêné (refusé), timide, confus.

**Mot 3 : appréhension** (non trouvé, mise 2) — piste : crainte + avant

- crainte → *craintif* ✗ — Le thème est la timidité : les mots précédents sont des adjectifs (réservé, gêné). « Crainte » donne l'adjectif craintif ; je garde « timide », probable mot clé de la solution, en réserve.
- crainte + avant → *timoré* ✗ — Le titre et les mots précédents (réservé, gêné) décrivent la timidité. « Crainte » donne un adjectif proche de craintif, déjà refusé : timoré. Je n'ai pas compris le rôle de « avant ».

**Mot 4 : foules** (trouvé à la brique 1, mise 2) — piste : multitude + bain

- multitude → *foule* ✓ — Le thème est la timidité (réservé, gêné). « Multitude » a pour synonyme « foule », qui intimide le timide.

**Mot 5 : discrétion** (non trouvé, mise 3) — piste : effacement + assurée + vinyle

- effacement → *discret* ✗ — Thème de la timidité (réservé, gêné). Effacement évoque le fait d'être discret ; modeste envisagé.
- effacement + assurée → *timide* ✗ — Thème de la timidité (réservé, gêné, foule) ; effacement est un trait du timide et « assurée » appelle un contraire. Discret refusé, effacé écarté car de même racine que la brique.
- effacement + assurée + vinyle → *discrète* ✗ — Effacement renvoie à la discrétion, « assurée » au féminin suggère un adjectif féminin contraire, et vinyle évoque « disque », dont le son « dis » incite vers « discrète ». « Discret » au masculin a été refusé, d'où la forme féminine.

**Solution : la timidité** — texte découvert : « Ce garçon réservé se sent emprunté dès qu'on lui parle ; l'____ le paralyse ; il fuit les foules et cultive la ____. »

- *la timidité* ✓ — Le titre « Rouge aux joues » renvoie au fait de rougir. Le garçon réservé, emprunté, que quelque chose paralyse et qui fuit les foules décrit la timidité. Les mots manquants sont sans doute « émotion » ou « angoisse », puis « solitude » ou « discrétion ».

### e-528 : « La cassette d'Harpagon » → l'avarice

**Mot 1 : radin** (trouvé à la brique 2, mise 2) — piste : pingre + carotte

- pingre → *avare* ✗ — Harpagon est L'Avare de Molière ; pingre est un synonyme d'avare.
- pingre + carotte → *radin* ✓ — Harpagon est l'avare, mais ce mot a été refusé. « Pingre » est un synonyme, et « carotte » est une incitation qui évoque le radis, d'où le son « radi- » de radin.

**Mot 2 : magot** (trouvé à la brique 1, mise 2) — piste : trésor + bas de laine

- trésor → *magot* ✓ — La cassette d'Harpagon est son magot ; « trésor » en est un synonyme. Écartés : or, argent.

**Mot 3 : lésiner** (trouvé à la brique 1, mise 3) — piste : chipoter + dépense + blessure

- chipoter → *lésiner* ✓ — Le thème est l'avarice (avare, magot). « Chipoter » au sens de regarder à la dépense, c'est lésiner ; j'écarte « mesquin », qui n'est pas un verbe.

**Mot 4 : rapacité** (trouvé à la brique 2, mise 2) — piste : cupidité + vautour

- cupidité → *avidité* ✗ — Harpagon incarne l'avarice. « Cupidité » a pour synonyme direct avidité. J'ai écarté rapacité et convoitise, et avarice, trop proche du mot avare déjà trouvé.
- cupidité + vautour → *rapacité* ✓ — Le thème est l'avarice. « Cupidité » est un synonyme, et le vautour est un rapace : les deux briques mènent à « rapacité ». « Avidité » a été refusée.

**Mot 5 : sou** (trouvé à la brique 1, mise 2) — piste : centime + neuf

- centime → *sou* ✓ — Avarice d'Harpagon. Centime a pour synonyme le sou (être près de ses sous).

**Solution : l'avarice** — texte découvert : « Ce vieux radin enterre son magot au jardin ; il ne cesse de lésiner sur tout ; sa rapacité le perd : il ne lâcherait pas un sou. »

- *l'avare* ✓ — Radin, magot enterré, lésiner, rapacité, la cassette d'Harpagon : c'est l'avare de Molière.

### e-533 : « Salle des pas perdus » → le tribunal

**Mot 1 : prévenu** (trouvé à la brique 1, mise 2) — piste : accusé + prairie

- accusé → *prévenu* ✓ — La salle des pas perdus se trouve au palais de justice ; au tribunal, l'accusé est aussi appelé prévenu. Écarté : inculpé.

**Mot 2 : greffier** (trouvé à la brique 1, mise 3) — piste : clerc + audience + Athènes

- clerc → *greffier* ✓ — La salle des pas perdus est celle du palais de justice, après prévenu. « Clerc » désigne un employé d'écriture, que je rapproche du greffier au tribunal. J'ai écarté avocat et notaire.

**Mot 3 : réquisitoire** (trouvé à la brique 2, mise 2) — piste : plaidoirie + procureur

- plaidoirie → *avocat* ✗ — Palais de justice (prévenu, greffier) ; la plaidoirie est faite par l'avocat. Écarté : juge.
- plaidoirie + procureur → *réquisitoire* ✓ — Le titre renvoie au palais de justice (prévenu, greffier). La « plaidoirie » est le discours de l'avocat ; l'équivalent prononcé par le « procureur » est le réquisitoire, et « avocat » a été refusé.

**Mot 4 : jurés** (non trouvé, mise 3) — piste : assesseurs + assises + pantalon

- assesseurs → *juge* ✗ — La salle des pas perdus est celle du palais de justice. Les assesseurs entourent le juge qui préside le tribunal. J'ai écarté président, moins probable comme mot isolé.
- assesseurs + assises → *cour* ✗ — Le thème est le tribunal. Les assesseurs siègent à la cour, et l'on dit « cour d'assises ». « Juge » a été refusé. J'ai écarté « jurés », qui colle moins bien aux assesseurs.
- assesseurs + assises + pantalon → *jury* ✗ — Tribunal : assesseurs et assises orientent vers le jury de cour d'assises ; pantalon pris comme incitation (jean, son « j »). Juge et cour refusés.

**Mot 5 : verdict** (trouvé à la brique 1, mise 2) — piste : sentence + rouge

- sentence → *verdict* ✓ — Thème du tribunal (prévenu, greffier, avocat) ; « sentence » est un synonyme de verdict, prononcé à l'issue du procès.

**Solution : le tribunal** — texte découvert : « Le prévenu comparaît ; le greffier consigne les débats ; le procureur prononce son réquisitoire ; les ____ se retirent avant le verdict. »

- *le tribunal* ✓ — Prévenu, greffier, procureur, réquisitoire, verdict et jurés qui se retirent : c'est un procès au tribunal, et la salle des pas perdus est celle du palais de justice. Cour d'assises envisagée, mais tribunal est plus général.

### e-535 : « Pour le meilleur et pour le pire » → le mariage

**Mot 1 : fiançailles** (trouvé à la brique 1, mise 2) — piste : accordailles + bague

- accordailles → *fiançailles* ✓ — La formule du titre est celle du mariage. « Accordailles » est un mot ancien pour fiançailles.

**Mot 2 : alliance** (trouvé à la brique 1, mise 2) — piste : anneau + OTAN

- anneau → *alliance* ✓ — Le thème est le mariage (fiançailles). L'anneau du mariage s'appelle l'alliance.

**Mot 3 : témoins** (trouvé à la brique 1, mise 2) — piste : garants + relais

- garants → *témoins* ✓ — Mariage : les garants de l'union sont les témoins.

**Mot 4 : trousseau** (trouvé à la brique 1, mise 2) — piste : linge + clés

- linge → *trousseau* ✓ — Thème du mariage (fiançailles, alliance, témoins) ; « linge » évoque le trousseau de la mariée.

**Mot 5 : noces** (trouvé à la brique 1, mise 2) — piste : épousailles + or

- épousailles → *noces* ✓ — Épousailles est un synonyme vieilli de noces ou de mariage ; le thème global (fiançailles, alliance, témoins, trousseau) laisse « mariage » comme solution probable de l'énigme, donc je propose noces pour le mot.

**Solution : le mariage** — texte découvert : « Après les fiançailles, on échange l'alliance devant le maire et les témoins ; jadis la promise préparait son trousseau ; on fête ensuite les noces. »

- *le mariage* ✓ — « Pour le meilleur et pour le pire » est la formule des vœux de mariage. Fiançailles, alliance, maire, témoins, trousseau et noces confirment tous le mariage.
