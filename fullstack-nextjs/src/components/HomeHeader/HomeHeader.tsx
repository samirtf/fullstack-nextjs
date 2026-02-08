"use client";

import { useMemo } from "react";
import { useUser } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";
import styles from "./HomeHeader.module.css";

type HomeHeaderProps = {
  characters: Character[];
};

export function HomeHeader({ characters }: HomeHeaderProps) {
  const { user } = useUser();

  const visibleCount = useMemo(
    () => characters.filter((c) => !c.restricted || user).length,
    [characters, user]
  );

  return (
    <header className={styles.header}>
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
