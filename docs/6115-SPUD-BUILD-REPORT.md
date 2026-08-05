# 6115 SPUD Build Report — presidentialthc.net

Generated 2026-08-05 from release code commit `0057091d5f838158a1d8765e7fd05e868455a09c`.

## Launch Status

- Live Vercel URL: <https://presidential-thc-net.vercel.app>
- Final production deployment: <https://presidential-thc-pmjsyf08n-paulie-pauliewoods-projects.vercel.app>
- Canonical host in metadata: <https://presidentialthc.net>
- Domain state: apex and `www` are attached to the new Vercel project, but third-party DNS is unresolved. Vercel requests `A presidentialthc.net 76.76.21.21`; `www` also needs configuration.
- Production build: passed locally and on Vercel with Next.js 16.3.0 / Node 24.x.
- Release code commit: `0057091d5f838158a1d8765e7fd05e868455a09c`
- Rollback command: `vercel rollback https://presidential-thc-de1jlm71v-paulie-pauliewoods-projects.vercel.app --yes`

## Required Numeric Report

1. Pages built: **30**. The brief's explicit route tree contains 30 pages even though its summary says 29.
2. Pages live and returning HTTP 200: **30 of 30** at the Vercel URL.
3. Total editorial words written: **22,478**. This count covers authored body copy and table values; global chrome, image captions, and article recommendation labels are excluded. Linked silo-hub summaries are included.
4. Words per page: **30 route counts** listed in the next section.
5. Content images placed: **104** unique packaging images, plus **1** shared header crest.
6. Pages with zero content images: **0**.
7. Content images appearing on more than one page: **0**.
8. Content images missing width or height: **0**.
9. Content images not in WebP: **0**.
10. Duplicate content alt strings across the site: **0**. The shared crest uses one stable logo alt and is excluded from the unique packaging-alt count.
11. Images in `image-sitemap.xml`: **104**, equal to the content-image count.
12. Pages missing `og:image`: **0**.
13. Pages with more than one H1: **0**.
14. Pages missing a self-canonical: **0**.
15. Pages with robots other than `index, follow`: **0**.
16. `sitemap.xml` URL count: **30**.
17. Articles linking up to their own hub: **24 of 24**, through real breadcrumb anchors.
18. Sideways links per article: **9 articles have 2**, **14 have 3**, and **1 has 4**; every article is inside the required 2–4 range.
19. Article-to-article cross-silo links: **0**.
20. Outbound links to presidentialmoonrocks.com: **25** across 25 pages; all 15 unique destinations returned HTTP 200.
21. Occurrences of the anchor text `click here`: **0**.
22. Largest measured cold-mobile page transfer after forcing all lazy images to load: **0.668 MiB** on `/`, below the 2 MiB cap. All 30 measured routes were below the cap.
23. Entries in `DEFECTS.md`: **3**.

## Editorial Word Counts

| Route | Words |
| --- | ---: |
| `/` | 1,664 |
| `/science` | 425 |
| `/science/thca-vs-thc` | 777 |
| `/science/decarboxylation` | 736 |
| `/science/reading-a-lab-report` | 783 |
| `/science/terpenes` | 821 |
| `/science/cannabinoids` | 777 |
| `/science/distillate` | 752 |
| `/science/live-resin` | 742 |
| `/science/live-rosin` | 717 |
| `/science/liquid-diamonds` | 735 |
| `/infusion` | 545 |
| `/infusion/how-infusion-works` | 836 |
| `/infusion/surface-vs-saturation` | 868 |
| `/infusion/kief-and-trichomes` | 855 |
| `/infusion/why-infused-burns-differently` | 872 |
| `/infusion/potency-by-format` | 875 |
| `/formats` | 422 |
| `/formats/moon-rocks` | 749 |
| `/formats/infused-pre-rolls` | 739 |
| `/formats/blunts` | 759 |
| `/formats/mini-blunts` | 740 |
| `/formats/vape-cartridges` | 787 |
| `/guides` | 465 |
| `/guides/how-to-smoke-moon-rocks` | 731 |
| `/guides/how-to-store-infused-cannabis` | 737 |
| `/guides/temperature-guide` | 787 |
| `/guides/what-to-look-for` | 704 |
| `/guides/beginners-guide` | 718 |
| `/about` | 360 |
| **Total** | **22,478** |

