import { useEffect } from "react";

/**
 * Use this so opening /pricing/#upgrade lands on the upgrade cards.
 *
 * The browser jumps to the hash before the banner has measured itself and
 * before the display fonts swap in, so the position it picks is stale by the
 * time anything is on screen. This re-runs the jump once layout has settled,
 * and gives up the moment the person scrolls for themselves.
 */
export function useHashScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash.length < 2 || hash === "#main") return;

    let target: Element | null = null;
    try {
      target = document.querySelector(hash);
    } catch {
      return;
    }
    if (!target) return;

    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    const settle = () => {
      if (cancelled) return;
      target.scrollIntoView({ block: "start", behavior: "instant" });
    };

    // wheel / touch / key rather than scroll, so our own scrolling does not
    // look like the person taking over
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", cancel);

    const frame = requestAnimationFrame(() => requestAnimationFrame(settle));
    const timer = window.setTimeout(settle, 400);
    document.fonts?.ready.then(settle);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", cancel);
    };
  }, []);
}
