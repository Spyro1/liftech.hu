import { useCallback, useState } from "react";
import Seo from "@/lib/seo";
import ImageViewer from "@/components/ui/ImageViewer";
import PageHero from "@/components/ui/PageHero";

interface GalleryImage {
  src: string;
  alt: string;
}

// Same selection as before the redesign (some files in /images/galeria are not listed)
const imageNumbers = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23,
  24, 25, 26, 27, 28, 30,
];

const images: GalleryImage[] = imageNumbers.map((n) => ({
  src: `/images/galeria/img${n}.jpg`,
  alt: `Liftech munkáink – ${n}. kép`,
}));

export default function IndexPage() {
  const [current, setCurrent] = useState<number | null>(null);

  const close = useCallback(() => setCurrent(null), []);
  const next = useCallback(
    () => setCurrent((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setCurrent((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
    [],
  );

  return (
    <>
      <Seo title="Galéria | Liftech.hu" description="Galéria" />
      <PageHero
        kicker="Galéria"
        title="Tekintse meg"
        highlight="eddigi munkáinkat"
        lead={`${images.length} fotó az ország különböző pontjain telepített lépcsőliftjeinkről és platformliftjeinkről. Kattintson egy képre a nagyításhoz.`}
      />

      <section className="py-16 lg:py-20 xl:py-25">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Dense grid: every 7th photo is shown large (2x2) to break the
              rhythm; grid-flow-dense back-fills the gaps. */}
          <ul className="grid grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {images.map((image, index) => (
              <li
                key={image.src}
                className={
                  index % 7 === 0
                    ? // big tiles alternate between the left and right edge
                      `col-span-2 row-span-2 ${
                        index % 14 === 7 ? "lg:col-start-3 xl:col-start-4" : ""
                      }`
                    : ""
                }
              >
                <button
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-label={`${image.alt} megnyitása`}
                  className="group relative block aspect-square w-full overflow-hidden bg-mist"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* hover: navy tint, accent bottom bar and a zoom icon */}
                  <span className="absolute inset-0 border-b-4 border-transparent bg-navy/0 transition-colors duration-300 group-hover:border-accent group-hover:bg-navy/35" />
                  <span
                    className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center bg-white text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <circle cx="10.5" cy="10.5" r="6.5" />
                      <path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6" />
                    </svg>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {current !== null && (
        <ImageViewer
          src={images[current].src}
          alt={images[current].alt}
          index={current}
          total={images.length}
          onClose={close}
          onNext={next}
          onPrev={prev}
        />
      )}
    </>
  );
}
