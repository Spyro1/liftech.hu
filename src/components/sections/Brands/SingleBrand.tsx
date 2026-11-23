import React, { useRef, useEffect } from "react";

import { Brand } from "@/types/brand";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <a
        href={href}
        className="animate_left mx-w-full relative block max-h-full aspect-[490/670]"
      >
        <img
          className="absolute inset-0 h-full w-full transition-all duration-300 hover:opacity-100"
          src={image}
          alt={name} loading="lazy" />
     </a>
    </>
  );
};

export default SingleBrand;
