import { theme } from "@/assets/theme";
import Image from "next/image";
import HeroCarousel from "../../HeroCarousel";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full lg:h-[85vh] h-[60vh]">
        <HeroCarousel />
      </div>
    </section>
  );
};

export default HeroSection;
