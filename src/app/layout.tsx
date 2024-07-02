"use client";
import "./globals.css";
import Sidebar from "@/appComponents/Sidebar";
import { Commandbar } from "@/appComponents/Commandbar";
import { RecoilRoot } from "recoil";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <RecoilRoot>
          <Commandbar />
          <div className="flex">
            <Sidebar />
            {children}
          </div>
        </RecoilRoot>
      </body>
    </html>
  );
}
