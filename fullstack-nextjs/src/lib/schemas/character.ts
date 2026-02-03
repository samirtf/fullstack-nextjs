import { z } from "zod";

/**
 * Schema de validação para Personagem (listagem e página de detalhes).
 * Domínio: Personagens do Senhor dos Anéis.
 */
export const characterSchema = z.object({
  id: z.string().min(1, "ID é obrigatório"),
  name: z.string().min(1, "Nome é obrigatório"),
  race: z.string().min(1, "Raça é obrigatória"),
  excerpt: z.string().min(1, "Resumo é obrigatório"),
  content: z.string().min(1, "Descrição é obrigatória"),
  image: z.string().url().optional(),
  createdAt: z.string().optional(),
});

export type Character = z.output<typeof characterSchema>;

export const characterArraySchema = z.array(characterSchema);

export type CharacterArray = z.output<typeof characterArraySchema>;
