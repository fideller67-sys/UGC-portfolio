export default {
  name: 'portfolioPhoto',
  title: 'Portfolio Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Photo Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Upload Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'order',
      title: 'Display Order (1 = first)',
      type: 'number',
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
