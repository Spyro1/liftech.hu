import { Blog } from "@/types/blog";
import { Link } from "react-router-dom";

// Product card used on the Termékek, Új lépcsőliftek and Platformliftek pages.
// Every card has the same 4:3 image frame; object-cover fills it by cropping
// the edges (never stretching), so all cards line up regardless of the
// original photo's proportions.
const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug } = blog;

  return (
    <article className="animate_top card-top group flex h-full flex-col transition-all duration-300 before:z-10 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(20,34,73,0.35)] hover:before:bg-accent">
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={mainImage}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 xl:p-7.5">
        <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-wide text-navy transition-colors duration-300 group-hover:text-accent xl:text-itemtitle2">
          {/* The ::after overlay stretches this link over the whole card, so
              the card is clickable everywhere with a single link. */}
          <Link
            to={"/" + slug}
            className="after:absolute after:inset-0 after:z-20 focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent"
          >
            {title}
          </Link>
        </h3>
        {metadata && <p className="mb-6 line-clamp-3">{metadata}</p>}
        <span
          className="mt-auto inline-flex items-center gap-2.5 self-start font-display text-lg font-semibold uppercase tracking-wider text-navy transition-colors duration-300 group-hover:text-accent"
          aria-hidden="true"
        >
          Részletek
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </article>
  );
};

export default BlogItem;
