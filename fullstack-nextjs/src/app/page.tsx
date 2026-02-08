import { characters } from "@/lib/data";
import { CharacterList } from "@/components/CharacterList/CharacterList";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default function Home() {
  console.log("home - passou aqui");
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <HomeHeader characters={characters} />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}
