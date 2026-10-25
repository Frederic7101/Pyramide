/**
 * Plugin Vite : expose POST /api/syno (Syno devine) et POST /api/arbitre (l'arbitre juge une piste)
 * sur le serveur de développement et de prévisualisation.
 * Deux fournisseurs :
 * - l'API Anthropic, si ANTHROPIC_API_KEY est renseignée (environnement ou .env.local), lue côté serveur ;
 * - sinon Claude Code en ligne de commande (« claude -p »), sur l'abonnement du joueur, en local.
 * Le joueur peut choisir dans le jeu (case à cocher, en-tête X-Pyramide-Fournisseur) ; sinon PYRAMIDE_SYNO=api
 * ou PYRAMIDE_SYNO=cli force l'un des deux. GET /api/statut indique ce que le serveur propose.
 */
import Anthropic from "@anthropic-ai/sdk";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Connect, Plugin } from "vite";
import type { DemandeArbitre, DemandeSyno } from "../src/engine/synoTypes";
import { arbitrer, arbitrerCli } from "./arbitre";
import { ClaudeCliError } from "./claudeCli";
import { avecGardeFamille, creerClient, devinerSyno, devinerSynoCli } from "./syno";

function lireCorps(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let corps = "";
    req.on("data", (morceau) => (corps += morceau));
    req.on("end", () => resolve(corps));
    req.on("error", reject);
  });
}

function repondre(res: ServerResponse, statut: number, donnees: unknown): void {
  res.statusCode = statut;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(donnees));
}

function estDemandeSyno(x: unknown): x is DemandeSyno {
  if (typeof x !== "object" || x === null) return false;
  const d = x as Record<string, unknown>;
  return (d.type === "mot" || d.type === "nom" || d.type === "solution") && Array.isArray(d.briques) && Array.isArray(d.reponsesFausses);
}

function estDemandeArbitre(x: unknown): x is DemandeArbitre {
  if (typeof x !== "object" || x === null) return false;
  const d = x as Record<string, unknown>;
  return (d.type === "mot" || d.type === "nom") && typeof d.motADeviner === "string" && Array.isArray(d.briques) && d.briques.length > 0;
}

/** Fournisseur retenu : le choix du joueur, puis PYRAMIDE_SYNO, puis la clé API si elle existe, sinon Claude Code. */
export function choisirFournisseur(apiKey: string | undefined, force: string | undefined = process.env.PYRAMIDE_SYNO, choixJoueur?: string): "api" | "cli" {
  for (const choix of [choixJoueur, force]) if (choix === "api" || choix === "cli") return choix;
  return apiKey ? "api" : "cli";
}

export function pluginSyno(apiKey: string | undefined): Plugin {
  let client: Anthropic | null = null;
  const statut: Connect.NextHandleFunction = (req, res) => {
    if (req.method !== "GET") return repondre(res, 405, { erreur: "Méthode non autorisée" });
    repondre(res, 200, { cleApi: Boolean(apiKey), defaut: choisirFournisseur(apiKey) });
  };

  /** Crée un gestionnaire de route : valide la demande, appelle Claude, traduit les erreurs pour le joueur. */
  function route<T>(estValide: (x: unknown) => x is T, traiter: (c: Anthropic, d: T) => Promise<unknown>, traiterCli: (d: T) => Promise<unknown>): Connect.NextHandleFunction {
    return async (req, res) => {
      if (req.method !== "POST") return repondre(res, 405, { erreur: "Méthode non autorisée" });
      try {
        const demande: unknown = JSON.parse(await lireCorps(req));
        if (!estValide(demande)) return repondre(res, 400, { erreur: "Demande invalide" });
        const choix = req.headers["x-pyramide-fournisseur"];
        if (choisirFournisseur(apiKey, undefined, Array.isArray(choix) ? choix[0] : choix) === "cli") return repondre(res, 200, await traiterCli(demande));
        client ??= creerClient(apiKey);
        repondre(res, 200, await traiter(client, demande));
      } catch (erreur) {
        if (erreur instanceof ClaudeCliError) return repondre(res, erreur.code === "delai" ? 504 : 503, { erreur: erreur.message });
        if (erreur instanceof Anthropic.AuthenticationError) {
          return repondre(res, 503, { erreur: "Clé API Anthropic absente ou invalide : renseignez ANTHROPIC_API_KEY dans pyramide-solo/.env.local." });
        }
        if (erreur instanceof Anthropic.RateLimitError) return repondre(res, 429, { erreur: "Trop de demandes, réessayez dans un instant." });
        if (erreur instanceof Anthropic.APIError) return repondre(res, 502, { erreur: `Erreur de l'API (${erreur.status}).` });
        const message = erreur instanceof Error ? erreur.message : "Erreur inconnue";
        // Sans clé ni profil, le SDK échoue avant tout appel : on le signale comme une clé absente.
        if (/api.?key|apiKey|authToken|credential/i.test(message)) {
          return repondre(res, 503, { erreur: "Clé API Anthropic absente : renseignez ANTHROPIC_API_KEY dans pyramide-solo/.env.local." });
        }
        repondre(res, 500, { erreur: message });
      }
    };
  }

  const syno = route(
    estDemandeSyno,
    (c, d) => avecGardeFamille(d, (x) => devinerSyno(c, x)),
    (d) => avecGardeFamille(d, (x) => devinerSynoCli(x)),
  );
  const arbitre = route(estDemandeArbitre, arbitrer, (d) => arbitrerCli(d));
  return {
    name: "pyramide-syno",
    configureServer(server) {
      server.middlewares.use("/api/syno", syno);
      server.middlewares.use("/api/arbitre", arbitre);
      server.middlewares.use("/api/statut", statut);
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/syno", syno);
      server.middlewares.use("/api/arbitre", arbitre);
      server.middlewares.use("/api/statut", statut);
    },
  };
}
