import { useEffect, useState } from "react";
import { fetchNews, NewsPost } from "@/lib/sanity";
import SectionHeader from "@/components/ui/SectionHeader";
import StairSteps from "@/components/ui/StairSteps";

// Columns per row on large screens, based on how many posts there are.
const columnsFor = (count: number) => (count <= 4 ? count : 3);

// Tailwind needs full class names, so the spans are spelled out.
const lgSpan: Record<number, string> = {
  12: "lg:col-span-12",
  6: "lg:col-span-6",
  4: "lg:col-span-4",
  3: "lg:col-span-3",
};

// Keep the image area between portrait (4:5) and wide (16:9); anything beyond
// that is letterboxed instead of cropped.
const MIN_RATIO = 4 / 5;
const MAX_RATIO = 16 / 9;
const DEFAULT_RATIO = 4 / 3;

// Card colour schemes. Tailwind needs full class names, so each is spelled out.
const themes = {
  default: {
    card: "hover:before:bg-accent",
    offset: "bg-navy group-hover:bg-accent",
    heading: "text-navy",
    titleHover: "hover:text-accent",
    body: "",
    button: "bg-navy text-white hover:bg-accent",
  },
  inverted: {
    card: "border-navy bg-navy before:bg-accent hover:before:bg-meta",
    offset: "bg-accent group-hover:bg-meta",
    heading: "text-white",
    titleHover: "hover:text-white/70",
    body: "text-white/75",
    button: "bg-white text-navy hover:bg-accent hover:text-white",
  },
};

const dateFormat = new Intl.DateTimeFormat("hu-HU", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Sanity "date" values are "YYYY-MM-DD"; parse as a local date so the day
// never shifts with the time zone.
const parseDay = (value: string) => {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
};

// "Érvényes: 2026. november 20. – december 31." / "... 2026. december 31-ig"
const validityText = (from?: string, until?: string) => {
  if (from && until) {
    return `Érvényes: ${dateFormat.formatRange(parseDay(from), parseDay(until))}`;
  }
  if (until) {
    // Drop the trailing period before the "-ig" suffix.
    return `Érvényes: ${dateFormat.format(parseDay(until)).replace(/\.$/, "")}-ig`;
  }
  if (from) return `Kezdete: ${dateFormat.format(parseDay(from))}`;
  return null;
};

const News = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);

  useEffect(() => {
    fetchNews()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  if (posts.length === 0) return null;

  const count = posts.length;
  const columns = columnsFor(count);
  // Posts left over on the last row stretch to fill it.
  const leftover = count % columns;

  return (
    <section id="hirek" className="bg-mist py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "AKTUÁLIS",
            subtitle: "Hírek és akciók",
            description: "",
          }}
        />
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-12 xl:mt-20 xl:gap-10">
          {posts.map((post, index) => {
            const inLastRow = leftover > 0 && index >= count - leftover;
            const lgWidth = inLastRow ? 12 / leftover : 12 / columns;
            const lgWide = lgWidth === 12;
            const mdWide = count % 2 === 1 && index === count - 1;

            const ratio = Math.min(
              MAX_RATIO,
              Math.max(MIN_RATIO, post.imageRatio ?? DEFAULT_RATIO),
            );

            const layout = [
              mdWide ? "md:col-span-2 md:flex-row" : "",
              lgWide ? "lg:flex-row" : mdWide ? "lg:flex-col" : "",
              lgSpan[lgWidth],
            ].join(" ");
            const imageWidth = [
              mdWide ? "md:w-1/2 md:shrink-0" : "",
              lgWide ? "lg:w-1/2 lg:shrink-0" : mdWide ? "lg:w-full" : "",
            ].join(" ");
            // "Kiemelt" posts invert to a navy card so they stand out.
            const t = post.inverted ? themes.inverted : themes.default;
            const validity = validityText(post.validFrom, post.validUntil);

            const linkProps = post.link
              ? {
                  href: post.link,
                  ...(/^https?:\/\//.test(post.link)
                    ? { rel: "noopener noreferrer" }
                    : {}),
                }
              : null;

            return (
              <article
                key={post._id}
                className={`card-top group flex flex-col gap-7.5 p-5 pb-9 shadow-[0_18px_40px_-24px_rgba(20,34,73,0.35)] before:h-1.5 md:p-6 md:pb-10 ${t.card} ${layout}`}
              >
                {/* Image with the navy offset block used in the About section */}
                <div
                  className={`relative mb-3 ml-3 self-start ${imageWidth} w-[calc(100%-0.75rem)]`}
                  style={{ aspectRatio: ratio }}
                >
                  <div
                    className={`absolute -bottom-3 -left-3 h-full w-full transition-colors duration-300 ${t.offset}`}
                    aria-hidden="true"
                  />
                  <img
                    src={`${post.image}?w=1200&auto=format`}
                    alt={post.title}
                    className="absolute inset-0 h-full w-full transform-gpu bg-mist object-contain"
                    loading="lazy"
                  />
                  {post.label?.trim() && (
                    <span className="absolute -top-2 right-4 bg-accent px-4.5 py-1 text-metatitle uppercase tracking-widest text-white">
                      {post.label.trim()}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col lg:justify-center">
                  {validity && (
                    <div className="mb-3 inline-flex items-center gap-3">
                      <StairSteps className={`shrink-0 ${t.heading}`} />
                      <span
                        className={`text-metatitle font-semibold uppercase tracking-[0.3em] ${t.heading}`}
                      >
                        {validity}
                      </span>
                    </div>
                  )}
                  <h3
                    className={`mb-3.5 font-display text-2xl font-bold uppercase tracking-wide xl:text-itemtitle2 ${t.heading}`}
                  >
                    {linkProps ? (
                      <a
                        {...linkProps}
                        className={`duration-300 ${t.titleHover}`}
                      >
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h3>
                  {post.caption && (
                    <p className={`whitespace-pre-line ${t.body}`}>
                      {post.caption}
                    </p>
                  )}
                  {linkProps && (
                    <div className="mt-auto pt-7.5">
                      <a
                        {...linkProps}
                        className={`inline-flex items-center gap-3 px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider duration-300 ease-in-out ${t.button}`}
                      >
                        {post.linkText?.trim() || "Tudjon meg többet!"}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          aria-hidden="true"
                        >
                          <path
                            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
