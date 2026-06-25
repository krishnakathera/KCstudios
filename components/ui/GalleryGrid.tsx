"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

interface GalleryItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface GalleryGridProps {
  items: GalleryItem[];
  placeholderCount?: number;
}

/** Relative height of an image at column width = 1 */
function aspectHeight(item: GalleryItem) {
  return item.height / item.width;
}

/** Gap between stacked images, expressed in the same units as aspectHeight */
const GAP_RATIO = 0.032;

function columnTotalHeight(column: GalleryItem[]) {
  if (column.length === 0) return 0;
  const content = column.reduce((sum, item) => sum + aspectHeight(item), 0);
  const gaps = (column.length - 1) * GAP_RATIO;
  return content + gaps;
}

function optimizePack(items: GalleryItem[], columnCount: number): GalleryItem[][] {
  if (items.length === 0) {
    return Array.from({ length: columnCount }, () => []);
  }

  if (columnCount === 1) {
    return [items];
  }

  let bestColumns: GalleryItem[][] = Array.from({ length: columnCount }, () => []);
  let bestSpread = Infinity;

  const columns: GalleryItem[][] = Array.from({ length: columnCount }, () => []);

  function search(index: number) {
    if (index === items.length) {
      const heights = columns.map(columnTotalHeight);
      const spread = Math.max(...heights) - Math.min(...heights);

      if (spread < bestSpread) {
        bestSpread = spread;
        bestColumns = columns.map((column) => [...column]);
      }
      return;
    }

    const item = items[index];

    for (let col = 0; col < columnCount; col++) {
      columns[col].push(item);
      search(index + 1);
      columns[col].pop();
    }
  }

  search(0);
  return bestColumns;
}

function GalleryImage({ item, priority }: { item: GalleryItem; priority?: boolean }) {
  return (
    <div className="group overflow-hidden rounded-xl">
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}

function useColumnCount() {
  const [columnCount, setColumnCount] = useState(2);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setColumnCount(media.matches ? 3 : 2);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return columnCount;
}

export function GalleryGrid({ items, placeholderCount = 6 }: GalleryGridProps) {
  const columnCount = useColumnCount();
  const hasItems = items.length > 0;

  const columns = useMemo(
    () => optimizePack(hasItems ? items : [], columnCount),
    [hasItems, items, columnCount]
  );

  if (!hasItems) {
    const placeholders = Array.from({ length: placeholderCount }, (_, i) => ({
      src: "",
      alt: "",
      width: i % 3 === 0 ? 1600 : 1067,
      height: i % 3 === 0 ? 1067 : 1600,
    }));
    const placeholderColumns = optimizePack(placeholders, columnCount);
    const gapClass = columnCount === 3 ? "gap-3" : "gap-2";

    return (
      <div className={`flex items-stretch ${gapClass}`}>
        {placeholderColumns.map((column, colIndex) => (
          <div key={colIndex} className={`flex min-w-0 flex-1 flex-col ${gapClass}`}>
            {column.map((item, i) => (
              <div
                key={`${colIndex}-${i}`}
                className="overflow-hidden rounded-xl border border-black/10 bg-white"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-dark/5 p-4 text-center">
                  <ImageIcon className="h-6 w-6 text-muted/50" strokeWidth={1.5} />
                  <p className="text-xs text-muted/70">Add your work here</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  const gapClass = columnCount === 3 ? "gap-3" : "gap-2";

  return (
    <div className={`flex items-stretch ${gapClass}`}>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className={`flex min-w-0 flex-1 flex-col ${gapClass}`}>
          {column.map((item) => (
            <GalleryImage
              key={item.src}
              item={item}
              priority={items.indexOf(item) < 3}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
