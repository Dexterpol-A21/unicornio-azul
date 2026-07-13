import puppeteer from 'puppeteer';

const BASE = 'http://localhost:4321';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

console.log('📸 Marketing Digital...');
await page.goto(`${BASE}/og/marketing-digital`, { waitUntil: 'networkidle0', timeout: 15000 });
await new Promise(r => setTimeout(r, 800));

await page.screenshot({
  path: 'public/images/og-marketing-digital.jpg',
  type: 'jpeg',
  quality: 90,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});

console.log('   ✅ og-marketing-digital.jpg');
await browser.close();
