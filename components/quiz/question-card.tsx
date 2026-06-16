"use client";

import { cn } from "@/lib/utils";
import type { QuizQuestion, Dosha } from "@/lib/data";

const DOSHA_STYLES: Record<Dosha, string> = {
  vata: "text-vata border-vata/30 bg-vata-soft/40 hover:border-vata/50 hover:bg-vata-soft/70",
  pitta: "text-pitta border-pitta/30 bg-pitta-soft/40 hover:border-pitta/50 hover:bg-pitta-soft/70",
  kapha: "text-kapha border-kapha/30 bg-kapha-soft/40 hover:border-kapha/50 hover:bg-kapha-soft/70",
};

const DOSHA_STYLES_ACTIVE: Record<Dosha, string> = {
  vata: "border-vata bg-vata-soft text-vata shadow-soft",
  pitta: "border-pitta bg-pitta-soft text-pitta shadow-soft",
  kapha: "border-kapha bg-kapha-soft text-kapha shadow-soft",
};

export function QuestionCard({
  question,
  index,
  total,
  selected,
  onSelect,
}: {
  question: QuizQuestion;
  index: number;
  total: number;
  selected: Dosha | undefined;
  onSelect: (dosha: Dosha) => void;
}) {
  return (
    <div className="animate-fade-up w-full max-w-2xl" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
          {question.category}
        </span>
        <span className="text-xs text-muted-foreground">
          {index + 1} of {total}
        </span>
      </div>

      <h3 className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
        {question.prompt}
      </h3>

      <div className="mt-5 space-y-3">
        {question.options.map((opt) => {
          const isActive = selected === opt.dosha;
          return (
            <button
              key={opt.dosha}
              type="button"
              onClick={() => onSelect(opt.dosha)}
              className={cn(
                "w-full rounded-2xl border px-5 py-4 text-left text-sm leading-relaxed transition-all duration-300",
                isActive
                  ? DOSHA_STYLES_ACTIVE[opt.dosha]
                  : "border-border bg-card/60 text-foreground hover:border-primary/30 hover:shadow-soft",
                !isActive && DOSHA_STYLES[opt.dosha]
              )}
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-all",
                    isActive
                      ? "border-current"
                      : "border-muted-foreground/30"
                  )}
                >
                  {isActive && (
                    <span className="h-2.5 w-2.5 rounded-full bg-current" />
                  )}
                </span>
                <span>{opt.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
