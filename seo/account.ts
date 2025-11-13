import { Metadata } from "next";

const metadata: Metadata = {
  title: "My Account | Technosys - Way to web",
  description:
    "Access your Technosys account to view data usage, manage your broadband or leased line plans, monitor performance, and top up instantly. Stay connected with lightning-fast, reliable internet from Technosys.",
  keywords: [
    "Technosys account",
    "internet account dashboard",
    "Technosys broadband",
    "Technosys data usage",
    "Technosys plan top-up",
    "manage Technosys connection",
    "Technosys login",
    "Technosys 1 Gbps plan",
  ],
  openGraph: {
    title: "My Account | Technosys - Way to web",
    description:
      "Monitor your internet usage, manage plans, and upgrade instantly through your Technosys account.",
    url: "https://https://technosysonline.com/account",
    siteName: "Technosys",
    images: [
      {
        url: "Logo.png",
        width: 1200,
        height: 352,
        alt: "Technosys My Account Dashboard",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Account | Technosys - Way to web",
    description:
      "Access your Technosys dashboard — track data usage, manage broadband plans, and top up with ease.",
    images: ["Logo.png"],
    creator: "@technosys_in",
  },
  alternates: {
    canonical: "https://https://technosysonline.com/account",
  },
  metadataBase: new URL("https://https://technosysonline.com/account"),
};

export default metadata;
