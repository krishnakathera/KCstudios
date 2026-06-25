"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import {
  formatDuration,
  type VimeoShowcaseVideo,
} from "@/lib/vimeo";

interface VimeoShowcaseProps {
  videos: VimeoShowcaseVideo[];
  showcaseUrl: string;
  title: string;
  caption?: string;
}

export function VimeoShowcase({
  videos,
  showcaseUrl,
  title,
  caption,
}: VimeoShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeVideo = videos[activeIndex] ?? videos[0];

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < maxScroll - 8);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, videos.length]);

  const scrollBy = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = Math.max(el.clientWidth * 0.75, 280);
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!activeVideo) return null;

  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-dark shadow-lg">
        <iframe
          key={activeVideo.id}
          src={activeVideo.embedUrl}
          title={activeVideo.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-4 px-1">
          <p className="text-sm font-medium text-muted">
            {videos.length} films — scroll or use arrows to browse
          </p>
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll films left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              aria-label="Scroll films right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 md:-mx-8">
          {canScrollLeft && (
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-light to-transparent md:w-16"
              aria-hidden
            />
          )}
          {canScrollRight && (
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-light via-light/80 to-transparent md:w-24"
              aria-hidden
            />
          )}

          {canScrollRight && (
            <div
              className="pointer-events-none absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-1 rounded-full bg-gold/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-dark shadow-md sm:flex"
              aria-hidden
            >
              More
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-6 pb-3 scroll-smooth snap-x snap-mandatory md:px-8 [scrollbar-width:thin] [scrollbar-color:var(--color-gold)_transparent]"
          >
            {videos.map((video, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group w-64 shrink-0 snap-start overflow-hidden rounded-xl border bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:w-72 ${
                    isActive
                      ? "border-gold ring-2 ring-gold/30"
                      : "border-black/5 hover:border-gold/30"
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden bg-dark">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-dark">
                        <Play className="h-4 w-4" fill="currentColor" strokeWidth={0} />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                      {formatDuration(video.duration)}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 font-medium text-text">{video.title}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll films left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-xs text-muted">Swipe or tap arrows</span>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              aria-label="Scroll films right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <figcaption className="mt-6 flex flex-col items-center gap-3 text-center">
        {caption && <p className="text-sm text-muted">{caption}</p>}
        <a
          href={showcaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold/80"
        >
          View full {title} on Vimeo
          <ExternalLink className="h-4 w-4" />
        </a>
      </figcaption>
    </figure>
  );
}
