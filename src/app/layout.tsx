import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import CustomThemeProvider from "@/components/theme/CustomThemeprovider";
import DockBar from "@/components/dockbar/dockbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Purnama alam",
  description: "Portfolio Ali Purnama alam",
};

export default function RootLayout({
    
    
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
     <CustomThemeProvider>
        {children}
         <div className="fixed max-md:bottom-0 top-[90%] left-1/2 transform -translate-1/2 " >
         <DockBar/>
         </div>
     </CustomThemeProvider>
      </body>
    </html>
  );
}
