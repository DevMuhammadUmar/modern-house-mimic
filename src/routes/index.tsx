import { createFileRoute } from "@tanstack/react-router";

import hero from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fieldhouse — Architectural Homes For Sale" },
      {
        name: "description",
        content:
          "Fieldhouse is an estate agency for design-led living: modernist houses, converted warehouses and architect-designed apartments across the UK.",
      },
      { property: "og:title", content: "Fieldhouse — Architectural Homes For Sale" },
      {
        property: "og:description",
        content:
          "An estate agency for design-led living. Browse modernist houses, warehouse conversions and architect-designed apartments.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Listing = {
  name: string;
  price: string;
  place: string;
  tenure: string;
  image: string;
  tag?: string;
};

const prime: Listing[] = [
  {
    name: "Reighton Barn",
    price: "£3,350,000",
    place: "Tenterden, Kent",
    tenure: "Freehold",
    image: p6,
  },
  {
    name: "Pine Grove",
    price: "£2,850,000",
    place: "London N20",
    tenure: "Freehold",
    image: p1,
  },
  {
    name: "Long Meadow",
    price: "£1,975,000",
    place: "Berkhamsted, Hertfordshire",
    tenure: "Freehold",
    image: p3,
  },
];

const recent: Listing[] = [
  {
    name: "St Asaph Road",
    price: "£575,000",
    place: "London SE4",
    tenure: "Leasehold",
    image: p2,
    tag: "New",
  },
  {
    name: "Marlowe Court",
    price: "£465,000",
    place: "London SE19",
    tenure: "Leasehold",
    image: p5,
    tag: "New",
  },
  {
    name: "Butterfield House",
    price: "£1,250,000",
    place: "London N16",
    tenure: "Freehold",
    image: p4,
    tag: "New",
  },
];

const journal = [
  {
    kicker: "At home with",
    title: "A garden designer on making a quiet house out of a loud life",
    image: p6,
  },
  {
    kicker: "Guide",
    title: "Eight things to know before buying a listed modernist house",
    image: p1,
  },
  {
    kicker: "Interiors",
    title: "The slow craft of finishing a room in lime plaster and oak",
    image: p2,
  },
];

function Card({ listing }: { listing: Listing }) {
  return (
    <a href="#" className="group block">
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
    </a>
  );
}

function Section({
  title,
  action,
  children,
}: {
  title: string;
  action: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between gap-6">
          <h2 className="label">{title}</h2>
          <a href="#" className="btn-outline">
            {action}
          </a>
        </div>
        <div className="mt-10 grid gap-x-6 gap-y-12 md:mt-14 md:grid-cols-3">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <nav className="mx-auto grid max-w-[1400px] grid-cols-3 items-center px-6 py-5 md:px-10">
          <ul className="hidden gap-7 md:flex">
            {["Buy", "Sell", "Prime"].map((i) => (
              <li key={i}>
                <a href="#" className="label hover:opacity-60">
                  {i}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/"
            className="col-span-2 md:col-span-1 md:text-center"
            aria-label="Fieldhouse home"
          >
            <span
              className="font-serif text-lg tracking-[0.24em] uppercase md:text-xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Fieldhouse
            </span>
          </a>
          <ul className="hidden justify-end gap-7 md:flex">
            {["Journal", "Newsletter", "Alerts", "Search"].map((i) => (
              <li key={i}>
                <a href="#" className="label hover:opacity-60">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section className="grid md:grid-cols-[2fr_1fr]">
          <img
            src={hero}
            alt="Stone-walled hallway of an architect-designed house with a walnut sideboard"
            width={1600}
            height={1104}
            className="h-[52vh] w-full object-cover md:h-[78vh]"
          />
          <div className="flex flex-col justify-center gap-6 bg-accent px-8 py-14 md:px-12">
            <p className="label border-b border-foreground/30 pb-2 self-start">
              Today at Fieldhouse
            </p>
            <h1 className="display text-3xl md:text-[2.6rem]">
              Modern Meadow: an eco-conscious house at the edge of the Sussex coast
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
              Built from timber, lime and glass, this five-bedroom house sits low in its meadow and
              takes its light from three directions.
            </p>
            <a href="#" className="btn-outline self-start">
              Read more
            </a>
          </div>
        </section>

        <Section title="Prime" action="View all prime">
          {prime.map((l) => (
            <Card key={l.name} listing={l} />
          ))}
        </Section>

        <Section title="New this week" action="View all new">
          {recent.map((l) => (
            <Card key={l.name} listing={l} />
          ))}
        </Section>

        <section className="border-t border-border bg-accent px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-center justify-between gap-6">
              <h2 className="label">The Journal</h2>
              <a href="#" className="btn-outline">
                All stories
              </a>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-12 md:mt-14 md:grid-cols-3">
              {journal.map((j) => (
                <a key={j.title} href="#" className="group block">
                  <img
                    src={j.image}
                    alt={j.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover transition-opacity duration-500 group-hover:opacity-85"
                  />
                  <p className="label mt-4 text-muted-foreground">{j.kicker}</p>
                  <h3 className="display mt-2 text-2xl">{j.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="display text-3xl md:text-4xl">Thinking of selling?</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We photograph, write and place each house ourselves — and send it to an audience of
              300,000 people who care about design.
            </p>
            <form
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="w-full border border-input bg-background px-4 py-3 text-base outline-none focus:border-foreground sm:w-80"
              />
              <button type="submit" className="btn-outline w-full sm:w-auto">
                Request a valuation
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-14 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-4">
          <p
            className="text-lg tracking-[0.24em] uppercase"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Fieldhouse
          </p>
          {[
            { h: "Browse", l: ["Houses", "Apartments", "Prime", "Sold"] },
            { h: "Company", l: ["About", "Team", "Careers", "Contact"] },
            { h: "Follow", l: ["Newsletter", "Instagram", "Podcast", "Press"] },
          ].map((c) => (
            <div key={c.h}>
              <h3 className="label text-muted-foreground">{c.h}</h3>
              <ul className="mt-4 space-y-2">
                {c.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-base hover:opacity-60">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="label mx-auto mt-14 max-w-[1400px] text-muted-foreground">
          © {new Date().getFullYear()} Fieldhouse — an estate agency for design-led living
        </p>
      </footer>
    </div>
  );
}
