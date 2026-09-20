import { RichText } from "@/lib/rich-text";

/** Use this for anything that opens: class styles, FAQ answers, team bios.
 *  Stays a native details so it works before React hydrates and prints correctly. */
export function Disclose({
  summary,
  meta,
  paragraphs,
}: {
  summary: string;
  meta?: string[];
  paragraphs: string[];
}) {
  return (
    <details className="disclose">
      <summary>{summary}</summary>
      <div className="disclose-body">
        {paragraphs.map((text) => (
          <p key={text}>
            <RichText text={text} />
          </p>
        ))}
        {meta?.length ? (
          <div className="meta-row">
            {meta.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </details>
  );
}
