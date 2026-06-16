import Link from "next/link";
import { LogoMark } from "@/components/brand/logo";
import { LeafSprig, LotusMark } from "@/components/brand/decor";
import { ThemeToggle } from "@/components/theme-toggle";

/** Centred auth layout: logo + card, with soft botanical atmosphere. */
export function AuthShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* atmospheric decoration */}
      <LeafSprig className="pointer-events-none absolute -left-10 bottom-0 hidden h-[26rem] w-44 opacity-25 lg:block" />
      <LeafSprig className="pointer-events-none absolute -right-10 top-0 hidden h-[26rem] w-44 rotate-180 opacity-25 lg:block" />
      <LotusMark className="pointer-events-none absolute -bottom-16 left-1/2 h-72 w-72 -translate-x-1/2 opacity-30" />

      <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="relative w-full max-w-md animate-fade-up">
        <Link
          href="/"
          className="mb-8 flex items-center justify-center gap-2.5"
        >
          <LogoMark className="h-9 w-9" />
          <span className="font-display text-2xl font-medium tracking-tight">
            Ayur<span className="text-primary">Sutra</span>
          </span>
        </Link>
        {children}
      </div>
    </div>
  );
}
