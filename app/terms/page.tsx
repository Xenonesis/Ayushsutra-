import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { MarketingShell } from "@/components/layout/marketing-shell";
import { Logo } from "@/components/brand/logo";
import { Card } from "@/components/ui/card";

const SECTIONS = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: "By accessing or using AyurSutra (the “Platform”), you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately. Your continued use constitutes acceptance of any updates we publish.",
  },
  {
    id: "services",
    title: "2. Our Services",
    body: "AyurSutra provides Ayurvedic wellness tools including the prakriti self-assessment quiz, a directory of certified practitioners, appointment booking, and a personal health records vault. Our guidance is educational and complementary — it is not a replacement for professional medical diagnosis or emergency care.",
  },
  {
    id: "not-medical",
    title: "3. Wellness, Not Medical Advice",
    body: "Information shared through the quiz, recommendations, and practitioner notes reflects traditional Ayurvedic principles. Always consult a qualified physician for medical conditions, and never delay seeking care because of something you read here. In an emergency, contact your local emergency services.",
  },
  {
    id: "accounts",
    title: "4. Your Account",
    body: "You are responsible for maintaining the confidentiality of your credentials and for all activity under your account. You must be at least 18 years old, or use the Platform under a guardian's supervision. Notify us promptly of any unauthorised access.",
  },
  {
    id: "practitioners",
    title: "5. Practitioners & Clinics",
    body: "While we verify practitioner credentials at onboarding, consultations are provided independently by the vaidyas and clinics listed. AyurSutra is not liable for the outcome of any consultation, treatment, or panchakarma procedure. Pricing and availability are set by the respective clinics.",
  },
  {
    id: "data",
    title: "6. Your Health Data",
    body: "Your health records, quiz results, and consultation notes are encrypted and remain yours. We process them only to deliver and improve your experience. You may export or permanently delete your data at any time from your dashboard settings. See our Privacy Policy for full detail.",
  },
  {
    id: "conduct",
    title: "7. Acceptable Use",
    body: "You agree not to misuse the Platform — including submitting false information, harassing practitioners or other users, attempting to reverse-engineer our systems, or using the Platform for any unlawful purpose. Violations may result in account suspension.",
  },
  {
    id: "fees",
    title: "8. Fees & Refunds",
    body: "Some services (consultations, therapies) are chargeable. Fees are displayed before you confirm a booking. Consultations cancelled at least 12 hours in advance are eligible for a full refund; later cancellations may be credited at the clinic's discretion.",
  },
  {
    id: "changes",
    title: "9. Changes to Terms",
    body: "We may update these Terms as our services evolve. Material changes will be notified by email or in-app at least 30 days before taking effect. Your continued use after the effective date signifies acceptance of the revised Terms.",
  },
  {
    id: "contact",
    title: "10. Contact Us",
    body: "Questions about these Terms? Reach our care team at care@ayursutra.health or write to AyurSutra Wellness Pvt. Ltd., Indiranagar, Bengaluru 560038. We typically respond within two business days.",
  },
];

export default function TermsPage() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-36 pb-12 sm:pt-44">
        <div className="mx-auto max-w-3xl text-center">
          <span className="kicker justify-center">
            <ShieldCheck className="h-3.5 w-3.5" /> Legal
          </span>
          <h1 className="mt-5 display text-4xl text-balance sm:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-5 text-muted-foreground">
            Last updated 16 June 2026 · Please read carefully. These terms govern
            your use of AyurSutra.
          </p>
        </div>
      </section>

      {/* Body: sticky nav + sections */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <Logo />
              <nav className="mt-8 space-y-1">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    <ChevronRight className="h-3.5 w-3.5" />
                    {s.title.split(". ")[1]}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-2xl bg-secondary/50 p-4 text-sm">
                <p className="font-semibold">Need a plain-language summary?</p>
                <p className="mt-1 text-muted-foreground">
                  Each clause is written to be readable, not buried in legalese.
                </p>
              </div>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-5">
            {SECTIONS.map((s) => (
              <Card key={s.id} id={s.id} className="scroll-mt-28 p-7">
                <h2 className="font-display text-xl">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-foreground/80">{s.body}</p>
              </Card>
            ))}

            <Card className="border-primary/20 bg-primary/5 p-7">
              <p className="text-sm leading-relaxed text-muted-foreground">
                By using AyurSutra, you confirm that you have read, understood,
                and agree to these Terms.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="/signup"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  I agree — create account →
                </a>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Back to home
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
