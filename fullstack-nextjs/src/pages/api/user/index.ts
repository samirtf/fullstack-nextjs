import type { NextApiRequest, NextApiResponse } from "next";
import { defaultUser } from "@/lib/data";
import { logger } from "@/lib/logger";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  logger.log("get user chamou");
  return res.status(200).json(defaultUser);
}
