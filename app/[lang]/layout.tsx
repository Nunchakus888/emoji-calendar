import { GoogleAnalytics } from "@next/third-parties/google";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { cn } from "@/utils";
import { dynamicMetadata } from "@/utils/config";
import type { Metadata } from "next";
import { FooterDescription} from "@/components/ui/server";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
    <body
      className={cn(
        GeistSans.variable,
          GeistMono.variable,
          "flex flex-col h-screen container justify-between relative",
        )}
      >
        {children}
        <FooterDescription lang={params.lang} />
        <GoogleAnalytics gaId="G-R61JNS0P7G" />
      </body>
    </html>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return dynamicMetadata(params);
}
