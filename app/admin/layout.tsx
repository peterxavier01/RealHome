import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { toast } from "react-toastify";

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

  if (session?.user.role !== "ADMIN") {
    toast.error("Only admins can log in");
    redirect("/auth/login");
  }

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
