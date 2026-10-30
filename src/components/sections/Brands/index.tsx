import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "@/data/brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="bg-navy-deep">
        <div className="mx-auto max-w-c-1390 px-4 py-4 md:px-8 2xl:px-0">
          <div className="grid items-center justify-center gap-7.5 md:grid-cols-1 lg:grid-cols-4 xl:gap-29">
            <div className="h-55">
              {brandData.map((brand, key) => (
                <SingleBrand brand={brand} key={key} />
              ))}
            </div>
            <h1 className="mb-5 pr-16 font-display text-4xl font-bold uppercase text-white xl:text-hero">
              Szakértelem.
            </h1>
            <h1 className="mb-5 pr-16 font-display text-4xl font-bold uppercase text-white xl:text-hero">
              Kényelem.
            </h1>
            <h1 className="mb-5 pr-16 font-display text-4xl font-bold uppercase text-white xl:text-hero">
              Biztonság.
            </h1>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
