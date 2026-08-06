# 6129-SPUD Optical Frame Report

## Ship status

1. Task files touched: **4** (scope ceiling: 4).
2. Implementation commit SHA: `6f32ecfe009df703c448524c9bd8775745db6c3a`.
3. Supporting implementation commits: **3** — `756f0f09dd61ca8e25ef7c0b676176e72e06c75d`, `938eff183cb6d5ab067bc7c507d50d53f0902320`, and `6f32ecfe009df703c448524c9bd8775745db6c3a`.
4. Git branch pushed: **1** — `main` to `origin/main`.
5. Vercel deployment ID: `dpl_FCsrgLZ3AdztACp7BrS63oSaFcLw`.
6. Vercel production status: **Ready (1/1)**.
7. Production alias audited: `https://presidentialthc.net`.
8. Production deployment URL: `https://presidential-thc-g2561b5mm-paulie-pauliewoods-projects.vercel.app`.

## Final live verification

| # | Verification | 1440px | 375px | Total / result |
|---:|---|---:|---:|---:|
| 1 | Production pages audited | 39 | 39 | 39 unique |
| 2 | Production pages returning HTTP 200 | 39 | 39 | 39 unique |
| 3 | Total content figures | 149 | 149 | 149 unique |
| 4 | Figures carrying explicit optical bounds | 149 | 149 | 149 |
| 5 | Figures falling back to unverified full-canvas bounds | 0 | 0 | 0 |
| 6 | Figure captures visually inspected | 149 | 149 | 298 |
| 7 | Figures with unequal four-side optical gaps | 0 | 0 | 0 |
| 8 | Largest measured four-gap difference | 0.0277px | 0.0288px | subpixel rounding only |
| 9 | Packages touching or crossing the frame | 0 | 0 | 0 |
| 10 | Packages protruding beyond the frame | 0 | 0 | 0 |
| 11 | Frames following baked empty canvas instead of visible artwork | 0 | 0 | 0 |
| 12 | Ornaments touching visible artwork | 0 | 0 | 0 |
| 13 | Distorted ornaments | 0 | 0 | 0 |
| 14 | Off-centre ornaments | 0 | 0 | 0 |
| 15 | Ornaments exceeding 40% of optical-frame width | 0 | 0 | 0 |
| 16 | Frame rectangles using `preserveAspectRatio="none"` | 149/149 | 149/149 | 298/298 |
| 17 | Computed frame stroke width | 1.5px | 1.5px | 1 value |
| 18 | CSS backing panels remaining | 0 | 0 | 0 |
| 19 | Horizontally viewport-clipped frames | 0 | 0 | 0 |
| 20 | Browser console errors | 0 | 0 | 0 |
| 21 | Framework error overlays | 0 | 0 | 0 |
| 22 | Caption-to-frame/ornament collisions | 0 | 0 | 0 |
| 23 | Minimum caption-to-ornament clearance | 4.00px | 4.88px | positive at both widths |
| 24 | Final visual exceptions | 0 | 0 | 0 |

1. Image source files changed: **0**.
2. Images whose `src`, declared width, declared height, alt text, or href changed: **0**.
3. Rendered image X placements changed: **0**.
4. Rendered image Y placements changed: **0**.
5. Rendered image widths changed: **0**.
6. Rendered image heights changed: **0**.
7. Largest rendered image-rectangle delta: **0px**.
8. Item-text or page-copy strings changed: **0**.
9. Baseline/production figure-signature hash matches: **1/1** — `198235cc7d42723a3a0e1b6f9efb5c086032187372295b7f1b5b54cd8d2d10da`.
10. Baseline/production page-copy hash matches: **1/1** — `9063d2b3766f55e6373a4e324563e61b5d96e21017467b774fa1624cf1f7f76e`.
11. Genuine full-canvas coherent artworks explicitly recorded as `0,0,1,1`: **104**.
12. Baked-margin sources with individually curated inner optical bounds: **45**.
13. Unmapped rendered figures: **0**.
14. Local lint runs: **0**.
15. Local typecheck runs: **0**.
16. Local build runs: **0**.
17. Remote Vercel production builds: **1 final Ready deployment**.

