import { z } from "zod";

export const userSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  avatar: z.string().url().optional(),
});

export type User = z.output<typeof userSchema>;
