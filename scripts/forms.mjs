/** Netlify learns which forms exist by parsing static HTML at deploy time. Our
 *  forms are rendered by React, and the prerendered markup is not enough on its
 *  own — a field Netlify has never seen is dropped from the submission without
 *  an error. This writes a plain HTML file listing every form and field so the
 *  deploy-time scan finds them.
 *
 *  Generated from src/content/membership-forms.ts. Runs as part of `yarn build`. */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const repo = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const vite = await createServer({
  root: repo,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});

let forms;
let honeypot;
try {
  const mod = await vite.ssrLoadModule("/src/content/membership-forms.ts");
  forms = mod.siteForms;
  honeypot = mod.honeypot;
} finally {
  await vite.close();
}

function inputFor(field) {
  if (field.type === "textarea") return `<textarea name="${field.name}"></textarea>`;
  if (field.type === "select") return `<select name="${field.name}"></select>`;
  if (field.type === "radio") return `<input type="radio" name="${field.name}" />`;
  return `<input type="${field.type}" name="${field.name}" />`;
}

const blocks = forms
  .map((form) => {
    const fields = form.fields
      .map((field) => `      <label>${field.label}${inputFor(field)}</label>`)
      .join("\n");
    return `    <form name="${form.name}" method="POST" data-netlify="true" netlify-honeypot="${honeypot}">
      <input type="hidden" name="form-name" value="${form.name}" />
      <p hidden><label>Do not fill this in <input name="${honeypot}" /></label></p>
${fields}
    </form>`;
  })
  .join("\n\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Yoga Pod forms</title>
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <!-- Generated from src/content/membership-forms.ts. Do not hand-edit. yarn forms -->
${blocks}
  </body>
</html>
`;

const out = path.join(repo, "public/__forms.html");
mkdirSync(path.dirname(out), { recursive: true });
writeFileSync(out, html);

const count = forms.reduce((total, form) => total + form.fields.length, 0);
console.log(`forms: wrote ${forms.length} forms and ${count} fields to public/__forms.html`);
