# Theme

- `palette.css` — the only place hex is allowed. yoga pod's own, not the RAD or RITUAL palette.
- `theme.css` — semantic tokens and the site classes. No new hex.
- Light and dark mode. `:root` in `theme.css` is light; `html[data-theme="dark"]` overrides the same primitives for dark. A new or changed color needs a value in both. Brand fills (`--brand`) stay the same in both modes.
- Blue text uses `--brand-text` (`text-brand-text`). On strips that are dark in both modes (top banner, footer) use `--brand-on-dark`. `--brand` is for fills, borders, and focus rings.
- The header switch is `useColorMode` in `src/lib/color-mode.ts`. The script that sets the mode before the page draws is in `vite.config.ts`; the storage key in both must match.
- Fonts are self-hosted in `public/fonts/`. Use `font-display` (Oswald) and `font-body` (Nunito Sans).
