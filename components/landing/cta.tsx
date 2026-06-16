import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuraBlob, ChakraRing } from "@/components/brand/decor";

export function CTA() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-lift sm:px-12 sm:py-24">
        {/* atmosphere */}
        <AuraBlob
          className="-left-20 -top-20 h-96 w-96 opacity-50"
          style={
            {
              background:
                "radial-gradient(circle at 40% 40%, hsl(var(--pitta)/0.5), transparent 60%)",
            } as React.CSSProperties
          }
        />
        <ChakraRing className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 animate-breathe text-primary-foreground/20" />

        <div className="relative">
          <span className="kicker justify-center text-primary-foreground/70">
            <span className="h-px w-6 bg-primary-foreground/40" />
            Begin today
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl display text-3xl text-balance text-primary-foreground sm:text-4xl md:text-5xl">
            Your path to balance begins with a single breath
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75">
            Join 50,000+ people who have mapped their prakriti and found
            guidance rooted in timeless wisdom.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="accent" asChild>
              <Link href="/quiz">
                Start free prakriti quiz
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/signup">Create account</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
