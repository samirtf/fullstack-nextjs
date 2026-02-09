import { NextResponse } from "next/server";
import { getCharacterById } from "@/lib/data";
import { logger } from "@/lib/logger";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  logger.log("busca char", id);
  const character = getCharacterById(id);

  if (!character) {
    return NextResponse.json(
      { error: "Personagem nao encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(character);
}
