import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 border border-t-4 border-line border-t-navy bg-white p-7.5 transition-all hover:-translate-y-1 hover:border-t-accent hover:shadow-sm xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center bg-navy">
          <img src={icon} width={36} height={36} alt={title} loading="lazy" />
        </div>
        <h3 className="mb-5 mt-7.5 font-display text-2xl font-bold uppercase tracking-wide text-navy xl:text-itemtitle">
          {title}
        </h3>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
