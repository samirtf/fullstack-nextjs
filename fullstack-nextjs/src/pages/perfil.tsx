"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { useUser } from "@/context/UserContext";
import { logger } from "@/lib/logger";
import { useCallback, useEffect, useState } from "react";
import styles from "./perfil.module.css";

export default function PerfilPage() {
  const { user, logout, updateUser } = useUser();
  const router = useRouter();
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [avatar, setAvatar] = useState(user?.avatar ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      router.replace("/login?from=/perfil");
    }
  }, [user, router]);

  const handleLogout = useCallback(() => {
    logger.log("saiu");
    logout();
    setName("");
    setEmail("");
    setAvatar("");
    setIsEditing(false);
  }, [logout]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
      setSaveLoading(true);
      logger.log("salvando...");
      try {
        updateUser({ name, email, avatar: avatar || undefined });
        setIsEditing(false);
        logger.log("salvou");
      } finally {
        setSaveLoading(false);
      }
    },
    [updateUser, name, email, avatar]
  );

  const startEditing = useCallback(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatar(user.avatar ?? "");
      setIsEditing(true);
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <h1 className={styles.title}>Perfil</h1>

        {!isEditing ? (
          <section className={styles.profile}>
            <div className={styles.avatarSection}>
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={`Avatar de ${user.name}`}
                  className={styles.avatar}
                  width={100}
                  height={100}
                  unoptimized
                />
              ) : (
                <div className={styles.avatarPlaceholder}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            <dl className={styles.dl}>
              <dt className={styles.dt}>Nome</dt>
              <dd className={styles.dd}>{user.name}</dd>
              <dt className={styles.dt}>E-mail</dt>
              <dd className={styles.dd}>{user.email}</dd>
            </dl>
            <div className={styles.actions}>
              <button
                type="button"
                onClick={startEditing}
                className={styles.primaryButton}
              >
                Editar perfil
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className={styles.secondaryButton}
              >
                Sair
              </button>
            </div>
          </section>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="perfil-name" className={styles.label}>
                Nome
              </label>
              <input
                id="perfil-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
                autoComplete="name"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="perfil-email" className={styles.label}>
                E-mail
              </label>
              <input
                id="perfil-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
                autoComplete="email"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="perfil-avatar" className={styles.label}>
                URL do avatar (opcional)
              </label>
              <input
                id="perfil-avatar"
                type="url"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                className={styles.input}
                placeholder="https://..."
              />
            </div>
            <div className={styles.actions}>
              <button
                type="submit"
                className={styles.primaryButton}
                disabled={saveLoading}
              >
                {saveLoading ? "Salvando…" : "Salvar"}
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className={styles.secondaryButton}
                disabled={saveLoading}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
