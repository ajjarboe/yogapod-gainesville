import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { PersonCard } from "@/components/patterns/PersonCard";
import { pages } from "@/content/pages";
import { directors, ownership, story, teamIntro } from "@/content/team";

export function OurTeamPage() {
  return (
    <SiteChrome path={pages.ourTeam.path}>
      <PageHeader eyebrow="About" title="Our Team" lede={story.paragraphs[0]} />

      <section className="band">
        <div className="shell-narrow">
          <h2 className="display-md">{story.title}</h2>
          <div className="prose mt-6 text-foreground-soft">
            {story.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell">
          <p className="lede">{teamIntro}</p>

          <h2 className="display-sm mt-12">Ownership Team</h2>
          <div className="grid-auto mt-6">
            {ownership.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>

          <h2 className="display-sm mt-14">Director Team</h2>
          <div className="grid-auto mt-6">
            {directors.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
