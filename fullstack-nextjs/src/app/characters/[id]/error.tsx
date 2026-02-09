"use client";

import { useEffect } from "react";
import Link from "next/link";
import { logger } from "@/lib/logger";
import styles from "./error.module.css";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function CharacterError({ error, reset }: ErrorProps) {
  useEffect(() => {
    logger.error("deu erro na pagina do personagem:", error);
  }, [error]);

  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <h1 className={styles.title}>Erro ao carregar personagem</h1>
        <p className={styles.message}>
          Erro ao carregar a pagina. Tenta de novo.
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
