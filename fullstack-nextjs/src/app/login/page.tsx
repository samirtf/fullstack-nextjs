"use client";

import { Suspense, useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/context/UserContext";
import styles from "./page.module.css";

function LoginForm() {
  const { user, login } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);
      setIsLoading(true);
      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data.error ?? "E-mail ou senha inválidos");
          return;
        }
        console.log("user logged", data.email);
        login(data);
        const from = searchParams.get("from") ?? "/perfil";
        router.push(from);
      } catch (e) {
        console.log("excecao:", e);
        setError("Nao deu pra conectar, tenta de novo");
      } finally {
        setIsLoading(false);
      }
    },
    [email, password, login, router, searchParams]
  );

  const handleRegistrar = useCallback(() => {
    setError("Registro ainda nao disponivel");
  }, []);

  if (user) {
    router.replace(searchParams.get("from") ?? "/perfil");
    return null;
  }

  return (
    <div className={styles.page}>
      <main id="main" className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && (
            <p className={styles.errorMessage} role="alert">
              {error}
            </p>
          )}
          <div className={styles.field}>
            <label htmlFor="login-email" className={styles.label}>
              E-mail
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
              autoComplete="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="login-password" className={styles.label}>
              Senha
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.input}
              autoComplete="current-password"
            />
          </div>
          <div className={styles.actions}>
            <button
              type="submit"
              className={styles.primaryButton}
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Entrando…" : "Entrar"}
            </button>
            <button
              type="button"
              onClick={handleRegistrar}
              className={styles.secondaryButton}
            >
              Registrar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className={styles.page} />}>
      <LoginForm />
    </Suspense>
  );
}