## Peach Mango control

1. Control route: `/states/new-york`.
2. Control source: `/images/presidential-peach-mango-moon-rocks-menu-label.webp`.
3. Source-canvas dimensions: **1080 × 1350px**.
4. Reviewed visible-package pixel bounds: left **95px**, top **84px**, right **980px**, bottom **1251px**.
5. Normalized bounds: left **0.087963**, top **0.062222**, right **0.907407**, bottom **0.926667**.
6. Canonical uniform optical gap ratio: **1/18 = 0.0555556** of the rendered source width.
7. 1440px final four gaps (left/top/right/bottom): **26.83 / 26.83 / 26.83 / 26.84px**.
8. 1440px four-gap spread: **0.01px** after display rounding.
9. 375px final four gaps (left/top/right/bottom): **16.02 / 16.01 / 16.01 / 16.00px**.
10. 375px four-gap spread: **0.02px** after display rounding.
11. Control result: **1/1 preserved** — the frame follows the visible package with balanced black breathing room.

## Supplied examples: before and after

Negative before-gap values mean the old frame crossed inside the visible package.

| # | Supplied example | Normalized optical bounds L/T/R/B | Before at 1440px L/T/R/B | After at 1440px L/T/R/B | After at 375px L/T/R/B | Final exceptions |
|---:|---|---|---|---|---|---:|
| 1 | Peach Mango control | 0.087963 / 0.062222 / 0.907407 / 0.926667 | 26.47 / 21.55 / 28.71 / 28.26px | 26.83 / 26.83 / 26.83 / 26.84px | 16.02 / 16.01 / 16.01 / 16.00px | 0 |
| 2 | Garlic Cookies infused pre-roll | 0.296296 / 0.020000 / 0.703704 / 0.984444 | 127.06 / -3.93 / 127.06 / -6.61px | 26.84 / 26.82 / 26.84 / 26.81px | 16.00 / 16.00 / 16.00 / 16.00px | 0 |
| 3 | Pink Cookies mini blunt | 0.213889 / 0.010370 / 0.787963 / 0.989630 | 87.27 / -9.74 / 86.37 / -9.74px | 26.83 / 26.82 / 26.83 / 26.82px | 16.00 / 15.99 / 16.01 / 15.99px | 0 |
| 4 | Watermelon mini pre-roll | 0.226852 / 0.042222 / 0.775000 / 0.940741 | 93.53 / 9.48 / 92.63 / 19.76px | 26.82 / 26.81 / 26.84 / 26.83px | 16.01 / 16.01 / 16.00 / 16.00px | 0 |
| 5 | Laura Charles blunt | 0.313889 / 0.020741 / 0.684259 / 0.986667 | 135.55 / -3.48 / 136.44 / -7.95px | 26.83 / 26.81 / 26.83 / 26.81px | 16.01 / 15.99 / 16.00 / 16.00px | 0 |

## Visual inspection notes

1. Tall example — Garlic Cookies infused pre-roll: the frame now hugs the actual tall package, with equal air at the top, bottom, left, and right; the old landscape-sized side voids are gone.
2. Narrow example — Laura Charles blunt: the narrow visible label receives the same **~26.8px desktop / ~16px mobile** four-side margin, so neither horizontal rule crosses the package and neither side can “fit a Mack truck.”
3. Square example — Crescendo blunt promotional artwork: the complete coherent square artwork is treated as the visible boundary, and the gold frame holds one uniform perimeter without shrinking or moving the image.
4. Wide/broad example — Whoa Si Whoa moon-rocks promotional artwork: the frame follows the full broad coherent artwork instead of imposing a portrait ratio; the rectangle stretches freely while both ornaments keep their **10:1** intrinsic ratio.
5. Ornament review: **298/298** top/bottom pairs remained centred, symmetric, undistorted, clear of artwork, and at or below **40%** frame width.
6. Responsive review: **149/149** figures preserved the same optical target at both viewport widths.
7. Manual contact-sheet review: **20/20** final production sheets inspected; **298/298** captures compared to the Peach Mango standard; **0** exceptions remained.

