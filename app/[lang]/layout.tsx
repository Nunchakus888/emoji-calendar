import { GoogleAnalytics } from "@next/third-parties/google";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { cn } from "@/utils";
import { dynamicMetadata, metadata as md } from "@/utils/config";
import type { Metadata } from "next";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
    <head >
      <link rel="alternate" hrefLang={params.lang} href={md.site} />
    </head >
    <body
      className={cn(
        GeistSans.variable,
          GeistMono.variable,
          "flex flex-col h-screen container justify-between",
        )}
      >
        {children}
        <div className="flex items-center text-gray-300 text-xs w-full justify-center pb-2 gap-2">
          © 2024 x-calendar. All rights reserved.
          <a href="https://x.com/X_CalendarPrint">
            Contact Us
          </a>
        </div>
        <GoogleAnalytics gaId="G-R61JNS0P7G" />
      </body>
    </html>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return dynamicMetadata(params);
}
