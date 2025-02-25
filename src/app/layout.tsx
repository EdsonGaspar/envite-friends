import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Envite Friends",
  description: "Send links to friends for envite them.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${montserrat.variable} ${oxanium.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased">{children}</body>
    </html>
  );
}
