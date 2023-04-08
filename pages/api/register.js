import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export default async function handler(req, res, next) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { email, username, name, password } = req.body;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await prisma.user.create({
      data: {
        email,
        username,
        name,
        hashedPassword,
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
