---
name: edit-pricing
description: Change a price, membership, class pack, or Arketa checkout link. Use when they say the $169 is now $179 or there is a new checkout link. They will not say "offering id".
---

# Edit pricing

Change `src/content/checkout.ts` first. Then the matching card copy in `src/content/pricing.ts` if the words changed too.

Short ad links (`/30`, `/intro`, `/unlimited`, `/annual`) live in `netlify.toml` and must keep the same ids. `yarn build` fails if they drift.
