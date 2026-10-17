export const DEMO_BRAND_PLACEHOLDER = "Your business name";

export function resolveDemoBrand(
  brand: string | string[] | undefined,
  fallback: string,
): string {
  const raw = Array.isArray(brand) ? brand[0] : brand;
  const trimmed = raw?.trim();
  if (!trimmed) return fallback;
  return trimmed.slice(0, 56);
}

export function demoOpenHref(slug: string, brand?: string): string {
  if (!brand?.trim()) return `/demos/${slug}`;
  return `/demos/${slug}?brand=${encodeURIComponent(brand.trim())}`;
}
