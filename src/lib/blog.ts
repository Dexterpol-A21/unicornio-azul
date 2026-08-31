import { getCollection, type CollectionEntry } from 'astro:content';
import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Lang } from '../i18n/ui';

export type BlogCategory = 'negocios' | 'producto' | 'marketing' | 'escalado';

export const SITE_ORIGIN = 'https://unicornioazul.es';

export const BLOG_CATEGORIES: Record<
  BlogCategory,
  { label: Record<Lang, string>; href: Record<Lang, string>; color: string }
> = {
  negocios: {
    label: { es: 'Negocios', en: 'Business' },
    href: {
      es: '/que-hacemos/desarrollo-de-negocios',
      en: '/en/what-we-do/business-development',
    },
    color: '#0F2548',
  },
  producto: {
    label: { es: 'Producto y compras', en: 'Product & sourcing' },
    href: {
      es: '/que-hacemos/producto-compras-internacionales',
      en: '/en/what-we-do/product-international-sourcing',
    },
    color: '#163667',
  },
  marketing: {
    label: { es: 'Marketing', en: 'Marketing' },
    href: {
      es: '/que-hacemos/marketing-digital',
      en: '/en/what-we-do/digital-marketing',
    },
    color: '#00698D',
  },
  escalado: {
    label: { es: 'Escalado', en: 'Scale' },
    href: {
      es: '/que-hacemos/canales-digitales-escalado',
      en: '/en/what-we-do/digital-channels-scaling',
    },
    color: '#0088B3',
  },
};

export function getBlogEntries(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  return getCollection('blog', (entry) => entry.data.lang === lang && !entry.data.draft);
}

export async function getSortedBlogEntries(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const entries = await getBlogEntries(lang);
  return entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function blogHubUrl(lang: Lang): string {
  return getRelativeLocaleUrl(lang, '/ideas');
}

export function blogPostUrl(lang: Lang, urlSlug: string): string {
  return getRelativeLocaleUrl(lang, `/ideas/${urlSlug}`);
}

export function buildBlogPostingJsonLd(entry: CollectionEntry<'blog'>): string {
  const d = entry.data;
  const url = new URL(blogPostUrl(d.lang, d.urlSlug), SITE_ORIGIN).href;
  const imageUrl = new URL(d.heroImage, SITE_ORIGIN).href;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: d.title,
    description: d.description,
    url,
    datePublished: d.publishedAt.toISOString().slice(0, 10),
    dateModified: d.publishedAt.toISOString().slice(0, 10),
    inLanguage: d.lang,
    image: imageUrl,
    keywords: d.tags.join(', '),
    articleSection: BLOG_CATEGORIES[d.category].label[d.lang],
    author: {
      '@type': 'Person',
      name: 'Luis Chicharro',
      jobTitle: 'Fundador de Unicornio Azul',
      url: `${SITE_ORIGIN}/sobre-nosotros`,
      sameAs: ['https://www.linkedin.com/in/luis-chicharro/'],
      worksFor: {
        '@type': 'Organization',
        name: 'Unicornio Azul',
        url: SITE_ORIGIN,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Unicornio Azul',
      url: SITE_ORIGIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/images/logo-marino.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  });
}

export function buildBreadcrumbJsonLd(entry: CollectionEntry<'blog'>): string {
  const d = entry.data;
  const url = new URL(blogPostUrl(d.lang, d.urlSlug), SITE_ORIGIN).href;
  const hubUrl = new URL(blogHubUrl(d.lang), SITE_ORIGIN).href;
  const labels = d.lang === 'es'
    ? { home: 'Inicio', hub: 'Ideas & Experiencia' }
    : { home: 'Home', hub: 'Ideas & Experience' };
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: labels.home,
        item: d.lang === 'es' ? SITE_ORIGIN : `${SITE_ORIGIN}/en`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: labels.hub,
        item: hubUrl,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: d.title,
        item: url,
      },
    ],
  });
}
