import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { initializeTheme } from "@/lib/theme";
import AuthProvider from "@/lib/authProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import SideBar from "@/components/functional/sideBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
