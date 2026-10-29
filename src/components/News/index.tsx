import { useEffect, useState } from "react";
import { fetchNews, NewsPost } from "@/lib/sanity";
import SectionHeader from "../Common/SectionHeader";

const News = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);

  useEffect(() => {
    fetchNews().then(setPosts).catch(() => setPosts([]));
  }, []);

  if (posts.length === 0) return null;

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
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-10">
          {posts.map((post) => (
            <div
              key={post._id}
              className="rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
            >
              <img
                src={`${post.image}?w=800&auto=format`}
                alt={post.title}
                className="aspect-[4/5] w-full rounded-md object-cover"
                loading="lazy"
              />
              <div className="px-4">
                <h3 className="mb-3.5 mt-7.5 text-lg font-medium text-black dark:text-white xl:text-itemtitle2">
                  {post.link ? (
                    <a href={post.link} className="duration-300 hover:text-primary">
                      {post.title}
                    </a>
                  ) : (
                    post.title
                  )}
                </h3>
                <p className="whitespace-pre-line">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
