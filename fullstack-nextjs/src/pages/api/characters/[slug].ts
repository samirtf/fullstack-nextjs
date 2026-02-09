import type { NextApiRequest, NextApiResponse } from "next";
import { getCharacterBySlug } from "@/lib/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const slug = req.query.slug as string;
  const character = getCharacterBySlug(slug);

  if (!character) {
    return res.status(404).json({ error: "Personagem nao encontrado" });
  }

  return res.status(200).json(character);
}
