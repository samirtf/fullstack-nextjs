"use client";

import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { User } from "@/lib/schemas";

type UserState = {
  user: User | null;
};

type UserAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
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

  const login = useCallback((user: User) => {
    dispatch({ type: "LOGIN", payload: user });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const updateUser = useCallback(
    (data: Partial<Pick<User, "name" | "email" | "avatar">>) => {
      dispatch({ type: "UPDATE_USER", payload: data });
    },
    []
  );

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
