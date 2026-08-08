import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { company, nav } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <Link to="/" aria-label={`${company.name} home`} onClick={() => setOpen(false)}>
          <span
            className="text-lg tracking-[0.24em] uppercase md:text-xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {company.name}
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
          className="label inline-flex items-center gap-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div id="mobile-nav" className="border-t border-border md:hidden">
          <ul className="mx-auto max-w-[1400px] px-6 py-4">
            {nav.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="label block py-4 hover:opacity-60"
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
