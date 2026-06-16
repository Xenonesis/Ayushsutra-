import Link from "next/link";
import { ArrowRight, Leaf, Heart, BookOpen, Users, TrendingUp, Award } from "lucide-react";
import { MarketingShell, Section, SectionHeading } from "@/components/layout/marketing-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeafSprig, LotusMark } from "@/components/brand/decor";

const VALUES = [
  {
    icon: Leaf,
    title: "Rooted in tradition",
    text: "Every recommendation traces back to classical Ayurvedic texts — Charaka Samhita, Sushruta Samhita, Ashtanga Hridaya.",
  },
  {
    icon: Heart,
    title: "Personal, not generic",
    text: "We believe health is individual. Our tools map your unique constitution rather than offering one-size-fits-all advice.",
  },
  {
    icon: BookOpen,
    title: "Science meets shastra",
    text: "We pair ancient frameworks with modern research to make Ayurvedia accessible, evidence-informed and practical.",
  },
  {
    icon: Users,
    title: "Community of healers",
    text: "Our network of 320+ BAMS-certified practitioners spans Kayachikitsa, Panchakarma, Rasayana, Shalya and more.",
  },
];

const STATS = [
  { icon: TrendingUp, value: "50,000+", label: "Prakriti assessments" },
  { icon: Users, value: "320+", label: "Certified vaidyas" },
  { icon: Award, value: "4.9/5", label: "Average rating" },
];

const TIMELINE = [
  {
    year: "2014",
    title: "The seed",
    text: "Our founders met at an Ayurvedic conference in Bengaluru, sharing a vision to bring personalised Ayurvedic guidance online.",
  },
  {
    year: "2016",
    title: "First prototype",
    text: "A simple prakriti quiz built for friends and family — word spread, 10,000 people took it in the first month.",
  },
  {
    year: "2019",
    title: "Practitioner network",
    text: "Partnered with 50 clinics across India to offer verified video consultations and Panchakarma bookings.",
  },
  {
    year: "2022",
    title: "Health vault launch",
    text: "Introduced encrypted health records, lab-report uploads and AI-powered dosha trend analysis.",
  },
  {
    year: "2024",
    title: "50k milestone",
    text: "Crossed 50,000 prakriti assessments. Expanded to 10 cities with 320+ practitioners on the platform.",
  },
];

export default function AboutPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-36 pb-16 sm:pt-44">
        <LotusMark className="pointer-events-none absolute -right-16 top-20 h-64 w-64 animate-breathe text-primary/15" />
        <LeafSprig className="pointer-events-none absolute -left-10 bottom-0 hidden h-60 w-40 opacity-20 lg:block" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="kicker justify-center">
            <Leaf className="h-3.5 w-3.5" /> Our story
          </span>
          <h1 className="mt-5 display text-4xl text-balance sm:text-5xl md:text-6xl">
            Five thousand years of wisdom,{" "}
            <span className="italic text-primary">beautifully modern</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            AyurSutra was born from a simple conviction: the ancient science of
            Ayurveda deserves a platform worthy of its depth — one that honours
            tradition while embracing the possibilities of today.
          </p>
        </div>
      </section>

      {/* Stats */}
      <Section className="!py-10">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <s.icon className="mx-auto mb-2 h-6 w-6 text-accent" />
              <div className="font-display text-3xl font-medium text-primary sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-card/40">
        <SectionHeading
          kicker="Our values"
          title="What guides us"
          subtitle="Four principles that shape every decision — from product design to practitioner vetting."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Card
              key={v.title}
              className="animate-fade-up transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeading
          kicker="Our journey"
          title="From seed to forest"
          subtitle="A decade of building the bridge between ancient Ayurvedia and modern wellness."
        />
        <div className="mx-auto mt-14 max-w-2xl space-y-0">
          {TIMELINE.map((t, i) => (
            <div key={t.year} className="relative flex gap-6 pb-10 last:pb-0">
              {/* line */}
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[1.15rem] top-7 bottom-0 w-px bg-border" />
              )}
              {/* dot */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary">
                {t.year.slice(-2)}
              </div>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {t.year}
                </p>
                <h3 className="mt-1 font-display text-lg">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Ready to walk the path?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Take the prakriti quiz and begin your journey to balanced, joyful
            living.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/quiz">
                Start free quiz
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
