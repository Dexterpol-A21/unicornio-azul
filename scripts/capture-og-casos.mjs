import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:4321';
const OUT = 'public/images';

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

console.log('📸 Casos (logo)...');
await page.goto(`${BASE}/og/casos`, { waitUntil: 'networkidle0', timeout: 20000 });
await new Promise(r => setTimeout(r, 800));

await page.screenshot({
  path: `${OUT}/og-casos.jpg`,
  type: 'jpeg',
  quality: 90,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

console.log('   ✅ og-casos.jpg');
await browser.close();
