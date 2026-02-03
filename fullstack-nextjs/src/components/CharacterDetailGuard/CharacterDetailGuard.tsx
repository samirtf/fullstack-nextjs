"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import type { Character } from "@/lib/schemas";
import styles from "./CharacterDetailGuard.module.css";

type CharacterDetailGuardProps = {
  character: Character;
  children: React.ReactNode;
};

/**
 * Para personagens restritos, exibe o conteúdo só quando o usuário está logado.
 * Caso contrário, mostra mensagem para fazer login.
 */
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
          <Link href="/perfil" className={styles.loginLink}>
            Ir para o perfil
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
