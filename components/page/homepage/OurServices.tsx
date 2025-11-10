import React from "react";
import our_services from "@/content/homepage/our_services.json";
import ServicesCard from "@/components/ServicesCard";
import { theme } from "@/assets/theme";
import { container } from "@/assets/container";

const OurServices = () => {
  return (
    <section
      className="w-full py-16"
      style={{
        background: `${theme.colors.primary[700]}`,
        color: theme.colors.primary[50],
      }}
    >
      <div
        className={`${container} flex flex-col justify-center items-center gap-8`}
      >
        <div className="w-full" style={{ color: theme.colors.primary[50] }}>
          <h2
            className={`${theme.typography.techno_36_semibold} text-left hidden lg:block`}
            style={{
              color: theme.colors.white[0],
            }}
          >
            {our_services.heading}
          </h2>
          <h2
            className={`${theme.typography.techno_24_semibold} text-left block lg:hidden`}
            style={{
              color: theme.colors.white[0],
            }}
          >
            {our_services.heading}
          </h2>
        </div>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {our_services.card_content.map((item) => (
            <ServicesCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
