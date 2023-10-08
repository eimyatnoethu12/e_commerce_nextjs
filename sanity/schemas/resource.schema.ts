import { Rule } from "postcss";
const res = {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      require,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },

    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 10,
    },

    {
      name: 'price',
      title: 'Price',
      type: 'number',
      initialValue: 0,
    },

    {
      name: "poster",
      title: "Poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ['man', 'women', 'shoe']
      }
    }
  ]
}
export default res;
