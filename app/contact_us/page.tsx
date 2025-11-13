import ContactForm from "@/components/page/contact_us/ContactForm";
import HeroSection from "@/components/page/contact_us/HeroSection";
import Map from "@/components/page/contact_us/Map";
import { Metadata } from "next";
import contact_metadata from "@/seo/contact_us";
import React from "react";

export const metadata: Metadata = contact_metadata;

const ContactUs = () => {
  return (
    <main>
      <HeroSection />
      <div className="account_gradient">
        <ContactForm />
        <Map />
      </div>
    </main>
  );
};

export default ContactUs;
