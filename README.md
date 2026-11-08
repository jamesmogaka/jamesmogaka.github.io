# James Mogaka — portfolio

"Option F — Stream". TanStack Start, prerendered to static HTML, deployed to GitHub Pages.

- Content: `src/data/stream.ts` (add an entry to the `stream` array; newest first)
- Styles: `src/styles.css` (colours only via the `:root` custom properties; `<html data-theme="night">` for dark)
- Served from the site root (`/`)

```sh
pnpm dev      # http://localhost:3000/
pnpm build    # static site in dist/client
pnpm check    # biome
```

Deploys on push to `main` via `.github/workflows/deploy.yml` (set Pages source to "GitHub Actions").
