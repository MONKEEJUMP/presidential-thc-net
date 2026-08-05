# 6119 SPUD — Parallel Lanes Report

Date: 2026-08-05  
Repository: `J:\presidential-thc-net`  
Stable live URL: <https://presidential-thc-net.vercel.app>  
Final production deployment: <https://presidential-thc-htosyxy78-paulie-pauliewoods-projects.vercel.app>  
Primary 6119 code commit: `94150964c793638796f78e5bb541f2b11763743f`  
375 px repair commit: `d8c0848e0654afeecf49666d9e613b4f3f4d9e37`

## Step 0 — File Map And Ownership

1. Active lane at intake: **Lane D / 6117**, holding `src/components/article-page.tsx`, `src/app/globals.css`, and `docs/6117-SPUD-CTA-REPORT.md`. It was finished, committed, deployed, verified, and closed before 6119 fan-out.
2. Header architecture: **standalone component** at `src/components/site-header.tsx`; header styling is in `src/app/globals.css`.
3. CTA architecture: component and insertion point are in the shared renderer `src/components/article-page.tsx`; CTA styling is in `src/app/globals.css`.
4. A/D merge required: **no**. The components are different and Lane D was closed before Lane A received global CSS ownership.
5. C/E merge required: **yes**. Hero and Organization schema both use `src/components/article-page.tsx`, so one writer owned C/E together.
6. Parallel write ownership:
   - Lane A writer: `src/app/globals.css`, `src/components/site-header.tsx`.
   - Merged C/E writer: `src/components/article-page.tsx`, `src/content/pillar.ts`, `src/content/about.ts`.
   - Lane B reviewer: read-only.
   - Lane D reviewer: read-only.
7. Files with overlapping parallel lane writers: **0**. Spud performed sequential integration repairs in two already-owned files, followed by explicit owner review; there were no concurrent or cross-lane writes.

## Lane A — Header And Global CSS

1. Occurrences of `scroll-behavior:smooth` in live built CSS: **0**.
2. Exact live compiled header rule:

```css
.site-header{z-index:100;border-bottom:3px solid #0000;border-image:var(--champagne) 1;background:#070908;position:sticky;top:0}
```

3. Computed sticky values after scrolling: position **sticky**, top **0**, z-index **100**, background `rgb(7, 9, 8)`.
4. Instant navigation scroll samples after clicking Science from 4,500 px: **0, 0, 0** at 0/50/100 ms.
5. Pages showing both lockup lines at desktop width: **30 of 30**.
6. Pages retaining `Presidential THC` as the primary header line: **30 of 30**.
7. Desktop sticky-header child boxes within the viewport: **7 of 7** checked elements visible.
8. Mobile sticky-header child boxes within the viewport: **7 of 7** checked elements visible; the secondary line is intentionally hidden.

## Lane B — Four Silo Hubs

1. Non-skip in-page fragment links remaining across `/science`, `/infusion`, `/formats`, and `/guides`: **0**.
2. Preserved hub section IDs: **17**, unchanged.
   - Science: **1** — `how-to-use-this-section`.
   - Infusion: **5** — `how-infusion-works`, `surface-vs-saturation`, `kief-and-trichomes`, `burn-behavior`, `potency-by-format`.
   - Formats: **6** — `moon-rocks`, `infused-pre-rolls`, `blunts`, `mini-blunts`, `vape-cartridges`, `compare-by-construction`.
   - Guides: **5** — `smoking-moon-rocks`, `storing-infused-cannabis`, `temperature-control`, `quality-signals`, `beginner-path`.
3. Real article destinations in the four hub TOCs: **24** — Science 9, Infusion 5, Formats 5, Guides 5.
4. Duplicate destination caused by the former index clamp: **0**.
5. Accessibility skip links preserved: **30** instances of `#main-content`, one per page.

## Lane C — Hero And Pillar Opening

1. Homepage H1 text: **`Presidential THC`**.
2. Eyebrow count above the homepage H1: **1**.
3. Eyebrow tag: **`P`**, not a heading tag.
4. Eyebrow immediately before the H1: **yes**.
5. Occurrences of `official` in the scoped pillar hero plus opening copy: **2** — once in `THE OFFICIAL`, once in the opening paragraph.
6. Homepage H1 changes from baseline: **0**.

## Lane D — Call To Action

1. Pages carrying the CTA: **30**.
2. Pages carrying more than one CTA: **0**.
3. CTA links with exactly `rel="nofollow"`: **30**.
4. Contextual `presidentialmoonrocks.com` links: **25 before, 25 after**.
5. Contextual links that gained `nofollow`: **0**.
6. Legacy `.external-reference` or paragraph-style contextual blocks: **0**.
7. CTA hover backgrounds: **1** teal rest state `rgb(88, 195, 182)` and **1** champagne hover state `rgb(244, 227, 161)`.

## Lane E — Schema And About

