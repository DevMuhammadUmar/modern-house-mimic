import { createFileRoute, Link } from "@tanstack/react-router";

import { Carousel, CarouselItem } from "@/components/site/Carousel";
import { CommunityCard } from "@/components/site/CommunityCard";
import { communities, company, featuredHero, services } from "@/content/site";

const SITE = "https://modern-house-mimic.lovable.app";

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
      { property: "og:url", content: `${SITE}/` },
      { property: "og:image", content: `${SITE}/hero.jpeg` },
      { name: "twitter:image", content: `${SITE}/hero.jpeg` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: company.name,
          slogan: company.tagline,
          url: SITE,
          email: company.email,
          image: `${SITE}/hero.jpeg`,
          areaServed: "Dubai, United Arab Emirates",
          sameAs: [
            "https://www.linkedin.com/company/parkwood-properties-dubai/",
            "https://www.facebook.com/profile.php?id=61592645326753",
            "https://www.instagram.com/propertiesparkwood/",
          ],
        }),
      },
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
    <section className="border-t border-border px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex justify-center">
          <Link to={actionTo} className="btn-outline">
            {action}
          </Link>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-14">{children}</div>
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
          className="h-[42vh] w-full object-cover sm:h-[52vh] md:h-[78vh]"
        />
        <figure className="m-0 flex flex-col justify-center gap-5 bg-brand px-5 py-10 text-brand-foreground sm:gap-6 sm:px-8 sm:py-14 md:px-12">
          <blockquote className="display text-xl leading-tight sm:text-2xl md:text-[2rem]">
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
              <article className="group flex h-full flex-col">
                <div className="h-52 shrink-0 overflow-hidden bg-muted sm:h-64">
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

      <section className="border-t border-border px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="display text-2xl sm:text-3xl md:text-4xl">
            Thinking of selling or leasing?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
            We photograph, write and place each home ourselves — and advise honestly on price before
            anything goes to market.
          </p>
          <div className="mt-8 sm:mt-10">
            <Link to="/request-appraisal" className="btn-outline">
              Request an appraisal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
