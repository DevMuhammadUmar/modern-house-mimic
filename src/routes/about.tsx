import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, ProseColumns, SectionBlock } from "@/components/site/sections";
import { about } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Parkwood Properties Property Consultancy" },
      {
        name: "description",
        content:
          "Parkwood Properties is a Dubai property consultancy for design-led living, advising on homes across Emaar's masterplanned communities.",
      },
      { property: "og:title", content: "About Us — Parkwood Properties Property Consultancy" },
      {
        property: "og:description",
        content: "Who we are, how we work, and why we take on fewer homes with more care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker={about.hero.kicker}
        title={about.hero.title}
        body={about.hero.body}
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
      />

      <SectionBlock>
        <ProseColumns title={about.intro.title} body={about.intro.body} />
      </SectionBlock>

      <SectionBlock tone="accent">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <img
            src={about.story.image}
            alt={about.story.imageAlt}
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="space-y-5">
            <h2 className="display text-2xl md:text-3xl">{about.story.title}</h2>
            {about.story.body.map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
        </div>
      </SectionBlock>

      <SectionBlock title="How we work">
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-3">
          {about.values.map((v) => (
            <div key={v.title}>
              <h3 className="display text-2xl">{v.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-3xl md:text-4xl">{about.closing.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{about.closing.body}</p>
          <div className="mt-10">
            <Link to={about.closing.ctaTo} className="btn-outline">
              {about.closing.ctaLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
