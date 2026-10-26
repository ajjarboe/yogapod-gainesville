import type { ReactNode } from "react";
import { Photo } from "@/components/patterns/Photo";

export type HeaderPhoto = {
  /** Path without the size, e.g. "/img/our-classes-twist". */
  src: string;
  alt: string;
  /** Widths that exist in public/img, smallest first. */
  widths: number[];
  /** Size of the largest file. */
  width: number;
  height: number;
  /**
   * "upper" keeps more of the top of the photo in view (heads, shoulders).
   * "top" pins the very top edge: use this when heads or raised hands sit near the top.
   * "lower" slides the photo up so more of the bottom shows.
   * "top-right" pins the top edge and, on phones, keeps the right side in view (subject on the right).
   */
  focus?: "upper" | "top" | "lower" | "top-right";
  /** A taller banner, so more of the photo shows on wide screens. */
  tall?: boolean;
  /**
   * "Zoom out" on wide screens: show the whole photo on the right, fading into the dark
   * background behind the title. Use for a photo whose subject is on the right.
   */
  fitRight?: boolean;
};

/**
 * Use this at the top of every interior page. The home page uses Hero instead.
 * Pass `photo` (from content/header-photos.ts) to put a studio photo behind the
 * title, like the APEX site; the title sits in the lower-left corner and only the
 * bottom is darkened. Photo headers carry the title only: put any intro line in
 * the first section below. Leave `photo` out for the plain warm box.
 */
export function PageHeader({
  eyebrow,
  title,
  lede,
  photo,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  photo?: HeaderPhoto;
  children?: ReactNode;
}) {
  if (photo) {
    return (
      <section className={photo.tall ? "page-photo page-photo-tall" : "page-photo"}>
        <Photo
          src={photo.src}
          alt={photo.alt}
          widths={photo.widths}
          width={photo.width}
          height={photo.height}
          sizes="100vw"
          className={["hero-media", photo.focus ? `focus-${photo.focus}` : "", photo.fitRight ? "fit-right" : ""]
            .filter(Boolean)
            .join(" ")}
          priority
        />
        <div className="page-photo-scrim" />
        <div className="shell page-photo-inner">
          <h1 className="display-lg">{title}</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="band band-warm">
      <div className="shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="display-lg mt-3">{title}</h1>
        {lede ? <p className="lede mt-5">{lede}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
