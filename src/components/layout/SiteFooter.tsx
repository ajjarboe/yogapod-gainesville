import { footer } from "@/content/footer";
import { site } from "@/content/site";
import { studios } from "@/content/studios";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          {studios.map((studio) => (
            <div key={studio.key}>
              <h4>{studio.name}</h4>
              <div className="foot-links">
                <span>
                  {studio.street}
                  <br />
                  {studio.city}
                </span>
                <a href={`tel:${studio.phoneRaw}`}>Call or text {studio.phoneDisplay}</a>
                <a href={studio.schedulePath}>See the schedule</a>
              </div>
            </div>
          ))}

          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h4>{column.heading}</h4>
              <div className="foot-links">
                {column.links.map((link) => (
                  <a
                  key={link.href}
                  href={link.href}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {site.brand}
          </span>
          <div className="flex flex-wrap items-center gap-5">
            <a href={site.apex.href} target="_blank" rel="noopener">
              APEX
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener">
              Instagram
            </a>
            <a href={site.social.facebook} target="_blank" rel="noopener">
              Facebook
            </a>
            <a href={site.social.spotify} target="_blank" rel="noopener">
              Spotify
            </a>
            {footer.legal.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
