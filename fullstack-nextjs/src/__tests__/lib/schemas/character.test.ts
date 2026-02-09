import { characterSchema, characterArraySchema } from "@/lib/schemas";

describe("characterSchema", () => {
  it("aceita personagem com campos obrigatorios", () => {
    const valid = {
      id: "frodo",
      name: "Frodo Bolseiro",
      race: "Hobbit",
      shortDescription: "Portador do Um Anel.",
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

  it("aceita personagem com campos opcionais", () => {
    const valid = {
      id: "p1",
      name: "Personagem Teste",
      race: "Humano",
      shortDescription: "Resumo",
      content: "Conteudo longo aqui.",
      image: "https://example.com/foto.png",
      createdAt: "2025-01-01T00:00:00.000Z",
    };
    const result = characterSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejeita personagem sem id", () => {
    const invalid = {
      name: "Frodo",
      race: "Hobbit",
      shortDescription: "Resumo",
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
      shortDescription: "Resumo",
      content: "Conteúdo",
    };
    const result = characterSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("valida personagem com restricted true", () => {
    const valid = {
      id: "elrond",
      name: "Elrond",
      race: "Meio-elfo",
      shortDescription: "Senhor de Valfenda.",
      content: "Descrição.",
      restricted: true,
    };
    const result = characterSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restricted).toBe(true);
    }
  });

  it("default restricted para false quando omitido", () => {
    const valid = {
      id: "frodo",
      name: "Frodo",
      race: "Hobbit",
      shortDescription: "Resumo",
      content: "Conteúdo",
    };
    const result = characterSchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restricted).toBe(false);
    }
  });

  it("rejeita personagem com image invalida (nao URL)", () => {
    const invalid = {
      id: "frodo",
      name: "Frodo",
      race: "Hobbit",
      shortDescription: "Resumo",
      content: "Conteúdo",
      image: "not-a-url",
    };
    const result = characterSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});

describe("characterArraySchema", () => {
  it("aceita array de personagens validos", () => {
    const valid = [
      {
        id: "a",
        name: "Um",
        race: "Hobbit",
        shortDescription: "Resumo A",
        content: "Conteudo A",
      },
      {
        id: "b",
        name: "Dois",
        race: "Mago",
        shortDescription: "Resumo B",
        content: "Conteudo B",
      },
    ];
    const result = characterArraySchema.safeParse(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toHaveLength(2);
    }
  });

  it("rejeita array com personagem invalido", () => {
    const invalid = [
      {
        id: "a",
        name: "Um",
        race: "Hobbit",
        shortDescription: "A",
        content: "B",
      },
      {
        id: "",
        name: "Dois",
        race: "Mago",
        shortDescription: "C",
        content: "D",
      },
    ];
    const result = characterArraySchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});
