import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | Personagens do Senhor dos Anéis",
  description: "Seu perfil e dados de usuário.",
};

export default function PerfilLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
