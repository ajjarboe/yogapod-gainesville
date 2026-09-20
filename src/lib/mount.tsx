import { StrictMode, type ReactNode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { QueryProvider } from "@/lib/QueryProvider";
import "@/styles/theme.css";

export function mount(node: ReactNode) {
  const el = document.getElementById("root");
  if (!el) throw new Error("root missing");
  const tree = (
    <StrictMode>
      <QueryProvider>{node}</QueryProvider>
    </StrictMode>
  );
  if (el.hasChildNodes()) hydrateRoot(el, tree);
  else createRoot(el).render(tree);
}
