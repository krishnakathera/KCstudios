interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  dark = false,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-gold" : "text-gold"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-text"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            dark ? "text-white/70" : "text-muted"
          } ${centered ? "" : "mx-0"}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-px w-12 bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
