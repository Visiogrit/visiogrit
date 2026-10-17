import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type DemoConceptChromeProps = {
  demoTitle: string;
};

export function DemoConceptChrome({ demoTitle }: DemoConceptChromeProps) {
  return (
    <div className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link
          href="/demos"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          All concept demos
        </Link>
        <p className="text-center text-xs text-muted sm:text-sm">
          <span className="font-medium text-foreground">Concept demo</span>
          <span className="mx-2 text-border">·</span>
          {demoTitle}
          <span className="mx-2 text-border">·</span>
          Built by Visiogrit
        </p>
        <Link
          href="/#contact"
          className="text-sm font-medium text-accent hover:opacity-90"
        >
          Start a project
        </Link>
      </div>
    </div>
  );
}
