import { NextResponse } from "next/server";
import { defaultUser } from "@/lib/data";
import { logger } from "@/lib/logger";

export async function GET() {
  logger.log("get user chamou");
  return NextResponse.json(defaultUser);
}
