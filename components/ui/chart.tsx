"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
  }
>;

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null);

export function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return ctx;
}

/** Thin responsive wrapper that injects our theme + chart config. */
export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ReactElement;
  }
>(({ className, children, config, ...props }, ref) => (
  <ChartContext.Provider value={{ config }}>
    <div
      ref={ref}
      className={cn(
        "flex aspect-auto justify-center text-xs",
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
        "[&_.recharts-cartesian-grid_line]:stroke-border/60",
        "[&_.recharts-polar-grid_angle-line]:stroke-border/50",
        "[&_.recharts-polar-grid_concentric-polygon]:stroke-border/50",
        "[&_.recharts-polar-radius-axis-tick_text]:fill-muted-foreground",
        className
      )}
      {...props}
    >
      <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  </ChartContext.Provider>
));
ChartContainer.displayName = "ChartContainer";
