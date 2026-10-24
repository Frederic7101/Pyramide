/**
 * Suffixes ayant valeur de racine (règlement FFCP, pp. 26-27, « liste exhaustive »), sans accents,
 * regroupés par famille : deux suffixes d'une même famille ont la même racine (ex. -logie et -logue).
 * Un mot à deviner et une brique qui se terminent par des suffixes d'une même famille sont interdits.
 */
export const FAMILLES_SUFFIXES: readonly (readonly string[])[] = [
  ["agogue", "agogie"], ["algie", "algique"], ["andre", "andrie"], ["anthe"],
  ["anthrope", "anthropie", "anthropique"], ["arche", "archie", "archique", "arque"], ["bare"], ["blaste"],
  ["bole", "bolique"], ["carpe", "carpien"], ["caule"], ["cele"], ["cene"], ["centese"],
  ["cephale", "cephalie"], ["chrome", "chromie"], ["chrone", "chronique", "chronisme"], ["cide"],
  ["cole", "culteur", "culture"], ["colore"], ["cope"], ["coque"], ["cosme", "cosmie", "cosmique"],
  ["crate", "cratie", "cratique"], ["cycle"], ["cyste"], ["cyte"], ["dactyle"], ["dendron"],
  ["derme", "dermie", "dermique"], ["doxe"], ["drome", "dromie"], ["dynamie", "dyne", "dynamique"],
  ["edre"], ["emie"], ["erese"], ["ergie", "ergique", "urgie", "urgique"], ["esthesie"], ["fere"],
  ["flore"], ["forme"], ["fuge"], ["game", "gamie"], ["gastre"], ["gee"],
  ["genese", "genesie", "genie", "gene", "gone", "gonie"], ["glosse"], ["gnose", "gnosie", "gnostique"],
  ["gonal"], ["grade"], ["gramme", "graphe", "graphie", "graphique"], ["gyne"], ["helie"],
  ["hydre", "hydrie", "hydrique"], ["iatre", "iatrie"], ["lalie"], ["latere"], ["lingual", "lingue"],
  ["lite", "lithe", "lithique"], ["loge", "logicien", "logie", "logique", "logue"], ["loque"],
  ["lyse", "lythique"], ["machie"], ["mancie", "mancien"], ["mane", "manie"], ["megalie"],
  ["metrie", "metrique"], ["mnese", "mnesie", "mnesique"], ["mobile"], ["morphe", "morphique", "morphisme"],
  ["myces", "mycetes"], ["naute", "nautique", "nautisme"], ["nome", "nomie", "nomique"], ["odie"],
  ["odontie"], ["oidal", "oide"], ["onyme", "onymique"], ["ophtalmie", "ophtalmique"], ["ope", "opsie"],
  ["oure"], ["pare"], ["pathe", "pathie", "pathique"], ["pede", "pedie"], ["phage", "phagie", "phagique"],
  ["phane", "phanie"], ["phile", "philie"], ["phobe", "phobie"], ["phone", "phonie", "phonique"],
  ["phore"], ["phylle"], ["physe"], ["phyte"], ["pitheque"], ["plasie", "plasme", "plaste", "plastie"],
  ["plegie", "plegique"], ["pode"], ["pole", "polite"], ["poncture", "puncture"], ["ptere"],
  ["pyge", "pygie"], ["rostre"], ["rragie", "rrhagie"], ["rrhee"], ["saure"], ["scaphe"],
  ["scope", "scopie", "scopique"], ["sepsie", "septique"], ["some"], ["sophe", "sophie", "sophique"],
  ["sperme"], ["sphere", "spherique"], ["stat", "statique"], ["sthenie", "sthenique"], ["taphe"],
  ["taxie"], ["technie", "technique"], ["theque"], ["therapie", "therapique"],
  ["therme", "thermie", "thermique"], ["thee", "theisme", "theiste"], ["thymie", "thymique"],
  ["tome", "tomie", "ectomie"], ["tonie", "tonique"], ["tope"], ["triche"],
  ["trope", "tropie", "tropisme"], ["trophie", "trophique"], ["type", "typie"], ["urese", "urie"],
  ["valent"], ["vore"],
];

/** Famille du plus long suffixe à valeur de racine qui termine `mot` (déjà normalisé), ou null. */
export function familleSuffixe(mot: string): { suffixe: string; famille: readonly string[] } | null {
  let meilleur: { suffixe: string; famille: readonly string[] } | null = null;
  for (const famille of FAMILLES_SUFFIXES) {
    for (const suffixe of famille) {
      // Le mot doit être plus long que le suffixe : « type » seul n'est pas un suffixe.
      if (mot.length > suffixe.length && mot.endsWith(suffixe) && (!meilleur || suffixe.length > meilleur.suffixe.length)) {
        meilleur = { suffixe, famille };
      }
    }
  }
  return meilleur;
}
