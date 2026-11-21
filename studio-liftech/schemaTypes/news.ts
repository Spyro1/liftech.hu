import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'Hír / akció',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Cím', type: 'string', validation: (r) => r.required()}),
    defineField({
      name: 'image',
      title: 'Kép (Instagram poszt)',
      type: 'image',
      validation: (r) => r.required(),
    }),
    defineField({name: 'caption', title: 'Szöveg', type: 'text'}),
    defineField({
      name: 'label',
      title: 'Címke (nem kötelező)',
      description: 'Rövid felirat a kép sarkában, pl. "Új" vagy "Akció".',
      type: 'string',
      validation: (r) => r.max(20),
    }),
    defineField({
      name: 'validFrom',
      title: 'Akció kezdete (nem kötelező)',
      description: 'Ha meg van adva, a kártyán megjelenik, mettől érvényes az akció.',
      type: 'date',
      options: {dateFormat: 'YYYY. MM. DD.'},
    }),
    defineField({
      name: 'validUntil',
      title: 'Akció vége (nem kötelező)',
      description: 'Ha meg van adva, a kártyán megjelenik, meddig érvényes az akció.',
      type: 'date',
      options: {dateFormat: 'YYYY. MM. DD.'},
      validation: (r) =>
        r.custom((until, ctx) => {
          const from = (ctx.document as {validFrom?: string} | undefined)?.validFrom
          return !from || !until || until >= from || 'A vége nem lehet a kezdete előtt.'
        }),
    }),
    defineField({
      name: 'inverted',
      title: 'Kiemelt (sötét) kártya',
      description: 'Bekapcsolva a kártya sötétkék hátteret kap, hogy kitűnjön a többi közül.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({name: 'link', title: 'Link (nem kötelező)', type: 'url'}),
    defineField({
      name: 'linkText',
      title: 'Gomb szövege (nem kötelező)',
      description: 'A linkre mutató gomb felirata. Ha üres: "Tudjon meg többet!"',
      type: 'string',
      hidden: ({document}) => !document?.link,
    }),
  ],
  orderings: [
    {title: 'Legújabb elöl', name: 'createdDesc', by: [{field: '_createdAt', direction: 'desc'}]},
  ],
})
