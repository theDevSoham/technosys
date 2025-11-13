import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import React from "react";
import StoreButtons from "./StoreButons";

const services = [
  "Leased Line",
  "Broadband Services",
  "OTT Platforms",
  "Fiber Services",
  "Smart Surveillance",
  "Campus Wi-Fi (Hotspot)",
  "Connectivity Solutions",
];

const other_info = [
  "Privacy Policy",
  "Customer Policy",
  "Terms & Conditions",
  "Security and Acceptable Use Policy",
  "Refund & Cancellation Policy",
];

const Footer = () => {
  return (
    <footer
      className="w-full text-white"
      style={{
        background: `linear-gradient(135deg, ${theme.colors.purple[700]} 0%, ${theme.colors.primary[900]} 65%)`,
      }}
    >
      <div className={`${container} lg:py-6 py-6`}>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
          <div>
            <p className={`${theme.typography.techno_20_semibold} mb-6`}>
              About Us
            </p>
            <p className={`${theme.typography.techno_16_reg}`}>
              Technosys is a leading internet service provider, delivering
              high-speed and reliable connectivity through advanced solutions.
              We are committed to meeting the diverse needs of our customers
              with cutting-edge technology and exceptional service.
            </p>
          </div>
          <div>
            <p className={`${theme.typography.techno_20_semibold} mb-6`}>
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((item) => (
                <li key={item} className={`${theme.typography.techno_16_reg}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`${theme.typography.techno_20_semibold} mb-6`}>
              Other Info
            </p>
            <ul className="flex flex-col gap-2">
              {other_info.map((item) => (
                <li key={item} className={`${theme.typography.techno_16_reg}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={`${theme.typography.techno_20_semibold} mb-6`}>
              Get Our App
            </p>
            <p className={`${theme.typography.techno_16_reg} mb-4`}>
              Download our app from your preferred store
            </p>
            <StoreButtons />
          </div>
        </div>

        <div className="border-t border-t-white mt-8 pt-4">
          <p className={`text-center ${theme.typography.techno_14_reg}`}>
            Copyright ©  2025 Technosys
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
