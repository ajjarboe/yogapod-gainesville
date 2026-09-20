/** Netlify only records fields it saw in static HTML at deploy time. A field
 *  that is rendered but not declared in public/__forms.html is dropped from the
 *  submission silently — no error, no bounce, the member believes they
 *  cancelled. This compares the built pages against the stub and fails the
 *  build on any mismatch.
 *
 *  Runs after prerender, as part of `yarn build`. */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(repo, "dist");

const routes = [
  { page: "cancel", form: "membership-cancel" },
  { page: "freeze", form: "membership-freeze" },
  { page: "upgrade", form: "membership-upgrade" },
  { page: "downgrade", form: "membership-downgrade" },
];

const read = (file) => readFileSync(path.join(dist, file), "utf8");
const formIn = (html, name) =>
  html.match(new RegExp(`<form[^>]*name="${name}"[\\s\\S]*?</form>`))?.[0] ?? null;
const namesIn = (html) => new Set([...html.matchAll(/name="([^"]+)"/g)].map((m) => m[1]));

let stub;
try {
  stub = read("__forms.html");
} catch {
  throw new Error("dist/__forms.html is missing — Netlify will not register any form. Run `yarn forms`.");
}

const problems = [];

for (const { page, form } of routes) {
  const rendered = formIn(read(`${page}/index.html`), form);
  if (!rendered) {
    problems.push(`/${page}/ does not render a form named "${form}"`);
    continue;
  }
  if (!rendered.includes('data-netlify="true"')) {
    problems.push(`/${page}/ form "${form}" is missing data-netlify — Netlify will ignore it`);
  }

  const declared = formIn(stub, form);
  if (!declared) {
    problems.push(`__forms.html never declares "${form}" — every submission would be dropped`);
    continue;
  }

  const missing = [...namesIn(rendered)].filter((name) => !namesIn(declared).has(name));
  if (missing.length > 0) {
    problems.push(`"${form}" renders fields absent from __forms.html: ${missing.join(", ")}`);
  }
}

if (problems.length > 0) {
  console.error("forms-check failed — submissions would be lost:");
  for (const problem of problems) console.error(`  - ${problem}`);
  console.error("\nRun `yarn forms` to regenerate public/__forms.html, then rebuild.");
  process.exit(1);
}

console.log(`forms-check: ${routes.length} forms declared and rendered consistently`);
