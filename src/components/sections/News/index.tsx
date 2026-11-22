import { useEffect, useState } from "react";
import { fetchNews, NewsPost } from "@/lib/sanity";
import SectionHeader from "@/components/ui/SectionHeader";
import StairSteps from "@/components/ui/StairSteps";

// Keep the image area between portrait (4:5) and wide (16:9); anything beyond
// that is letterboxed instead of cropped, so flyers with text stay readable.
const MIN_RATIO = 4 / 5;
const MAX_RATIO = 16 / 9;
const DEFAULT_RATIO = 4 / 3;
// Tallest an image may be: 70% of the screen height, and never above 640px.
const MAX_IMAGE_HEIGHT = "min(70vh, 640px)";

// Colour schemes. Tailwind needs full class names, so each is spelled out.
const themes = {
  default: {
    text: "",
    offset: "bg-navy",
    heading: "text-navy",
    titleHover: "hover:text-accent",
    body: "text-ink",
    button: "bg-navy text-white hover:bg-accent",
  },
  // "Kiemelt" posts put the text on a navy panel so they stand out.
  inverted: {
    text: "bg-navy px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 xl:px-15",
    offset: "bg-accent",
    heading: "text-white",
    titleHover: "hover:text-white/70",
    body: "text-white/80",
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

  return (
    <section
      id="hirek"
      className="overflow-hidden bg-mist py-20 lg:py-25 xl:py-30"
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "AKTUÁLIS",
            subtitle: "Hírek és akciók",
            description: "",
          }}
        />
        <div className="mt-12.5 flex flex-col gap-20 lg:mt-15 lg:gap-25 xl:mt-20">
          {posts.map((post, index) => {
            const t = post.inverted ? themes.inverted : themes.default;
            // Every second post puts the image on the right.
            const reversed = index % 2 === 1;
            const ratio = Math.min(
              MAX_RATIO,
              Math.max(MIN_RATIO, post.imageRatio ?? DEFAULT_RATIO),
            );
            const validity = validityText(post.validFrom, post.validUntil);
            const label = post.label?.trim();

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
                className={`flex w-full flex-col gap-10 md:items-center md:gap-8 lg:gap-12 xl:gap-20 ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image with the offset block, as in the About section */}
                {/* The column is half the row; the image inside is capped in
                    height (MAX_IMAGE_HEIGHT) so tall images don't overflow the
                    screen, shrinking its width to keep the aspect ratio. */}
                <div className="flex w-full justify-center md:w-1/2 md:shrink-0">
                  <div
                    className={`relative ${reversed ? "mr-4" : "ml-4"}`}
                    style={{
                      aspectRatio: ratio,
                      width: `min(calc(100% - 1rem), calc(${MAX_IMAGE_HEIGHT} * ${ratio}))`,
                    }}
                  >
                    <div
                      className={`absolute -bottom-4 h-full w-full ${
                        reversed ? "-right-4" : "-left-4"
                      } ${t.offset}`}
                      aria-hidden="true"
                    />
                    <img
                      src={`${post.image}?w=1400&auto=format`}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full bg-mist object-contain"
                      loading="lazy"
                    />
                    {label && (
                      <span className="absolute -top-2 right-4 bg-accent px-4.5 py-1 text-metatitle uppercase tracking-widest text-white">
                        {label}
                      </span>
                    )}
                  </div>
                </div>

                <div className={`min-w-0 md:flex-1 ${t.text}`}>
                  {validity && (
                    <div className="mb-4 inline-flex items-center gap-3">
                      <StairSteps className={`shrink-0 ${t.heading}`} />
                      <span
                        className={`text-metatitle font-semibold uppercase tracking-[0.3em] ${t.heading}`}
                      >
                        {validity}
                      </span>
                    </div>
                  )}
                  <h3
                    className={`mb-6 break-words font-display text-4xl font-bold uppercase leading-[0.95] sm:text-5xl xl:text-hero ${t.heading}`}
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
                    <p
                      className={`mb-7.5 whitespace-pre-line text-metatitle2 ${t.body}`}
                    >
                      {post.caption}
                    </p>
                  )}
                  {linkProps && (
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
