export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Your Full Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Your Role (e.g. UGC Creator)',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    },
    {
      name: 'tiktok',
      title: 'TikTok URL',
      type: 'url',
    },
    {
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url',
    },
    {
      name: 'heroImage1',
      title: 'Hero Image 1 (Main portrait)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroImage2',
      title: 'Hero Image 2 (Top right)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heroImage3',
      title: 'Hero Image 3 (Bottom right)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutImage',
      title: 'About Section Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'aboutSubheading',
      title: 'About Subheading (e.g. How to\'s • Trends • Unboxing)',
      type: 'string',
    },
    {
      name: 'bio1',
      title: 'Bio Paragraph 1',
      type: 'text',
    },
    {
      name: 'bio2',
      title: 'Bio Paragraph 2',
      type: 'text',
    },
    {
      name: 'quote',
      title: 'Your Quote (big quote section)',
      type: 'text',
    },
    {
      name: 'niches',
      title: 'Your Niches',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'nicheDescription1',
      title: 'Niche Description 1',
      type: 'text',
    },
    {
      name: 'nicheDescription2',
      title: 'Niche Description 2',
      type: 'text',
    },
    {
      name: 'portfolioText1',
      title: 'Portfolio Description 1',
      type: 'text',
    },
    {
      name: 'portfolioText2',
      title: 'Portfolio Description 2',
      type: 'text',
    },
    {
      name: 'footerQuote',
      title: 'Footer Quote',
      type: 'text',
    },
    {
      name: 'testimonialQuote',
      title: 'Testimonial Quote',
      type: 'text',
    },
    {
      name: 'testimonialAuthor',
      title: 'Testimonial Author Name',
      type: 'string',
    },
    {
      name: 'testimonialRole',
      title: 'Testimonial Author Role',
      type: 'string',
    },
    {
      name: 'testimonialDate',
      title: 'Testimonial Date',
      type: 'string',
    },
    {
      name: 'reachOutText',
      title: 'Reach Out Text',
      type: 'text',
    },
  ],
}
