import "./globals.css";
import { Poppins } from "next/font/google";

import Navigation from "./components/Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "twittergram",
  description: "Share a message with the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} md:mx-48 xl:mx-96 bg-gray-200`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
