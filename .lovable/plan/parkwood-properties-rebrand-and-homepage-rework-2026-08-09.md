# Parkwood Properties — rebrand and homepage rework

Keeps the current visual language (serif display type, editorial layout, spacing, cards) and only changes brand, content, and the two homepage carousels.

## 1. Brand

- Company name becomes "Parkwood Properties"; tagline becomes "Built on Trust - Backed by Experience".
- Header: logo image top-left, with the wordmark and tagline line beside it. Until you upload the file, a temporary placeholder image sits in the logo slot — swap is a one-line change.
- Contact details: admin@parkwoodproperties.ae, www.parkwoodproperties.ae (replaces the old email/phone/address).
- Titles and page descriptions across all routes updated to the new name.

## 2. Hero

- New hero image slot; placeholder until you upload yours.
- The brown panel to the right of the image shows only the quote, set in the display serif:

```text
WE SHAPE OUR BUILDINGS,
AND AFTERWARDS OUR BUILDINGS SHAPE US.
— Winston Churchill
```

No kicker, body copy or button in that panel.

## 3. Communities section (replaces "Prime")

- Section heading "Communities" with the "View Communities" button centred beneath the row.
- Horizontal carousel with left/right arrow buttons; keyboard accessible, swipeable on touch, arrows disable at the ends.
- Nine communities in this order: Downtown Dubai, The Valley, Dubai Hills Estate, The Oasis by Emaar, Dubai Creek Harbour, Rachid Yachts & Marina, Arabian Ranches III, Emaar South, Grand Polo Club & Resort.
- Each card: original generated photography plus our own short description (no Emaar images or copy). Cards show details only — no popup form; enquiries go through Contact / Request Appraisal.
- The Communities page reuses the same nine entries in the same order.

## 4. Services section (replaces "New this week")

- Section heading "Services" with the "Our Services" button centred beneath the row.
- Same arrow carousel pattern, sharing one reusable component with Communities.
- Five cards: Buy, Sell, Rent, Mortgage, Property Handover. Existing placeholder images stay in place for now; send yours later and we swap them.

## 5. Footer

- Background changes to the same brown as the hero panel, with text/border colours adjusted for contrast (buttons, inputs, links) so it stays readable.
- Name "Parkwood Properties", tagline "Built on Trust - Backed by Experience", copyright line updated.
- "Follow us" becomes social icons only (LinkedIn, Facebook, Instagram) linking to your three URLs, each with an accessible label. YouTube and WhatsApp removed.
- Contact block shows the new email and website.

## Technical notes

- Content edits land in `src/content/site.ts` (company, socials, communities order, services); no data layer or backend changes.
- New `src/components/site/Carousel.tsx` — scroll-snap track with arrow controls, used by both homepage sections.
- `src/routes/index.tsx` restructured for hero quote panel + two carousels with centred CTAs.
- Footer brown uses a new semantic token in `src/styles.css` (e.g. `--footer` / `--footer-foreground`) rather than hardcoded colours.
- Logo and hero image are wired as single imports so your uploads drop straight in.
