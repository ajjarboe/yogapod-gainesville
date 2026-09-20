import type { ReactNode } from "react";

/** Use this at the top of every interior page. The home page uses Hero instead. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="band band-warm">
      <div className="shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="display-lg mt-3">{title}</h1>
        {lede ? <p className="lede mt-5">{lede}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
