/**
 * SEO utilities for Park Wood Properties.
 * All absolute URLs live here so routes never hard-code a domain.
 */

export const SITE_URL = "https://parkwoodproperties.ae";
export const SITE_NAME = "Park Wood Properties";

/**
 * Returns a full absolute URL for the given path.
 * - A leading slash is always added (even if path is "").
 * - No trailing slash except for the root ("/").
 */
export function absoluteUrl(path: string): string {
  // Normalise: ensure leading slash, strip trailing slash (except root).
  const normalised = path.startsWith("/") ? path : `/${path}`;
  const clean =
    normalised.length > 1 && normalised.endsWith("/")
      ? normalised.slice(0, -1)
      : normalised;
  return `${SITE_URL}${clean}`;
}

export const DEFAULT_OG_IMAGE = absoluteUrl("/social.jpg");

export interface BuildHeadOptions {
  title: string;
  description: string;
  /** Path relative to root, e.g. "/about" or "/communities/downtown-dubai". */
  path: string;
  /** Absolute URL of the OG/Twitter share image. Defaults to /social.jpg. */
  image?: string;
  /** og:type — defaults to "website". */
  type?: string;
}

/**
 * Returns the TanStack Router `head()` payload for a page.
 * Inject into `head: () => buildHead({ ... })` in each route.
 */
export function buildHead({ title, description, path, image, type = "website" }: BuildHeadOptions) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = image ?? DEFAULT_OG_IMAGE;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
