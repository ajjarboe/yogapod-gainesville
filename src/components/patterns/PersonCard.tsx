import { Disclose } from "@/components/patterns/Disclose";
import { Photo } from "@/components/patterns/Photo";
import type { Person } from "@/content/schema";

/** A bio opens only when we have one written. Without it, name and role alone. */
export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="card-flat">
      {person.photo ? (
        <Photo
          src={`/img/team/${person.photo}`}
          alt={`${person.name}, ${person.role}`}
          widths={[400, 800]}
          sizes="(min-width: 900px) 20rem, 90vw"
          width={800}
          height={800}
          className="media mb-5"
        />
      ) : null}
      <p className="person-name">{person.name}</p>
      <p className="person-role">{person.role}</p>
      {person.bio?.length ? <Disclose summary="Read bio" paragraphs={person.bio} /> : null}
    </div>
  );
}
