import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { characters, getCharacterById } from "@/lib/data";
import { CharacterDetailGuard } from "@/components/CharacterDetailGuard/CharacterDetailGuard";
import { CharacterLikeDislike } from "@/components/CharacterLikeDislike/CharacterLikeDislike";
import { LastVisitedTracker } from "@/components/LastVisitedTracker/LastVisitedTracker";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return characters.map((character) => ({ id: character.id }));
}

export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const character = getCharacterById(id);
  if (!character) {
    return { title: "Personagem nao encontrado" };
  }
  return {
    title: `${character.name} | Personagens do Senhor dos Anéis`,
    description: character.shortDescription,
  };
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;
  const character = getCharacterById(id);

  if (!character) {
    notFound();
  }

  const { name, race, shortDescription, content, image } = character;

  return (
    <div className={styles.page}>
      <LastVisitedTracker characterId={id} />
      <main id="main" className={styles.main}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backLink}>
            ← Voltar à listagem
          </Link>
        </nav>

        <CharacterDetailGuard character={character}>
          <article className={styles.article}>
            <header className={styles.header}>
              {image ? (
                <div className={styles.imageWrapper}>
                  <Image
                    src={image}
                    alt={`Ilustração de ${name}`}
                    width={600}
                    height={360}
                    className={styles.image}
                    priority
                    sizes="(max-width: 640px) 100vw, 600px"
                  />
                </div>
              ) : (
                <div className={styles.imagePlaceholder} />
              )}
              <div className={styles.headerText}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.race}>{race}</p>
                <p className={styles.excerpt}>{shortDescription}</p>
              </div>
            </header>

            <div className={styles.content}>
              <h2 className={styles.contentTitle}>Sobre o personagem</h2>
              <p className={styles.contentBody}>{content}</p>
            </div>
            <div className={styles.likeDislike}>
              <CharacterLikeDislike characterId={character.id} />
            </div>
          </article>
        </CharacterDetailGuard>
      </main>
    </div>
  );
}
