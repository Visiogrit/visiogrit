/**
 * Downloads curated stock photos into public/work/<slug>/cover.jpg + cover.webp
 * Re-run: npm run fetch:work-images
 */
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const workDir = join(root, "public", "work");

const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2000&q=85`;

/** @type {Record<string, string>} */
const COVERS = {
  "bank-auction-list": unsplash("1551288049-bebda4e38f71"),
  "kanth-foundation": pexels("6646918"),
  "ssb-granites": pexels("2086361"),
  visiogrit: pexels("196644"),
};

const WIDTH = 1200;
const HEIGHT = 750;

async function downloadCover(url, slug) {
  const dir = join(workDir, slug);
  mkdirSync(dir, { recursive: true });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const resized = await sharp(buf)
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
    .toBuffer();

  const jpgPath = join(dir, "cover.jpg");
  const webpPath = join(dir, "cover.webp");
  const pngPath = join(dir, "cover.png");

  await sharp(resized).jpeg({ quality: 86, mozjpeg: true }).toFile(jpgPath);
  await sharp(resized).webp({ quality: 82 }).toFile(webpPath);
  await sharp(resized).png().toFile(pngPath);
  console.log(`Wrote ${slug}: cover.jpg, cover.webp, cover.png`);
}

for (const [slug, url] of Object.entries(COVERS)) {
  await downloadCover(url, slug);
}

console.log("Work stock covers ready in public/work/");
