import { ReactNode } from "react";
import StairSteps from "./StairSteps";

type PageHeroProps = {
  /** Small line above the title, next to the stair icon. */
  kicker: string;
  /** Main title; `highlight` is appended with the accent underline. */
  title: string;
  highlight?: string;
  /** Intro paragraph under the title. */
  lead?: ReactNode;
  /** Optional right-hand column (facts, links, ...). */
  aside?: ReactNode;
};

// Top band of the subpages (Rólunk, Kapcsolat, Galéria, Gyakori kérdések),
// styled like the home page hero: light background, kicker, big title.
const PageHero = ({ kicker, title, highlight, lead, aside }: PageHeroProps) => (
  <section className="overflow-hidden bg-mist pb-14 pt-32 md:pb-20 md:pt-40 xl:pb-25 xl:pt-46">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-25">
        <div
          className={`animate_left ${aside ? "lg:w-3/5" : "lg:w-4/5 xl:w-3/4"}`}
        >
          <h4 className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-navy sm:text-base sm:tracking-[0.3em] md:mb-4.5">
            <StairSteps className="text-navy" />
            {kicker}
          </h4>
          <h1
            className={`font-display text-5xl font-bold uppercase leading-[0.95] text-navy xl:text-hero ${
              lead ? "mb-6" : ""
            }`}
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-accent/25">
                  {highlight}
                </span>
              </>
            )}
          </h1>
          {lead && <div className="text-metatitle2 text-ink">{lead}</div>}
        </div>
        {aside && <div className="animate_right lg:w-2/5">{aside}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
