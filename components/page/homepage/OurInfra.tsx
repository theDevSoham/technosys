import React from "react";
import Image from "next/image";
import { container } from "@/assets/container";
import our_infra from "@/content/homepage/our_infra.json";
import { theme } from "@/assets/theme";

const OurInfra = () => {
  return (
    <section
      className="w-full py-20"
      style={{
        color: theme.colors.primary[50],
        background: "radial-gradient(circle at 85% 28%, #0c0627 0%, #000 20%)"
      }}
    >
      <div
        className={`${container} flex flex-col lg:flex-row items-center gap-12`}
      >
        {/* Left content */}
        <div className="flex-2 flex flex-col gap-4">
          {/* Heading */}
          <h2
            className={`${theme.typography.techno_36_semibold} hidden lg:block`}
            style={{ color: theme.colors.white[0] }}
          >
            {our_infra.headline}
          </h2>
          <h2
            className={`${theme.typography.techno_24_semibold} block lg:hidden`}
            style={{ color: theme.colors.white[0] }}
          >
            {our_infra.headline}
          </h2>

          {/* Paragraph */}
          <p
            className={`${theme.typography.techno_16_reg} hidden lg:block`}
            style={{
              color: theme.colors.primary[100],
            }}
          >
            {our_infra.para1}
          </p>
          <p
            className={`${theme.typography.techno_14_reg} block lg:hidden`}
            style={{
              color: theme.colors.primary[100],
            }}
          >
            {our_infra.para1}
          </p>
          <p
            className={`${theme.typography.techno_16_reg} hidden lg:block`}
            style={{
              color: theme.colors.primary[100],
            }}
          >
            {our_infra.para2}
          </p>
          <p
            className={`${theme.typography.techno_14_reg} block lg:hidden`}
            style={{
              color: theme.colors.primary[100],
            }}
          >
            {our_infra.para2}
          </p>

          {/* Cards */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {our_infra.cards.map((item) => (
              <div
                key={item}
                className="border rounded-xl p-4"
                style={{
                  background: `linear-gradient(to bottom right, #1d0e3f 0%, #08051e 60%, #000 80%)`,
                  borderColor: theme.colors.white[0],
                }}
              >
                <p
                  className={`${theme.typography.techno_14_reg}`}
                  style={{
                    color: theme.colors.primary[50],
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/our_services.png"
            alt="Triple-line internet infrastructure illustration"
            className="w-full max-w-md rounded-2xl"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default OurInfra;
