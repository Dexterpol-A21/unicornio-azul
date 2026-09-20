import { htmlToAgentMarkdown, estimateTokens } from './_lib/html-to-agent-markdown.js';

const SITE = 'https://unicornioazul.es';
const LLMS_LINK = '</llms.txt>; rel="describedby"; type="text/plain"; title="Unicornio Azul for LLMs"';
const CONTENT_SIGNAL = 'search=yes, ai-input=yes, ai-train=no';
const ASSET = /\.(?:js|css|map|png|jpe?g|gif|webp|avif|svg|ico|woff2?|ttf|txt|xml|json|pdf|webmanifest|mp4|mp3|md)$/i;

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  if (ASSET.test(url.pathname) || url.pathname.startsWith('/cdn-cgi/')) {
    return next();
  }

  if (!wantsMarkdown(request)) {
    const response = await next();
    return withDiscoveryHeaders(response, false);
  }

  const prebuilt = await fetchPrebuiltMarkdown(env, request, url);
  if (prebuilt) return prebuilt;

  const response = await next();
  const type = response.headers.get('Content-Type') || '';
  if (!response.ok || !type.includes('text/html')) {
    return withDiscoveryHeaders(response, false);
  }

  const html = await response.text();
  const markdown = htmlToAgentMarkdown(html, { origin: SITE });
  return markdownResponse(markdown, response);
}

function wantsMarkdown(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return false;
  return /\btext\/markdown\b/i.test(request.headers.get('Accept') || '');
}

async function fetchPrebuiltMarkdown(env, request, url) {
  const path = markdownAssetPath(url.pathname);
  if (!path || !env?.ASSETS) return null;

  const asset = await env.ASSETS.fetch(new Request(new URL(path, request.url), { method: 'GET' }));
  if (!asset.ok) return null;

  const markdown = await asset.text();
  if (!markdown.trim()) return null;
  return markdownResponse(markdown, asset);
}

function markdownAssetPath(pathname) {
  if (pathname === '/' || pathname === '') return '/index.md';
  const clean = pathname.replace(/\/$/, '');
  if (!clean || ASSET.test(clean)) return null;
  return `${clean}/index.md`;
}

function markdownResponse(markdown, source) {
  const headers = new Headers(source.headers);
  headers.set('Content-Type', 'text/markdown; charset=utf-8');
  headers.set('Content-Signal', CONTENT_SIGNAL);
  headers.set('x-markdown-tokens', String(estimateTokens(markdown)));
  headers.delete('Content-Length');
  headers.delete('Content-Encoding');
  return withDiscoveryHeaders(
    new Response(markdown, { status: 200, headers }),
    true,
  );
}

function withDiscoveryHeaders(response, isMarkdown) {
  const headers = new Headers(response.headers);
  const link = headers.get('Link') || '';
  if (!link.includes('rel="describedby"')) {
    headers.append('Link', LLMS_LINK);
  }
  const vary = headers.get('Vary');
  if (!vary) headers.set('Vary', 'Accept');
  else if (!/\bAccept\b/i.test(vary)) headers.set('Vary', `${vary}, Accept`);
  if (isMarkdown) {
    headers.set('Content-Type', 'text/markdown; charset=utf-8');
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
