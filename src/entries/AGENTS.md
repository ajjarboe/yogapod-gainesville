# Entries

One file per route, three lines each. It imports the page and calls `mount`.

Adding a page means four edits: the page, its `index.html` shell, an entry here, and registering it in both `vite.config.ts` and `scripts/prerender.mjs`.
