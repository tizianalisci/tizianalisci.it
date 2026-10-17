import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.jpg', { eager: true });

/** Resolve an image by key, e.g. "corpi/cover" → /src/assets/corpi/cover.jpg */
export function img(key: string): ImageMetadata {
  const mod = all[`/src/assets/${key}.jpg`];
  if (!mod) throw new Error(`Missing image: ${key}`);
  return mod.default;
}
