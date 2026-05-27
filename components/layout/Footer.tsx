import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark px-6 py-16 text-white md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <Link href="#top" className="relative h-16 w-32" aria-label="K C STUDIOS home">
          <Image src="/logo.png" alt="K C STUDIOS" fill className="object-contain" />
        </Link>
        <p className="max-w-md text-sm leading-relaxed text-white/50">{site.tagline}</p>
        <div className="h-px w-12 bg-gold" aria-hidden />
        <p className="text-xs tracking-widest text-white/30 uppercase">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
