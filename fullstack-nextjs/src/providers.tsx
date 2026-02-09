"use client";

// todo: unificar com user context se crescer
import { CharacterPreferencesProvider } from "@/context/CharacterPreferencesContext";
import { UserProvider, useUser } from "@/context/UserContext";
import type { ReactNode } from "react";

function CharacterPreferencesWrapper({ children }: { children: ReactNode }) {
  const { user } = useUser();
  return (
    <CharacterPreferencesProvider userId={user?.id ?? null}>
      {children}
    </CharacterPreferencesProvider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <UserProvider>
      <CharacterPreferencesWrapper>{children}</CharacterPreferencesWrapper>
    </UserProvider>
  );
}
