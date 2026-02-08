import { userSchema, type User } from "@/lib/schemas";

type UserWithCredentials = User & { password: string };

const usersWithCredentials: UserWithCredentials[] = [
  {
    id: "admin",
    name: "Administrador",
    email: "admin@exemplo.com",
    avatar: "https://placehold.co/100x100?text=Admin",
    password: "123456",
  },
  {
    id: "user",
    name: "Usuário",
    email: "user@exemplo.com",
    avatar: "https://placehold.co/100x100?text=User",
    password: "123456",
  },
];

// Validação dos usuários contra o schema (sem password no output)
const validatedUsers = usersWithCredentials.map((u) => {
  const { password: _, ...user } = u;
  return userSchema.parse(user);
});

export const defaultUser: User = validatedUsers[0];

export { usersWithCredentials };
