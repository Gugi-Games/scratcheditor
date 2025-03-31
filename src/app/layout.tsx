import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import AppNavMenu from "@/components/app/AppNavMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <title>Scratch Map Editor</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppNavMenu />
        <div className="mt-15">{children}</div>
        {/* </AppNavMenu> */}
      </body>
    </html>
  );
}
