import { MembershipForm, MembershipTerms } from "@/components/patterns/MembershipForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { freezeForm } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function FreezePage() {
  return (
    <SiteChrome path={pages.freeze.path} sticky={false}>
      <PageHeader eyebrow={freezeForm.eyebrow} title={freezeForm.title} lede={freezeForm.lede} />

      <section className="band">
        <div className="shell-narrow">
          <MembershipTerms terms={freezeForm.terms} />
          <MembershipForm form={freezeForm} />
        </div>
      </section>
    </SiteChrome>
  );
}
