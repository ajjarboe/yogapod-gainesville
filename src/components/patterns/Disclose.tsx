import { RichText } from "@/lib/rich-text";

/** Use this for anything that opens: class styles, FAQ answers, team bios.
 *  Stays a native details so it works before React hydrates and prints correctly. */
export function Disclose({
  summary,
  meta,
  paragraphs,
  list,
}: {
  summary: string;
  meta?: string[];
  paragraphs: string[];
  /** Optional bullets after the paragraphs, e.g. a teacher's classes. */
  list?: { title: string; items: string[] };
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
        {list?.items.length ? (
          <div className="prose">
            <p>
              <strong>{list.title}</strong>
            </p>
            <ul>
              {list.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
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
