# 6125-SPUD — Phase 2 Pillar Expansion and States Silo Report

Date: 2026-08-05

Repository: `J:\presidential-thc-net`

Production: <https://presidentialthc.net>

Initial content commit: `0dd9b60a8e13a2ff394274261f950fc38796336e`

Final implementation commit: `a91d2b05729e19226324099d16a46f32465c7839`

Production deployment: `https://presidential-thc-k14d4o62d-paulie-pauliewoods-projects.vercel.app`

Vercel state: Ready, aliased to `https://presidentialthc.net`

Remote build attempts: 2

Failed remote build attempts: 0

## Result

Phase 2 is live. The pillar now has the five supplied sections in the mandated 12-section order. The States silo is live at `/states` plus eight state articles. All supplied body copy is verbatim, all 39 sitemap pages return 200, the reciprocal linking graph is present, and the six-item mobile navigation renders on one row at 375px.

The only repair after the first green deployment was a mobile navigation rule in the already-touched `globals.css`. The first live audit found that the six intact labels occupied two nav rows at 375px. The repair reduced mobile-only nav spacing and type size; the second audit measured one nav row, zero wrapped labels, and zero horizontal overflow.

## Required source preflight

1. Exact source files found: 2 of 2.
2. `PILLAR-EXPANSION-COPY.md` headings beginning `# SECTION `: 5.
3. `STATES-SILO-COPY-V3.md` lines beginning `### Section — `: 53.
4. States page headings: 9 total — 1 hub plus 8 backticked state paths.
5. Parsed States pages: 9.
6. Parsed States sections: 53 total — 5 hub plus 48 article sections.
7. Parsed sections without paragraphs: 0.
8. Supplied pillar strings missing after implementation: 0.
9. Supplied States content mismatches after implementation: 0.
10. Skip-zone source occurrences admitted into page content: 0.

## Scope and files

1. Implementation files touched: 8, at the scope ceiling.
2. Required report artifacts added: 1.
3. Total repo paths when the mandated report is counted: 9.
4. Unrelated files staged or committed: 0.
5. Pre-existing untracked `docs/6123-FABLE-PHASE-2-ARCHITECTURE.md` files altered or committed: 0.

Implementation files:

1. `src/app/globals.css`
2. `src/components/site-footer.tsx`
3. `src/content/assets.ts`
4. `src/content/index.ts`
5. `src/content/pillar.ts`
6. `src/content/states.ts`
7. `src/content/types.ts`
8. `src/lib/site.ts`

The prompt names those eight implementation surfaces and separately mandates this report. Therefore, the numerical ceiling can be satisfied only for implementation files; counting the required report produces nine repo paths. No optional implementation file was touched.

## Baseline and production totals

1. Baseline live pages: 30.
2. Production live pages: 39.
3. Net page increase: 9.
4. Pages returning 200: 39 of 39.
5. Non-200 sitemap pages: 0.
6. Sitemap HTTP status: 200.
7. Baseline sitemap URLs: 30.
8. Production sitemap URLs: 39.
9. Baseline total main words: 26,543.
10. Production total main words: 32,641.
11. Net main-word increase: 6,098.
12. Brief estimate: approximately 33,700.
13. Actual variance from that estimate: -1,059 words.
14. Baseline rendered images: 134.
15. Production rendered images: 143.
16. Net rendered-image increase: 9 shared header crests on the nine new pages.
17. Browser console/page errors across the production crawl: 0.
18. Live skip-zone text occurrences: 0.

The total word count is lower than the estimate because the supplied files contain fewer words than their metadata/notes predict. The exact supplied sentences were retained; no padding was introduced because the prompt explicitly forbids it.

## Pillar verification

1. Pillar section count before: 7.
2. Pillar section count after: 12.
3. Pillar body-copy words before: 1,620.
4. Pillar body-copy words after: 2,905.
5. Pillar body-copy increase: 1,285.
6. Brief body-copy expectation after: approximately 2,913.
7. Actual variance from that expectation: -8 words.
8. Pillar rendered-main words before: 1,920.
9. Pillar rendered-main words after: 3,282.
10. Pillar rendered-main increase: 1,362.
11. Pillar CONTENTS entries: 12.
12. Pillar related links pointing to state articles: 8.
13. Missing supplied pillar strings: 0.
14. `reference-map` position: 12 of 12.

