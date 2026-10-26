import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { eventsSrc } from "@/content/checkout";
import { workshops } from "@/content/education";
import { headerPhotos } from "@/content/header-photos";
import { pages } from "@/content/pages";

export function WorkshopsPage() {
  return (
    <SiteChrome path={pages.workshops.path}>
      <PageHeader photo={headerPhotos.workshops} title={workshops.hero.title} />

      <section className="band band-tight">
        <div className="shell">
          <p className="lede">{workshops.hero.lede}</p>
          <div className="mt-8">
            <BookingFrame src={eventsSrc()} title="Workshop calendar" priority />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
