import Link from "next/link";
import { Leaf } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md animate-fade-up">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <Leaf className="h-7 w-7" />
        </div>
        <p className="kicker mb-3">Lost the trail</p>
        <h1 className="display text-4xl sm:text-5xl mb-4">
          This page is off the path.
        </h1>
        <p className="text-muted-foreground mb-8">
          The route you followed doesn&apos;t lead anywhere in AyurSutra. Let&apos;s
          get you back to balance.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:shadow-lift"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
