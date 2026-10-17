import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="text-sm text-muted">The page you requested does not exist.</p>
      <Link
        href="/"
        className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
      >
        Back home
      </Link>
    </div>
  );
}
