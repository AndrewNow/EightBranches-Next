export default {
  name: "upcomingevents",
  title: "Upcoming Events",
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
      name: "link",
      title: "Event Link URL",
      description: "If the event has a link (ie Zoom), share it here.",
      type: "string",
    },
    {
      name: "date",
      title: "Date of Event",
      description: "Leave blank for TBD.",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "host",
      title: "Host",
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
      title: "Event description",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "host",
      media: "image",
    },
  },
};
