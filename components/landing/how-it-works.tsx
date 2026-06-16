import {
  Sparkles,
  Stethoscope,
  Leaf,
  Compass,
  ShieldCheck,
  Route,
  Lock,
  Droplet,
  BellRing,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/marketing-shell";
import { HOW_IT_WORKS, FEATURES } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  leaf: Leaf,
  compass: Compass,
  shield: ShieldCheck,
  route: Route,
  vault: Lock,
  droplet: Droplet,
  bell: BellRing,
};

export function HowItWorks() {
  return (
    <Section className="bg-card/40">
      <SectionHeading
        kicker="How it works"
        title={
          <>
            Three steps toward your
            <br className="hidden sm:block" /> natural balance
          </>
        }
        subtitle="No jargon, no guesswork. Just a clear, guided path from self-knowledge to lasting wellbeing."
      />

      <div className="relative mt-16 grid gap-6 md:grid-cols-3">
        {/* connecting line */}
        <div className="absolute left-1/6 right-1/6 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {HOW_IT_WORKS.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <div
              key={s.step}
              className="group relative animate-fade-up rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-5xl font-light text-secondary">
                  {s.step}
                </span>
              </div>
              <h3 className="font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export function Features() {
  return (
    <Section>
      <SectionHeading
        kicker="Why AyurSutra"
        title="Everything you need to live in rhythm"
        subtitle="A complete Ayurvedic companion — from constitution mapping to hands-on care from trusted practitioners."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const Icon = ICONS[f.icon];
          return (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
