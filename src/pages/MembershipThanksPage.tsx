import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { pages } from "@/content/pages";
import { responseWindow } from "@/content/membership-forms";

export function MembershipThanksPage() {
  return (
    <SiteChrome path={pages.membershipThanks.path} sticky={false}>
      <PageHeader
        eyebrow="Got it"
        title="Your request is in"
        lede={`A member of our team will reply ${responseWindow} to confirm the details. Nothing on your account changes until then.`}
      />

      <section className="band">
        <div className="shell-narrow">
          <p className="text-foreground-soft">
            You do not need to submit this again. If you do not hear from us, check your spam folder
            first, then call the studio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="/">
              Back to the site
            </a>
            <a className="btn btn-ghost" href="/faq/">
              Read the FAQ
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
