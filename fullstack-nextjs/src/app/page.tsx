import { characters } from "@/lib/data";
import { CharacterList } from "@/components/CharacterList";
import styles from "./page.module.css";

/**
 * Página inicial: listagem de personagens (geração estática).
 * Personagens restritos só aparecem quando o usuário está logado (CharacterList).
 */
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Sociedade do Anel</h1>
          <p className={styles.subtitle}>
            Os nove integrantes formados no Conselho de Elrond para destruir o
            Um Anel — Hobbits, Homens, Mago, Elfo e Anão.
          </p>
        </header>
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}
