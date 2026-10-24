import { loadEnv } from "vite";
import { defineConfig } from "vitest/config";
import { pluginSyno } from "./server/pluginSyno";

export default defineConfig(({ mode }) => {
  // Lit .env.local (non publié) : ANTHROPIC_API_KEY reste côté serveur, jamais dans la page.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // Chemins relatifs : le site fonctionne sur GitHub Pages ou Netlify, dans un sous-dossier.
    base: "./",
    plugins: [pluginSyno(env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY)],
    test: {
      include: ["src/**/*.test.ts", "tools/**/*.test.ts", "server/**/*.test.ts"],
    },
  };
});
