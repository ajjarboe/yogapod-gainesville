import { offeringSchema } from "@/content/schema";

/** The only file in this repo allowed to name Arketa. Everything books through here. */
const ARKETA_CHECKOUT = "https://app.arketa.co/gnv/pricing/checkout/";
const ARKETA_SCHEDULE_IFRAME = "https://app.arketa.co/iframe/gnv/schedule";

export const ARKETA_ORIGIN = "https://app.arketa.co";

export const offerings = {
  intro: offeringSchema.parse({
    id: "5LS7ZXkhbVeY0DbWZhwX",
    price: 30,
    label: "$30 for 30 Days Unlimited Yoga & Fitness",
  }),
  monthly8: offeringSchema.parse({
    id: "fbJF2ZYrWmhqyabNOJSo",
    price: 129,
    label: "Monthly 8 Class",
  }),
  monthlyUnlimited: offeringSchema.parse({
    id: "5A4zHLacqzo6BCkATwL3",
    price: 169,
    label: "Monthly Unlimited",
  }),
  annualUnlimited: offeringSchema.parse({
    id: "OUfb2IfyY5PoG3VvhrCp",
    price: 1699,
    label: "Annual Unlimited",
  }),
  oneMonth: offeringSchema.parse({
    id: "okcxgCKQ9KReAzdj93xU",
    price: 200,
    label: "One Month Unlimited",
  }),
  dropIn: offeringSchema.parse({
    id: "lmEYmCAbJXxAuKShT88B",
    price: 30,
    label: "Drop In Class",
  }),
  pack5: offeringSchema.parse({ id: "VEZ6ApPhDX17tyh5FrGh", price: 145, label: "5 Class Pack" }),
  pack10: offeringSchema.parse({ id: "dQgZWmDjsMVGWLYNlsBl", price: 270, label: "10 Class Pack" }),
  pack20: offeringSchema.parse({ id: "0SNkZvowI5kUIuYZiFEU", price: 500, label: "20 Class Pack" }),
  infinity8x4: offeringSchema.parse({
    id: "PgvcyH0YglXcyAF9fp3P",
    price: 229,
    label: "Monthly Infinity — yoga pod 8 Class + APEX 4 Class",
  }),
  infinity8x8: offeringSchema.parse({
    id: "rBFLfmOmjsiWHUZ2P9MI",
    price: 259,
    label: "Monthly Infinity — yoga pod 8 Class + APEX 8 Class",
  }),
  infinityUnlimited: offeringSchema.parse({
    id: "vNC7l8uPbTXTUt8kT0zY",
    price: 319,
    label: "Monthly Infinity — yoga pod Unlimited + APEX Unlimited",
  }),
  infinityAnnual: offeringSchema.parse({
    id: "sNFU5VCbx76ToBC75bvy",
    price: 3199,
    label: "Annual Infinity — yoga pod Unlimited + APEX Unlimited",
  }),
} as const;

export type OfferingKey = keyof typeof offerings;

export const offeringKeys = Object.keys(offerings) as OfferingKey[];

/** $30 intro first, then the memberships people actually tap. Packs wait until someone hovers. */
export const warmupWaves: OfferingKey[][] = [
  ["intro"],
  ["monthlyUnlimited"],
  ["annualUnlimited"],
  ["infinityUnlimited"],
  ["monthly8"],
];

/** Infinity checkouts take longer to settle, same as RITUAL's combo upgrades. */
export const comboKeys = ["infinity8x4", "infinity8x8", "infinityUnlimited", "infinityAnnual"] as const;

export function checkoutHref(key: OfferingKey) {
  return `${ARKETA_CHECKOUT}${offerings[key].id}`;
}

export const checkoutWait = {
  title: "Offer loading...",
  lede: "Please stay on this page.",
};

/** The class calendar, filtered to one studio. */
const SERVICE_IDS = [
  "vU02SliqloIrpCrA33uR",
  "U26JaF1a7uzpn3S2KpFu",
  "fDf186ebdukCZMQrK56a",
  "h9jArB1ax82UWbgJNFZj",
  "EU17WCX4RnPcEji1cIhB",
  "Yun1TZJYmmoA1O1UhKwH",
  "DE6ShxEK2RJetOY1ekBs",
  "jXE7LmDtf347AMZEocf9",
  "twZAsTnEc3L1shnTyNBd",
  "xvD2gy3sm3m8Aspmn8Cd",
  "3mUz5fHeKCqLK4fIAWbV",
  "gfUEjUIqLFNoKDwKhPxA",
  "sVqc0M4vXsqyl8AdaY7V",
  "tSFvbbxovTRFooIZCuwo",
  "NVgJOeMqE3NZb66JJ5xr",
  "bd20YJxTSPBuT8TP9JfV",
  "rMA4GJcVv54t63OZCKao",
  "0mKNSEQS7Znhr15jrlgS",
  "SmPUxk5jBrWeUlaI8UfV",
  "GEQ72spRxUwgzaVrhYQ7",
  "2FiH2eA9R7tz2pKw6LyE",
].join(",");

export const locationIds = {
  northwest: "9U5V1RhXgBD9MBW8OQ9a",
  southwest: "Ntej29WsOnX1lblQqMIc",
} as const;

export type LocationKey = keyof typeof locationIds;

export function scheduleSrc(location: LocationKey) {
  return `${ARKETA_SCHEDULE_IFRAME}?serviceId=${SERVICE_IDS}&location=${locationIds[location]}`;
}

export function eventsSrc() {
  return `${ARKETA_SCHEDULE_IFRAME}?type=event`;
}

/** Ad and email short links. Must stay in sync with netlify.toml. */
export const shortLinks = [
  { from: "/30", key: "intro" as const },
  { from: "/intro", key: "intro" as const },
  { from: "/unlimited", key: "monthlyUnlimited" as const },
  { from: "/annual", key: "annualUnlimited" as const },
] as const;
