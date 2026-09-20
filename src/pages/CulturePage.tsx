import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { culture } from "@/content/culture";
import { pages } from "@/content/pages";

export function CulturePage() {
  return (
    <SiteChrome path={pages.culture.path}>
      <PageHeader eyebrow="About" title="Our Culture" lede={culture.intro[0]} />

      <section className="band">
        <div className="shell">
          <h2 className="display-md">{culture.valuesTitle}</h2>
          <p className="lede mt-5">{culture.intro[1]}</p>
          <div className="meta-row mt-8">
            {culture.values.map((value) => (
              <span key={value} className="chip chip-lg">
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell grid-auto">
          {culture.blocks.map((block) => (
            <div key={block.title} className="card-flat">
              <h2 className="display-sm">{block.title}</h2>
              <p className="mt-3 text-foreground-soft">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2 className="display-md">Principles</h2>
          <p className="lede mt-5">{culture.principlesIntro}</p>
          <div className="grid-auto mt-10">
            {culture.principles.map((principle) => (
              <div key={principle.title} className="card-flat">
                <h3 className="display-sm">{principle.title}</h3>
                <p className="mt-3 text-foreground-soft">{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
