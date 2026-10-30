import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata, slug} = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top group border border-line border-t-4 border-t-navy bg-white p-4 pb-9 transition-all hover:-translate-y-1 hover:border-t-accent hover:shadow-sm"
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
      </motion.div>
    </>
  );
};

export default BlogItem;
