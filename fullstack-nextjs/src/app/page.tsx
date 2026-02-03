import { characters } from "@/lib/data";
import { CharacterCard } from "@/components/CharacterCard";
import styles from "./page.module.css";

/**
 * Página inicial: listagem de personagens (geração estática).
 */
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Personagens do Senhor dos Anéis</h1>
          <p className={styles.subtitle}>
            Conheça os personagens da Terra-média.
          </p>
        </header>
        <section className={styles.grid} aria-label="Lista de personagens">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </section>
      </main>
    </div>
  );
}
