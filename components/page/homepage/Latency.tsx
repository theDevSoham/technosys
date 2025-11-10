import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import Image from "next/image";
import React from "react";
import latency from "@/content/homepage/latency.json";

const Latency = () => {
  return (
    <section className="lg:h-200 h-auto flex flex-col items-center justify-center py-10">
      <div className={`${container} w-full h-full overflow-hidden`}>
        <h2
          className={`${theme.typography.techno_36_semibold} hidden lg:block`}
          style={{
            color: theme.colors.white[0],
          }}
        >
          {latency.heading}
        </h2>
        <h2
          className={`${theme.typography.techno_24_semibold} block lg:hidden`}
          style={{
            color: theme.colors.white[0],
          }}
        >
          {latency.heading}
        </h2>
        <div className="h-8" />
        {/* MOBILE VIEW */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {/* Map Image */}
          <div className="relative w-[300px] h-[420px]">
            <Image
              src="/map.png"
              alt="India Latency Map Mobile"
              fill
              className="object-contain"
            />
          </div>

          {/* Latency boxes */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {latency.top_cards.map((item) => (
              <LatencyBox key={item.id} city={item.location} time={item.ping} />
            ))}

            {latency.bottom_cards.map((item) => (
              <LatencyBox key={item.id} city={item.location} time={item.ping} />
            ))}
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:flex items-center justify-center gap-4 w-full h-full">
          {/* Left latency boxes */}
          <div className="h-full flex gap-4 justify-center items-start">
            {latency.top_cards.map((item) => (
              <LatencyBox key={item.id} city={item.location} time={item.ping} />
            ))}
          </div>

          {/* Map */}
          <div className="relative w-[600px] h-[600px]">
            <Image
              src="/map.png"
              alt="India Latency Map Desktop"
              fill
              className="object-contain"
            />
          </div>

          {/* Right latency boxes */}
          <div className="h-full">
            <div className="h-1/2"></div>
            <div className="h-1/2 flex gap-4 justify-center items-center">
              {latency.bottom_cards.map((item) => (
                <LatencyBox
                  key={item.id}
                  city={item.location}
                  time={item.ping}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function LatencyBox({ city, time }: { city: string; time: string }) {
  return (
    <div
      className="
        relative
        flex flex-col items-center justify-center
        rounded-xl text-center
        backdrop-blur-md
        shadow-[0_0_20px_rgba(255,255,255,0.05)]
        hover:shadow-[0_0_25px_rgba(255,0,128,0.2)]
        hover:scale-105
        transition-all duration-300
        p-6
        overflow-hidden
        cursor-pointer
      "
      style={{
        background: `linear-gradient(to bottom right, ${theme.colors.purple[800]}, ${theme.colors.primary[800]})`,
      }}
    >
      {/* Gradient border layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1px", // border thickness
          background: `linear-gradient(135deg, ${theme.colors.primary[50]} 0%, ${theme.colors.purple[600]} 40%, transparent 70%, transparent 100%)`,
          WebkitMask:
            "linear-gradient(135deg, black 0%, black 70%, transparent 100%) content-box, linear-gradient(135deg, black 0%, black 70%, transparent 100%)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
        }}
      />
      <p
        className={`${theme.typography.techno_36_bold} hidden lg:block`}
        style={{
          color: theme.colors.pink[500],
        }}
      >
        {time}
      </p>
      <p
        className={`${theme.typography.techno_24_bold} block lg:hidden`}
        style={{
          color: theme.colors.pink[500],
        }}
      >
        {time}
      </p>
      <p
        className={`${theme.typography.techno_20_semibold}`}
        style={{
          color: theme.colors.primary[300],
        }}
      >
        {city}
      </p>
    </div>
  );
}

export default Latency;
