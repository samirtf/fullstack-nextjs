import { userSchema, type User } from "@/lib/schemas";

type UserWithCredentials = User & { password: string };

function withoutPassword(u: UserWithCredentials): User {
  const { password: _, ...user } = u;
  return userSchema.parse(user);
}

const usersWithCredentials: UserWithCredentials[] = [
  {
    id: "admin",
    name: "Samir",
    email: "samir.admin@condado.com.br",
    password: "1234567",
  },
  {
    id: "frodo",
    name: "Frodo",
    email: "frodo@condado.com.br",
    password: "1234567",
  },
];

const validatedUsers = usersWithCredentials.map(withoutPassword);

export const defaultUser: User = validatedUsers[0];

export { usersWithCredentials };
