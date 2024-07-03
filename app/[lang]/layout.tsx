import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { Nav } from "@/components/Nav";

import Footer from "@/components/Footer";
import { cn } from "@/utils";
export const metadata: Metadata = {
  title: "Printable Calendars",
  description: `Printing a calendar is as simple as clicking a button. Just hit the big red \"Print\" button and you have your calendar. Want to add notes? \n Click on a day and start typing. No internet connection? No problem. Download one of our many available PDF calendars and print directly from your computer.`,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
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
