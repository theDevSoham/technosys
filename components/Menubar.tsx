"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { theme } from "@/assets/theme";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MenuBarProps = {
  mobileView?: boolean;
};

const MenuBar: React.FC<MenuBarProps> = ({ mobileView = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (mobileView) {
    return (
      <div className="relative block lg:hidden">
        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="transition hover:opacity-80"
          style={{
            color: theme.colors.primary[50],
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={32} />}
        </button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenuOpen(false)} // close on overlay click
              />

              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="fixed top-[72px] left-0 w-full rounded-t-2xl shadow-lg overflow-hidden z-50"
                style={{
                  backgroundColor: theme.colors.primary[700],
                  color: theme.colors.purple[50],
                }}
              >
                <ul className="flex flex-col divide-y divide-[#393E6D]">
                  <li className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors text-center text-lg font-semibold">
                    Services
                  </li>
                  <li className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors text-center text-lg font-semibold">
                    Blog
                  </li>
                  <li className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors text-center text-lg font-semibold">
                    My Account
                  </li>
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <ul
      className={`flex items-center justify-center space-x-8 rounded-full px-8 py-3 shadow-md ${theme.typography.techno_16_semibold}`}
      style={{ backgroundColor: theme.colors.primary["800"], color: "#FFFFFF" }}
    >
      {/* Services dropdown */}
      <div className="flex items-center space-x-1 cursor-pointer hover:text-[#7F67E8] transition-colors">
        <span>Services</span>
        <ChevronDown size={16} />
      </div>

      {/* Blog */}
      <div className="cursor-pointer hover:text-[#7F67E8] transition-colors">
        Blog
      </div>

      {/* My Account */}
      <div className="cursor-pointer hover:text-[#7F67E8] transition-colors">
        My Account
      </div>
    </ul>
  );
};

export default MenuBar;
