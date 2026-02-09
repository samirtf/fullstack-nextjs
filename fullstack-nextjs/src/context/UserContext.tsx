"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import type { User } from "@/lib/schemas";
import { logger } from "@/lib/logger";

const STORAGE_KEY = "user-session";

function loadStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (
      parsed &&
      typeof parsed === "object" &&
      "id" in parsed &&
      "name" in parsed &&
      "email" in parsed
    ) {
      return parsed as User;
    }
  } catch (e) {
    logger.error("excecao ao carregar usuario do storage:", e);
  }
  return null;
}

function saveStoredUser(user: User | null) {
  if (typeof window === "undefined") return;
  if (user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
}

type UserState = {
  user: User | null;
};

type UserAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "RESTORE"; payload: User | null }
  | {
      type: "UPDATE_USER";
      payload: Partial<Pick<User, "name" | "email" | "avatar">>;
    };

function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "RESTORE":
      return { user: action.payload };
    case "UPDATE_USER":
      if (!state.user) return state;
      return {
        user: { ...state.user, ...action.payload },
      };
    default:
      return state;
  }
}

type UserContextValue = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (data: Partial<Pick<User, "name" | "email" | "avatar">>) => void;
};

const UserContext = createContext<UserContextValue | null>(null);

const initialState: UserState = { user: null };

export function UserProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const stored = loadStoredUser();
    if (stored) dispatch({ type: "RESTORE", payload: stored });
  }, []);

  const login = useCallback((user: User) => {
    logger.log("login entrou", user.email);
    saveStoredUser(user);
    dispatch({ type: "LOGIN", payload: user });
  }, []);

  const logout = useCallback(() => {
    saveStoredUser(null);
    dispatch({ type: "LOGOUT" });
  }, []);

  const updateUser = useCallback(
    (data: Partial<Pick<User, "name" | "email" | "avatar">>) => {
      dispatch({ type: "UPDATE_USER", payload: data });
    },
    []
  );

  useEffect(() => {
    if (state.user) saveStoredUser(state.user);
  }, [state.user]);

  const value: UserContextValue = {
    user: state.user,
    login,
    logout,
    updateUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
