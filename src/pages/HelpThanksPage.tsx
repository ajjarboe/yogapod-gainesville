import { PageHeader } from "@/components/patterns/PageHeader";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { pages } from "@/content/pages";
import { responseWindow } from "@/content/membership-forms";

export function HelpThanksPage() {
  return (
    <SiteChrome path={pages.helpThanks.path} sticky={false}>
      <PageHeader
        eyebrow="Got it"
        title="We got your note"
        lede={`Thank you. A member of our team will write you back ${responseWindow}.`}
      />

      <section className="band">
        <div className="shell-narrow">
          <p className="text-foreground-soft">You do not need to send this again.</p>
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
