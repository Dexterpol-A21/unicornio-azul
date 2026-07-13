import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:4321';
const OUT = 'public/images';

mkdirSync(OUT, { recursive: true });

const pages = [
  { url: '/og/desarrollo-de-negocios', file: 'og-desarrollo-negocios', label: 'Desarrollo de Negocios' },
  { url: '/og/producto-compras',         file: 'og-producto-compras',     label: 'Producto y Compras' },
  { url: '/og/marketing-digital',        file: 'og-marketing-digital',    label: 'Marketing Digital' },
  { url: '/og/escalado',                 file: 'og-escalado',             label: 'Escalado Internacional' },
];

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

for (const p of pages) {
  console.log(`📸 ${p.label}...`);
  await page.goto(`${BASE}${p.url}`, { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 800));

  await page.screenshot({
    path: `${OUT}/${p.file}.jpg`,
    type: 'jpeg',
    quality: 90,
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  console.log(`   ✅ ${p.file}.jpg`);
}

await browser.close();
console.log('\n✨ Todas las OG images capturadas!');
