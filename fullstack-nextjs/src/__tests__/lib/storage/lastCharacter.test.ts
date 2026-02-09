import { getLastCharacterSlug, setLastCharacterSlug } from "@/lib/storage/lastCharacter";

describe("lastCharacter storage", () => {
  const storage: Record<string, string> = {};
  const getItem = jest.fn((key: string) => storage[key] ?? null);
  const setItem = jest.fn((key: string, value: string) => {
    storage[key] = value;
  });
  const removeItem = jest.fn((key: string) => {
    delete storage[key];
  });

  beforeEach(() => {
    jest.clearAllMocks();
    Object.keys(storage).forEach((k) => delete storage[k]);
    Object.defineProperty(global, "sessionStorage", {
      value: { getItem, setItem, removeItem },
      writable: true,
    });
  });

  it("retorna null quando vazio", () => {
    getItem.mockReturnValue(null);
    expect(getLastCharacterSlug()).toBeNull();
    expect(getItem).toHaveBeenCalledWith("last-character");
  });

  it("retorna slug armazenado", () => {
    getItem.mockReturnValue("frodo");
    expect(getLastCharacterSlug()).toBe("frodo");
  });

  it("setLastCharacterSlug persiste o slug", () => {
    setLastCharacterSlug("sam");
    expect(setItem).toHaveBeenCalledWith("last-character", "sam");
    expect(storage["last-character"]).toBe("sam");
  });
});
