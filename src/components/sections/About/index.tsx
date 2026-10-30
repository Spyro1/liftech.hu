import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden bg-mist py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto block aspect-[588/526.5] w-full md:w-1/2"
            >
              <div
                className="absolute -bottom-4 -left-4 h-full w-full bg-navy"
                aria-hidden="true"
              />
              <img
                src="/images/features/alpha.webp"
                alt="Alpha lépcsőlift felszerelve"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-semibold uppercase tracking-[0.2em] text-navy">
                <span className="mb-4 mr-4 inline-flex bg-accent px-4.5 py-1 text-metatitle uppercase tracking-widest text-white ">
                  ÚJ
                </span>{" "}
                Kanyarodó lépcső? Mi megoldjuk!
              </span>
              <h2 className="relative mb-6 font-display text-5xl font-bold uppercase leading-[0.95] text-navy xl:text-hero">
                Lépcsőlift otthonához:{" "}
                <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-accent/25">
                  Alpha
                </span>
              </h2>
              <h3 className="mb-5.5 text-metatitle2 font-normal text-ink">
                Az Alpha lépcsőlift megszünteti a lépcső akadályát, azoknál a
                lépcső típusoknál, ahol az Essental(Egyenes) típus nem
                alkalmazható. Biztonságos és könnyű hozzáférést biztosít más
                szintekre, ezt a lépcsőliftet kanyarodó lépcsőkre, közbenső
                lépcsőfokokra, vagy akár akkor is, ha diszkrét, az úttesten
                kívüli parkolásra van szükség.
              </h3>
              <Link
                to="/termekek"
                className="inline-flex items-center gap-2.5 bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
              >
                Tudjon meg többet lépcsőliftjeinkről!
                <img
                  src="/images/icon/icon-arrow-dark.svg"
                  alt="nyíl"
                  width={30}
                  height={30}
                  loading="lazy"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
