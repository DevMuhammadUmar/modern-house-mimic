import { createFileRoute } from "@tanstack/react-router";

import { CommunityCard } from "@/components/site/CommunityCard";
import { PageHero, SectionBlock } from "@/components/site/sections";
import { communities } from "@/content/site";

export const Route = createFileRoute("/communities")({
  head: () => ({
    meta: [
      { title: "Communities — Emaar Masterplans in Dubai" },
      {
        name: "description",
        content:
          "Explore Emaar communities including Dubai Creek Harbour, Dubai Hills Estate, The Oasis, The Valley, Emaar South and Downtown Dubai.",
      },
      { property: "og:title", content: "Communities — Emaar Masterplans in Dubai" },
      {
        property: "og:description",
        content: "A selection of Emaar masterplanned communities we advise on across Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://modern-house-mimic.lovable.app/communities" },
    ],
    links: [{ rel: "canonical", href: "https://modern-house-mimic.lovable.app/communities" }],
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
