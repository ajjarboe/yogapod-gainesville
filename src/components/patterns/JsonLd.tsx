import { checkoutHref, offerings } from "@/content/checkout";
import { faqSections } from "@/content/faq";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

function stripRich(text: string) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

function featuredOffers() {
  return (["intro", "monthlyUnlimited", "annualUnlimited", "infinityUnlimited"] as const).map((key) => ({
    "@type": "Offer",
    name: offerings[key].label,
    price: String(offerings[key].price),
    priceCurrency: "USD",
    url: checkoutHref(key),
  }));
}

/** One gym node per studio. Search uses this more than page copy. */
export function gymSchema() {
  return studios.map((studio) => ({
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${site.siteUrl}${studio.schedulePath}#gym`,
    name: studio.name,
    url: `${site.siteUrl}${studio.schedulePath}`,
    image: `${site.siteUrl}/img/${studio.photo}-1100.jpg`,
    logo: `${site.siteUrl}/img/wordmark.png`,
    telephone: studio.phoneRaw,
    priceRange: "$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: studio.street,
      addressLocality: "Gainesville",
      addressRegion: "FL",
      postalCode: studio.city.split(" ").at(-1),
      addressCountry: "US",
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${studio.mapQuery}`,
    areaServed: { "@type": "City", name: "Gainesville, Florida" },
    sameAs: [site.social.instagram, site.social.facebook, site.apex.href],
    parentOrganization: {
      "@type": "Organization",
      name: site.brandFull,
      url: site.siteUrl,
    },
    makesOffer: featuredOffers(),
  }));
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    url: site.siteUrl,
    name: site.brand,
    description: site.tagline,
    publisher: { "@type": "Organization", name: site.brandFull, url: site.siteUrl },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.map(stripRich).join(" "),
        },
      })),
    ),
  };
}

export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.siteUrl}/` },
      { "@type": "ListItem", position: 2, name, item: `${site.siteUrl}${path}` },
    ],
  };
}

/** Use this to print structured data derived from content, not hand-copied. */
export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
