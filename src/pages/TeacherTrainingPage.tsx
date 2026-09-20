import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { teacherTraining } from "@/content/education";
import { pages } from "@/content/pages";

export function TeacherTrainingPage() {
  return (
    <SiteChrome path={pages.teacherTraining.path}>
      <PageHeader
        eyebrow={teacherTraining.hero.eyebrow}
        title={teacherTraining.hero.title}
        lede={teacherTraining.hero.lede}
      >
        <a
          className="btn btn-primary"
          href={teacherTraining.contact.href}
          target="_blank"
          rel="noopener"
        >
          {teacherTraining.contact.label}
        </a>
      </PageHeader>

      <section className="band">
        <div className="shell-narrow prose text-foreground-soft">
          {teacherTraining.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell">
          <h2 className="display-md">Faculty</h2>
          <div className="grid-auto mt-10">
            {teacherTraining.faculty.map((group) => (
              <div key={group.title} className="card-flat">
                <h3 className="display-sm">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-2 text-foreground-soft">
                  {group.names.map((name) => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
