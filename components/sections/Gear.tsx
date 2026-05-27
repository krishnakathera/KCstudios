"use client";

import { useState } from "react";
import {
  Camera,
  Aperture,
  Mic,
  Lightbulb,
  Plane,
  ChevronDown,
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
  drone: Plane,
};

function GearAccordion({
  title,
  icon,
  items,
  defaultOpen = false,
}: {
  title: string;
  icon: string;
  items: string[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const Icon = iconMap[icon] ?? Camera;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
            <Icon className="h-4 w-4" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display text-lg font-medium text-white md:text-xl">{title}</h3>
            <p className="text-xs text-white/40">{items.length} items</p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
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
      </div>
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
            description="A fully equipped studio on location — cinema bodies, pro lenses, audio, lighting, and aerial."
            dark
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {gearCategories.map((category, i) => (
            <FadeIn key={category.id} delay={i * 60}>
              <GearAccordion
                title={category.title}
                icon={category.icon}
                items={category.items}
                defaultOpen={i === 0}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
