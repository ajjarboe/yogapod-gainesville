import { SiteChrome } from "@/components/layout/SiteChrome";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { JsonLd, gymSchema, websiteSchema } from "@/components/patterns/JsonLd";
import { VideoBackdrop } from "@/components/patterns/VideoBackdrop";
import { banner } from "@/content/banner";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

export function HomePage() {
  return (
    <SiteChrome path={pages.home.path}>
      <JsonLd data={[websiteSchema(), ...gymSchema()]} />

      <section className="hero">
        <VideoBackdrop
          src={home.hero.video}
          poster={home.hero.photo}
          posterWidths={[640, 1100, 1800]}
          width={1800}
          height={1440}
          alt={home.hero.photoAlt}
        />
        <div className="hero-scrim" />
        <div className="shell hero-inner">
          <h1 className="display-xl">{home.hero.title}</h1>
          <p className="lede">{home.hero.lede}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <CheckoutLink offering="intro">{home.hero.cta}</CheckoutLink>
            <a className="btn btn-ghost" href={home.hero.secondary.href}>
              {home.hero.secondary.label}
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <p className="eyebrow">{home.pillars.eyebrow}</p>
          <h2 className="display-md mt-3">{home.pillars.title}</h2>
          <div className="grid-auto mt-10">
            {home.pillars.items.map((item) => (
              <div key={item.title} className="card-flat">
                <h3 className="display-sm">{item.title}</h3>
                <p className="mt-3 text-foreground-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell grid-2">
          <div>
            <p className="eyebrow">{home.classesTeaser.eyebrow}</p>
            <h2 className="display-md mt-3">{home.classesTeaser.title}</h2>
            <p className="lede mt-5">{home.classesTeaser.lede}</p>
            <a className="btn btn-ghost mt-8" href={home.classesTeaser.cta.href}>
              {home.classesTeaser.cta.label}
            </a>
          </div>
          <div>
            <p className="eyebrow">{home.studiosTeaser.eyebrow}</p>
            <h2 className="display-md mt-3">{home.studiosTeaser.title}</h2>
            <p className="lede mt-5">{home.studiosTeaser.lede}</p>
            <a className="btn btn-ghost mt-8" href={home.studiosTeaser.cta.href}>
              {home.studiosTeaser.cta.label}
            </a>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <h2 className="display-md">What students say</h2>
          <div className="grid-auto mt-10">
            {home.testimonials.map((item) => (
              <blockquote key={item.name} className="quote">
                <p>&ldquo;{item.quote}&rdquo;</p>
                <cite>{item.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-dark">
        <div className="shell grid-2">
          <div>
            <p className="eyebrow">Book anywhere</p>
            <h2 className="display-md mt-3">Download the {site.app.name}</h2>
            <p className="lede mt-5">{site.app.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              {banner.links.map((link) => (
                <a key={link.label} className="btn btn-ghost" href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="card-dark">
            <h3 className="display-md">Book this week</h3>
            <p className="mt-3 text-on-dark-soft">
              Pick the studio that is closer and see what is on the schedule.
            </p>
            <div className="pill-row mt-6">
              {studios.map((studio) => (
                <a key={studio.key} className="btn btn-ghost" href={studio.schedulePath}>
                  {studio.key === "northwest" ? "Northwest" : "Southwest"}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="band band-brand">
        <div className="shell-narrow text-center">
          <h2 className="display-md">{home.closing.title}</h2>
          <p className="mt-5 text-lg">{home.closing.lede}</p>
          <div className="mt-8 flex justify-center">
            <CheckoutLink offering="intro" variant="ghost">
              {home.closing.cta}
            </CheckoutLink>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
