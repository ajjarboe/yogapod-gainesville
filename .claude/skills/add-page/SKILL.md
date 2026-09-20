---
name: add-page
description: Add a new screen people can open. Use when they say add a page or a new tab. They will not say "Vite entry".
---

# Add a page

Use this only if they want a **destination** with its own URL (`/gift-cards/`), not a new section or sentence on an existing screen. If they only want words, that is update-copy.

A new page is four places. Miss one and the page ships blank:

1. Words in `src/content/` if it is mostly copy. Page in `src/pages/NewPage.tsx`, built from `src/components/patterns/`.
2. `gift-cards/index.html` — same meta pattern as the other shells.
3. `src/entries/giftCards.tsx` — three lines, import and `mount`.
4. Register the HTML file in `vite.config.ts` **and** `scripts/prerender.mjs`. Add the URL row to `src/pages/AGENTS.md`.

Public URL paths are inherited from Squarespace. Renaming one breaks search rankings and old email links — say that out loud.
