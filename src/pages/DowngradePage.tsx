import { MembershipForm, MembershipTerms } from "@/components/patterns/MembershipForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { downgradeForm } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function DowngradePage() {
  return (
    <SiteChrome path={pages.downgrade.path} sticky={false}>
      <PageHeader eyebrow={downgradeForm.eyebrow} title={downgradeForm.title} lede={downgradeForm.lede} />

      <section className="band">
        <div className="shell-narrow">
          <MembershipTerms terms={downgradeForm.terms} />
          <MembershipForm form={downgradeForm} />
        </div>
      </section>
    </SiteChrome>
  );
}
