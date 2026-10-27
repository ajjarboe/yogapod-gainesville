import { SiteChrome } from "@/components/layout/SiteChrome";
import { Disclose } from "@/components/patterns/Disclose";
import { PageHeader } from "@/components/patterns/PageHeader";
import { headerPhotos } from "@/content/header-photos";
import { PersonCard } from "@/components/patterns/PersonCard";
import { pages } from "@/content/pages";
import { RichText } from "@/lib/rich-text";
import { directors, ownership, story } from "@/content/team";

export function OurTeamPage() {
  return (
    <SiteChrome path={pages.ourTeam.path}>
      <PageHeader photo={headerPhotos.ourTeam} title="Our Team" />

      <section className="band">
        <div className="shell-narrow">
          <h2 className="display-md">{story.title}</h2>
          <p className="lede mt-6 text-foreground-soft">
            <RichText text={story.lede} />
          </p>
          <div className="mt-4">
            <Disclose summary={story.summary} paragraphs={story.paragraphs} />
          </div>
          <a className="btn btn-ghost mt-8" href={story.more.href}>
            {story.more.label} &rarr;
          </a>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell">
          <h2 className="display-sm">Ownership Team</h2>
          <div className="grid-auto mt-6">
            {ownership.map((person) => (
              <PersonCard key={person.name} person={person} round />
            ))}
          </div>

          <h2 className="display-sm mt-14">Leadership Team</h2>
          <div className="grid-auto mt-6">
            {directors.map((person) => (
              <PersonCard key={person.name} person={person} round />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
