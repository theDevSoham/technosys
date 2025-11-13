import React from "react";
import services_metadata from "@/seo/services";
import { Metadata } from "next";
import HeroSection from "@/components/page/services/HeroSection";
import ServicesProvided from "@/components/page/services/ServicesProvided";

export const metadata: Metadata = services_metadata;

const Services = () => {
  return (
    <main>
      <HeroSection />
      <div className="account_gradient">
        <ServicesProvided />
      </div>
    </main>
  );
};

export default Services;
