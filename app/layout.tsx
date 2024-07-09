"use client" 
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar  from "./components/navbar/Navbar";
import "./globals.css";
import Footer from "./components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
      <Providers>
      <Navbar />
          {children}
          <Footer/>
      </Providers>
      </body>
    </html>import type { Metadata } from "next";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar  from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import './utils/fontawesome'; // Adjust the path as needed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baobab Development Solutions",
  description: "Baobab Development Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Navbar />
          {children}
          <Footer/>
      </Providers>
        </body>
    </html>
  );
}

  );
}