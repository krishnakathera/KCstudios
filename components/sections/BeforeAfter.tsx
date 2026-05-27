import { beforeAfter, beforeAfterPlaceholderCount } from "@/lib/content";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SlidersHorizontal } from "lucide-react";

function PlaceholderSlider({ label }: { label: string }) {
  return (
    <div className="w-full">
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-dark">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
          <SlidersHorizontal className="h-8 w-8 text-gold/50" strokeWidth={1.5} />
          <p className="font-display text-lg text-white/80">{label}</p>
          <p className="max-w-xs text-xs text-white/40">
            Drag-to-compare slider — add before/after pairs in{" "}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-gold">lib/content.ts</code>
          </p>
        </div>
        <div
          className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/20"
          aria-hidden
        />
      </div>
      <p className="mt-3 text-center text-sm font-medium text-muted">{label}</p>
    </div>
  );
}

export function BeforeAfterSection() {
  const hasItems = beforeAfter.length > 0;
  const placeholders = Array.from({ length: beforeAfterPlaceholderCount }, (_, i) => i);

  return (
    <section id="edits" className="bg-white px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Post-Production"
            title="Before & after"
            description="Showcase your editing craft — color grades, retouching, and cinematic cuts."
          />
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {hasItems
            ? beforeAfter.map((item, i) => (
                <FadeIn key={item.label} delay={i * 100}>
                  <BeforeAfterSlider {...item} />
                </FadeIn>
              ))
            : placeholders.map((i) => (
                <FadeIn key={i} delay={i * 100}>
                  <PlaceholderSlider label={`Edit example ${i + 1}`} />
                </FadeIn>
              ))}
        </div>
      </div>
    </section>
  );
}