Final section order:

1. `what-presidential-thc-means`
2. `three-layer-construction`
3. `presidential-infusion-system`
4. `extract-contexts`
5. `potency-and-total-thc`
6. `how-to-read-a-label`
7. `the-three-series`
8. `formats`
9. `terpene-story`
10. `where-it-is-sold`
11. `how-to-know-it-is-authentic`
12. `reference-map`

Desktop CONTENTS layout at 1440px:

1. Source declaration: `grid-template-rows: repeat(6, auto)`.
2. Browser-computed row tracks: `102.375px 102.375px 102.375px 164.75px 133.562px 133.562px`.
3. Computed row-track count: 6.
4. Browser-computed columns: `336px 336px`.
5. Rendered columns: 2.
6. Rendered rows: 6.
7. Third column present: 0.

Browsers resolve `repeat(6, auto)` to used pixel track sizes in `getComputedStyle`; the six returned values prove the exact source rule is active.

## States page counts and words

Word counting uses the same Unicode token pattern before and after. `Main words` is the full `<main>` rendering used for the site baseline; `body-copy words` is the exact supplied paragraph/table/list copy.

| No. | Page | HTTP | Sections | Main words | Body-copy words | Content images |
|---:|---|---:|---:|---:|---:|---:|
| 1 | `/states` | 200 | 5 | 499 | 352 | 0 |
| 2 | `/states/california` | 200 | 6 | 634 | 542 | 0 |
| 3 | `/states/oklahoma` | 200 | 6 | 557 | 465 | 0 |
| 4 | `/states/new-york` | 200 | 6 | 522 | 420 | 0 |
| 5 | `/states/nevada` | 200 | 6 | 542 | 451 | 0 |
| 6 | `/states/michigan` | 200 | 6 | 504 | 409 | 0 |
| 7 | `/states/arizona` | 200 | 6 | 484 | 393 | 0 |
| 8 | `/states/florida` | 200 | 6 | 514 | 427 | 0 |
| 9 | `/states/washington` | 200 | 6 | 480 | 391 | 0 |

1. Hub pages with exactly 5 sections: 1 of 1.
2. State articles with exactly 6 sections: 8 of 8.
3. Total States sections: 53.
4. State article rendered-main range: 480–634 words.
5. State article body-copy range: 391–542 words.
6. Hub rendered-main words: 499.
7. Hub body-copy words: 352.
8. Pages padded to hit metadata targets: 0.
9. Supplied sentences altered to hit metadata targets: 0.

California's rendered-main count is 634, slightly above the approximate 450–600 check; its supplied body copy is 542. Several shorter supplied articles have body-copy counts below 450, while their full main render lands in or near the range. The source was treated as the hard truth because the prompt says word counts are truncation checks and forbids padding.

## Link graph verification

1. State articles whose first `relatedLinks` entry renders as `href="/"`, text `Presidential THC`: 8 of 8.
2. State articles linking to `/states`: 8 of 8.
3. Sideways state links per state article: 2 on all 8.
4. Total sideways state links: 16.
5. Cross-silo links from state articles: 0.
6. Hub child links to state pages: 8.
7. Hub related links to the pillar: 1.
8. Pillar related links pointing down to state articles: 8.
9. External locator links: 8.
10. External links matching `https://presidentialmoonrocks.com/find-us/{slug}`: 8.
11. External links containing `?zip=`: 0.
12. External links carrying `nofollow`: 0.
13. External links carrying `noopener noreferrer`: 8.
14. State related-link order violations: 0.
15. Locator path/label violations: 0.

Rendered pillar anchor from Oklahoma:

```html
<a class="editorial-link" href="/"><span>Presidential THC</span></a>
```

## Image verification

