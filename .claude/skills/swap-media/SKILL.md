---
name: swap-media
description: Swap a photo. Use when they say new photo for the studio, a new headshot, or put this picture up. They will not say "public asset path".
---

# Swap media

Put the file in `public/img/` at the widths that already exist for that stem, then update the name in the matching content file. The build does not generate sizes.

| They mean | Where |
|---|---|
| Home hero still | `public/img/hero-640.jpg` / `1100` / `1800` |
| Home hero video | `public/video/hero.mp4`, path in `src/content/home.ts` |
| A studio | `public/img/studio-northwest-` or `studio-southwest-` at 640 and 1100, path in `src/content/studios.ts` |
| A person | `public/img/team/{name}-400.jpg` and `-800.jpg`, stem in `src/content/team.ts` |
| Header wordmark | `public/img/wordmark.png` |
