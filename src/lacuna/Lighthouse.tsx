type Variant = "color" | "reverse" | "warm";

type Props = {
  size?: number;
  variant?: Variant;
  className?: string;
};

// Palette per variant. The reverse colourway is for dark backgrounds.
const skins = {
  color: {
    beam: "#C8702F",
    dome: "#C8702F",
    glow: "#E5D5A2",
    gallery: "#34405C",
    tower: "#4F6088",
    stripe: "#E5D5A2",
    base: "#34405C",
  },
  reverse: {
    beam: "#E5D5A2",
    dome: "#DC8D64",
    glow: "#FAF9F2",
    gallery: "#9DB4C2",
    tower: "#FAF9F2",
    stripe: "#DC8D64",
    base: "#9DB4C2",
  },
  // Cinematic colourway: teal tower, ochre stripe, rust beacon.
  warm: {
    beam: "#B0492A",
    dome: "#B0492A",
    glow: "#E6C28A",
    gallery: "#2C5249",
    tower: "#3A665C",
    stripe: "#E6C28A",
    base: "#2C5249",
  },
} as const;

export default function Lighthouse({ size = 40, variant = "color", className }: Props) {
  const c = skins[variant];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <path d="M30 14 L4 6 L8 21 Z" fill={c.beam} opacity="0.5" />
      <path d="M34 14 L60 6 L56 21 Z" fill={c.beam} opacity="0.5" />
      <path d="M25 18 L39 18 L32 7 Z" fill={c.dome} />
      <circle cx="32" cy="15.5" r="3.5" fill={c.glow} />
      <path d="M23 18 L41 18 L41 24 L23 24 Z" fill={c.gallery} />
      <path d="M24 24 L40 24 L45 57 L19 57 Z" fill={c.tower} />
      <path d="M20.6 39 L43.4 39 L44.3 47 L19.7 47 Z" fill={c.stripe} />
      <path d="M15 57 L49 57 L49 61 L15 61 Z" fill={c.base} />
    </svg>
  );
}
