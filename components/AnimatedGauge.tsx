"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface AnimatedGaugeProps {
  value: number; // percentage 0–100
  label?: string;
  testing?: boolean;
}

export default function AnimatedGauge({
  value,
  label = "Ready",
  testing,
}: AnimatedGaugeProps) {
  const controls = useAnimation();

  // Map 0–500 to -120° to 120° for semicircle gauge
  const angle = (value / 500) * 240 - 120;

  useEffect(() => {
    controls.start({ rotate: angle });
  }, [angle, controls]);

  return (
    <div className="relative w-56 h-32 flex items-end justify-center overflow-visible">
      {/* Semi-arc background */}
      <svg
        viewBox="0 0 200 100"
        className="absolute top-0 left-0 w-full h-full"
      >
        <path
          d="M10,100 A90,90 0 0,1 190,100"
          stroke="#4A1D95"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
          opacity="0.2"
        />
        <motion.path
          d="M10,100 A90,90 0 0,1 190,100"
          stroke="#A855F7"
          strokeWidth="15"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: testing ? 1 : 1 }}
          transition={{ duration: 1.2 }}
        />
      </svg>

      {/* Inner circle & needle group */}
      <div className="absolute bottom-0 w-32 h-16 bg-[#0B0225] rounded-t-full flex flex-col items-center justify-end">
        <div className="relative flex items-center justify-center">
          {/* Needle pivoted at bottom center */}
          <motion.div
            animate={controls}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="origin-bottom absolute bottom-3 left-1/2 w-0.5 h-12 bg-white -translate-x-1/2"
            style={{ rotate: -120 }}
          >
            <div className="absolute bottom-9 left-1/2 w-2 h-6 bg-[#A855F7] rounded-md -translate-x-1/2" />
          </motion.div>

          {/* Center hub */}
          <div className="w-6 h-6 bg-white rounded-full z-10 relative" />
        </div>

        {/* Label */}
        <div className="text-white text-sm mt-3">
          {testing ? "Testing..." : label}
        </div>
      </div>
    </div>
  );
}