1. Non-crest packaging WebP assets in the existing library: 104.
2. Packaging assets already assigned before Phase 2: 104.
3. Unique assigned packaging assets: 104.
4. Unused packaging assets available before assignment: 0.
5. Images placed in the nine new `pageImages` entries: 0.
6. Unused packaging assets remaining: 0.
7. Duplicate editorial image sources across pages: 0.
8. Editorial images missing width or height: 0.
9. All rendered images missing width or height: 0 of 143.
10. Duplicate editorial alt strings: 0.
11. Existing shared header crest occurrences: 39.
12. Existing shared header crest alt value occurrences (`Presidential crest`): 39.

The prompt says to use fewer images rather than repeat an image when unused assets run short. The source audit found zero unused packaging images, so each of the nine required `pageImages` keys was registered with an empty array. The shared header crest is intentional site chrome, not a content-image assignment; it is disclosed separately and excluded from the editorial reuse/alt checks.

## Header and footer verification

1. Header navigation items: 6.
2. Header nav rows at 375px: 1.
3. Nav item labels wrapping at 375px: 0.
4. Document horizontal overflow at 375px: 0.
5. Document scroll width at 375px: 375px.
6. Viewport width: 375px.
7. `/states` active-nav label: `States`.
8. `/states` links in the footer: 1.

## Existing 30-page comparison

The pillar is necessarily changed by Part A. The other 29 original pages have identical `<main>` word counts before and after. This is the only coherent reading of the prompt's simultaneous requirements to change the pillar and keep the existing pages unchanged.

| No. | Existing page | Before | After | Delta |
|---:|---|---:|---:|---:|
| 1 | `/` | 1,920 | 3,282 | +1,362 |
| 2 | `/science` | 542 | 542 | 0 |
| 3 | `/science/distillate` | 864 | 864 | 0 |
| 4 | `/science/live-resin` | 849 | 849 | 0 |
| 5 | `/science/live-rosin` | 824 | 824 | 0 |
| 6 | `/science/liquid-diamonds` | 848 | 848 | 0 |
| 7 | `/science/thca-vs-thc` | 898 | 898 | 0 |
| 8 | `/science/decarboxylation` | 848 | 848 | 0 |
| 9 | `/science/reading-a-lab-report` | 900 | 900 | 0 |
| 10 | `/science/terpenes` | 919 | 919 | 0 |
| 11 | `/science/cannabinoids` | 887 | 887 | 0 |
| 12 | `/infusion` | 742 | 742 | 0 |
| 13 | `/infusion/how-infusion-works` | 954 | 954 | 0 |
| 14 | `/infusion/surface-vs-saturation` | 990 | 990 | 0 |
| 15 | `/infusion/kief-and-trichomes` | 979 | 979 | 0 |
| 16 | `/infusion/why-infused-burns-differently` | 991 | 991 | 0 |
| 17 | `/infusion/potency-by-format` | 988 | 988 | 0 |
| 18 | `/formats` | 631 | 631 | 0 |
| 19 | `/formats/blunts` | 902 | 902 | 0 |
| 20 | `/formats/mini-blunts` | 888 | 888 | 0 |
| 21 | `/formats/moon-rocks` | 902 | 902 | 0 |
| 22 | `/formats/infused-pre-rolls` | 885 | 885 | 0 |
| 23 | `/formats/vape-cartridges` | 925 | 925 | 0 |
| 24 | `/guides` | 708 | 708 | 0 |
| 25 | `/guides/how-to-smoke-moon-rocks` | 859 | 859 | 0 |
| 26 | `/guides/how-to-store-infused-cannabis` | 857 | 857 | 0 |
| 27 | `/guides/temperature-guide` | 919 | 919 | 0 |
| 28 | `/guides/what-to-look-for` | 829 | 829 | 0 |
| 29 | `/guides/beginners-guide` | 840 | 840 | 0 |
| 30 | `/about` | 455 | 455 | 0 |

1. Original non-pillar pages compared: 29.
2. Original non-pillar pages with identical word counts: 29.
3. Original non-pillar pages with changed word counts: 0.
4. Original pillar pages intentionally changed: 1.

