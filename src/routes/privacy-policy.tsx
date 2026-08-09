import { createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Parkwood Properties" },
      {
        name: "description",
        content:
          "How Parkwood Properties collects, uses and protects personal information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Parkwood Properties" },
      {
        property: "og:description",
        content: "How we handle personal information submitted through this website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero kicker="Legal" title="Privacy Policy" />
      <SectionBlock>
        <div className="mx-auto max-w-2xl space-y-5">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our full privacy policy is being prepared and will be published here.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            In the meantime, information submitted through the forms on this site is used only to
            respond to your enquiry.
          </p>
        </div>
      </SectionBlock>
    </main>
  );
}
