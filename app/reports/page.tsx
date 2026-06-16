"use client";

import { useState } from "react";
import {
  Upload,
  FileText,
  CalendarDays,
  Tag,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { REPORTS, REPORT_TYPES, PATIENT, formatDate } from "@/lib/data";

export default function ReportsPage() {
  const [type, setType] = useState("");
  const [notes, setNotes] = useState("");
  const [uploaded, setUploaded] = useState(false);

  return (
    <DashboardShell
      variant="patient"
      title="Health Records"
      user={{ name: PATIENT.name, initials: PATIENT.initials }}
    >
      {/* Upload card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Upload a report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {/* Drop zone */}
          <div
            onClick={() => setUploaded(true)}
            className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-secondary/30 py-12 transition-colors hover:border-primary/40 hover:bg-secondary/50"
          >
            {uploaded ? (
              <>
                <CheckCircle2 className="h-10 w-10 text-primary" />
                <p className="mt-3 text-sm font-semibold text-primary">
                  File selected — ready to submit
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  report_june2026.pdf · 248 KB
                </p>
              </>
            ) : (
              <>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="mt-4 text-sm font-semibold">
                  Click to upload or drag & drop
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, JPG, PNG up to 10 MB
                </p>
              </>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="report-date">
                <CalendarDays className="mr-1.5 inline h-3.5 w-3.5" />
                Report date
              </Label>
              <Input id="report-date" type="date" defaultValue="2026-06-16" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="report-type">
                <Tag className="mr-1.5 inline h-3.5 w-3.5" />
                Report type
              </Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select type…" />
                </SelectTrigger>
                <SelectContent>
                  {REPORT_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes for your vaidya (optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any context — symptoms, previous readings, concerns…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <Button disabled={!uploaded || !type}>
            <Upload className="h-4 w-4" />
            Upload report
          </Button>
        </CardContent>
      </Card>

      {/* Recent reports table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent reports</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Report</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="hidden sm:table-cell">Date</TableHead>
                <TableHead className="hidden sm:table-cell">Size</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {REPORTS.map((r) => (
                <TableRow key={r.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                      </span>
                      <span className="text-sm font-medium">{r.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="muted">{r.type}</Badge>
                  </TableCell>
                  <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                    {formatDate(r.date)}
                  </TableCell>
                  <TableCell className="hidden text-sm text-muted-foreground sm:table-cell">
                    {r.size}
                  </TableCell>
                  <TableCell>
                    {r.status === "reviewed" ? (
                      <Badge variant="default">
                        <CheckCircle2 className="mr-1 h-3 w-3" /> Reviewed
                      </Badge>
                    ) : (
                      <Badge variant="accent">
                        <Clock className="mr-1 h-3 w-3" /> Pending
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardShell>
  );
}
