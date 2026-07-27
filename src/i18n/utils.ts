import { ui, type Lang, type TranslationKey } from './ui';
import { getRelativeLocaleUrl } from 'astro:i18n';

// ─── Route mapping (key → path per locale) ───
const ROUTE_MAP: Record<string, Record<Lang, string>> = {
  route_home:                  { es: '/',                                     en: '/en' },
  route_negocios:               { es: '/que-hacemos/desarrollo-de-negocios',   en: '/en/what-we-do/business-development' },
  route_producto:               { es: '/que-hacemos/producto-compras-internacionales', en: '/en/what-we-do/product-international-sourcing' },
  route_marketing:              { es: '/que-hacemos/marketing-digital',        en: '/en/what-we-do/digital-marketing' },
  route_escalado:               { es: '/que-hacemos/canales-digitales-escalado', en: '/en/what-we-do/digital-channels-scaling' },
  route_como_trabajamos:        { es: '/como-trabajamos',                      en: '/en/how-we-work' },
  route_metodologia_sorie:      { es: '/metodologia-sorie',                    en: '/en/sorie-methodology' },
  route_sobre_nosotros:         { es: '/sobre-nosotros',                       en: '/en/about-us' },
  route_contacto:               { es: '/contacto',                             en: '/en/contact' },
  route_empezar:                { es: '/empezar',                              en: '/en/get-started' },
  route_casos:                  { es: '/casos',                                en: '/en/case-studies' },
  route_propuestas:             { es: '/propuestas',                           en: '/en/proposals' },
  route_aviso_legal:            { es: '/aviso-legal',                          en: '/en/legal-notice' },
  route_privacidad:             { es: '/privacidad',                           en: '/en/privacy' },
};

// Build reverse index: path (without trailing slash) → route key
const PATH_TO_KEY: Record<Lang, Map<string, string>> = { es: new Map(), en: new Map() };
for (const [key, paths] of Object.entries(ROUTE_MAP)) {
  for (const [lang, path] of Object.entries(paths)) {
    const normalized = path.replace(/\/$/, '') || '/';
    PATH_TO_KEY[lang as Lang].set(normalized, key);
  }
}

/**
 * Given a URL and target locale, returns the alternate locale URL
 * using the explicit route mapping. Falls back to the simple prefix approach
 * if no mapping is found.
 */
export function getAltLangUrl(url: URL, targetLang: Lang): string {
  // Strip the locale prefix from the URL to get the canonical path
  let canonical = url.pathname;
  // Remove trailing slash for matching
  canonical = canonical.replace(/\/$/, '') || '/';

  // Try to find the route key from the current locale
  const currentLang = canonical.startsWith('/en') ? 'en' : 'es';

  // If currentLang is 'en', also try without the /en prefix
  let lookupPath = canonical;
  if (currentLang === 'en' && canonical.startsWith('/en')) {
    lookupPath = `/en${canonical.slice(3)}`; // keep the /en prefix for the EN map
  }

  const key = PATH_TO_KEY[currentLang].get(lookupPath);
  if (key) {
    const targetPath = ROUTE_MAP[key][targetLang];
    // Add trailing slash back
    return targetPath.endsWith('/') ? targetPath : `${targetPath}/`;
  }

  // Fallback: use Astro's built-in relative URL
  const fallbackPath = canonical === '/' ? '/' : canonical;
  return getRelativeLocaleUrl(targetLang, fallbackPath);
}

/**
 * Generate a localized href for a route key in the current locale.
 * Convenience wrapper for getRelativeLocaleUrl with route key lookup.
 */
export function localizeRoute(lang: Lang, routeKey: string): string {
  // routeKey is like 'route.negocios' or 'route_negocios'
  const key = routeKey.startsWith('route.') ? routeKey.replace('.', '_') : routeKey;

  const mapEntry = ROUTE_MAP[key];
  if (mapEntry && mapEntry[lang]) {
    const path = mapEntry[lang];
    return getRelativeLocaleUrl(lang, path);
  }

  // Fallback
  return getRelativeLocaleUrl(lang, '/');
}

/**
 * Returns a type-safe translation function and metadata for a given locale.
 * Falls back to the default locale ('es') if the requested one is not found.
 */
export function useTranslations(locale: Lang) {
  const dict = ui[locale] ?? ui['es'];

  function t(key: TranslationKey): string {
    return dict[key] ?? ui['es'][key] ?? key;
  }

  /**
   * Deduce the current locale from the URL pathname.
   * With prefixDefaultLocale: false, 'es' lives at root and 'en' at /en/.
   */
  function getLocaleFromPath(pathname: string): Lang {
    if (pathname.startsWith('/en/') || pathname === '/en') return 'en';
    return 'es';
  }

  return { t, dict, locale };
}

/**
 * Convenience: extract the locale from Astro.url and return the t function.
 */
export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en/') || url.pathname === '/en' ? 'en' : 'es';
}
