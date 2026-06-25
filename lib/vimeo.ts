export type VimeoShowcaseVideo = {
  id: number;
  title: string;
  url: string;
  embedUrl: string;
  thumbnail: string;
  duration: number;
};

export function getShowcaseId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments[0] === "showcase" && segments[1]) return segments[1];
    return null;
  } catch {
    return null;
  }
}

export function getVimeoVideoEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes("vimeo.com")) return null;

    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments[0] === "showcase" || segments[0] === "album") return null;

    if (segments.length >= 2) {
      return `https://player.vimeo.com/video/${segments[0]}?h=${segments[1]}`;
    }

    if (segments.length === 1) {
      return `https://player.vimeo.com/video/${segments[0]}`;
    }

    return null;
  } catch {
    return null;
  }
}

export async function fetchShowcaseVideos(
  showcaseId: string
): Promise<VimeoShowcaseVideo[]> {
  const response = await fetch(
    `https://vimeo.com/api/v2/album/${showcaseId}/videos.json`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) return [];

  const data = (await response.json()) as {
    id: number;
    title: string;
    url: string;
    thumbnail_large: string;
    duration: number;
  }[];

  return data
    .map((video) => {
      const embedUrl = getVimeoVideoEmbedUrl(video.url);
      if (!embedUrl) return null;

      return {
        id: video.id,
        title: video.title,
        url: video.url,
        embedUrl,
        thumbnail: video.thumbnail_large,
        duration: video.duration,
      };
    })
    .filter((video): video is VimeoShowcaseVideo => video !== null);
}

export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
