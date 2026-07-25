import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg']);
let converted = 0, skipped = 0, totalSaved = 0;

for await (const file of walk(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase();
  if (!SUPPORTED.has(ext)) continue;

  const webpPath = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  const { size: originalSize } = await stat(file);

  try {
    await sharp(file)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);

    const { size: newSize } = await stat(webpPath);
    const saved = originalSize - newSize;
    const pct = ((saved / originalSize) * 100).toFixed(1);
    console.log(`✓ ${basename(file)} → ${basename(webpPath)}  (${(originalSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB, -${pct}%)`);
    totalSaved += saved;
    converted++;
  } catch (e) {
    console.error(`✗ ${basename(file)}: ${e.message}`);
    skipped++;
  }
}

console.log(`\nDone: ${converted} converted, ${skipped} skipped`);
console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
