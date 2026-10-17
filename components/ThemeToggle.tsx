"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={`inline-block h-9 w-[4.5rem] rounded-full border border-border bg-elevated/50 ${className}`}
        aria-hidden
      />
    );
  }

  const isDark = (resolvedTheme ?? "light") === "dark";

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
      role="switch"
      aria-checked={!isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={`relative inline-flex h-9 w-[4.5rem] shrink-0 items-center rounded-full border border-border bg-elevated/90 p-1 transition-colors hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${className}`}
    >
      <Sun
        className={`absolute left-2.5 h-3.5 w-3.5 transition-opacity ${isDark ? "opacity-35" : "text-accent opacity-100"}`}
        aria-hidden
      />
      <Moon
        className={`absolute right-2.5 h-3.5 w-3.5 transition-opacity ${isDark ? "text-accent opacity-100" : "opacity-35"}`}
        aria-hidden
      />
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="absolute top-1 h-7 w-7 rounded-full bg-accent shadow-sm"
        animate={{ left: isDark ? "calc(100% - 2rem)" : "0.25rem" }}
      />
      <span className="sr-only">{isDark ? "Dark mode on" : "Light mode on"}</span>
    </button>
  );
}
