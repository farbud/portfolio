"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
