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

## 2026-09-05 — Verification command drift

- **Problem:** `AGENTS.md` still lists `npm run audit`, but the current `package.json` has no `audit` script.
  **Workaround:** Reported the missing command without inventing a substitute and used the required Next.js production build, which passed TypeScript and all 44 outputs. A future maintenance pass should either restore the intended audit script or update `AGENTS.md` to the supported command set.
