import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/lib/schemas";
import { CharacterLikeDislike } from "@/components/CharacterLikeDislike/CharacterLikeDislike";
import styles from "./CharacterCard.module.css";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  const { id, name, race, excerpt, image } = character;
  console.log("card", name);

  return (
    <article className={styles.card}>
      <Link href={`/characters/${id}`} className={styles.link}>
        {image ? (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={`Ilustração de ${name}`}
              width={400}
              height={280}
              className={styles.image}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className={styles.imagePlaceholder} />
        )}
        <div className={styles.content}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.race}>{race}</p>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
      </Link>
      <div className={styles.actions}>
        <CharacterLikeDislike characterId={id} />
      </div>
    </article>
  );
}
