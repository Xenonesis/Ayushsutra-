"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Dosha } from "@/lib/data";

/* ───────────────────────── Auth store (simulated) ───────────────────────── */
export type Role = "patient" | "doctor";
type User = { name: string; email: string; role: Role } | null;

interface AuthState {
  user: User;
  signIn: (user: NonNullable<User>) => void;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      signIn: (user) => set({ user }),
      signOut: () => set({ user: null }),
    }),
    { name: "ayursutra-auth" }
  )
);

/* ───────────────────────── Quiz store ───────────────────────── */

/** answers keyed by questionId → dosha chosen */
export type QuizAnswers = Record<string, Dosha>;

interface QuizState {
  answers: QuizAnswers;
  completedSteps: number; // 0,1,2
  setAnswer: (id: string, dosha: Dosha) => void;
  setStep: (n: number) => void;
  reset: () => void;
  /** Compute dosha tallies from current answers. */
  tally: () => Record<Dosha, number>;
  /** Compute normalised percentages. */
  results: () => { vata: number; pitta: number; kapha: number; dominant: Dosha };
}

const empty: Record<Dosha, number> = { vata: 0, pitta: 0, kapha: 0 };

export const useQuiz = create<QuizState>()(
  persist(
    (set, get) => ({
      answers: {},
      completedSteps: 0,
      setAnswer: (id, dosha) =>
        set((s) => ({ answers: { ...s.answers, [id]: dosha } })),
      setStep: (n) => set({ completedSteps: n }),
      reset: () => set({ answers: {}, completedSteps: 0 }),
      tally: () => {
        const a = get().answers;
        return Object.values(a).reduce(
          (acc, d) => ({ ...acc, [d]: acc[d] + 1 }),
          { ...empty }
        );
      },
      results: () => {
        const t = get().tally();
        const total = t.vata + t.pitta + t.kapha || 1;
        const vata = Math.round((t.vata / total) * 100);
        const pitta = Math.round((t.pitta / total) * 100);
        let kapha = 100 - vata - pitta;
        if (kapha < 0) kapha = 0;
        const dominant = (Object.entries({ vata, pitta, kapha }).sort(
          (a, b) => b[1] - a[1]
        )[0][0] as Dosha) || "pitta";
        return { vata, pitta, kapha, dominant };
      },
    }),
    { name: "ayursutra-quiz" }
  )
);
