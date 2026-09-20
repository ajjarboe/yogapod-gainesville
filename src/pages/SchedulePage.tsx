import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { scheduleSrc, type LocationKey } from "@/content/checkout";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

/** Both schedule routes render this. The only difference is which studio. */
export function SchedulePage({ location }: { location: LocationKey }) {
  const studio = studios.find((item) => item.key === location);
  if (!studio) throw new Error(`unknown studio: ${location}`);

  const meta = location === "northwest" ? pages.northwestSchedule : pages.southwestSchedule;
  const other = studios.find((item) => item.key !== location);

  return (
    <SiteChrome path={meta.path}>
      <PageHeader
        eyebrow="Schedule"
        title={studio.name}
        lede="Choose from over 200 classes each week between our two studios."
      >
        <a className="btn btn-ghost" href={`tel:${studio.phoneRaw}`}>
          Call or text {studio.phoneDisplay}
        </a>
        {other ? (
          <a className="btn btn-ghost" href={other.schedulePath}>
            {other.key === "northwest" ? "Northwest" : "Southwest"} schedule
          </a>
        ) : null}
        <a className="btn btn-ghost" href={site.apex.scheduleHref} target="_blank" rel="noopener">
          APEX schedule
        </a>
      </PageHeader>

      <section className="band band-tight">
        <div className="shell">
          <p className="text-right text-sm text-muted">{site.app.androidNote}</p>
          <div className="mt-6">
            <BookingFrame src={scheduleSrc(location)} title={`${studio.name} class schedule`} priority />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
