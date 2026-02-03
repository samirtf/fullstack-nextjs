import styles from "./loading.module.css";

/**
 * Exibido durante a navegação para uma página de personagem (Suspense).
 */
export default function CharacterLoading() {
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <div className={styles.nav} aria-hidden="true">
          <span className={styles.backPlaceholder}>← Voltar à listagem</span>
        </div>
        <div className={styles.article}>
          <header className={styles.header}>
            <div className={styles.imageSkeleton} aria-hidden="true" />
            <div className={styles.headerText}>
              <div
                className={`${styles.lineSkeleton} ${styles.lineSkeletonShort}`}
                aria-hidden="true"
              />
              <div
                className={styles.lineSkeleton}
                style={{ width: "40%" }}
                aria-hidden="true"
              />
              <div
                className={`${styles.lineSkeleton} ${styles.lineSkeletonMedium}`}
                aria-hidden="true"
              />
            </div>
          </header>
          <div className={styles.content}>
            <p className={styles.status} role="status" aria-live="polite">
              Carregando…
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
