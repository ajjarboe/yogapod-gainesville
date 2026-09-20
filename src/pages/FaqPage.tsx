import { SiteChrome } from "@/components/layout/SiteChrome";
import { Disclose } from "@/components/patterns/Disclose";
import { JsonLd, faqSchema } from "@/components/patterns/JsonLd";
import { PageHeader } from "@/components/patterns/PageHeader";
import { faqSections } from "@/content/faq";
import { pages } from "@/content/pages";
import { studios } from "@/content/studios";

export function FaqPage() {
  return (
    <SiteChrome path={pages.faq.path}>
      <JsonLd data={faqSchema()} />
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede="Booking, waitlists, penalties, rentals and memberships. If your question is not here, call or text the studio."
      />

      {faqSections.map((section, index) => (
        <section
          key={section.title}
          id={section.title.toLowerCase().split(" ").at(0)}
          className={index % 2 === 0 ? "band" : "band band-warm"}
        >
          <div className="shell-narrow">
            <h2 className="display-md">{section.title}</h2>
            <div className="mt-8">
              {section.items.map((item) => (
                <Disclose key={item.question} summary={item.question} paragraphs={item.answer} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="band band-tight band-dark">
        <div className="shell-narrow text-center">
          <h2 className="display-sm">Still stuck?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {studios.map((studio) => (
              <a key={studio.key} className="btn btn-ghost" href={`tel:${studio.phoneRaw}`}>
                {studio.key === "northwest" ? "NW" : "SW"} {studio.phoneDisplay}
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
