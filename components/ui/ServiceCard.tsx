import {
  Camera,
  Clapperboard,
  Plane,
  Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  video: Clapperboard,
  drone: Plane,
  production: Layers,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="group flex flex-col rounded-2xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-dark">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="font-display text-xl font-medium text-text md:text-2xl">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted md:text-base">{description}</p>
    </div>
  );
}
