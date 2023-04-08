import { getSession } from "next-auth/client";
import prisma from "./prisma";

const serverAuth = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    // Signed in
    console.log("Session", JSON.stringify(session, null, 2));
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!currentUser) throw new Error("Not Signed in");
    return {
      currentUser,
    };
  } else {
    // Not Signed in
    res.status(401);
    throw new Error("Not Signed in");
  }
  res.end();
};

export default serverAuth;
