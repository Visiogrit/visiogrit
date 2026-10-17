"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-10 w-10 rounded-lg border border-border bg-elevated/50"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  function toggle() {
    const next = isDark ? "light" : "dark";
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(
        () => setTheme(next)
      );
    } else {
      setTheme(next);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-elevated/80 text-foreground transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
    >
      <motion.span
        className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent-secondary/10 opacity-0 transition-opacity group-hover:opacity-100"
        layout
      />
      <span className="relative flex flex-col items-center justify-center font-mono text-[10px] font-bold leading-none tracking-tighter">
        <span>V</span>
        <motion.span
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mt-0.5 block h-px w-3 bg-accent"
        />
        <span>G</span>
      </span>
    </button>
  );
}
