import Graph from "@/components/page/homepage/Graph";
import HeroSection from "@/components/page/homepage/HeroSection";
import Latency from "@/components/page/homepage/Latency";
import OurServices from "@/components/page/homepage/OurServices";

export const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="gradient_bg">
        <OurServices />
        <Latency />
        <Graph />
      </div>
    </main>
  );
};

export default Home;
