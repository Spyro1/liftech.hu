import Seo from "@/lib/seo";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/ui/PageHero";

// Quick contact options shown next to the page title.
const quickContacts = [
  { label: "Telefon", value: "+36 30 149 5552", href: "tel:+36301495552" },
  {
    label: "Email",
    value: "liftechgroupkft@gmail.com",
    href: "mailto:liftechgroupkft@gmail.com",
  },
  { label: "Cím", value: "2040 Budaörs, Ébner György utca 4." },
];

const Kapcsolat = () => {
  return (
    <main>
      <Seo
        title="Kapcsolat | Liftech.hu"
        description="Ezen az oldalon tud kapcsolatba lépni velünk, az űrlap segítségével"
      />
      <PageHero
        kicker="Kapcsolat"
        title="Kérjen"
        highlight="ajánlatot"
        lead="Írjon nekünk az alábbi űrlapon, és csatoljon néhány fotót a lépcsőről: így gyorsan személyre szabott ajánlatot tudunk adni. Hívjon minket bizalommal is!"
        aside={
          <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {quickContacts.map((item) => {
              const content = (
                <>
                  <span className="block text-metatitle font-semibold uppercase tracking-[0.3em] text-white/60">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words font-display text-2xl font-bold xl:text-itemtitle">
                    {item.value}
                  </span>
                </>
              );
              const tile =
                "relative block bg-navy px-6 py-5 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-accent";
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`${tile} transition-colors hover:bg-accent`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={tile}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        }
      />
      <Contact showDetails={false} />
    </main>
  );
};

export default Kapcsolat;
