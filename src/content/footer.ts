import { site } from "@/content/site";

export const footer = {
  columns: [
    {
      heading: "Practice",
      links: [
        { href: "/our-classes/", label: "Our Classes" },
        { href: "/your-first-class/", label: "Your First Class" },
        { href: "/pricing/", label: "Pricing" },
        { href: "/events/", label: "Events" },
      ],
    },
    {
      heading: "Schedule",
      links: [
        { href: "/northwest-schedule/", label: "Northwest" },
        { href: "/southwest-schedule/", label: "Southwest" },
        { href: site.apex.scheduleHref, label: "APEX NW & SW" },
      ],
    },
    {
      heading: "Studio",
      links: [
        { href: "/our-studios/", label: "Our Studios" },
        { href: "/our-team/", label: "Our Team" },
        { href: "/culture/", label: "Our Culture" },
        { href: "/inclusivity/", label: "Inclusivity" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { href: "/teacher-training/", label: "Teacher Training" },
        { href: "/workshops/", label: "Workshops" },
        { href: "/faq/", label: "FAQ" },
        { href: "/careers/", label: "Careers" },
        { href: "/membership-change/", label: "Account Management" },
      ],
    },
  ],
  legal: [{ href: "/privacy-policy/", label: "Privacy Policy" }],
};
