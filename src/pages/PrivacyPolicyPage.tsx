import { SiteChrome } from "@/components/layout/SiteChrome";
import { PageHeader } from "@/components/patterns/PageHeader";
import { pages } from "@/content/pages";
import { privacy } from "@/content/privacy";
import { RichText } from "@/lib/rich-text";

export function PrivacyPolicyPage() {
  return (
    <SiteChrome path={pages.privacyPolicy.path} sticky={false}>
      <PageHeader title={privacy.title} lede={privacy.intro} />

      <section className="band">
        <div className="shell-narrow prose text-foreground-soft">
          {privacy.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
