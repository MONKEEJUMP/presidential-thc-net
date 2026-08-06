# 6127-SPUD — Gold ornamental image frame report

Status: **shipped, pushed, and production Ready**

Production: <https://presidentialthc.net>

Implementation commit: `9a09b9e9a36ad304c01e736338b39c5fa81350b7`

Production deployment: `dpl_9faffGEmwG24jERPMpjHfuUXZATf`

Deployment URL: <https://presidential-thc-obnjddfb5-paulie-pauliewoods-projects.vercel.app>

## Shipped result

The shared content-image frame on all **39** pages is now a responsive inline SVG. A **1.5px** non-scaling champagne-gold rule sits **16px** inside each image edge. Its plain left and right edges remain uninterrupted; at widths of 640px and above, the top and bottom rules break around a centered, mirrored ornamental cluster spanning **30.2%** of the frame width. Below 640px, both ornament groups are hidden and the top and bottom become uninterrupted rules.

The old teal border, diagonal hatch, supporting padding, and shadow are gone from every content figure. No image, copy, product link, placement, caption, or non-image pinstripe changed.

## Required numeric verification

| Verification | Before | After | Change |
|---|---:|---:|---:|
| Files touched, including this required report | 0 | **3** | +3 |
| Implementation source files touched | 0 | **2** | +2 |
| Content figures carrying the gold SVG frame | 0 | **149** | +149 |
| Content figures carrying the old pinstripe class | 149 | **0** | -149 |
| Content figures carrying a diagonal hatch | 149 | **0** | -149 |
| Teal tokens appearing inside frame SVG markup | 0 | **0** | 0 |
| Images whose `src`, width, height, alt, or href changed | 0 | **0** | 0 |
| Visible ornament groups per frame at 1440px | 0 | **2** | +2 |
| Visible ornament groups per frame at 375px | 0 | **0** | 0 |
| Visible ornament groups across all 149 figures below 640px | 0 | **0** | 0 |
| Full mobile top/bottom rule paths per frame | 0 | **1** | +1 |
| Computed split-rule stroke width at 1440px | — | **1.5px** | — |
| Computed mobile-rule stroke width at 375px | — | **1.5px** | — |
| Optical stroke-width difference | — | **0px** | — |
| Paths reporting `vector-effect: non-scaling-stroke` | 0 | **3 per frame** | +3 |
| Ornament lozenges reporting `vector-effect: non-scaling-stroke` | 0 | **8 per frame** | +8 |
| Frame inset from image edge at 1440px | — | **16px** | — |
| Frame inset from image edge at 375px | — | **16px** | — |
| Frame cluster width | — | **30.2%** | — |
| Frame container padding | 8px | **0px** | -8px |
| Frame container border widths | 1px | **0px / 0px / 0px / 0px** | -1px |
| Frame container background images | 149 | **0** | -149 |
| Frame container shadows | 149 | **0** | -149 |
| Sitemap pages returning HTTP 200 | 39 / 39 | **39 / 39** | 0 |
| Total rendered `<main>` words | 32,641 | **32,641** | 0 |
| Framework error overlays | 0 | **0** | 0 |
| Production console/page errors | 0 | **0** | 0 |
| Production build attempts | — | **1** | — |
| Failed production build attempts | — | **0** | — |
| Local build, lint, typecheck, QA-suite, or gate-script runs | — | **0** | — |

The three tracked task files are:

1. `src/components/content-figure.tsx`
2. `src/app/globals.css`
3. `docs/6127-SPUD-GOLD-FRAME-REPORT.md`

The pre-existing untracked `docs/6123-FABLE-PHASE-2-ARCHITECTURE.md` was preserved untouched and was not shipped.

## Image and link invariants

The `assets.ts` Git object before and after is identical: `c40cf5d1764e808eed92ed4b0b65863b7de52913`.

The `product-links.ts` Git object before and after is identical: `78f29b0dfc7c294d2e67d3c20bb199e2385ef343`.

Changed image/link attribute lines inside the shared component: **0**. Changed content files: **0**. Therefore the number of images with a changed `src`, declared width, declared height, alt, or href is **0 / 149**. The normalized production image/link signature contains all **149** figures and hashes to `5c24e85a4d03d27c2df269ff9be6ea3be16408471d776820084b25ee9d4eb8ea`.

