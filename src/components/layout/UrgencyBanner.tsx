import { useLayoutEffect, useRef, useSyncExternalStore } from "react";
import { banner } from "@/content/banner";
import { RichText } from "@/lib/rich-text";

const listeners = new Set<() => void>();

function readDismissed() {
  try {
    return sessionStorage.getItem(banner.storageKey) === "1";
  } catch {
    return false;
  }
}

/**
 * The prerendered HTML always contains the banner, so the first client render
 * has to agree with it. Reading sessionStorage during that render strands the
 * prerendered strip in the DOM — visible, but no longer React's to remove.
 * useSyncExternalStore gives the server answer during hydration and the real
 * one straight after.
 */
function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function markDismissed() {
  try {
    sessionStorage.setItem(banner.storageKey, "1");
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
}

/** Use this for the dismissible strip at the top. */
export function UrgencyBanner() {
  const dismissed = useSyncExternalStore(subscribe, readDismissed, () => false);
  const visible = !dismissed;
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!visible) {
      document.body.classList.remove("has-banner");
      document.documentElement.style.setProperty("--announce-h", "0px");
      return;
    }
    document.body.classList.add("has-banner");
    const el = ref.current;
    if (!el) return;
    const size = () => {
      document.documentElement.style.setProperty("--announce-h", `${el.offsetHeight || 47}px`);
    };
    size();
    window.addEventListener("resize", size, { passive: true });
    const ro = window.ResizeObserver ? new ResizeObserver(size) : null;
    ro?.observe(el);
    return () => {
      window.removeEventListener("resize", size);
      ro?.disconnect();
    };
  }, [visible]);

  if (!visible) return null;

  function dismiss() {
    document.body.classList.remove("has-banner");
    document.documentElement.style.setProperty("--announce-h", "0px");
    markDismissed();
  }

  return (
    <div className="rbanner ready" id="rbanner" role="region" aria-label={banner.label} ref={ref}>
      <div className="rbanner-in">
        <div className="rbanner-row">
          <span className="rbanner-line">
            <RichText text={banner.title} />
          </span>
          {banner.links.map((link) => (
            <a
              key={link.label}
              className="rbanner-cta"
              href={link.href}
              target="_blank"
              rel="noopener"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <button className="rbanner-x" type="button" aria-label="Dismiss this banner" onClick={dismiss}>
        ×
      </button>
    </div>
  );
}
