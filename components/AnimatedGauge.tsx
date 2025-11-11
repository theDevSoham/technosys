"use client";

import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";

interface AnimatedGaugeProps {
  value: number; // 0–500
  label?: string;
  testing?: boolean;
}

export default function AnimatedGauge({
  value,
  label = "Ready",
  testing,
}: AnimatedGaugeProps) {
  // Motion value for smooth linked animation
  const progress = useMotionValue(0);

  // Map value (0–500) → rotation (-120° to 120°)
  const rotation = useTransform(progress, [0, 500], [-120, 120]);
  // Map value (0–500) → arc path length (0–1)
  const pathLength = useTransform(progress, [0, 500], [0, 1]);

  useEffect(() => {
    // Smoothly animate progress whenever value changes
    animate(progress, value, {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 1.2,
    });
  }, [value, progress]);

  return (
    <div className="relative w-[18rem] max-w-full aspect-2/1 flex items-end justify-center">
      {/* Background semicircle */}
      <svg
        viewBox="0 0 200 100"
        className="absolute top-0 left-0 w-full h-full"
      >
        {/* Background semicircle (rounded ends) */}
        <path
          d="M15,100 A85,85 0 0,1 185,100"
          stroke="url(#arcBg)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          opacity="0.25"
        />

        {/* Foreground arc (animated fill, perfectly rounded ends) */}
        <motion.path
          d="M15,100 A85,85 0 0,1 185,100"
          stroke="url(#arcFill)"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />

        {/* Gradients */}
        <defs>
          <linearGradient id="arcFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient id="arcBg" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B1A78" />
            <stop offset="100%" stopColor="#2E1065" />
          </linearGradient>
        </defs>
      </svg>

      {/* Inner semi-container */}
      <div className="absolute bottom-0 w-[60%] aspect-2/1 bg-[#0B0225]/90 rounded-t-full flex flex-col items-center justify-end shadow-[0_-4px_20px_rgba(168,85,247,0.2)] backdrop-blur-sm">
        <div className="relative flex items-center justify-center">
          {/* Needle (linked to same progress) */}
          <motion.div
            style={{ rotate: rotation }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="origin-bottom absolute bottom-3 left-1/2 w-0.5 h-12 bg-white -translate-x-1/2"
          >
            <div className="absolute bottom-9 left-1/2 w-1.5 h-[18px] bg-linear-to-b from-[#C084FC] to-[#7C3AED] rounded-md -translate-x-1/2 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
          </motion.div>

          <div className="w-6 h-6 bg-white rounded-full z-10 relative shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        </div>

        <div className="text-white text-sm mt-3 sm:text-base md:text-lg select-none">
          {testing ? "Testing..." : label}
        </div>
      </div>
    </div>
  );
}
