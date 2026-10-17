import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const slugs = [
  "kanth-foundation",
  "bank-auction-list",
  "ssb-granites",
  "visiogrit",
];

for (const slug of slugs) {
  const dir = join(root, "public", "work", slug);
  const svgPath = join(dir, "cover.svg");
  if (!existsSync(svgPath)) {
    console.warn(`Skip ${slug}: missing cover.svg`);
    continue;
  }
  mkdirSync(dir, { recursive: true });
  await sharp(svgPath)
    .resize(1200, 750)
    .webp({ quality: 82 })
    .toFile(join(dir, "cover.webp"));
  await sharp(svgPath)
    .resize(1200, 750)
    .png()
    .toFile(join(dir, "cover.png"));
  console.log(`Generated cover.webp + cover.png for ${slug}`);
}
