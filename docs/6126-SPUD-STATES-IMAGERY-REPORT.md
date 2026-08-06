# 6126-SPUD — States silo product imagery report

Status: **shipped, pushed, and production Ready**

Production: <https://presidentialthc.net>

Implementation commit: `f283a878dd48597cd92ad73b5de7f13105f96345`

Production build attempts: **1**

Failed production build attempts: **0**

## Shipped result

All **9** States pages now render **5** unique portrait product figures apiece. At desktop widths all **45** figures sit to the right of their section text; at mobile widths each figure stacks below its corresponding text. All **45** figures use the existing `ContentFigure`, `pageImages`, and 6121 product-link mechanisms. No component, animation, copy, section, or existing link was added or changed beyond the required image integration.

## Required numeric verification

| Verification | Result |
|---|---:|
| Source/content/report files touched | **4** |
| Fresh required image payload files added | **45** |
| Total tracked task paths, including the 45 image binaries | **49** |
| Image files in `/public` before | **105** |
| Image files in `/public` after | **150** |
| Images in `/public` not referenced by `assets.ts` before, excluding the shared crest | **0** |
| Images copied fresh from the source library | **45** |
| States pages carrying content images | **9** |
| Content images added per States page | **5** |
| Content images added across the States silo | **45** |
| Content image sources assigned sitewide before | **104** |
| Content image sources assigned sitewide after | **149** |
| Content image sources appearing on more than one page sitewide | **0** |
| Images missing declared width or height | **0** |
| Declared/source dimension mismatches | **0** |
| Added images with dimensions other than 1080×1350 | **0** |
| Content images not in WebP | **0** |
| Content images with a 16:9 aspect ratio | **0** |
| Content images with landscape orientation | **0** |
| Duplicate content-image alt strings sitewide | **0** |
| Added alt strings outside the required 5–15-word range | **0** |
| Added filenames containing uppercase letters or underscores | **0** |
| Added figures linked to a product page | **45** |
| Added figures left unlinked | **0** |
| Distinct product targets used | **27** |
| Distinct product targets returning 200 | **27** |
| Added image links carrying `rel="nofollow"` | **0** |
| Added image links carrying `target="_blank"` | **0** |
| Nested anchors across the 39-page production crawl | **0** |
| States figures rendering left of section text at 1440px | **0** |
| States sections using the alternating/reverse layout | **0** |
| States lead-image placements | **0** |
| Rendered main-content words before | **32,641** |
| Rendered main-content words after | **32,641** |
| Net word change | **0** |
| Sitemap URLs returning 200 | **39 / 39** |
| Largest cold States-page transfer | **0.621 MB** |
| Production console errors during the States crawl | **0** |
| Production page errors during the States crawl | **0** |
| Framework error overlays | **0** |

The scope ceiling and the image-acquisition requirement describe two different classes of path. The implementation stayed within the **4-file source/content/report ceiling**: `article-page.tsx`, `assets.ts`, `product-links.ts`, and this report. The required fresh payload necessarily adds **45 separate WebP files**, making **49 tracked task paths** literally. No optional file was changed. The pre-existing untracked `docs/6123-FABLE-PHASE-2-ARCHITECTURE.md` was not touched or committed.

The duplicate-alt metric above covers every product/content image governed by `assets.ts` and is **0**. If repeated site chrome is included, the shared header crest's existing `Presidential crest` alt appears on **39** pages; it is one unchanged site-chrome image outside this task, not a duplicated content/product assignment.

## Content images per States page

| Page | Before | After | Right of text | Linked | Unlinked |
|---|---:|---:|---:|---:|---:|
| `/states` | 0 | **5** | 5 | 5 | 0 |
| `/states/california` | 0 | **5** | 5 | 5 | 0 |
| `/states/oklahoma` | 0 | **5** | 5 | 5 | 0 |
| `/states/new-york` | 0 | **5** | 5 | 5 | 0 |
| `/states/nevada` | 0 | **5** | 5 | 5 | 0 |
| `/states/michigan` | 0 | **5** | 5 | 5 | 0 |
| `/states/arizona` | 0 | **5** | 5 | 5 | 0 |
| `/states/florida` | 0 | **5** | 5 | 5 | 0 |
| `/states/washington` | 0 | **5** | 5 | 5 | 0 |

Each page uses **5 different products** across Moon Rocks, infused pre-rolls, blunts, mini blunts, and mini pre-rolls. The fifth figure on each page is attached to the relevant shelf/formats section. California's fifth lazy-loaded figure was separately scrolled into view and verified at a rendered natural size of **480×600** from its **1080×1350** source, with **0** console or page errors.

## Image budget and source correction

The original `/public` inventory contained **105 WebP files**: **104** content images plus **1** shared crest. All **104** pre-existing content files were already referenced in `assets.ts`, leaving a budget of **0** unused content images.

