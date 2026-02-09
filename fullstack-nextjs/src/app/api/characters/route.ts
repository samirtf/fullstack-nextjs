import { NextResponse } from "next/server";
import { characters } from "@/lib/data";
import { logger } from "@/lib/logger";

export async function GET() {
  logger.log("lista chars");
  return NextResponse.json(characters);
}
