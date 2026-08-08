import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Fieldhouse" },
      {
        name: "description",
        content: "The terms governing use of the Fieldhouse website and our property services.",
      },
      { property: "og:title", content: "Terms & Conditions — Fieldhouse" },
      {
        property: "og:description",
        content: "Terms governing use of this website and our property services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Terms &amp; Conditions" />
      <SectionBlock>
        <div className="mx-auto max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our full terms and conditions are being prepared and will be published here.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Property information on this site is indicative and does not constitute an offer or
            contract.
          </p>
        </div>
      </SectionBlock>
    </main>
  );
}
