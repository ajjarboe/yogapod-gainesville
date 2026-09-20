# yoga pod Gainesville

Public marketing site for APEX | Yoga Pod Gainesville. **This site is built.** What comes next is almost always a small change from someone who is **not an engineer**, will not use engineering words, and is talking to **Claude** (not Cursor).

They will not say “edit `src/content/pricing.ts`”, “add a token”, or “compose a pattern”. They will say “the $169 is now $179”, “Taylor left”, or “add this to the FAQ”.

**Hear that as one of the jobs in the table. Do that job the way this repo already does it.** Do not explore looking for a new architecture. Do not ask them to name a file, component, or color token. Do not invent a new way to style.

If two jobs could fit, do the smaller one (change the words, not the page). If you still cannot tell, ask **one** short question in their words, then map it.

Talk back in plain language. Yarn only (`yarn`, `yarn dlx`). Never `npm` or `npx`.

## Booking is not ours

Every class, schedule, event, and payment lives in **Arketa**. This site never books, charges, or holds a membership — it links and it embeds. If someone reports “booking is broken” or “the schedule is empty”, that is almost always Arketa, not this repo. Check `src/content/checkout.ts` for a wrong id before you change anything else.

## How to hear them

| They pointed at the screen and said… | You do | You do not |
| --- | --- | --- |
| “this sentence”, “a typo”, “people keep asking” | Change the matching file in `src/content/` | Redesign the section |
| “this feels off” / “make it match the rest” | Theme tokens or reuse a pattern | Restyle the page from scratch |
| “that box / card / banner” | Find the existing pattern and its content file | Invent a new component |
| “the $169 is now $179” / “new checkout link” | `src/content/checkout.ts` | Paste an Arketa URL in a button |
| “the schedule is empty” / “booking is broken” | Check the ids in `src/content/checkout.ts`, then Arketa | Rewrite the iframe |
| “so-and-so left” / “new director” | `src/content/team.ts` + a photo in `public/img/team/` | Hardcode a name in a page |
| A color, “too dark”, “bigger type” | `palette.css` + `theme.css` | A new hex in a component |

They are in **Claude**. Always-on and path rules live alongside the code as `AGENTS.md` files in each folder.

## They said → you do

| They said something like | What it is | Where |
| --- | --- | --- |
| “the $169 is now $179” / “new checkout link” | price or Arketa id | `src/content/checkout.ts` |
| “add a class” / “FLOW 3” / “HOT is 108 now” | class styles | `src/content/classes.ts` |
| “new hours” / “new phone number” | studio details | `src/content/studios.ts` |
| “add this to the FAQ” / “people keep asking” | FAQ | `src/content/faq.ts` |
| “that sentence is wrong” / “a typo” | copy | matching file in `src/content/` |
| “so-and-so left” / “new headshot” | team | `src/content/team.ts` + `public/img/team/` |
| “change the menu” / “add a page to the nav” | header nav | `src/content/nav.ts` |
| “new photo for the studio” | media | `public/img/` + the path in `src/content/` |
| “make it warmer / less blue / bigger type” | theme | `src/styles/palette.css` + `theme.css` |
| “add a page for gift cards” | page | `src/pages/` + shell + entry + `vite.config.ts` + `scripts/prerender.mjs` |
| “the link from the ad is broken” | short link | `netlify.toml` + `src/content/checkout.ts` |
| “change the cancel form” / “ask them for their end date” | membership request forms | `src/content/membership-forms.ts`, then `yarn forms` |
| “a member says they cancelled but we never got it” | a form field Netlify never registered | run `yarn build` — `forms-check` names the field |

## How to build (the patterns from this repo)

1. Change **copy** in `src/content/` as data. No JSX, no `className`. Bold with `**like this**`. Italic with `*like this*`. Links with `[label](href)`.
2. Change **look** in `src/styles/palette.css` (hex only) and `theme.css` (mixes). Components use `bg-brand`, `text-foreground-soft`, or the existing site classes (`.btn-primary`, `.band-warm`, `.card-flat`). Do not invent a color.
3. Compose **UI** from `src/components/patterns/`. Missing one? Add it there with a “use this when…” comment. Do not restyle a page from scratch.
4. Big titles use `font-display` (Oswald). Body is `font-body` (Nunito Sans). Both are self-hosted in `public/fonts/` — there is no font CDN and no Typekit account to depend on.
5. No arbitrary Tailwind (`text-[13px]`, `shadow-[…]`). Add a token in `theme.css` instead. ESLint will stop you.
6. No new CSS files. Do not hand-edit `src/components/ui/` — `yarn dlx shadcn@latest add <name>` only.
7. Public URLs keep their Squarespace paths (`/our-classes/`, `/pricing/`, `/northwest-schedule/`). Renaming one breaks search rankings and every link in past emails. In-page jumps like `#infinity` are fine.
8. Arketa URLs live **only** in `src/content/checkout.ts`. ESLint fails the build if one appears anywhere else.
9. Every photo goes through `Photo` with widths that actually exist in `public/img/`. The build does not resize anything.
10. Hex lives only in `palette.css`. This palette is yoga pod's own. Do not copy it to the RAD or RITUAL repos, and do not copy theirs here.

## Adding a page (the four places)

A new page is not one file. Miss one and the build fails or the page ships blank:

1. `src/pages/GiftCardsPage.tsx` — the page itself
2. `gift-cards/index.html` — the shell with its own title and description
3. `src/entries/giftCards.tsx` — the entrypoint
4. `vite.config.ts` **and** `scripts/prerender.mjs` — register it in both

## Where things live

```
src/pages/          screens, one per route
src/entries/        Vite entrypoints
src/content/        data-only copy
src/components/patterns/  marketing UI
src/components/layout/    header, footer, sticky bar
src/components/ui/  shadcn — do not hand-edit
src/lib/            rich-text, query provider, mount
src/styles/         palette.css + theme.css
public/             img/, fonts/, favicon, robots, sitemap
```

## Membership request forms

`/cancel/`, `/freeze/`, `/upgrade/` and `/downgrade/` are the only forms on the
site. They post to Netlify, not to Arketa — a person reads them and makes the
change by hand.

The trap: Netlify learns a form's fields by scanning static HTML when the site
deploys, and silently discards any field it has not seen. A renamed field does
not error; the request just arrives with that answer blank. So
`public/__forms.html` is generated from `src/content/membership-forms.ts` by
`yarn forms`, and `yarn build` regenerates it and then checks the built pages
against it, failing if anything is missing.

After changing a form, run `yarn build` and confirm it prints
`forms-check: 4 forms declared and rendered consistently`.

## Commands

- `yarn dev` — local preview
- `yarn build` — regenerates the form stub, checks Arketa links, builds, prerenders, verifies forms
- `yarn forms` — regenerate `public/__forms.html` on its own
- `yarn lint` and `yarn typecheck` must be clean before you finish

## Do not touch

- Arketa ids outside `src/content/checkout.ts` (short links in `netlify.toml` must stay in sync — `scripts/checkout-check.mjs` enforces it)
- `public/__forms.html` by hand — it is generated; edit `membership-forms.ts` and run `yarn forms`
- Public URL paths, without saying out loud that search rankings and old email links will break
- The RAD and RITUAL palettes

## Done

`yarn lint` and `yarn typecheck` pass, and `yarn build` completes. If you touched a price, a checkout id, or a public path, say so plainly so a human can double-check before it ships.
