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
        className="animate_top card-top z-40 p-7.5 transition-all hover:-translate-y-1 hover:shadow-sm hover:before:bg-accent xl:p-12.5"
      >
        <div className="mb-5 flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center bg-navy">
            <img src={icon} width={32} height={32} alt="" loading="lazy" />
          </div>
          <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-navy xl:text-itemtitle">
            {title}
          </h3>
        </div>
        <p>{description}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
