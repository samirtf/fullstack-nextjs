import { userSchema } from "@/lib/schemas";

describe("userSchema", () => {
  it("valida usuário com todos os campos obrigatórios", () => {
    const valid = {
      id: "user-1",
      name: "João",
      email: "joao@exemplo.com",
    };
    const result = userSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("João");
      expect(result.data.email).toBe("joao@exemplo.com");
    }
  });

  it("valida usuário com avatar opcional", () => {
    const valid = {
      id: "user-2",
      name: "Maria",
      email: "maria@exemplo.com",
      avatar: "https://example.com/avatar.png",
    };
    const result = userSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejeita usuário com e-mail inválido", () => {
    const invalid = {
      id: "user-1",
      name: "João",
      email: "nao-e-email",
    };
    const result = userSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("rejeita usuário sem nome", () => {
    const invalid = {
      id: "user-1",
      name: "",
      email: "joao@exemplo.com",
    };
    const result = userSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});
