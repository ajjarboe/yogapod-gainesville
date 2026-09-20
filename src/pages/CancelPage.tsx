import { MembershipForm, MembershipTerms } from "@/components/patterns/MembershipForm";
import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { cancelForm } from "@/content/membership-forms";
import { pages } from "@/content/pages";

export function CancelPage() {
  return (
    <SiteChrome path={pages.cancel.path} sticky={false}>
      <PageHeader eyebrow={cancelForm.eyebrow} title={cancelForm.title} lede={cancelForm.lede} />

      <section className="band">
        <div className="shell-narrow">
          <MembershipTerms terms={cancelForm.terms} />
          <MembershipForm form={cancelForm} />
        </div>
      </section>
    </SiteChrome>
  );
}
