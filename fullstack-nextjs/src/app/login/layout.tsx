import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Personagens do Senhor dos Anéis",
  description: "Faça login para acessar seu perfil e conteúdos exclusivos.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
