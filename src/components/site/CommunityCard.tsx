import type { Community } from "@/content/site";

export function CommunityCard({
  community,
  ctaHref = "/contact",
}: {
  community: Community;
  ctaHref?: string;
}) {
  return (
    <article className="group block">
      <div className="overflow-hidden bg-muted">
        <img
          src={community.image}
          alt={community.name}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="display text-xl">{community.name}</h3>
        <p className="text-base leading-relaxed text-muted-foreground">{community.description}</p>
        {community.ctaLabel ? (
          <a href={ctaHref} className="btn-outline mt-3">
            {community.ctaLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
