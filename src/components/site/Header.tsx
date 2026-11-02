import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { company, nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2.5 sm:gap-6 sm:px-6 md:px-10 md:py-3">
        <Link
          to="/"
          aria-label={`${company.name} home`}
          onClick={() => setOpen(false)}
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5"
        >
          <img
            src={company.logo}
            alt="Parkwood Properties"
            width={816}
            height={816}
            className="h-8 w-auto shrink-0 object-contain sm:h-9 md:h-11"
          />
          <span className="flex min-w-0 flex-col leading-tight">
            <span
              className="truncate text-[0.75rem] tracking-[0.16em] uppercase sm:text-sm sm:tracking-[0.2em] md:text-base"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {company.name}
            </span>
            <span className="label truncate text-[0.45rem] text-muted-foreground sm:text-[0.55rem] md:text-[0.6rem]">
              {company.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="label hover:opacity-60"
                activeProps={{ className: "label opacity-60" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="label -mr-2 inline-flex shrink-0 items-center gap-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
          <span className="sr-only sm:not-sr-only">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <ul className="mx-auto max-w-[1400px] px-5 py-3 sm:px-6">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="label block py-3.5 hover:opacity-60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
