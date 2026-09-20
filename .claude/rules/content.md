---
paths: src/content/**
---

# Content files

Data only. No JSX. No `className`. Validate with the Zod schema when there is one.

Inline emphasis: `**bold**`, `*italic*`, and `[label](href)` only.

Checkout ids and prices live in `checkout.ts`. Nowhere else may write an `app.arketa.co` URL.

Team photos are stems under `public/img/team/`. Sizes 400 and 800 must already exist — the build does not resize anything.
