import Image from "next/image";
import Link from "next/link";
import type { GetStaticProps, GetStaticPaths } from "next";
import { characters, getCharacterBySlug } from "@/lib/data";
import type { Character } from "@/lib/schemas";
import { CharacterDetailGuard } from "@/components/CharacterDetailGuard/CharacterDetailGuard";
import { CharacterLikeDislike } from "@/components/CharacterLikeDislike/CharacterLikeDislike";
import { LastVisitedTracker } from "@/components/LastVisitedTracker/LastVisitedTracker";
import styles from "./[slug].module.css";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: characters.map((c) => ({ params: { slug: c.slug } })),
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const character = getCharacterBySlug(slug);
  if (!character) return { notFound: true };
  return { props: { character }, revalidate: 60 };
};

type ItemPageProps = {
  character: Character;
};

export default function ItemPage({ character }: ItemPageProps) {
  const { name, race, shortDescription, content, image, slug } = character;

  return (
    <div className={styles.page}>
      <LastVisitedTracker characterSlug={slug} />
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
              <CharacterLikeDislike characterSlug={character.slug} />
            </div>
          </article>
        </CharacterDetailGuard>
      </main>
    </div>
  );
}
