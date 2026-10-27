import { createFileRoute, Link } from "@tanstack/react-router";

import { about, company } from "@/content/site";
import { buildHead, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...buildHead({
      title: "About Us | Parkwood Properties Dubai",
      description:
        "Learn about Parkwood Properties, a Dubai real estate consultancy specializing in secondary market residential property across Emaar's masterplanned communities.",
      path: "/about",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "@id": "https://parkwoodproperties.ae/about#webpage",
          name: "About Us | Parkwood Properties Dubai",
          url: `${SITE_URL}/about`,
          description:
            "Learn about Parkwood Properties, a Dubai real estate consultancy specializing in secondary market residential property across Emaar's masterplanned communities.",
          isPartOf: {
            "@type": "WebSite",
            "@id": "https://parkwoodproperties.ae/#website",
            name: "Parkwood Properties Dubai",
            url: SITE_URL,
          },
          mainEntity: {
            "@type": "RealEstateAgent",
            "@id": "https://parkwoodproperties.ae/#organization",
            name: "Parkwood Properties Dubai",
            url: SITE_URL,
            email: company.email,
            areaServed: "Dubai, United Arab Emirates",
          },
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="grid md:grid-cols-[3fr_2fr]">
        <div className="aspect-[16/9] w-full overflow-hidden md:aspect-auto md:h-[60vh]">
          <img
            src={about.hero.image}
            alt={about.hero.imageAlt}
            width={1600}
            height={900}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 bg-accent px-6 py-12 sm:gap-6 sm:px-10 sm:py-16 md:px-14">
          <p className="label self-start border-b border-foreground/30 pb-2">{about.hero.kicker}</p>
          <h1 className="display text-2xl sm:text-3xl md:text-[2.4rem] leading-tight">{about.hero.title}</h1>
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.hero.body}
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="border-t border-border px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="display mb-10 text-center text-2xl sm:text-3xl md:text-4xl">
            {about.intro.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {about.intro.body.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg border-t border-border pt-6">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="border-t border-border bg-accent px-0">
        <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 items-stretch">
          <div className="aspect-[16/9] w-full overflow-hidden md:aspect-auto">
            <img
              src={about.story.image}
              alt={about.story.imageAlt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-8 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
            <h2 className="display text-2xl sm:text-3xl md:text-4xl">{about.story.title}</h2>
            <div className="space-y-5">
              {about.story.body.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="border-t border-border px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="display mb-12 text-center text-2xl sm:text-3xl md:text-4xl">How we work</h2>
          <div className="grid gap-0 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {about.values.map((v, i) => (
              <div key={v.title} className="py-8 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0">
                <span className="display text-4xl text-foreground/10 font-medium block mb-4">0{i + 1}</span>
                <h3 className="display text-xl md:text-2xl mb-3">{v.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ── */}
      <section className="border-t border-border bg-accent px-6 py-16 sm:px-8 sm:py-20 md:px-10 md:py-28">
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
