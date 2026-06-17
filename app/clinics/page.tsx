"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Filter,
  Navigation,
  Stethoscope,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ClinicCardArt } from "@/components/brand/clinic-art";
import { CLINICS, PATIENT } from "@/lib/data";

export default function ClinicsListPage() {
  const [search, setSearch] = useState("");
  const filtered = CLINICS.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.specialties.some((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      ) ||
      c.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardShell
      variant="patient"
      title="Find a Clinic"
      user={{ name: PATIENT.name, initials: PATIENT.initials }}
    >
      {/* Search bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, area or specialty…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="lg">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      {/* Results count */}
      <p className="mb-5 text-sm text-muted-foreground">
        Showing {filtered.length} clinic{filtered.length !== 1 ? "s" : ""} in{" "}
        Bengaluru
      </p>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((clinic) => (
          <Link key={clinic.id} href={`/clinics/${clinic.id}`}>
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <CardContent className="p-6">
                <ClinicCardArt clinicId={clinic.id} clinicName={clinic.name} />

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg leading-tight">
                      {clinic.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {clinic.area}, {clinic.city}
                    </p>
                  </div>
                  <Badge variant={clinic.accepting ? "default" : "accent"}>
                    {clinic.accepting ? (
                      <><CheckCircle2 className="mr-1 h-3 w-3" /> Accepting</>
                    ) : (
                      <><XCircle className="mr-1 h-3 w-3" /> Full</>
                    )}
                  </Badge>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-semibold">{clinic.rating}</span>
                    <span className="text-muted-foreground">
                      ({clinic.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Navigation className="h-3.5 w-3.5" />
                    {clinic.distanceKm} km
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">{clinic.open}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {clinic.specialties.map((s) => (
                    <Badge key={s} variant="outline" className="text-xs">
                      <Stethoscope className="mr-1 h-3 w-3" />
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </DashboardShell>
  );
}
