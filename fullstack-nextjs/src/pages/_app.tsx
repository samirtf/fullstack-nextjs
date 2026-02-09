import type { AppProps } from "next/app";
import Link from "next/link";
import { Providers } from "@/providers";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <a href="#main" className="skipLink">
        Pular para o conteúdo
      </a>
      <nav className="nav">
        <Link href="/">Início</Link>
        <Link href="/perfil">Meu Perfil</Link>
      </nav>
      <Component {...pageProps} />
    </Providers>
  );
}
