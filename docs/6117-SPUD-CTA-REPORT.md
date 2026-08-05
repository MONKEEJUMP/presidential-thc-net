# 6117 SPUD — Brand CTA Report

Date: 2026-08-05  
Repository: `J:\presidential-thc-net`  
Stable live URL: <https://presidential-thc-net.vercel.app>  
Production deployment: <https://presidential-thc-hdf4cdfbo-paulie-pauliewoods-projects.vercel.app>  
Code commit: `967c5c254c92fe1d807d9e9ff581efc9c6248efa`

## Required Numbers

1. Files touched: **3**, within the maximum of 4.
   - `src/app/globals.css`
   - `src/components/article-page.tsx`
   - `docs/6117-SPUD-CTA-REPORT.md`
2. Pages carrying the CTA block: **30**.
3. Pages carrying more than one CTA block: **0**.
4. CTA links with `rel="nofollow"`: **30**.
5. In-body contextual links to `presidentialmoonrocks.com`: **25 before, 25 after**.
6. In-body contextual links that gained `nofollow`: **0**.
7. CTA headline font family: **Clash Display**. The computed live value is `clashDisplay, "clashDisplay Fallback", Arial, sans-serif, Arial, sans-serif`, loaded from the project's Clash Display WOFF2 files through `--font-clash-display`.
8. Pages returning HTTP 200: **30 of 30**.
9. Total editorial words across the site: **27,972**, unchanged. The `src/content` tree hash remained `83d5e9118f9158444eb93bd5f0608f06948d623f` and the content diff between the pre-6117 and 6117 code commits contains **0 lines**.
10. Old subdued `.external-reference` blocks remaining: **0**.
11. CTA blocks located immediately after the first `.article-section`: **30 of 30**.
12. Framework error overlays: **0**.
13. Relevant browser console warnings or errors: **0**.

## Placement And Treatment Confirmation

The CTA appears near the top of every page, immediately after the first content section and before the remaining article body. The former subdued brand-reference wrapper was removed. The 25 existing editorial links remain in their original directory positions with their original hrefs, varied anchor text, and `rel="noopener noreferrer"`; none became a CTA or gained `nofollow`.

The CTA spans the full publication width, uses an H2-scale Clash Display headline, has 3 px champagne-gradient seams above and below, and presents a teal `#58C3B6` button with ink text and generous padding. Live interaction proof changed the button background from `rgb(88, 195, 182)` at rest to `rgb(244, 227, 161)` on hover.

## Rendered HTML Proof

```html
<aside class="brand-cta" aria-labelledby="brand-cta-heading"><h2 id="brand-cta-heading">Presidential Moon Rocks</h2><p>The official Presidential site — the full catalog and the licensed retailer locator.</p><a class="brand-cta__button" href="https://presidentialmoonrocks.com" rel="nofollow">Visit the official site</a></aside>
```

## Build, Deployment, And Rollback

1. Vercel production build: **passed**.
2. Static outputs generated: **35**.
3. Production deployment status: **Ready**.
4. Code commit: `967c5c254c92fe1d807d9e9ff581efc9c6248efa`.
5. Exact rollback command to the pre-6117 production deployment:

```powershell
vercel rollback https://presidential-thc-f1nxhumzu-paulie-pauliewoods-projects.vercel.app --yes
```

## Browser Evidence

1. Browser plugin status: **not available**; bundled Playwright Chromium was used as the recorded fallback.
2. Desktop viewport: **1440 × 1000**.
3. Mobile viewport: **390 × 844**.
4. Desktop screenshot: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6117-cta-desktop.png`.
5. Mobile screenshot: `C:\Users\DJ PAULIEWOOD\.codex\visualizations\2026\08\05\019fd10d-58fd-7f62-9640-626c438d0e75\6117-cta-mobile.png`.
