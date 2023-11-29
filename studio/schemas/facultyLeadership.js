export default {
  name: "facultyLeadership",
  title: "Faculty (Leadership)",
  type: "document",
  fields: [
    {
      name: "facultyLeadershipData",
      title: "Faculty entries (leadership)",
      type: "array",
      of: [
        {
          title: "Faculty leadership entry",
          name: "facultyLeadershipEntry",
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
              title: "Role",
              description: "Ex: Acupuncture and Moxibustion Instructor",
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
              title: "Faculty member bio",
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
        title: 'Edit, add and remove faculty members here (leadership team)',
      }
    },
  },
};
