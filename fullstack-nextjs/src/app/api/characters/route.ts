import { NextResponse } from "next/server";
import { characters } from "@/lib/data";

/**
 * GET /api/characters
 * Retorna a lista de todos os personagens.
 */
export async function GET() {
  return NextResponse.json(characters);
}
