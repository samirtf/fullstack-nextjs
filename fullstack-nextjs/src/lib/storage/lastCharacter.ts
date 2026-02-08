const KEY = "last-character";

export function getLastCharacterId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return sessionStorage.getItem(KEY);
  } catch (e) {
    console.log("excecao:", e);
    return null;
  }
}

export function setLastCharacterId(id: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(KEY, id);
  } catch (e) {
    console.log("excecao:", e);
  }
}
