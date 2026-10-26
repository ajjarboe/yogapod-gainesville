import { SiteChrome } from "@/components/layout/SiteChrome";
import { JsonLd, breadcrumbSchema, gymSchema } from "@/components/patterns/JsonLd";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { PriceCard } from "@/components/patterns/PriceCard";
import { pages } from "@/content/pages";
import { pricingGroups, pricingHeader, pricingNote } from "@/content/pricing";

export function PricingPage() {
  return (
    <SiteChrome path={pages.pricing.path}>
      <JsonLd data={[...gymSchema(), breadcrumbSchema("Pricing", pages.pricing.path)]} />
      <PageHeader title={pricingHeader.title} photo={headerPhotos.pricing} />

      {pricingGroups.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          className={index % 2 === 0 ? "band band-tight" : "band band-tight band-warm"}
        >
          <div className="shell">
            <h2 className="display-md">{group.title}</h2>
            {group.lede ? <p className="lede mt-5">{group.lede}</p> : null}
            {group.note ? (
              <div className="mt-4">
                {group.note.map((line) => (
                  <p key={line} className="price-note">
                    {line}
                  </p>
                ))}
              </div>
            ) : null}
            <div className="grid-auto mt-6">
              {group.tiers.map((tier) => (
                <PriceCard
                  key={tier.key}
                  offering={tier.key}
                  name={tier.name}
                  term={tier.term}
                  save={tier.save}
                  feature={tier.feature}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="band band-tight band-dark">
        <div className="shell-narrow text-center">
          <p className="text-on-dark-soft">{pricingNote}</p>
        </div>
      </section>
    </SiteChrome>
  );
}
