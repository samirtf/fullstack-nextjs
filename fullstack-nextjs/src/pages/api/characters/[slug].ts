import type { NextApiRequest, NextApiResponse } from "next";
import { getCharacterBySlug } from "@/lib/data";
import { logger } from "@/lib/logger";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slug = req.query.slug as string;
  logger.log("busca char", slug);
  const character = getCharacterBySlug(slug);

  if (!character) {
    return res.status(404).json({ error: "Personagem nao encontrado" });
  }

  return res.status(200).json(character);
}