## Required rendered quotations

### Pillar CONTENTS block

```html
<nav class="table-of-contents table-of-contents--rows-6" aria-labelledby="contents-heading"><p class="table-of-contents__label" id="contents-heading">CONTENTS</p><ol><li><a href="#what-presidential-thc-means">What Presidential THC means</a></li><li><a href="#three-layer-construction">The three-layer construction</a></li><li><a href="#presidential-infusion-system">The Presidential Infusion System</a></li><li><a href="#extract-contexts">Four extract contexts: distillate, live resin, live rosin, and liquid diamonds</a></li><li><a href="#potency-and-total-thc">Potency: read Total THC, not one dramatic number</a></li><li class="table-of-contents__column-end"><a href="#how-to-read-a-label">How to read a label</a></li><li><a href="#the-three-series">The three series</a></li><li><a href="#formats">One infusion idea, four Presidential formats</a></li><li><a href="#terpene-story">The terpene story is a preservation story</a></li><li><a href="#where-it-is-sold">Where it is sold</a></li><li><a href="#how-to-know-it-is-authentic">How to know it is authentic</a></li><li><a href="#reference-map">Explore the complete Presidential THC reference</a></li></ol></nav>
```

### Oklahoma LinkDirectory

```html
<aside class="link-directory" aria-label="Continue reading"><section><p class="eyebrow">Read next</p><div class="link-directory__list link-directory__list--compact"><a class="editorial-link" href="/"><span>Presidential THC</span></a><a class="editorial-link" href="/states"><span>All eight states</span></a><a class="editorial-link" href="/states/new-york"><span>New York</span></a><a class="editorial-link" href="/states/michigan"><span>Michigan</span></a></div></section><a class="editorial-link contextual-reference" href="https://presidentialmoonrocks.com/find-us/ok" rel="noopener noreferrer"><span>Find licensed retailers in Oklahoma</span></a></aside>
```

### California H1 and first 100 body characters

H1:

```text
Presidential THC in California
```

First 100 characters (the 100th character is the trailing space after `with`):

```json
"California runs an adult-use programme. Anyone twenty-one or older buys at a licensed retailer with "
```

## Prompt and source conflicts resolved

1. Architecture pillar target: approximately 3,200–3,800 body words; prompt target: `wordTarget: [2800, 3200]`. The prompt won.
2. Architecture state article target: `[800, 1000]`; prompt target: `[450, 600]`. The prompt won.
3. States source hub metadata: `[500, 600]`; prompt hub target: `[400, 550]`. The prompt won.
4. Pillar source build note target: `[3200, 3800]`; prompt target: `[2800, 3200]`. The prompt won.
5. Prompt says no existing 30 pages change while Part A explicitly changes the existing pillar. The mandated pillar changed; the other 29 original pages remained word-for-word stable by rendered word count.
6. Prompt scope ceiling: 8 files; prompt also explicitly requires eight implementation files plus this report. Eight implementation files were used, and the required report is disclosed as the ninth repo artifact.

## Verification method

1. Vercel production builds run: 2.
2. Successful Vercel production builds: 2.
3. Failed Vercel builds: 0.
4. Local builds run: 0.
5. Local lint runs: 0.
6. Local typecheck runs: 0.
7. Added test suites/gate scripts: 0.
8. Production pages rendered in Chromium at 1440px: 39.
9. Production mobile viewport width: 375px.
10. Production screenshots captured: 3.
11. Source-level invariant failures: 0.
12. Production console/page errors: 0.

Screenshots:

1. `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6125-after-pillar-desktop.png`
2. `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6125-after-states-desktop.png`
3. `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6125-after-mobile-header.png`

## Rollback

Exact PowerShell rollback command for the two implementation commits:

```powershell
git revert --no-edit a91d2b05729e19226324099d16a46f32465c7839 0dd9b60a8e13a2ff394274261f950fc38796336e; if ($LASTEXITCODE -eq 0) { git push origin main }
```

This reverts the mobile nav repair first, then the Phase 2 content implementation, and leaves this evidence report in history.
