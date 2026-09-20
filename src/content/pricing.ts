import type { OfferingKey } from "@/content/checkout";

type Tier = {
  key: OfferingKey;
  /** What you get. Shown above the price. */
  name: string;
  term: string;
  save?: string;
  feature?: boolean;
};

type Group = {
  id: string;
  title: string;
  lede?: string;
  tiers: Tier[];
  note?: string;
};

export const pricingNote =
  "All purchases are final. No refunds are available for drop-ins, class packs, or memberships.";

const CANCELLATION =
  "30 day cancellation notice required on all monthly & annual memberships. Monthly membership is a 2 month minimum.";

export const pricingGroups: Group[] = [
  {
    id: "intro",
    title: "Intro Offer",
    lede: "Practice for just $1 per day. No contracts. No strings attached. Your 30 consecutive days do not start until your first class.",
    tiers: [
      {
        key: "intro",
        name: "30 Days Unlimited Yoga & Fitness",
        term: "one time",
        feature: true,
      },
    ],
    note: "Intro offers are a 1-time special per person. Staff will reach out to secure an alternate package if more than 1 intro is purchased.",
  },
  {
    id: "membership",
    title: "Yoga Pod Membership",
    tiers: [
      { key: "monthly8", name: "8 classes a month", term: "per month" },
      { key: "monthlyUnlimited", name: "Unlimited", term: "per month", feature: true },
      { key: "annualUnlimited", name: "Unlimited", term: "per year" },
      { key: "oneMonth", name: "Unlimited, no contract", term: "one month" },
    ],
    note: CANCELLATION,
  },
  {
    id: "infinity",
    title: "Infinity Membership",
    lede: "One membership for both Yoga Pod and APEX. Pick the tier that matches how you train.",
    tiers: [
      {
        key: "infinity8x4",
        name: "Yoga Pod 8 Class + APEX 4 Class",
        term: "per month",
        save: "Save $39/mo",
      },
      {
        key: "infinity8x8",
        name: "Yoga Pod 8 Class + APEX 8 Class",
        term: "per month",
        save: "Save $59/mo",
      },
      {
        key: "infinityUnlimited",
        name: "Yoga Pod Unlimited + APEX Unlimited",
        term: "per month",
        save: "Save $79/mo",
        feature: true,
      },
      {
        key: "infinityAnnual",
        name: "Yoga Pod Unlimited + APEX Unlimited",
        term: "per year",
        save: "Save $629 vs monthly",
      },
    ],
    note: CANCELLATION,
  },
  {
    id: "packs",
    title: "Limited Class Options",
    tiers: [
      { key: "dropIn", name: "Drop In Class", term: "single class" },
      { key: "pack5", name: "5 Class Pack", term: "5 classes" },
      { key: "pack10", name: "10 Class Pack", term: "10 classes" },
      { key: "pack20", name: "20 Class Pack", term: "20 classes" },
    ],
    note: "Class packs never expire and cannot be shared.",
  },
];
