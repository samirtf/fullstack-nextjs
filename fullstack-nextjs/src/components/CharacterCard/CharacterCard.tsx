import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/schemas";
import styles from "./CharacterCard.module.css";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const { id, name, race, excerpt, image } = character;

  return (
    <article className={styles.card}>
      <Link href={`/characters/${id}`} className={styles.link}>
        {image ? (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Ilustração de ${name}`}
              width={400}
              height={240}
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={styles.imagePlaceholder} aria-hidden="true" />
        )}
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.race}>{race}</p>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
