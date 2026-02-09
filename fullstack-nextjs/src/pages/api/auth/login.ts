import type { NextApiRequest, NextApiResponse } from "next";
import { usersWithCredentials } from "@/lib/data/users";
import { logger } from "@/lib/logger";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  logger.log("login api");
  try {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return res.status(400).json({
        error: "E-mail e senha são obrigatórios",
      });
    }

    const found = usersWithCredentials.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!found || found.password !== password) {
      return res.status(401).json({
        error: "E-mail ou senha inválidos",
      });
    }

    // Exclude password from API response
    const { password: _unused, ...user } = found;
    void _unused;
    logger.log("logou", found.email);
    return res.status(200).json(user);
  } catch (e) {
    logger.error("excecao no login api:", e);
    return res.status(400).json({
      error: "Requisição inválida",
    });
  }
}
