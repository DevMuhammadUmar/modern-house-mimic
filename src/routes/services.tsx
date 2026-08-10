import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero, SectionBlock } from "@/components/site/sections";
import { services } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Buy, Sell, Rent, Mortgage & Handover" },
      {
        name: "description",
        content:
          "Parkwood Properties services: buying, selling, renting, mortgage guidance and property handover across Dubai's Emaar communities.",
      },
      { property: "og:title", content: "Services — Buy, Sell, Rent, Mortgage & Handover" },
      {
        property: "og:description",
        content: "Five services, handled in-house: Buy, Sell, Rent, Mortgage and Property Handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://modern-house-mimic.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://modern-house-mimic.lovable.app/services" }],
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
                alt={service.title}
                loading="lazy"
                width={1200}
                height={900}
                className={`aspect-[4/3] w-full object-cover ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              />
              <div>
                <p className="label text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
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
