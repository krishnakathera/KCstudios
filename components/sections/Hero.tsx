import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center bg-dark px-6 pt-24 pb-16 text-center md:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 flex max-w-3xl flex-col items-center">
        <div className="animate-fade-in-up relative h-48 w-64 md:h-56 md:w-80 lg:h-64 lg:w-96">
          <Image
            src="/logo.png"
            alt={site.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        <p className="animate-fade-in-up animate-delay-100 mt-8 max-w-xl font-display text-xl leading-relaxed text-white/80 md:text-2xl lg:text-3xl">
          {site.tagline}
        </p>

        <div className="animate-fade-in-up animate-delay-200 mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#work"
            className="rounded-full bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-dark transition-colors hover:bg-gold-light"
          >
            View Work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-white/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:border-gold hover:text-gold"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-gold"
        aria-label="Scroll to content"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
