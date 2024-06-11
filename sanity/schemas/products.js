// schemas/product.js

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().error('Name is required'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().error('Description is required'),
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        options: {
          list: [
            { title: '1 Star', value: 1 },
            { title: '2 Stars', value: 2 },
            { title: '3 Stars', value: 3 },
            { title: '4 Stars', value: 4 },
            { title: '5 Stars', value: 5 },
          ],
        },
        validation: Rule => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: Rule => Rule.required().uri({ allowRelative: false }).error('Valid URL is required'),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          layout: 'grid',
        },
        validation: Rule => Rule.required().min(1).error('At least one image is required'),
      },
    ],
  }
  