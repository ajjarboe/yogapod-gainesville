---
paths: src/styles/**
---

# Theme

`palette.css` is the only place hex is allowed. This palette is yoga pod's own — do not copy it to the RAD or RITUAL repos, and do not copy theirs here.

`theme.css` is semantic tokens and mixes. No new hex. No new CSS file.

Every color needs a light value (`:root`) and a dark value (`html[data-theme="dark"]`) in `theme.css`. Blue text is `--brand-text`; on the always-dark banner and footer it is `--brand-on-dark`.
