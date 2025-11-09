import HeroSection from "@/components/page/homepage/HeroSection";
import Latency from "@/components/page/homepage/Latency";
import OurServices from "@/components/page/homepage/OurServices";

export const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <OurServices />
      <Latency />
    </main>
  );
};

export default Home;
