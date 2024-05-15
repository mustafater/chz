import type { Metadata } from "next";
import { ThirdwebProvider } from "@/app/thirdweb";
import { Inter } from "next/font/google";
import Head from "./components/head";
import Headers from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head/>
      <body className={inter.className} >
        
      <ThirdwebProvider>
        <Headers/>
      <div className="max-w-6xl mx-auto">{children}</div>
      </ThirdwebProvider>
      </body>
    </html>
  );
}
