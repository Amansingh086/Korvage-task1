import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication | Jira Software",
  description: "Sign in or create an account to access Jira Software.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
