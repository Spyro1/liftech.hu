import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = useLocation().pathname;

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  // Close the mobile menu (and submenu) after any link inside the header is clicked
  const handleHeaderClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) {
      setNavigationOpen(false);
      setDropdownToggler(false);
    }
  };

  return (
    <header
      onClick={handleHeaderClick}
      className={`fixed left-0 top-0 z-99999 w-full border-b border-line bg-white py-3.5 ${
        stickyMenu ? "!py-2 shadow-sm transition-all duration-100" : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-auto">
          <Link
            to="/"
            className="flex items-center gap-4"
            aria-label="Liftech főoldal"
          >
            <img
              src="/images/logo/liftech_logo.webp"
              alt="Liftech lépcsőliftek"
              width={41}
              height={56}
              className={`w-auto transition-all duration-100 ${
                stickyMenu ? "h-11" : "h-14"
              }`}
            />
            <span className="font-display text-2xl font-bold uppercase leading-none tracking-wide text-navy">
              Liftech Group Kft.
            </span>
          </Link>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 bg-navy delay-[0] duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 bg-navy delay-150 duration-200 ease-in-out ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 bg-navy delay-200 duration-200 ease-in-out ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 bg-navy delay-300 duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full bg-navy duration-200 ease-in-out ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        {/* mobile: grid-rows 0fr -> 1fr animates the height, so submenus grow the panel instead of scrolling */}
        <div
          className={`grid w-full transition-[grid-template-rows,opacity,visibility,margin] duration-300 ease-in-out xl:visible xl:flex xl:w-full xl:justify-end xl:opacity-100 ${
            navigationOpen
              ? "visible mt-4 grid-rows-[1fr] opacity-100"
              : "invisible grid-rows-[0fr] opacity-0"
          } xl:mt-0`}
        >
          <div className="min-h-0 overflow-hidden xl:w-full xl:overflow-visible">
            <div className="border border-line bg-white p-7.5 xl:flex xl:items-center xl:justify-end xl:border-0 xl:p-0">
              <nav className="xl:mr-10">
                <ul className="flex flex-col gap-5 font-display text-xl font-semibold uppercase tracking-wider xl:flex-row xl:items-center xl:gap-9">
                  {menuData.map((menuItem, key) => (
                    <li
                      key={key}
                      className={menuItem.submenu && "group relative"}
                    >
                      {menuItem.submenu ? (
                        <>
                          <button
                            onClick={() => setDropdownToggler(!dropdownToggler)}
                            className="flex cursor-pointer items-center justify-between gap-3 uppercase tracking-wider text-ink hover:text-accent"
                          >
                            {menuItem.title}
                            <span>
                              <svg
                                className="h-3 w-3 cursor-pointer fill-slate group-hover:fill-accent"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                              </svg>
                            </span>
                          </button>

                          <ul
                            className={`dropdown ${
                              dropdownToggler
                                ? "max-xl:mt-2 max-xl:max-h-96 max-xl:border max-xl:py-5 max-xl:opacity-100"
                                : ""
                            }`}
                          >
                            {menuItem.submenu.map((item, key) => (
                              <li
                                key={key}
                                className="text-xl text-ink hover:text-accent"
                              >
                                <Link to={item.path || "#"}>{item.title}</Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          to={`${menuItem.path}`}
                          className={
                            pathUrl === menuItem.path
                              ? "border-b-2 border-navy pb-1 text-navy"
                              : "border-b-2 border-transparent pb-1 text-ink hover:text-accent"
                          }
                        >
                          {menuItem.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-7 flex items-center gap-6 xl:mt-0">
                <Link
                  to="tel:+36301495552"
                  className="flex items-center justify-center bg-navy px-6 py-3 font-display text-xl font-semibold tracking-wider text-white transition-colors hover:bg-accent"
                >
                  +36 30 149 5552
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
