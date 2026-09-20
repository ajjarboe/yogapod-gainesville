import { useEffect, useState } from "react";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";

/** Use this for the bar that appears after the hero button scrolls away. */
export function StickyCta({ label = "Try $30 for 30 days" }: { label?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const trigger = document.querySelector(".hero");
    if (!trigger || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    io.observe(trigger);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`sticky-cta${show ? " show" : ""}`} aria-hidden={!show}>
      <CheckoutLink offering="intro">{label}</CheckoutLink>
    </div>
  );
}
