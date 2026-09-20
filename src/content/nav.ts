import { navGroupSchema, navLinkSchema } from "@/content/schema";
import { site } from "@/content/site";

/** Header nav. Groups become a dropdown on desktop and a labelled block in the drawer. */
export const nav = [
  navGroupSchema.parse({
    label: "Schedule",
    links: [
      { href: "/northwest-schedule/", label: "Northwest" },
      { href: "/southwest-schedule/", label: "Southwest" },
      { href: site.apex.scheduleHref, label: "APEX NW & SW" },
    ],
  }),
  navGroupSchema.parse({
    label: "About",
    links: [
      { href: "/our-classes/", label: "Our Classes" },
      { href: "/our-studios/", label: "Our Studios" },
      { href: "/our-team/", label: "Our Team" },
      { href: "/culture/", label: "Our Culture" },
    ],
  }),
  navLinkSchema.parse({ href: "/events/", label: "Events" }),
  navLinkSchema.parse({ href: "/your-first-class/", label: "Your First Class" }),
  navLinkSchema.parse({ href: "/pricing/", label: "Pricing" }),
  navGroupSchema.parse({
    label: "Education",
    links: [
      { href: "/teacher-training/", label: "Teacher Training" },
      { href: "/workshops/", label: "Workshops" },
    ],
  }),
];

export const headerCta = { href: "/northwest-schedule/", label: "Book Now" };
