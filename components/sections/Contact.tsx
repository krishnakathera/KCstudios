import Link from "next/link";
import { Instagram, Mail, Youtube } from "lucide-react";
import { site } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-gold hover:text-gold"
    >
      {children}
    </a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-dark px-6 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <SectionHeader
            label="Contact"
            title="Let's create something unforgettable"
            description="Ready to discuss your next wedding, event, or production? Reach out and let's talk details."
            dark
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col items-center gap-6">
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-3 rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-dark transition-colors hover:bg-gold-light"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </Link>

            {site.bookingUrl && (
              <Link
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-gold hover:underline"
              >
                Book a consultation
              </Link>
            )}

            <div className="mt-4 flex gap-4">
              <SocialLink href={site.social.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.social.vimeo} label="Vimeo">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 9.645C4.603 6.893 3.834 5.517 3.011 5.517c-.179 0-.806.378-1.881 1.132L0 6.416c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.08 3.628 1.664 3.493 4.797z" />
                </svg>
              </SocialLink>
            </div>

            {!site.social.instagram && !site.social.youtube && !site.social.vimeo && (
              <p className="text-xs text-white/30">
                Add social links in <code className="text-gold/70">lib/content.ts</code>
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
