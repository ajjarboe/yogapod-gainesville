import { Disclose } from "@/components/patterns/Disclose";
import { Photo } from "@/components/patterns/Photo";
import type { Person } from "@/content/schema";

/**
 * A bio opens only when we have one written. Without it, name and role alone.
 * Use `round` for a round photo with no card box around it (Our Team, like APEX).
 */
export function PersonCard({ person, round = false }: { person: Person; round?: boolean }) {
  return (
    <div className={round ? "person-round" : "card-flat"}>
      {person.photo ? (
        <Photo
          src={`/img/team/${person.photo}`}
          alt={`${person.name}, ${person.role}`}
          widths={[400, 800]}
          sizes="(min-width: 900px) 20rem, 90vw"
          width={800}
          height={800}
          className={round ? "media-round mb-5" : "media mb-5"}
        />
      ) : null}
      <p className="person-name">{person.name}</p>
      <p className="person-role">{person.role}</p>
      {person.bio?.length || person.classes?.length ? (
        <Disclose
          summary="Read bio"
          paragraphs={person.bio ?? []}
          list={
            person.classes?.length
              ? { title: `Take class with ${person.name.split(" ")[0]}:`, items: person.classes }
              : undefined
          }
        />
      ) : null}
    </div>
  );
}
