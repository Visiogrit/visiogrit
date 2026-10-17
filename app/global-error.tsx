"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#0a0d14", color: "#f8fafc" }}>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "1.5rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Application error</h1>
          <p style={{ fontSize: "0.875rem", color: "#94a3b8", maxWidth: "28rem" }}>
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              background: "#38bdf8",
              color: "#0a0d14",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
