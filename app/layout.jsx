import "./globals.css";
import Nav from "./Nav";
import { Poppins } from "@next/font/google";
import AuthContext from "./auth/AuthContext";
import QueryWrapper from "./QueryWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body
        className={`mx-4 md:mx-48 xl:mx-96 ${poppins.className} bg-gray-200`}
      >
        <QueryWrapper>
          <AuthContext>
            <Nav />
            {children}
          </AuthContext>
        </QueryWrapper>
      </body>
    </html>
  );
}
