const OWNER_EMAIL = 'luis.chicharro@unicornioazul.es';
const FROM = 'Unicornio Azul <notificaciones@unicornioazul.es>';
const SITE = 'https://unicornioazul.es';

const GOALS = {
  negocios: { es: 'Desarrollo de negocio', en: 'Business development' },
  producto: { es: 'Producto y compras internacionales', en: 'Product & international sourcing' },
  marketing: { es: 'Marketing digital', en: 'Digital marketing' },
  escalado: { es: 'Canales digitales y escalado', en: 'Digital channels & scaling' },
  otro: { es: 'Algo distinto', en: 'Something different' },
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') {
    return json({ ok: true }, 204);
  }
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method' }, 405);
  }

  const length = Number(request.headers.get('content-length') || 0);
  if (length > 20_000) return json({ ok: false, error: 'invalid' }, 413);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid' }, 400);
  }

  if (body?.honey) return json({ ok: true });

  const lead = parseLead(body);
  if (!lead) return json({ ok: false, error: 'invalid' }, 400);

  const apiKey = env?.RESEND_API_KEY;
  if (!apiKey) {
    console.error('lead: RESEND_API_KEY is not set');
    return json({ ok: false, error: 'unavailable' }, 503);
  }

  const to = env.LEAD_TO || OWNER_EMAIL;
  const from = env.LEAD_FROM || FROM;

  try {
    await sendEmail(apiKey, ownerMessage(lead, to, from));
  } catch (err) {
    console.error('lead: owner email failed', err.status || '', err.message);
    return json({ ok: false, error: 'send' }, 502);
  }

  try {
    await sendEmail(apiKey, confirmationMessage(lead, from, env.LEAD_CONFIRM_TO));
  } catch (err) {
    console.error('lead: confirmation email failed', err.status || '', err.message);
  }

  return json({ ok: true });
}

function parseLead(body) {
  if (!body || typeof body !== 'object') return null;
  if (body.privacy !== true) return null;

  const name = clean(body.name, 120);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 40);
  const context = cleanBlock(body.context, 4000);
  const lang = body.lang === 'en' ? 'en' : 'es';
  const goal = GOALS[body.goal] ? body.goal : '';

  if (!name || !EMAIL_RE.test(email)) return null;
  if (phone && !/^[+\d\s().-]{6,40}$/.test(phone)) return null;

  return { name, email, phone, context, lang, goal };
}

function ownerMessage(lead, to, from) {
  const goal = goalLabel(lead, 'es');
  const lines = [
    'Nuevo lead desde unicornioazul.es',
    '',
    `Nombre: ${lead.name}`,
    `Email: ${lead.email}`,
    `Teléfono: ${lead.phone || '—'}`,
    `Objetivo: ${goal}`,
    `Idioma: ${lead.lang === 'en' ? 'EN' : 'ES'}`,
    '',
    'Contexto:',
    lead.context || '—',
    '',
    'Responde a este correo para escribirle directamente.',
  ];

  return {
    from,
    to: [to],
    reply_to: lead.email,
    subject: `Nuevo lead — ${goal}`,
    text: lines.join('\n'),
    html: layout({
      title: 'Nuevo lead',
      intro: 'Alguien acaba de dejar sus datos en el formulario.',
      rows: [
        ['Nombre', lead.name],
        ['Email', lead.email],
        ['Teléfono', lead.phone || '—'],
        ['Objetivo', goal],
        ['Idioma', lead.lang === 'en' ? 'Inglés' : 'Español'],
      ],
      body: lead.context,
      footer: 'Responde a este correo para escribirle directamente.',
    }),
  };
}

function confirmationMessage(lead, from, confirmTo) {
  const en = lead.lang === 'en';
  const goal = goalLabel(lead, lead.lang);
  const text = en
    ? [
        `Hi ${lead.name},`,
        '',
        `We have your note about ${goal}. We'll write to you within 48 hours.`,
        '',
        'If you want to write first:',
        OWNER_EMAIL,
        '+34 617 348 381',
        '',
        'Unicornio Azul',
        'Madrid',
      ].join('\n')
    : [
        `Hola ${lead.name},`,
        '',
        `Hemos recibido tu interés en ${goal}. Te escribiremos en menos de 48 horas.`,
        '',
        'Si prefieres adelantarte:',
        OWNER_EMAIL,
        '+34 617 348 381',
        '',
        'Unicornio Azul',
        'Madrid',
      ].join('\n');

  return {
    from,
    to: [EMAIL_RE.test(confirmTo || '') ? confirmTo : lead.email],
    reply_to: OWNER_EMAIL,
    subject: en ? 'We received your message — Unicornio Azul' : 'Hemos recibido tu mensaje — Unicornio Azul',
    text,
    html: layout({
      title: en ? `Hi ${lead.name}` : `Hola ${lead.name}`,
      intro: en
        ? `We have your note about ${goal}. We'll write to you within 48 hours.`
        : `Hemos recibido tu interés en ${goal}. Te escribiremos en menos de 48 horas.`,
      footer: en
        ? `Write first if you prefer: ${OWNER_EMAIL} · +34 617 348 381`
        : `Si prefieres adelantarte: ${OWNER_EMAIL} · +34 617 348 381`,
    }),
  };
}

function goalLabel(lead, lang) {
  const item = GOALS[lead.goal];
  if (!item) return lang === 'en' ? 'your project' : 'tu proyecto';
  return item[lang] || item.es;
}

function layout({ title, intro, rows = [], body = '', footer }) {
  const details = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;color:#6B7280;font-size:13px;width:110px;vertical-align:top;">${esc(label)}</td><td style="padding:8px 0;color:#1A1A1A;font-size:15px;">${esc(value)}</td></tr>`,
    )
    .join('');
  const context = body
    ? `<p style="margin:24px 0 0;color:#6B7280;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">Contexto</p><p style="margin:8px 0 0;color:#1A1A1A;font-size:15px;line-height:1.55;white-space:pre-wrap;">${esc(body)}</p>`
    : '';

  return `<!doctype html><html><body style="margin:0;background:#F4F7FA;padding:32px 16px;font-family:Georgia,serif;">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;padding:32px 28px;">
      <img src="${SITE}/apple-touch-icon.png" width="56" height="56" alt="Unicornio Azul" style="display:block;width:56px;height:56px;border-radius:50%;margin:0 0 16px;border:0;">
      <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#00698D;">Unicornio Azul</p>
      <h1 style="margin:0;font-family:Arial,sans-serif;font-size:26px;line-height:1.15;color:#1A1A1A;">${esc(title)}</h1>
      <p style="margin:14px 0 0;font-size:16px;line-height:1.55;color:#374151;">${esc(intro)}</p>
      ${details ? `<table style="width:100%;border-collapse:collapse;margin-top:22px;">${details}</table>` : ''}
      ${context}
      <p style="margin:28px 0 0;padding-top:18px;border-top:1px solid #E6EEF3;font-family:Arial,sans-serif;font-size:13px;line-height:1.5;color:#6B7280;">${esc(footer)}</p>
    </div>
    <p style="max-width:520px;margin:14px auto 0;font-family:Arial,sans-serif;font-size:12px;color:#9CA3AF;text-align:center;">${esc(SITE)}</p>
  </body></html>`;
}

async function sendEmail(apiKey, payload) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data?.message || `Resend ${res.status}`);
    err.status = res.status;
    throw err;
  }
  return data;
}

function clean(value, max) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .trim()
    .slice(0, max);
}

function cleanBlock(value, max) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json(data, status = 200) {
  return new Response(status === 204 ? null : JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
