import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { inclusivity } from "@/content/inclusivity";
import { pages } from "@/content/pages";

export function InclusivityPage() {
  return (
    <SiteChrome path={pages.inclusivity.path}>
      <PageHeader eyebrow={inclusivity.hero.eyebrow} title={inclusivity.hero.title} />

      <section className="band">
        <div className="shell-narrow">
          {inclusivity.blocks.map((block) => (
            <div key={block.title} className="mb-12">
              <h2 className="display-sm">{block.title}</h2>
              <p className="mt-4 text-foreground-soft">{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band band-tight band-brand">
        <div className="shell-narrow text-center">
          <p className="text-lg">{inclusivity.closing}</p>
        </div>
      </section>
    </SiteChrome>
  );
}
