import { Link } from "react-router-dom";
import StairSteps from "@/components/ui/StairSteps";

const quickLinks = [
  { title: "Főoldal", path: "/" },
  { title: "Rólunk", path: "/rolunk" },
  { title: "Új lépcsőliftek", path: "/uj-lepcsoliftek" },
  { title: "Platform liftek", path: "/platformliftek" },
  { title: "Használt lépcsőliftek", path: "/hasznalt-lepcsoliftek" },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-navy-deep text-white/70">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <div
                className="animate_top w-full sm:w-1/2 lg:w-1/4"
              >
                <Link to="/" className="relative">
                  <img
                    width={110}
                    height={150}
                    src="/images/logo/liftech_logo.webp"
                    alt="Liftech lépcsőliftek"
                    loading="lazy"
                  />
                </Link>

                <p className="mb-10 mt-5">
                  Liftech Group Kft. Együtt a biztonságért és szakértelemért.
                </p>

                <p className="mb-1.5 text-metatitle font-semibold uppercase tracking-[0.3em] text-white/60">
                  Kapcsolat
                </p>
                <a
                  href="mailto:liftechgroupkft@gmail.com"
                  className="break-words font-display text-itemtitle2 font-semibold tracking-wide text-white hover:text-accent"
                >
                  liftechgroupkft@gmail.com
                </a>
              </div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <div
                  className="animate_top"
                >
                  <h4 className="mb-9 flex items-center gap-3 text-itemtitle2 font-semibold uppercase tracking-wide text-white">
                    <StairSteps className="text-white" />
                    Gyors linkek
                  </h4>

                  <ul>
                    {quickLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="mb-3 inline-block hover:text-white"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="animate_top"
                >
                  <h4 className="mb-9 flex items-center gap-3 text-itemtitle2 font-semibold uppercase tracking-wide text-white">
                    <StairSteps className="text-white" />
                    Kérdései vannak?
                  </h4>

                  <ul>
                    <li>
                      <Link
                        to="/gyakori-kerdesek"
                        className="mb-3 inline-block hover:text-white"
                      >
                        Gyakori kérdések
                      </Link>
                    </li>
                  </ul>
                  <p className="mb-10 mt-5">
                    Olvassa el gyakran előforduló kérdésekre válaszainkat, vagy
                    hívjon minket!
                  </p>
                  <a
                    href="tel:+36301495552"
                    className="font-display text-itemtitle font-semibold tracking-wide text-white hover:text-accent"
                  >
                    +36 30 149 5552
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-white/10 py-7 lg:flex-row lg:justify-between lg:gap-0">
            <div
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Liftech Group Kft. Minden jog
                fenntartva.
              </p>
            </div>

            <div
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#" aria-label="social icon">
                    <svg
                      className="fill-white/60 transition-all duration-300 hover:fill-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Footer Bottom --> */}
          <div className="pb-10"/>
        </div>
      </footer>
    </>
  );
};

export default Footer;
