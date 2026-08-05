import type { ContentImage, PageContent } from "@/content/types";

export const SITE_NAME = "Presidential THC";
export const SITE_URL = "https://presidentialthc.net";
export const DEFAULT_OG_IMAGE = "/images/presidential-crest.webp";

export const primaryNavigation = [
  { href: "/science", label: "Science" },
  { href: "/infusion", label: "Infusion" },
  { href: "/formats", label: "Formats" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
] as const;

export function normalizePath(path: string): string {
  if (!path || path === "/") return "/";
  return `/${path.replace(/^\/+|\/+$/g, "")}`;
}

export function pathFromSegments(segments?: string[]): string {
  return segments?.length ? normalizePath(segments.join("/")) : "/";
}

export function absoluteUrl(path: string): string {
  return new URL(normalizePath(path), SITE_URL).toString();
}

export function findPage(
  pages: readonly PageContent[],
  path: string,
): PageContent | undefined {
  const normalizedPath = normalizePath(path);
  return pages.find((page) => normalizePath(page.path) === normalizedPath);
}

export function imagesForPage(
  pageImages: Readonly<Record<string, ContentImage[]>>,
  path: string,
): ContentImage[] {
  const normalizedPath = normalizePath(path);
  return pageImages[normalizedPath] ?? [];
}

export function imageUrl(image?: ContentImage): string {
  return absoluteUrl(image?.src ?? DEFAULT_OG_IMAGE);
}

export function escapeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
