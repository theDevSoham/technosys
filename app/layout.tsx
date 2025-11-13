import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/assets/fonts";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Technosys - Way to web",
    template: "%s | Technosys - Way to web",
  },
  description:
    "Technosys delivers enterprise-grade leased lines, fiber broadband, and wireless internet solutions designed for unbeatable speed, reliability, and uptime — empowering homes, startups, and businesses to stay seamlessly connected.",
  keywords: [
    "Technosys internet",
    "leased line provider",
    "high-speed broadband",
    "fiber internet India",
    "wireless internet service",
    "corporate internet solutions",
    "internet for businesses",
    "enterprise connectivity",
    "Technosys broadband",
    "Technosys leased line",
  ],
  authors: [{ name: "Technosys" }],
  creator: "Technosys",
  publisher: "Technosys",
  metadataBase: new URL("https://technosysonline.com/"),
  alternates: {
    canonical: "https://technosysonline.com/",
  },
  openGraph: {
    title: "Technosys | Reliable Leased Line & Fiber Internet Provider",
    description:
      "Experience lightning-fast leased line and broadband internet with Technosys — tailored for businesses, homes, and enterprises that need uninterrupted connectivity.",
    url: "https://technosysonline.com/",
    siteName: "Technosys",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 352,
        alt: "Technosys - High Speed Internet Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technosys | High-Speed Internet for Home & Business",
    description:
      "Upgrade your connectivity with Technosys — trusted provider of fiber broadband, leased lines, and enterprise internet across India.",
    site: "@technosys",
    creator: "@technosys",
    images: ["/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "Internet Service Provider",
};

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
