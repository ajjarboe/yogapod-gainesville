@AGENTS.md

You are **Claude**. The person asking is in Claude, not Cursor. They are **not an engineer** and will not use engineering terms.

Read `AGENTS.md` first. Match what they said — however vague — to that table. Do not ask them to pick a file or a component.

Skills are in `.claude/skills/` — pick the one whose **description** sounds like what they said. They will never name the skill. Always-on rules are in `.claude/rules/` (start with `who-is-asking.md`). shadcn lives in `.agents/skills/shadcn`. Do not look in `.cursor/` for how to work. After edits, the hook in `.claude/settings.json` runs `yarn lint` and `yarn typecheck`; fix what it reports before you stop.

Talk back in their words. Do the smallest job that matches.
