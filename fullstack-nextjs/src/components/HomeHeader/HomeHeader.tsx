"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { getLastCharacterSlug } from "@/lib/storage/lastCharacter";
import type { Character } from "@/lib/schemas";
import styles from "./HomeHeader.module.css";

type HomeHeaderProps = {
  characters: Character[];
};

export function HomeHeader({ characters }: HomeHeaderProps) {
  const { user } = useUser();
  const [lastSlug, setLastSlug] = useState<string | null>(null);

  useEffect(() => {
    setLastSlug(getLastCharacterSlug());
  }, []);

  const visibleCount = useMemo(
    () => characters.filter((c) => !c.restricted || user).length,
    [characters, user]
  );

  const lastCharacter = lastSlug
    ? characters.find((c) => c.slug === lastSlug)
    : null;


  return (
    <header className={styles.header}>
      {lastCharacter && (
        <p className={styles.lastVisited}>
          Último visitado:{" "}
          <Link href={`/items/${lastCharacter.slug}`}>
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
