import { Link } from "react-router-dom";
import StairSteps from "@/components/ui/StairSteps";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-mist pb-14 pt-28 md:pb-20 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="lg:w-1/2">
              <div className="py-2 md:py-10">
                <h4 className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy sm:text-metatitle sm:tracking-[0.3em] md:mb-4.5">
                  <StairSteps className="text-navy" />A Liftech csapatától:
                </h4>
                <h1 className="mb-4 font-display text-4xl font-bold uppercase leading-[0.95] text-navy sm:text-5xl md:mb-5 xl:text-hero">
                  Kiváló minőségű lépcsőliftek és platformliftek{"   "}
                  <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-accent/25">
                    Önre szabva!
                  </span>
                </h1>
                <p>
                  Legyen szó kültéri vagy beltéri, kanyarodó vagy egyenes,
                  használt vagy új liftről, biztos lehet abban, hogy nálunk
                  otthonra talál igényeivel. Segítőkész szakembereink kényelmet
                  vísznek otthaikba, elérhető áron.
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-7 xl:mt-0">
                <Link
                  to="/termekek"
                  className="flex items-center justify-center bg-navy px-6 py-3.5 text-center font-display text-lg font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent sm:px-8 sm:text-xl"
                >
                  Nézze meg termékeinket!
                </Link>
                <Link
                  to="/kapcsolat"
                  className="flex items-center justify-center border-2 border-navy px-6 py-3 text-center font-display text-lg font-semibold uppercase tracking-wider text-navy duration-300 ease-in-out hover:bg-navy hover:text-white sm:px-8 sm:text-xl"
                >
                  Lépjen kapcsolatba velünk
                </Link>
              </div>
            </div>
            <div className="animate_right lg:w-1/2">
              <div className="relative 2xl:-mr-7.5">
                {/* offset navy tile behind the photo, echoing the logo's stair tiles */}
                <div
                  className="absolute -bottom-3 -left-3 h-full w-full bg-navy lg:-bottom-5 lg:-left-5"
                  aria-hidden="true"
                />
                <div className="relative mx-auto aspect-[800/512]">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/images/hero/hero_img.webp"
                    alt="Szakember beszereli a lépcsőfelvonót"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
