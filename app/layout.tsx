import Layout from "@/components/Layout";
import { raleway } from "./(home)/fonts";
import "./globals.css";
import type { Metadata } from "next";

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
      <body className={raleway.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
