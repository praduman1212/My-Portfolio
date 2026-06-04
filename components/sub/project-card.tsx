import Image from "next/image";
import Link from "next/link";
import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  /** When set (e.g. YogSkool), shows two images at a time and rotates through pairs. */
  gallery?: readonly string[];
  /** When set with `gallery`, shows one image at a time and advances every N ms (e.g. Specsvue). */
  gallerySingleAutoplayMs?: number;
};

/** Renders `**like this**` in copy as highlighted technology terms. */
function renderHighlightedDescription(description: string) {
  const parts = description.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span
        key={i}
        className="font-semibold text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.35)]"
      >
        {part}
      </span>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}

function chunkPairs(images: readonly string[]): string[][] {
  const pairs: string[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    pairs.push(images.slice(i, i + 2));
  }
  return pairs;
}

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  gallery,
  gallerySingleAutoplayMs,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const plainWords = description.replace(/\*\*/g, "").trim().split(/\s+/).filter(Boolean);

  const slideMode = Boolean(
    gallery &&
      gallery.length > 0 &&
      typeof gallerySingleAutoplayMs === "number" &&
      gallerySingleAutoplayMs > 0
  );

  const pairs = useMemo(() => {
    if (!gallery || gallery.length < 2 || slideMode) return [];
    return chunkPairs(gallery);
  }, [gallery, slideMode]);

  const [pairIndex, setPairIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const pauseRotateRef = useRef(false);
  const pairCountRef = useRef(pairs.length);
  pairCountRef.current = pairs.length;

  useEffect(() => {
    if (slideMode && gallery && gallery.length > 1) {
      const n = gallery.length;
      const ms = gallerySingleAutoplayMs ?? 4000;
      const id = window.setInterval(() => {
        if (pauseRotateRef.current) return;
        setSlideIndex((i) => (i + 1) % n);
      }, ms);
      return () => window.clearInterval(id);
    }
    if (pairs.length <= 1) return;
    const id = window.setInterval(() => {
      if (pauseRotateRef.current) return;
      const n = pairCountRef.current;
      if (n <= 1) return;
      setPairIndex((i) => (i + 1) % n);
    }, 5000);
    return () => window.clearInterval(id);
  }, [slideMode, gallery, pairs.length, gallerySingleAutoplayMs]);

  const goToPair = useCallback((i: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPairIndex(i);
  }, []);

  const goToSlide = useCallback((i: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSlideIndex(i);
  }, []);

  const showPairGallery = pairs.length > 0;
  const safePairIndex = pairs.length > 0 ? Math.min(pairIndex, pairs.length - 1) : 0;
  const currentPair = pairs[safePairIndex] ?? [];

  const safeSlideIndex =
    gallery && gallery.length > 0 ? Math.min(slideIndex, gallery.length - 1) : 0;
  const currentSlideSrc = gallery?.[safeSlideIndex];

  const slideLabel =
    gallery && gallery.length === 2
      ? safeSlideIndex === 0
        ? "Storefront"
        : "Admin panel"
      : `Screen ${safeSlideIndex + 1}`;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative min-w-0 overflow-hidden rounded-xl border border-[#2A0E61] bg-[rgba(3,0,20,0.7)] shadow-lg transition hover:scale-105 hover:shadow-purple-500/40"
    >
      <div className="min-w-0 p-3 sm:p-4">
        <h1
          title={title}
          className="mb-2 truncate text-base font-bold text-cyan-400 sm:text-lg md:text-xl"
        >
          {title}
        </h1>

        <div
          className="flex flex-1 flex-col items-center justify-center p-3"
          onMouseEnter={() => {
            pauseRotateRef.current = true;
          }}
          onMouseLeave={() => {
            pauseRotateRef.current = false;
          }}
        >
          {slideMode && gallery && currentSlideSrc ? (
            <>
              <motion.div
                key={safeSlideIndex}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative mx-auto h-[220px] w-full max-w-md overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/10 sm:h-[240px]"
              >
                <Image
                  src={currentSlideSrc}
                  alt={`${title} — ${slideLabel}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-contain object-top"
                  loading={safeSlideIndex === 0 ? "eager" : "lazy"}
                />
              </motion.div>
              <span className="mt-2 text-center text-[11px] font-semibold tracking-wide text-cyan-300/90 sm:text-xs">
                {slideLabel}
              </span>
              {gallery.length > 1 && (
                <div
                  className="mt-2 flex items-center justify-center gap-2"
                  role="tablist"
                  aria-label="Screenshots"
                >
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === safeSlideIndex}
                      aria-label={`Screenshot ${i + 1} of ${gallery.length}`}
                      onClick={goToSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === safeSlideIndex
                          ? "w-7 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                          : "w-2 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : showPairGallery ? (
            <>
              <motion.div
                key={safePairIndex}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="grid w-full grid-cols-2 gap-2 sm:gap-3"
              >
                {currentPair.map((imgSrc, i) => (
                  <div
                    key={`${safePairIndex}-${imgSrc}`}
                    className="flex min-h-0 flex-col gap-1"
                  >
                    <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/10 sm:h-[220px]">
                      <Image
                        src={imgSrc}
                        alt={
                          gallery && gallery.length === 2
                            ? `${title} — ${i === 0 ? "Storefront" : "Admin panel"}`
                            : `${title} — screen ${safePairIndex * 2 + i + 1}`
                        }
                        fill
                        sizes="(max-width: 768px) 42vw, 280px"
                        className="object-contain object-top"
                        loading={safePairIndex === 0 && i === 0 ? "eager" : "lazy"}
                      />
                    </div>
                    {gallery && gallery.length === 2 && !slideMode && (
                      <span className="text-center text-[11px] font-semibold tracking-wide text-cyan-300/90 sm:text-xs">
                        {i === 0 ? "Storefront" : "Admin panel"}
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
              {pairs.length > 1 && (
                <div
                  className="mt-2 flex items-center justify-center gap-2"
                  role="tablist"
                  aria-label="Screenshot pairs"
                >
                  {pairs.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === safePairIndex}
                      aria-label={`Screens ${i * 2 + 1}–${Math.min(i * 2 + 2, gallery?.length ?? 0)}`}
                      onClick={goToPair(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === safePairIndex
                          ? "w-7 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
                          : "w-2 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="relative flex w-full items-center justify-center">
              <Image
                src={src}
                alt={title}
                width={600}
                height={400}
                className="max-h-[260px] w-auto object-contain rounded-lg"
                loading="lazy"
                placeholder="blur"
                blurDataURL={src}
              />
            </div>
          )}
        </div>

        <p
          className={`mt-2 text-sm text-gray-300 transition-all duration-300 sm:text-base ${
            !isExpanded ? "line-clamp-4" : ""
          }`}
        >
          {renderHighlightedDescription(description)}
        </p>

        {plainWords.length > 25 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className="mt-2 text-sm text-cyan-400 hover:underline"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </Link>
  );
};
