# 6116 SPUD — Scroll And Sticky Header Fix Report

Date: 2026-08-05  
Repository: `J:\presidential-thc-net`  
Live alias: <https://presidential-thc-net.vercel.app>  
Production deployment: <https://presidential-thc-f1nxhumzu-paulie-pauliewoods-projects.vercel.app>  
Code commit: `cf5f0782209a7686c618cc5e0723b9121748fc56`

## Required Numbers

1. Files touched: **3**, within the maximum of 6.
   - `src/app/globals.css`
   - `src/components/article-page.tsx`
   - `docs/6116-SPUD-SCROLL-FIX-REPORT.md`
2. Occurrences of `scroll-behavior:smooth` in the live built CSS: **0**.
3. Sticky-header rule present: **yes**.
   - Exact live compiled rule: `.site-header{z-index:100;border-bottom:3px solid #0000;border-image:var(--champagne) 1;background:#070908;position:sticky;top:0}`
   - Computed desktop state after 4,546 px of scrolling: `top: 0`, `position: sticky`, `z-index: 100`, `background: rgb(7, 9, 8)`.
   - Computed mobile state after 5,488 px of scrolling: `top: 0`, `position: sticky`, `z-index: 100`, `background: rgb(7, 9, 8)`.
4. In-page anchor links remaining on the four silo hubs, excluding `#main-content`: **0**.
5. Hub heading `id` attributes still present: **17**, unchanged.
   - Science: **1** — `how-to-use-this-section`.
   - Infusion: **5** — `how-infusion-works`, `surface-vs-saturation`, `kief-and-trichomes`, `burn-behavior`, `potency-by-format`.
   - Formats: **6** — `moon-rocks`, `infused-pre-rolls`, `blunts`, `mini-blunts`, `vape-cartridges`, `compare-by-construction`.
   - Guides: **5** — `smoking-moon-rocks`, `storing-infused-cannabis`, `temperature-control`, `quality-signals`, `beginner-path`.
6. Pages returning HTTP 200 after Vercel green: **30 of 30**.
7. Total words across the site: **27,972**, unchanged from the supplied 6116 baseline. The committed `src/content` tree hash remained `83d5e9118f9158444eb93bd5f0608f06948d623f` before and after the fix, proving that no page copy moved.
8. Total rendered images: **134**, unchanged.
9. Header navigation items: **5**, unchanged — Science, Infusion, Formats, Guides, About.

## Behavior Confirmation

1. Sticky behavior: **passed**. The header remained fixed at the top of a long temperature-guide article on desktop and mobile while content crossed beneath it.
2. Header opacity: **passed after repair**. Visual proof showed the previous 94%-opaque background allowed faint heading show-through, so the existing background was raised to fully opaque `#070908`. No blur was added; the champagne border remains unchanged.
3. Instant navigation: **passed**. From a scroll position of 4,546 px, clicking the Science header item loaded `/science`; sampled scroll positions after the route change were `0, 0, 0` at 0/50/100 ms. Computed root scroll behavior is `auto`.
4. Hub routing: **passed**. Every table-of-contents link on `/science`, `/infusion`, `/formats`, and `/guides` now uses a real article route rather than a `#` fragment.
5. Accessibility skip link: **preserved**. `#main-content` remains untouched.
6. Page identity: **passed** — live temperature guide returned 200 with title `Temperature Guide for Cannabis Extracts`.
7. Blank/error checks: **passed** — meaningful page content rendered, framework overlay count 0, relevant console warning/error count 0.

## Build And Deployment

1. Local production build: **passed** with 35 static outputs and all 30 publication routes prerendered.
2. Vercel production build: **green**.
3. Final production deployment: `https://presidential-thc-f1nxhumzu-paulie-pauliewoods-projects.vercel.app`.
4. Stable live URL: `https://presidential-thc-net.vercel.app`.
5. Code commit: `cf5f0782209a7686c618cc5e0723b9121748fc56`.
6. Exact rollback command to the pre-6116 production deployment:

```powershell
vercel rollback https://presidential-thc-pmjsyf08n-paulie-pauliewoods-projects.vercel.app --yes
```

## Browser Evidence

1. Browser plugin status: **not available** in this session; bundled Playwright Chromium was used as the recorded fallback.
2. Desktop viewport: **1440 × 1000**.
3. Mobile viewport: **390 × 844**.
4. Desktop screenshot: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6116-sticky-header-desktop.png`.
5. Mobile screenshot: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6116-sticky-header-mobile.png`.
