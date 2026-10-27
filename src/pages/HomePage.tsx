import { SiteChrome } from "@/components/layout/SiteChrome";
import { Carousel } from "@/components/patterns/Carousel";
import { CheckoutLink } from "@/components/patterns/CheckoutLink";
import { JsonLd, gymSchema, websiteSchema } from "@/components/patterns/JsonLd";
import { VideoBackdrop } from "@/components/patterns/VideoBackdrop";
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
        <div className="shell grid-2">
          {[home.classesTeaser, home.studiosTeaser].map((teaser) => (
            <div key={teaser.eyebrow} className="flex flex-col">
              <p className="eyebrow">{teaser.eyebrow}</p>
              <h2 className="display-md mt-3">{teaser.title}</h2>
              <p className="lede mt-5 mb-8">{teaser.lede}</p>
              <a className="btn btn-ghost mt-auto self-start" href={teaser.cta.href}>
                {teaser.cta.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="shell">
          <div className="outline-frame">
            <Carousel title={home.testimonialsTitle} label="reviews">
              {home.testimonials.map((item) => (
                <blockquote key={item.name} className="quote carousel-card">
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <cite>{item.name}</cite>
                </blockquote>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="band band-warm">
        <div className="shell-narrow text-center">
          <p className="eyebrow">{home.storyTeaser.eyebrow}</p>
          <h2 className="display-md mt-3">{home.storyTeaser.title}</h2>
          <p className="lede mt-5 mb-8">{home.storyTeaser.lede}</p>
          <a className="btn btn-ghost" href={home.storyTeaser.cta.href}>
            {home.storyTeaser.cta.label}
          </a>
        </div>
      </section>

      <section className="band band-dark">
        <div className="shell grid-2">
          <div className="card-dark flex flex-col justify-between gap-6">
            <h3 className="display-md">{home.appCard.title}</h3>
            <p className="lede">{home.appCard.body}</p>
            <p className="text-on-dark-soft">{home.appCard.note}</p>
            <div className="flex flex-wrap gap-4">
              {site.app.links.map((link) => (
                <a key={link.label} className="btn btn-ghost" href={link.href} target="_blank" rel="noopener">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="card-dark flex flex-col justify-between gap-6">
            <h3 className="display-md">{home.bookCard.title}</h3>
            <p className="text-on-dark-soft">{home.bookCard.body}</p>
            <div className="flex flex-col gap-3">
              <a className="btn btn-ghost w-full" href={home.bookCard.scheduleHref}>
                {home.bookCard.scheduleLabel}
              </a>
              {studios.map((studio) => {
                const labels = home.bookCard.contactLabels[studio.key as keyof typeof home.bookCard.contactLabels];
                return (
                  <div key={studio.key} className="btn-pair">
                    <a className="btn btn-ghost" href={`sms:${studio.phoneRaw}`} aria-label={`${labels.text} ${studio.phoneDisplay}`}>
                      {labels.text}
                    </a>
                    <a className="btn btn-ghost" href={`tel:${studio.phoneRaw}`} aria-label={`${labels.call} ${studio.phoneDisplay}`}>
                      {labels.call}
                    </a>
                  </div>
                );
              })}
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
