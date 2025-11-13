import { theme } from "@/assets/theme";
import Image from "next/image";
import React from "react";

type ServiceCardProps = {
  title: string;
  desc: string;
  icon: string;
};

const ServicesCard: React.FC<ServiceCardProps> = ({ title, desc, icon }) => {
  return (
    <div
      className="w-full min-h-44 lg:min-h-60 rounded-4xl p-6 flex flex-col justify-center lg:items-center items-start shadow-lg border gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
      style={{
        background: `linear-gradient(to bottom right, #1d0f3f 0%, #130a2f 10%, #06041c 40%, #07071e 100%)`,
        color: `${theme.colors.primary[50]}`,
        borderColor: theme.colors.primary[50],
      }}
    >
      <div className="flex justify-start items-center gap-6">
        {/* Icon container */}
        <div
          className="w-15 h-15 rounded-xl flex items-center justify-center backdrop-blur-[1px]"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow:
              "inset 0 1px 3px rgba(255,255,255,0.2), inset 0 -2px 6px rgba(0,0,0,0.3)",
          }}
        >
          <Image src={`/${icon}.svg`} alt={icon} width={32} height={32} />
        </div>

        {/* Title */}
        <div className="flex-1">
          <h3
            className={theme.typography.techno_20_semibold}
            style={{ color: theme.colors.white[0] }}
          >
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className={`${theme.typography.techno_14_reg}`}>{desc}</p>
    </div>
  );
};

export default ServicesCard;
