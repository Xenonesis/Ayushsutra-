"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Activity,
  FileText,
  CalendarDays,
  Building2,
  Settings,
  LogOut,
  Menu,
  Bell,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/store";
import { cn } from "@/lib/utils";

type NavItem = { label: string; href: string; icon: LucideIcon };

const PATIENT_NAV: NavItem[] = [
  { label: "Overview", href: "/dashboard/patient", icon: LayoutDashboard },
  { label: "Prakriti Quiz", href: "/quiz", icon: Activity },
  { label: "Appointments", href: "/clinics", icon: CalendarDays },
  { label: "Health Records", href: "/reports", icon: FileText },
  { label: "Find Clinics", href: "/clinics", icon: Building2 },
];

const DOCTOR_NAV: NavItem[] = [
  { label: "Overview", href: "/dashboard/doctor", icon: LayoutDashboard },
  { label: "Patient Queue", href: "/dashboard/doctor", icon: CalendarDays },
  { label: "Records", href: "/reports", icon: FileText },
  { label: "Clinics", href: "/clinics", icon: Building2 },
];

export function DashboardShell({
  variant = "patient",
  title,
  user,
  children,
}: {
  variant?: "patient" | "doctor";
  title: string;
  user: { name: string; initials: string; subtitle?: string };
  children: React.ReactNode;
}) {
  const nav = variant === "patient" ? PATIENT_NAV : DOCTOR_NAV;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const signOut = useAuth((s) => s.signOut);

  const SidebarBody = (
    <div className="flex h-full flex-col">
      <div className="px-6 py-6">
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
      </div>

      <div className="mx-4 mb-6 flex items-center gap-3 rounded-2xl bg-secondary/60 p-3">
        <Avatar>
          <AvatarFallback className="bg-primary/15 text-primary">
            {user.initials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{user.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {user.subtitle ?? (variant === "patient" ? "Patient" : "Practitioner")}
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              )}
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-border p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
        >
          <Settings className="h-[18px] w-[18px]" /> Settings
        </Link>
        <button
          onClick={signOut}
          className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
        >
          <LogOut className="h-[18px] w-[18px]" /> Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-card/50 lg:block">
        {SidebarBody}
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 w-72 animate-in fade-in slide-in-from-left border-r border-border bg-card shadow-lift">
            {SidebarBody}
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-card/70 px-5 py-4 backdrop-blur-xl sm:px-8">
          <div className="flex items-center gap-3">
            <button
              className="rounded-full p-2 hover:bg-secondary lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div>
              <h1 className="font-display text-lg font-medium tracking-tight sm:text-xl">
                {title}
              </h1>
              <p className="hidden text-xs text-muted-foreground sm:block">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-accent" />
            </Button>
            <Avatar>
              <AvatarFallback className="bg-primary/15 text-primary">
                {user.initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="px-5 py-6 sm:px-8 sm:py-8">{children}</main>
      </div>
    </div>
  );
}
