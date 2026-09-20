import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { eventsSrc } from "@/content/checkout";
import { workshops } from "@/content/education";
import { pages } from "@/content/pages";

export function WorkshopsPage() {
  return (
    <SiteChrome path={pages.workshops.path}>
      <PageHeader
        eyebrow={workshops.hero.eyebrow}
        title={workshops.hero.title}
        lede={workshops.hero.lede}
      />

      <section className="band band-tight">
        <div className="shell">
          <BookingFrame src={eventsSrc()} title="Workshop calendar" priority />
        </div>
      </section>
    </SiteChrome>
  );
}