The prompt-named `Product Graphics` directory was readable, but its files were the same source set previously processed into the existing **104** content WebPs. Reusing them would have broken the explicit no-repeat rule. A read-only inventory of the adjacent client-owned `Product Menu Images` library found **102 PNGs**: **33** blunts, **14** mini blunts, **14** mini pre-rolls, **16** Moon Rocks, and **25** pre-rolls. It contained **0** exact duplicates, **99** portrait files, **3** square files, **0** landscape files, and **0** 16:9 files. Perceptual comparison against the existing site library found **0** matches. From that fresh library, **45** images were copied and converted to unique **1080×1350 WebPs**. No source file or source archive was modified.

Fresh-image payload size is **2,590,616 bytes** total; the largest new WebP is **77,984 bytes**.

## Product-link verification

All **45** added figures resolved through `productHrefForImage` to a matching strain product page on `presidentialmoonrocks.com`. There are **0** unlinked figures and therefore **0** unlinked reasons to enumerate. The **27** distinct destination URLs all returned HTTP 200. A live click on California's first figure remained in the same browser tab: page count stayed **1 → 1**, and the final URL was:

`https://presidentialmoonrocks.com/moon-rocks/presidential-line-daniel-larusso`

The existing hover treatment remained intact: the image opacity moves from **1.00** to **0.86**, and the focus/hover outline becomes teal `rgb(88, 195, 182)`.

## Rendered linked figure from `/states/california`

Production-rendered outer HTML, including the href, unique alt, and explicit 1080×1350 dimensions:

```html
<figure class="content-figure"><div class="content-figure__pinstripe"><a class="content-figure__link" href="https://presidentialmoonrocks.com/moon-rocks/presidential-line-daniel-larusso"><img alt="Presidential Daniel Larusso blunt vertical menu label artwork" loading="lazy" width="1080" height="1350" decoding="async" data-nimg="1" class="content-figure__image" style="color:transparent" sizes="(max-width: 767px) 92vw, (max-width: 1199px) 42vw, 480px" srcset="/_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=384&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 384w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=640&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 640w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=750&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 750w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=828&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 828w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=1080&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 1080w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=1200&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 1200w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=1920&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 1920w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=2048&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 2048w, /_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=3840&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M 3840w" src="/_next/image?url=%2Fimages%2Fpresidential-daniel-larusso-blunt-menu-label.webp&amp;w=3840&amp;q=75&amp;dpl=dpl_H1vEBu4a2LNxtmWtRbW1PUzVWQ4M"></a></div><figcaption></figcaption></figure>
```

## Word and structure preservation

Rendered `<main>` word count remained exactly **32,641 → 32,641** across the sitemap. The normalized word-stream SHA-256 stayed `5ec106cf600fa00f6f200c5e0ae8ea7f002c3f363ac9f8b3b728504993f2a4d3`. `src/content/states.ts` has **0 changed lines**. Empty figure captions deliberately add **0 visible words**. Existing headings, ids, order, links, CTA behavior, pillar content, and all **30** pages outside the States silo remain unchanged.

## Production page-transfer measurements

Cold Chromium measurements include the complete document and all five lazy images after scrolling through each page.

| Page | Encoded bytes | MB | All 5 images complete |
|---|---:|---:|---:|
| `/states` | 651,240 | **0.621** | 5 / 5 |
| `/states/california` | 620,163 | **0.591** | 5 / 5 |
| `/states/oklahoma` | 618,776 | **0.590** | 5 / 5 |
| `/states/new-york` | 619,899 | **0.591** | 5 / 5 |
| `/states/nevada` | 623,474 | **0.595** | 5 / 5 |
| `/states/michigan` | 616,183 | **0.588** | 5 / 5 |
| `/states/arizona` | 624,984 | **0.596** | 5 / 5 |
| `/states/florida` | 616,973 | **0.588** | 5 / 5 |
| `/states/washington` | 616,857 | **0.588** | 5 / 5 |

Largest result: **0.621 MB**, which is **1.379 MB below** the 2 MB ceiling.

## Verification method and deployment

- Source audit: **150** public WebPs, **149** assigned content sources, **0** missing files, **0** duplicate assigned sources, **0** duplicate file hashes, **0** dimension defects, **0** non-WebPs, **0** 16:9 images, **0** duplicate content alts.
- Production crawl: **39 / 39** sitemap pages returned 200; **9 / 9** States pages rendered five content figures; **45 / 45** added product links were followed and same-tab.
- Responsive visual checks: **1440×1000** and **375×812**. At 375px, the image follows its section copy in normal document order.
- Vercel deployment state: **Ready** on the first build attempt. Production alias: <https://presidentialthc.net>.
- Local build, lint, typecheck, QA-suite, and gate-script runs: **0**, per the prompt.
- Browser-plugin availability: **0**. The required live verification used the documented Playwright fallback.

## Rollback

Exact PowerShell rollback command for the shipped implementation:

```powershell
git revert --no-edit f283a878dd48597cd92ad73b5de7f13105f96345; if ($LASTEXITCODE -eq 0) { git push origin main }
```
