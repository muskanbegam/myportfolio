"use client";

import Image from "next/image";
import { getImgPath } from "@/utils/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-28 lg:pt-32 pb-16">

      {/* GRID BACKGROUND */}
      <canvas
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        width={1600}
        height={900}
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HERO CONTENT */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-3xl flex flex-col gap-6">

          <div>
            <div className="flex items-center gap-6">

              <h1 className="text-4xl md:text-6xl font-bold">
                I'm Muskan
              </h1>

              <div className="w-12 animate-wave origin-[70%_70%]">
                <Image
                  src={getImgPath("/images/home/banner/wave-icon.svg")}
                  alt="wave"
                  width={62}
                  height={62}
                />
              </div>

            </div>

            <h1 className="text-4xl md:text-6xl font-bold">
              Web Developer
            </h1>

          </div>

          <p className="text-secondary text-base md:text-lg max-w-3xl">
            I build clean, modern websites that actually feel like you.
            Simple, aesthetic, and built to work smoothly — no fluff,
            just smart design and solid code.
          </p>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;