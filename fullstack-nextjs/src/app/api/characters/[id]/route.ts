import { NextResponse } from "next/server";
import { getCharacterById } from "@/lib/data";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { id } = await context.params;
  console.log("busca char", id);
  const character = getCharacterById(id);

  if (!character) {
    return NextResponse.json(
      { error: "Personagem nao encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(character);
}
