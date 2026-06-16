"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

const REPO = "Xenonesis/Ayushsutra-";
const REPO_URL = `https://github.com/${REPO}`;
const CACHE_KEY = "ayursutra:gh-stars";
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour — respects the 60/hr unauth GitHub API limit

type Cached = { count: number; ts: number };

function formatStars(n: number): string {
  if (n >= 10000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  return String(n);
}

export function GitHubStars({ className }: { className?: string }) {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const apply = (count: number) => {
      if (!cancelled) setStars(count);
    };

    const load = async () => {
      // serve from cache when fresh
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached = JSON.parse(raw) as Cached;
          if (Date.now() - cached.ts < CACHE_TTL_MS) {
            apply(cached.count);
            return;
          }
        }
      } catch {
        /* storage unavailable */
      }

      try {
        const res = await fetch(`https://api.github.com/repos/${REPO}`, {
          headers: { Accept: "application/vnd.github+json" },
        });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const data = await res.json();
        const count =
          typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
        apply(count);
        try {
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ count, ts: Date.now() })
          );
        } catch {
          /* ignore quota errors */
        }
      } catch {
        /* leave stars as null — the badge still works as a link */
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <a
      href={REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-sm font-medium text-foreground shadow-soft backdrop-blur transition-all hover:border-primary/40 hover:shadow-lift",
        className
      )}
      aria-label={
        stars != null
          ? `View AyurSutra on GitHub (${stars} stars)`
          : "View AyurSutra on GitHub"
      }
    >
      <GitHubMark className="h-4 w-4" />
      <span className="hidden sm:inline">View on GitHub</span>
      <span className="flex items-center gap-1 rounded-full bg-secondary/70 px-2 py-0.5 text-xs font-semibold text-foreground/80">
        <Star className="h-3 w-3 fill-current text-accent" aria-hidden />
        <span aria-live="polite">{stars === null ? "—" : formatStars(stars)}</span>
      </span>
    </a>
  );
}
