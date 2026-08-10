import { communities } from "@/content/site";

/**
 * Long-form detail content for each community page (/communities/:slug).
 * Replace the placeholder copy, images and stat values below — layout code
 * never needs to change.
 */

export type CommunityStat = {
  /** Icon name, resolved by the icon map in the detail route. */
  icon: string;
  value: string;
  label: string;
  highlighted?: boolean;
};

export type CommunityDetail = {
  slug: string;
  name: string;
  /** Large banner image, sits between the first and second paragraph. */
  heroImage: string;
  heroCaption?: string;
  overview: {
    heading: string;
    /** Ordered paragraphs; any number is supported. */
    paragraphs: string[];
  };
  amenities?: {
    heading: string;
    intro: string;
    stats: CommunityStat[];
  };
};

const byName = new Map(communities.map((c) => [c.slug, c]));

/** Placeholder detail entry generated from the tile data. */
function seed(slug: string, extra?: Partial<CommunityDetail>): CommunityDetail {
  const tile = byName.get(slug);
  const name = tile?.name ?? slug;
  return {
    slug,
    name,
    heroImage: tile?.image ?? "",
    overview: {
      heading: name.toUpperCase(),
      paragraphs: [
        tile?.description ?? "",
        "Placeholder copy — final wording for this community will be added here. This second paragraph continues below the banner image and can be followed by any number of further paragraphs.",
      ],
    },
    ...extra,
  };
}

export const communityDetails: CommunityDetail[] = [
  seed("downtown-dubai", {
    amenities: {
      heading: "Amenities",
      intro:
        "Placeholder intro for the amenities of this community. Replace with the final copy and figures.",
      stats: [
        { icon: "area", value: "—", label: "Total community area" },
        { icon: "park", value: "—", label: "Parks and open space" },
        { icon: "school", value: "—", label: "Schools and nurseries" },
        { icon: "retail", value: "—", label: "Retail and dining" },
        { icon: "clinic", value: "—", label: "Clinics nearby" },
        { icon: "pool", value: "—", label: "Pools and leisure" },
        { icon: "plane", value: "—", label: "Airport gateway", highlighted: true },
      ],
    },
  }),
  seed("the-valley"),
  seed("dubai-hills-estate"),
  seed("the-oasis-by-emaar"),
  seed("dubai-creek-harbour"),
  seed("rachid-yachts-and-marina"),
  seed("arabian-ranches-iii"),
  seed("emaar-south"),
  seed("grand-polo-club-and-resort"),
];

export function getCommunityDetail(slug: string): CommunityDetail | undefined {
  return communityDetails.find((c) => c.slug === slug);
}
