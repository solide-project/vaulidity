import type { Metadata } from "next";
import { Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import { FileSystemProvider } from "@/components/file-explorer/file-provider";
import { Footer } from "@/components/main/footer";
import { NavBar } from "@/components/main/nav";
import { Analytics } from '@vercel/analytics/react';
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme/theme-provider";

const fontSans = Red_Hat_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vaulidity Explorer",
  description: "Vaulidity is a open source unified platform for storing and verifying EVM smart contracts, providing open access to source code and bytecodes in a decentralised database. This approach ensures easy, secure, and transparent management of smart contracts verified and unverified.",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          <TooltipProvider delayDuration={0}>
            <FileSystemProvider>
              <NavBar />
              {children}
            </FileSystemProvider>
          </TooltipProvider>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