The existing linked-image hover behavior also remains: opacity is **1.00** at rest and **0.86** after hover. The frame SVG has `pointer-events: none`, so it does not change the image click target.

## Responsive behavior

At **1440×1000**, the representative California image measures **482.8125×603.515625px** and the overlaid frame measures **450.8125×571.515625px**, proving a **16px** inset on all sides. Both ornament groups are visible; the full mobile rule is hidden.

At **375×812**, the image measures **343×428.75px** and the frame measures **311×396.75px**, again proving a **16px** inset. Both ornament groups and the split-rule path are hidden. The full mobile top/bottom path is visible, so the rendered result is one plain rectangle with **0** ornament clusters.

The computed stroke is **1.5px** at both widths, and the relevant rules report `vector-effect: non-scaling-stroke`. The measured optical difference is **0px**.

## How the top edge reads at 1440px

The top edge begins as a fine pale-champagne rule at the left corner and moves through warm gold to dark antique gold at the right. At the exact center, the rule opens into a symmetrical **30.2%**-wide cluster: a solid central diamond, one long pointed spindle on each side, a solid diamond, a second pointed spindle, and two close-set solid diamonds before the straight rule resumes. Every shape sits directly on the rule line. The result reads as one restrained Art Deco ornament, not as a floating badge or a second border.

The bottom edge is a true SVG mirror of the top edge. The left and right rules remain plain and continuous.

## Full rendered SVG markup

This is the complete production-rendered SVG from the first linked figure on `/states/california`:

```html
<svg aria-hidden="true" class="content-figure__frame" focusable="false" preserveAspectRatio="none" viewBox="0 0 100 100"><defs><linearGradient id="content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="0"><stop offset="0%" stop-color="#F4E3A1"></stop><stop offset="50%" stop-color="#D4B96A"></stop><stop offset="100%" stop-color="#8F6B24"></stop></linearGradient></defs><g fill="none" stroke="url(#content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp)" stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" vector-effect="non-scaling-stroke"><path d="M 0.75 0.75 V 99.25 M 99.25 0.75 V 99.25" vector-effect="non-scaling-stroke"></path><path class="content-figure__split-rule" d="M 0.75 0.75 H 34.3 M 65.7 0.75 H 99.25 M 0.75 99.25 H 34.3 M 65.7 99.25 H 99.25" vector-effect="non-scaling-stroke"></path><path class="content-figure__mobile-rule" d="M 0.75 0.75 H 99.25 M 0.75 99.25 H 99.25" vector-effect="non-scaling-stroke"></path></g><g class="content-figure__ornament" data-frame-ornament="top"><g fill="url(#content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp)"><polygon points="50,0.15 50.6,0.75 50,1.35 49.4,0.75"></polygon><polygon points="43.15,0.3 43.75,0.75 43.15,1.2 42.55,0.75"></polygon><polygon points="56.85,0.3 57.45,0.75 56.85,1.2 56.25,0.75"></polygon><polygon points="36.95,0.4 37.4,0.75 36.95,1.1 36.5,0.75"></polygon><polygon points="35.35,0.4 35.8,0.75 35.35,1.1 34.9,0.75"></polygon><polygon points="63.05,0.4 63.5,0.75 63.05,1.1 62.6,0.75"></polygon><polygon points="64.65,0.4 65.1,0.75 64.65,1.1 64.2,0.75"></polygon></g><g fill="none" stroke="url(#content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp)" stroke-linejoin="miter" stroke-width="1.5" vector-effect="non-scaling-stroke"><polygon points="48.6,0.75 46.4,0.425 44.2,0.75 46.4,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="51.4,0.75 53.6,0.425 55.8,0.75 53.6,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="42.2,0.75 40.1,0.425 38,0.75 40.1,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="57.8,0.75 59.9,0.425 62,0.75 59.9,1.075" vector-effect="non-scaling-stroke"></polygon></g></g><g class="content-figure__ornament" data-frame-ornament="bottom" transform="translate(0 100) scale(1 -1)"><g fill="url(#content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp)"><polygon points="50,0.15 50.6,0.75 50,1.35 49.4,0.75"></polygon><polygon points="43.15,0.3 43.75,0.75 43.15,1.2 42.55,0.75"></polygon><polygon points="56.85,0.3 57.45,0.75 56.85,1.2 56.25,0.75"></polygon><polygon points="36.95,0.4 37.4,0.75 36.95,1.1 36.5,0.75"></polygon><polygon points="35.35,0.4 35.8,0.75 35.35,1.1 34.9,0.75"></polygon><polygon points="63.05,0.4 63.5,0.75 63.05,1.1 62.6,0.75"></polygon><polygon points="64.65,0.4 65.1,0.75 64.65,1.1 64.2,0.75"></polygon></g><g fill="none" stroke="url(#content-figure-gold--images-presidential-daniel-larusso-blunt-menu-label-webp)" stroke-linejoin="miter" stroke-width="1.5" vector-effect="non-scaling-stroke"><polygon points="48.6,0.75 46.4,0.425 44.2,0.75 46.4,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="51.4,0.75 53.6,0.425 55.8,0.75 53.6,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="42.2,0.75 40.1,0.425 38,0.75 40.1,1.075" vector-effect="non-scaling-stroke"></polygon><polygon points="57.8,0.75 59.9,0.425 62,0.75 59.9,1.075" vector-effect="non-scaling-stroke"></polygon></g></g></svg>
```

