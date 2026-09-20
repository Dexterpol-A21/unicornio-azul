import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { htmlToAgentMarkdown } from '../functions/_lib/html-to-agent-markdown.js';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(ROOT, '..', 'dist');
const ORIGIN = 'https://unicornioazul.es';

const htmlFiles = await walkHtml(DIST);
let written = 0;

for (const file of htmlFiles) {
  const rel = path.relative(DIST, file).replaceAll('\\', '/');
  if (rel.startsWith('og/')) continue;

  const html = await readFile(file, 'utf8');
  const markdown = htmlToAgentMarkdown(html, { origin: ORIGIN });
  const out = file.replace(/\.html$/i, '.md');
  await writeFile(out, markdown);
  written += 1;
}

console.log(`Generated ${written} agent markdown files in dist/`);

async function walkHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walkHtml(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}
