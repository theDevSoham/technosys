import Graph from "@/components/page/homepage/Graph";
import HeroSection from "@/components/page/homepage/HeroSection";
import Latency from "@/components/page/homepage/Latency";
import OurInfra from "@/components/page/homepage/OurInfra";
import OurServices from "@/components/page/homepage/OurServices";
import SpeedTest from "@/components/page/homepage/SpeedTest";

export const Home = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <div className="gradient_bg">
        <OurServices />
        <Latency />
        <Graph />
      </div>
      <OurInfra />
      <SpeedTest />
    </main>
  );
};

export default Home;
