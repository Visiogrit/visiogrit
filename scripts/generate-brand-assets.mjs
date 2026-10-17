import { mkdirSync, writeFileSync, existsSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = join(root, "brand");
const sourcesDir = join(brandDir, "sources");
const appDir = join(root, "app");
const publicDir = join(root, "public");

mkdirSync(sourcesDir, { recursive: true });
mkdirSync(publicDir, { recursive: true });

const markPath = join(sourcesDir, "logo-mark.png");
const modesPath = join(sourcesDir, "logo-modes.png");

if (!existsSync(markPath) || !existsSync(modesPath)) {
  throw new Error(
    "Add Gemini exports to brand/sources/logo-mark.png and brand/sources/logo-modes.png",
  );
}

/** Split light/dark reference sheet (optional archive). */
const modesMeta = await sharp(modesPath).metadata();
const half = Math.floor(modesMeta.width / 2);
await sharp(modesPath)
  .extract({ left: 0, top: 0, width: half, height: modesMeta.height })
  .png()
  .toFile(join(sourcesDir, "logo-light-panel.png"));
await sharp(modesPath)
  .extract({ left: half, top: 0, width: modesMeta.width - half, height: modesMeta.height })
  .png()
  .toFile(join(sourcesDir, "logo-dark-panel.png"));

function hexToRgb(hex) {
  const n = hex.replace("#", "");
  return {
    r: parseInt(n.slice(0, 2), 16),
    g: parseInt(n.slice(2, 4), 16),
    b: parseInt(n.slice(4, 6), 16),
  };
}

async function keyGrayBackground(inputBuffer, backgroundHex) {
  const bg = hexToRgb(backgroundHex);
  const { data, info } = await sharp(inputBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const isGray =
      Math.abs(r - g) < 18 &&
      Math.abs(g - b) < 18 &&
      r > 150 &&
      r < 245;
    if (isGray) {
      data[i] = bg.r;
      data[i + 1] = bg.g;
      data[i + 2] = bg.b;
      data[i + 3] = 255;
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png().toBuffer();
}

async function extractMarkCrop() {
  const { width, height } = await sharp(markPath).metadata();
  const size = Math.round(Math.min(width, height) * 0.78);
  const left = Math.round((width - size) / 2);
  const top = Math.round((height - size) / 2);
  return sharp(markPath)
    .extract({ left, top, width: size, height: size })
    .png()
    .toBuffer();
}

const markCrop = await extractMarkCrop();

async function appIconFromMark(backgroundHex, size) {
  const keyed = await keyGrayBackground(markCrop, backgroundHex);
  const resized = await sharp(keyed)
    .resize(size, size, { fit: "contain", background: backgroundHex })
    .png()
    .toBuffer();
  const rx = Math.round(size * 0.22);
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${rx}" fill="white"/></svg>`,
  );
  return sharp(resized).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

const iconDark = await appIconFromMark("#0f131c", 512);
const iconLight = await appIconFromMark("#f6f3ec", 512);
const appleDark = await appIconFromMark("#0f131c", 180);

writeFileSync(join(appDir, "icon.png"), iconDark);
writeFileSync(join(appDir, "apple-icon.png"), appleDark);
writeFileSync(join(brandDir, "icon-dark.png"), iconDark);
writeFileSync(join(brandDir, "icon-light.png"), iconLight);
writeFileSync(join(publicDir, "icon-light.png"), iconLight);

const png16 = await sharp(iconDark).resize(16, 16).png().toBuffer();
const png32 = await sharp(iconDark).resize(32, 32).png().toBuffer();
writeFileSync(join(appDir, "favicon.ico"), await pngToIco([png16, png32]));

const ogLogo = await keyGrayBackground(markCrop, "#0a0d14");
const ogLogoSized = await sharp(ogLogo)
  .resize(300, 300, { fit: "contain", background: { r: 10, g: 13, b: 20, alpha: 1 } })
  .png()
  .toBuffer();

const featuredCoverPath = join(root, "public", "work", "bank-auction-list", "cover.webp");
let featuredCover = null;
if (existsSync(featuredCoverPath)) {
  featuredCover = await sharp(featuredCoverPath)
    .resize(720, 450, { fit: "cover" })
    .png()
    .toBuffer();
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#0a0d14"/>
  <defs>
    <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
      <path d="M64 0H0V64" stroke="rgba(148,163,184,0.08)" stroke-width="1" fill="none"/>
    </pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0a0d14" stop-opacity="0.15"/>
      <stop offset="0.45" stop-color="#0a0d14" stop-opacity="0.92"/>
      <stop offset="1" stop-color="#0a0d14"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="520" y="0" width="680" height="630" fill="url(#fade)"/>
  <text x="56" y="280" fill="#ffffff" font-family="ui-sans-serif, system-ui, sans-serif" font-size="64" font-weight="650" letter-spacing="-0.03em">Visiogrit</text>
  <text x="58" y="340" fill="#94a3b8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="450">Brand systems for tech products</text>
  <text x="58" y="400" fill="#38bdf8" font-family="ui-sans-serif, system-ui, sans-serif" font-size="20" font-weight="500">Shipped work — not placeholders</text>
  <text x="58" y="560" fill="#64748b" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22">visiogrit.com</text>
</svg>`;

const composites = [{ input: ogLogoSized, left: 56, top: 120 }];
if (featuredCover) {
  composites.unshift({ input: featuredCover, left: 480, top: 90 });
}

const ogFinal = await sharp(Buffer.from(ogSvg))
  .png()
  .composite(composites)
  .png()
  .toBuffer();

writeFileSync(join(appDir, "opengraph-image.png"), ogFinal);
writeFileSync(join(appDir, "twitter-image.png"), ogFinal);

for (const legacy of ["icon.svg", "apple-icon.svg"]) {
  const legacyPath = join(appDir, legacy);
  if (existsSync(legacyPath)) unlinkSync(legacyPath);
}

console.log(
  "Generated from brand/sources/logo-mark.png: icon.png, apple-icon.png, favicon.ico, opengraph-image.png",
);
