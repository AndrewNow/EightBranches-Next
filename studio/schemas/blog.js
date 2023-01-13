export default {
  name: "blog",
  title: "Bulletin Board",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Publish date",
      description:
        "Select the time at which this blog post was/is published to display on the website.",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "readtime",
      title: "Estimated read rime (in minutes)",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short description",
      description: "Enter a brief description to summarize the article.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Cover image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      title: "Body content",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
