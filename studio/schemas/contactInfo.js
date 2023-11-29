export default {
  name: "contactInfo",
  title: "Contact Info",
  description: "Global site-wide contact information for Eight Branches",
  type: "document",
  fields: [
    {
      title: "Phone number",
      description: "Ex: +1 416-925-5722",
      name: "phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Phone number (Toll Free)",
      description: "Optional entry.",
      name: "phone2",
      type: "string",
    },
    {
      title: "Email",
      description: "Ex: info@eightbranches.ca",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Address",
      description: "Ex: 112 Merton Street, 3rd Floor,  Toronto, ON M4S 2Z8",
      name: "address",
      type: "string",
      validation: (Rule) => Rule.required(),
    }
  ],
    preview: {
    prepare() {
      return {
        title: 'Edit contact info here',
      }
    },
  },
};
