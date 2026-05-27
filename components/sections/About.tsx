import { about } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-light px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="About"
            title={about.headline}
            centered={false}
          />
        </FadeIn>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn delay={100}>
            <div className="space-y-5">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <ul className="space-y-4">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-text">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
