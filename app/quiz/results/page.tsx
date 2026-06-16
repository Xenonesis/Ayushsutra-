"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ArrowRight, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LogoMark } from "@/components/brand/logo";
import { DOSHA_META, RECOMMENDATIONS, type Dosha } from "@/lib/data";
import { useQuiz } from "@/lib/store";

export default function QuizResultsPage() {
  const router = useRouter();
  const { results, answers, reset } = useQuiz();

  // Redirect if no answers
  useEffect(() => {
    if (Object.keys(answers).length === 0) {
      router.replace("/quiz");
    }
  }, [answers, router]);

  const r = results();
  const dominant = DOSHA_META[r.dominant];

  const radarData = [
    { dosha: "Vata", value: r.vata, fullMark: 100 },
    { dosha: "Pitta", value: r.pitta, fullMark: 100 },
    { dosha: "Kapha", value: r.kapha, fullMark: 100 },
  ];

  const barData = [
    {
      dosha: "Vata",
      value: r.vata,
      fill: "hsl(var(--vata))",
    },
    {
      dosha: "Pitta",
      value: r.pitta,
      fill: "hsl(var(--pitta))",
    },
    {
      dosha: "Kapha",
      value: r.kapha,
      fill: "hsl(var(--kapha))",
    },
  ];

  const doshaRecs = RECOMMENDATIONS.filter((rec) => rec.dosha === r.dominant);

  const handleRetake = () => {
    reset();
    router.push("/quiz");
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
      {/* Header */}
      <header className="border-b border-border/60 bg-card/60 px-6 py-4 backdrop-blur-xl sm:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoMark className="h-7 w-7" />
            <span className="font-display text-sm font-medium">
              Your Prakriti
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRetake}>
            <RotateCcw className="h-4 w-4" /> Retake quiz
          </Button>
        </div>
      </header>

      <main className="flex-1 px-6 py-10 sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Title */}
          <div className="mb-10 text-center">
            <span className="kicker justify-center">
              <Sparkles className="h-3.5 w-3.5" /> Your prakriti
            </span>
            <h1 className="mt-3 display text-3xl text-balance sm:text-4xl md:text-5xl">
              You are a{" "}
              <span className="italic text-primary">{dominant.name}</span>{" "}
              constitution
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground text-pretty">
              {dominant.summary}
            </p>
          </div>

          {/* Charts grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Radar chart */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Dosha Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mx-auto h-72 w-full max-w-sm">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                      <PolarGrid
                        stroke="hsl(var(--border))"
                        strokeDasharray="4 4"
                      />
                      <PolarAngleAxis
                        dataKey="dosha"
                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 13 }}
                      />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        name="Dosha"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.2}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Bar chart + stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} layout="vertical" barSize={28}>
                        <CartesianGrid
                          strokeDasharray="4 4"
                          stroke="hsl(var(--border))"
                          horizontal={false}
                        />
                        <XAxis type="number" domain={[0, 100]} tick={false} />
                        <YAxis
                          type="category"
                          dataKey="dosha"
                          tick={{
                            fill: "hsl(var(--muted-foreground))",
                            fontSize: 13,
                          }}
                          width={60}
                        />
                        <Bar dataKey="value" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Dominant badge row */}
              <div className="grid grid-cols-3 gap-3">
                {(Object.keys(DOSHA_META) as Dosha[]).map((key) => {
                  const d = DOSHA_META[key];
                  const val = r[key];
                  return (
                    <div
                      key={key}
                      className={`rounded-2xl border p-4 text-center transition-all ${
                        key === r.dominant
                          ? "border-primary/40 bg-primary/5 shadow-soft"
                          : "border-border bg-card"
                      }`}
                    >
                      <span
                        className={`font-display text-2xl ${
                          key === r.dominant
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {val}%
                      </span>
                      <p className="mt-0.5 text-xs font-semibold">{d.name}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {d.element}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-10">
            <h2 className="font-display text-2xl tracking-tight">
              Personalised recommendations
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Based on your {dominant.name} constitution
            </p>
            <Separator className="my-6" />

            <div className="grid gap-4 sm:grid-cols-2">
              {doshaRecs.map((rec) => (
                <Card
                  key={rec.id}
                  className="transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <CardContent className="p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant={rec.dosha}>{rec.category}</Badge>
                    </div>
                    <h3 className="font-display text-base">{rec.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {rec.detail}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg">
              Your {dominant.name} strengths
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {dominant.traits.map((t) => (
                <Badge key={t} variant="outline" className="px-3.5 py-1.5">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/signup">
                Create account to save
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={handleRetake}>
              <RotateCcw className="h-4 w-4" /> Retake quiz
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
