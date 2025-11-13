import HeroCarousel from "../../HeroCarousel";
import heros from "@/content/services/hero.json";

const HeroSection = () => {
  return (
    <section>
      <div className="relative w-full lg:h-[85vh] h-[60vh]">
        <HeroCarousel heros={heros} showIndicators={false} />
      </div>
    </section>
  );
};

export default HeroSection;
