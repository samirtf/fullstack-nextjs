import { NextResponse } from "next/server";
import { usersWithCredentials } from "@/lib/data/users";

/**
 * POST /api/auth/login
 * Autenticação simulada: valida email e senha contra usuários locais.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body as { email?: string; password?: string };

    if (!email || !password) {
      return NextResponse.json(
        { error: "E-mail e senha são obrigatórios" },
        { status: 400 }
      );
    }

    const found = usersWithCredentials.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!found || found.password !== password) {
      return NextResponse.json(
        { error: "E-mail ou senha inválidos" },
        { status: 401 }
      );
    }

    const { password: _, ...user } = found;
    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { error: "Requisição inválida" },
      { status: 400 }
    );
  }
}
