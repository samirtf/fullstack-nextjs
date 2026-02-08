import { NextResponse } from "next/server";
import { defaultUser } from "@/lib/data";

export async function GET() {
  console.log("get user chamou");
  return NextResponse.json(defaultUser);
}
