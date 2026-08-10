# Community Detail Pages

Add a dedicated page for each community, opened by clicking a tile in the existing grid (and the home-page carousel cards).

## Navigation

- New route `/communities/$slug` (e.g. `/communities/downtown-dubai`), rendered as a client-side transition — no page reload.
- Community tiles become links. The card image + name become the clickable target; existing card styling and hover motion stay as they are.
- Each detail page has a "Back to communities" link at the top that returns to `/communities`.

## Data model

A new typed collection, keyed by slug, so copy can be added per community without touching layout:

```text
CommunityDetail
  slug, name
  heroImage, heroCaption?
  overview: { heading, paragraphs[] }   // any number of paragraphs
  amenities?: { heading, intro, stats[] }
  stats item: { icon, value, label, highlighted? }
```

All nine existing communities get an entry, seeded with placeholder copy and the images already in the project, so every tile opens a working page today. You then replace the copy, images and stat values in that one file.

## Page layout (top to bottom)

1. Back link + community name as the page `h1`.
2. `overview.heading` as an uppercase, letter-spaced eyebrow (site's existing `label` style).
3. First paragraph in the standard body copy width/style.
4. Full-width hero image in a reserved ~16:7 aspect container (no layout shift), `object-cover`, alt text from the community name. Optional caption rendered below it in muted small text.
5. Remaining paragraphs continue below the image, same width and style.
6. Amenities block — rendered only when `amenities` exists: heading in the same eyebrow style, intro paragraph, then the stat grid.
   - Grid: 4 columns desktop, 2 tablet, 1 mobile.
   - Each cell: small icon, large bold value, muted smaller label.
   - `highlighted: true` gets a subtle accent background/border — no new colors, uses the existing accent token.
7. Existing footer CTA pattern unchanged.

## Technical notes

- Route file `src/routes/communities.$slug.tsx` with `createFileRoute("/communities/$slug")`; unknown slugs throw `notFound()` and render a short "community not found" state with a link back.
- Detail content lives in a new `src/content/communities.ts` exporting `communityDetails` (typed `CommunityDetail[]`) plus a `getCommunityDetail(slug)` helper; `src/content/site.ts` keeps the tile data.
- Icons resolved from a small name → `lucide-react` component map so the data file stays string-based.
- Per-route `head()` metadata: title, description, og:title/og:description/og:type, twitter:card, and og:image only if the hero is an absolute URL.
- Reused existing components (`SectionBlock`, typography classes) — no new fonts, colors, or spacing scale.
- Accessibility: single `h1` (community name), `h2` for Overview and Amenities, stat values in a definition-style list, alt text on the hero, visible focus states on tiles and back link.