## Final production contact sheets

1. 1440px sheet 1: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-1.png`
2. 1440px sheet 2: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-2.png`
3. 1440px sheet 3: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-3.png`
4. 1440px sheet 4: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-4.png`
5. 1440px sheet 5: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-5.png`
6. 1440px sheet 6: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-6.png`
7. 1440px sheet 7: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-7.png`
8. 1440px sheet 8: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-8.png`
9. 1440px sheet 9: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-9.png`
10. 1440px sheet 10: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-contact-sheet-10.png`
11. 375px sheet 1: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-1.png`
12. 375px sheet 2: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-2.png`
13. 375px sheet 3: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-3.png`
14. 375px sheet 4: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-4.png`
15. 375px sheet 5: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-5.png`
16. 375px sheet 6: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-6.png`
17. 375px sheet 7: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-7.png`
18. 375px sheet 8: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-8.png`
19. 375px sheet 9: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-9.png`
20. 375px sheet 10: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-contact-sheet-10.png`

1. Desktop capture directory: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-desktop-captures`.
2. Mobile capture directory: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6129-production-mobile-captures`.
3. Desktop contact sheets: **10**.
4. Mobile contact sheets: **10**.
5. Total contact sheets: **20**.
6. Total final captures represented: **298**.

## Optical-bounds manifest — all 149 image sources

1. Manifest source count: **149**.
2. Coordinate system: normalized **0–1** left/top/right/bottom bounds.
3. Verified implicit/full-canvas fallbacks: **0**.
4. Explicit full-canvas entries: **104**, used only where the coherent artwork genuinely fills its source.
5. Explicit curated inner-bound entries: **45**, used for baked-black-margin menu labels.

