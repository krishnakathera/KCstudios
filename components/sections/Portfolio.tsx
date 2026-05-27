import { portfolio } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export function Portfolio() {
  return (
    <section id="work" className="bg-light px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Portfolio"
            title="Selected work"
            description="Featured reel and gallery — add your best photos and videos to make this section yours."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <VideoEmbed
            url={portfolio.featuredVideo.url}
            title={portfolio.featuredVideo.title}
            caption={portfolio.featuredVideo.caption}
          />
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
