import { SITE_ORIGIN, blogHubUrl, blogPostUrl, getAllBlogEntries } from '@/lib/blog';

export const prerender = false;

export async function GET() {
  const entries = await getAllBlogEntries();
  const bySlug = new Map<string, { es?: (typeof entries)[number]; en?: (typeof entries)[number] }>();

  for (const entry of entries) {
    const pair = bySlug.get(entry.data.urlSlug) ?? {};
    pair[entry.data.lang] = entry;
    bySlug.set(entry.data.urlSlug, pair);
  }

  const urls = [
    urlNode(absolute(blogHubUrl('es')), absolute(blogHubUrl('en'))),
    ...[...bySlug.values()].map((pair) => {
      const es = pair.es ? absolute(blogPostUrl('es', pair.es.data.urlSlug)) : undefined;
      const en = pair.en ? absolute(blogPostUrl('en', pair.en.data.urlSlug)) : undefined;
      const lastmod = latest(pair.es?.data.publishedAt, pair.en?.data.publishedAt);
      return [es ? loc(es, lastmod, es, en) : '', en ? loc(en, lastmod, es, en) : ''].join('');
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function absolute(path: string): string {
  return new URL(path, SITE_ORIGIN).href;
}

function latest(a?: Date, b?: Date): string | undefined {
  const time = Math.max(a?.valueOf() ?? 0, b?.valueOf() ?? 0);
  return time ? new Date(time).toISOString().slice(0, 10) : undefined;
}

function urlNode(es: string, en: string): string {
  return loc(es, undefined, es, en) + loc(en, undefined, es, en);
}

function loc(href: string, lastmod: string | undefined, es?: string, en?: string): string {
  const alternates = [
    es ? `<xhtml:link rel="alternate" hreflang="es" href="${escapeXml(es)}"/>` : '',
    en ? `<xhtml:link rel="alternate" hreflang="en" href="${escapeXml(en)}"/>` : '',
  ].join('');
  return `<url><loc>${escapeXml(href)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}${alternates}</url>`;
}

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
