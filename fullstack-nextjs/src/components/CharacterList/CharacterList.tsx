"use client";

import { useMemo } from "react";
import { useCharacterPreferences } from "@/context/CharacterPreferencesContext";
import { useUser } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";
import { CharacterCard } from "@/components/CharacterCard";
import styles from "./CharacterList.module.css";

type CharacterListProps = {
  characters: Character[];
};

function sortByPreference(
  chars: Character[],
  getPreference: (id: string) => "like" | "dislike" | null
): Character[] {
  return [...chars].sort((a, b) => {
    const pa = getPreference(a.id);
    const pb = getPreference(b.id);
    const order = (p: "like" | "dislike" | null) => (p === "like" ? 1 : 0);
    return order(pb) - order(pa);
  });
}

/**
 * Lista de personagens filtrada por login: restritos só aparecem quando o usuário está logado.
 * Quando logado, personagens favoritados (coração) aparecem primeiro.
 */
export function CharacterList({ characters }: CharacterListProps) {
  const { user } = useUser();
  const { getPreference } = useCharacterPreferences();

  const visibleCharacters = useMemo(() => {
    const filtered = characters.filter((c) => !c.restricted || user);
    return user ? sortByPreference(filtered, getPreference) : filtered;
  }, [characters, user, getPreference]);

  return (
    <section className={styles.grid} aria-label="Lista de personagens">
      {visibleCharacters.length === 0 ? (
        <p className={styles.empty} role="status">
          Nenhum personagem disponível no momento.
        </p>
      ) : (
        visibleCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))
      )}
    </section>
  );
}
