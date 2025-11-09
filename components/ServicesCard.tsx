import { theme } from "@/assets/theme";
import { Wifi } from "lucide-react";
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
      className="w-full min-h-44 lg:min-h-56 rounded-4xl p-6 flex flex-col justify-center lg:items-center items-start shadow-lg border gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
      style={{
        background: `linear-gradient(to bottom right, ${theme.colors.purple[800]} 0%, ${theme.colors.primary[800]} 65%)`,
        color: `${theme.colors.primary[50]}`,
        borderColor: theme.colors.primary[50],
      }}
    >
      <div className="flex justify-start items-center gap-6">
        {/* Icon container */}
        <div
          className="w-15 h-15 rounded-lg flex items-center justify-center relative"
          style={{
            background: `linear-gradient(to bottom right, ${theme.colors.purple[800]} 0%, ${theme.colors.primary[800]} 65%)`,
            borderColor: theme.colors.primary[50],
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-80 blur-[2px]"
            style={{
              background: `linear-gradient(145deg, ${theme.colors.primary[50]} 0%, ${theme.colors.purple[600]} 100%)`,
            }}
          />
          <div
            className="relative z-10 flex items-center justify-center w-full h-full rounded-2xl shadow-[inset_2px_2px_6px_rgba(255,255,255,0.05),inset_-2px_-2px_6px_rgba(0,0,0,0.5)]"
            style={{
              background: `linear-gradient(to bottom right, ${theme.colors.purple[800]} 0%, ${theme.colors.primary[800]} 65%)`,
            }}
          >
            <Image src={`/${icon}.svg`} alt={icon} width={32} height={32} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

export default ServicesCard;
