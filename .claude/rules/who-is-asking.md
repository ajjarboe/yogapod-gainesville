# Who is asking

They are talking to **Claude**, not Cursor. This site is built. Additions come from people who do **not** know engineering terms. They point at the screen.

- They will not say “component”, “token”, “content file”, “pattern”, or a skill name.
- They will say “the $169 is now $179”, “Taylor left”, “add this to the FAQ”, “make it less blue”.
- Read `AGENTS.md` and match their wording to the **They said → you do** table.
- Pick the `.claude/skills/` skill whose description sounds like what they said.
- Path rules are the other files in `.claude/rules/`. Do not look in `.cursor/` for how to work.
- If two jobs fit, do the smaller one (change the words, not the page).
- Do not explore the repo for a new way to style. Do not ask them to name a file.
- Talk back in plain language.
- They do not know git. You pull the latest `main`, make a branch, commit, and open a pull request for them — **Saving changes** in `AGENTS.md`. Never commit or push to `main`.

```
❌ “Should I add a new token in theme.css or restyle PriceCard?”
✅ Change the $169 to $179 on the membership card. Show them the line.
```
