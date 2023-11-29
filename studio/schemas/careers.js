export default {
  name: "careers",
  title: "Careers",
  type: "document",
  fields: [
    {
      name: "careerData",
      title: "Career posts",
      type: "array",
      of: [
        {
          title: "Careers post",
          name: "careersPost",
          type: "object",
          fields: [
            {
              name: "careersTitle",
              title: "Career listing title",
              description: "Ex: Chinese Language TCM Instructor",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'This listing is for...',
              name: 'category',
              type: 'string',
              options: {
                list: [
                  "Students", "Instructors"
                ],
                layout: "dropdown",
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc, context) => context.parent.careersTitle,
                maxLength: 96,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Brief description",
              description: "Ex: Eight Branches is looking for a chinese-speaking person with TCM experience to join their team.",
              type: "string",
            },
            {
              name: "body",
              title: "Job details",
              description: "To add email links using the URL function, prefix your link with mailto:<yourEmail>. For phone numbers, use tel:<yourNumber>",
              type: "blockContent",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'careersTitle',
              subtitle: 'category'
            },
            prepare({ title, subtitle }) {
              return {
                title: title,
                subtitle: subtitle ? `"${subtitle}" Category` : null,
              };
            },
          },
        }
      ],
    },
  ],
preview: {
    prepare() {
      return {
        title: 'Edit, add and remove career posts here',
      }
    },
  },
};
