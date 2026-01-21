import Ballpit from "./Ballpit";
import RippleGrid from "./RippleGrid"; // Path to the file we updated
import Threads from "./Thread";

const Hero = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[700px]   flex items-center justify-center overflow-hidden">
      {/* LAYER 1: The Background Animation */}
      <div className="absolute inset-0 z-0">
        <Ballpit
          count={80}
          gravity={0.3}
          friction={0.99}
          wallBounce={0.9}
          followCursor={true}
          // These colors are the "React Bits" signature palette:
          colors={[0xffffff, 0x7e22ce, 0x4338ca]}
          ambientColor={0xffffff}
        />
      </div>

      {/* LAYER 2: The Text Content */}
      {/* pointer-events-none allows the mouse to "click through" to the grid for ripples */}
      <div className="relative z-10 text-center px-6 pointer-events-none">
        <h1 className="text-5xl md:text-8xl font-black text-[#613ca5] mb-4 tracking-tight">
          ECO-VENTURES
        </h1>
        <p className="text-lg md:text-xl text-[#ac61e6] max-w-xl mx-auto font-medium">
          Discover breathtaking landscapes and preserve our planet's beauty with
          every step.
        </p>

        {/* Buttons: pointer-events-auto makes them clickable again */}
        <div className="mt-8 flex gap-4 justify-center pointer-events-auto">
          <button className="btn bg-[#8b5cf6] hover:bg-[#7e22ce] text-white border-none rounded-full px-8 shadow-lg hover:scale-105 transition-all">
            Book Adventure
          </button>
          <button className="btn btn-outline border-[#c084fc] text-[#4c1d95] rounded-full px-8 hover:bg-white/50">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
