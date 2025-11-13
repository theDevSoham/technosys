import ContactForm from "@/components/page/contact_us/ContactForm";
import HeroSection from "@/components/page/contact_us/HeroSection";
import Map from "@/components/page/contact_us/Map";
import React from "react";

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
