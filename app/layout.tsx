import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import { FileSystemProvider } from "@/components/file-explorer/file-provider";
import { Footer } from "@/components/main/footer";
import { NavBar } from "@/components/main/nav";
import { Analytics } from '@vercel/analytics/react';

const fontSans = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Solidity DB Explorer",
  description: "Solidity Database Explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} `}>
        <Analytics />
        <NavBar />
        <FileSystemProvider>
          {children}
        </FileSystemProvider>
        <Footer />
      </body>
    </html>
  );
}
