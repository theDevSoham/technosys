import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import Image from "next/image";
import MenuBar from "./Menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      style={{
        background: `linear-gradient(to right, #000 0%, #170c32 20%, #1d1040 40%, #170c32 80%, #1d1040 90%, #000 100%)`,
      }}
    >
      <div
        className={`${container} flex justify-between items-center py-3 lg:py-2`}
      >
        <div className="lg:w-72 w-60">
          <Link href="/">
            <Image
              src="/Logo.webp"
              width={167}
              height={49}
              alt="Logo image"
              className="lg:w-[200px] w-[150px] aspect-1"
            />
          </Link>
        </div>
        {/* for large view */}
        <div className="hidden lg:block">
          <MenuBar mobileView={false} />
        </div>
        {/* mobile view hamburger */}
        <div className="block lg:hidden">
          <MenuBar mobileView={true} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
