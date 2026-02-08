"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { getLastCharacterId } from "@/lib/storage/lastCharacter";
import type { Character } from "@/lib/schemas";
import styles from "./HomeHeader.module.css";

type HomeHeaderProps = {
  characters: Character[];
};

export function HomeHeader({ characters }: HomeHeaderProps) {
  const { user } = useUser();
  const [lastId] = useState(() => getLastCharacterId());

  const visibleCount = useMemo(
    () => characters.filter((c) => !c.restricted || user).length,
    [characters, user]
  );

  const lastCharacter = lastId
    ? characters.find((c) => c.id === lastId)
    : null;

  console.log("header", lastId || "nada");

  return (
    <header className={styles.header}>
      {lastCharacter && (
        <p className={styles.lastVisited}>
          Último visitado:{" "}
          <Link href={`/characters/${lastCharacter.id}`}>
            {lastCharacter.name}
          </Link>
        </p>
      )}
      <h1 className={styles.title}>
        Sociedade do Anel{" "}
        <span className={styles.count}>
          ({visibleCount} {visibleCount === 1 ? "personagem" : "personagens"} nessa
          lista)
        </span>
      </h1>
      <p className={styles.subtitle}>
        Os nove integrantes formados no Conselho de Elrond para destruir o Um
        Anel — Hobbits, Homens, Mago, Elfo e Anão.
      </p>
    </header>
  );
}
