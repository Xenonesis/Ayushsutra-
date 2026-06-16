"use client";

import {
  Users,
  DollarSign,
  BarChart3,
  Star,
  TrendingUp,
  TrendingDown,
  Calendar,
  Stethoscope,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CLINICS,
  CLINIC_KPI,
  CLINIC_REVENUE,
  CLINIC_STAFF,
  CLINIC_SCHEDULE,
  PATIENT,
} from "@/lib/data";

// Use the first clinic for the mock
const CLINIC = CLINICS[0];

export default function ClinicDashboardPage() {
  return (
    <DashboardShell
      variant="doctor"
      title={CLINIC.name}
      user={{ name: "Clinic Admin", initials: "CA", subtitle: "Dhanvantari Ayurveda" }}
    >
      {/* KPI cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          icon={Users}
          label="Patients today"
          value={CLINIC_KPI.patientsToday}
          trend={CLINIC_KPI.patientsTrend}
          positive
        />
        <KPICard
          icon={DollarSign}
          label="Revenue (₹)"
          value={`₹${CLINIC_KPI.revenue.toLocaleString()}`}
          trend={CLINIC_KPI.revenueTrend}
          positive
        />
        <KPICard
          icon={BarChart3}
          label="Occupancy"
          value={`${CLINIC_KPI.occupancy}%`}
          trend={CLINIC_KPI.occupancyTrend}
          positive
        />
        <KPICard
          icon={Star}
          label="Rating"
          value={`${CLINIC_KPI.rating}/5`}
          trend={null}
          positive
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Revenue chart */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CLINIC_REVENUE}>
                  <CartesianGrid
                    strokeDasharray="4 4"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="day"
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                  />
                  <YAxis
                    tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                    tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`}
                  />
                  <Bar
                    dataKey="revenue"
                    fill="hsl(var(--primary))"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Today's schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Time</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {CLINIC_SCHEDULE.map((appt) => (
                  <TableRow key={appt.time}>
                    <TableCell className="text-sm font-medium">
                      {appt.time}
                    </TableCell>
                    <TableCell>
                      <span className="text-sm">{appt.patient}</span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {appt.reason}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          appt.status === "Now"
                            ? "pitta"
                            : appt.status === "Done"
                            ? "kapha"
                            : "muted"
                        }
                      >
                        {appt.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Staff */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Practitioners</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLINIC_STAFF.map((staff) => (
              <div
                key={staff.name}
                className="flex items-center gap-3 rounded-2xl border border-border p-4"
              >
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {staff.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{staff.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {staff.role}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    <Badge variant={staff.dosha} className="text-[10px]">
                      {staff.dosha}
                    </Badge>
                    <span className="text-muted-foreground">
                      {staff.patients} patients
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}

function KPICard({
  icon: Icon,
  label,
  value,
  trend,
  positive,
}: {
  icon: typeof Users;
  label: string;
  value: string | number;
  trend: number | null;
  positive: boolean;
}) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          {trend !== null && (
            <span
              className={`flex items-center gap-0.5 text-xs font-semibold ${
                positive ? "text-kapha" : "text-pitta"
              }`}
            >
              {positive ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {trend}%
            </span>
          )}
        </div>
        <p className="mt-3 font-display text-2xl">{value}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{label}</p>
      </CardContent>
    </Card>
  );
}
