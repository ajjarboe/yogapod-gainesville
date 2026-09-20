import { SiteChrome } from "@/components/layout/SiteChrome";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { classesIntro, classStyles } from "@/content/classes";
import { pages } from "@/content/pages";

export function OurClassesPage() {
  return (
    <SiteChrome path={pages.ourClasses.path}>
      <PageHeader eyebrow="About" title="Our Classes" lede={classesIntro[0]} />

      <section className="band">
        <div className="shell-narrow">
          <p className="text-foreground-soft">{classesIntro[1]}</p>
          <div className="mt-10">
            {classStyles.map((style) => (
              <Disclose
                key={style.name}
                summary={style.name}
                paragraphs={[style.summary, style.detail]}
                meta={[style.temp, style.lengths]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow text-center">
          <h2 className="display-md">Not sure where to start?</h2>
          <p className="lede mx-auto mt-5">
            BASICS and FLOW 1 are the gentlest entry points. Thirty days of unlimited classes gives you
            room to try all of them.
          </p>
          <div className="mt-8 flex justify-center">
            <CheckoutLink offering="intro">Try $30 for 30 days</CheckoutLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
