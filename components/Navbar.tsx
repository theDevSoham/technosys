import { container } from "@/assets/container";
import { theme } from "@/assets/theme";
import Image from "next/image";
import MenuBar from "./Menubar";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ background: `${theme.colors.primary[500]}` }}>
      <div
        className={`${container} flex justify-between items-center py-4 lg:py-3`}
      >
        <div className="lg:w-72 w-60">
          <Link href="/">
            <Image src="/Logo.png" width={300} height={88} alt="Logo image" />
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
