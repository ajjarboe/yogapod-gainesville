import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { workshopHref } from "@/content/checkout";
import { workshops } from "@/content/education";
import { headerPhotos } from "@/content/header-photos";
import { pages } from "@/content/pages";
import { RichText } from "@/lib/rich-text";

export function WorkshopsPage() {
  return (
    <SiteChrome path={pages.workshops.path}>
      <PageHeader photo={headerPhotos.workshops} title={workshops.hero.title} />

      <section className="band">
        <div className="shell">
          <p className="lede">{workshops.hero.lede}</p>
          <h2 className="display-md mt-12">{workshops.upcomingTitle}</h2>

          {workshops.list.length === 0 ? (
            <p className="mt-6 text-foreground-soft">{workshops.empty}</p>
          ) : (
            <div className="grid-auto mt-8">
              {workshops.list.map((workshop) => (
                <article key={workshop.event} className="card-flat flex flex-col">
                  {workshop.when.map((line) => (
                    <p key={line} className="eyebrow">
                      {line}
                    </p>
                  ))}
                  <h3 className="display-sm mt-3">{workshop.title}</h3>
                  <p className="mt-3 font-semibold">
                    {workshop.teacher} · {workshop.where} · {workshop.price}
                  </p>
                  {workshop.body.map((paragraph) => (
                    <p key={paragraph} className="mt-3 text-foreground-soft">
                      <RichText text={paragraph} />
                    </p>
                  ))}
                  <div className="mt-auto flex flex-col items-start gap-3 pt-6">
                    <a
                      className="btn btn-primary"
                      href={workshopHref(workshop.event)}
                      target="_blank"
                      rel="noopener"
                    >
                      {workshop.cta}
                    </a>
                    {"secondary" in workshop && workshop.secondary ? (
                      <a className="btn btn-ghost" href={workshop.secondary.href}>
                        {workshop.secondary.label}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </SiteChrome>
  );
}
