import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

/** Use this when a section should show one horizontal row of cards or photos
 *  that people page through with left / right arrows (and swipe on phones),
 *  instead of a wrapping grid. `variant="flush"` packs photos edge to edge
 *  with no space between them; the default keeps a gap for cards. */
export function Carousel({
  title,
  label,
  variant = "cards",
  children,
}: {
  title: string;
  label: string;
  variant?: "cards" | "flush";
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const page = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: "smooth" });
  };

  const hideArrows = atStart && atEnd;

  return (
    <div className="carousel">
      <div className="carousel-head">
        <h2 className="display-md">{title}</h2>
        {!hideArrows && (
          <div className="carousel-nav">
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => page(-1)}
              disabled={atStart}
              aria-label={`Previous ${label}`}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="carousel-arrow"
              onClick={() => page(1)}
              disabled={atEnd}
              aria-label={`Next ${label}`}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div
        ref={track}
        className={variant === "flush" ? "carousel-track carousel-flush" : "carousel-track"}
        role="region"
        aria-label={title}
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
}
