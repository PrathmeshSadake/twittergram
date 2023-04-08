import "./globals.css";

export const metadata = {
  title: "Twitter Gram",
  description: "Next Generation Twitter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
