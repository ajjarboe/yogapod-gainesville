import type { HeaderPhoto } from "@/components/patterns/PageHeader";

/** Photos behind each interior page title. Swap a photo here; files live in public/img/. */

export const headerPhotos = {
  ourClasses: {
    src: "/img/our-classes-twist-full",
    alt: "A student in a seated twist with one hand raised, glancing over her shoulder under blue studio light",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1755,
    focus: "top",
    tall: true,
  },
  schedule: {
    src: "/img/schedule-prayer",
    alt: "A smiling yoga pod student with her hands at heart center in glowing pink and purple studio light",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 1200,
    focus: "top-right",
    tall: true,
    fitRight: true,
  },
  yourFirstClass: {
    src: "/img/first-class-warrior",
    alt: "A yoga pod class holding Warrior 2 in pink studio light, reflected in the mirror",
    widths: [640, 1100, 1600],
    width: 1600,
    height: 1067,
    focus: "upper",
  },
  ourStudios: {
    src: "/img/our-studios-storefront-centered",
    alt: "The APEX | yoga pod storefront at 4136 NW 16th Blvd, with the sign above the studio windows",
    widths: [640, 1100, 1800],
    width: 1800,
    height: 620,
  },
} satisfies Record<string, HeaderPhoto>;
