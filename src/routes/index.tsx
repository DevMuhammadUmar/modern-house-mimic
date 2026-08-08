import { createFileRoute, Link } from "@tanstack/react-router";

import { ListingCard } from "@/components/site/ListingCard";
import { featuredHero, prime, recent } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fieldhouse — Design-Led Homes in Dubai's Emaar Communities" },
      {
        name: "description",
        content:
          "Fieldhouse is a Dubai property consultancy for design-led living: homes across Dubai Creek Harbour, Dubai Hills Estate, The Oasis, Downtown Dubai and more.",
      },
      {
        property: "og:title",
        content: "Fieldhouse — Design-Led Homes in Dubai's Emaar Communities",
      },
      {
        property: "og:description",
        content:
          "Buy, sell, rent and hand over homes across Emaar's masterplanned communities in Dubai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  title,
  action,
  actionTo,
  children,
}: {
  title: string;
  action: string;
  actionTo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between gap-6">
          <h2 className="label">{title}</h2>
          <Link to={actionTo} className="btn-outline">
            {action}
          </Link>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-12 md:mt-14 md:grid-cols-3">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <section className="grid md:grid-cols-[2fr_1fr]">
        <img
          src={featuredHero.image}
          alt={featuredHero.imageAlt}
          width={1600}
          height={1104}
          className="h-[52vh] w-full object-cover md:h-[78vh]"
        />
        <div className="flex flex-col justify-center gap-6 bg-accent px-8 py-14 md:px-12">
          <p className="label self-start border-b border-foreground/30 pb-2">
            {featuredHero.kicker}
          </p>
          <h1 className="display text-3xl md:text-[2.6rem]">{featuredHero.title}</h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {featuredHero.body}
          </p>
          <Link to={featuredHero.ctaTo} className="btn-outline self-start">
            {featuredHero.ctaLabel}
          </Link>
        </div>
      </section>

      <Section title="Prime" action="View communities" actionTo="/communities">
        {prime.map((l) => (
          <ListingCard key={l.name} listing={l} />
        ))}
      </Section>

      <Section title="New this week" action="Our services" actionTo="/services">
        {recent.map((l) => (
          <ListingCard key={l.name} listing={l} />
        ))}
      </Section>

      <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-3xl md:text-4xl">Thinking of selling or letting?</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We photograph, write and place each home ourselves — and advise honestly on price before
            anything goes to market.
          </p>
          <div className="mt-10">
            <Link to="/request-appraisal" className="btn-outline">
              Request an appraisal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
