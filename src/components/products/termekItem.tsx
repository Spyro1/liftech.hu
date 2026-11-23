import { Blog } from "@/types/blog";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug} = blog;

  return (
    <>
      <div
        className="animate_top group card-top p-4 pb-9 transition-all hover:-translate-y-1 hover:before:bg-accent hover:shadow-sm"
      >
        <Link to={"/" + slug} className="relative block aspect-[368/239]">
          <img src={mainImage} alt={title}   className="absolute inset-0 h-full w-full" loading="lazy" />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block font-display text-2xl font-bold uppercase tracking-wide text-navy duration-300 hover:text-accent xl:text-itemtitle2">
            <Link to={"/" + slug}>
              {`${title.slice(0, 40)}`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
