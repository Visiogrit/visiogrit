"use client";

import { motion } from "framer-motion";
import { useHasMounted } from "@/lib/use-has-mounted";

const TOKENS = [
  { label: "Display", value: "56 / 1.05", className: "text-2xl font-semibold tracking-tight text-foreground" },
  { label: "Body", value: "18 / 1.6", className: "text-sm text-foreground/85" },
  { label: "Mono", value: "12 / 1.4", className: "font-mono text-xs text-accent" },
];

const SWATCHES = [
  { name: "accent", className: "bg-accent" },
  { name: "elevated", className: "bg-elevated border border-border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "muted", className: "bg-muted/40" },
];

const SPACING = [4, 8, 12, 16, 24, 32];

export function HeroSystemCanvas() {
  const mounted = useHasMounted();

  const shellClass =
    "relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-card backdrop-blur-sm md:p-6";

  const inner = (
    <>
      <div className="mb-4 flex items-center justify-between gap-2 border-b border-border pb-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          System specimen
        </span>
        <span className="font-mono text-[10px] text-muted">v1.0</span>
      </div>

      <div className="space-y-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/55">Type scale</p>
        <div className="space-y-2 rounded-xl border border-border bg-elevated/50 p-3">
          {TOKENS.map((token) => (
            <div key={token.label} className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-[10px] text-muted">{token.label}</span>
              <span className={token.className}>{token.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/55">Color tokens</p>
        <div className="flex flex-wrap gap-2">
          {SWATCHES.map((swatch) => (
            <div key={swatch.name} className={`h-9 w-9 rounded-lg ${swatch.className}`} title={swatch.name} />
          ))}
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <p className="text-[10px] font-medium uppercase tracking-wider text-foreground/55">Spacing</p>
        <div className="flex items-end gap-1.5 rounded-xl border border-border bg-elevated/50 p-3">
          {SPACING.map((step) => (
            <div
              key={step}
              className="w-2 rounded-sm bg-accent/70"
              style={{ height: step }}
            />
          ))}
        </div>
      </div>
    </>
  );

  if (!mounted) {
    return (
      <div aria-hidden className={shellClass}>
        {inner}
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={shellClass}
    >
      {inner}
    </motion.div>
  );
}
