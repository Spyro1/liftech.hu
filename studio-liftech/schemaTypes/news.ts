import { defineField, defineType } from "sanity";

export default defineType({
  name: "news",
  title: "Hír / akció",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Cím", type: "string", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Kép (Instagram poszt)", type: "image", validation: (r) => r.required() }),
    defineField({ name: "caption", title: "Szöveg", type: "text" }),
    defineField({ name: "date", title: "Dátum", type: "datetime", initialValue: () => new Date().toISOString() }),
    defineField({ name: "link", title: "Link (nem kötelező)", type: "url" }),
    defineField({
      name: "linkText",
      title: "Gomb szövege (nem kötelező)",
      description: "A linkre mutató gomb felirata. Ha üres: \"Tudjon meg többet!\"",
      type: "string",
      hidden: ({ document }) => !document?.link,
    }),
  ],
  orderings: [{ title: "Legújabb elöl", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
});
