"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GripVertical, Minus, Plus, RotateCcw } from "lucide-react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  label: string;
  className?: string;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const HANDLE_HIT_RADIUS = 48;

export function BeforeAfterSlider({
  before,
  after,
  label,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState<"slider" | "pan" | null>(null);
  const panStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const imageTransform = {
    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
    transformOrigin: "center center",
  };

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const isNearHandle = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return false;
    const rect = container.getBoundingClientRect();
    const handleX = rect.left + (position / 100) * rect.width;
    return Math.abs(clientX - handleX) <= HANDLE_HIT_RADIUS;
  }, [position]);

  const clampPan = useCallback(
    (x: number, y: number, nextZoom: number) => {
      const container = containerRef.current;
      if (!container || nextZoom <= 1) return { x: 0, y: 0 };

      const maxX = ((nextZoom - 1) * container.clientWidth) / 2;
      const maxY = ((nextZoom - 1) * container.clientHeight) / 2;

      return {
        x: Math.max(-maxX, Math.min(maxX, x)),
        y: Math.max(-maxY, Math.min(maxY, y)),
      };
    },
    []
  );

  const setZoomLevel = useCallback(
    (nextZoom: number) => {
      const clamped = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, nextZoom));
      setZoom(clamped);
      setPan((current) => clampPan(current.x, current.y, clamped));
      if (clamped === 1) setPan({ x: 0, y: 0 });
    },
    [clampPan]
  );

  const startInteraction = useCallback(
    (clientX: number, clientY: number, target: EventTarget | null) => {
      const onHandle =
        target instanceof Element && Boolean(target.closest("[data-slider-handle]"));
      const nearHandle = onHandle || isNearHandle(clientX);

      if (nearHandle) {
        setDragging("slider");
        updatePosition(clientX);
        return;
      }

      if (zoom > 1) {
        setDragging("pan");
        panStart.current = { x: clientX, y: clientY, panX: pan.x, panY: pan.y };
        return;
      }

      setDragging("slider");
      updatePosition(clientX);
    },
    [isNearHandle, pan.x, pan.y, updatePosition, zoom]
  );

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (dragging === "slider") {
        updatePosition(clientX);
        return;
      }

      const dx = clientX - panStart.current.x;
      const dy = clientY - panStart.current.y;
      setPan(
        clampPan(
          panStart.current.panX + dx,
          panStart.current.panY + dy,
          zoom
        )
      );
    };

    const onUp = () => setDragging(null);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [clampPan, dragging, updatePosition, zoom]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const cursorClass =
    dragging === "pan"
      ? "cursor-grabbing"
      : zoom > 1
        ? "cursor-grab"
        : "cursor-col-resize";

  return (
    <div className={`h-full ${className}`}>
      <div
        ref={containerRef}
        className={`relative h-full w-full select-none overflow-hidden rounded-2xl border border-black/10 bg-dark shadow-sm ${cursorClass}`}
        onMouseDown={(e) => startInteraction(e.clientX, e.clientY, e.target)}
        onTouchStart={(e) =>
          startInteraction(e.touches[0].clientX, e.touches[0].clientY, e.target)
        }
      >
        <div className="absolute inset-0 overflow-hidden bg-dark">
          <div className="relative h-full w-full" style={imageTransform}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={after}
              alt={`${label} — after`}
              className="absolute inset-0 h-full w-full object-contain"
              draggable={false}
              loading="eager"
            />
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden bg-dark"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="relative h-full w-full" style={imageTransform}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={before}
              alt={`${label} — before`}
              className="absolute inset-0 h-full w-full object-contain"
              draggable={false}
              loading="eager"
            />
          </div>
        </div>

        <div
          className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <button
            type="button"
            data-slider-handle
            aria-label={`Compare before and after for ${label}. Use arrow keys to adjust.`}
            className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-col-resize items-center justify-center rounded-full border-2 border-white bg-gold text-dark shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            onKeyDown={onKeyDown}
            onMouseDown={(e) => {
              e.stopPropagation();
              setDragging("slider");
              updatePosition(e.clientX);
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              setDragging("slider");
              updatePosition(e.touches[0].clientX);
            }}
          >
            <GripVertical className="h-4 w-4" />
          </button>
        </div>

        <span className="absolute top-3 left-3 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-3 right-3 z-20 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          After
        </span>

        <div className="absolute right-2 bottom-2 z-20 flex items-center gap-1.5 rounded-full border border-white/30 bg-black/75 p-1.5 shadow-lg backdrop-blur-sm sm:right-3 sm:bottom-3">
          <button
            type="button"
            aria-label="Zoom out"
            onClick={(e) => {
              e.stopPropagation();
              setZoomLevel(zoom - 0.25);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Minus className="h-5 w-5" strokeWidth={2.5} />
          </button>
          <span className="min-w-12 text-center text-sm font-semibold text-white">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            aria-label="Zoom in"
            onClick={(e) => {
              e.stopPropagation();
              setZoomLevel(zoom + 0.25);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Plus className="h-5 w-5" strokeWidth={2.5} />
          </button>
          {zoom > 1 && (
            <button
              type="button"
              aria-label="Reset zoom"
              onClick={(e) => {
                e.stopPropagation();
                resetView();
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <RotateCcw className="h-5 w-5" strokeWidth={2.5} />
            </button>
          )}
        </div>

        {zoom > 1 && (
          <p className="absolute bottom-2 left-2 z-20 rounded-full bg-black/75 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:bottom-3 sm:left-3">
            Drag to pan
          </p>
        )}
      </div>
    </div>
  );
}
