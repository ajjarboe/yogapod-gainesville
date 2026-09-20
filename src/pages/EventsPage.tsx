import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { eventsSrc } from "@/content/checkout";
import { events } from "@/content/education";
import { pages } from "@/content/pages";

export function EventsPage() {
  return (
    <SiteChrome path={pages.events.path}>
      <PageHeader eyebrow={events.hero.eyebrow} title={events.hero.title} lede={events.hero.lede} />

      <section className="band band-tight">
        <div className="shell">
          <p className="text-foreground-soft">{events.calendarNote}</p>
          <div className="mt-6">
            <BookingFrame src={eventsSrc()} title="Events and workshops calendar" priority />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
