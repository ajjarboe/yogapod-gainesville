import { SiteChrome } from "@/components/layout/SiteChrome";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { firstClass } from "@/content/first-class";
import { pages } from "@/content/pages";

export function YourFirstClassPage() {
  return (
    <SiteChrome path={pages.yourFirstClass.path}>
      <PageHeader
        eyebrow={firstClass.hero.eyebrow}
        title={firstClass.hero.title}
        lede={firstClass.hero.lede}
      >
        <CheckoutLink offering="intro">{firstClass.hero.cta}</CheckoutLink>
      </PageHeader>

      <section className="band">
        <div className="shell">
          <h2 className="display-md">How it goes</h2>
          <div className="grid-auto mt-10">
            {firstClass.steps.map((step, index) => (
              <div key={step.title} className="card-flat">
                <p className="eyebrow">Step {index + 1}</p>
                <h3 className="display-sm mt-3">{step.title}</h3>
                <p className="mt-3 text-foreground-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow">
          <h2 className="display-md">New student questions</h2>
          <div className="mt-8">
            {firstClass.faq.map((item) => (
              <Disclose key={item.question} summary={item.question} paragraphs={item.answer} />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
