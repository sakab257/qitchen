import type { Metadata } from "next";
import { forum, satoshi } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Qitchen",
  description: "Sushi Resto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${forum.variable} ${satoshi.variable} antialiased relative`}>
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
