import { NextResponse } from "next/server";
import { defaultUser } from "@/lib/data";

/**
 * GET /api/user
 * Retorna o usuário (simulação para tela de perfil).
 */
export async function GET() {
  return NextResponse.json(defaultUser);
}