The SVG contains **1** `linearGradient`, **3** exact color stops, **2** mirrored ornament groups, **14** solid diamonds, **8** outlined lozenges, **3** rule paths, and **0** teal tokens.

## Reference-fidelity ledger

| Comparison point | Reference requirement | Production evidence | Result |
|---|---|---|---|
| Frame geometry | Plain verticals; ornament-interrupted top and bottom | Two plain vertical path segments and split horizontal path | Pass |
| Ornament anatomy | Center diamond → spindle → diamond → spindle → two diamonds | Exact mirrored polygon sequence in both groups | Pass |
| Proportion | Cluster roughly 30% of frame width | **30.2%** from x=34.9 to x=65.1 | Pass |
| Palette | Gold, not black or teal | `#F4E3A1 → #D4B96A → #8F6B24`; **0** teal SVGs | Pass |
| Image breathing room | Rule inset roughly 16px | **16px** measured at 1440 and 375 | Pass |
| Mobile simplification | Rule only below 640px | **0** visible ornament groups at 375; full rule visible | Pass |
| Optical line | 1.5px at every size | **1.5px** at 1440 and 375 with non-scaling stroke | Pass |
| Prohibited effects | No fill, background, shadow, glow, or animation | Transparent SVG; background/shadow counts **0** | Pass |

The supplied reference's black stroke, white empty interior, and smaller cluster were intentionally not carried over, exactly as directed. There are **0** unintended visual deviations and **0** remaining fidelity repairs.

## Production QA

The flow under test was: `/states/california` loads → the first product figure enters the viewport → the new frame renders at desktop and mobile → linked-image hover remains functional.

| Check | Result |
|---|---:|
| Page identity and intended URL | **Pass / 1** |
| Meaningful article DOM present | **Pass / 1** |
| Framework overlay absent | **Pass / 1** |
| Console and page errors | **0** |
| Desktop screenshot captured | **1** |
| Mobile screenshot captured | **1** |
| Full section screenshot captured | **1** |
| Hover interaction exercised | **1** |
| Hover state reached expected opacity | **0.86** |

Browser plugin availability was **0**, so the documented Playwright Chromium fallback was used. Viewports were **1440×1000** and **375×812**. The accepted reference and the final browser screenshots were inspected together with `view_image` before sign-off.

## Deployment and commands

The Git webhook did not start a deployment after repeated checks, so the linked-project Vercel CLI performed the production deployment with commit metadata attached. Vercel's remote build compiled successfully, ran its remote TypeScript stage, generated **44 / 44** static outputs, and reached Ready on attempt **1**. No local build, lint, typecheck, test suite, QA suite, or gate script was run.

## Evidence

- Before desktop: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6127-before-frame-desktop.png`
- Before mobile: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6127-before-frame-mobile.png`
- After desktop: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6127-after-frame-desktop.png`
- After mobile: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6127-after-frame-mobile.png`
- After desktop section: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6127-after-frame-desktop-section.png`

## Rollback

Exact PowerShell rollback command:

```powershell
git revert --no-edit 9a09b9e9a36ad304c01e736338b39c5fa81350b7; if ($LASTEXITCODE -eq 0) { git push origin main }
```
