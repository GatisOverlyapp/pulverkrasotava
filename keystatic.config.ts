import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'content/settings',
      schema: {
        phone: fields.text({ label: 'Phone Number' }),
        email: fields.text({ label: 'Email' }),
        address: fields.text({ label: 'Address', multiline: true }),
        whatsappUrl: fields.text({ label: 'WhatsApp URL' }),
        facebookUrl: fields.text({ label: 'Facebook URL' }),
        instagramUrl: fields.text({ label: 'Instagram URL' }),
        youtubeUrl: fields.text({ label: 'YouTube URL' }),
        wazeUrl: fields.text({ label: 'Waze URL' }),
        footerDescription: fields.document({
          label: 'Footer Description',
          formatting: true,
          links: true,
        }),
        gaId: fields.text({ label: 'Google Analytics ID' }),
        fbPixelId: fields.text({ label: 'Facebook Pixel ID' }),
      },
    }),
    homepage: singleton({
      label: 'Homepage',
      path: 'content/homepage',
      schema: {
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
        heroBackgroundImage: fields.image({
          label: 'Hero Background Image',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        servicesTitle: fields.text({ label: 'Services Section Title' }),
        whyChooseUsTitle: fields.text({ label: 'Why Choose Us Title' }),
        partnersTitle: fields.text({ label: 'Partners Section Title' }),
        reviewsTitle: fields.text({ label: 'Reviews Section Title' }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
      },
    }),
  },
  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroBackgroundImage: fields.image({
          label: 'Hero Background Image',
          directory: 'public/images/pages',
          publicPath: '/images/pages',
        }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/content',
            publicPath: '/images/content',
          },
        }),
      },
    }),
    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        icon: fields.image({
          label: 'Icon',
          directory: 'public/images/services',
          publicPath: '/images/services',
        }),
        shortDescription: fields.text({ label: 'Short Description', multiline: true }),
        heroBackgroundImage: fields.image({
          label: 'Hero Background Image',
          directory: 'public/images/services',
          publicPath: '/images/services',
        }),
        order: fields.integer({ label: 'Display Order', defaultValue: 0 }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/content',
            publicPath: '/images/content',
          },
        }),
      },
    }),
    faq: collection({
      label: 'FAQ',
      slugField: 'question',
      path: 'content/faq/*',
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.document({
          label: 'Answer',
          formatting: true,
          links: true,
        }),
        order: fields.integer({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
    partners: collection({
      label: 'Partners',
      slugField: 'name',
      path: 'content/partners/*',
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        logo: fields.image({
          label: 'Logo',
          directory: 'public/images/logos',
          publicPath: '/images/logos',
        }),
        url: fields.text({ label: 'Website URL' }),
        order: fields.integer({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
    reviews: collection({
      label: 'Reviews',
      slugField: 'author',
      path: 'content/reviews/*',
      schema: {
        author: fields.slug({ name: { label: 'Author' } }),
        authorImage: fields.image({
          label: 'Author Image',
          directory: 'public/images/reviews',
          publicPath: '/images/reviews',
        }),
        rating: fields.integer({
          label: 'Rating',
          defaultValue: 5,
          validation: { min: 1, max: 5 },
        }),
        text: fields.text({ label: 'Review Text', multiline: true }),
      },
    }),
    whyChooseUs: collection({
      label: 'Why Choose Us',
      slugField: 'title',
      path: 'content/why-choose-us/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        icon: fields.image({
          label: 'Icon',
          directory: 'public/images/why-choose-us',
          publicPath: '/images/why-choose-us',
        }),
        description: fields.text({ label: 'Description', multiline: true }),
        order: fields.integer({ label: 'Display Order', defaultValue: 0 }),
      },
    }),
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        featuredImage: fields.image({
          label: 'Featured Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts',
        }),
        metaTitle: fields.text({ label: 'Meta Title' }),
        metaDescription: fields.text({ label: 'Meta Description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/content',
            publicPath: '/images/content',
          },
        }),
      },
    }),
  },
});
