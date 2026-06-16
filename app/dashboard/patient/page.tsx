"use client";

import Link from "next/link";
import {
  Heart,
  CalendarDays,
  FileText,
  ArrowRight,
  TrendingUp,
  Activity,
  Droplets,
  Sun,
  Moon,
  Flame,
  CheckCircle2,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  PATIENT,
  PATIENT_APPOINTMENTS,
  HEALTH_TREND,
  DOSHA_BALANCE,
  RECOMMENDATIONS,
  REPORTS,
} from "@/lib/data";
import { formatDate } from "@/lib/utils";

export default function PatientDashboardPage() {
  return (
    <DashboardShell
      variant="patient"
      title="Good morning, Ananya"
      user={{ name: PATIENT.name, initials: PATIENT.initials, subtitle: "Pitta-Vata · Member since Mar 2024" }}
    >
      {/* Welcome banner */}
      <div className="mb-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Your health score
            </p>
            <div className="mt-1 flex items-end gap-2">
              <span className="font-display text-4xl text-primary">
                {PATIENT.healthScore}
              </span>
              <span className="mb-1 flex items-center gap-0.5 text-xs font-semibold text-kapha">
                <TrendingUp className="h-3.5 w-3.5" /> +4 this month
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              🔥 {PATIENT.streak}-day streak · Keep going!
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" asChild>
              <Link href="/reports">
                <FileText className="h-4 w-4" /> Upload report
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/quiz">
                <Activity className="h-4 w-4" /> Retake quiz
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* KPI row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pitta/15 text-pitta">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Dominant dosha</p>
              <p className="font-display text-lg">Pitta</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <CalendarDays className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Next appointment</p>
              <p className="font-display text-lg">
                {formatDate(PATIENT_APPOINTMENTS[0]?.date, { month: "short", day: "numeric" })}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-vata/15 text-vata">
              <Heart className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Active plans</p>
              <p className="font-display text-lg">4 tips</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Left column */}
        <div className="space-y-6">
          {/* Health trend chart */}
          <Card>
            <CardHeader>
              <CardTitle>Health Score Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={HEALTH_TREND}>
                    <CartesianGrid
                      strokeDasharray="4 4"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <YAxis
                      domain={[50, 100]}
                      tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.12}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {PATIENT_APPOINTMENTS.filter((a) => a.status === "upcoming").map(
                (appt) => (
                  <div
                    key={appt.id}
                    className="flex items-center justify-between rounded-2xl border border-border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-primary/10 text-xs text-primary">
                          {appt.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{appt.doctor}</p>
                        <p className="text-xs text-muted-foreground">
                          {appt.specialty} · {appt.mode}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {formatDate(appt.date, { month: "short", day: "numeric" })}
                      </p>
                      <p className="text-xs text-muted-foreground">{appt.time}</p>
                    </div>
                  </div>
                )
              )}
              <Button variant="ghost" size="sm" className="w-full" asChild>
                <Link href="/clinics">
                  View all appointments <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Dosha balance */}
          <Card>
            <CardHeader>
              <CardTitle>Dosha Balance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {DOSHA_BALANCE.map((d) => (
                <div key={d.dosha}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium">{d.dosha}</span>
                    <span className="text-muted-foreground">{d.value}%</span>
                  </div>
                  <Progress value={d.value} className="h-2" />
                </div>
              ))}
              <Separator className="my-2" />
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <Droplets className="mx-auto h-4 w-4 text-vata" />
                  <p className="mt-0.5 font-semibold text-vata">Air</p>
                </div>
                <div>
                  <Sun className="mx-auto h-4 w-4 text-pitta" />
                  <p className="mt-0.5 font-semibold text-pitta">Fire</p>
                </div>
                <div>
                  <Moon className="mx-auto h-4 w-4 text-kapha" />
                  <p className="mt-0.5 font-semibold text-kapha">Earth</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {RECOMMENDATIONS.slice(0, 3).map((rec) => (
                <div
                  key={rec.id}
                  className="rounded-xl border border-border/70 p-3.5"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <Badge variant={rec.dosha} className="text-[10px]">
                      {rec.category}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium">{rec.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                    {rec.detail}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
