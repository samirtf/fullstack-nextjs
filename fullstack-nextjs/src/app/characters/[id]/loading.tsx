import styles from "./loading.module.css";

export default function CharacterLoading() {
  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <div className={styles.nav}>
          <span className={styles.backPlaceholder}>← Voltar à listagem</span>
        </div>
        <div className={styles.article}>
          <header className={styles.header}>
            <div className={styles.imageSkeleton} />
            <div className={styles.headerText}>
              <div
                className={`${styles.lineSkeleton} ${styles.lineSkeletonShort}`}
              />
              <div
                className={styles.lineSkeleton}
                style={{ width: "40%" }}
              />
              <div
                className={`${styles.lineSkeleton} ${styles.lineSkeletonMedium}`}
              />
            </div>
          </header>
          <div className={styles.content}>
            <p className={styles.status}>Carregando…</p>
          </div>
        </div>
      </main>
    </div>
  );
}
