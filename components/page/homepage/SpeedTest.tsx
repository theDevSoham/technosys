"use client";

import { motion } from "framer-motion";
import { JSX, useState } from "react";
import { Download, Upload, Wifi } from "lucide-react";
import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import AnimatedGauge from "@/components/AnimatedGauge";
import AnimatedButton from "@/components/AnimatedButton";

type IconKey = "download" | "upload" | "wifi";

const icons: Record<IconKey, JSX.Element> = {
  download: <Download />,
  upload: <Upload />,
  wifi: <Wifi />,
};

interface SpeedCardItem {
  title: string;
  slug: "download" | "upload" | "ping";
  speed: string;
  icon: IconKey;
  unit: string;
}

interface FaqCards {
  title: string;
  desc: string;
}

interface SpeedTestContent {
  headline: string;
  cta: string;
  cards: SpeedCardItem[];
  faq_cards: FaqCards[];
}

import speed_test_json from "@/content/homepage/speed_test.json" assert { type: "json" };
const speed_test = speed_test_json as SpeedTestContent;

export default function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [speed, setSpeed] = useState({ download: 0, upload: 0, ping: 0 });

  const startTest = () => {
    setTesting(true);
    // Fake animation to simulate test progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setSpeed({
        download: Math.min(progress * 5, 500), // max 500 Mbps
        upload: Math.min(progress * 3, 300), // max 300 Mbps
        ping: Math.max(20 - progress * 0.15, 5), // ping decreases toward 5ms
      });
      if (progress >= 100) {
        clearInterval(interval);
        setTesting(false);
      }
    }, 200);
  };

  return (
    <section className="w-full" style={{ background: "#000" }}>
      <div className={`${container} py-10 flex flex-col gap-6`}>
        <h2
          className={`${theme.typography.techno_36_semibold} hidden lg:block`}
          style={{
            color: theme.colors.white[0],
          }}
        >
          {speed_test.headline}
        </h2>
        <h2
          className={`${theme.typography.techno_24_semibold} block lg:hidden`}
          style={{
            color: theme.colors.white[0],
          }}
        >
          {speed_test.headline}
        </h2>
        <div className="bg-linear-to-br from-[#0b0225] to-[#160a3a] text-white rounded-2xl p-8 md:flex md:space-x-10 items-center shadow-2xl">
          {/* Speed Gauge */}
          <div className="flex flex-col items-center justify-center space-y-4 md:w-1/2">
            <AnimatedGauge
              value={speed.download}
              testing={testing}
              label="Ready"
            />

            <AnimatedButton onClick={startTest} disabled={testing}>
              {speed_test.cta}
            </AnimatedButton>
          </div>

          {/* Results */}
          <div className="flex-1 mt-8 md:mt-0 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {speed_test.cards.map((item) => (
                <SpeedCard
                  key={item.title}
                  icon={icons[item.icon]}
                  label={item.title}
                  value={speed[item.slug]}
                  unit={item.unit}
                />
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {speed_test.faq_cards.map((item) => (
                <InfoBox key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpeedCard({
  icon,
  label,
  value,
  unit,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  unit: string;
}) {
  return (
    <motion.div
      className="bg-[#1b103c] p-4 rounded-xl text-center"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="flex gap-2">
        <div className="flex justify-center mb-2 text-purple-300">{icon}</div>
        <div className={`${theme.typography.techno_20_semibold}`}>{label}</div>
      </div>
      <div className="text-2xl font-bold mt-1">
        {value.toFixed(1)} <span className="text-sm">{unit}</span>
      </div>
    </motion.div>
  );
}

function InfoBox({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      className="bg-[#22164f]/80 p-4 rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-gray-300">{desc}</div>
    </motion.div>
  );
}
