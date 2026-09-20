import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/patterns/Photo";

/** Use this for the looping hero video. People who asked the page not to move
 *  see the still instead. The clip pauses as soon as it leaves the screen. */
export function VideoBackdrop({
  src,
  poster,
  posterWidths,
  width,
  height,
  alt,
}: {
  src: string;
  poster: string;
  posterWidths: number[];
  width: number;
  height: number;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !motion) return;

    let onScreen = true;
    const sync = () => {
      if (onScreen && document.visibilityState === "visible") el.play().catch(() => {});
      else el.pause();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      el.pause();
    };
  }, [motion]);

  if (!motion) {
    return (
      <Photo
        src={poster}
        alt={alt}
        widths={posterWidths}
        sizes="100vw"
        width={width}
        height={height}
        className="hero-media"
        priority
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="hero-media"
      src={src}
      poster={`${poster}-${posterWidths.includes(1100) ? 1100 : posterWidths.at(-1)}.jpg`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-label={alt}
    />
  );
}
