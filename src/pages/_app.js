import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Navbar from "@/components/Navbar";
import { UserContext } from "@/lib/context";
import { useUserData } from "@/lib/hooks";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  const { user, username } = useUserData();

  return (
    <UserContext.Provider value={{ user, username }}>
      <main className={poppins.className}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </main>
    </UserContext.Provider>
  );
}
