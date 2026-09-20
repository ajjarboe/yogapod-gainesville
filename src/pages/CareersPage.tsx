import { SiteChrome } from "@/components/layout/SiteChrome";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { PageHeader } from "@/components/patterns/PageHeader";
import { careers } from "@/content/education";
import { pages } from "@/content/pages";

export function CareersPage() {
  return (
    <SiteChrome path={pages.careers.path}>
      <PageHeader eyebrow={careers.hero.eyebrow} title={careers.hero.title} lede={careers.hero.lede} />

      <section className="band">
        <div className="shell-narrow prose text-foreground-soft">
          {careers.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="mt-8">
            <CheckoutLink offering="intro">Start with $30 for 30 days</CheckoutLink>
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell">
          <h2 className="display-md">Applications</h2>
          <div className="grid-auto mt-10">
            {careers.applications.map((application) => (
              <a
                key={application.label}
                className="card-flat block no-underline"
                href={application.href}
                target="_blank"
                rel="noopener"
              >
                <h3 className="display-sm">{application.label}</h3>
                <p className="mt-3 text-brand">Open the application →</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
