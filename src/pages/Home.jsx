import { useEffect, useState } from "react";
import AdventureCard from "../components/Adventurecard";
import RippleGrid from "../components/RippleGrid";
import Hero from "../components/Hero";
import CircularGallery from "@/components/CircularGallery";
import TrueFocus from "@/components/TrueFocus";
const Home = () => {
  const [adventures, setAdventures] = useState([]);

  useEffect(() => {
    fetch("/adventures.json") // This reaches into your public folder
      .then((res) => res.json())
      .then((data) => setAdventures(data));
  }, []);

  return (
    <div>
      <Hero></Hero>
      {/* 2. Adventure Cards Section */}

      <div className="max-w-7xl mx-auto py-12 px-4 ">
        <h2 className="text-3xl font-bold text-center mb-8">
          <TrueFocus
            sentence="Adventure Experiences"
            manualMode={false}
            blurAmount={5}
            borderColor="#5227FF"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
          />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {adventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </div>

      <div className=" " style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={-3}
          textColor="#A855F7"
          borderRadius={0.12}
          scrollEase={0.05}
        />
      </div>
    </div>
  );
};
export default Home;
//<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.15)_0%,transparent_50%)] pointer-events-auto"></div>
