import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Envite Friends",
  description: "Send links to friends for envite them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