| # | Image source | Left | Top | Right | Bottom |
|---:|---|---:|---:|---:|---:|
| 1 | `/images/presidential-crescendo-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 2 | `/images/presidential-gorilla-goo-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 3 | `/images/presidential-grape-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 4 | `/images/presidential-nino-brown-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 5 | `/images/presidential-cherry-gelato-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 6 | `/images/presidential-gorilla-goo-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 7 | `/images/presidential-daniel-larusso-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 8 | `/images/presidential-orange-push-pop-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 9 | `/images/presidential-peach-mango-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 10 | `/images/presidential-garlic-cookie-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 11 | `/images/presidential-peach-mango-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 12 | `/images/presidential-classic-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 13 | `/images/presidential-peach-mango-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 14 | `/images/presidential-galactic-gas-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 15 | `/images/presidential-pink-cookie-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 16 | `/images/presidential-ghost-haze-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 17 | `/images/presidential-pink-cookie-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 18 | `/images/presidential-skywalker-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 19 | `/images/presidential-pink-cookie-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 20 | `/images/presidential-laura-charles-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 21 | `/images/presidential-cap-junky-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 22 | `/images/presidential-cherry-gelato-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 23 | `/images/presidential-crescendo-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 24 | `/images/presidential-crescendo-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 25 | `/images/presidential-garlic-cookie-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 26 | `/images/presidential-classic-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 27 | `/images/presidential-gorilla-goo-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 28 | `/images/presidential-classic-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 29 | `/images/presidential-strawberry-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 30 | `/images/presidential-classic-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 31 | `/images/presidential-ghost-haze-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 32 | `/images/presidential-x-series-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 33 | `/images/presidential-grape-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 34 | `/images/presidential-skywalker-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 35 | `/images/presidential-watermelon-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 36 | `/images/presidential-skywalker-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 37 | `/images/presidential-gorilla-goo-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 38 | `/images/presidential-skywalker-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 39 | `/images/presidential-laura-charles-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 40 | `/images/presidential-strawberry-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 41 | `/images/presidential-strawberry-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 42 | `/images/presidential-grape-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 43 | `/images/presidential-skywalker-single-mini-blunt-alternate-packaging.webp` | 0 | 0 | 1 | 1 |
| 44 | `/images/presidential-nino-brown-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 45 | `/images/presidential-watermelon-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 46 | `/images/presidential-watermelon-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 47 | `/images/presidential-king-louis-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 48 | `/images/presidential-waui-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 49 | `/images/presidential-opp-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 50 | `/images/presidential-waui-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 51 | `/images/presidential-waui-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 52 | `/images/presidential-nyc-diesel-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 53 | `/images/presidential-waui-single-mini-blunt-alternate-packaging.webp` | 0 | 0 | 1 | 1 |
| 54 | `/images/presidential-peach-mango-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 55 | `/images/presidential-xj13-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 56 | `/images/presidential-whoa-si-whoa-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 57 | `/images/presidential-orange-push-pop-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 58 | `/images/presidential-xxx-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 59 | `/images/presidential-pineapple-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 60 | `/images/presidential-xxx-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 61 | `/images/presidential-xj13-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 62 | `/images/presidential-papaya-punch-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 63 | `/images/presidential-pink-cookie-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 64 | `/images/presidential-peach-mango-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 65 | `/images/presidential-classic-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 66 | `/images/presidential-pineapple-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 67 | `/images/presidential-skywalker-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 68 | `/images/presidential-pink-cookie-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 69 | `/images/presidential-strawberry-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 70 | `/images/presidential-classic-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 71 | `/images/presidential-tropical-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 72 | `/images/presidential-cherry-gelato-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 73 | `/images/presidential-daniel-larusso-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 74 | `/images/presidential-garlic-cookie-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 75 | `/images/presidential-blue-dream-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 76 | `/images/presidential-cherry-gelato-mini-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 77 | `/images/presidential-blue-raz-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 78 | `/images/presidential-apricotti-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 79 | `/images/presidential-blue-dream-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 80 | `/images/presidential-blue-raz-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 81 | `/images/presidential-cap-junky-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 82 | `/images/presidential-cherry-gelato-single-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 83 | `/images/presidential-cherry-mini-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 84 | `/images/presidential-rainbow-belts-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 85 | `/images/presidential-watermelon-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 86 | `/images/presidential-sfv-og-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 87 | `/images/presidential-ghost-haze-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 88 | `/images/presidential-gorilla-goo-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 89 | `/images/presidential-grape-moon-rocks-packaging.webp` | 0 | 0 | 1 | 1 |
| 90 | `/images/presidential-waui-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 91 | `/images/presidential-skywalker-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 92 | `/images/presidential-xj13-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 93 | `/images/presidential-strawberry-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 94 | `/images/presidential-xxx-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 95 | `/images/presidential-tropical-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 96 | `/images/presidential-xxx-blunt-alternate-packaging.webp` | 0 | 0 | 1 | 1 |
| 97 | `/images/presidential-watermelon-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 98 | `/images/presidential-galactic-gas-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 99 | `/images/presidential-waui-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 100 | `/images/presidential-king-louis-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 101 | `/images/presidential-xj13-infused-pre-roll-packaging.webp` | 0 | 0 | 1 | 1 |
| 102 | `/images/presidential-nyc-diesel-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 103 | `/images/presidential-papaya-punch-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 104 | `/images/presidential-rainbow-belts-blunt-packaging.webp` | 0 | 0 | 1 | 1 |
| 105 | `/images/presidential-cherry-gelato-moon-rocks-menu-label.webp` | 0.089815 | 0.065926 | 0.908333 | 0.92963 |
| 106 | `/images/presidential-blue-dream-infused-pre-roll-menu-label.webp` | 0.308333 | 0.034074 | 0.689815 | 0.965185 |
| 107 | `/images/presidential-cap-junky-blunt-menu-label.webp` | 0.317593 | 0.02 | 0.681481 | 0.964444 |
| 108 | `/images/presidential-gorilla-goo-mini-blunt-menu-label.webp` | 0.212963 | 0.008889 | 0.787037 | 0.988148 |
| 109 | `/images/presidential-pink-cookies-mini-pre-roll-menu-label.webp` | 0.227778 | 0.058519 | 0.775926 | 0.956296 |
| 110 | `/images/presidential-daniel-larusso-blunt-menu-label.webp` | 0.318519 | 0.036296 | 0.67963 | 0.974815 |
| 111 | `/images/presidential-grape-mini-blunt-menu-label.webp` | 0.212963 | 0.01037 | 0.787037 | 0.98963 |
| 112 | `/images/presidential-cherry-gelato-infused-pre-roll-menu-label.webp` | 0.308333 | 0.034074 | 0.689815 | 0.965185 |
| 113 | `/images/presidential-skywalker-mini-pre-roll-menu-label.webp` | 0.232407 | 0.048148 | 0.780556 | 0.945926 |
| 114 | `/images/presidential-gorilla-goo-moon-rocks-menu-label.webp` | 0.094444 | 0.06963 | 0.913889 | 0.933333 |
| 115 | `/images/presidential-grape-moon-rocks-menu-label.webp` | 0.090741 | 0.064444 | 0.910185 | 0.928889 |
| 116 | `/images/presidential-garlic-cookies-blunt-menu-label.webp` | 0.310185 | 0.00963 | 0.687963 | 0.98963 |
| 117 | `/images/presidential-peach-mango-mini-blunt-menu-label.webp` | 0.212963 | 0.01037 | 0.787037 | 0.98963 |
| 118 | `/images/presidential-strawberry-mini-pre-roll-menu-label.webp` | 0.225926 | 0.042963 | 0.774074 | 0.940741 |
| 119 | `/images/presidential-galactic-gas-infused-pre-roll-menu-label.webp` | 0.308333 | 0.043704 | 0.689815 | 0.975556 |
| 120 | `/images/presidential-peach-mango-moon-rocks-menu-label.webp` | 0.087963 | 0.062222 | 0.907407 | 0.926667 |
| 121 | `/images/presidential-garlic-cookies-infused-pre-roll-menu-label.webp` | 0.296296 | 0.02 | 0.703704 | 0.984444 |
| 122 | `/images/presidential-pink-cookies-mini-blunt-menu-label.webp` | 0.213889 | 0.01037 | 0.787963 | 0.98963 |
| 123 | `/images/presidential-watermelon-mini-pre-roll-menu-label.webp` | 0.226852 | 0.042222 | 0.775 | 0.940741 |
| 124 | `/images/presidential-laura-charles-blunt-menu-label.webp` | 0.313889 | 0.020741 | 0.684259 | 0.986667 |
| 125 | `/images/presidential-pink-cookies-moon-rocks-menu-label.webp` | 0.089815 | 0.067407 | 0.908333 | 0.931852 |
| 126 | `/images/presidential-ghost-train-haze-infused-pre-roll-menu-label.webp` | 0.300926 | 0.02 | 0.705556 | 0.977778 |
| 127 | `/images/presidential-nino-brown-blunt-menu-label.webp` | 0.317593 | 0.028148 | 0.680556 | 0.974074 |
| 128 | `/images/presidential-waui-mini-pre-roll-menu-label.webp` | 0.228704 | 0.045926 | 0.775926 | 0.944444 |
| 129 | `/images/presidential-skywalker-mini-blunt-menu-label.webp` | 0.224074 | 0.028148 | 0.775926 | 0.96963 |
| 130 | `/images/presidential-classic-moon-rocks-menu-label.webp` | 0.086111 | 0.064444 | 0.905556 | 0.928889 |
| 131 | `/images/presidential-gorilla-goo-infused-pre-roll-menu-label.webp` | 0.318519 | 0.060741 | 0.67963 | 0.938519 |
| 132 | `/images/presidential-orange-push-pop-blunt-menu-label.webp` | 0.315741 | 0.022963 | 0.682407 | 0.976296 |
| 133 | `/images/presidential-watermelon-mini-blunt-menu-label.webp` | 0.211111 | 0.01037 | 0.785185 | 0.988889 |
| 134 | `/images/presidential-cap-junky-mini-pre-roll-menu-label.webp` | 0.219444 | 0.052593 | 0.766667 | 0.95037 |
| 135 | `/images/presidential-rainbow-belts-blunt-menu-label.webp` | 0.32037 | 0.035556 | 0.677778 | 0.963704 |
| 136 | `/images/presidential-king-louis-infused-pre-roll-menu-label.webp` | 0.308333 | 0.034074 | 0.689815 | 0.965185 |
| 137 | `/images/presidential-xj13-mini-blunt-menu-label.webp` | 0.221296 | 0.025926 | 0.777778 | 0.972593 |
| 138 | `/images/presidential-cherry-gelato-mini-pre-roll-menu-label.webp` | 0.223148 | 0.048889 | 0.77037 | 0.947407 |
| 139 | `/images/presidential-skywalker-moon-rocks-menu-label.webp` | 0.087963 | 0.061481 | 0.907407 | 0.926667 |
| 140 | `/images/presidential-strawberry-moon-rocks-menu-label.webp` | 0.090741 | 0.061481 | 0.910185 | 0.926667 |
| 141 | `/images/presidential-nyc-diesel-infused-pre-roll-menu-label.webp` | 0.308333 | 0.034074 | 0.689815 | 0.965185 |
| 142 | `/images/presidential-blue-raspberry-mini-blunt-menu-label.webp` | 0.225926 | 0.032593 | 0.775926 | 0.968889 |
| 143 | `/images/presidential-grape-mini-pre-roll-menu-label.webp` | 0.225926 | 0.051111 | 0.773148 | 0.948889 |
| 144 | `/images/presidential-sfv-og-blunt-menu-label.webp` | 0.318519 | 0.034074 | 0.67963 | 0.97037 |
| 145 | `/images/presidential-watermelon-moon-rocks-menu-label.webp` | 0.087037 | 0.06963 | 0.906481 | 0.934074 |
| 146 | `/images/presidential-papaya-punch-infused-pre-roll-menu-label.webp` | 0.308333 | 0.034074 | 0.689815 | 0.965185 |
| 147 | `/images/presidential-blue-raspberry-blunt-menu-label.webp` | 0.307407 | 0 | 0.691667 | 0.999259 |
| 148 | `/images/presidential-classic-mini-pre-roll-menu-label.webp` | 0.225 | 0.051111 | 0.773148 | 0.948148 |
| 149 | `/images/presidential-cherry-gelato-mini-blunt-menu-label.webp` | 0.208333 | 0.007407 | 0.783333 | 0.986667 |

