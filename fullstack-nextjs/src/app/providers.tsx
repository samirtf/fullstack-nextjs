"use client";

import { UserProvider } from "@/context/UserContext";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
