import type { Listing } from "@/content/site";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group block">
      <div className="relative overflow-hidden bg-muted">
        <img
          src={listing.image}
          alt={`${listing.name}, ${listing.place}`}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        {listing.tag ? (
          <span className="label absolute left-0 top-0 bg-background px-3 py-2">{listing.tag}</span>
        ) : null}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="display text-xl">{listing.name}</h3>
        <p className="text-base text-muted-foreground">{listing.price}</p>
        <p className="label pt-1 text-muted-foreground">
          {listing.place} · {listing.tenure}
        </p>
      </div>
    </article>
  );
}
