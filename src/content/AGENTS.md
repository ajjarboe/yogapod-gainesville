# Content files

Plain strings only. Bold `**like this**`. Italic `*like this*`. Links `[label](href)`.

Arketa ids and every schedule embed: `checkout.ts` — nowhere else. Prices, class styles, studio hours, team, and FAQ each have their own file named after the thing.

`membership-forms.ts` holds the cancel, freeze, upgrade and change request forms. Adding or renaming a field there is not free: Netlify only records fields it saw in static HTML at deploy time, so run `yarn forms` afterwards. `yarn build` regenerates and then verifies this, and fails if a rendered field is missing from the stub.
