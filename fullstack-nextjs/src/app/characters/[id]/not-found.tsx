import Link from "next/link";
import styles from "./not-found.module.css";

export default function CharacterNotFound() {
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <h1 className={styles.title}>Personagem nao encontrado</h1>
        <p className={styles.message}>
          O endereco pode estar errado ou ele nao existe.
        </p>
        <Link href="/" className={styles.link}>
          Voltar à listagem
        </Link>
      </main>
    </div>
  );
}
