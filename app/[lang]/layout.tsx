import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Nav } from "@/components/Nav";
import Footer from "@/components/Footer";
import { cn } from "@/utils";
import { metadata as md } from "@/utils/config";
export const metadata = md;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: object;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          "flex flex-col h-screen container",
        )}
      >
        {children}
      </body>
    </html>
  );
}
