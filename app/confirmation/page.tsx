"use client";

import Link from "next/link";
import {
  CheckCircle2,
  CalendarDays,
  Clock,
  MapPin,
  Video,
  Stethoscope,
  Download,
  ArrowRight,
} from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ConfirmationPage() {
  return (
    <AuthShell>
      <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-10">
        {/* Success icon */}
        <div className="mb-6 text-center">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-kapha/15 animate-fade-in">
            <CheckCircle2 className="h-10 w-10 text-kapha" />
          </span>
          <h1 className="mt-5 display text-3xl text-balance">
            Booking confirmed!
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your appointment has been scheduled. See you soon!
          </p>
        </div>

        <Separator className="my-6" />

        {/* Appointment details */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-5">
            <div className="space-y-4">
              <DetailRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Date"
                value="Tuesday, 18 June 2026"
              />
              <DetailRow
                icon={<Clock className="h-4 w-4" />}
                label="Time"
                value="10:30 AM – 11:15 AM"
              />
              <DetailRow
                icon={<Stethoscope className="h-4 w-4" />}
                label="Doctor"
                value="Dr. Vikram Rao"
              />
              <DetailRow
                icon={<MapPin className="h-4 w-4" />}
                label="Location"
                value="Dhanvantari Ayurveda, Indiranagar"
              />
              <DetailRow
                icon={<Video className="h-4 w-4" />}
                label="Mode"
                value="In-clinic"
              />
              <DetailRow
                icon={<Clock className="h-4 w-4" />}
                label="Type"
                value="Follow-up consultation"
              />
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Button variant="outline" size="lg" className="w-full">
            <Download className="h-4 w-4" /> Add to calendar
          </Button>
          <Button size="lg" className="w-full" asChild>
            <Link href="/dashboard/patient">
              Go to dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          A confirmation has been sent to ananya.iyer@example.com. You can
          reschedule up to 12 hours before the appointment.
        </p>
      </div>
    </AuthShell>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-muted-foreground">{icon}</span>
      <span className="w-24 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:w-28">
        {label}
      </span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
