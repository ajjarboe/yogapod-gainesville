import { useSyncExternalStore } from "react";

export type ColorMode = "light" | "dark";

/** Must match the key read by the inline script in vite.config.ts. */
const STORAGE_KEY = "pod-theme";

const listeners = new Set<() => void>();

function saved(): ColorMode | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function systemMode(): ColorMode {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function current(): ColorMode {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function apply(mode: ColorMode) {
  document.documentElement.dataset.theme = mode;
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (!saved()) apply(systemMode());
  };
  media.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(listener);
    media.removeEventListener("change", onSystemChange);
  };
}

/** Follows the visitor's system setting until they flip the switch, then remembers their pick. */
export function useColorMode() {
  const mode = useSyncExternalStore(subscribe, current, (): ColorMode => "light");

  const toggle = () => {
    const next: ColorMode = current() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private browsing — still switch for this page */
    }
    apply(next);
  };

  return { mode, toggle };
}
