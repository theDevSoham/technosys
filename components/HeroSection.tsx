import { theme } from "@/assets/theme";
import Image from "next/image";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full lg:h-[85vh] h-[60vh]">
        <div className="absolute inset-0 w-full h-full z-1">
          <Image
            src="/hero-image.png"
            width={300}
            height={300}
            alt="hero image"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute inset-0 w-full h-full z-2"
          style={{
            color: theme.colors.primary[50],
          }}
        >
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
