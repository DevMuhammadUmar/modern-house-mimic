import { createFileRoute, Link } from "@tanstack/react-router";

import { Carousel, CarouselItem } from "@/components/site/Carousel";
import { CommunityCard } from "@/components/site/CommunityCard";
import { communities, company, featuredHero, services } from "@/content/site";
import { buildFAQSchema, buildHead, SITE_URL, absoluteUrl } from "@/lib/seo";

const homeFaqs = [
  {
    question: "Can foreign investors and non-residents purchase freehold property in Dubai?",
    answer:
      "Yes, foreign nationals and international buyers can purchase freehold properties with 100% foreign ownership in designated areas across Dubai, including Downtown Dubai, Dubai Hills Estate, The Oasis, and Dubai Creek Harbour.",
  },
  {
    question: "What are the benefits of investing in off-plan property in Dubai?",
    answer:
      "Off-plan properties in Dubai typically feature attractive pre-launch pricing, flexible developer payment schedules, high capital appreciation during construction, and strong rental yields upon completion.",
  },
  {
    question: "Does property purchase in Dubai qualify for the 10-Year UAE Golden Visa?",
    answer:
      "Yes, purchasing residential or off-plan real estate valued at AED 2,000,000 or more in Dubai enables investors and their families to apply for the renewable 10-Year UAE Golden Visa.",
  },
  {
    question: "How does Parkwood Properties assist with secondary market buying and handover?",
    answer:
      "Parkwood Properties provides independent market pricing analysis, verified shortlisting, negotiation, and end-to-end handover management including snagging inspections and key handover with Emaar policies.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    ...buildHead({
      title: "Dubai Luxury Homes & Off-Plan Investments | Parkwood Properties Dubai",
      description:
        "Discover luxury villas, penthouses, and off-plan property investments across Dubai's top masterplanned communities with Parkwood Properties Dubai.",
      path: "/",
      image: absoluteUrl("/social.jpg"),
      schemas: [buildFAQSchema(homeFaqs)],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["RealEstateAgent", "LocalBusiness"],
          "@id": "https://parkwoodproperties.ae/#organization",
          name: "Parkwood Properties Dubai",
          alternateName: "Parkwood Properties",
          description:
            "Parkwood Properties Dubai is a premier property consultancy advising on luxury homes and off-plan investments across Emaar masterplanned communities in Dubai.",
          slogan: company.tagline,
          url: SITE_URL,
          telephone: company.phone,
          email: company.email,
          image: absoluteUrl("/hero.jpeg"),
          logo: absoluteUrl("/logo.svg"),
          priceRange: "AED 2,000,000 - AED 100,000,000+",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.2048,
            longitude: 55.2708,
          },
          areaServed: {
            "@type": "City",
            name: "Dubai",
          },
          sameAs: [
            "https://www.linkedin.com/company/parkwood-properties-dubai/",
            "https://www.facebook.com/profile.php?id=61592645326753",
            "https://www.instagram.com/propertiesparkwood/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(buildFAQSchema(homeFaqs)),
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
      <h1 className="sr-only">
        Dubai Luxury Homes & Off-Plan Property Investments | Parkwood Properties Dubai
      </h1>
      <section className="grid md:grid-cols-[2fr_1fr]">
        <img
          src={featuredHero.image}
          alt={featuredHero.imageAlt}
          width={1600}
          height={1104}
          fetchPriority="high"
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
                    alt={service.imageAlt ?? service.title}
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
