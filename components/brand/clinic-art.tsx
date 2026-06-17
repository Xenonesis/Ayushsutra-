import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* ──────────────────────────────────────────────────────────────────────
   ClinicArt — generated SVG illustrations for the clinic card hero.

   Each clinic gets a unique, theme-fitting motif rendered as inline SVG.
   No external assets, no `public/` directory needed. The illustrations
   match the visual language established in `components/brand/decor.tsx`:
   botanical line art, lotus motifs, soft gradients, currentColor strokes.

   The wrapper `<ClinicCardArt>` is what the page consumes — it looks up
   the right SVG by `clinicId` and falls back to a solid color block with
   the clinic name if no illustration is registered.
   ────────────────────────────────────────────────────────────────────── */

type ClinicArtProps = {
  clinicId: string;
  clinicName: string;
  className?: string;
};

/** Container width:height ratio used by every illustration. */
const VIEW_BOX = "0 0 800 450";

/* ───────────────────────── Individual clinic illustrations ───────────────────────── */

/** Dhanvantari — Lord of Ayurveda. Sun + leaf motif. */
function DhanvantariArt() {
  return (
    <svg
      viewBox={VIEW_BOX}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="h-full w-full text-primary"
      aria-hidden="true"
    >
      {/* Soft circular sun field */}
      <defs>
        <radialGradient id="dhan-glow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="450" fill="url(#dhan-glow)" />

      {/* Sun rays */}
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1="400"
          y1="190"
          x2="400"
          y2="80"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          strokeLinecap="round"
          transform={`rotate(${i * 22.5} 400 190)`}
        />
      ))}

      {/* Sun disc */}
      <circle
        cx="400"
        cy="190"
        r="58"
        className="fill-accent/20 stroke-primary"
        strokeWidth="1.5"
      />
      <circle
        cx="400"
        cy="190"
        r="38"
        className="fill-accent/30 stroke-primary"
        strokeWidth="1.2"
      />
      <circle cx="400" cy="190" r="6" className="fill-accent" />

      {/* Bottom horizon line — gentle wave */}
      <path
        d="M0 360 C 160 340, 320 380, 480 360 S 800 340, 800 360"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Botanical sprigs along the horizon */}
      {[
        { x: 120, scale: 0.55 },
        { x: 280, scale: 0.7 },
        { x: 520, scale: 0.7 },
        { x: 680, scale: 0.55 },
      ].map(({ x, scale }) => (
        <g
          key={x}
          stroke="currentColor"
          strokeOpacity="0.45"
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          transform={`translate(${x},360) scale(${scale})`}
        >
          <path d="M0 0 V -90" />
          <path d="M0 -30 C -25 -36, -42 -52, -44 -72 C -22 -68, -6 -54, 0 -32" />
          <path d="M0 -30 C 25 -36, 42 -52, 44 -72 C 22 -68, 6 -54, 0 -32" />
          <path d="M0 -60 C -18 -64, -30 -76, -30 -88" />
          <path d="M0 -60 C 18 -64, 30 -76, 30 -88" />
        </g>
      ))}
    </svg>
  );
}

/** Sushruta — father of surgery. Rounded mandala / chakra motif. */
function SushrutaArt() {
  return (
    <svg
      viewBox={VIEW_BOX}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="h-full w-full text-primary"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sush-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="450" fill="url(#sush-glow)" />

      {/* Centered mandala */}
      <g transform="translate(400 225)">
        {/* Outer ring with petals */}
        {Array.from({ length: 12 }).map((_, i) => (
          <path
            key={i}
            d="M0 0 C -30 -50, -30 -90, 0 -130 C 30 -90, 30 -50, 0 0"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            transform={`rotate(${i * 30})`}
          />
        ))}

        {/* Concentric circles */}
        <circle r="120" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.2" />
        <circle r="85" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.2" />
        <circle r="55" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.2" />

        {/* Inner lotus petals */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d="M0 0 C -20 -16, -20 -38, 0 -52 C 20 -38, 20 -16, 0 0"
            stroke="currentColor"
            strokeOpacity="0.5"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="currentColor"
            fillOpacity="0.12"
            transform={`rotate(${i * 45})`}
          />
        ))}

        {/* Center dot */}
        <circle r="8" className="fill-accent" />
      </g>
    </svg>
  );
}

