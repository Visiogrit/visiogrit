/**
 * Downloads curated stock photos (Unsplash + Pexels) into public/demos/.
 * Re-run: npm run fetch:demo-images
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public", "demos");

const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=85`;

/** @type {Record<string, { hero?: string; cover?: string; extras?: string[]; extraPrefix?: string }>} */
const ASSETS = {
  devtools: {
    hero: unsplash("1551288049-bebda4e38f71"),
    cover: unsplash("1551288049-bebda4e38f71"),
  },
  "stone-gallery": {
    hero: pexels("139322"),
    cover: pexels("2086361"),
    extras: [pexels("139322"), pexels("2086361"), pexels("1267320"), pexels("1148820"), pexels("315755"), pexels("2086361")],
    extraPrefix: "slab",
  },
  pizzeria: {
    hero: pexels("2147491"),
    cover: pexels("315755"),
    extras: [pexels("2147491"), pexels("315755"), pexels("1148820")],
    extraPrefix: "dish",
  },
  automotive: {
    hero: pexels("170811"),
    cover: pexels("170811"),
    extras: [pexels("170811"), pexels("1148820"), pexels("577585")],
    extraPrefix: "vehicle",
  },
};

async function downloadToFile(url, outPath, width, height) {
  mkdirSync(dirname(outPath), { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  let pipeline = sharp(buf);
  if (width && height) {
    pipeline = pipeline.resize(width, height, { fit: "cover", position: "centre" });
  }
  await pipeline.jpeg({ quality: 86, mozjpeg: true }).toFile(outPath);
  console.log("Wrote", outPath);
}

for (const [slug, spec] of Object.entries(ASSETS)) {
  const dir = join(publicDir, slug);
  mkdirSync(dir, { recursive: true });

  if (spec.hero) {
    await downloadToFile(spec.hero, join(dir, "hero.jpg"), 2000, 1200);
  }
  if (spec.cover) {
    await downloadToFile(spec.cover, join(dir, "cover.jpg"), 1200, 750);
  }
  if (spec.extras?.length) {
    const prefix = spec.extraPrefix ?? "img";
    let i = 1;
    for (const url of spec.extras) {
      await downloadToFile(url, join(dir, `${prefix}-${i}.jpg`), 900, 675);
      i += 1;
    }
  }
}

console.log("Demo stock images ready in public/demos/");
