import { cn } from "@/lib/utils";

/* ───────────────────────── Botanical line art ───────────────────────── */

export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      className={cn("text-primary/40", className)}
      aria-hidden="true"
    >
      <path
        d="M60 190V40"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[35, 60, 85, 110, 135].map((y, i) => (
        <g key={y} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path
            d={`M60 ${190 - y} C 40 ${190 - y - 6}, 28 ${190 - y - 18}, 30 ${190 - y - 34} C 46 ${190 - y - 30}, 58 ${190 - y - 16}, 60 ${190 - y}`}
            transform={`scale(${1 - i * 0.08}) translate(${i * 4},${i * 8})`}
          />
          <path
            d={`M60 ${190 - y} C 80 ${190 - y - 6}, 92 ${190 - y - 18}, 90 ${190 - y - 34} C 74 ${190 - y - 30}, 62 ${190 - y - 16}, 60 ${190 - y}`}
            transform={`scale(${1 - i * 0.08}) translate(${-i * 4},${i * 8})`}
          />
        </g>
      ))}
    </svg>
  );
}

/** A single elegant lotus / mandala motif. */
export function LotusMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={cn("text-primary/30", className)}
      aria-hidden="true"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={i}
          d="M50 50 C 40 30, 40 14, 50 6 C 60 14, 60 30, 50 50"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="5" className="fill-accent/40" />
    </svg>
  );
}

/** Wavy ground-line used as a section separator. */
export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      fill="none"
      className={cn("text-primary/20", className)}
      aria-hidden="true"
    >
      <path
        d="M0 30 C 180 5, 360 55, 540 30 S 900 5, 1080 30 S 1440 55, 1440 30"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* ───────────────────────── Atmospheric blobs ───────────────────────── */

/** Soft organic gradient blob for hero backgrounds. */
export function AuraBlob({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute blob-mask blur-3xl opacity-60",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, hsl(var(--pitta)/0.45), transparent 60%), radial-gradient(circle at 70% 70%, hsl(var(--kapha)/0.4), transparent 60%)",
        ...style,
      }}
    />
  );
}

/* ───────────────────────── Sun-burst / chakra ───────────────────────── */

export function ChakraRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={cn("text-accent/30", className)}
      aria-hidden="true"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="100"
          x2="100"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
