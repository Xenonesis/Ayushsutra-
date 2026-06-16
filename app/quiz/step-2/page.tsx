"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LogoMark } from "@/components/brand/logo";
import { QuestionCard } from "@/components/quiz/question-card";
import { LIFESTYLE_QUESTIONS } from "@/lib/data";
import { useQuiz } from "@/lib/store";
import type { Dosha } from "@/lib/data";

export default function QuizStep2Page() {
  const router = useRouter();
  const { answers, setAnswer } = useQuiz();

  const totalQ = LIFESTYLE_QUESTIONS.length;
  const answered = LIFESTYLE_QUESTIONS.filter((q) => answers[q.id]).length;
  const pct = Math.round((answered / totalQ) * 100);
  const allDone = answered === totalQ;

  const handleBack = () => router.push("/quiz");
  const handleResults = () => router.push("/quiz/results");

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Top bar */}
      <header className="border-b border-border/60 bg-card/60 px-6 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoMark className="h-7 w-7" />
            <span className="font-display text-sm font-medium">
              Prakriti Quiz
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Step 2 of 2 — Mind & Lifestyle
          </span>
        </div>
        <div className="mx-auto mt-3 max-w-3xl">
          <Progress value={pct} className="h-1.5" indicatorClassName="bg-accent" />
          <p className="mt-1.5 text-right text-xs text-muted-foreground">
            {answered}/{totalQ} answered
          </p>
        </div>
      </header>

      {/* Questions */}
      <main className="flex-1 px-6 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <span className="kicker justify-center">
              <Brain className="h-3.5 w-3.5" /> Step 2
            </span>
            <h1 className="mt-3 display text-3xl text-balance sm:text-4xl">
              Your mind & lifestyle
            </h1>
            <p className="mt-3 text-muted-foreground">
              These questions explore your psychological tendencies and daily
              rhythms. Again, choose what feels most natural.
            </p>
          </div>

          <div className="space-y-10">
            {LIFESTYLE_QUESTIONS.map((q, i) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={i}
                total={totalQ}
                selected={answers[q.id] as Dosha | undefined}
                onSelect={(dosha) => setAnswer(q.id, dosha)}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="mt-12 flex items-center justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" /> Back to Step 1
            </Button>
            <Button size="lg" disabled={!allDone} onClick={handleResults}>
              See my prakriti
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
