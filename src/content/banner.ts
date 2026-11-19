import { workshopHref } from "@/content/checkout";

/**
 * The strip across the top of every page.
 * `buttons` are the outlined pills; `links` are the small underlined text links after them.
 * Change `storageKey` whenever the message changes, so people who closed the old strip see the new one.
 * Remove a workshop button once it has happened (and from the Workshops page in education.ts).
 */
export const banner = {
  label: "Upcoming workshops",
  storageKey: "yp-workshops-dec-dismissed",
  title: "**December workshops at the NW studio.** [See all workshops](/workshops/)",
  buttons: [
    {
      label: "Yin & Nidra Staycation · Dec 12–13",
      href: workshopHref("yinNidraStaycation"),
    },
    {
      label: "Slow Flow + Restore · Dec 20",
      href: workshopHref("slowFlowRestore"),
    },
  ],
  links: [
    {
      label: "Visit RITUAL",
      href: "https://ritualgainesville.com/",
    },
  ],
} as const;
