import { stats } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";

export function Stats() {
  return (
    <section id="stats" className="bg-light px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Experience"
            title="Proven at scale"
            description="Trusted for high-stakes events where timing, culture, and quality all matter."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100}>
              <StatCard {...stat} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
