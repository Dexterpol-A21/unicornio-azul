import {defineField, defineType} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lang',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          {title: 'Español', value: 'es'},
          {title: 'English', value: 'en'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'urlSlug',
      title: 'Slug de la URL',
      type: 'string',
      description: 'El mismo slug en español y en inglés. La web publica /ideas/{slug} y /en/ideas/{slug}.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Negocios', value: 'negocios'},
          {title: 'Producto y compras', value: 'producto'},
          {title: 'Marketing', value: 'marketing'},
          {title: 'Escalado', value: 'escalado'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen',
      type: 'string',
      description: 'Ruta en la web, por ejemplo /images/blog-validar-idea-negocio.png',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImageAlt',
      title: 'Texto alternativo de la imagen',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readMinutes',
      title: 'Minutos de lectura',
      type: 'number',
      validation: (rule) => rule.integer().positive(),
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'draft',
      title: 'Borrador (no se publica)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'body',
      title: 'Cuerpo (Markdown)',
      type: 'text',
      rows: 40,
      description: 'Markdown: títulos con ##, citas con > y listas con -.',
      validation: (rule) => rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Fecha, más reciente',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', lang: 'lang', slug: 'urlSlug'},
    prepare({title, lang, slug}) {
      return {
        title: title || 'Sin título',
        subtitle: [lang, slug].filter(Boolean).join(' · '),
      }
    },
  },
})
