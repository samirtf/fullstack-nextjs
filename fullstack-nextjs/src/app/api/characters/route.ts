import { NextResponse } from "next/server";
import { characters } from "@/lib/data";

export async function GET() {
  console.log("lista chars");
  return NextResponse.json(characters);
}
