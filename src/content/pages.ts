import { pageMetaSchema } from "@/content/schema";

/** One entry per route. The title and description here must match the matching
 *  index.html, which is what search engines and link previews actually read. */
export const pages = {
  home: pageMetaSchema.parse({
    path: "/",
    title: "Gainesville Yoga Studio | Yoga Pod Gainesville",
    description:
      "Two Gainesville studios, over 200 classes a week. Yoga, HIIT and Pilates for every level. Try $30 for 30 days unlimited — no contracts, no strings attached.",
  }),
  ourClasses: pageMetaSchema.parse({
    path: "/our-classes/",
    title: "Our Classes | Yoga Pod Gainesville",
    description:
      "FLOW, HOT, FIT, YIN, BASICS, Sound and more. Every class style, its temperature and its length, so you can find the practice that fits your day.",
  }),
  ourStudios: pageMetaSchema.parse({
    path: "/our-studios/",
    title: "Our Studios | Yoga Pod Gainesville",
    description:
      "Two Gainesville locations, NW and SW, with medical-grade air filtration, cushioned flooring, spa-like locker rooms and ample parking.",
  }),
  ourTeam: pageMetaSchema.parse({
    path: "/our-team/",
    title: "Our Team | Yoga Pod Gainesville",
    description:
      "Locally owned and operated. Meet the owners and directors behind APEX | Yoga Pod — every one of them started here as a student first.",
  }),
  culture: pageMetaSchema.parse({
    path: "/culture/",
    title: "Our Culture | Yoga Pod Gainesville",
    description:
      "Breathe first. Cultivate discipline. Create community. Honor nature. Do the right thing. The mission, values and principles behind Yoga Pod Gainesville.",
  }),
  inclusivity: pageMetaSchema.parse({
    path: "/inclusivity/",
    title: "Inclusivity | Yoga Pod Gainesville",
    description:
      "Yoga Pod is a space of safety and acceptance. Our commitment to inclusivity, unity and a safe space for every student and every member of staff.",
  }),
  yourFirstClass: pageMetaSchema.parse({
    path: "/your-first-class/",
    title: "Your First Class | Yoga Pod Gainesville",
    description:
      "New to Yoga Pod? Start with $30 for 30 days unlimited. What to bring, what to expect, and everything to know before you walk in.",
  }),
  pricing: pageMetaSchema.parse({
    path: "/pricing/",
    title: "Pricing & Memberships | Yoga Pod Gainesville",
    description:
      "Intro offers, monthly and annual memberships, class packs, and Infinity memberships covering both yoga pod and APEX.",
  }),
  northwestSchedule: pageMetaSchema.parse({
    path: "/northwest-schedule/",
    title: "Northwest Schedule | Yoga Pod Gainesville",
    description:
      "Book a class at Yoga Pod Northwest, 4136 NW 16th Blvd. Over 200 classes each week across yoga, HIIT and Pilates.",
  }),
  southwestSchedule: pageMetaSchema.parse({
    path: "/southwest-schedule/",
    title: "Southwest Schedule | Yoga Pod Gainesville",
    description:
      "Book a class at Yoga Pod Southwest, 3045 SW 34th St. Over 200 classes each week across yoga, HIIT and Pilates.",
  }),
  events: pageMetaSchema.parse({
    path: "/events/",
    title: "Events & Workshops | Yoga Pod Gainesville",
    description:
      "Special events, workshops and community gatherings across both Gainesville studios. Everything on the calendar is bookable.",
  }),
  teacherTraining: pageMetaSchema.parse({
    path: "/teacher-training/",
    title: "Teacher Training | Yoga Pod Gainesville",
    description:
      "200-hour, FIT, HOT and YIN teacher trainings through our Yoga Alliance program. Learn to teach with a focus on practical application.",
  }),
  workshops: pageMetaSchema.parse({
    path: "/workshops/",
    title: "Workshops | Yoga Pod Gainesville",
    description:
      "Explore the subtleties of your yoga, fitness, meditation and breath work practices with your favorite teachers.",
  }),
  faq: pageMetaSchema.parse({
    path: "/faq/",
    title: "FAQ | Yoga Pod Gainesville",
    description:
      "Booking, waitlists, late cancel and no show policies, rentals, showers, memberships and more. Everything students ask us most.",
  }),
  careers: pageMetaSchema.parse({
    path: "/careers/",
    title: "Careers | Yoga Pod Gainesville",
    description:
      "Teacher, membership consultant and karma yogi applications. We hire from within our student community.",
  }),
  privacyPolicy: pageMetaSchema.parse({
    path: "/privacy-policy/",
    title: "Privacy Policy | Yoga Pod Gainesville",
    description: "How Yoga Pod Gainesville collects, uses and protects your personal information.",
  }),
  membershipChange: pageMetaSchema.parse({
    path: "/membership-change/",
    title: "Account Management | Yoga Pod Gainesville",
    description:
      "Upgrade, change, freeze or cancel your Yoga Pod membership. Every request is answered by a member of our team within 4 business days.",
  }),
  cancel: pageMetaSchema.parse({
    path: "/cancel/",
    title: "Cancel My Membership | Yoga Pod Gainesville",
    description:
      "Request to cancel your Yoga Pod Gainesville membership. Memberships require 30 days notice.",
  }),
  freeze: pageMetaSchema.parse({
    path: "/freeze/",
    title: "Freeze My Membership | Yoga Pod Gainesville",
    description:
      "Pause your Yoga Pod Gainesville membership while you are away and keep your rate when you return.",
  }),
  upgrade: pageMetaSchema.parse({
    path: "/upgrade/",
    title: "Upgrade My Membership | Yoga Pod Gainesville",
    description: "Move up to Unlimited, Annual or Infinity at Yoga Pod Gainesville.",
  }),
  downgrade: pageMetaSchema.parse({
    path: "/downgrade/",
    title: "Change My Membership | Yoga Pod Gainesville",
    description: "Step down to a Yoga Pod Gainesville membership that fits your week.",
  }),
  membershipThanks: pageMetaSchema.parse({
    path: "/membership-change/thanks/",
    title: "Request Received | Yoga Pod Gainesville",
    description: "We received your membership request and will reply within 4 business days.",
  }),
  notFound: pageMetaSchema.parse({
    path: "/404.html",
    title: "Page not found | Yoga Pod Gainesville",
    description: "That page does not exist. Find a class, our schedule, or our studios instead.",
  }),
};

export type PageKey = keyof typeof pages;
