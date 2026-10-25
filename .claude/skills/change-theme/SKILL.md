---
name: change-theme
description: Color, type size, or make it warmer / less blue / bigger. Use when they dislike a color. They will not say "token" or "hex".
---

# Change theme

Hex only in `src/styles/palette.css`. Mix in `theme.css`. Do not add a hex in a component. Do not copy this palette to the RAD or RITUAL sites.

Every color has a light and a dark value. Light is `:root` in `theme.css`; dark is the `html[data-theme="dark"]` block. Change both, then look at the page in both modes with the sun/moon switch in the header.
