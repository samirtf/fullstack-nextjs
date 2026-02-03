import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { characters, getCharacterById } from "@/lib/data";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

/**
 * Geração estática dos ids conhecidos; demais sob demanda com revalidação (ISR).
 */
export async function generateStaticParams() {
  return characters.map((character) => ({ id: character.id }));
}

/**
 * Revalida a página a cada 60 segundos (atualização incremental).
 */
export const revalidate = 60;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const character = getCharacterById(id);
  if (!character) {
    return { title: "Personagem não encontrado" };
  }
  return {
    title: `${character.name} | Personagens do Senhor dos Anéis`,
    description: character.excerpt,
  };
}

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;
  const character = getCharacterById(id);

  if (!character) {
    notFound();
  }

  const { name, race, excerpt, content, image } = character;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <nav className={styles.nav} aria-label="Navegação">
          <Link href="/" className={styles.backLink}>
            ← Voltar à listagem
          </Link>
        </nav>

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
              <div className={styles.imagePlaceholder} aria-hidden="true" />
            )}
            <div className={styles.headerText}>
              <h1 className={styles.name}>{name}</h1>
              <p className={styles.race}>{race}</p>
              <p className={styles.excerpt}>{excerpt}</p>
            </div>
          </header>

          <div className={styles.content}>
            <h2 className={styles.contentTitle}>Sobre o personagem</h2>
            <p className={styles.contentBody}>{content}</p>
          </div>
        </article>
      </main>
    </div>
  );
}
