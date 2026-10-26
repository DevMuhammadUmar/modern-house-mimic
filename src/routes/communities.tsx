import { createFileRoute } from "@tanstack/react-router";

import { CommunityCard } from "@/components/site/CommunityCard";
import { PageHero, SectionBlock } from "@/components/site/sections";
import { communities } from "@/content/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/communities")({
  head: () =>
    buildHead({
      title: "Communities \u2014 Emaar Masterplans in Dubai",
      description:
        "Explore Emaar communities including Dubai Creek Harbour, Dubai Hills Estate, The Oasis, The Valley, Emaar South and Downtown Dubai.",
      path: "/communities",
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
