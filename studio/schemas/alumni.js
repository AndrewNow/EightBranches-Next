export default {
  name: "alumni",
  title: "Alumni",
  type: "document",
  fields: [
    {
      name: "alumniData",
      title: "Alumni entries",
      type: "array",
      of: [
        {
          title: "Alumni entry",
          name: "alumniEntry",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Name and title",
              description: "Ex: Anna Gao, R. Ac, RMT",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "degree",
              title: "Degree",
              description: "Ex: Acupuncture and Moxibustion Diploma",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "portrait",
              title: "Portrait",
              description: "Field not required, but highly recommended. Recommended format of 790x580 pixels",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "bio",
              title: "Alumni bio",
              description: "Do not use text styles other than 'normal' to respect design formatting.",
              type: "blockContent",
              validation: (Rule) => Rule.required(),
            },
          ]
        }
      ]
    }
  ],
preview: {
    prepare() {
      return {
        title: 'Edit, add and remove alumni here',
      }
    },
  },
};
