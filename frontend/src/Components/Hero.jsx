import React from "react";
import { Link } from "react-router-dom";
import DoodleLayer from "./DoodleLayer";
import kidsImg from "../assets/hero-kids.png"; // Group of kids with blocks
import doodles from "../assets/doodle1.png"; // Your image_aa8929.png asset

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#FFF9F0] pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-[1] pointer-events-none block">
        <DoodleLayer />
      </div>
      {/* LAYER 1: Background Watermark (Doodles) */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        // style={{
        //   backgroundImage: `url(${doodles})`,
        //   backgroundSize: "600px",
        //   backgroundRepeat: "repeat",
        // }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* LEFT COLUMN: Text Content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-orange-100 rounded-full">
            <span className="text-[#F2A365] font-bold text-sm tracking-wide uppercase">
              Preschool & Child Care
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-[#113B45] leading-[1.1]">
            Welcome To <br />{" "}
            <span className="text-[#F2A365]">Rising Stars !</span>
          </h1>

          <p className="text-[#3D737F] text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            "A Pre-School Which Enlighten Your Kids To Rise Like A Sun And Shine
            Like A Star." Our Foundational Nursery Program For Children Aged 1.8
            To 4 Years Focuses On Laying The Groundwork For Lifelong Learning
            Through Interactive Storytelling, Basic Numeracy, And Language
            Skills, All In A Playful And Supportive Setting.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              to="/contact"
              className="bg-[#F2A365] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-200 hover:scale-105 transition-transform"
            >
              Book A Visit
            </Link>
            <Link
              to="/about"
              className="text-[#3D737F] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
            >
              Learn More ➔
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive "Kids & Playthings" Visual */}
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
          {/* THE PEACH BLOB (Organic Shape) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#F2A365]/20 z-0"
            style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
          ></div>

          {/* MAIN IMAGE: Kids Playing */}
          <img
            src={kidsImg}
            alt="Children playing with blocks"
            className="relative z-10 w-full max-w-xl h-auto drop-shadow-2xl"
          />

          {/* FLOATING ASSETS: Playthings (Blocks, Star, Plane) */}
          {/* These satisfy the "playthings" feedback using absolute positioning */}
          <div className="absolute top-0 right-0 animate-bounce delay-75 z-20 md:block">
            <span className="text-5xl">✈️</span> {/* Replace with PNG asset */}
          </div>
          <div className="absolute bottom-10 left-0 animate-pulse z-20 md:block">
            <span className="text-5xl">⭐️</span> {/* Replace with PNG asset */}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION SEPARATOR: Wave shape */}
      <div className="absolute bottom-0 w-full leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
