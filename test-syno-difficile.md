# Test à l'aveugle du niveau difficile (23 octobre 2026)

## Méthode

Syno est joué par des sous-agents Claude **sans accès aux réponses** ni à l'API du jeu. Ils reçoivent les briques tour par tour :
1re brique seule, puis les deux premières avec leur réponse déjà refusée, puis la 3e brique. Les mots joués en 2 briques
et toujours manqués sont perdus, comme dans le jeu. Syno a ensuite 3 essais pour la solution. Le score est calculé par le moteur du jeu.

## Résultats

- **Énigmes (53)** : 255 mots trouvés sur 265 (96 %), dont 186 dès la 1re brique (70 %). Solution trouvée 51 fois sur 53. **Score moyen : 11,0** (maximum possible environ 14).
- **Noms propres (53 listes)** : 212 noms trouvés sur 212, dont 206 dès la 1re brique.

## Analyse

1. **Un Syno IA n'est pas un joueur humain.** Sa culture encyclopédique lui fait trouver presque tous les noms propres dès la 1re brique :
   ce test ne mesure pas la difficulté pour un humain sur les noms propres, seulement la clarté des pistes.
2. **Pour les énigmes, le test repère bien les pistes ambiguës.** Les 10 mots manqués ont presque tous la même cause :
   - **un contraire en 1re brique lu comme un synonyme** (vivant → « défunt » pour mort ; introduction → « préambule » pour conclusion ;
     distinction → « raffinement » pour vulgarité ; cosmos → « univers » pour chaos ; défunts → « trépassés » pour vivants) ;
   - **un mot qui admet plusieurs bonnes réponses** (verbiage / verbosité, quiétude / calme, artiste / artisan, larve / chrysalide) ;
   - **une 1re brique polysémique** (« cours » pour tribunaux, lu comme « cours d'eau » sous le titre « Le temps qui coule »).
3. **Les incitations finales ont servi** : sur les mots trouvés en 2e ou 3e brique, elles ont souvent fait la différence (ataraxie, revirement, désaveu, présomption…).
4. **Niveau** : pour ce Syno IA, la plupart des énigmes « difficiles » se jouent comme des moyennes (mots trouvés dès la 1re brique).
   Il faudra l'avis de joueurs humains (onglet « Évaluations ») pour décider des reclassements.

## Corrections appliquées aux 10 pistes manquées

| Mot | Avant | Après |
|---|---|---|
| verbiage | bavardage + concision + prose | bavardage + creux + conjugaison (verbe → « verb- ») |
| larve | chenille + métamorphose | asticot + chenille + bacon (lard → « lar- ») |
| conclusion | introduction + épilogue + cornichon | aboutissement + introduction + cornichon |
| mort | vivant + décédé | vivant + décédé + bride (mors → « mor- ») |
| chaos | cosmos + anarchie | harmonie + secousse (cahot → « chao- ») |
| artiste | créateur + atelier | créateur + atelier + veine (artère → « art- ») |
| vulgarité | distinction + trivialité | trivialité + distinction + Héphaïstos (Vulcain → « vul- ») |
| tribunaux | cours + verdict + Iseut | juridictions + verdict + Iseut |
| quiétude | tranquillité + agitation | le mot devient **sérénité** : quiétude + agitation + aubade (sérénade → « séré- ») |
| vivants | défunts + famille | défunts + Saisons (Vivaldi → « viv- ») |

Pour rester à 13 briques, l'incitation de « sensibilité » (trouvé dès la 1re brique) a été retirée dans « Mots de velours ».

---

# Test à l'aveugle de Syno, niveau difficile

Syno (sous-agent Claude sans accès aux réponses) voit les briques une à une, avec ses réponses déjà jugées fausses. Score calculé comme dans le jeu.

## Énigmes

| Énigme | Titre | Mots trouvés (brique) | Bonus | Solution | Score |
|---|---|---|---|---|---|
| e-201 | Humeur noire | 5/5 : langueur (1/3), bile (1/2), gravure (1/3), spleen (1/3), charme (1/2) | 8 | ✓ | 14 |
| e-203 | Dire le contraire | 5/5 : faux (1/2), vrai (1/2), méthode (2/2), finesse (1/2), sarcasme (2/3) | 6 | ✓ | 12 |
| e-205 | Demain sans faute | 5/5 : lendemain (1/2), aujourd'hui (2/3), prétextes (1/2), effort (2/3), échéance (1/3) | 6 | ✓ | 12 |
| e-301 | Sagesse du Portique | 5/5 : adversité (1/3), flegme (2/2), ataraxie (2/3), esclave (2/2), résignation (2/3) | 4 | ✓ | 10 |
| e-302 | Le moulin à paroles | 4/5 : ~~verbiage~~, intarissable (1/2), digressions (1/3), circonlocutions (1/3), silence (2/2) | 0 | ✓ | 5 |
| e-303 | Retournement de veste | 5/5 : revirement (2/3), opinion (1/2), girouette (1/2), désaveu (2/3), parjure (1/3) | 6 | ✗ (l'apostasie, le reniement, la volte-face) | 11 |
| e-304 | Faux dévot | 5/5 : masque (2/2), duplicité (2/3), parangon (2/3), simagrées (1/3), crocodile (1/2) | 5 | ✓ | 11 |
| e-305 | Le pardon des grands | 5/5 : clémence (1/2), félon (2/3), magnanimité (1/3), rancœur (2/3), sanction (2/2) | 5 | ✗ (la clémence, le pardon, la grâce) | 10 |
| e-306 | Un seul jour | 4/5 : ~~larve~~, rivière (1/2), fugace (1/3), précarité (1/3), périr (2/2) | 0 | ✓ | 5 |
| e-307 | Hors de son temps | 5/5 : légionnaire (1/2), bévue (1/3), incongruités (1/3), limier (2/2), erreur (1/2) | 7 | ✓ | 13 |
| e-308 | Raisonnement trompeur | 4/5 : rigoureux (1/2), faille (1/2), prémisses (1/3), ~~conclusion~~, piège (1/2) | 0 | ✓ | 5 |
| e-309 | Nature morte | 5/5 : crâne (1/2), bougie (1/2), sablier (1/2), fanées (1/3), brièveté (1/3) | 8 | ✓ | 14 |
| e-310 | Obscure clarté | 5/5 : étoiles (1/2), contradictoires (2/3), style (1/2), paradoxe (2/3), rhétorique (1/2) | 6 | ✓ | 12 |
| e-311 | Mots de velours | 4/5 : ~~mort~~, détour (1/2), pudique (1/3), atténuer (1/3), sensibilité (1/3) | 0 | ✓ | 5 |
| e-312 | Le théâtre qui soigne | 5/5 : tragédie (1/2), crainte (2/2), apaisé (1/3), passions (1/2), purgées (1/3) | 7 | ✓ | 13 |
| e-313 | Big Brother | 5/5 : sinistre (1/2), épier (2/3), censure (2/3), pensée (1/2), mensonge (2/2) | 5 | ✓ | 11 |
| e-314 | Tout s'use | 4/5 : désordre (1/2), ~~chaos~~, énergie (1/2), chaleur (1/2), thermodynamique (1/3) | 0 | ✓ | 5 |
| e-315 | Madeleine trempée | 5/5 : impression (1/2), saveur (1/2), resurgir (1/2), souvenir (1/2), évocation (2/3) | 7 | ✓ | 13 |
| e-316 | Femme aux yeux bandés | 4/5 : balance (1/2), glaive (1/2), justice (2/2), ~~artiste~~, abstraite (1/3) | 0 | ✓ | 5 |
| e-317 | Élégance insolente | 4/5 : modèle (2/2), nonchalance (1/3), costume (1/2), impertinence (1/3), ~~vulgarité~~ | 0 | ✓ | 5 |
| e-318 | Alceste | 5/5 : semblables (1/3), fausseté (2/2), retraite (2/2), solitude (1/2), rancune (2/3) | 5 | ✓ | 11 |
| e-319 | Carpe diem | 5/5 : plaisir (1/2), douleur (1/2), instant (1/2), modération (1/3), ivresse (1/2) | 8 | ✓ | 14 |
| e-320 | Pyrrhon d'Élis | 5/5 : jugement (1/2), certitude (1/2), illusoire (2/3), ignorance (2/2), crédulité (1/3) | 6 | ✓ | 12 |
| e-321 | Toujours demain | 5/5 : ouvrage (2/2), subterfuges (2/3), délais (1/2), tergiversations (2/3), créanciers (1/2) | 5 | ✓ | 11 |
| e-322 | Éclair intérieur | 5/5 : fulgurant (1/2), illumination (2/2), limpide (2/2), manifestation (2/2), galette (1/2) | 5 | ✓ | 11 |
| e-323 | Bienfaiteur des arts | 5/5 : princes (1/2), artistes (1/2), fortune (1/2), statues (2/2), déduction (1/3) | 7 | ✓ | 13 |
| e-324 | Comparaison sans comme | 5/5 : automne (2/2), poétique (1/2), analogie (1/3), orateurs (1/2), ornement (1/3) | 7 | ✓ | 13 |
| e-325 | Le désert intérieur | 5/5 : anachorète (1/3), jeûne (1/2), abstinence (2/3), discipline (2/2), purification (1/3) | 6 | ✓ | 12 |
| e-326 | La lanterne de Diogène | 5/5 : tonneau (1/2), conventions (1/3), argent (1/2), impudence (1/3), notables (2/2) | 7 | ✓ | 13 |
| e-327 | Le temps qui coule | 4/5 : horloge (1/2), heures (1/2), eau (1/2), vase (1/2), ~~tribunaux~~ | 0 | ✓ | 5 |
| e-328 | Disque des astres | 5/5 : laiton (1/3), hauteur (1/2), savants (1/2), pilotes (2/2), point (2/2) | 6 | ✓ | 12 |
| e-329 | Bernin et Borromini | 5/5 : profusion (1/3), volutes (1/2), torses (2/2), trompe-l'œil (1/2), ostentation (1/3) | 7 | ✓ | 13 |
| e-330 | L'art de Socrate | 5/5 : sage-femme (1/2), accoucheur (1/2), questions (1/2), découvrir (1/2), vérité (1/2) | 8 | ✓ | 14 |
| e-331 | Brebis égarées | 5/5 : dogme (1/2), excommunication (1/3), inquisition (2/2), dissidents (1/3), bûcher (1/2) | 7 | ✓ | 13 |
| e-332 | Le vote des potiers | 5/5 : tesson (1/2), bannir (1/2), influent (1/3), éloignement (1/3), exclusion (1/2) | 8 | ✓ | 14 |
| e-333 | Affaire de famille | 5/5 : neveux (1/2), péché (2/2), pouvoir (1/2), parenté (1/3), mérite (1/2) | 7 | ✓ | 13 |
| e-334 | Le tribun | 5/5 : flatter (1/2), merveilles (2/2), discours (1/2), populistes (1/3), foule (1/2) | 7 | ✓ | 13 |
| e-335 | Querelle des images | 5/5 : empereur (1/2), icônes (1/2), frondeur (2/3), bousculer (2/2), dogmes (1/2) | 6 | ✓ | 12 |
| e-336 | Moi seul | 5/5 : esprit (1/2), projection (3/3), conscience (1/2), fantôme (1/2), songe (1/2) | 6 | ✓ | 12 |
| e-337 | Le grand œuvre | 5/5 : laboratoire (1/2), initié (2/2), philosophale (2/3), plomb (1/2), élixir (1/2) | 6 | ✓ | 12 |
| e-338 | Fin des temps | 5/5 : cavaliers (1/2), bête (1/2), jugement (1/2), révélation (1/3), catastrophe (2/2) | 7 | ✓ | 13 |
| e-339 | Héraclès au marais | 5/5 : monstre (1/2), multiples (1/2), décapitation (1/3), cautériser (1/3), bout (2/2) | 7 | ✓ | 13 |
| e-340 | Ailes de cire | 5/5 : ambition (1/2), soleil (1/2), présomption (3/3), démesure (1/3), vanité (1/3) | 6 | ✓ | 12 |
| e-341 | Coup de dés | 5/5 : destin (2/2), chance (1/2), fortune (1/2), étoile (1/2), poisse (2/3) | 6 | ✓ | 12 |
| e-342 | Seul au désert | 4/5 : grotte (1/2), racines (1/2), ~~quiétude~~, cri (2/2), corbeaux (1/2) | 0 | ✓ | 5 |
| e-343 | Oasis trompeuse | 5/5 : trembler (1/2), nappe (2/2), miroiter (1/2), illusion (1/2), optique (1/3) | 7 | ✓ | 13 |
| e-344 | Rive des Enfers | 5/5 : fleuve (1/2), mémoire (1/2), âme (1/2), souvenirs (1/2), cicatriser (2/3) | 7 | ✓ | 13 |
| e-345 | Énigme de Thèbes | 5/5 : lion (1/2), devinette (1/2), dévoré (1/2), clé (2/2), précipice (1/3) | 7 | ✓ | 13 |
| e-346 | Ce qui était écrit | 5/5 : dieux (2/2), destin (1/2), prédit (1/2), malédiction (1/3), tragique (1/2) | 7 | ✓ | 13 |
| e-347 | Antichambre du paradis | 4/5 : sauvée (1/2), expier (1/3), montagne (1/2), ~~vivants~~, attente (1/2) | 0 | ✓ | 5 |
| e-348 | Le bègue d'Athènes | 5/5 : cailloux (1/2), entraînement (1/2), orateur (1/2), persuasif (1/3), verve (2/3) | 7 | ✓ | 13 |
| e-349 | Pensée brève | 5/5 : sentence (2/3), vérité (1/2), maximes (2/2), esprit (1/2), désespoir (1/2) | 6 | ✓ | 12 |
| e-350 | Loin du pays | 5/5 : patrie (1/2), manque (2/2), poèmes (1/2), usurpateur (1/3), mer (1/2) | 7 | ✓ | 13 |

Score moyen : 11.0

## Mots non trouvés

- e-302, **verbiage** : bavardage + concision + prose → Syno : logorrhée, prolixité, verbosité
- e-306, **larve** : chenille + métamorphose → Syno : papillon, chrysalide
- e-308, **conclusion** : introduction + épilogue + cornichon → Syno : préambule, prologue, prémices
- e-311, **mort** : vivant + décédé → Syno : disparu, défunt
- e-314, **chaos** : cosmos + anarchie → Syno : univers, désordre
- e-316, **artiste** : créateur + atelier → Syno : auteur, artisan
- e-317, **vulgarité** : distinction + trivialité → Syno : raffinement, élégance
- e-327, **tribunaux** : cours + verdict + Iseut → Syno : écoulement, arrêt, issue
- e-342, **quiétude** : tranquillité + agitation → Syno : solitude, calme
- e-347, **vivants** : défunts + famille → Syno : trépassés, ancêtres

## Noms Propres

| Liste | Thème | Trouvés | Détail |
|---|---|---|---|
| np-202 | Peintres de la Renaissance | 4/4 | Botticelli (1) ; Bruegel (1) ; Dürer (1) ; Titien (1) |
| np-204 | Écrivains russes | 4/4 | Tolstoï (1) ; Dostoïevski (1) ; Tchekhov (1) ; Pouchkine (1) |
| np-206 | Compositeurs baroques | 4/4 | Vivaldi (1) ; Rameau (1) ; Lully (1) ; Haendel (1) |
| np-301 | Philosophes présocratiques | 4/4 | Héraclite (1) ; Parménide (1) ; Démocrite (1) ; Thalès (1) |
| np-302 | Primitifs flamands et maîtres d'Anvers | 4/4 | Van Eyck (1) ; Rubens (1) ; Memling (1) ; Jordaens (1) |
| np-303 | Impressionnistes méconnus | 4/4 | Sisley (1) ; Pissarro (1) ; Caillebotte (1) ; Berthe Morisot (1) |
| np-304 | Compositeurs romantiques | 4/4 | Schumann (1) ; Liszt (1) ; Berlioz (1) ; Mendelssohn (1) |
| np-305 | Compositeurs russes | 4/4 | Moussorgski (1) ; Rimski-Korsakov (1) ; Tchaïkovski (1) ; Borodine (1) |
| np-306 | Poètes latins | 4/4 | Virgile (1) ; Ovide (1) ; Horace (1) ; Catulle (1) |
| np-307 | Écrivains des Lumières | 4/4 | Diderot (1) ; Montesquieu (1) ; Marivaux (1) ; Beaumarchais (1) |
| np-308 | Poètes symbolistes | 4/4 | Mallarmé (1) ; Verlaine (1) ; Rimbaud (1) ; Laforgue (1) |
| np-309 | Navigateurs et explorateurs | 4/4 | Magellan (1) ; Jacques Cartier (1) ; Bougainville (1) ; Vasco de Gama (1) |
| np-310 | Savants de la Renaissance | 4/4 | Copernic (1) ; Kepler (1) ; Galilée (1) ; Vésale (1) |
| np-311 | Mathématiciens | 4/4 | Euler (2) ; Gauss (1) ; Fermat (2) ; Riemann (1) |
| np-312 | Physiciens | 4/4 | Maxwell (1) ; Faraday (1) ; Planck (1) ; Heisenberg (1) |
| np-313 | Révolutionnaires | 4/4 | Danton (1) ; Robespierre (1) ; Marat (1) ; Saint-Just (1) |
| np-314 | Rois de France médiévaux | 4/4 | Philippe Auguste (1) ; Louis IX (1) ; Charles V (1) ; Louis XI (1) |
| np-315 | Reines et régentes | 4/4 | Aliénor d'Aquitaine (1) ; Catherine de Médicis (1) ; Anne de Bretagne (1) ; Blanche de Castille (1) |
| np-316 | Empereurs romains | 4/4 | Hadrien (1) ; Caligula (1) ; Néron (1) ; Marc Aurèle (1) |
| np-317 | Pharaons | 4/4 | Akhenaton (1) ; Ramsès (2) ; Khéops (1) ; Toutankhamon (1) |
| np-318 | Dieux de l'Olympe | 4/4 | Héphaïstos (1) ; Hermès (1) ; Déméter (1) ; Dionysos (1) |
| np-319 | Héroïnes tragiques | 4/4 | Phèdre (1) ; Antigone (1) ; Andromaque (1) ; Médée (1) |
| np-320 | Personnages de Balzac | 4/4 | Rastignac (1) ; Goriot (1) ; Vautrin (1) ; Grandet (1) |
| np-321 | Personnages de Proust | 4/4 | Swann (1) ; Charlus (1) ; Verdurin (1) ; Albertine (1) |
| np-322 | Personnages de Shakespeare | 4/4 | Hamlet (1) ; Othello (1) ; Falstaff (1) ; Prospero (1) |
| np-323 | Héroïnes d'opéra | 4/4 | Carmen (1) ; Tosca (1) ; Violetta (1) ; Norma (1) |
| np-324 | Sculpteurs | 4/4 | Rodin (1) ; Giacometti (1) ; Bourdelle (1) ; Houdon (1) |
| np-325 | Architectes | 4/4 | Vauban (1) ; Haussmann (1) ; Le Corbusier (1) ; Viollet-le-Duc (1) |
| np-326 | Cinéastes de la Nouvelle Vague | 4/4 | Truffaut (1) ; Godard (1) ; Rohmer (1) ; Chabrol (1) |
| np-327 | Grands de la chanson | 4/4 | Brassens (1) ; Brel (1) ; Ferré (1) ; Barbara (1) |
| np-328 | Peintres espagnols | 4/4 | Goya (1) ; Vélasquez (1) ; Zurbarán (1) ; Le Greco (1) |
| np-329 | Écrivains italiens | 4/4 | Dante (1) ; Pétrarque (1) ; Boccace (1) ; Machiavel (1) |
| np-330 | Écrivains de langue allemande | 4/4 | Goethe (1) ; Schiller (1) ; Kafka (1) ; Rilke (1) |
| np-331 | Philosophes allemands | 4/4 | Hegel (1) ; Nietzsche (1) ; Schopenhauer (1) ; Heidegger (1) |
| np-332 | Philosophes britanniques | 4/4 | Hobbes (1) ; Locke (1) ; Hume (1) ; Bentham (1) |
| np-333 | Médecins célèbres | 4/4 | Laennec (1) ; Charcot (1) ; Ambroise Paré (1) ; Bichat (1) |
| np-334 | Chimistes | 4/4 | Lavoisier (1) ; Mendeleïev (1) ; Berthollet (2) ; Gay-Lussac (1) |
| np-335 | Inventeurs français | 4/4 | Jacquard (1) ; Daguerre (1) ; Montgolfier (1) ; Braille (1) |
| np-336 | Gens de mer | 4/4 | Surcouf (1) ; Jean Bart (1) ; La Pérouse (1) ; Cousteau (1) |
| np-337 | Figures de la Résistance | 4/4 | Jean Moulin (1) ; Lucie Aubrac (1) ; Pierre Brossolette (1) ; Missak Manouchian (1) |
| np-338 | Maréchaux d'Empire | 4/4 | Ney (1) ; Murat (1) ; Davout (1) ; Lannes (1) |
| np-339 | Batailles navales | 4/4 | Trafalgar (1) ; Lépante (1) ; Salamine (1) ; Aboukir (1) |
| np-340 | Sites antiques | 4/4 | Alhambra (1) ; Angkor (1) ; Petra (1) ; Persépolis (1) |
| np-341 | Fleuves du monde | 4/4 | Mékong (1) ; Ienisseï (2) ; Zambèze (2) ; Orénoque (1) |
| np-342 | Capitales lointaines | 4/4 | Oulan-Bator (1) ; Asmara (1) ; Tbilissi (1) ; Katmandou (1) |
| np-343 | Îles | 4/4 | Madère (1) ; Zanzibar (1) ; Sakhaline (1) ; Pâques (1) |
| np-344 | Sommets | 4/4 | Annapurna (1) ; Kilimandjaro (1) ; Aconcagua (1) ; Cervin (1) |
| np-345 | Dieux nordiques | 4/4 | Odin (1) ; Thor (1) ; Loki (1) ; Freyja (1) |
| np-346 | Divinités égyptiennes | 4/4 | Anubis (1) ; Thot (1) ; Hathor (1) ; Sekhmet (1) |
| np-347 | Figures bibliques | 4/4 | Salomon (1) ; Jonas (1) ; Judith (1) ; Job (1) |
| np-348 | Saints | 4/4 | François d'Assise (1) ; Christophe (1) ; Geneviève (1) ; Martin (1) |
| np-349 | Héros de bande dessinée réaliste | 4/4 | Blake (1) ; Corto Maltese (1) ; Valérian (1) ; Blueberry (1) |
| np-350 | Écrivains d'Amérique latine | 4/4 | Borges (1) ; García Márquez (1) ; Neruda (1) ; Cortázar (1) |