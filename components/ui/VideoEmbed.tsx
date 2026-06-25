import { Play } from "lucide-react";
import { getVimeoVideoEmbedUrl } from "@/lib/vimeo";

interface VideoEmbedProps {
  url?: string;
  title?: string;
  caption?: string;
}

function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtube.com") || parsed.hostname.includes("youtu.be")) {
      let videoId = parsed.searchParams.get("v");
      if (!videoId && parsed.hostname.includes("youtu.be")) {
        videoId = parsed.pathname.slice(1);
      }
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname.includes("vimeo.com")) {
      return getVimeoVideoEmbedUrl(url);
    }

    return url;
  } catch {
    return null;
  }
}

export function VideoEmbed({ url, title = "Featured video", caption }: VideoEmbedProps) {
  const embedUrl = url ? getEmbedUrl(url) : null;

  if (!embedUrl) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-dark">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
            <Play className="h-7 w-7 text-gold" fill="currentColor" strokeWidth={0} />
          </div>
          <div>
            <p className="font-display text-xl text-white md:text-2xl">Your reel goes here</p>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Add a YouTube or Vimeo URL in{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-gold">
                lib/content.ts
              </code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <figure>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
