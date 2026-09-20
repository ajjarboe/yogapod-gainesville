import type { FormHTMLAttributes, ReactNode } from "react";

/** Use this for any form that posts to Netlify. Field names must also appear in
 *  public/__forms.html — Netlify reads that file at deploy time to learn the
 *  form exists, and silently drops posts for fields it has never seen. Run
 *  `yarn forms` after changing src/content/membership-forms.ts. */
export function NetlifyForm({
  name,
  honeypot = "company",
  children,
  ...props
}: FormHTMLAttributes<HTMLFormElement> & { name: string; honeypot?: string; children: ReactNode }) {
  return (
    <form method="POST" name={name} data-netlify="true" netlify-honeypot={honeypot} {...props}>
      <input type="hidden" name="form-name" value={name} />
      <p className="hp">
        <label>
          Do not fill this in <input name={honeypot} tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {children}
    </form>
  );
}
