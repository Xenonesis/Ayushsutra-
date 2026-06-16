import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/layout/marketing-shell";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        kicker="Stories of balance"
        title="Lives, gently transformed"
        subtitle="Real journeys from people who found their rhythm with AyurSutra."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <figure
            key={t.name}
            className="relative flex animate-fade-up flex-col rounded-3xl border border-border bg-card p-7 shadow-soft"
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <Quote className="h-8 w-8 text-accent/30" />
            <div className="mt-2 flex gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary font-semibold text-secondary-foreground">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
