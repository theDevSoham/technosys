import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/assets/fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import base_metadata from "@/seo/base";

export const metadata: Metadata = base_metadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen lg:w-[99vw]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
