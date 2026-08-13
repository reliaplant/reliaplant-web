import { generateSlug } from "./slug";

export interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Blog post bodies are raw HTML from Tiptap with no heading ids. This walks the
 * h2/h3 tags with a regex (safe here because Tiptap never nests headings inside
 * headings), assigns slug-based ids for anchor links, and returns the list for a
 * table of contents alongside the rewritten HTML.
 */
export function processContentHeadings(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();

  const processedHtml = html.replace(
    /<h([23])((?:(?!>)[\s\S])*)>([\s\S]*?)<\/h\1>/gi,
    (match, level: string, attrs: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      if (!text) return match;

      const base = generateSlug(text) || "seccion";
      let id = base;
      let i = 2;
      while (used.has(id)) {
        id = `${base}-${i++}`;
      }
      used.add(id);
      toc.push({ id, text, level: Number(level) as 2 | 3 });

      const cleanedAttrs = attrs.replace(/\sid="[^"]*"/gi, "");
      return `<h${level}${cleanedAttrs} id="${id}">${inner}</h${level}>`;
    }
  );

  return { html: processedHtml, toc };
}

/** Wraps paragraphs that contain ✅ or ❌ in a colored callout instead of plain text. */
export function styleCallouts(html: string): string {
  return html.replace(/<p>([\s\S]*?)<\/p>/gi, (match, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "");
    if (text.includes("✅")) return `<p class="callout callout-success">${inner}</p>`;
    if (text.includes("❌")) return `<p class="callout callout-error">${inner}</p>`;
    return match;
  });
}

export function estimateReadingTime(html: string): number {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
