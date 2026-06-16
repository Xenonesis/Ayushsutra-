"use client";

import {
  CalendarDays,
  Users,
  Star,
  ClipboardCheck,
  Clock,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DOCTOR,
  DOCTOR_PATIENTS,
  DOCTOR_STATS,
  DOCTOR_WEEK,
} from "@/lib/data";

export default function DoctorDashboardPage() {
  return (
    <DashboardShell
      variant="doctor"
      title="Dr. Vikram Rao"
      user={{
        name: DOCTOR.name,
        initials: DOCTOR.initials,
        subtitle: DOCTOR.specialty,
      }}
    >
      {/* Stats cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={CalendarDays}
          label="Today's appointments"
          value={DOCTOR_STATS.todayAppointments}
        />
        <StatCard
          icon={ClipboardCheck}
          label="Completed today"
          value={DOCTOR_STATS.completedToday}
        />
        <StatCard
          icon={Users}
          label="Follow-ups due"
          value={DOCTOR_STATS.followUps}
        />
        <StatCard
          icon={Star}
          label="Avg. rating"
          value={DOCTOR_STATS.avgRating}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Patient queue */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="queue">
              <TabsList>
                <TabsTrigger value="queue">Today</TabsTrigger>
                <TabsTrigger value="week">This Week</TabsTrigger>
              </TabsList>

              <TabsContent value="queue" className="space-y-3">
                {DOCTOR_PATIENTS.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between rounded-2xl border border-border p-4 transition-all hover:bg-secondary/40"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {p.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{p.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {p.prakriti}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm">{p.time}</p>
                      <p className="text-xs text-muted-foreground">
                        {p.reason}
                      </p>
                    </div>
                    <Badge
                      variant={
                        p.status === "Now"
                          ? "pitta"
                          : p.status === "Next"
                          ? "accent"
                          : "muted"
                      }
                    >
                      {p.status}
                    </Badge>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="week">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DOCTOR_WEEK}>
                      <CartesianGrid
                        strokeDasharray="4 4"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis
                        dataKey="day"
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                      />
                      <YAxis
                        tick={{
                          fill: "hsl(var(--muted-foreground))",
                          fontSize: 12,
                        }}
                      />
                      <Bar
                        dataKey="patients"
                        fill="hsl(var(--primary))"
                        radius={[6, 6, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Right column */}
        <div className="space-y-6">
          {/* Current patient highlight */}
          <Card className="border-pitta/30 bg-pitta/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-pitta" /> Current patient
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-pitta/15 text-lg text-pitta">
                    AI
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-display text-lg">
                    {DOCTOR_PATIENTS[0].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Prakriti: {DOCTOR_PATIENTS[0].prakriti}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {DOCTOR_PATIENTS[0].reason}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <Card>
            <CardHeader>
              <CardTitle>Prakriti Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { dosha: "Pitta", count: 5, color: "bg-pitta" },
                  { dosha: "Vata", count: 3, color: "bg-vata" },
                  { dosha: "Kapha", count: 2, color: "bg-kapha" },
                ].map((d) => (
                  <div key={d.dosha} className="flex items-center gap-3">
                    <span className="w-16 text-sm font-medium">{d.dosha}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div
                        className={`h-full rounded-full ${d.color}`}
                        style={{
                          width: `${(d.count / 10) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {d.count} patients
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Profile summary */}
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <Row label="Specialty" value={DOCTOR.specialty} />
              <Row label="Experience" value={`${DOCTOR.experience} years`} />
              <Row label="Reviews" value={`${DOCTOR.reviews} reviews`} />
              <Row label="Rating" value={`${DOCTOR.rating}/5 ★`} />
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CalendarDays;
  label: string;
  value: string | number;
}) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="font-display text-xl">{value}</p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
