import { cn } from "@/lib/utils";

/**
 * AyurSutra mark — an abstract leaf-and-thread glyph.
 * The two curved strokes evoke a sprouting leaf (prakriti / nature)
 * crossed by a sutra (thread of knowledge).
 */
export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8" />
      {withWordmark && (
        <span className="font-display text-xl font-medium tracking-tight text-ink">
          Ayur<span className="text-primary">Sutra</span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
      aria-hidden="true"
    >
      {/* Soft circular field */}
      <circle cx="20" cy="20" r="19" className="fill-primary/10" />
      {/* Leaf sprout */}
      <path
        d="M20 30c0-6 0-11-4-15 4 0 8 3 8 8"
        className="stroke-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 30c0-6 0-11 4-15-4 0-8 3-8 8"
        className="stroke-accent"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stem / sutra thread */}
      <path
        d="M20 30v-9"
        className="stroke-primary"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="30.5" r="1.6" className="fill-accent" />
    </svg>
  );
}
