import type { NextApiRequest, NextApiResponse } from "next";
import { characters } from "@/lib/data";
import { logger } from "@/lib/logger";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  logger.log("lista chars");
  return res.status(200).json(characters);
}
