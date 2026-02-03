import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personagens do Senhor dos Anéis",
  description: "Conheça os personagens da Terra-média.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <a href="#main" className="skipLink">
            Pular para o conteúdo
          </a>
          <nav className="nav" aria-label="Principal">
            <Link href="/">Início</Link>
            <Link href="/perfil">Perfil</Link>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  );
}
