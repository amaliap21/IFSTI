"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [expandNavbar, setExpandNavbar] = React.useState(false);

  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable}`}>
      <body
        className={cn("min-h-screen bg-background font-outfit antialiased")}
      >
        <Navbar expandNavbar={expandNavbar} setExpandNavbar={setExpandNavbar} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
