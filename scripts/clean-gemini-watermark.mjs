import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sourcesDir = join(root, "brand", "sources");

/** Bottom-right sparkle watermark on Gemini exports. */
const PATCH = { widthRatio: 0.09, heightRatio: 0.07 };

async function sampleBackground(image, region) {
  const { data, info } = await sharp(image)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let r = 0;
  let g = 0;
  let b = 0;
  let n = 0;
  const { left, top, width, height } = region;

  for (let y = top; y < top + height; y++) {
    for (let x = left; x < left + width; x++) {
      const i = (y * info.width + x) * 4;
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      n++;
    }
  }

  return {
    r: Math.round(r / n),
    g: Math.round(g / n),
    b: Math.round(b / n),
    alpha: 1,
  };
}

async function removeGeminiMark(filePath, backgroundOverride) {
  const input = await sharp(filePath).png().toBuffer();
  const { width, height } = await sharp(input).metadata();

  const patchW = Math.max(24, Math.round(width * PATCH.widthRatio));
  const patchH = Math.max(24, Math.round(height * PATCH.heightRatio));
  const left = width - patchW;
  const top = height - patchH;

  const bg =
    backgroundOverride ??
    (await sampleBackground(input, {
      left: 8,
      top: 8,
      width: Math.min(48, Math.floor(width * 0.12)),
      height: Math.min(48, Math.floor(height * 0.12)),
    }));

  const patch = await sharp({
    create: {
      width: patchW,
      height: patchH,
      channels: 4,
      background: bg,
    },
  })
    .png()
    .toBuffer();

  await sharp(input)
    .composite([{ input: patch, left, top }])
    .png()
    .toFile(filePath);

  console.log(`Cleaned ${filePath}`);
}

const files = readdirSync(sourcesDir).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const path = join(sourcesDir, file);
  let override;
  if (file === "logo-dark-panel.png") {
    override = { r: 0, g: 0, b: 0, alpha: 1 };
  } else if (file === "logo-light-panel.png") {
    override = { r: 255, g: 255, b: 255, alpha: 1 };
  } else if (file === "logo-modes.png") {
    override = { r: 0, g: 0, b: 0, alpha: 1 };
  }
  await removeGeminiMark(path, override);
}

console.log("Done. Run npm run generate:brand to refresh app icons.");
