import { createFileRoute } from "@tanstack/react-router";

import { CommunityCard } from "@/components/site/CommunityCard";
import { PageHero, SectionBlock } from "@/components/site/sections";
import { communities } from "@/content/site";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/communities")({
  head: () => ({
    ...buildHead({
      title: "Dubai Residential Communities & Masterplans | Parkwood Properties",
      description:
        "Explore premier Dubai residential masterplans including Downtown Dubai, Dubai Hills Estate, The Oasis, Dubai Creek Harbour, and Emaar Beachfront with expert community insights.",
      path: "/communities",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Dubai Residential Communities & Masterplans",
          url: `${SITE_URL}/communities`,
          description:
            "Explore premier Dubai residential masterplans including Downtown Dubai, Dubai Hills Estate, The Oasis, Dubai Creek Harbour, and Emaar Beachfront with expert community insights.",
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
