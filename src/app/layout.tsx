import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bonoloto Lottery",
  description:
    "Check if your favorite numbers have ever won in the Bonoloto lottery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`{inter.className} md:h-screen md:overflow-clip`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
