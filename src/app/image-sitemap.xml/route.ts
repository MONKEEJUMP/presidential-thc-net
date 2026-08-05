import { pageImages } from "@/content/assets";
import { pages } from "@/content";
import { absoluteUrl, escapeXml, imagesForPage } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const urls = pages
    .map((page) => {
      const images = imagesForPage(pageImages, page.path);
      const imageEntries = images
        .map(
          (image) => `    <image:image>
      <image:loc>${escapeXml(absoluteUrl(image.src))}</image:loc>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`,
        )
        .join("\n");

      return `  <url>
    <loc>${escapeXml(absoluteUrl(page.path))}</loc>${imageEntries ? `\n${imageEntries}` : ""}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
