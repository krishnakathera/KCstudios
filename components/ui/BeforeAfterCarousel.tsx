"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";

interface BeforeAfterItem {
  before: string;
  after: string;
  label: string;
}

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
}

export function BeforeAfterCarousel({ items }: BeforeAfterCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  const goTo = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };

  return (
    <div className="mx-auto w-full max-w-md md:max-w-xl">
      <div className="relative aspect-[16/10] w-full max-h-[min(52vw,280px)] md:max-h-[320px]">
        <BeforeAfterSlider key={activeItem.label} {...activeItem} className="absolute inset-0" />
      </div>
      <p className="mt-2 text-center text-sm font-medium text-text">{activeItem.label}</p>

      <div className="mt-4 flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-muted">
          {activeIndex + 1} of {items.length}
        </p>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous before and after"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex items-center gap-2">
            {items.map((item, i) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to ${item.label}`}
                aria-current={i === activeIndex ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all ${
                  i === activeIndex
                    ? "w-6 bg-gold"
                    : "w-2.5 bg-black/20 hover:bg-black/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next before and after"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-text shadow-sm transition-all hover:border-gold/40 hover:text-gold"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
