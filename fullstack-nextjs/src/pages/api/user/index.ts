import type { NextApiRequest, NextApiResponse } from "next";
import { defaultUser } from "@/lib/data";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  if (_req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json(defaultUser);
}
