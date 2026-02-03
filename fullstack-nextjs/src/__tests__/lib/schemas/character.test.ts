import { characterSchema, characterArraySchema } from "@/lib/schemas";

describe("characterSchema", () => {
  it("valida personagem com todos os campos obrigatórios", () => {
    const valid = {
      id: "frodo",
      name: "Frodo Bolseiro",
      race: "Hobbit",
      excerpt: "Portador do Um Anel.",
      content: "Descrição longa do personagem.",
    };
    const result = characterSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.id).toBe("frodo");
      expect(result.data.name).toBe("Frodo Bolseiro");
      expect(result.data.race).toBe("Hobbit");
    }
  });

  it("valida personagem com campos opcionais", () => {
    const valid = {
      id: "gandalf",
      name: "Gandalf",
      race: "Mago",
      excerpt: "Um dos Istari.",
      content: "Descrição do mago.",
      image: "https://example.com/gandalf.png",
      createdAt: "2025-01-01T00:00:00.000Z",
    };
    const result = characterSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejeita personagem sem id", () => {
    const invalid = {
      name: "Frodo",
      race: "Hobbit",
      excerpt: "Resumo",
      content: "Conteúdo",
    };
    const result = characterSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("rejeita personagem com id vazio", () => {
    const invalid = {
      id: "",
      name: "Frodo",
      race: "Hobbit",
      excerpt: "Resumo",
      content: "Conteúdo",
    };
    const result = characterSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("rejeita personagem com image inválida (não URL)", () => {
    const invalid = {
      id: "frodo",
      name: "Frodo",
      race: "Hobbit",
      excerpt: "Resumo",
      content: "Conteúdo",
      image: "not-a-url",
    };
    const result = characterSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});

describe("characterArraySchema", () => {
  it("valida array de personagens válidos", () => {
    const valid = [
      {
        id: "1",
        name: "Frodo",
        race: "Hobbit",
        excerpt: "A",
        content: "B",
      },
      {
        id: "2",
        name: "Gandalf",
        race: "Mago",
        excerpt: "C",
        content: "D",
      },
    ];
    const result = characterArraySchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(2);
    }
  });

  it("rejeita array com personagem inválido", () => {
    const invalid = [
      {
        id: "1",
        name: "Frodo",
        race: "Hobbit",
        excerpt: "A",
        content: "B",
      },
      {
        id: "",
        name: "Gandalf",
        race: "Mago",
        excerpt: "C",
        content: "D",
      },
    ];
    const result = characterArraySchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});
