import { SiteChrome } from "@/components/layout/SiteChrome";
import { pages } from "@/content/pages";

export function NotFoundPage() {
  return (
    <SiteChrome path={pages.notFound.path} sticky={false}>
      <section className="band">
        <div className="shell-narrow text-center">
          <p className="eyebrow">404</p>
          <h1 className="display-lg mt-3">That page moved or never existed</h1>
          <p className="lede mx-auto mt-5">
            Try the schedule, our class styles, or pricing — or head back to the start.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a className="btn btn-primary" href="/">
              Home
            </a>
            <a className="btn btn-ghost" href="/northwest-schedule/">
              Schedule
            </a>
            <a className="btn btn-ghost" href="/pricing/">
              Pricing
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
