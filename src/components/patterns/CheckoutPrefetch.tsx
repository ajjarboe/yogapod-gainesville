import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ARKETA_ORIGIN,
  checkoutHref,
  checkoutWait,
  comboKeys,
  offeringKeys,
  warmupWaves,
} from "@/content/checkout";
import { site } from "@/content/site";

type WarmupApi = {
  tryOpen: (href: string) => boolean;
  prefer: (href: string) => void;
};

const WarmupContext = createContext<WarmupApi>({
  tryOpen: () => false,
  prefer: () => {},
});

export function useCheckoutWarmup() {
  return useContext(WarmupContext);
}

function checkoutPath(href: string) {
  try {
    return new URL(href, site.siteUrl).pathname;
  } catch {
    return "";
  }
}

const SETTLE_MS = 4000;
const COMBO_SETTLE_MS = 8000;
const LOAD_FALLBACK_MS = 15000;
const NEXT_GAP_MS = 2500;
const PAUSE_MS = 400;
const BACKGROUND = warmupWaves.flat();
const ALL_HREFS = offeringKeys.map((key) => checkoutHref(key));
const ALL_PATHS = new Set(ALL_HREFS.map(checkoutPath));
const COMBO_PATHS = new Set(comboKeys.map((key) => checkoutPath(checkoutHref(key))));
const ORIGIN = ARKETA_ORIGIN;

function settleMs(path: string) {
  return COMBO_PATHS.has(path) ? COMBO_SETTLE_MS : SETTLE_MS;
}

function WarmFrame({
  src,
  path,
  active,
  onLoaded,
}: {
  src: string;
  path: string;
  active: boolean;
  onLoaded: (path: string) => void;
}) {
  useEffect(() => {
    const id = window.setTimeout(() => onLoaded(path), LOAD_FALLBACK_MS);
    return () => window.clearTimeout(id);
  }, [path, onLoaded]);

  return (
    <iframe
      className={`checkout-warm-frame${active ? " is-active" : ""}`}
      title="Yoga Pod membership checkout"
      src={src}
      loading="eager"
      onLoad={() => onLoaded(path)}
      aria-hidden={!active}
      tabIndex={-1}
    />
  );
}

/** Use this so every buy button is ready when someone taps it, and so they see
 *  a loading screen on this site instead of a blank Arketa tab. */
export function CheckoutPrefetch({ children }: { children: ReactNode }) {
  const [started, setStarted] = useState<string[]>([]);
  const [loadedAt, setLoadedAt] = useState<Record<string, number>>({});
  const [readyPaths, setReadyPaths] = useState<Record<string, true>>({});
  const [openPath, setOpenPath] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const historyOpen = useRef(false);
  const openRef = useRef<string | null>(null);
  const open = Boolean(openPath);
  const waiting = Boolean(openPath && !readyPaths[openPath]);

  const closeCheckout = useCallback(() => {
    setOpenPath(null);
    if (historyOpen.current) {
      historyOpen.current = false;
      if (window.history.state && (window.history.state as { yogaPodCheckout?: boolean }).yogaPodCheckout) {
        window.history.back();
      }
    }
  }, []);

  const onLoaded = useCallback((path: string) => {
    setLoadedAt((current) => (current[path] ? current : { ...current, [path]: Date.now() }));
  }, []);

  const startSrc = useCallback((href: string, first = false) => {
    const path = checkoutPath(href);
    setStarted((current) => {
      const existing = current.findIndex((src) => checkoutPath(src) === path);
      if (existing === -1) return first ? [href, ...current] : [...current, href];
      if (!first || existing === 0) return current;
      const next = current.slice();
      const [item] = next.splice(existing, 1);
      return [item, ...next];
    });
  }, []);

  useEffect(() => {
    openRef.current = openPath;
  }, [openPath]);

  useEffect(() => {
    const timers: number[] = [];
    Object.entries(loadedAt).forEach(([path, at]) => {
      const remaining = settleMs(path) - (Date.now() - at);
      if (remaining <= 0) {
        setReadyPaths((current) => (current[path] ? current : { ...current, [path]: true }));
        return;
      }
      timers.push(
        window.setTimeout(() => {
          setReadyPaths((current) => ({ ...current, [path]: true }));
        }, remaining),
      );
    });
    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [loadedAt]);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;

    let index = 0;
    let timer = 0;
    const pump = () => {
      if (openRef.current) {
        timer = window.setTimeout(pump, PAUSE_MS);
        return;
      }
      if (index >= BACKGROUND.length) return;
      startSrc(checkoutHref(BACKGROUND[index]));
      index += 1;
      if (index < BACKGROUND.length) timer = window.setTimeout(pump, NEXT_GAP_MS);
    };

    const start = () => {
      pump();
    };
    let idle = 0;
    if (typeof window.requestIdleCallback === "function") {
      idle = window.requestIdleCallback(start, { timeout: 4000 });
    } else {
      idle = window.setTimeout(start, 2500);
    }

    return () => {
      window.clearTimeout(timer);
      if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle);
      else window.clearTimeout(idle);
    };
  }, [startSrc]);

  useEffect(() => {
    const onPop = () => {
      if (!historyOpen.current) return;
      historyOpen.current = false;
      setOpenPath(null);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (!historyOpen.current) {
      window.history.pushState({ yogaPodCheckout: true }, "");
      historyOpen.current = true;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCheckout();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeCheckout]);

  const prefer = useCallback(
    (next: string) => {
      const path = checkoutPath(next);
      if (!ALL_PATHS.has(path)) return;
      startSrc(next, true);
    },
    [startSrc],
  );

  const tryOpen = useCallback(
    (next: string) => {
      const path = checkoutPath(next);
      if (!ALL_PATHS.has(path)) return false;
      startSrc(next, true);
      setOpenPath(path);
      return true;
    },
    [startSrc],
  );

  return (
    <WarmupContext.Provider value={{ tryOpen, prefer }}>
      {children}
      <link rel="preconnect" href={ORIGIN} />
      <link rel="dns-prefetch" href={ORIGIN} />
      <link rel="prefetch" href={checkoutHref("intro")} as="document" />
      <div
        ref={dialogRef}
        className={`checkout-warm${open ? " is-open" : ""}${waiting ? " is-waiting" : ""}`}
        aria-busy={waiting}
        aria-hidden={!open}
        {...(open ? { role: "dialog", "aria-modal": true, "aria-label": "Membership checkout", tabIndex: -1 } : {})}
      >
        <div className="checkout-warm-bar">
          <div className="checkout-warm-actions">
            <button className="btn btn-ghost" type="button" onClick={closeCheckout}>
              Back to yoga pod
            </button>
          </div>
        </div>
        <div className="checkout-warm-stage">
          {waiting ? (
            <div className="checkout-warm-wait" role="status" aria-live="polite">
              <span className="checkout-warm-spin" aria-hidden="true" />
              <h2>{checkoutWait.title}</h2>
              <p className="lede">{checkoutWait.lede}</p>
            </div>
          ) : null}
          {started.map((src) => {
            const path = checkoutPath(src);
            const active = openPath === path;
            return <WarmFrame key={path} src={src} path={path} active={active} onLoaded={onLoaded} />;
          })}
        </div>
      </div>
    </WarmupContext.Provider>
  );
}
