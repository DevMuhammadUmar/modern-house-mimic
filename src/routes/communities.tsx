import { createFileRoute } from "@tanstack/react-router";

import { CommunityCard } from "@/components/site/CommunityCard";
import { PageHero, SectionBlock } from "@/components/site/sections";
import { buildBreadcrumbSchema, buildHead, SITE_URL, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/communities")({
  head: () => ({
    ...buildHead({
      title: "Dubai Masterplanned Communities & Luxury Real Estate | Parkwood Properties",
      description:
        "Explore premier Dubai residential masterplans: Downtown Dubai, Dubai Hills Estate, The Oasis, Dubai Creek Harbour, Arabian Ranches III, and Emaar Beachfront.",
      path: "/communities",
      schemas: [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Communities", path: "/communities" },
        ]),
      ],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dubai Masterplanned Communities & Luxury Real Estate",
          url: `${SITE_URL}/communities`,
          description:
            "Explore premier Dubai residential masterplans: Downtown Dubai, Dubai Hills Estate, The Oasis, Dubai Creek Harbour, Arabian Ranches III, and Emaar Beachfront.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: communities.map((c, idx) => ({
              "@type": "ListItem",
              position: idx + 1,
              name: c.name,
              url: absoluteUrl(`/communities/${c.slug}`),
            })),
          },
        }),
      },
    ],
  }),
  component: CommunitiesPage,
});

function CommunitiesPage() {
  return (
    <main>
      <PageHero
        kicker="Communities"
        title="Emaar masterplans, read closely"
        body="Communities we know well — their orientation, their architecture and how each one actually lives."
      />

      <SectionBlock>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {communities.map((community) => (
            <CommunityCard key={community.slug} community={community} />
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
