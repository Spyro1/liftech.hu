import { useEffect, useState } from "react";
import { fetchNews, NewsPost } from "@/lib/sanity";
import SectionHeader from "@/components/ui/SectionHeader";

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

const News = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);

  useEffect(() => {
    fetchNews().then(setPosts).catch(() => setPosts([]));
  }, []);

  if (posts.length === 0) return null;

  const count = posts.length;
  const columns = columnsFor(count);
  // Posts left over on the last row stretch to fill it.
  const leftover = count % columns;

  return (
    <section id="hirek" className="py-20 lg:py-25 xl:py-30">
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

            return (
              <div
                key={post._id}
                className={`card-top flex flex-col gap-7.5 p-4 pb-9 ${layout}`}
              >
                <div
                  className={`w-full self-start overflow-hidden bg-mist ${imageWidth}`}
                  style={{ aspectRatio: ratio }}
                >
                  <img
                    src={`${post.image}?w=1200&auto=format`}
                    alt={post.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 self-center px-4">
                  <h3 className="mb-3.5 font-display text-2xl font-bold uppercase tracking-wide text-navy xl:text-itemtitle2">
                    {post.link ? (
                      <a
                        href={post.link}
                        className="duration-300 hover:text-accent"
                      >
                        {post.title}
                      </a>
                    ) : (
                      post.title
                    )}
                  </h3>
                  <p className="whitespace-pre-line">{post.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
