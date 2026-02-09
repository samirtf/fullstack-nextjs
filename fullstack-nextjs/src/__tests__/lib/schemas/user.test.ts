import { userSchema } from "@/lib/schemas";

describe("userSchema", () => {
  it("aceita usuario valido com campos obrigatorios", () => {
    const valid = {
      id: "u1",
      name: "João",
      email: "joao@teste.com",
    };
    const result = userSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.name).toBe("João");
      expect(result.data.email).toBe("joao@teste.com");
    }
  });

  it("aceita usuario com avatar opcional", () => {
    const valid = {
      id: "u2",
      name: "Maria",
      email: "maria@teste.com",
      avatar: "https://example.com/avatar.png",
    };
    const result = userSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejeita e-mail invalido", () => {
    const invalid = {
      id: "u1",
      name: "João",
      email: "nao-e-email",
    };
    const result = userSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("rejeita usuario sem nome", () => {
    const invalid = {
      id: "u1",
      name: "",
      email: "joao@teste.com",
    };
    const result = userSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});
