# Deploy yogapodgainesville.com

They will say “go live”, “deploy”, or “the form is broken” — not “promote the preview”. Follow these steps. Do not improvise.

Live (today): **https://www.yogapodgainesville.com** is still Squarespace. This rebuild has no Netlify site yet. Create the Netlify site and point DNS only when a human asks.

Push to `main` will publish once a Netlify site exists. Prefer a **preview** first if you touched a form, a public path, or checkout short links.

## Before you promote

1. `yarn lint && yarn typecheck && yarn build`
2. Confirm the build printed `forms-check: 5 forms declared and rendered consistently`.
3. Confirm `checkout-check` passed.
4. Deploy a preview.
5. Curl the preview:

```bash
PREVIEW=https://YOUR-PREVIEW.netlify.app
curl -sI "$PREVIEW/" | head -n 1
curl -sI "$PREVIEW/our-classes/" | head -n 1
curl -sI "$PREVIEW/pricing/" | head -n 1
curl -sI "$PREVIEW/northwest-schedule/" | head -n 1
curl -sI "$PREVIEW/cancel/" | head -n 1
curl -sI "$PREVIEW/freeze/" | head -n 1
curl -sI "$PREVIEW/upgrade/" | head -n 1
curl -sI "$PREVIEW/downgrade/" | head -n 1
curl -sI "$PREVIEW/membership-change/" | head -n 1
curl -sI "$PREVIEW/membership-change/thanks/" | head -n 1
curl -sI "$PREVIEW/account" | head -n 5
curl -sI "$PREVIEW/help/" | head -n 1
curl -sI "$PREVIEW/30" | head -n 5
curl -sI "$PREVIEW/intro" | head -n 5
curl -sI "$PREVIEW/unlimited" | head -n 5
curl -sI "$PREVIEW/annual" | head -n 5
```

Marketing pages, the four request pages, and `/help/` should be 200. `/account` should 301 to `/membership-change/`. `/30` `/intro` `/unlimited` `/annual` should 302 to Arketa.

6. Submit one cancel with name `PREVIEW TEST` and confirm it in Netlify → Forms → `membership-cancel`. Repeat once each for freeze, upgrade, downgrade, and help (`account-help`). A 200 on the thank-you page does not prove it was recorded.
7. Only then merge or promote.

## Do not

- Add a `/* → /index.html` redirect
- Hand-edit `__forms.html`
- Rename a form field
- Change an Arketa id outside `src/content/checkout.ts` (update `netlify.toml` short links in the same change)
- Copy Ritual's analytics or Meta pixel IDs
- Publish by uploading a folder
- `git init` this folder unless a human asked