## Files shipped

1. `src/content/optical-bounds.ts` — **149** explicit normalized source records and **1** canonical gap ratio.
2. `src/components/content-figure.tsx` — **1** optical-frame geometry consumer; image metadata and placement preserved.
3. `src/app/globals.css` — **1** responsive optical-frame implementation; **0** panel/fill/shadow/glow/animation additions.
4. `docs/6129-SPUD-OPTICAL-FRAME-REPORT.md` — this **1** evidence report.
5. Unrelated pre-existing work shipped: **0**.
6. One-off audit helpers committed to the repository: **0**.
7. One-off captures/contact sheets committed to the repository: **0**.

## Rollback

1. Exact PowerShell rollback command for the **3** implementation commits:

```powershell
git -C 'J:\presidential-thc-net' revert --no-edit 6f32ecfe009df703c448524c9bd8775745db6c3a; git -C 'J:\presidential-thc-net' revert --no-edit 938eff183cb6d5ab067bc7c507d50d53f0902320; git -C 'J:\presidential-thc-net' revert --no-edit 756f0f09dd61ca8e25ef7c0b676176e72e06c75d; git -C 'J:\presidential-thc-net' push origin main
```

2. Rollback scope: **3** implementation commits; the evidence report remains as historical documentation.
3. Final completion count: **6/6** — balanced framing, **298** captures inspected, **0** exceptions, committed, pushed, and Vercel Ready.
