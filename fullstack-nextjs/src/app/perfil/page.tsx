"use client";

import Image from "next/image";
import { useUser } from "@/context/UserContext";
import { useCallback, useState } from "react";
import styles from "./page.module.css";

export default function PerfilPage() {
  const { user, login, logout, updateUser } = useUser();
  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [avatar, setAvatar] = useState(user?.avatar ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSimularLogin = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/user");
      if (!res.ok) throw new Error("Falha ao buscar usuário");
      const data = await res.json();
      login(data);
      setName(data.name);
      setEmail(data.email);
      setAvatar(data.avatar ?? "");
    } catch {
      setError(
        "Não foi possível carregar o perfil. Usando dados de demonstração."
      );
      // Fallback: usar dados locais se a API falhar
      login({
        id: "user-1",
        name: "Usuário Demo",
        email: "demo@exemplo.com",
        avatar: "https://placehold.co/100x100?text=Demo",
      });
      setName("Usuário Demo");
      setEmail("demo@exemplo.com");
      setAvatar("https://placehold.co/100x100?text=Demo");
    } finally {
      setIsLoading(false);
    }
  }, [login]);

  const handleLogout = useCallback(() => {
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
      try {
        updateUser({ name, email, avatar: avatar || undefined });
        setIsEditing(false);
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
    return (
      <div className={styles.page}>
        <main id="main" className={styles.main}>
          <h1 className={styles.title}>Perfil</h1>
          <p className={styles.message}>
            Você não está logado. Use o botão abaixo para simular o login.
          </p>
          {error && (
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={handleSimularLogin}
            className={styles.primaryButton}
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? "Carregando…" : "Simular login"}
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <h1 className={styles.title}>Perfil</h1>

        {!isEditing ? (
          <section className={styles.profile} aria-label="Dados do perfil">
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
                <div className={styles.avatarPlaceholder} aria-hidden="true">
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
                aria-busy={saveLoading}
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
