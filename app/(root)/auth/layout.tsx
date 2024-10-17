export const metadata = {
  title: "Login to RealHome Admin Panel",
  description: "RealHome Admin Auth Page",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
