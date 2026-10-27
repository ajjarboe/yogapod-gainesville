import { pageMetaSchema } from "@/content/schema";

/** One entry per route. The title and description here must match the matching
 *  index.html, which is what search engines and link previews actually read. */
export const pages = {
  home: pageMetaSchema.parse({
    path: "/",
    title: "Gainesville Yoga Studio | yoga pod Gainesville",
    description:
      "Two Gainesville studios, over 200 classes a week. Yoga, HIIT and Pilates for every level. Try $30 for 30 days unlimited — no contracts, no strings attached.",
  }),
  ourClasses: pageMetaSchema.parse({
    path: "/our-classes/",
    title: "Our Classes | yoga pod Gainesville",
    description:
      "FLOW, HOT, FIT, YIN, BASICS, Sound and more. Every class style, its temperature and its length, so you can find the practice that fits your day.",
  }),
  ourStudios: pageMetaSchema.parse({
    path: "/our-studios/",
    title: "Our Studios | yoga pod Gainesville",
    description:
      "Two Gainesville locations, NW and SW, with medical-grade air filtration, cushioned flooring, spa-like locker rooms and ample parking.",
  }),
  ourTeam: pageMetaSchema.parse({
    path: "/our-team/",
    title: "Our Team and Story | Hot Yoga in Gainesville, FL | yoga pod",
    description:
      "Meet the local team behind yoga pod Gainesville, a hot yoga and fitness studio in NW and SW Gainesville, FL since 2018. Every leader started as a student.",
  }),
  culture: pageMetaSchema.parse({
    path: "/culture/",
    title: "Our Culture | yoga pod Gainesville",
    description:
      "Breathe first. Cultivate discipline. Create community. Honor nature. Do the right thing. The mission, values and principles behind yoga pod Gainesville.",
  }),
  inclusivity: pageMetaSchema.parse({
    path: "/inclusivity/",
    title: "Inclusivity | yoga pod Gainesville",
    description:
      "yoga pod is a space of safety and acceptance. Our commitment to inclusivity, unity and a safe space for every student and every member of staff.",
  }),
  yourFirstClass: pageMetaSchema.parse({
    path: "/your-first-class/",
    title: "Your First Class | yoga pod Gainesville",
    description:
      "New to yoga pod? Start with $30 for 30 days unlimited. What to bring, what to expect, and everything to know before you walk in.",
  }),
  pricing: pageMetaSchema.parse({
    path: "/pricing/",
    title: "Pricing & Memberships | yoga pod Gainesville",
    description:
      "Intro offers, monthly and annual memberships, class packs, and Infinity memberships covering both yoga pod and APEX.",
  }),
  northwestSchedule: pageMetaSchema.parse({
    path: "/northwest-schedule/",
    title: "Northwest Schedule | yoga pod Gainesville",
    description:
      "Book a class at yoga pod Northwest, 4136 NW 16th Blvd. Over 200 classes each week across yoga, HIIT and Pilates.",
  }),
  southwestSchedule: pageMetaSchema.parse({
    path: "/southwest-schedule/",
    title: "Southwest Schedule | yoga pod Gainesville",
    description:
      "Book a class at yoga pod Southwest, 3045 SW 34th St. Over 200 classes each week across yoga, HIIT and Pilates.",
  }),
  events: pageMetaSchema.parse({
    path: "/events/",
    title: "Events & Workshops | yoga pod Gainesville",
    description:
      "Special events, workshops and community gatherings across both Gainesville studios. Everything on the calendar is bookable.",
  }),
  teacherTraining: pageMetaSchema.parse({
    path: "/teacher-training/",
    title: "Teacher Training | yoga pod Gainesville",
    description:
      "200-hour, FIT, HOT and YIN teacher trainings through our Yoga Alliance program. Learn to teach with a focus on practical application.",
  }),
  workshops: pageMetaSchema.parse({
    path: "/workshops/",
    title: "Workshops | yoga pod Gainesville",
    description:
      "Explore the subtleties of your yoga, fitness, meditation and breath work practices with your favorite teachers.",
  }),
  faq: pageMetaSchema.parse({
    path: "/faq/",
    title: "FAQ | yoga pod Gainesville",
    description:
      "Booking, waitlists, late cancel and no show policies, rentals, showers, memberships and more. Everything students ask us most.",
  }),
  careers: pageMetaSchema.parse({
    path: "/careers/",
    title: "Careers | yoga pod Gainesville",
    description:
      "Teacher, membership consultant and Karma Crew applications. We hire from within our student community.",
  }),
  privacyPolicy: pageMetaSchema.parse({
    path: "/privacy-policy/",
    title: "Privacy Policy | yoga pod Gainesville",
    description: "How yoga pod Gainesville collects, uses and protects your personal information.",
  }),
  membershipChange: pageMetaSchema.parse({
    path: "/membership-change/",
    title: "Account Management | yoga pod Gainesville",
    description:
      "Upgrade, change, freeze or cancel your yoga pod membership. Every request is answered by a member of our team within 4 business days.",
  }),
  cancel: pageMetaSchema.parse({
    path: "/cancel/",
    title: "Cancel My Membership | yoga pod Gainesville",
    description:
      "Request to cancel your yoga pod Gainesville membership. Memberships require 30 days notice.",
  }),
  freeze: pageMetaSchema.parse({
    path: "/freeze/",
    title: "Freeze My Membership | yoga pod Gainesville",
    description:
      "Pause your yoga pod Gainesville membership while you are away and keep your rate when you return.",
  }),
  upgrade: pageMetaSchema.parse({
    path: "/upgrade/",
    title: "Upgrade My Membership | yoga pod Gainesville",
    description: "Move up to Unlimited, Annual or Infinity at yoga pod Gainesville.",
  }),
  downgrade: pageMetaSchema.parse({
    path: "/downgrade/",
    title: "Change My Membership | yoga pod Gainesville",
    description: "Step down to a yoga pod Gainesville membership that fits your week.",
  }),
  membershipThanks: pageMetaSchema.parse({
    path: "/membership-change/thanks/",
    title: "Request Received | yoga pod Gainesville",
    description: "We received your membership request and will reply within 4 business days.",
  }),
  help: pageMetaSchema.parse({
    path: "/help/",
    title: "Account Help | yoga pod Gainesville",
    description: "Need help, have a question, or have feedback for yoga pod Gainesville? Send us a note.",
  }),
  helpThanks: pageMetaSchema.parse({
    path: "/help/thanks/",
    title: "We got your note | yoga pod Gainesville",
    description: "We received your note and a member of our team will write you back.",
  }),
  notFound: pageMetaSchema.parse({
    path: "/404.html",
    title: "Page not found | yoga pod Gainesville",
    description: "That page does not exist. Find a class, our schedule, or our studios instead.",
  }),
};

export type PageKey = keyof typeof pages;
