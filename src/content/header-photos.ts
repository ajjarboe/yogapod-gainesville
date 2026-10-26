import type { HeaderPhoto } from "@/components/patterns/PageHeader";

/** Photos behind each interior page title. Swap a photo here; files live in public/img/. */

export const headerPhotos = {
  ourClasses: {
    src: "/img/our-classes-twist",
    alt: "A student in a seated twist with one hand raised, glancing over her shoulder under blue studio light",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1350,
    focus: "top",
    tall: true,
  },
} satisfies Record<string, HeaderPhoto>;
