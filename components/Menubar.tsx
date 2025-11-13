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
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuBarProps = {
  mobileView?: boolean;
};

const services = ["Internet Setup", "Network Security", "Cloud Hosting"];

const MenuBar: React.FC<MenuBarProps> = ({ mobileView = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

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

        {/* Drawer */}
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

              {/* Drawer Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm z-50 flex flex-col"
                style={{
                  backgroundColor: theme.colors.primary[800],
                  color: theme.colors.purple[50],
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#393E6D]">
                  <span className="text-lg font-semibold">Menu</span>
                  <button onClick={() => setMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                {/* Menu Items */}
                <ul className="flex-1 flex flex-col divide-y divide-[#393E6D] overflow-y-auto">
                  {/* Services with subtree */}
                  <li
                    className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] flex items-center justify-between transition-colors"
                    onClick={() => setMobileServicesOpen((p) => !p)}
                  >
                    <Link href="/services" className="font-semibold">
                      Services
                    </Link>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
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
                        transition={{ duration: 0.3 }}
                        className="bg-[#2A2F5C] text-sm divide-y divide-[#393E6D]"
                      >
                        {services.map((s) => (
                          <li
                            key={s}
                            className="py-3 pl-10 pr-4 cursor-pointer hover:bg-[#393E6D] transition-colors"
                          >
                            {s}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* <li className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors font-semibold">
                    Blog
                  </li> */}

                  <li
                    className="px-6 py-4 cursor-pointer hover:bg-[#393E6D] transition-colors font-semibold"
                    style={{
                      color:
                        pathname === "/account"
                          ? theme.colors.pink[600]
                          : theme.colors.purple[50],
                    }}
                  >
                    <Link
                      href="https://technosysonline.com/my-account/"
                      onClick={() => setMenuOpen(false)}
                    >
                      My Account
                    </Link>
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
          <Link href="/services">Services</Link>
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
      {/* <div className="cursor-pointer hover:text-[#7F67E8] transition-colors">
        Blog
      </div> */}

      {/* My Account */}
      <div
        className="cursor-pointer hover:text-[#7F67E8] transition-colors"
        style={{
          color: pathname === "/account" ? theme.colors.pink[600] : "",
        }}
      >
        <Link href="https://technosysonline.com/my-account/">My Account</Link>
      </div>
    </ul>
  );
};

export default MenuBar;
