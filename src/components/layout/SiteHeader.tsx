import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { headerCta, nav } from "@/content/nav";
import { site } from "@/content/site";
import type { NavGroup, NavLink } from "@/content/schema";

function isGroup(item: NavGroup | NavLink): item is NavGroup {
  return "links" in item;
}

function NavAnchor({
  href,
  className,
  active,
  children,
}: {
  href: string;
  className?: string;
  active?: boolean;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      data-active={active}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
    >
      {children}
    </a>
  );
}

/** True for the page itself and for a group holding the current page. */
function matches(item: NavGroup | NavLink, path: string) {
  return isGroup(item) ? item.links.some((l) => l.href === path) : item.href === path;
}

export function SiteHeader({ path }: { path: string }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpenGroup(null);
      setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="head">
        <div className="shell head-row">
          <a className="head-logo" href="/">
            <img src="/img/wordmark.png" width={964} height={196} alt="Yoga Pod Gainesville" />
          </a>

          <nav className="head-nav" aria-label="Main">
            {nav.map((item) =>
              isGroup(item) ? (
                <div
                  key={item.label}
                  className="nav-group"
                  onMouseEnter={() => setOpenGroup(item.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="nav-link"
                    data-active={matches(item, path)}
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  >
                    {item.label}
                  </button>
                  {openGroup === item.label ? (
                    <div className="nav-menu">
                      {item.links.map((link) => (
                        <NavAnchor key={link.href} href={link.href}>
                          {link.label}
                        </NavAnchor>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <NavAnchor key={item.href} className="nav-link" href={item.href} active={matches(item, path)}>
                  {item.label}
                </NavAnchor>
              ),
            )}
            <a className="btn btn-primary ml-2" href={headerCta.href}>
              {headerCta.label}
            </a>
          </nav>

          <button
            type="button"
            className="burger"
            aria-expanded={drawerOpen}
            aria-controls="drawer"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            {drawerOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      {drawerOpen ? (
        <div className="drawer" id="drawer">
          {nav.map((item) =>
            isGroup(item) ? (
              <div key={item.label} className="drawer-group">
                <span>{item.label}</span>
                {item.links.map((link) => (
                  <NavAnchor key={link.href} href={link.href}>
                    {link.label}
                  </NavAnchor>
                ))}
              </div>
            ) : (
              <NavAnchor key={item.href} href={item.href}>
                {item.label}
              </NavAnchor>
            ),
          )}
          <a className="btn btn-primary mt-8 w-full" href={headerCta.href}>
            {headerCta.label}
          </a>
          <p className="mt-6 text-sm text-muted">{site.app.androidNote}</p>
        </div>
      ) : null}
    </>
  );
}
