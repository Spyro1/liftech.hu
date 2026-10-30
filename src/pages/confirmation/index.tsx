import Seo from "@/lib/seo";

const ErroPage = () => {
  return (
    <>
    <Seo title="Sikeres küldés!" />
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <img
          src="/images/shape/check.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={250}
          height={250} loading="lazy" />

        <h2 className="mb-5 font-display text-3xl font-bold uppercase text-navy md:text-5xl">
		Üzenetét sikeresen megkaptuk!
        </h2>
        <p className="mb-7.5">
		Kollégánk hamarosan felveszi Önnel a kapcsolatot a megadott elérhetőségek egyikén.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2.5 bg-navy px-8 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white duration-300 ease-in-out hover:bg-accent"
        >
	Vissza a főoldalra
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </a>
      </div>
    </section>
    </>
  );
};

export default ErroPage;
