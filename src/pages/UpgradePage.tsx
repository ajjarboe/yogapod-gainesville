import { MembershipForm, MembershipTerms } from "@/components/patterns/MembershipForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { upgradeForm } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function UpgradePage() {
  return (
    <SiteChrome path={pages.upgrade.path} sticky={false}>
      <PageHeader eyebrow={upgradeForm.eyebrow} title={upgradeForm.title} lede={upgradeForm.lede} />

      <section className="band">
        <div className="shell-narrow">
          <MembershipTerms terms={upgradeForm.terms} />
          <MembershipForm form={upgradeForm} />
        </div>
      </section>
    </SiteChrome>
  );
}
