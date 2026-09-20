---
name: netlify-form
description: Add or change a cancel, freeze, upgrade, or membership-change field. Use when they say add a question, the form is broken, or a member says they cancelled but we never got it. They will not say "field name attribute".
---

# Membership forms

`/cancel/`, `/freeze/`, `/upgrade/`, `/downgrade/` and `/help/` post to Netlify, not Arketa. A person still reads them by hand.

1. Add or edit the field in `src/content/membership-forms.ts`. The `name` is what Netlify stores. **Never rename an existing name.**
2. Run `yarn build` so `public/__forms.html` matches and `forms-check` confirms it. Look for `forms-check: 5 forms declared and rendered consistently`.
3. Do not hand-edit `__forms.html`.

A 200 on the thank-you page does not prove the field was recorded.
