import { services } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeader
            label="Services"
            title="Hire us for your next shoot"
            description="Second shooter and freelance photo & video coverage — built to support studios, lead shooters, and production teams."
          />
        </FadeIn>

        <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 md:gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 80} className="h-full">
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
