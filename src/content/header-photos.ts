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
  workshops: {
    src: "/img/workshops-class-front",
    alt: "A full yoga pod class balancing in Warrior 3, facing the camera, under pink and purple studio light",
    widths: [640, 1100, 1600],
    width: 1600,
    height: 1067,
    tall: true,
  },
} satisfies Record<string, HeaderPhoto>;
