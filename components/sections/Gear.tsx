import {
  Camera,
  Aperture,
  Mic,
  Lightbulb,
  Music,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";
import { gearCategories } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  aperture: Aperture,
  mic: Mic,
  light: Lightbulb,
  dj: Music,
  video: Clapperboard,
};

function GearCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: string[];
}) {
  const Icon = iconMap[icon] ?? Camera;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="flex min-h-[5.5rem] w-full items-center gap-4 px-6 py-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-display text-lg font-medium text-white md:text-xl">{title}</h3>
          <p className="text-xs text-white/40">{items.length} items</p>
        </div>
      </div>

      <ul className="space-y-2 border-t border-white/10 px-6 py-5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-white/70"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Gear() {
  return (
    <section id="gear" className="bg-dark px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Equipment"
            title="Professional-grade gear"
            description="A full cinema kit on every shoot — bodies, lenses, audio, lighting, and production extras ready for your set."
            dark
          />
        </FadeIn>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 md:gap-5">
          {gearCategories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 60} className="h-full">
              <GearCard
                title={category.title}
                icon={category.icon}
                items={category.items}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
