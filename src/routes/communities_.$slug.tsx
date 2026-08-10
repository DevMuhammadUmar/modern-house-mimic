import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  GraduationCap,
  HeartPulse,
  LandPlot,
  Plane,
  ShoppingBag,
  Sparkles,
  Trees,
  Waves,
} from "lucide-react";
import type { ComponentType } from "react";

import { SectionBlock } from "@/components/site/sections";
import type { CommunityStat } from "@/content/communities";
import { getCommunityDetail } from "@/content/communities";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  area: LandPlot,
  park: Trees,
  school: GraduationCap,
  retail: ShoppingBag,
  clinic: HeartPulse,
  pool: Waves,
  plane: Plane,
  building: Building2,
};

export const Route = createFileRoute("/communities_/$slug")({
  loader: ({ params }) => {
    const community = getCommunityDetail(params.slug);
    if (!community) throw notFound();
    return { community };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Community not found — Parkwood Properties" }, { name: "robots", content: "noindex" }],
      };
    }
    const { community } = loaderData;
    const description =
      community.overview.paragraphs[0]?.slice(0, 155) ??
      `${community.name} — a Dubai community we advise on.`;
    const title = `${community.name} — Community Guide | Parkwood Properties`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CommunityNotFound,
  component: CommunityDetailPage,
});

function CommunityNotFound() {
  return (
    <main className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-2xl space-y-6">
        <h1 className="display text-3xl">Community not found</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          We could not find that community. Browse the full list instead.
        </p>
        <Link to="/communities" className="btn-outline">
          All communities
        </Link>
      </div>
    </main>
  );
}

function CommunityDetailPage() {
  const { community } = Route.useLoaderData();
  const [first, ...rest]: string[] = community.overview.paragraphs;

  return (
    <main>
      <section className="border-b border-border px-6 pt-10 pb-12 md:px-10 md:pt-14">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/communities"
            className="label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to communities
          </Link>

          <h1 className="display mt-8 text-3xl md:text-[2.6rem]">{community.name}</h1>

          <div className="mt-10 max-w-3xl">
            <h2 className="label border-b border-foreground/30 pb-2">
              {community.overview.heading}
            </h2>
            {first ? (
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{first}</p>
            ) : null}
          </div>
        </div>
      </section>

      {community.heroImage ? (
        <figure className="m-0">
          <div className="aspect-[16/7] w-full overflow-hidden bg-muted">
            <img
              src={community.heroImage}
              alt={`${community.name} community`}
              width={1600}
              height={700}
              className="h-full w-full object-cover"
            />
          </div>
          {community.heroCaption ? (
            <figcaption className="mx-auto max-w-[1400px] px-6 pt-3 text-sm text-muted-foreground md:px-10">
              {community.heroCaption}
            </figcaption>
          ) : null}
        </figure>
      ) : null}

      {rest.length ? (
        <section className="px-6 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-[1400px]">
            <div className="max-w-3xl space-y-5">
              {rest.map((p) => (
                <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {community.amenities ? (
        <SectionBlock tone="accent">
          <div className="max-w-3xl">
            <h2 className="label border-b border-foreground/30 pb-2">
              {community.amenities.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {community.amenities.intro}
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {community.amenities.stats.map((stat: CommunityStat) => {
              const Icon = icons[stat.icon] ?? Sparkles;
              return (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className={`flex flex-col gap-3 p-6 ${
                    stat.highlighted
                      ? "bg-foreground text-background"
                      : "bg-background"
                  }`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="display text-2xl">{stat.value}</dd>
                  <p
                    className={`text-sm ${
                      stat.highlighted ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </dl>
        </SectionBlock>
      ) : null}

      <SectionBlock>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="display text-2xl md:text-3xl">
            Interested in {community.name}?
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="btn-outline">
              Talk to us
            </Link>
            <Link to="/communities" className="btn-outline">
              All communities
            </Link>
          </div>
        </div>
      </SectionBlock>
    </main>
  );
}
