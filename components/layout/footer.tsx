import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { LeafSprig } from "@/components/brand/decor";
import { FOOTER_LINKS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary/40">
      <LeafSprig className="pointer-events-none absolute -right-10 bottom-0 h-72 w-44 opacity-30" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Ancient wisdom, intelligently woven. AyurSutra helps you understand
            your unique constitution and walk a path toward lasting balance.
          </p>
          <p className="font-display text-sm italic text-primary">
            “स्वस्थस्य स्वास्थ्य रक्षणम्”
            <span className="block text-xs not-italic text-muted-foreground">
              — To preserve the health of the healthy.
            </span>
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {heading}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} AyurSutra Wellness Pvt. Ltd. All rights reserved.</p>
          <p>Crafted with reverence for the classical lineage of Ayurveda.</p>
        </div>
      </div>
    </footer>
  );
}
