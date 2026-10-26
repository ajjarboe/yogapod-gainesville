import { SiteChrome } from "@/components/layout/SiteChrome";
import { BookingFrame } from "@/components/patterns/BookingFrame";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { scheduleSrc, type LocationKey } from "@/content/checkout";
import { pages } from "@/content/pages";
import { studios } from "@/content/studios";

/**
 * Both schedule routes render this, laid out like the APEX schedule page. Book Now lands
 * on the Northwest route, so that one shows both studios together (`bothStudios`); the
 * Southwest route shows Southwest only.
 */
export function SchedulePage({ location, bothStudios = false }: { location: LocationKey; bothStudios?: boolean }) {
  const studio = studios.find((item) => item.key === location);
  if (!studio) throw new Error(`unknown studio: ${location}`);

  const meta = location === "northwest" ? pages.northwestSchedule : pages.southwestSchedule;

  return (
    <SiteChrome path={meta.path}>
      <PageHeader photo={headerPhotos.schedule} title={bothStudios ? "Book at Northwest & Southwest" : studio.name} />

      <section className="band band-tight">
        <div className="shell">
          <h2 className="display-md">Need help?</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {studios.map((item) => (
              <a key={item.key} className="btn btn-primary" href={`tel:${item.phoneRaw}`}>
                Call {item.key === "northwest" ? "NW" : "SW"}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <BookingFrame
              src={bothStudios ? scheduleSrc() : scheduleSrc(location)}
              title={bothStudios ? "yoga pod Northwest and Southwest class schedule" : `${studio.name} class schedule`}
              priority
            />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
