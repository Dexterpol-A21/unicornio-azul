import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Categorías = los 4 pilares de servicio. Cada una enlaza a su página.
// Sanity-ready: este schema se mapea 1:1 a un document type de Sanity
// (title, description, lang, slug, publishedAt, category, heroImage, etc.).
export const blogCategories = ['negocios', 'producto', 'marketing', 'escalado'] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.enum(['es', 'en']),
    // Mismo urlSlug en ambos idiomas: simplifica hreflang y el selector de idioma.
    urlSlug: z.string(),
    publishedAt: z.coerce.date(),
    category: z.enum(blogCategories),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    readMinutes: z.number().int().positive().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
