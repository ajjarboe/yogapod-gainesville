/** Use this for every photo. `widths` must match the files that actually exist
 *  in public/img — the build does not generate sizes. Pass `width` and `height`
 *  of the largest file so the page does not jump while the image loads. */
export function Photo({
  src,
  alt,
  widths,
  sizes,
  width,
  height,
  className = "media",
  priority = false,
}: {
  src: string;
  alt: string;
  widths: number[];
  sizes: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  const srcSet = widths.map((w) => `${src}-${w}.jpg ${w}w`).join(", ");
  const fallback = `${src}-${widths.at(-1)}.jpg`;

  return (
    <img
      className={className}
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding={priority ? "sync" : "async"}
    />
  );
}
