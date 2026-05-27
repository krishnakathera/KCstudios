import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  category?: string;
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
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {items.map((item, i) => (
        <div
          key={item.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-xl"
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
            priority={i < 3}
          />
          {item.category && (
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-xs font-medium text-white">{item.category}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
