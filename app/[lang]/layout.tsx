import { GoogleAnalytics } from "@next/third-parties/google";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { cn } from "@/utils";
import { dynamicMetadata } from "@/utils/config";
import type { Metadata } from "next";

export default async function RootLayout({
  children,
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
      <GoogleAnalytics gaId="G-R61JNS0P7G" />
    </html>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return dynamicMetadata(params);
}
