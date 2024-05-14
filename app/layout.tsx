"use client" 
import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar  from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
      <Providers>
      <Navbar/>
          {children}
      </Providers>
      </body>
    </html>
  );
}