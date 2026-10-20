# Maths with Purpose — Next.js + SCSS

A responsive tutoring portfolio rebuilt with Next.js App Router and SCSS. The site is statically exported so it can be hosted on Cloudflare Pages. A GitHub Actions workflow builds and deploys a preview when changes are pushed to `dev`.

## Stack

- Next.js App Router + TypeScript
- SCSS (`app/globals.scss`)
- Static export to `out/` for Cloudflare Pages
- GitHub Actions CI/CD on pushes to `dev`

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To verify the production export locally:

```bash
npm run lint
npm run build
```

The static website is written to `out/`.

## CI/CD setup

1. Push this folder's contents to a GitHub repository.
2. Create a Cloudflare Pages **Direct Upload** project named `mathswithpurpose`. Do not also connect this project through Cloudflare's Git integration; GitHub Actions will deploy using Wrangler.
3. Add these repository Actions secrets under **Settings → Secrets and variables → Actions**:
   - `CLOUDFLARE_API_TOKEN` — token with permissions to deploy Cloudflare Pages projects.
   - `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID.
4. Push to `dev`. The workflow runs ESLint, builds Next.js as a static export, then deploys `out/` to the Cloudflare Pages `dev` preview.
5. Check the GitHub Actions log for the preview URL.

The workflow does not deploy production directly; it deploys the `dev` preview. If you want `dev` to update the public production URL, adjust the Cloudflare Pages production branch and deployment command deliberately.

## Main files

- `app/page.tsx` — page composition.
- `app/components/atoms/` — shared links and small text elements.
- `app/components/molecules/` — reusable headings, cards, filters, table and pagination.
- `app/components/organisms/` — complete page sections, including interactive results.
- `app/globals.scss` — responsive styling.
- `app/layout.tsx` — document metadata.
- `next.config.ts` — static export configuration.
- `.github/workflows/deploy.yml` — CI/CD workflow.

The testimonials section is not included.
