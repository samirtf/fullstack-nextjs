"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Preference = "like" | "dislike";

const STORAGE_PREFIX = "character-preferences";

function getStorageKey(userId: string) {
  return `${STORAGE_PREFIX}-${userId}`;
}

function loadPreferences(userId: string | null): Record<string, Preference> {
  if (!userId || typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(getStorageKey(userId));
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, string>;
    const result: Record<string, Preference> = {};
    for (const [id, val] of Object.entries(parsed)) {
      if (val === "like" || val === "dislike") result[id] = val;
    }
    return result;
  } catch (e) {
    console.log("excecao:", e);
    return {};
  }
}

function savePreferences(userId: string, prefs: Record<string, Preference>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(prefs));
  } catch (e) {
    console.log("excecao:", e);
  }
}

type CharacterPreferencesContextValue = {
  getPreference: (characterId: string) => Preference | null;
  setPreference: (characterId: string, value: Preference | null) => void;
};

const CharacterPreferencesContext =
  createContext<CharacterPreferencesContextValue | null>(null);

type CharacterPreferencesProviderProps = {
  children: ReactNode;
  userId: string | null;
};

export function CharacterPreferencesProvider({
  children,
  userId,
}: CharacterPreferencesProviderProps) {
  const [preferences, setPreferences] = useState<Record<string, Preference>>(
    () => (userId ? loadPreferences(userId) : {})
  );

  useEffect(() => {
    if (userId) {
      setPreferences(loadPreferences(userId));
    } else {
      setPreferences({});
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      savePreferences(userId, preferences);
    }
  }, [userId, preferences]);

  const getPreference = useCallback(
    (characterId: string): Preference | null => {
      return preferences[characterId] ?? null;
    },
    [preferences]
  );

  const setPreference = useCallback(
    (characterId: string, value: Preference | null) => {
      console.log("pref", characterId, value);
      setPreferences((prev) => {
        const next = { ...prev };
        if (value === null) {
          delete next[characterId];
        } else {
          next[characterId] = value;
        }
        return next;
      });
    },
    []
  );

  const value = useMemo(
    () => ({ getPreference, setPreference }),
    [getPreference, setPreference]
  );

  return (
    <CharacterPreferencesContext.Provider value={value}>
      {children}
    </CharacterPreferencesContext.Provider>
  );
}

export function useCharacterPreferences() {
  const context = useContext(CharacterPreferencesContext);
  if (context === null) {
    throw new Error(
      "useCharacterPreferences must be used within CharacterPreferencesProvider"
    );
  }
  return context;
}
