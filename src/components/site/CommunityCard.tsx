import { Link } from "@tanstack/react-router";

import type { Community } from "@/content/site";

export function CommunityCard({ community }: { community: Community }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        to="/communities/$slug"
        params={{ slug: community.slug }}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        aria-label={`View ${community.name}`}
      >
        <div className="h-64 shrink-0 overflow-hidden bg-muted">
          <img
            src={community.image}
            alt={`${community.name} community in Dubai`}
            loading="lazy"
            width={1200}
            height={900}
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="display text-xl">{community.name}</h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            {community.description}
          </p>
        </div>
      </Link>
      <div className="mt-3">
        <Link
          to="/communities/$slug"
          params={{ slug: community.slug }}
          className="btn-outline"
        >
          {community.ctaLabel ?? "Explore community"}
        </Link>
      </div>
    </article>
  );
}
