import { useEffect, useRef } from "react";
import { ARKETA_ORIGIN } from "@/content/checkout";

const EMBED_SCRIPT = `${ARKETA_ORIGIN}/scripts/embed.js`;

/** Booking runs entirely in the provider's iframe. It reports its content height
 *  by postMessage; without this listener the frame stays at its minimum and the
 *  calendar scrolls inside itself. Pass `priority` when the calendar is the
 *  reason someone opened the page. */
export function BookingFrame({
  src,
  title,
  priority = false,
}: {
  src: string;
  title: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = EMBED_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== ARKETA_ORIGIN) return;
      const height = Number.parseInt(event.data?.frameHeight, 10);
      if (!ref.current || !Number.isFinite(height) || height <= 300) return;
      ref.current.style.height = `${height + 24}px`;
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      className="booking"
      src={src}
      title={title}
      scrolling="no"
      allow="payment"
      loading={priority ? "eager" : "lazy"}
    />
  );
}
