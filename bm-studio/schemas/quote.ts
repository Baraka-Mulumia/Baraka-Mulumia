import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'url',
    }),
  ],

  preview: {
    select: {
      title: 'quote',
      subtitle: 'author',
    },
  },
})
