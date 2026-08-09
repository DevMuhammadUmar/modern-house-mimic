import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Horizontal scroll-snap carousel with left/right arrow controls.
 * Used for the Communities and Services rows on the home page.
 */
export function Carousel({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => update();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={update}
        role="group"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label={`Previous ${label}`}
          disabled={atStart}
          onClick={() => scrollBy(-1)}
          className="inline-flex size-11 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label={`Next ${label}`}
          disabled={atEnd}
          onClick={() => scrollBy(1)}
          className="inline-flex size-11 items-center justify-center border border-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function CarouselItem({ children }: { children: ReactNode }) {
  return (
    <div className="w-[82%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">{children}</div>
  );
}
