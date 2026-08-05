# 6120 SPUD — Hero Eyebrow Sizing Report

Date: 2026-08-05  
Repository: `J:\presidential-thc-net`  
Stable live URL: <https://presidential-thc-net.vercel.app>  
Production deployment: <https://presidential-thc-nncwws6n0-paulie-pauliewoods-projects.vercel.app>  
Code commit: `ed549d22589eebf8adb1e6b3c91f3ee94777dea5`

## Required Numbers

1. Project files touched: **2**, at the scope ceiling.
   - `src/app/globals.css`
   - `docs/6120-SPUD-EYEBROW-REPORT.md`
2. Computed eyebrow size at a 1440 px viewport: **40 px / 2.5 rem**.
3. Computed eyebrow size at a 375 px viewport: **24 px / 1.5 rem**.
4. Computed tablet size at 768 px: **32 px / 2 rem**.
5. Computed tablet size at 1023 px: **32 px / 2 rem**.
6. Computed mobile-boundary size at 767 px: **24 px / 1.5 rem**.
7. Homepage H1 text: **`Presidential THC`**.
8. Homepage H1 computed size at 1440 px before: **124.8 px**.
9. Homepage H1 computed size at 1440 px after: **124.8 px**.
10. Homepage H1 computed size at 375 px before: **48.75 px**.
11. Homepage H1 computed size at 375 px after: **48.75 px**.
12. H1 size changes: **0**.
13. H1 computed weight before and after: **600 / 600**.
14. Eyebrow computed weight: **600**, matching the H1.
15. Eyebrow HTML tag: **`P`**, not a heading tag.
16. Header lockup subtitle size before: **11.2 px / 0.7 rem**.
17. Header lockup subtitle size after: **11.2 px / 0.7 rem**.
18. Header lockup subtitle size changes: **0**.
19. Pages returning HTTP 200 after Vercel green: **30 of 30**.
20. Framework overlays: **0**.
21. Relevant browser console warnings/errors: **0**.
22. Horizontal overflow at all five checked widths: **0**.

## Computed Style Confirmation

1. Font family: `clashDisplay, "clashDisplay Fallback", Arial, sans-serif, Arial, sans-serif` — the locally loaded Clash Display family.
2. Letter spacing:
   - 1440 px: **3.2 px**, equal to `0.08em` at 40 px.
   - 375 px: **1.92 px**, equal to `0.08em` at 24 px.
3. Teal color: **`rgb(88, 195, 182)`**, equal to `#58C3B6`.
4. Line height:
   - 1440 px: **42 px**, equal to `1.05`.
   - 375 px: **25.2 px**, equal to `1.05`.
5. Space below the eyebrow: **8 px / 0.5 rem** at every viewport.
6. Text transform remains uppercase and no animation was added.

Rendered eyebrow HTML:

```html
<p class="article-hero__eyebrow">THE OFFICIAL</p>
```

## 375 px Reading Description

At 375 px, `THE OFFICIAL` is plainly legible as a deliberate 24 px teal stamp rather than a hairline navigation label. It remains on one line, uses the same 600 display weight as the H1, and sits only 8 px above `Presidential THC`. The two elements read together as one statement: **“THE OFFICIAL Presidential THC.”** The H1 remains 48.75 px and wraps naturally without horizontal overflow.

## Scope And Regression Proof

1. CSS source files changed: **1**.
2. Content/component/schema/nav/CTA files changed: **0**.
3. H1 selector diff lines: **0**.
4. Header-subtitle selector diff lines: **0**.
5. Page-copy changes: **0**.
6. Vercel static outputs: **35**.
7. Vercel production status: **Ready**.
8. Browser plugin status: **not available**; bundled Playwright Chromium was used as the recorded fallback.

## Rollback And Evidence

Exact rollback command to the pre-6120 production deployment:

```powershell
vercel rollback https://presidential-thc-htosyxy78-paulie-pauliewoods-projects.vercel.app --yes
```

Screenshots:

1. Desktop before: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6120-before-desktop1440.png`.
2. Desktop after: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6120-after-desktop1440.png`.
3. Mobile before: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6120-before-mobile375.png`.
4. Mobile after: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6120-after-mobile375.png`.
