import { Metadata } from "next";

const metadata: Metadata = {
  title: {
    default: "Services | Technosys - Way to Web",
    template: "%s | Technosys - Way to Web",
  },
  description:
    "Explore Technosys services — from broadband and leased line connectivity to OTT platforms, fiber networks, RIM solutions, and smart surveillance. Experience unmatched speed, reliability, and innovation for homes and enterprises.",
  keywords: [
    "Technosys services",
    "Technosys broadband",
    "leased line provider India",
    "fiber internet services",
    "OTT platform integration",
    "RIM solutions",
    "smart surveillance systems",
    "connectivity solutions",
    "enterprise internet services",
    "Technosys fiber broadband",
  ],
  authors: [{ name: "Technosys" }],
  creator: "Technosys",
  publisher: "Technosys",
  metadataBase: new URL("https://technosysonline.com/"),
  alternates: {
    canonical: "https://technosysonline.com/services",
  },
  openGraph: {
    title: "Services | Technosys - Reliable Internet & Connectivity Solutions",
    description:
      "Technosys offers end-to-end connectivity and technology services including broadband, leased lines, OTT platforms, fiber internet, RIM solutions, and smart surveillance systems for modern enterprises.",
    url: "https://technosysonline.com/services",
    siteName: "Technosys",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 352,
        alt: "Technosys Services - Broadband, Leased Line, Fiber, RIM, Surveillance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technosys Services | Broadband, Fiber & Smart Connectivity",
    description:
      "Discover Technosys services — powering India with enterprise broadband, leased lines, OTT, fiber, RIM, and smart surveillance solutions.",
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

export default metadata;
