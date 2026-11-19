import { env } from 'cloudflare:workers';
import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Lang } from '../i18n/ui';
import { renderMarkdown, type MarkdownHeading } from './markdown';
import { DATASET, PROJECT_ID, sanityClient } from './sanity';

export type BlogCategory = 'negocios' | 'producto' | 'marketing' | 'escalado';

export type BlogEntry = {
  id: string;
  html: string;
  headings: MarkdownHeading[];
  data: {
    title: string;
    description: string;
    lang: Lang;
    urlSlug: string;
    publishedAt: Date;
    category: BlogCategory;
    heroImage: string;
    heroImageAlt: string;
    readMinutes?: number;
    tags: string[];
    featured: boolean;
  };
};

const CATEGORIES = new Set<BlogCategory>(['negocios', 'producto', 'marketing', 'escalado']);

type SanityPost = {
  _id: string;
  title?: string | null;
  description?: string | null;
  lang?: string | null;
  urlSlug?: string | null;
  publishedAt?: string | null;
  category?: string | null;
  heroImage?: string | null;
  heroImageAlt?: string | null;
  readMinutes?: number | null;
  tags?: string[] | null;
  featured?: boolean | null;
  body?: string | null;
};

const POSTS_QUERY = `*[_type == "post" && draft != true && !(_id in path("drafts.**"))]{
  _id, title, description, lang, urlSlug, publishedAt, category,
  heroImage, heroImageAlt, readMinutes, tags, featured, body
}`;

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
    color: '#0B4F7A',
  },
  escalado: {
    label: { es: 'Escalado', en: 'Scale' },
    href: {
      es: '/que-hacemos/canales-digitales-escalado',
      en: '/en/what-we-do/digital-channels-scaling',
    },
    color: '#00698D',
  },
};

export async function getBlogEntries(lang: Lang): Promise<BlogEntry[]> {
  const posts = await fetchPosts();
  return posts.filter((entry) => entry.data.lang === lang);
}

export async function getSortedBlogEntries(lang: Lang): Promise<BlogEntry[]> {
  const entries = await getBlogEntries(lang);
  return entries.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

export async function getAllBlogEntries(): Promise<BlogEntry[]> {
  const posts = await fetchPosts();
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}

async function fetchPosts(): Promise<BlogEntry[]> {
  let posts: SanityPost[];
  try {
    posts = await sanityClient.fetch<SanityPost[]>(POSTS_QUERY);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`No se pudieron leer los artículos de Sanity (${PROJECT_ID}/${DATASET}): ${message}`);
  }

  return posts.flatMap((post) => {
    const entry = toEntry(post);
    return entry ? [entry] : [];
  });
}

function toEntry(post: SanityPost): BlogEntry | null {
  if (post.lang !== 'es' && post.lang !== 'en') return null;
  if (!post.category || !CATEGORIES.has(post.category as BlogCategory)) return null;
  if (!post.title || !post.description || !post.urlSlug || !post.publishedAt) return null;
  if (!post.heroImage || !post.heroImageAlt) return null;

  const publishedAt = new Date(post.publishedAt);
  if (Number.isNaN(publishedAt.valueOf())) return null;

  const rendered = renderMarkdown(post.body ?? '');
  const readMinutes =
    typeof post.readMinutes === 'number' && Number.isInteger(post.readMinutes) && post.readMinutes > 0
      ? post.readMinutes
      : undefined;

  return {
    id: post._id,
    html: rendered.html,
    headings: rendered.headings,
    data: {
      title: post.title,
      description: post.description,
      lang: post.lang,
      urlSlug: post.urlSlug,
      publishedAt,
      category: post.category as BlogCategory,
      heroImage: post.heroImage,
      heroImageAlt: post.heroImageAlt,
      ...(readMinutes ? { readMinutes } : {}),
      tags: post.tags ?? [],
      featured: post.featured ?? false,
    },
  };
}

export async function missingArticle(request: Request): Promise<Response> {
  const assets = env.ASSETS;
  if (assets) {
    const file = await assets.fetch(new Request(new URL('/404.html', request.url)));
    if (file.ok) {
      const headers = new Headers(file.headers);
      headers.set('Cache-Control', 'no-store');
      return new Response(file.body, { status: 404, headers });
    }
  }
  return new Response('Not found', {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-ES' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function blogHubUrl(lang: Lang): string {
  return getRelativeLocaleUrl(lang, '/ideas');
}

export function blogPostUrl(lang: Lang, urlSlug: string): string {
  return getRelativeLocaleUrl(lang, `/ideas/${urlSlug}`);
}

export function buildBlogPostingJsonLd(entry: BlogEntry): string {
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

export function buildBreadcrumbJsonLd(entry: BlogEntry): string {
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
