---
name: deploy
description: Ship the site or fix a membership request form. Use when they say deploy, go live, preview, the form is broken, or a cancel never showed up. They will not say "Netlify promote".
---

# Deploy

They want it live, or they think a cancel / freeze / upgrade disappeared. Follow `.github/DEPLOY.md`. Do not improvise.

1. `yarn lint && yarn typecheck && yarn build`
2. Confirm the build printed `forms-check: 5 forms declared and rendered consistently`.
3. Ship a **preview**, never production first.
4. Curl the marketing pages for 200, `/account` for 301, `/30` for 302.
5. Submit one `PREVIEW TEST` on cancel and confirm it in Netlify → Forms. A 200 on the thank-you page does not prove it was recorded.
6. Only then merge or promote.

Do not add a `/* → /index.html` redirect. Do not hand-edit `__forms.html`. Do not copy Ritual's analytics IDs.
