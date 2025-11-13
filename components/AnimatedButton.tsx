"use client";

import { theme } from "@/assets/theme";
import { motion } from "framer-motion";
import React from "react";

interface AnimatedButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({
  onClick,
  disabled = false,
  loading = false,
  children,
  className = "",
  type = "button",
}: AnimatedButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <motion.button
      onClick={onClick}
      type={type}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      disabled={isDisabled}
      className={`relative flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold shadow-md transition-all cursor-pointer disabled:opacity-60 ${className}`}
      style={{
        background: `linear-gradient(to right, ${theme.colors.pink[600]}, ${theme.colors.red[500]})`,
      }}
    >
      {loading ? (
        <>
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span className="opacity-80">Processing...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
