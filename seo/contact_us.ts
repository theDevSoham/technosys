import { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact Us | Technosys - Way to Web",
  description:
    "Get in touch with Technosys for any broadband, leased line, or fiber service inquiries. Our team is here to help with support, new connections, and business solutions. Reach out today for lightning-fast connectivity.",
  keywords: [
    "Technosys contact",
    "contact Technosys",
    "Technosys customer support",
    "Technosys broadband help",
    "Technosys leased line support",
    "Technosys office address",
    "Technosys customer care",
    "Technosys phone number",
    "Technosys inquiry",
    "Technosys feedback form",
  ],
  openGraph: {
    title: "Contact Technosys | High-Speed Internet Support",
    description:
      "Have questions or need assistance? Contact Technosys for expert help with broadband, fiber, or business connectivity services.",
    url: "https://technosysonline.com/contact",
    siteName: "Technosys",
    images: [
      {
        url: "Logo.png",
        width: 1200,
        height: 352,
        alt: "Technosys Contact Page Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Technosys | High-Speed Internet Support",
    description:
      "Reach out to Technosys — our support team is ready to assist with broadband, leased line, or enterprise connectivity queries.",
    images: ["Logo.png"],
    creator: "@technosys_in",
  },
  alternates: {
    canonical: "https://technosysonline.com/contact",
  },
  metadataBase: new URL("https://technosysonline.com/contact"),
};

export default metadata;
