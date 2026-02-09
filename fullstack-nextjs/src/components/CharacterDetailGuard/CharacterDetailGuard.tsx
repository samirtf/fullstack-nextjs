"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";
import styles from "./CharacterDetailGuard.module.css";

type CharacterDetailGuardProps = {
  character: Character;
  children: React.ReactNode;
};

export function CharacterDetailGuard({
  character,
  children,
}: CharacterDetailGuardProps) {
  const { user } = useUser();

  if (character.restricted && !user) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.loginBlock}>
          <h2 className={styles.loginTitle}>Conteúdo exclusivo</h2>
          <p className={styles.loginMessage}>
            Faça login para ver este personagem.
          </p>
          <Link href={`/login?from=/items/${character.slug}`} className={styles.loginLink}>
            Ir para o login
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
