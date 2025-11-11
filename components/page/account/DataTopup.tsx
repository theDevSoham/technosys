import { container } from "@/assets/container";
import SectionHeader from "@/components/SectionHeader";
import data_topup from "@/content/account/data_topup.json";
import React from "react";
import { Wifi, Calendar } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

const DataTopup = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className={`${container} lg:py-16 py-10`}>
        <SectionHeader as="h2" text={data_topup.headline} />

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
          {data_topup.top_up_methods.map((item, index) => (
            <div
              key={index}
              className="
                bg-linear-to-b
				from-[#3A2875]
				to-[#060A34]
                rounded-xl
                text-white
                text-center
                py-10
                transition-all
                duration-300
                border
                border-transparent
                hover:border-[#A020F0]
                hover:bg-linear-to-b
                hover:from-[#1A0033]
                hover:to-[#0B001A]
                hover:shadow-[0_0_20px_rgba(160,32,240,0.4)]
                flex flex-col items-center justify-between
              "
            >
              {/* Plan Name */}
              <h3 className="text-lg font-semibold mb-3">{item.name}</h3>

              {/* Price */}
              <p className="text-[#FF007A] text-3xl font-bold mb-6">
                {item.price}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Wifi className="text-lg" />
                  <span>{item.data}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-300">
                  <Calendar className="text-lg" />
                  <span>{item.validity}</span>
                </div>
              </div>

              {/* Button */}
              <AnimatedButton>{data_topup.cta}</AnimatedButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataTopup;
