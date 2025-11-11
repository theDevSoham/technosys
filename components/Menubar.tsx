"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { theme } from "@/assets/theme";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu as HeadlessMenu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

type MenuBarProps = {
  mobileView?: boolean;
};

const services = ["Internet Setup", "Network Security", "Cloud Hosting"];

const MenuBar: React.FC<MenuBarProps> = ({ mobileView = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  /* -------------------- MOBILE VIEW -------------------- */
  if (mobileView) {
    return (
      <div className="relative block lg:hidden">
        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="transition hover:opacity-80"
          style={{ color: theme.colors.primary[50] }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={32} />}
        </button>

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
                onClick={() => setMenuOpen(false)}
              />

              {/* Dropdown */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="fixed top-[72px] left-0 w-full rounded-t-2xl shadow-lg overflow-hidden z-50"
                style={{
                  backgroundColor: theme.colors.primary[700],
                  color: theme.colors.purple[50],
                }}
              >
                <ul className="flex flex-col divide-y divide-[#393E6D]">
                  {/* Services with subtree */}
                  <li
                    className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors text-center text-lg font-semibold flex items-center justify-center space-x-2"
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                  >
                    <span>Services</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </li>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#2A2F5C] text-sm divide-y divide-[#393E6D]"
                      >
                        {services.map((s) => (
                          <li
                            key={s}
                            className="py-3 cursor-pointer hover:bg-[#393E6D] transition-colors"
                          >
                            {s}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

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

  /* -------------------- DESKTOP VIEW -------------------- */
  return (
    <ul
      className={`flex items-center justify-center space-x-8 rounded-full px-8 py-3 shadow-md ${theme.typography.techno_16_semibold}`}
      style={{
        backgroundColor: theme.colors.primary["800"],
        color: "#FFFFFF",
      }}
    >
      {/* Services Dropdown */}
      <HeadlessMenu as="div" className="relative inline-block text-left">
        <MenuButton className="flex items-center space-x-1 cursor-pointer hover:text-[#7F67E8] transition-colors">
          <span>Services</span>
          <ChevronDown size={16} />
        </MenuButton>

        <Transition
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <MenuItems
            static
            className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl shadow-lg overflow-hidden z-50"
            style={{
              backgroundColor: theme.colors.primary[700],
              color: theme.colors.purple[50],
            }}
            transition
          >
            {services.map((item) => (
              <MenuItem
                key={item}
                as="div"
                className="px-4 py-3 text-sm cursor-pointer data-focus:bg-[#393E6D] data-active:bg-[#393E6D] transition-colors"
              >
                {item}
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </HeadlessMenu>

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
