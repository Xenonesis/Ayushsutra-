"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, ArrowRight, Stethoscope, HeartPulse } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useAuth, type Role } from "@/lib/store";

export default function SignupPage() {
  const router = useRouter();
  const signIn = useAuth((s) => s.signIn);
  const [role, setRole] = useState<Role>("patient");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      signIn({
        name: name || email.split("@")[0],
        email,
        role,
      });
      router.push(role === "doctor" ? "/dashboard/doctor" : "/quiz");
    }, 700);
  };

  return (
    <AuthShell>
      <div className="rounded-[2rem] border border-border bg-card p-8 shadow-lift sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl tracking-tight">Begin your journey</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Create your AyurSutra account in seconds.
          </p>
        </div>

        {/* Role selector */}
        <div className="mb-6">
          <Label className="mb-2.5 block">I am a…</Label>
          <div className="grid grid-cols-2 gap-3">
            <RoleCard
              active={role === "patient"}
              onClick={() => setRole("patient")}
              icon={<HeartPulse className="h-5 w-5" />}
              label="Patient"
              desc="Seek care & balance"
            />
            <RoleCard
              active={role === "doctor"}
              onClick={() => setRole("doctor")}
              icon={<Stethoscope className="h-5 w-5" />}
              label="Practitioner"
              desc="Offer consultations"
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <div className="relative">
              <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ananya Iyer"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type="password"
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="terms" className="mt-0.5" required />
            <Label htmlFor="terms" className="text-sm leading-relaxed text-muted-foreground">
              I agree to the{" "}
              <Link href="/terms" className="font-semibold text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              &{" "}
              <Link href="/terms" className="font-semibold text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? "Creating account…" : "Create account"}
            {!loading && <ArrowRight className="h-4 w-4" />}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}

function RoleCard({
  active,
  onClick,
  icon,
  label,
  desc,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  desc: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-start gap-1 rounded-2xl border p-4 text-left transition-all",
        active
          ? "border-primary bg-primary/5 shadow-soft"
          : "border-border bg-background/40 hover:border-primary/30"
      )}
    >
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-xl",
          active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
        )}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs text-muted-foreground">{desc}</span>
    </button>
  );
}
