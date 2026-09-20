---
paths: src/content/checkout.ts
---

# Checkout

Every Arketa offering id and price lives here. Short ad links in `netlify.toml` must keep pointing at the same ids.

Do not rename an id that ads already use (`/30`, `/intro`, `/unlimited`, `/annual`). Change the matching redirect in `netlify.toml` in the same edit. `yarn build` runs `checkout-check` and fails on drift.
