"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { SITE } from "@/lib/constants";

type CopyEmailButtonProps = {
  className?: string;
};

export function CopyEmailButton({ className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <a
        href={`mailto:${SITE.email}`}
        className="font-medium text-accent underline-offset-4 transition-colors hover:opacity-80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        {SITE.email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-elevated/60 text-muted transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
      {copied ? (
        <span
          role="status"
          className="rounded-md bg-accent-muted px-2 py-1 text-xs font-medium text-accent"
        >
          Copied
        </span>
      ) : null}
    </div>
  );
}
