export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export type TranslationKey = keyof (typeof ui)['es'];

export const ui = {
  es: {
    // ─── Nav ──────────────────────────────
    'nav.que_hacemos': 'Qué hacemos',
    'nav.como_trabajamos': 'Cómo trabajamos',
    'nav.casos': 'Casos',
    'nav.sobre_nosotros': 'Sobre nosotros',
    'nav.proceso': 'Proceso',
    'nav.sorie': 'SORIE\u2122',

    // ─── Nav mega-menu ───────────────────
    'nav.negocios': 'Negocios',
    'nav.negocios_desc': 'Desarrollo de marcas y modelo de negocio desde cero.',
    'nav.producto': 'Producto',
    'nav.producto_desc': 'Compras internacionales, fabricación e importación / exportación.',
    'nav.marketing': 'Marketing',
    'nav.marketing_desc': 'Estrategia digital, SEO y branding aplicado orientado a venta.',
    'nav.escalado': 'Escalado',
    'nav.escalado_desc': 'Amazon, e-commerce y marketplaces internacionales.',
    'nav.proceso_desc': 'De la idea al mercado. Metodología clara y medible.',
    'nav.sorie_desc': 'Nuestro framework propio para resultados reales.',
    'nav.unicornio_azul': 'Unicornio Azul',
    'nav.unicornio_azul_desc': 'Conoce al equipo y la filosofía detrás del proyecto.',
    'nav.habla_con_nosotros': 'Habla con nosotros',
    'nav.habla_con_nosotros_desc': 'Cuéntanos tu proyecto y empecemos a trabajar.',

    // ─── Mobile nav ──────────────────────
    'mobile.que_hacemos': 'Qué hacemos',
    'mobile.metodo': 'Método',
    'mobile.casos': 'Casos',
    'mobile.nosotros': 'Nosotros',
    'mobile.negocios_desc': 'Marcas y modelo de negocio',
    'mobile.producto_desc': 'Fabricación e import/export',
    'mobile.marketing_desc': 'SEO, branding y venta',
    'mobile.escalado_desc': 'Amazon y marketplaces',

    // ─── CTA / Buttons ───────────────────
    'cta.primary': 'Cuéntanos tu proyecto',
    'cta.empezar': 'Empezar ahora',
    'cta.saber_mas': 'Saber más',

    // ─── Footer ──────────────────────────
    'footer.logo_alt': 'Unicornio Azul',
    'footer.que_hacemos': 'Qué hacemos',
    'footer.como_trabajamos': 'Cómo trabajamos',
    'footer.empresa': 'Empresa',
    'footer.derechos': 'Unicornio Azul. Todos los derechos reservados.',

    // ─── SEO / Meta ──────────────────────
    'seo.site_name': 'Unicornio Azul',
    'seo.og_locale': 'es_ES',

    // ─── Language switcher ───────────────
    'lang.switcher_label': 'Idioma',
    'lang.label.es': 'ES',
    'lang.label.en': 'EN',

    // ─── Routes ──────────────────────────
    'route.home': '/',
    'route.negocios': '/que-hacemos/desarrollo-de-negocios',
    'route.producto': '/que-hacemos/producto-compras-internacionales',
    'route.marketing': '/que-hacemos/marketing-digital',
    'route.escalado': '/que-hacemos/canales-digitales-escalado',
    'route.como_trabajamos': '/como-trabajamos',
    'route.metodologia_sorie': '/metodologia-sorie',
    'route.sobre_nosotros': '/sobre-nosotros',
    'route.contacto': '/contacto',
    'route.empezar': '/empezar',
    'route.casos': '/casos',
    'route.propuestas': '/propuestas',
  },

  en: {
    // ─── Nav ──────────────────────────────
    'nav.que_hacemos': 'What we do',
    'nav.como_trabajamos': 'How we work',
    'nav.casos': 'Case studies',
    'nav.sobre_nosotros': 'About us',
    'nav.proceso': 'Process',
    'nav.sorie': 'SORIE\u2122',

    // ─── Nav mega-menu ───────────────────
    'nav.negocios': 'Business',
    'nav.negocios_desc': 'Brand development and business model from scratch.',
    'nav.producto': 'Product',
    'nav.producto_desc': 'International sourcing, manufacturing, and import/export.',
    'nav.marketing': 'Marketing',
    'nav.marketing_desc': 'Digital strategy, SEO, and sales-driven branding.',
    'nav.escalado': 'Scale',
    'nav.escalado_desc': 'Amazon, e-commerce, and international marketplaces.',
    'nav.proceso_desc': 'From idea to market. Clear and measurable methodology.',
    'nav.sorie_desc': 'Our proprietary framework for real results.',
    'nav.unicornio_azul': 'Blue Unicorn',
    'nav.unicornio_azul_desc': 'Meet the team and the philosophy behind the project.',
    'nav.habla_con_nosotros': 'Get in touch',
    'nav.habla_con_nosotros_desc': 'Tell us about your project and let\'s get started.',

    // ─── Mobile nav ──────────────────────
    'mobile.que_hacemos': 'What we do',
    'mobile.metodo': 'Method',
    'mobile.casos': 'Cases',
    'mobile.nosotros': 'About',
    'mobile.negocios_desc': 'Brands & business model',
    'mobile.producto_desc': 'Manufacturing & import/export',
    'mobile.marketing_desc': 'SEO, branding & sales',
    'mobile.escalado_desc': 'Amazon & marketplaces',

    // ─── CTA / Buttons ───────────────────
    'cta.primary': 'Tell us about your project',
    'cta.empezar': 'Get started',
    'cta.saber_mas': 'Learn more',

    // ─── Footer ──────────────────────────
    'footer.logo_alt': 'Blue Unicorn',
    'footer.que_hacemos': 'What we do',
    'footer.como_trabajamos': 'How we work',
    'footer.empresa': 'Company',
    'footer.derechos': 'Blue Unicorn. All rights reserved.',

    // ─── SEO / Meta ──────────────────────
    'seo.site_name': 'Blue Unicorn',
    'seo.og_locale': 'en_US',

    // ─── Language switcher ───────────────
    'lang.switcher_label': 'Language',
    'lang.label.es': 'ES',
    'lang.label.en': 'EN',

    // ─── Routes ──────────────────────────
    'route.home': '/',
    'route.negocios': '/what-we-do/business-development',
    'route.producto': '/what-we-do/product-international-sourcing',
    'route.marketing': '/what-we-do/digital-marketing',
    'route.escalado': '/what-we-do/digital-channels-scaling',
    'route.como_trabajamos': '/how-we-work',
    'route.metodologia_sorie': '/sorie-methodology',
    'route.sobre_nosotros': '/about-us',
    'route.contacto': '/contact',
    'route.empezar': '/get-started',
    'route.casos': '/case-studies',
    'route.propuestas': '/proposals',
  },
} as const;
