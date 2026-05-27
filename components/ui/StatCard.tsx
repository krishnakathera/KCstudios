interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
      <p className="font-display text-4xl font-semibold text-gold md:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-text">{label}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
