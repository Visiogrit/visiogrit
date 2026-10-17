/** Scroll to a document section id and sync the URL hash (client-only). */
export function scrollToHashId(id: string): boolean {
  if (typeof document === "undefined") return false;
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
  return true;
}

export function scrollToCurrentHash(): void {
  if (typeof window === "undefined") return;
  const id = window.location.hash.replace(/^#/, "");
  if (id) scrollToHashId(id);
}
