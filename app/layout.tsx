"use client" 
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import Navbar  from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body className={inter.className}>
      <Providers>
      <Navbar />
          {children}
          <Toaster
          toastOptions={{
            style: {
              textAlign: "center",
            },
          }}
        />
      </Providers>
      </body>
    </html>
  );
}