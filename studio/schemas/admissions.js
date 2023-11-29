export default {
  name: "admissions",
  title: "Admissions",
  type: "document",
  fields: [
    {
      name: "admissionsData",
      title: "Admissions Term Data",
      type: "array",
      of: [
        {
          title: "Term",
          name: "term",
          type: "object",
          fields: [
            {
              title: "Term title",
              description: "Ex: Fall Term",
              name: "title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Start date",
              description: "Ex: April 10, 2023",
              name: "start",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "End date",
              description: "Ex: July 1, 2023",
              name: "end",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Application due date",
              description: "Ex: July 1, 2023",
              name: "due",
              type: "string",
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
        title: 'Edit admissions info here',
      }
    },
  },
};
