import { Section, SectionHeading } from "@/components/layout/marketing-shell";
import { DOSHA_META, type Dosha } from "@/lib/data";
import { cn } from "@/lib/utils";

const THEMES: Record<
  Dosha,
  { ring: string; chip: string; bg: string; text: string; dot: string }
> = {
  vata: {
    ring: "hover:border-vata/40",
    chip: "bg-vata/15 text-vata",
    bg: "from-vata-soft/60",
    text: "text-vata",
    dot: "bg-vata",
  },
  pitta: {
    ring: "hover:border-pitta/40",
    chip: "bg-pitta/15 text-pitta",
    bg: "from-pitta-soft/60",
    text: "text-pitta",
    dot: "bg-pitta",
  },
  kapha: {
    ring: "hover:border-kapha/40",
    chip: "bg-kapha/15 text-kapha",
    bg: "from-kapha-soft/60",
    text: "text-kapha",
    dot: "bg-kapha",
  },
};

export function DoshaExplainer() {
  return (
    <Section className="relative overflow-hidden bg-card/40">
      <SectionHeading
        kicker="The three doshas"
        title="The elements that shape you"
        subtitle="In Ayurveda, every person is a unique blend of three doshas — the biological energies of nature. Knowing yours is the first step to balance."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {(Object.keys(DOSHA_META) as Dosha[]).map((key, i) => {
          const d = DOSHA_META[key];
          const t = THEMES[key];
          return (
            <div
              key={key}
              className={cn(
                "group relative animate-fade-up overflow-hidden rounded-3xl border border-border bg-gradient-to-b to-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
                t.ring,
                t.bg
              )}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* big sanskrit watermark */}
              <span className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[9rem] leading-none text-ink/5">
                {d.sanskrit}
              </span>

              <div className="relative">
                <span
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-2xl font-display text-2xl",
                    t.chip
                  )}
                >
                  {d.sanskrit}
                </span>
                <h3 className="mt-5 font-display text-2xl">{d.name}</h3>
                <p className={cn("text-xs font-semibold uppercase tracking-wider", t.text)}>
                  {d.element}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {d.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {d.traits.map((tr) => (
                    <span
                      key={tr}
                      className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium"
                    >
                      {tr}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
