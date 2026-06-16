import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuraBlob, ChakraRing, LeafSprig } from "@/components/brand/decor";
import { STATS } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Atmospheric layers */}
      <AuraBlob className="-left-24 top-10 h-[28rem] w-[28rem]" />
      <AuraBlob
        className="-right-32 top-40 h-[32rem] w-[32rem] opacity-40"
        style={
          {
            background:
              "radial-gradient(circle at 60% 40%, hsl(var(--vata)/0.35), transparent 60%)",
          } as React.CSSProperties
        }
      />
      <ChakraRing className="pointer-events-none absolute -right-16 top-24 h-72 w-72 animate-breathe" />
      <LeafSprig className="pointer-events-none absolute -left-8 bottom-0 hidden h-80 w-48 opacity-40 lg:block" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy */}
          <div className="animate-fade-up text-center lg:text-left">
            <span className="kicker mb-5 justify-center lg:justify-start">
              <Sparkles className="h-3.5 w-3.5" />
              Ancient wisdom · Modern care
            </span>

            <h1 className="display text-4xl text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Discover your{" "}
              <span className="relative whitespace-nowrap">
                <span className="font-normal italic text-primary">prakriti</span>
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-1 left-0 h-3 w-full text-accent"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8C40 3 80 3 120 6s60 3 78 1"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ,
              <br className="hidden sm:block" /> restore your balance.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0">
              AyurSutra weaves five thousand years of Ayurvedic wisdom into a
              personal path — understand your dosha, consult verified vaidyas,
              and live in rhythm with your nature.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/quiz">
                  Take the prakriti quiz
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/clinics">Find a vaidya</Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex -space-x-2">
                {["AI", "RS", "PD", "KR"].map((i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-secondary text-[11px] font-semibold text-secondary-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Loved by 50,000+ wellness seekers
                </p>
              </div>
            </div>
          </div>

          {/* Visual: prakriti card */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <PrakritiVisual />
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-soft md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-card px-6 py-7 text-center">
              <div className="font-display text-3xl font-medium text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Decorative prakriti tri-dosha card shown in hero. */
function PrakritiVisual() {
  const doshas = [
    { name: "Vata", sk: "वात", value: 32, color: "var(--vata)", css: "text-vata" },
    { name: "Pitta", sk: "पित्त", value: 48, color: "var(--pitta)", css: "text-pitta" },
    { name: "Kapha", sk: "कफ", value: 20, color: "var(--kapha)", css: "text-kapha" },
  ];
  return (
    <div className="relative mx-auto max-w-md">
      <div className="relative rounded-[2rem] border border-border bg-card/80 p-7 shadow-lift backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Your Constitution
            </p>
            <h3 className="font-display text-2xl">Pitta-Vata</h3>
          </div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pitta/15 font-display text-lg text-pitta">
            प
          </span>
        </div>

        {/* Tri-dosha bars */}
        <div className="space-y-4">
          {doshas.map((d) => (
            <div key={d.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-medium">
                  {d.name}{" "}
                  <span className="font-display text-muted-foreground">
                    {d.sk}
                  </span>
                </span>
                <span className="text-muted-foreground">{d.value}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${d.value}%`, backgroundColor: d.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-secondary/50 p-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Balancing tip — </span>
            favour sweet, bitter & cooling foods; soften intensity with evening
            abhyanga.
          </p>
        </div>
      </div>

      {/* floating accent badge */}
      <div className="absolute -right-3 -top-3 animate-float-slow rounded-2xl border border-border bg-card px-4 py-2 shadow-lift">
        <p className="text-xs text-muted-foreground">Health score</p>
        <p className="font-display text-lg text-primary">78 ↑</p>
      </div>
    </div>
  );
}
