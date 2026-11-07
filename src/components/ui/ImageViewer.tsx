import { useEffect, useRef } from "react";

interface ImageViewerProps {
  src: string;
  alt: string;
  index: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const navButton =
  "flex h-12 w-12 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-white md:h-14 md:w-14";

const ImageViewer = ({
  src,
  alt,
  index,
  total,
  onClose,
  onNext,
  onPrev,
}: ImageViewerProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  // keyboard control, scroll lock and initial focus while the lightbox is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "ArrowLeft") onPrev();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) (dx < 0 ? onNext : onPrev)();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Képnézegető"
      className="fixed inset-0 z-[100000] flex flex-col bg-navy-deep/95"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
      <div className="flex items-center justify-between px-4 py-3 text-white md:px-8">
        <span className="font-display text-xl font-semibold tracking-widest">
          {index + 1} / {total}
        </span>
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Bezárás"
          className={navButton}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-24">
        <img
          src={src}
          alt={alt}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Előző kép"
          className={`${navButton} absolute left-2 top-1/2 -translate-y-1/2 md:left-6`}
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M10 2L2 10l8 8" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Következő kép"
          className={`${navButton} absolute right-2 top-1/2 -translate-y-1/2 md:right-6`}
        >
          <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
            <path d="M2 2l8 8-8 8" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
