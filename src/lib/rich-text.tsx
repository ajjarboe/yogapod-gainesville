import type { ReactNode } from "react";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g;

/** Render data-only copy that may include **bold**, *italic*, and [label](href). */
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(TOKEN);
  const nodes: ReactNode[] = parts.map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      const external = href.startsWith("http");
      return (
        <a key={i} href={href} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
          {link[1]}
        </a>
      );
    }
    const italic = part.match(/^\*([^*]+)\*$/);
    if (italic) return <em key={i}>{italic[1]}</em>;
    return part;
  });
  return <span className={className}>{nodes}</span>;
}
