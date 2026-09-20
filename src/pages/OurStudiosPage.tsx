import { SiteChrome } from "@/components/layout/SiteChrome";
import { JsonLd, breadcrumbSchema, gymSchema } from "@/components/patterns/JsonLd";
import { Photo } from "@/components/patterns/Photo";
import { PageHeader } from "@/components/patterns/PageHeader";
import { pages } from "@/content/pages";
import { studios, studiosIntro } from "@/content/studios";

export function OurStudiosPage() {
  return (
    <SiteChrome path={pages.ourStudios.path}>
      <JsonLd data={[...gymSchema(), breadcrumbSchema("Our Studios", pages.ourStudios.path)]} />
      <PageHeader eyebrow="About" title="Our Studios" lede={studiosIntro} />

      <section className="band">
        <div className="shell grid-2">
          {studios.map((studio) => (
            <div key={studio.key} className="card">
              <Photo
                src={`/img/${studio.photo}`}
                alt={`Inside ${studio.name}`}
                widths={[640, 1100]}
                sizes="(min-width: 900px) 34rem, 90vw"
                width={1100}
                height={880}
                className="media mb-6"
              />
              <h2 className="display-sm">{studio.name}</h2>
              <p className="mt-4 text-foreground-soft">{studio.blurb}</p>

              <p className="mt-6 font-semibold">
                {studio.street}
                <br />
                {studio.city}
              </p>

              <p className="mt-4">
                <a className="text-brand underline" href={`tel:${studio.phoneRaw}`}>
                  Call or text {studio.phoneDisplay}
                </a>
              </p>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                {studio.hours.map((slot) => (
                  <div key={slot.days} className="contents">
                    <dt className="text-muted">{slot.days}</dt>
                    <dd>{slot.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-4">
                <a className="btn btn-primary" href={studio.schedulePath}>
                  See the schedule
                </a>
                <a
                  className="btn btn-ghost"
                  href={`https://www.google.com/maps/search/?api=1&query=${studio.mapQuery}`}
                  target="_blank"
                  rel="noopener"
                >
                  Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
