import React from "react";
import { Star, Rocket, Sparkles, Palette, Plane, CloudSun } from "lucide-react";

const DoodleLayer = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 1. ROCKET - Top Right (Visible on Mobile) */}
      <div className="absolute top-[12%] right-[5%] text-[#F2A365] opacity-20 animate-bounce">
        <Rocket className="w-10 h-10 md:w-32 md:h-32" strokeWidth={1.5} />
      </div>

      {/* 2. CLOUDSUN - Top Left (New position for mobile balance) */}
      <div className="absolute top-[10%] left-[5%] text-[#F2A365] opacity-15 animate-pulse">
        <CloudSun className="w-12 h-12 md:w-40 md:h-40" strokeWidth={1} />
      </div>

      {/* 3. PLANE - Mid Left (Peeking behind text) */}
      <div className="absolute top-[35%] left-[-2%] text-[#3D737F] opacity-15 rotate-12">
        <Plane className="w-14 h-14 md:w-28 md:h-28" strokeWidth={1} />
      </div>

      {/* 4. PALETTE - Mid Right (Visible in your screenshot area) */}
      <div className="absolute top-[45%] right-[-2%] text-[#3D737F] opacity-10 -rotate-12">
        <Palette className="w-14 h-14 md:w-24 md:h-24" strokeWidth={1.5} />
      </div>

      {/* 5. STAR - Bottom Right (The one visible in your screenshot) */}
      <div className="absolute bottom-[5%] right-[5%] text-[#F2A365] opacity-30 animate-pulse">
        <Star
          className="w-12 h-12 md:w-28 md:h-28"
          fill="currentColor"
          strokeWidth={0}
        />
      </div>

      {/* 6. SPARKLES - Bottom Left */}
      <div className="absolute bottom-[10%] left-[8%] text-[#F2A365] opacity-30">
        <Sparkles className="w-8 h-8 md:w-16 md:h-16" />
      </div>
    </div>
  );
};

export default DoodleLayer;
