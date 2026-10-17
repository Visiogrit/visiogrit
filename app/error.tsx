"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-xl font-semibold text-foreground">Something went wrong</h1>
      <p className="max-w-md text-sm text-muted">
        Try refreshing the page. If this keeps happening, restart the dev server and delete the
        <code className="mx-1 rounded bg-elevated px-1.5 py-0.5 font-mono text-xs">.next</code>
        folder.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
      >
        Try again
      </button>
    </div>
  );
}
