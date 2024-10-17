import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

import Layout from "@/components/admin/Layout";

import ModalProvider from "@/providers/ModalProvider";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
  title: "RealHome Admin",
  description: "Admin Panel for RealHome",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <Layout>
        {children}
        <Toaster />
        <ModalProvider />
      </Layout>
    </SessionProvider>
  );
}
