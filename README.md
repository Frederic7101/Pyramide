# Pyramide Solo

Jeu Pyramide en solo (version 1, mode Syno). Voir ../plan-technique-v1.md.

```bash
npm install
npm run dev      # serveur de développement
npm test         # tests Vitest
npm run build    # génère dist/ pour la publication
npm run valider  # contrôle automatique du contenu (src/content)
npm run relecture # génère relecture-contenu.md pour la relecture humaine
npm run dictionnaire # régénère public/dictionnaire.txt (lancé automatiquement par dev et build)
npm run evaluations -- evaluations.json # rapport des évaluations exportées du jeu (rapport-evaluations.md)
```

Le dictionnaire de vérification des réponses provient de [an-array-of-french-words](https://github.com/words/an-array-of-french-words) (licence MIT).

## Mode Dico (l'ordinateur devine)

En mode Dico, Syno est joué par Claude (API Anthropic, modèle `claude-opus-5-5`), appelé par le serveur du jeu
(`server/syno.ts`, route `POST /api/syno`). La clé API reste côté serveur et n'est jamais envoyée à la page.

1. Créez une clé sur https://console.anthropic.com.
2. Créez le fichier `pyramide-solo/.env.local` (non publié) contenant :

   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. Relancez `npm run dev`.

### Sans clé API (Claude Code)

Sans `ANTHROPIC_API_KEY`, le serveur appelle Claude Code en ligne de commande (`claude -p`, `server/claudeCli.ts`) :
Syno et l'arbitre sont alors joués sur votre abonnement Claude, sans facturation à l'usage. Prérequis :

1. Claude Code installé, puis connecté une fois dans un terminal : `claude auth login`.
2. Lancez `npm run dev` comme d'habitude, sans clé.

Limites : seulement en local (pas pour un site publié) ; plus lent que l'API (un processus par réponse) ; les réponses
comptent dans vos limites d'usage. Modèles : `claude-sonnet-5-5` pour Syno, l'alias `opus` pour l'arbitre, modifiables avec
`PYRAMIDE_MODELE_SYNO` et `PYRAMIDE_MODELE_ARBITRE`. Sur l'écran d'accueil, en rôle Dico, la case « Jouer sans clé API (Claude Code) » choisit le fournisseur sans relancer le serveur ; sans case cochée par le joueur, `PYRAMIDE_SYNO=api` ou `cli` force le fournisseur.

Le mode Dico fonctionne avec `npm run dev` ou `npm run preview` ; un site publié en statique (GitHub Pages)
n'a pas de serveur et ne propose que le mode Syno.

## Historique et comparaison avec l'ordinateur

Chaque partie est enregistrée dans le navigateur (onglet « Historique »), avec vos scores et la comparaison avec le score idéal obtenu par l'ordinateur sur le même contenu (ses pistes devinées par son Syno) :
- en Syno : vos réponses brique par brique, face à celles de Syno ordinateur ;
- en Dico : vos briques et les réponses de Syno ordinateur, face aux pistes de l'ordinateur.

Le score de l'ordinateur vient d'un test à l'aveugle joué comme en partie (`tools/test-syno-sequentiel.ts`), conservé dans `src/content/referenceSyno.ts`. Chaque référence porte l'empreinte du contenu testé : si une piste change, la comparaison est signalée comme périmée, et `npm run valider` liste les contenus à retester. Pour régénérer la référence après un nouveau test :

```bash
npx tsx tools/test-syno-sequentiel.ts reference tests-aveugle/<dossier>
```
