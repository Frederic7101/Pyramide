/**
 * Fournisseur « sans clé API » : Syno et l'arbitre sont joués par la CLI Claude Code (`claude -p`),
 * sur l'abonnement du joueur. Ne fonctionne qu'en local, avec Claude Code installé et connecté
 * (`claude auth login`). Chaque appel lance un processus : c'est plus lent que l'API.
 */
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";

/** Claude Code absent ou non connecté : à signaler au joueur avec la marche à suivre. */
export class ClaudeCliError extends Error {
  constructor(message: string, readonly code: "absent" | "non-connecte" | "echec" | "delai") {
    super(message);
  }
}

export interface SortieProcessus {
  code: number | null;
  stdout: string;
  stderr: string;
}

/** Lance un processus avec `entree` sur l'entrée standard (remplaçable dans les tests). */
export type Lanceur = (commande: string, args: string[], entree: string, delaiMs: number) => Promise<SortieProcessus>;

export const lanceurProcessus: Lanceur = (commande, args, entree, delaiMs) =>
  new Promise((resolve, reject) => {
    // Dossier neutre : Claude Code n'y trouve ni CLAUDE.md ni fichiers du projet.
    const enfant = spawn(commande, args, { cwd: tmpdir(), stdio: ["pipe", "pipe", "pipe"], windowsHide: true });
    let stdout = "";
    let stderr = "";
    const minuteur = setTimeout(() => {
      enfant.kill();
      reject(new ClaudeCliError(`Claude Code n'a pas répondu en ${Math.round(delaiMs / 1000)} s.`, "delai"));
    }, delaiMs);
    enfant.stdout.on("data", (m) => (stdout += m));
    enfant.stderr.on("data", (m) => (stderr += m));
    enfant.on("error", (e: NodeJS.ErrnoException) => {
      clearTimeout(minuteur);
      reject(
        e.code === "ENOENT"
          ? new ClaudeCliError("Claude Code est introuvable : installez-le (https://claude.com/claude-code) ou renseignez ANTHROPIC_API_KEY dans pyramide-solo/.env.local.", "absent")
          : e,
      );
    });
    enfant.on("close", (code) => {
      clearTimeout(minuteur);
      resolve({ code, stdout, stderr });
    });
    enfant.stdin.on("error", () => {});
    enfant.stdin.end(entree);
  });

export interface DemandeCli {
  systeme: string;
  message: string;
  /** Schéma JSON de la réponse attendue. */
  schema: object;
  /** Alias (« sonnet », « opus ») ou nom complet du modèle. */
  modele: string;
}

const MESSAGE_CONNEXION = "Claude Code n'est pas connecté : lancez « claude auth login » dans un terminal, puis réessayez (ou renseignez ANTHROPIC_API_KEY dans pyramide-solo/.env.local).";

/** Isole un objet JSON dans un texte (le modèle peut l'entourer de prose ou de balises). */
export function extraireJson(texte: string): unknown {
  const debut = texte.indexOf("{");
  const fin = texte.lastIndexOf("}");
  if (debut < 0 || fin < debut) throw new Error("Réponse de Claude Code sans JSON.");
  return JSON.parse(texte.slice(debut, fin + 1));
}

/** Interroge Claude Code et renvoie la réponse structurée. */
export async function demanderClaudeCli(demande: DemandeCli, lanceur: Lanceur = lanceurProcessus, delaiMs = 120_000): Promise<unknown> {
  const commande = process.env.CLAUDE_BIN || "claude";
  const args = [
    "-p",
    "--output-format", "json",
    "--model", demande.modele,
    // Aucun outil, aucune session enregistrée, aucun réglage utilisateur : une simple question-réponse.
    "--tools", "",
    "--no-session-persistence",
    "--setting-sources", "",
    "--system-prompt", `${demande.systeme}\n\nRéponds uniquement par un objet JSON conforme à ce schéma, sans autre texte : ${JSON.stringify(demande.schema)}`,
    "--json-schema", JSON.stringify(demande.schema),
  ];
  const sortie = await lanceur(commande, args, demande.message, delaiMs);
  let enveloppe: Record<string, unknown>;
  try {
    enveloppe = JSON.parse(sortie.stdout) as Record<string, unknown>;
  } catch {
    if (/not logged in|\/login/i.test(sortie.stdout + sortie.stderr)) throw new ClaudeCliError(MESSAGE_CONNEXION, "non-connecte");
    throw new ClaudeCliError(`Réponse illisible de Claude Code${sortie.stderr ? ` : ${sortie.stderr.trim().slice(0, 200)}` : "."}`, "echec");
  }
  const resultat = typeof enveloppe.result === "string" ? enveloppe.result : "";
  if (enveloppe.is_error === true) {
    if (/not logged in|\/login|authenticat|credential/i.test(resultat)) throw new ClaudeCliError(MESSAGE_CONNEXION, "non-connecte");
    throw new ClaudeCliError(`Claude Code a échoué : ${resultat.slice(0, 200) || "erreur inconnue"}`, "echec");
  }
  // Selon la version, la réponse structurée est dans `structured_output` ou dans le texte du résultat.
  if (typeof enveloppe.structured_output === "object" && enveloppe.structured_output !== null) return enveloppe.structured_output;
  return extraireJson(resultat);
}
