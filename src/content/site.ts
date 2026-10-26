export const site = {
  siteUrl: "https://www.yogapodgainesville.com",
  brand: "yoga pod Gainesville",
  brandFull: "APEX | yoga pod Gainesville",
  tagline: "Come as you are. Leave feeling refreshed and inspired.",
  email: "info@yogapod.com",
  social: {
    instagram: "https://www.instagram.com/yogapodgainesville/",
    facebook: "https://www.facebook.com/yogapodgainesville",
    spotify: "https://open.spotify.com/user/yogapod",
  },
  apex: {
    href: "https://www.apexgainesville.com/",
    scheduleHref: "https://www.apexgainesville.com/schedule",
    label: "APEX | High Intensity Pilates",
  },
  app: {
    name: "RAD App",
    blurb:
      "One app for yoga pod, APEX and RITUAL. Book classes, manage your account, and switch between studios.",
    androidNote: "Same email as yoga pod. Tap Forgot Password to set a new one.",
    links: [
      { label: "Download on the App Store", href: "https://apps.apple.com/us/app/rad-collective/id6797615424" },
      { label: "Download on Google Play", href: "https://play.google.com/store/apps/details?id=com.arketa.radcollective" },
    ],
  },
} as const;
