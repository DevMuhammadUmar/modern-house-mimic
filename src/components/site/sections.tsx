import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  body,
  image,
  imageAlt,
}: {
  kicker: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={image ? "grid md:grid-cols-[2fr_1fr]" : ""}>
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          width={1600}
          height={1104}
          className="h-[34vh] w-full object-cover sm:h-[40vh] md:h-[60vh]"
        />
      ) : null}
      <div className="flex flex-col justify-center gap-5 bg-accent px-5 py-10 sm:gap-6 sm:px-8 sm:py-14 md:px-12">
        <p className="label self-start border-b border-foreground/30 pb-2">{kicker}</p>
        <h1 className="display text-2xl sm:text-3xl md:text-[2.4rem]">{title}</h1>
        {body ? (
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {body}
          </p>
        ) : null}
      </div>
    </section>
  );
}

export function SectionBlock({
  title,
  action,
  children,
  tone = "default",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  tone?: "default" | "accent";
}) {
  return (
    <section
      className={`border-t border-border px-5 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24 ${
        tone === "accent" ? "bg-accent" : ""
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
        {title || action ? (
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            {title ? <h2 className="label">{title}</h2> : <span />}
            {action}
          </div>
        ) : null}
        <div className={title || action ? "mt-8 sm:mt-10 md:mt-14" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function ProseColumns({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
      <h2 className="display text-2xl md:text-3xl">{title}</h2>
      <div className="space-y-4 sm:space-y-5">
        {body.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
