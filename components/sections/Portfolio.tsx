import { portfolio } from "@/lib/content";
import { fetchShowcaseVideos, getShowcaseId } from "@/lib/vimeo";
import { FadeIn } from "@/components/ui/FadeIn";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { VimeoShowcase } from "@/components/ui/VimeoShowcase";

export async function Portfolio() {
  const showcaseId = getShowcaseId(portfolio.featuredVideo.url);
  const showcaseVideos = showcaseId ? await fetchShowcaseVideos(showcaseId) : [];

  return (
    <section id="work" className="bg-light px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Portfolio"
            title="Selected work"
            description="Cinematic wedding and event films from the KCStudios collection."
          />
        </FadeIn>

        <FadeIn delay={100}>
          {showcaseVideos.length > 0 ? (
            <VimeoShowcase
              videos={showcaseVideos}
              showcaseUrl={portfolio.featuredVideo.url}
              title={portfolio.featuredVideo.title}
              caption={portfolio.featuredVideo.caption}
            />
          ) : (
            <VideoEmbed
              url={portfolio.featuredVideo.url}
              title={portfolio.featuredVideo.title}
              caption={portfolio.featuredVideo.caption}
            />
          )}
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-12">
            <GalleryGrid
              items={portfolio.gallery}
              placeholderCount={portfolio.galleryPlaceholderCount}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