1. Organization `alternateName` entries: **2** — `Presidential THC`, `Presidential Cannabis`.
2. Organization `foundingDate`: **`2012`**.
3. Founding locations: **1** — `Los Angeles, California`.
4. Organization descriptions containing `official`: **1**.
5. `sameAs` entries before: **0**.
6. `sameAs` entries after: **0**.
7. `sameAs` unchanged: **yes**.
8. Positive official/original founding sentence added to About opening: **1**.

## All-Lanes Numbers

1. Project files touched including this report: **6**, within the ceiling of 14.
2. Code files touched: **5**.
3. Files with overlapping parallel lane writers: **0**.
4. Pages returning HTTP 200: **30 of 30**.
5. Supplied pre-6119 word baseline: **27,972**.
6. Mandated new pillar words: **1**.
7. Mandated new About-opening words: **18**.
8. Existing editorial words removed: **0**.
9. Arithmetic post-6119 editorial total: **27,991**. The brief's required copy additions make an unchanged 27,972 total mathematically impossible; this report records the actual delta rather than a false green.
10. Total rendered images: **134**.
11. Page-title changes: **0**.
12. H1-text changes: **0**.
13. Baseline and final title/H1 SHA-256 values matching: **2 of 2**, both `a4a2a1d22b284258395b4af8b7c395ea5acce6621c5ce03785d1f30a937b60a3`.
14. Framework overlays: **0**.
15. Relevant browser console warnings/errors: **0**.
16. Vercel static outputs: **35**.
17. Vercel production status: **Ready**.
18. Code commits used: **2**, not 1. The second commit is the transparent Cactus repair for a 375 px overflow discovered only after the first production-green browser pass; published history was not rewritten with a force-push.

## 375 px Header And Hero Confirmation

1. Viewport width: **375 px**.
2. Document client width: **375 px**.
3. Document scroll width after repair: **375 px**.
4. Horizontal overflow: **0 px**.
5. Primary lockup line rectangles: **1**.
6. Eyebrow line rectangles: **1**.
7. Secondary lockup display at 375 px: **none**, as specified.
8. Hero right edge: **359 px**, inside the viewport.

The first green deployment exposed an existing grid min-content expansion to 562 px on the pillar. The repair added a base mobile `grid-template-columns: minmax(0, 1fr)` rule; desktop grid declarations continue to override it at their existing breakpoints. The full 30-page audit passed again after redeployment.

## Rendered HTML Proof

Normalized rendered header HTML; Next.js responsive `srcset` values are omitted only to keep the quote readable:

```html
<header class="site-header"><a class="skip-link" href="#main-content">Skip to the article</a><div class="site-header__inner"><a class="brand-lockup" aria-label="Presidential THC home" href="/"><img alt="Presidential crest" width="512" height="512" class="brand-crest"><span class="brand-lockup__text"><span class="brand-lockup__name">Presidential THC</span><span class="brand-lockup__tagline">The Official Presidential Site</span></span></a><nav class="primary-nav" aria-label="Primary navigation"><a href="/science">Science</a><a href="/infusion">Infusion</a><a href="/formats">Formats</a><a href="/guides">Guides</a><a href="/about">About</a></nav></div></header>
```

Rendered hero HTML:

```html
<header class="article-hero"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Presidential THC</span></nav><p class="article-hero__eyebrow">THE OFFICIAL</p><h1>Presidential THC</h1><p class="article-hero__dek">A clear guide to Presidential THC, three-layer infused cannabis, potency labels, extraction methods, formats, terpenes, and practical handling.</p></header>
```

Rendered CTA HTML:

```html
<aside class="brand-cta" aria-labelledby="brand-cta-heading"><h2 id="brand-cta-heading">Presidential Moon Rocks</h2><p>The official Presidential site — the full catalog and the licensed retailer locator.</p><a class="brand-cta__button" href="https://presidentialmoonrocks.com" rel="nofollow">Visit the official site</a></aside>
```

## Full Organization JSON-LD

```json
{
  "@type": "Organization",
  "@id": "https://presidentialthc.net/#organization",
  "name": "Presidential",
  "alternateName": [
    "Presidential THC",
    "Presidential Cannabis"
  ],
  "foundingDate": "2012",
  "foundingLocation": {
    "@type": "Place",
    "name": "Los Angeles, California"
  },
  "description": "Presidential is the official publisher of this infused cannabis reference, founded in Los Angeles in 2012.",
  "url": "https://presidentialthc.net",
  "logo": {
    "@type": "ImageObject",
    "url": "https://presidentialthc.net/images/presidential-crest.webp",
    "width": 512,
    "height": 512
  },
  "sameAs": []
}
```

## Deployment, Rollback, And Evidence

1. Final production deployment: `https://presidential-thc-htosyxy78-paulie-pauliewoods-projects.vercel.app`.
2. Stable live alias: `https://presidential-thc-net.vercel.app`.
3. Exact rollback command to the pre-6119 production deployment:

```powershell
vercel rollback https://presidential-thc-hdf4cdfbo-paulie-pauliewoods-projects.vercel.app --yes
```

4. Browser plugin status: **not available**; bundled Playwright Chromium was used as the recorded fallback.
5. Desktop viewport: **1440 × 1000**.
6. Mobile viewport: **375 × 812**.
7. Screenshot directory: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75`.
