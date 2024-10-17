import type { Metadata } from "next";

import { inter, playfair_display, raleway } from "./(root)/(home)/fonts";
import "./globals.css";

import QueryProvider from "@/providers/QueryProvider";
import ToastProvider from "@/providers/ToastProvider";

export const metadata: Metadata = {
  title: "RealHome",
  description: "Building Lives, One Home at a Time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${playfair_display.variable} ${inter.variable}`}
      >
        <QueryProvider>
          <ToastProvider />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
