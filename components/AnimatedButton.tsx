"use client";

import { theme } from "@/assets/theme";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  onClick,
  disabled = false,
  children,
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled}
      className={`px-8 py-3 rounded-full font-semibold shadow-md disabled:opacity-60 transition-all cursor-pointer ${className}`}
      style={{
        background: `linear-gradient(to right, ${theme.colors.pink[600]}, ${theme.colors.red[500]})`,
      }}
    >
      {children}
    </motion.button>
  );
}
