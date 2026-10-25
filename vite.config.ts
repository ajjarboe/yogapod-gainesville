import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));

/** Sets light or dark on <html> before first paint so dark-mode visitors never see a white flash.
 *  The storage key must match src/lib/color-mode.ts. */
function colorModeScript(): Plugin {
  const script = `(function(){try{var t=localStorage.getItem("pod-theme");if(t!=="light"&&t!=="dark")t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})();`;
  return {
    name: "pod-color-mode",
    transformIndexHtml: () => [{ tag: "script", children: script, injectTo: "head-prepend" }],
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [colorModeScript(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: path.resolve(root, "index.html"),
        ourClasses: path.resolve(root, "our-classes/index.html"),
        ourStudios: path.resolve(root, "our-studios/index.html"),
        ourTeam: path.resolve(root, "our-team/index.html"),
        culture: path.resolve(root, "culture/index.html"),
        inclusivity: path.resolve(root, "inclusivity/index.html"),
        yourFirstClass: path.resolve(root, "your-first-class/index.html"),
        pricing: path.resolve(root, "pricing/index.html"),
        northwestSchedule: path.resolve(root, "northwest-schedule/index.html"),
        southwestSchedule: path.resolve(root, "southwest-schedule/index.html"),
        events: path.resolve(root, "events/index.html"),
        teacherTraining: path.resolve(root, "teacher-training/index.html"),
        workshops: path.resolve(root, "workshops/index.html"),
        faq: path.resolve(root, "faq/index.html"),
        careers: path.resolve(root, "careers/index.html"),
        privacyPolicy: path.resolve(root, "privacy-policy/index.html"),
        membershipChange: path.resolve(root, "membership-change/index.html"),
        membershipThanks: path.resolve(root, "membership-change/thanks/index.html"),
        cancel: path.resolve(root, "cancel/index.html"),
        freeze: path.resolve(root, "freeze/index.html"),
        upgrade: path.resolve(root, "upgrade/index.html"),
        downgrade: path.resolve(root, "downgrade/index.html"),
        help: path.resolve(root, "help/index.html"),
        helpThanks: path.resolve(root, "help/thanks/index.html"),
        notFound: path.resolve(root, "404.html"),
      },
    },
  },
});
