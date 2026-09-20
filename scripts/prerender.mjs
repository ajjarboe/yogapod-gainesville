import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const pages = [
  { file: "dist/index.html", mod: "/src/pages/HomePage.tsx", exp: "HomePage" },
  { file: "dist/our-classes/index.html", mod: "/src/pages/OurClassesPage.tsx", exp: "OurClassesPage" },
  { file: "dist/our-studios/index.html", mod: "/src/pages/OurStudiosPage.tsx", exp: "OurStudiosPage" },
  { file: "dist/our-team/index.html", mod: "/src/pages/OurTeamPage.tsx", exp: "OurTeamPage" },
  { file: "dist/culture/index.html", mod: "/src/pages/CulturePage.tsx", exp: "CulturePage" },
  { file: "dist/inclusivity/index.html", mod: "/src/pages/InclusivityPage.tsx", exp: "InclusivityPage" },
  {
    file: "dist/your-first-class/index.html",
    mod: "/src/pages/YourFirstClassPage.tsx",
    exp: "YourFirstClassPage",
  },
  { file: "dist/pricing/index.html", mod: "/src/pages/PricingPage.tsx", exp: "PricingPage" },
  {
    file: "dist/northwest-schedule/index.html",
    mod: "/src/pages/NorthwestSchedulePage.tsx",
    exp: "NorthwestSchedulePage",
  },
  {
    file: "dist/southwest-schedule/index.html",
    mod: "/src/pages/SouthwestSchedulePage.tsx",
    exp: "SouthwestSchedulePage",
  },
  { file: "dist/events/index.html", mod: "/src/pages/EventsPage.tsx", exp: "EventsPage" },
  {
    file: "dist/teacher-training/index.html",
    mod: "/src/pages/TeacherTrainingPage.tsx",
    exp: "TeacherTrainingPage",
  },
  { file: "dist/workshops/index.html", mod: "/src/pages/WorkshopsPage.tsx", exp: "WorkshopsPage" },
  { file: "dist/faq/index.html", mod: "/src/pages/FaqPage.tsx", exp: "FaqPage" },
  { file: "dist/careers/index.html", mod: "/src/pages/CareersPage.tsx", exp: "CareersPage" },
  {
    file: "dist/privacy-policy/index.html",
    mod: "/src/pages/PrivacyPolicyPage.tsx",
    exp: "PrivacyPolicyPage",
  },
  { file: "dist/membership-change/index.html", mod: "/src/pages/MembershipChangePage.tsx", exp: "MembershipChangePage" },
  { file: "dist/membership-change/thanks/index.html", mod: "/src/pages/MembershipThanksPage.tsx", exp: "MembershipThanksPage" },
  { file: "dist/cancel/index.html", mod: "/src/pages/CancelPage.tsx", exp: "CancelPage" },
  { file: "dist/freeze/index.html", mod: "/src/pages/FreezePage.tsx", exp: "FreezePage" },
  { file: "dist/upgrade/index.html", mod: "/src/pages/UpgradePage.tsx", exp: "UpgradePage" },
  { file: "dist/downgrade/index.html", mod: "/src/pages/DowngradePage.tsx", exp: "DowngradePage" },
  { file: "dist/404.html", mod: "/src/pages/NotFoundPage.tsx", exp: "NotFoundPage" },
];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  ssr: {
    external: ["react", "react-dom", "react-dom/server", "@tanstack/react-query"],
  },
});

try {
  const { QueryProvider } = await vite.ssrLoadModule("/src/lib/QueryProvider.tsx");

  for (const page of pages) {
    const mod = await vite.ssrLoadModule(page.mod);
    const html = renderToString(createElement(QueryProvider, null, createElement(mod[page.exp])));
    const file = path.join(root, page.file);
    const current = readFileSync(file, "utf8");
    if (!current.includes('<div id="root"></div>')) {
      throw new Error(`empty root missing in ${page.file}`);
    }
    writeFileSync(file, current.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    console.log("prerender", page.file);
  }
} finally {
  await vite.close();
}
