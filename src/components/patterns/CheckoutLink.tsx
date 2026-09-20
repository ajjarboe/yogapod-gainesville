import type { MouseEvent, ReactNode } from "react";
import { useCheckoutWarmup } from "@/components/patterns/CheckoutPrefetch";
import { checkoutHref, type OfferingKey } from "@/content/checkout";

/** Use this for anything that sends someone to buy. Never hand-write a checkout URL. */
export function CheckoutLink({
  offering,
  children,
  variant = "primary",
}: {
  offering: OfferingKey;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const href = checkoutHref(offering);
  const { tryOpen, prefer } = useCheckoutWarmup();

  function handlePrefer() {
    prefer(href);
  }

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (tryOpen(href)) event.preventDefault();
  }

  return (
    <a
      className={variant === "primary" ? "btn btn-primary" : "btn btn-ghost"}
      href={href}
      onClick={handleClick}
      onPointerEnter={handlePrefer}
      onFocus={handlePrefer}
      onTouchStart={handlePrefer}
    >
      {children}
    </a>
  );
}
