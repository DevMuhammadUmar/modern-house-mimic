import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";
import { services } from "@/content/site";
import { buildBreadcrumbSchema, buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    ...buildHead({
      title: "Real Estate Advisory & Property Services Dubai | Parkwood Properties",
      description:
        "Comprehensive Dubai real estate services: luxury property acquisition, sales marketing, residential leasing, independent mortgage advisory, and Emaar handover snagging.",
      path: "/services",
      schemas: [
        buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Real Estate Advisory",
          provider: {
            "@type": "RealEstateAgent",
            name: "Parkwood Properties Dubai",
            url: SITE_URL,
          },
          areaServed: {
            "@type": "City",
            name: "Dubai",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Dubai Real Estate Services",
            itemListElement: services.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `${s.title} Real Estate Service Dubai`,
                description: s.description,
              },
            })),
          },
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <PageHero
        kicker="Services"
        title="Five ways we work with you"
        body="From first viewing to keys in hand — buying, selling, renting, financing and handover, all handled in-house."
      />

      <SectionBlock>
        <div className="space-y-16 md:space-y-24">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <img
                src={service.image}
                alt={service.imageAlt ?? service.title}
                loading="lazy"
                width={1200}
                height={900}
                className={`aspect-[4/3] w-full object-cover ${i % 2 === 1 ? "md:order-2" : ""}`}
              />
              <div>
                <p className="label text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="display mt-3 text-3xl md:text-4xl">{service.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                {service.ctaLabel && service.ctaTo ? (
                  <div className="mt-8">
                    <Link to={service.ctaTo} className="btn-outline">
                      {service.ctaLabel}
                    </Link>
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </main>
  );
}
