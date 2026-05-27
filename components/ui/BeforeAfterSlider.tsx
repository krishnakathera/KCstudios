"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label: string;
}

export function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const onUp = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updatePosition]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full cursor-col-resize select-none overflow-hidden rounded-2xl border border-black/10 shadow-sm"
        onMouseDown={(e) => {
          setDragging(true);
          updatePosition(e.clientX);
        }}
        onTouchStart={(e) => {
          setDragging(true);
          updatePosition(e.touches[0].clientX);
        }}
      >
        <Image src={after} alt={`${label} — after`} fill className="object-cover" sizes="100vw" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={before} alt={`${label} — before`} fill className="object-cover" sizes="100vw" />
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            aria-label={`Compare before and after for ${label}. Use arrow keys to adjust.`}
            className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-gold text-dark shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            onKeyDown={onKeyDown}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <GripVertical className="h-4 w-4" />
          </button>
        </div>

        <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          After
        </span>
      </div>
      <p className="mt-3 text-center text-sm font-medium text-text">{label}</p>
    </div>
  );
}
