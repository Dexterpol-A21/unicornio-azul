/**
 * HTML → agent markdown (frontmatter + main + JSON-LD).
 * Works in Node (build) and Cloudflare Pages Functions (runtime fallback).
 * Converts rendered HTML, so a future CMS still works as long as pages output HTML.
 */

const BLOCK_TAGS =
  /<(script|style|noscript|iframe|svg|header|footer|nav|template)[^>]*>[\s\S]*?<\/\1>/gi;

export function estimateTokens(text) {
  return Math.max(1, Math.ceil(String(text).length / 4));
}

export function htmlToAgentMarkdown(html, { origin = 'https://unicornioazul.es' } = {}) {
  const title = first(
    metaContent(html, 'og:title'),
    decodeEntities(stripTags(tagInner(html, 'title'))),
  );
  const description = first(
    metaContent(html, 'description'),
    metaContent(html, 'og:description'),
  );
  const image = metaContent(html, 'og:image');
  const jsonLd = extractJsonLd(html);

  let main = tagInner(html, 'main') || tagInner(html, 'body') || html;
  main = main.replace(BLOCK_TAGS, '');
  const body = htmlToMarkdown(main, origin).trim();

  const lines = ['---'];
  if (title) lines.push(`title: ${yamlQuote(title)}`);
  if (description) lines.push(`description: ${yamlQuote(description)}`);
  if (image) lines.push(`image: ${yamlQuote(absolutize(image, origin))}`);
  lines.push('---', '', body || title);

  if (jsonLd.length) {
    lines.push('', '```json', jsonLd.join('\n'), '```');
  }

  return `${lines.join('\n').trim()}\n`;
}

function htmlToMarkdown(html, origin) {
  let s = String(html);
  s = s.replace(/<!--[\s\S]*?-->/g, '');
  s = s.replace(BLOCK_TAGS, '');
  s = s.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, (full, inner) => {
    if (/<(?:h[1-6]|p|ul|ol|div|section|article|li|figure)\b/i.test(inner)) return inner;
    return full;
  });

  s = s.replace(/<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi, (_, code) => {
    return `\n\n\`\`\`\n${decodeEntities(stripTags(code)).trim()}\n\`\`\`\n\n`;
  });
  s = s.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, code) => {
    return `\n\n\`\`\`\n${decodeEntities(stripTags(code)).trim()}\n\`\`\`\n\n`;
  });

  s = s.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n, inner) => {
    return `\n\n${'#'.repeat(Number(n))} ${inline(inner, origin)}\n\n`;
  });

  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) => {
    const text = htmlToMarkdown(inner, origin)
      .trim()
      .split('\n')
      .map((line) => `> ${line}`)
      .join('\n');
    return `\n\n${text}\n\n`;
  });

  s = s.replace(/<img\b[^>]*>/gi, (tag) => {
    const src = attr(tag, 'src');
    const alt = attr(tag, 'alt') || '';
    if (!src) return '';
    return `\n\n![${alt}](${absolutize(src, origin)})\n\n`;
  });

  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, inner) => {
    return `\n- ${inline(inner, origin)}`;
  });

  s = s.replace(/<\/(ul|ol)>/gi, '\n\n');
  s = s.replace(/<(ul|ol)[^>]*>/gi, '\n');

  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, inner) => `\n\n${inline(inner, origin)}\n\n`);
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<hr\s*\/?>/gi, '\n\n---\n\n');
  s = s.replace(/<\/(div|section|article|figure|figcaption)>/gi, '\n\n');
  s = s.replace(/<(div|section|article|figure|figcaption)[^>]*>/gi, '\n');

  s = inline(s, origin);
  s = s.replace(/[ \t]+\n/g, '\n');
  s = s.replace(/\n{3,}/g, '\n\n');
  return s.trim();
}

function inline(html, origin) {
  let s = String(html);
  s = s.replace(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, (full, text) => {
    const href = attr(full, 'href');
    const label = decodeEntities(stripTags(text)).replace(/\s+/g, ' ').trim();
    if (!label) return '';
    if (!href || href.startsWith('javascript:')) return label;
    return `[${label}](${absolutize(href, origin)})`;
  });
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, inner) => {
    const t = decodeEntities(stripTags(inner)).trim();
    return t ? `**${t}**` : '';
  });
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, inner) => {
    const t = decodeEntities(stripTags(inner)).trim();
    return t ? `*${t}*` : '';
  });
  s = s.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, inner) => {
    return `\`${decodeEntities(stripTags(inner)).trim()}\``;
  });
  s = decodeEntities(stripTags(s));
  return s.replace(/[ \t]+/g, ' ').trim();
}

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const raw = match[1].trim();
    if (!raw) continue;
    try {
      blocks.push(JSON.stringify(JSON.parse(raw)));
    } catch {
      blocks.push(raw);
    }
  }
  return blocks;
}

function tagInner(html, tag) {
  const match = html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
  return match ? match[1] : '';
}

function metaContent(html, key) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const a = html.match(
    new RegExp(`<meta[^>]+(?:property|name)=["']${escaped}["'][^>]+content=["']([^"']*)["']`, 'i'),
  );
  if (a?.[1]) return decodeEntities(a[1]).trim();
  const b = html.match(
    new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:property|name)=["']${escaped}["']`, 'i'),
  );
  return b?.[1] ? decodeEntities(b[1]).trim() : '';
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'));
  return match ? decodeEntities(match[1]).trim() : '';
}

function stripTags(html) {
  return String(html).replace(/<[^>]+>/g, ' ');
}

function decodeEntities(text) {
  return String(text)
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function absolutize(href, origin) {
  if (!href) return href;
  if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href;
  try {
    return new URL(href, origin).href;
  } catch {
    return href;
  }
}

function yamlQuote(value) {
  const text = String(value).replace(/\s+/g, ' ').trim();
  if (text === '') return '""';
  if (/[:#{}[\],&*?|<>=!%@`'"\\\n]/.test(text)) {
    return `"${text.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return text;
}

function first(...values) {
  return values.find((value) => value && String(value).trim()) || '';
}
