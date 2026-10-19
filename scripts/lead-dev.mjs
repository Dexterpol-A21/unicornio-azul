import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { onRequest } from '../functions/api/lead.js';

function loadEnv(file) {
  const env = {};
  let raw = '';
  try {
    raw = readFileSync(file, 'utf8');
  } catch {
    return env;
  }
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const i = trimmed.indexOf('=');
    if (i === -1) continue;
    const key = trimmed.slice(0, i).trim();
    let value = trimmed.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const env = loadEnv(new URL('../.dev.vars', import.meta.url));
const port = 8788;

const server = createServer(async (req, res) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = Buffer.concat(chunks);
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    if (['host', 'connection', 'content-length', 'transfer-encoding'].includes(key)) continue;
    headers.set(key, Array.isArray(value) ? value.join(', ') : value);
  }
  const request = new Request(new URL(req.url || '/', `http://127.0.0.1:${port}`), {
    method: req.method,
    headers,
    body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
  });

  try {
    const response = await onRequest({ request, env });
    const out = Buffer.from(await response.arrayBuffer());
    const outHeaders = {};
    response.headers.forEach((value, key) => {
      outHeaders[key] = value;
    });
    res.writeHead(response.status, outHeaders);
    res.end(out);
    if (req.method === 'POST') {
      console.log(`POST /api/lead → ${response.status}`);
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: false, error: 'send' }));
  }
});

server.listen(port, '127.0.0.1', () => {
  const ready = Boolean(env.RESEND_API_KEY);
  console.log(`Lead API on http://127.0.0.1:${port}/api/lead (${ready ? 'Resend listo' : 'falta RESEND_API_KEY'})`);
});
