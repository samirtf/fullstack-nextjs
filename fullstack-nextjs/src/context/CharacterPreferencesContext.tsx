"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import {
  type Preference,
  preferencesReducer,
} from "@/lib/reducers/preferences";
import { logger } from "@/lib/logger";

export type { Preference } from "@/lib/reducers/preferences";

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
  } catch {
    return {};
  }
}

function savePreferences(userId: string, prefs: Record<string, Preference>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(prefs));
  } catch {
    // Ignore storage errors
  }
}

type CharacterPreferencesContextValue = {
  getPreference: (characterSlug: string) => Preference | null;
  setPreference: (characterSlug: string, value: Preference | null) => void;
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
  const [preferences, dispatch] = useReducer(
    preferencesReducer,
    userId ? loadPreferences(userId) : {}
  );

  useEffect(() => {
    if (userId) {
      dispatch({ type: "LOAD", payload: loadPreferences(userId) });
    } else {
      dispatch({ type: "CLEAR" });
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      savePreferences(userId, preferences);
    }
  }, [userId, preferences]);

  const getPreference = useCallback(
    (characterSlug: string): Preference | null => {
      return preferences[characterSlug] ?? null;
    },
    [preferences]
  );

  const setPreference = useCallback(
    (characterSlug: string, value: Preference | null) => {
      logger.log("pref", characterSlug, value);
      dispatch({ type: "SET_PREFERENCE", payload: { characterSlug, value } });
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
