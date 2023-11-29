export default {
  name: "teachingClinic",
  title: "Teaching Clinic",
  type: "document",
  fields: [
    {
      title: "Monday",
      name: "mon",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Tuesday",
      name: "tues",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Wednesday",
      name: "wed",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Thursday",
      name: "thurs",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Friday",
      name: "fri",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Saturday",
      name: "sat",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sunday",
      name: "sun",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
    preview: {
    prepare() {
      return {
        title: 'Edit teaching clinic info here',
      }
    },
  },
};
