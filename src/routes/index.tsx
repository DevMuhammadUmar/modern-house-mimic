import { createFileRoute, Link } from "@tanstack/react-router";

import { Carousel, CarouselItem } from "@/components/site/Carousel";
import { CommunityCard } from "@/components/site/CommunityCard";
import { communities, featuredHero, services } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parkwood Properties — Built on Trust, Backed by Experience" },
      {
        name: "description",
        content:
          "Parkwood Properties advises on homes across Dubai's leading communities — Downtown Dubai, Dubai Hills Estate, The Oasis, Dubai Creek Harbour and more.",
      },
      {
        property: "og:title",
        content: "Parkwood Properties — Built on Trust, Backed by Experience",
      },
      {
        property: "og:description",
        content:
          "Buy, sell, rent, finance and hand over homes across Dubai's masterplanned communities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  action,
  actionTo,
  children,
}: {
  title?: string;
  action: string;
  actionTo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <Link to={actionTo} className="btn-outline">
            {action}
          </Link>
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
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
        <figure className="flex flex-col justify-center gap-6 bg-brand px-8 py-14 text-brand-foreground md:px-12">
          <blockquote className="display text-2xl leading-tight md:text-[2rem]">
            {featuredHero.quote.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
          <figcaption className="label opacity-80">{featuredHero.quoteAttribution}</figcaption>
        </figure>
      </section>

      <Section title="Communities" action="View communities" actionTo="/communities">
        <Carousel label="communities">
          {communities.map((community) => (
            <CarouselItem key={community.slug}>
              <CommunityCard community={community} />
            </CarouselItem>
          ))}
        </Carousel>
      </Section>

      <Section title="Services" action="Our services" actionTo="/services">
        <Carousel label="services">
          {services.map((service) => (
            <CarouselItem key={service.slug}>
              <article className="group block flex flex-col h-full">
                <div className="overflow-hidden bg-muted h-64 aspect-[4/3] shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="display text-xl">{service.title}</h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </Carousel>
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
