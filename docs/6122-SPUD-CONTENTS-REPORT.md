# 6122 SPUD — Luxury Contents Index Report

Date: 2026-08-05
Repository: `J:\presidential-thc-net`
Stable live URL: <https://presidential-thc-net.vercel.app>
Production deployment: <https://presidential-thc-r9nk21rf0-paulie-pauliewoods-projects.vercel.app>
Vercel deployment ID: `dpl_B5xN7tt8Wc2uZieBpUiGcjhU4Kay`
Final code commit: `8ab1ff8c342b4f8500602b8d2d7da5cb9fda42f6`

## Required Numbers

1. Project files touched: **3**, exactly at the scope ceiling.
2. Pages carrying the contents block: **5**.
3. Occurrences of `ON THIS PAGE` anywhere in the rendered 30-page site: **0**.
4. Rendered `CONTENTS` labels: **5**.
5. Contents item text strings changed: **0 of 31**.
6. Contents item link targets changed: **0 of 31**.
7. Item-count changes across the five pages: **0**.
8. Desktop item-font violations across the five pages: **0**.
9. Desktop item-size violations across the five pages: **0**.
10. Desktop two-column violations across the five pages: **0**.
11. Container-border violations across the five pages: **0**.
12. Container-background violations across the five pages: **0**.
13. Desktop final-column-row rule violations across the five pages: **0**.
14. Contents-block position violations across the five pages: **0**.
15. Pages returning HTTP 200: **30 of 30**.
16. Framework overlays: **0**.
17. Relevant browser console warnings/errors: **0**.
18. Browser page errors: **0**.
19. Horizontal overflow at 375 px: **0 px**.

## Item Counts Before And After

| Page | Before | After | Change |
|---|---:|---:|---:|
| `/` | 7 | 7 | 0 |
| `/science` | 9 | 9 | 0 |
| `/infusion` | 5 | 5 | 0 |
| `/formats` | 5 | 5 | 0 |
| `/guides` | 5 | 5 | 0 |
| Total | 31 | 31 | 0 |

Item text fingerprint before and after:

`56a7501a69be4ecc77c74a3ae691f3925a9419a15262c9e39d0d334c577e05e7`

Item target fingerprint before and after:

`ce419958915812f600fd84a1db2b1759ae2c3f7c2f233bb0a8ab0ff4a1628183`

## Computed Typography And Layout

1. Item font family at 1440 px: `clashDisplay, "clashDisplay Fallback", Arial, sans-serif, Arial, sans-serif`.
2. Item font family at 375 px: `clashDisplay, "clashDisplay Fallback", Arial, sans-serif, Arial, sans-serif`.
3. Item font size at 1440 px: **24 px / 1.5 rem**.
4. Item font size at 375 px: **18 px / 1.125 rem**.
5. Item line-height at 1440 px: **31.2 px / 1.3**.
6. Item line-height at 375 px: **23.4 px / 1.3**.
7. Item colour: **rgb(242, 238, 226)** / site cream.
8. Columns rendered at 1440 px: **2**.
9. Columns rendered at 375 px: **1**.
10. Desktop column gutter: **64 px / 4 rem**.
11. Resting number-to-text gap: **40 px / 2.5 rem**.
12. Row padding: **20 px / 1.25 rem** above and below.
13. Block margin: **32 px / 2 rem** above and below.
14. Container border widths: **0 / 0 / 0 / 0 px**.
15. Container background colour: **transparent**.
16. Container background image: **none**.

## Label, Numbers, And Rules

1. Label font size: **12 px / 0.75 rem**.
2. Label letter spacing: **2.4 px / 0.2 em**.
3. Label colour: **rgb(88, 195, 182)** / `#58C3B6`.
4. Top rule height: **3 px**.
5. Bottom rule height: **3 px**.
6. Top and bottom gradient: **#F4E3A1 → #D4B96A → #8F6B24**.
7. Number font size: **14 px / 0.875 rem**.
8. Resting number colour: **rgba(88, 195, 182, 0.6)**.
9. Number figure setting: **tabular-nums**.
10. Row-rule height: **1 px**.
11. Resting row-rule opacity: **0.25**.
12. Rules under the final row of either desktop column: **0**.
13. Rules under the final mobile row: **0**.
14. Full-row anchor coverage failures: **0**.

## Rendered Pillar HTML

```html
<nav class="table-of-contents table-of-contents--rows-4" aria-labelledby="contents-heading"><p class="table-of-contents__label" id="contents-heading">CONTENTS</p><ol><li><a href="#three-layer-construction">The three-layer construction</a></li><li><a href="#presidential-infusion-system">The Presidential Infusion System</a></li><li><a href="#extract-contexts">Four extract contexts: distillate, live resin, live rosin, and liquid diamonds</a></li><li class="table-of-contents__column-end"><a href="#potency-and-total-thc">Potency: read Total THC, not one dramatic number</a></li><li><a href="#formats">One infusion idea, four Presidential formats</a></li><li><a href="#terpene-story">The terpene story is a preservation story</a></li><li><a href="#reference-map">Explore the complete Presidential THC reference</a></li></ol></nav>
```

The existing `nav → p → ol → li → a` structure, item order, labels, hrefs, and page position remain intact. The only structural metadata added is a deterministic row-count class on the nav and a column-end class on the relevant list item.

## Hover Description And Measurements

At rest, a row begins with a muted teal zero-padded folio such as `01`, followed by a fixed 40 px gap and cream Clash Display item text. A 1 px champagne gradient rule sits beneath non-final rows at 25% opacity.

When the full row is hovered, the folio brightens from 60% teal to full `#58C3B6`, the text shifts exactly **8 px** to the right as the gap moves from **40 px to 48 px**, and the row rule brightens from **0.25 to 0.60 opacity**. The transition is **200 ms ease**. Keyboard focus produces the same values. The entire row-sized anchor remains the click target.

## Files Shipped

1. `src/app/globals.css`
2. `src/components/article-page.tsx`
3. `docs/6122-SPUD-CONTENTS-REPORT.md`

No other project file shipped. No item copy, item target, page order, scroll behavior, asset, CTA, schema, navigation, or unrelated page style changed.

## Build, QA, And Screenshots

1. Vercel-only production builds used: **2**.
2. Initial green build: passed, then live QA found **1** CSS-specificity defect on the first-column final rule.
3. Defects repaired: **1**.
4. Final Vercel build: **passed**.
5. Final Vercel status: **Ready**.
6. Static outputs generated: **35**.
7. Final live audit passes: **1 complete 30-page pass after repair**.

The Browser plugin was not available in this session, so the Codex-bundled Playwright Chromium runtime was used as the recorded fallback.

Screenshots:

1. Before desktop: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6122-before-desktop.png`.
2. After desktop hover: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6122-after-desktop-hover.png`.
3. Before mobile: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6122-before-mobile.png`.
4. After mobile focus: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6122-after-mobile-focus.png`.

## Rollback

Exact rollback command to the pre-6122 production deployment:

```powershell
vercel rollback https://presidential-thc-7vj0byuck-paulie-pauliewoods-projects.vercel.app --yes
```
