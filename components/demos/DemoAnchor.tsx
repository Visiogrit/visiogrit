"use client";

import type { ComponentProps } from "react";
import { scrollToHashId } from "@/lib/scroll-to-hash";

type DemoAnchorProps = ComponentProps<"a">;

/** In-page section link that scrolls reliably under sticky demo chrome. */
export function DemoAnchor({ href = "", onClick, ...props }: DemoAnchorProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (href.startsWith("#") && href.length > 1) {
          e.preventDefault();
          scrollToHashId(href.slice(1));
        }
      }}
      {...props}
    />
  );
}
