import { logger } from "@/lib/logger";

const KEY = "last-character";

export function getLastCharacterSlug(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(KEY);
  } catch (e) {
    logger.error("excecao ao ler ultimo personagem:", e);
    return null;
  }
}

export function setLastCharacterSlug(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(KEY, slug);
  } catch (e) {
    logger.error("excecao ao salvar ultimo personagem:", e);
  }
}
