import Graph from "@/components/page/homepage/Graph";
import HeroSection from "@/components/page/homepage/HeroSection";
import Latency from "@/components/page/homepage/Latency";
import OurServices from "@/components/page/homepage/OurServices";

export const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <OurServices />
      <Latency />
      <Graph />
    </main>
  );
};

export default Home;
