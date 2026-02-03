import { NextResponse } from "next/server";
import { getCharacterById } from "@/lib/data";

type RouteContext = {
  params: Promise<{ id: string }>;
};

/**
 * GET /api/characters/[id]
 * Retorna um personagem pelo id. 404 se não existir.
 */
export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  const character = getCharacterById(id);

  if (!character) {
    return NextResponse.json(
      { error: "Personagem não encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(character);
}
