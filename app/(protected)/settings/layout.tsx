import { Inter } from "next/font/google";
import "../../../app/globals.css";
import SideBar from "./components/sidebar";
const inter = Inter({ subsets: ["latin"] });
import Header from '@/components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header></Header>
      <div className="flex flex-row gap-10">
        <SideBar></SideBar>
        <div className="pt-5">{children}</div>
      </div>
    </div>
  );
}
