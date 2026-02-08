import { characters } from "@/lib/data";
import { CharacterList } from "@/components/CharacterList";
import { HomeHeader } from "@/components/HomeHeader";
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
        <HomeHeader characters={characters} />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}