/** Charaka — father of medicine. Concentric arches evoking ancient text. */
function CharakaArt() {
  return (
    <svg
      viewBox={VIEW_BOX}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="h-full w-full text-primary"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="charaka-fade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.12" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="800" height="450" fill="url(#charaka-fade)" />

      {/* Central arch — like a temple doorway / manuscript folio */}
      <g transform="translate(400 380)">
        <path
          d="M-140 0 V -180 C -140 -260, 140 -260, 140 -180 V 0"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M-110 0 V -170 C -110 -235, 110 -235, 110 -170 V 0"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M-80 0 V -155 C -80 -210, 80 -210, 80 -155 V 0"
          stroke="currentColor"
          strokeOpacity="0.25"
          strokeWidth="1"
          fill="none"
        />

        {/* Central flame / drop motif inside the arch */}
        <g transform="translate(0 -100)">
          <path
            d="M0 30 C -22 0, -22 -28, 0 -52 C 22 -28, 22 0, 0 30 Z"
            className="fill-accent/25 stroke-primary"
            strokeOpacity="0.6"
            strokeWidth="1.2"
          />
          <circle cx="0" cy="-8" r="3" className="fill-accent" />
        </g>
      </g>

      {/* Script-like horizontal lines (left and right of arch) */}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <g key={`l-${i}`} stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
          <line x1="60" y1={100 + i * 22} x2="220" y2={100 + i * 22} />
          <line x1="580" y1={100 + i * 22} x2="740" y2={100 + i * 22} />
        </g>
      ))}
    </svg>
  );
}

/** Arnava — "ocean / wave" of holistic healing. Layered waves. */
function ArnavaArt() {
  return (
    <svg
      viewBox={VIEW_BOX}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      className="h-full w-full text-primary"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="arnava-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
        <radialGradient id="arnava-sun" cx="50%" cy="35%" r="40%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="450" fill="url(#arnava-sky)" />
      <rect x="0" y="0" width="800" height="450" fill="url(#arnava-sun)" />

      {/* Sun disc behind waves */}
      <circle
        cx="400"
        cy="160"
        r="55"
        className="fill-accent/20 stroke-primary"
        strokeOpacity="0.4"
        strokeWidth="1.2"
      />
      <circle cx="400" cy="160" r="4" className="fill-accent" />

      {/* Layered waves — yatha "ocean" of healing */}
      {[
        { y: 250, opacity: 0.45, width: 1.6 },
        { y: 290, opacity: 0.4, width: 1.4 },
        { y: 330, opacity: 0.5, width: 1.8 },
        { y: 375, opacity: 0.45, width: 1.4 },
        { y: 420, opacity: 0.55, width: 2 },
      ].map((w, i) => (
        <path
          key={i}
          d={`M0 ${w.y} C 120 ${w.y - 20}, 240 ${w.y + 20}, 360 ${w.y} S 600 ${w.y - 20}, 720 ${w.y} S 800 ${w.y + 10}, 800 ${w.y}`}
          stroke="currentColor"
          strokeOpacity={w.opacity}
          strokeWidth={w.width}
          strokeLinecap="round"
          fill="none"
        />
      ))}

      {/* A small leaf floating on the top wave */}
      <g
        transform="translate(220 248)"
        stroke="currentColor"
        strokeOpacity="0.6"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="currentColor"
        fillOpacity="0.2"
      >
        <path d="M0 0 C 12 -6, 22 -2, 26 8 C 18 12, 6 10, 0 0 Z" />
        <line x1="2" y1="2" x2="22" y2="6" />
      </g>
    </svg>
  );
}

/* ───────────────────────── Registry ───────────────────────── */

const CLINIC_ART: Record<string, ReactNode> = {
  dhanvantari: <DhanvantariArt />,
  sushruta: <SushrutaArt />,
  charaka: <CharakaArt />,
  arnava: <ArnavaArt />,
};

export function getClinicArt(clinicId: string): ReactNode | null {
  return CLINIC_ART[clinicId] ?? null;
}

/* ───────────────────────── Public component ───────────────────────── */

export function ClinicCardArt({ clinicId, clinicName, className }: ClinicArtProps) {
  const art = getClinicArt(clinicId);

  return (
    <div
      className={cn(
        "relative mb-4 aspect-video w-full overflow-hidden rounded-2xl bg-secondary/40",
        className
      )}
    >
      {art ? (
        art
      ) : (
        // Solid color fallback — no emoji, just a clean branded block.
        <div className="flex h-full w-full items-center justify-center bg-primary/15 px-6 text-center">
          <span className="font-display text-lg leading-tight text-ink/70">
            {clinicName}
          </span>
        </div>
      )}
    </div>
  );
}