## Structure And Schema Proof

- Route kinds: **1 pillar**, **4 hubs**, **24 articles**, **1 about page**.
- Hub child links: **9 science**, **5 infusion**, **5 formats**, **5 guides**.
- Pillar links: **4 hubs + 8 supporting articles**.
- Structured data: **1 Organization graph** on the pillar with `sameAs: []`, **24 Article graphs**, and **104 ImageObject entries**.
- TOCs: **5 total**, on the pillar and four hubs only.
- Robots: allow-all plus explicit allow rules for **GPTBot, ClaudeBot, PerplexityBot, and Google-Extended**.
- Redirect: host-gated permanent **308** from `www.presidentialthc.net` to the apex.
- Duplicate rendered anchor labels within any page: **0** after global navigation labels were made distinct.

## Visual And Performance Proof

- Browser method: bundled Playwright Chromium fallback because no Browser/IAB tool was exposed in this task.
- Desktop viewport: **1440 × 1000**.
- Mobile viewport: **390 × 844**.
- Reference capture: `docs/qa/reference-presidential-main-desktop.png`.
- Desktop implementation capture: `docs/qa/presidential-thc-home-desktop.png`.
- Mobile implementation capture: `docs/qa/presidential-thc-home-mobile.png`.
- Transfer ledger: `docs/qa/mobile-transfer-results.json`.
- Direct image inspection compared the reference and both implementation captures. Verified points: **black/dark field**, **prominent Presidential crest**, **master teal #58C3B6**, **3px champagne structural seam**, **Clash Display / Source Serif 4 hierarchy**, **teal pinstripe media frames**, and **mobile layout without horizontal overflow**.
- Above-the-fold copy diff: the required H1 and five navigation labels are present; no unrequested hero eyebrow, badge, pill, CTA, video, age gate, or bento layout was added.
- Material repairs made during review: **1** below-fold eager image load changed to lazy, and **1** repeated global-anchor-label pattern removed.
- Intentional layout difference: this is the requested editorial publication rather than the main site's billboard/bento/video layout.

## Full Contents Of DEFECTS.md

```markdown
# Presidential THC Build Defects

This file records workarounds and remaining proof gaps from build 6115.

## Phase 1 — Infrastructure

- **Problem:** The supplied J-drive project folder was empty and was not a Git repository.
  **Workaround:** Initialized a new `main` repository in the required canonical folder and continued the build.
- **Problem:** `presidentialthc.net` did not resolve in DNS during the initial infrastructure check on 2026-08-05 and remained unresolved after deployment.
  **Workaround:** Created the separate Vercel project, attached both `presidentialthc.net` and `www.presidentialthc.net`, and launched all pages at `https://presidential-thc-net.vercel.app`. Vercel reports that the third-party DNS provider still needs an `A` record pointing the apex to `76.76.21.21`; `www` is also not configured. The app already contains the required 308 host redirect from `www` to the apex and Vercel will provision certificates after DNS verifies.

## Phase 4 — Architecture

- **Problem:** The brief says “29 pages” and “23 articles,” but its explicit route tree contains 30 pages: 1 pillar, 4 hubs, 24 articles, and 1 about page. Omitting a route would violate the route-by-route build specification.
  **Workaround:** Built all 30 explicitly named routes and report the actual count as 30 pages / 24 articles. The image allocation was raised from 101 to 104 so every listed article still receives the required minimum of three images.
```

## Exact Next Move

1. Add `A presidentialthc.net 76.76.21.21` at the third-party DNS provider.
2. Configure the `www` record shown by Vercel, then wait for automatic DNS and SSL verification.
3. Recheck `https://presidentialthc.net`, the `www` 308 redirect, and submit `https://presidentialthc.net/sitemap.xml` in Google Search Console.
