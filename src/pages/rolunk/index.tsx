import Seo from "@/lib/seo";
import { Link } from "react-router-dom";
import StairSteps from "@/components/ui/StairSteps";

// Key facts, all taken from the company text below.
const facts = [
  {
    value: "12 év",
    label: "a megváltozott mozgáshelyzetű emberek szolgálatában",
  },
  { value: "~20 év", label: "szakmai tapasztalat a lift telepítésben" },
  {
    value: "Országos",
    label: "lefedettség, az egész ország területén telepítünk",
  },
];

const Rolunk = () => {
  return (
    <main>
      <Seo
        title={"Rólunk | Liftech.hu"}
        description={"Ezen az oldalon megismerheti a Liftech Group Kft-t"}
        robots={
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />

      {/* ===== Intro: same look as the home page hero ===== */}
      <section className="overflow-hidden bg-mist pb-16 pt-32 md:pb-20 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-25">
            <div className="animate_left lg:w-3/5">
              <h4 className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy sm:text-metatitle sm:tracking-[0.3em] md:mb-4.5">
                <StairSteps className="text-navy" />
                Liftech Group Kft.
              </h4>
              <h1 className="mb-6 font-display text-5xl font-bold uppercase leading-[0.95] text-navy xl:text-hero">
                Rólunk:{" "}
                <span className="relative inline-block before:absolute before:bottom-1 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-accent/25">
                  akadálymentes otthon
                </span>
              </h1>
              <p className="text-metatitle2 text-ink">
                Cégünket 12 évvel ezelőtt azzal a céllal hívtuk életre, hogy
                megoldást találjunk a megváltozott mozgáshelyzetű emberek egy
                égető problémájára, az otthonukban való akadálymentes
                közlekedésre.
              </p>
            </div>

            <ul className="animate_right grid gap-4 sm:grid-cols-3 lg:w-2/5 lg:grid-cols-1">
              {facts.map((fact) => (
                <li
                  key={fact.value}
                  className="relative bg-navy px-6 py-5 text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-accent"
                >
                  <span className="block font-display text-4xl font-bold uppercase leading-none xl:text-sectiontitle4">
                    {fact.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-white/75">
                    {fact.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Story: same look as the home page Alpha section ===== */}
      <section className="overflow-hidden py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-14 md:flex-row md:items-center md:gap-12 lg:gap-25">
            <div className="animate_left relative mx-auto ml-4 aspect-[490/670] w-3/5 max-w-[340px] shrink-0 md:mx-0 md:ml-4 md:w-1/3">
              <div
                className="absolute -bottom-4 -left-4 h-full w-full bg-accent"
                aria-hidden="true"
              />
              <img
                src="/images/hero/liftech_logo.webp"
                alt="Liftech lépcsőliftek logó"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="animate_right min-w-0 md:flex-1">
              <span className="mb-4 block font-semibold uppercase tracking-[0.2em] text-navy">
                Történetünk
              </span>
              <h2 className="mb-8 font-display text-4xl font-bold uppercase leading-[0.95] text-navy xl:text-sectiontitle2">
                Segítünk, hogy ügyfeleink teljesebb életet éljenek
              </h2>
              <div className="flex flex-col gap-5 text-lg leading-relaxed">
                <p>
                  Új és használt (de teljes mértékben szervízelt és
                  karbantartott) lépcsőliftek és platformliftek telepítése során
                  az elmúlt években számtalan esetben találkoztunk nagyon nehéz
                  emberi sorsokkal, de nagyon sokat jelent számunkra,
                  segítségünkkel ügyfeleink újra teljesebb életet tudnak élni.
                </p>
                <p>
                  A szolgáltatás érzékenysége megköveteli tőlünk megrendelőink
                  speciális igényeinek, személyes biztonságuknak, kényelmüknek
                  folyamatos szem előtt tartását. Partnercégünk, a nemzetközileg
                  elismert{" "}
                  <strong className="font-semibold text-navy">
                    Lehner Liftechnik
                  </strong>{" "}
                  csúcsminőségű termékei segítségével, és közel két évtizedes
                  szakmai tapasztalatunkkal tudjuk ezt megvalósítani.
                </p>
                <p>
                  Sok éves kitartó munkánk eredményeként mára képessé vált
                  cégünk az egész ország területén liftek telepítésére.
                </p>
                <p>
                  Ezúton is köszönjük eddigi ügyfeleink bizalmát és bízunk
                  benne, hogy új ügyfeleink számára is mi tudjuk a megfelelő
                  megoldást nyújtani.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-display text-2xl font-semibold uppercase tracking-wide text-navy">
                  Liftech Group Kft. csapata
                </p>
                <Link
                  to="/kapcsolat"
                  className="inline-flex items-center justify-center gap-3 bg-navy px-7.5 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
                >
                  Lépjen kapcsolatba velünk
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Rolunk;
