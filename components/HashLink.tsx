"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { scrollToHashId } from "@/lib/scroll-to-hash";

type HashLinkProps = ComponentProps<typeof Link>;

export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : "";

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        const match = hrefString.match(/^\/#([^/?#]+)$/);
        if (match && pathname === "/") {
          e.preventDefault();
          scrollToHashId(match[1]);
        }
      }}
      {...props}
    />
  );
}
