import { MembershipForm, MembershipTerms } from "@/components/patterns/MembershipForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { helpForm } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function HelpPage() {
  return (
    <SiteChrome path={pages.help.path} sticky={false}>
      <PageHeader eyebrow={helpForm.eyebrow} title={helpForm.title} lede={helpForm.lede} />

      <section className="band">
        <div className="shell-narrow">
          {helpForm.terms.length ? <MembershipTerms terms={helpForm.terms} /> : null}
          <MembershipForm form={helpForm} />
        </div>
      </section>
    </SiteChrome>
  );
}
