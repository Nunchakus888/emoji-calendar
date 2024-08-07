import { GoogleAnalytics } from "@next/third-parties/google";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";

import { cn } from "@/utils";
import { dynamicMetadata, metadata as md } from "@/utils/config";
import type { Metadata } from "next";
import { CopyRight } from "@/components/ui/server";

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
        {/* <FooterDscription locale={params.lang} /> */}

        <CopyRight />
        <GoogleAnalytics gaId="G-R61JNS0P7G" />
      </body>
    </html>
  );
}

export async function generateMetadata({ params }): Promise<Metadata> {
  return dynamicMetadata(params);
}
