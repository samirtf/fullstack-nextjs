"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CharacterError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Character page error:", error);
  }, [error]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Algo deu errado</h1>
        <p className={styles.message}>
          Não foi possível carregar os dados do personagem. Tente novamente.
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={reset} className={styles.button}>
            Tentar novamente
          </button>
          <Link href="/" className={styles.link}>
            Voltar à listagem
          </Link>
        </div>
      </main>
    </div>
  );
}
