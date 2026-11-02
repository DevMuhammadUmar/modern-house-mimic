import { company } from "@/content/site";

/**
 * SEO utilities for Parkwood Properties.
 * Absolute URLs, title formatting, canonicalization, and Schema.org rich data.
 */

export const SITE_URL = "https://parkwoodproperties.ae";
export const SITE_NAME = "Parkwood Properties Dubai";

/**
 * Returns a full absolute URL for the given path.
 * - Leading slash is ensured.
 * - No trailing slash except for the root ("/").
 */
export function absoluteUrl(path: string): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  const clean =
    normalised.length > 1 && normalised.endsWith("/") ? normalised.slice(0, -1) : normalised;
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
  /** Optional structured data objects to include in head. */
  schemas?: Record<string, unknown>[];
}

/**
 * Formats a clean, high-ranking page title.
 */
export function formatPageTitle(title: string): string {
  if (title.includes("Parkwood Properties")) {
    return title;
  }
  return `${title} | ${SITE_NAME}`;
}

/**
 * Returns the TanStack Router `head()` payload for a page.
 * Injects unique title, description, canonical link, OpenGraph, Twitter card, and JSON-LD schemas.
 */
export function buildHead({
  title,
  description,
  path,
  image,
  type = "website",
  schemas = [],
}: BuildHeadOptions) {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = image ?? DEFAULT_OG_IMAGE;
  const pageTitle = formatPageTitle(title);

  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: imageUrl },
      { property: "og:locale", content: "en_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
    scripts: schemas.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}

/**
 * Schema.org RealEstateAgent & LocalBusiness with Dubai geo-targeting.
 */
export function buildRealEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["RealEstateAgent", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Parkwood Properties Dubai",
    legalName: "Parkwood Properties",
    url: SITE_URL,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl("/hero.jpeg"),
    description:
      "Premier real estate advisory in Dubai specializing in luxury homes, off-plan investments, and Emaar masterplanned communities.",
    telephone: company.phone,
    email: company.email,
    priceRange: "AED 2,000,000 - AED 100,000,000+",
    currenciesAccepted: "AED, USD, EUR, GBP",
    paymentAccepted: "Bank Transfer, Cheque",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phone,
        contactType: "customer service",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: company.whatsappNumber,
        contactType: "WhatsApp Inquiries",
        url: company.whatsappHref,
        areaServed: ["AE", "Worldwide"],
        availableLanguage: ["English", "Arabic"],
      },
    ],
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "AdministrativeArea", name: "Downtown Dubai" },
      { "@type": "AdministrativeArea", name: "Dubai Hills Estate" },
      { "@type": "AdministrativeArea", name: "Dubai Creek Harbour" },
      { "@type": "AdministrativeArea", name: "The Oasis by Emaar" },
      { "@type": "AdministrativeArea", name: "Arabian Ranches III" },
      { "@type": "AdministrativeArea", name: "Emaar South" },
      { "@type": "AdministrativeArea", name: "The Valley" },
      { "@type": "AdministrativeArea", name: "Rashid Yachts & Marina" },
      { "@type": "AdministrativeArea", name: "Emaar Beachfront" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/parkwood-properties-dubai/",
      "https://www.facebook.com/profile.php?id=61592645326753",
      "https://www.instagram.com/propertiesparkwood/",
    ],
  };
}

/**
 * BreadcrumbList schema for structured hierarchy in Google Search results.
 */
export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * FAQPage schema for Google Search "People Also Ask" rich snippet carousels.
 */
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
