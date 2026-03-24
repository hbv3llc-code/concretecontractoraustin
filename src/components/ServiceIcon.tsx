import {
  Car,
  Sun,
  Building,
  Minus,
  Wrench,
  Layers,
  Paintbrush,
  Hammer,
  Building2,
} from "lucide-react";
import type { FC } from "react";

type IconProps = { size?: number; className?: string };

const iconMap: Record<string, FC<IconProps>> = {
  "concrete-driveways": Car,
  "concrete-patios": Sun,
  "concrete-foundations": Building,
  "concrete-flatwork": Minus,
  "concrete-repair": Wrench,
  "retaining-walls": Layers,
  "stamped-decorative-concrete": Paintbrush,
  "concrete-removal": Hammer,
  "commercial-concrete": Building2,
};

export default function ServiceIcon({
  slug,
  size = 24,
  className,
}: {
  slug: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[slug];
  if (!Icon) return null;
  return <Icon size={size} className={className} />;
}
