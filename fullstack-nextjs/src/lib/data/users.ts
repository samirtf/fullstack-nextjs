import { userSchema, type User } from "@/lib/schemas";

const rawUser: User = {
  id: "user-1",
  name: "Usuário Demo",
  email: "demo@exemplo.com",
  avatar: "https://placehold.co/100x100?text=Demo",
};

export const defaultUser: User = userSchema.parse(rawUser);
