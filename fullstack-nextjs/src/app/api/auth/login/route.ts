import { NextResponse } from "next/server";
import { usersWithCredentials } from "@/lib/data/users";

export async function POST(request: Request) {
  console.log("login api");
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
    console.log("logou", found.email);
    return NextResponse.json(user);
  } catch (e) {
    console.log("excecao:", e);
    return NextResponse.json(
      { error: "Requisição inválida" },
      { status: 400 }
    );
  }
}
