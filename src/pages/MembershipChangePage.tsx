import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { helpCard, membershipHub, membershipOptions } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function MembershipChangePage() {
  return (
    <SiteChrome path={pages.membershipChange.path} sticky={false}>
      <PageHeader eyebrow={membershipHub.eyebrow} title={membershipHub.title} lede={membershipHub.lede} />

      <section className="band">
        <div className="shell">
          <div className="grid-auto">
            {membershipOptions.map(({ form, blurb }) => (
              <a key={form.key} className="card-flat block no-underline" href={form.path}>
                <h2 className="display-sm">{form.title}</h2>
                <p className="mt-3 text-foreground-soft">{blurb}</p>
                <p className="mt-4 text-brand">Start the request →</p>
              </a>
            ))}
            <a className="card-flat block no-underline" href={helpCard.href}>
              <h2 className="display-sm">{helpCard.title}</h2>
              <p className="mt-3 text-foreground-soft">{helpCard.blurb}</p>
              <p className="mt-4 text-brand">Send a note →</p>
            </a>
          </div>
          <p className="fineprint mt-10">{membershipHub.note}</p>
        </div>
      </section>
    </SiteChrome>
  );
}
