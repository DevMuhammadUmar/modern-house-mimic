# Park Wood Properties

Real-estate website for **[Park Wood Properties](https://parkwoodproperties.ae)** — a Dubai property consultancy specialising in Emaar masterplanned communities.

## Stack

| Layer         | Technology                                                            |
| ------------- | --------------------------------------------------------------------- |
| Framework     | [TanStack Start](https://tanstack.com/start) (file-based SSR routing) |
| Build         | [Vite](https://vitejs.dev) via `@lovable.dev/vite-tanstack-config`    |
| Runtime       | [Bun](https://bun.sh)                                                 |
| Styling       | [Tailwind CSS v4](https://tailwindcss.com)                            |
| UI primitives | [Radix UI](https://radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Language      | TypeScript                                                            |
| Deploy target | Cloudflare Workers (Nitro adapter)                                    |

## Local development

```bash
# Install dependencies
bun install

# Start dev server (hot reload)
bun run dev

# Type-check
bunx tsc --noEmit

# Production build
bun run build
```

The dev server starts at `http://localhost:3000` by default.

## Project structure

```
src/
  routes/         # File-based routes (TanStack Router)
  components/     # React components
  content/        # Editable site copy and data
  lib/            # Utilities (seo.ts, error-reporting.ts, …)
  styles.css      # Global Tailwind styles
public/           # Static assets, robots.txt, sitemap.xml
scripts/          # Build-time scripts (e.g. sitemap generation)
```

## Key content files

- **`src/content/site.ts`** — company details, navigation, services, communities list, about copy.
- **`src/content/communities.ts`** — long-form detail content for each community page.
- **`src/lib/seo.ts`** — `SITE_URL`, `SITE_NAME`, and `buildHead()` helper used by all routes.

## Deployment

The app builds to a Cloudflare Workers bundle via Nitro. Run `bun run build` then deploy `.output/` with Wrangler:

```bash
bunx wrangler deploy
```

Ensure the `wrangler.toml` points to the correct account and zone before deploying.
