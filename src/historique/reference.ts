/**
 * Référence de Syno joué par l'ordinateur : résultat d'un test à l'aveugle (tools/test-syno-sequentiel.ts),
 * joué comme en partie. Elle sert de point de comparaison au joueur humain, tant que le contenu n'a pas
 * changé depuis le test (même empreinte).
 */
export interface ReferenceSyno {
  type: "enigme" | "noms";
  /** Empreinte du contenu testé (voir empreinte.ts). */
  empreinte: string;
  /** Date du test (AAAA-MM-JJ). */
  date: string;
  /** Score obtenu : total de l'énigme (mots + bonus + solution), ou nombre de noms trouvés. */
  score: number;
  /** Pour chaque mot ou nom : numéro de la brique où il a été trouvé, ou null s'il ne l'a pas été. */
  trouveA: (number | null)[];
  /** Réponses données pour chaque mot ou nom, dans l'ordre. */
  reponses: string[][];
  /** Énigme : bonus, solution trouvée et propositions de solution. */
  bonus?: number;
  solutionTrouvee?: boolean;
  essaisSolution?: string[];
}
