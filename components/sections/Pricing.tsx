import { additionalServices } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Film, Users, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  edit: Film,
  users: Users,
};

export function Pricing() {
  return (
    <section id="pricing" className="bg-white px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Add-ons"
            title="Additional services"
            description="Extend your coverage or hand off post-production — flexible options to fit your project."
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {additionalServices.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-gold/20 bg-light p-8 md:p-10">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold text-dark">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-text">{service.title}</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-6 font-display text-xl font-semibold text-gold">{service.price}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
