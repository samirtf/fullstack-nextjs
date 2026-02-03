"use client";

import { useMemo } from "react";
import { useUser } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";
import { CharacterCard } from "@/components/CharacterCard";
import styles from "./CharacterList.module.css";

type CharacterListProps = {
  characters: Character[];
};

/**
 * Lista de personagens filtrada por login: restritos só aparecem quando o usuário está logado.
 */
export function CharacterList({ characters }: CharacterListProps) {
  const { user } = useUser();

  const visibleCharacters = useMemo(
    () => characters.filter((c) => !c.restricted || user),
    [characters, user]
  );

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
