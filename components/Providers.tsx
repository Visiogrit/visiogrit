"use client";

import { ThemeProvider } from "next-themes";
import { HashScroll } from "@/components/HashScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="visiogrit-theme"
      disableTransitionOnChange
    >
      <HashScroll />
      {children}
    </ThemeProvider>
  );
}
