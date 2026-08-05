# Presidential THC Project Law

## Project Identity

- Name: Presidential THC reference publication
- Canonical root: `J:\presidential-thc-net`
- Product mission: publish a 29-page authority resource about the chemistry and craft of infused cannabis.
- Current phase: initial build and launch.

## Non-Negotiables

- Do not modify `J:\presidential-official` or presidentialmoonrocks.com; that tree is read-only source material.
- Keep all forward work and handoff artifacts in this J-drive repo.
- Use only supplied facts or claims verified from a primary source. No medical or effect claims.
- No CMS, video, age gate, ecommerce, invented profiles, or duplicated copy from the main site.
- Every public page must have one H1, a self-canonical, index/follow robots, OG image, and large Twitter card.
- Every content image must be unique to one page, WebP, explicitly sized, and described by unique alt text.
- Preserve silo linking: up to the hub, 2–4 same-silo sideways links, and no article-to-article cross-silo links.
- Record workarounds in `DEFECTS.md` and continue.

## Commands

- Install: `npm install`
- Local: `npm run dev`
- Production gate: `npm run build`
- Image preparation: `npm run images`
- Numeric report audit: `npm run audit`

## Verification

- The requested gate is the production Next.js/Vercel build.
- The final report lives at `docs/6115-SPUD-BUILD-REPORT.md`.
- Do not claim deployment, HTTP 200, or domain configuration without direct proof.

## Git And Security

- Never commit `.env` files, credentials, tokens, `.vercel`, or source client archives.
- Preserve unrelated user changes.
- Commit only after the production build succeeds or the exact gap is documented.

## Closeout

- Summarize files, build/deployment state, defects, exact counts, and next move.
- Update the Obsidian project memory and back up the vault to `J:\Codex_Brain_Vault_Backup`.
