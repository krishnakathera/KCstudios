import Image from "next/image";
import { ImageIcon } from "lucide-react";

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

export function GalleryGrid({ items, placeholderCount = 6 }: GalleryGridProps) {
  const placeholders = Array.from({ length: placeholderCount }, (_, i) => i);
  const hasItems = items.length > 0;

  if (!hasItems) {
    return (
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {placeholders.map((i) => (
          <div
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-white"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-dark/5 p-4 text-center transition-colors group-hover:bg-dark/10">
              <ImageIcon className="h-6 w-6 text-muted/50" strokeWidth={1.5} />
              <p className="text-xs text-muted/70">Add your work here</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={item.src}
          className="group overflow-hidden rounded-xl bg-black/[0.03]"
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={i < 3}
          />
        </div>
      ))}
    </div>
  );
}
