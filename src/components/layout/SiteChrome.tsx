import { useEffect, type ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyCta } from "@/components/layout/StickyCta";
import { UrgencyBanner } from "@/components/layout/UrgencyBanner";
import { CheckoutPrefetch } from "@/components/patterns/CheckoutPrefetch";
import { useHashScroll } from "@/lib/hash-scroll";

/** Phones can leave the page stuck after you switch away. Nudge it awake. */
function useWakeScroll() {
  useEffect(() => {
    const wake = (event: Event) => {
      if (event.type === "visibilitychange" && document.visibilityState !== "visible") return;
      const locked = document.querySelector(".checkout-warm.is-open");
      if (!locked) document.body.style.overflow = "";
      const y = window.scrollY;
      window.scrollTo(0, y + 1);
      window.scrollTo(0, y);
    };
    document.addEventListener("visibilitychange", wake);
    window.addEventListener("pageshow", wake);
    return () => {
      document.removeEventListener("visibilitychange", wake);
      window.removeEventListener("pageshow", wake);
    };
  }, []);
}

/** Use this to wrap every page: skip link, banner, header, footer, sticky mobile CTA. */
export function SiteChrome({
  path,
  children,
  sticky = true,
}: {
  path: string;
  children: ReactNode;
  sticky?: boolean;
}) {
  useHashScroll();
  useWakeScroll();

  return (
    <CheckoutPrefetch>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <UrgencyBanner />
      <SiteHeader path={path} />
      <main id="main">{children}</main>
      <SiteFooter />
      {sticky ? <StickyCta /> : null}
    </CheckoutPrefetch>
  );
}
