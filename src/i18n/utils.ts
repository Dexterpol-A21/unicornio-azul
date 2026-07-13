import { ui, type Lang, type TranslationKey } from './ui';

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
