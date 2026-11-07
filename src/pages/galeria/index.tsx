import { useCallback, useState } from "react";
import Seo from "@/lib/seo";
import ImageViewer from "@/components/ui/ImageViewer";
import SectionHeader from "@/components/ui/SectionHeader";

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
      setCurrent((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  );

  return (
    <>
      <Seo title="Galéria | Liftech.hu" description="Galéria" />
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "Galéria",
              subtitle: "Tekintse meg eddigi munkáinkat",
              description: "",
            }}
          />

          <ul className="mt-12.5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {images.map((image, index) => (
              <li key={image.src}>
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
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 border-b-4 border-transparent bg-navy/0 transition-colors duration-300 group-hover:border-accent group-hover:bg-navy/20" />
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
