"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToCurrentHash } from "@/lib/scroll-to-hash";

/** After route changes, scroll to `#section` when present in the URL. */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToCurrentHash();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToCurrentHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
