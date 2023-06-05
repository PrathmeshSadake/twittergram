import { prisma } from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, username, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
      data: { email, username, name, hashedPassword },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
