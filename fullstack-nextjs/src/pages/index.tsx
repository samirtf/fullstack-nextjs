import type { GetStaticProps } from "next";
import { characters } from "@/lib/data";
import type { Character } from "@/lib/schemas";
import { CharacterList } from "@/components/CharacterList/CharacterList";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import styles from "./index.module.css";

export const getStaticProps: GetStaticProps = async () => ({
  props: { characters },
});

type HomeProps = {
  characters: Character[];
};

export default function Home({ characters }: HomeProps) {
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <HomeHeader characters={characters} />
        <CharacterList characters={characters} />
      </main>
    </div>
  );
}
