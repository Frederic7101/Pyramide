import { describe, expect, it } from "vitest";
import { arbitrerCli } from "./arbitre";
import { ClaudeCliError, demanderClaudeCli, extraireJson, type Lanceur } from "./claudeCli";
import { choisirFournisseur } from "./pluginSyno";
import { devinerSynoCli } from "./syno";

const SCHEMA = { type: "object", properties: { reponse: { type: "string" } }, required: ["reponse"] };
const demande = { systeme: "Tu es Syno.", message: "1. bavardage", schema: SCHEMA, modele: "sonnet" };
const lanceurOk = (enveloppe: object): Lanceur & { appels: { commande: string; args: string[]; entree: string }[] } => {
  const appels: { commande: string; args: string[]; entree: string }[] = [];
  const f: Lanceur = async (commande, args, entree) => {
    appels.push({ commande, args, entree });
    return { code: 0, stdout: JSON.stringify(enveloppe), stderr: "" };
  };
  return Object.assign(f, { appels });
};

describe("claude -p", () => {
  it("passe le message sur l'entrée standard, sans outil ni session, et lit la réponse structurée", async () => {
    const lanceur = lanceurOk({ type: "result", is_error: false, result: "", structured_output: { reponse: "verbiage" } });
    expect(await demanderClaudeCli(demande, lanceur)).toEqual({ reponse: "verbiage" });
    const [appel] = lanceur.appels;
    expect(appel.entree).toBe("1. bavardage");
    expect(appel.args).toEqual(expect.arrayContaining(["-p", "--no-session-persistence", "--model", "sonnet"]));
    expect(appel.args[appel.args.indexOf("--tools") + 1]).toBe("");
    expect(appel.args).not.toContain("--dangerously-skip-permissions");
  });

  it("lit aussi un JSON placé dans le texte du résultat", async () => {
    const lanceur = lanceurOk({ is_error: false, result: 'Voici : ```json\n{"reponse":"larve"}\n```' });
    expect(await demanderClaudeCli(demande, lanceur)).toEqual({ reponse: "larve" });
    expect(extraireJson('x {"a":1} y')).toEqual({ a: 1 });
    expect(() => extraireJson("aucun json")).toThrow();
  });

  it("signale clairement que Claude Code n'est pas connecté", async () => {
    const lanceur = lanceurOk({ is_error: true, result: "Not logged in · Please run /login" });
    await expect(demanderClaudeCli(demande, lanceur)).rejects.toMatchObject({ code: "non-connecte", message: expect.stringContaining("claude auth login") });
    const sansJson: Lanceur = async () => ({ code: 1, stdout: "", stderr: "Please run /login" });
    await expect(demanderClaudeCli(demande, sansJson)).rejects.toBeInstanceOf(ClaudeCliError);
  });

  it("signale un échec ou une sortie illisible", async () => {
    await expect(demanderClaudeCli(demande, lanceurOk({ is_error: true, result: "boum" }))).rejects.toMatchObject({ code: "echec" });
    const illisible: Lanceur = async () => ({ code: 1, stdout: "n'importe quoi", stderr: "" });
    await expect(demanderClaudeCli(demande, illisible)).rejects.toMatchObject({ code: "echec" });
  });
});

describe("Syno et arbitre via Claude Code", () => {
  it("Syno reçoit les briques et renvoie sa proposition nettoyée", async () => {
    const lanceur = lanceurOk({ is_error: false, result: "", structured_output: { reponse: "  verbiage " } });
    const r = await devinerSynoCli({ type: "mot", briques: ["bavardage", "creux"], reponsesFausses: ["blabla"] }, lanceur);
    expect(r).toEqual({ reponse: "verbiage" });
    expect(lanceur.appels[0].entree).toContain("bavardage");
    expect(lanceur.appels[0].entree).toContain("blabla");
  });

  it("l'arbitre juge la dernière brique", async () => {
    const lanceur = lanceurOk({ is_error: false, result: "", structured_output: { valide: false, certain: true, motif: "racine", regle: "4.3.3", explication: "Même racine." } });
    const v = await arbitrerCli({ type: "mot", motADeviner: "seul", briques: ["isolé"] }, lanceur);
    expect(v).toMatchObject({ valide: false, certain: true, motif: "racine" });
    expect(lanceur.appels[0].entree).toContain("seul");
  });
});

describe("choix du fournisseur", () => {
  it("clé API présente : API ; absente : Claude Code ; PYRAMIDE_SYNO force le choix", () => {
    expect(choisirFournisseur("sk-ant-x", undefined)).toBe("api");
    expect(choisirFournisseur(undefined, undefined)).toBe("cli");
    expect(choisirFournisseur("sk-ant-x", "cli")).toBe("cli");
    expect(choisirFournisseur(undefined, "api")).toBe("api");
    expect(choisirFournisseur("sk-ant-x", "n'importe quoi")).toBe("api");
  });
});

describe("choix du joueur", () => {
  it("le choix du joueur l'emporte sur PYRAMIDE_SYNO et sur la clé", () => {
    expect(choisirFournisseur("sk-ant-x", "api", "cli")).toBe("cli");
    expect(choisirFournisseur(undefined, "cli", "api")).toBe("api");
    expect(choisirFournisseur("sk-ant-x", undefined, "n'importe quoi")).toBe("api");
  });
});
